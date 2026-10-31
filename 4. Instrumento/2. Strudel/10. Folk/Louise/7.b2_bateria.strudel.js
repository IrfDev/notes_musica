setcpm(160 / 3);

/*
Louise, del final del C2 al inicio del C3, para trabajar la batería.

Fuente: 7. Partituras/2. Composiciones/Louise-melancolica.mscz
        guardado 2026-10-31 12:31 · commit fa80a73 (blob 0bf41d8, limpio)
        c.75–100: la segunda mitad del C2, el B2 entero y la primera mitad
        del C3, con su batería. Las notas y los golpes se comprobaron compás
        por compás contra el .musicxml. Las velocidades salen de las marcas
        de la partitura, sin reguladores: para oírlo como MuseScore, el 8.

Para qué
  Probar baterías en este tramo. Violín, guitarra y piano son la partitura y
  no se tocan aquí: lo que se edita es la batería en prueba (4). Lo que se
  quede se escribe a mano en MuseScore; este archivo no vuelve al .mscz.

  Hallazgos abiertos que tocan este tramo: H-02 (energía) y H-03 (el c.82).

Cómo se itera
  - Cambia la batería en 4. Empieza igual a la de la partitura.
  - OIR_PARTITURA = true (en 1) vuelve a la del .mscz, para comparar.
  - MEZCLA (en 1) baja o apaga los demás: la batería sola o al frente.
  - tramo(81, 85) (en 7) repite solo esos compases.

Cómo está armado
  1. Sonido y mezcla          qué suena, a qué volumen y qué batería.
  2. Matices                  dinámicas de la partitura, por compás.
  3. Herramientas             las de 6.melancolica, y recortar() para tramo().
  4. Batería en prueba        la que se edita.
  5. Batería de la partitura  la del .mscz, para comparar. No se edita.
  6. Secciones                una por sección, una entrada por compás.
  7. Forma                    el orden, o un tramo.

Convenciones
  - Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con
    su número y el cifrado de la partitura, para leerla al lado de MuseScore.
  - Todo va en altura real: la guitarra se escribe una octava arriba de como
    suena.
  - Toda comilla es mini-notación. VS Code, al guardar, pasa las comillas
    simples a dobles, así que el código no usa textos de JavaScript: los
    interruptores son true o false, las claves van sin comillas y los
    mensajes de error van en String.raw`…`, lo único que ni Strudel ni el
    formateador tocan.
*/

// ═══════════════════════ 1. Sonido y mezcla ══════════════════════

const SONIDO = {
  arco: "gm_violin", // en todo el tramo el violín va con arco
  guitarra: "gm_acoustic_guitar_nylon",
  piano: "piano",
  kit: "AkaiLinn",
};

// Volumen de cada instrumento: 0 lo apaga
const MEZCLA = { violin: 1, guitarra: 1, piano: 1, bateria: 1 };

// Qué batería suena: false la de 4 (la que editas), true la de 5 (la partitura)
const OIR_PARTITURA = false;

// ═══════════════════════ 2. Matices ══════════════════════
/*
Las velocidades de MuseScore, en MIDI / 127. Una marca vale desde su compás
hasta la siguiente; lo que la partitura no marca suena mf. Los reguladores
(< crescendo, > diminuendo) no se aplican: van anotados al lado.
*/

const MATIZ = { p: 0.39, mp: 0.5, mf: 0.63, f: 0.76, ff: 0.88 };

// Batería: las velocidades de cada golpe, su "dynamics" (% de 90) / 127
const FUERTE = 0.81; // 114 %
const NORMAL = 0.71; // 100 %
const MEDIO = 0.63; // los golpes sin velocidad propia: suenan al mf de MuseScore (80)
const SUAVE = 0.54; // 76 %
const GHOST = 0.27; // 38 %

const DINAMICA = {
  violin: {
    75: MATIZ.mp, // < hasta el 79 · < al final del 82, hasta el f
    83: MATIZ.f,  // escrita al final del 82 · > del 83 al 91
    91: MATIZ.mp, // (la partitura le da la velocidad de p) · < al final del 92, hasta el mf
    93: MATIZ.mf, // escrita al final del 92 · > desde el 98
  },
  guitarra: {
    1: MATIZ.mf,
  },
  piano: {
    73: MATIZ.mp, // viene del c.73 · < hasta el 82
    83: MATIZ.f,  // < del 90 al 91
    90: MATIZ.ff,
    94: MATIZ.mf, // < hasta el 95 · en el 99 hay una dinámica vacía
  },
};

// ═══════════════════════ 3. Herramientas ══════════════════════

// Un mensaje de error, siempre en String.raw`…` (ver Convenciones)
let fallar = (mensaje) => {
  throw new Error(mensaje);
};

// Una entrada por compás → un compás por ciclo
let compases = (lista) => cat(...lista);

// La marca que vale en un compás: la última escrita en él o antes
let vigente = (mapa, compas) =>
  mapa[Math.max(...Object.keys(mapa).map(Number).filter((c) => c <= compas))];

// Un mapa { compás: valor } leído compás por compás, desde `desde` y durante `n`
let marcas = (mapa, desde, n) =>
  cat(...Array.from({ length: n }, (_, i) => vigente(mapa, desde + i)));

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual.
let rasgueo = (pat, gap = 0.01) => {
  let numeradas = pat.withHaps((haps) => {
    let vistas = new Map();
    return haps.map((hap) => {
      let inicio = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = vistas.get(inicio) ?? 0;
      vistas.set(inicio, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numeradas
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  );
};

// ── Secciones ──
// Una sección es un objeto: desde qué compás empieza y una lista por parte
// (violin, guitarra, der, izq), más su batería. La parte que no está, calla.

// Cuántos compases dura una sección; todas sus partes tienen que coincidir
let largo = (sec) => {
  let partes = [sec.violin, sec.guitarra, sec.der, sec.izq].filter(Boolean);
  let largos = [...new Set(partes.map((lista) => lista.length))];
  if (largos.length !== 1) {
    fallar(String.raw`La sección del c.${sec.desde} tiene partes de ${largos} compases`);
  }
  return largos[0];
};

// ── Instrumentos ──

let violin = (sec) =>
  note(compases(sec.violin))
    .sound(SONIDO.arco)
    .velocity(marcas(DINAMICA.violin, sec.desde, largo(sec)))
    .gain(MEZCLA.violin);

// Rasgueada, salvo en las secciones con `rasgueo: false` (acordes en bloque)
let guitarra = (sec) => {
  let notas = note(compases(sec.guitarra));
  return (sec.rasgueo === false ? notas : rasgueo(notas))
    .sound(SONIDO.guitarra)
    .velocity(marcas(DINAMICA.guitarra, sec.desde, largo(sec)))
    .gain(MEZCLA.guitarra);
};

let piano = (sec) =>
  stack(note(compases(sec.der)), note(compases(sec.izq)))
    .sound(SONIDO.piano)
    .velocity(marcas(DINAMICA.piano, sec.desde, largo(sec)))
    .gain(MEZCLA.piano);

// Una línea de batería: el patrón con sus muestras y una velocidad
let golpe = (patron, vel = MEDIO) => s(patron).velocity(vel);

// Las líneas de una sección, con el kit y el volumen de la mezcla
let bateria = (...lineas) => stack(...lineas).bank(SONIDO.kit).gain(MEZCLA.bateria);

// Todo lo que toca una sección
let tocar = (sec) =>
  stack(
    sec.violin ? violin(sec) : silence,
    sec.guitarra ? guitarra(sec) : silence,
    sec.der ? piano(sec) : silence,
    sec.bateria ?? silence,
  );

// Las secciones una tras otra, cada una con sus compases
let forma = (...secciones) => arrange(...secciones.map((sec) => [largo(sec), tocar(sec)]));

// Una sección solo de `desde` a `hasta`. Las partes se cortan por compás, así
// que la primera nota no arrastra la cola del compás anterior
let recortar = (sec, desde, hasta) => {
  let i = desde - sec.desde;
  let n = hasta - desde + 1;
  let corte = (lista) => lista && lista.slice(i, i + n);
  return {
    ...sec,
    desde,
    violin: corte(sec.violin),
    guitarra: corte(sec.guitarra),
    der: corte(sec.der),
    izq: corte(sec.izq),
    bateria: sec.bateria && sec.bateria.ribbon(i, n),
  };
};

// ═══════════════════════ 4. Batería en prueba ══════════════════════
/*
La que se edita. Empieza igual a la de la partitura (5).

Una línea por instrumento y por velocidad: golpe(`<…>`, VELOCIDAD). Dentro de
< > va una entrada por compás, siempre todas: cada columna es un compás y cada
fila, una frase. ~ es un compás callado; [bd ~ bd] reparte el compás en sus
tres tiempos, y [~ [~ bd] ~] pone el golpe en la segunda corchea del 2. Si a
una línea le sobra o le falta una entrada, todo lo que sigue se corre un compás.

Muestras: bd bombo · sd caja · hh oh cr hi-hat cerrado, abierto y crash ·
lt mt ht toms · tb pandereta · cb cencerro · cp palmas · sh shaker
Velocidades: FUERTE · NORMAL · MEDIO · SUAVE · GHOST (en 2)

Para sumar un instrumento o una velocidad, copia una línea y cámbiala.
*/

const PRUEBA = {
  // C2, segunda mitad (c.75–82). Filas: c.75–78 · c.79–82
  c2: bateria(
    // Bombo
    golpe(`<
      [bd ~ bd]  [bd bd bd] [bd bd bd] [bd bd bd]
      [bd bd bd] [bd bd bd] [bd bd bd] ~
    >`, FUERTE),
    // Caja
    golpe(`<
      [~ sd sd] [~ sd sd] [~ sd sd] [~ sd sd]
      [~ sd sd] [~ sd sd] [~ sd sd] ~
    >`, FUERTE),
    // Caja
    golpe(`<
      ~             ~             ~             ~
      ~             ~             ~             [~ [sd sd] ~]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~         [~ oh hh] ~         [~ oh hh]
      [~ oh hh] [~ oh hh] [~ oh hh] ~
    >`, SUAVE),
    // Toms
    golpe(`<
      ~        ~        ~        ~
      ~        ~        ~        [lt ~ ~]
    >`, FUERTE),
    // Toms
    golpe(`<
      ~        ~        ~        ~
      ~        ~        ~        [~ ~ mt]
    >`, MEDIO),
    // Pandereta
    golpe(`<
      [~ tb tb]     [~ tb tb]     [~ tb [~ tb]] [~ tb [~ tb]]
      [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]] ~
    >`, NORMAL),
    // Cencerro
    golpe(`<
      ~         ~         ~         [cb cb ~]
      [cb cb ~] [cb cb ~] [cb cb ~] ~
    >`, MEDIO),
    // Cencerro
    golpe(`<
      [cb ~ ~] [cb ~ ~] [cb ~ ~] [~ ~ cb]
      [~ ~ cb] [~ ~ cb] [~ ~ cb] [cb ~ ~]
    >`, SUAVE),
    // Shaker
    golpe(`<
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] [sh ~ ~] ~
    >`, SUAVE),
  ),

  // B2 (c.83–92). Filas: c.83–84 · c.85–88 · c.89–92
  b2: bateria(
    // Bombo
    golpe(`<
      [bd bd bd]     [bd bd [~ bd]]
      [bd ~ ~]       [bd ~ ~]       [bd ~ ~]       [bd ~ ~]
      [bd ~ ~]       [bd ~ ~]       [bd ~ ~]       ~
    >`, FUERTE),
    // Bombo
    golpe(`<
      ~            ~
      [~ [~ bd] ~] ~            [~ [~ bd] ~] ~
      ~            [~ [~ bd] ~] [~ [~ bd] ~] ~
    >`, MEDIO),
    // Caja
    golpe(`<
      ~              ~
      [[~ sd] ~ sd]  [[~ sd] ~ sd]  [[~ sd] ~ sd]  [[~ sd] ~ sd]
      ~              [[~ sd] ~ sd]  [sd [~ sd] ~]  [sd sd [~ sd]]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~        ~
      ~        ~        ~        ~
      ~        ~        [~ oh ~] ~
    >`, FUERTE),
    // Platillos
    golpe(`<
      [oh hh hh]     ~
      [cr ~ ~]       ~              ~              ~
      ~              [cr ~ [oh hh]] [~ ~ [~ hh]]   ~
    >`, MEDIO),
    // Toms
    golpe(`<
      [ht ~ ~] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, FUERTE),
    // Toms
    golpe(`<
      ~              ~
      ~              ~              ~              ~
      [~ lt [~ mt]]  [~ mt [~ lt]]  ~              [lt mt [~ ht]]
    >`, MEDIO),
    // Pandereta
    golpe(`<
      ~             ~
      [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]]
      ~             [~ tb [~ tb]] [[~ tb] ~ tb] ~
    >`, NORMAL),
    // Pandereta
    golpe(`<
      [tb ~ ~] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, MEDIO),
    // Cencerro
    golpe(`<
      [cb cb ~]     ~
      ~             ~             ~             ~
      [~ cb [~ cb]] ~             ~             ~
    >`, MEDIO),
    // Cencerro
    golpe(`<
      [~ ~ cb] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, SUAVE),
    // Palmas
    golpe(`<
      ~             ~
      [~ cp [~ cp]] [~ cp [~ cp]] [~ cp [~ cp]] [~ cp [~ cp]]
      ~             [~ cp [~ cp]] [[~ cp] ~ cp] ~
    >`, NORMAL),
    // Palmas
    golpe(`<
      [cp ~ ~] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, MEDIO),
    // Shaker
    golpe(`<
      [sh sh ~]      [[sh sh] ~ sh]
      [[sh sh] ~ sh] [[sh sh] ~ sh] [[sh sh] ~ sh] [[sh sh] ~ sh]
      [sh sh [~ sh]] [sh sh [~ sh]] [[sh sh] ~ sh] [sh sh [~ sh]]
    >`, MEDIO),
  ),

  // C3, primera mitad (c.93–100). Filas: c.93–96 · c.97–100
  c3: bateria(
    // Bombo
    golpe(`<
      [bd bd [~ bd]] [bd ~ ~]       [bd ~ ~]       [bd ~ ~]
      [bd ~ ~]       [bd ~ bd]      ~              [bd ~ bd]
    >`, FUERTE),
    // Caja
    golpe(`<
      ~             [~ sd [~ sd]] [~ sd [~ sd]] [~ sd [~ sd]]
      [~ sd [~ sd]] [~ sd [~ sd]] ~             [~ sd ~]
    >`, FUERTE),
    // Caja
    golpe(`<
      ~        ~        ~        ~
      ~        ~        ~        [~ ~ sd]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~        [~ oh ~] ~        ~
      ~        ~        ~        ~
    >`, FUERTE),
    // Platillos
    golpe(`<
      [cr cr [~ cr]] [~ ~ [~ hh]]   ~              ~
      ~              ~              ~              [cr ~ ~]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~             ~             [~ oh [~ hh]] ~
      [~ oh [~ hh]] [~ oh [~ hh]] ~             [~ oh hh]
    >`, SUAVE),
    // Toms
    golpe(`<
      ~              ~              ~              ~
      [lt mt [~ ht]] ~              [lt mt [~ ht]] ~
    >`, FUERTE),
    // Pandereta
    golpe(`<
      ~             ~             ~             ~
      ~             ~             [~ tb [~ tb]] ~
    >`, FUERTE),
    // Pandereta
    golpe(`<
      [[~ tb] ~ tb] ~             ~             ~
      ~             ~             ~             ~
    >`, NORMAL),
    // Cencerro
    golpe(`<
      ~             ~             ~             ~
      ~             ~             ~             [[~ cb] ~ cb]
    >`, MEDIO),
    // Shaker
    golpe(`<
      [sh sh [~ sh]] [sh sh [~ sh]] ~              [sh sh [~ sh]]
      ~              [sh sh [~ sh]] [sh sh [~ sh]] [sh sh sh]
    >`, MEDIO),
    // Shaker
    golpe(`<
      ~        ~        [sh ~ ~] ~
      [sh ~ ~] ~        ~        ~
    >`, SUAVE),
  ),
};

// ═══════════════════════ 5. Batería de la partitura ══════════════════════
/*
La del .mscz, tal cual, para comparar con OIR_PARTITURA = true. No se edita: si
la partitura cambia, se vuelve a transcribir.
*/

const PARTITURA = {
  // C2, c.75–82
  c2: bateria(
    golpe("<[bd ~ bd] [bd bd bd]!6 ~>", FUERTE),
    golpe("<[~ sd sd]!7 ~>", FUERTE),
    golpe("<~!7 [~ [sd sd] ~]>", MEDIO),
    golpe("<~ [~ oh hh] ~ [~ oh hh]!4 ~>", SUAVE),
    golpe("<~!7 [lt ~ ~]>", FUERTE),
    golpe("<~!7 [~ ~ mt]>", MEDIO),
    golpe("<[~ tb tb]!2 [~ tb [~ tb]]!5 ~>", NORMAL),
    golpe("<~!3 [cb cb ~]!4 ~>", MEDIO),
    golpe("<[cb ~ ~]!3 [~ ~ cb]!4 [cb ~ ~]>", SUAVE),
    golpe("<~ [sh ~ ~] ~ [sh ~ ~] ~ [sh ~ ~]!2 ~>", SUAVE),
  ),
  // B2, c.83–92
  b2: bateria(
    golpe("<[bd bd bd] [bd bd [~ bd]] [bd ~ ~]!7 ~>", FUERTE),
    golpe("<~!2 [~ [~ bd] ~] ~ [~ [~ bd] ~] ~!2 [~ [~ bd] ~]!2 ~>", MEDIO),
    golpe("<~!2 [[~ sd] ~ sd]!4 ~ [[~ sd] ~ sd] [sd [~ sd] ~] [sd sd [~ sd]]>", MEDIO),
    golpe("<~!8 [~ oh ~] ~>", FUERTE),
    golpe("<[oh hh hh] ~ [cr ~ ~] ~!4 [cr ~ [oh hh]] [~ ~ [~ hh]] ~>", MEDIO),
    golpe("<[ht ~ ~] ~!9>", FUERTE),
    golpe("<~!6 [~ lt [~ mt]] [~ mt [~ lt]] ~ [lt mt [~ ht]]>", MEDIO),
    golpe("<~!2 [~ tb [~ tb]]!4 ~ [~ tb [~ tb]] [[~ tb] ~ tb] ~>", NORMAL),
    golpe("<[tb ~ ~] ~!9>", MEDIO),
    golpe("<[cb cb ~] ~!5 [~ cb [~ cb]] ~!3>", MEDIO),
    golpe("<[~ ~ cb] ~!9>", SUAVE),
    golpe("<~!2 [~ cp [~ cp]]!4 ~ [~ cp [~ cp]] [[~ cp] ~ cp] ~>", NORMAL),
    golpe("<[cp ~ ~] ~!9>", MEDIO),
    golpe("<[sh sh ~] [[sh sh] ~ sh]!5 [sh sh [~ sh]]!2 [[sh sh] ~ sh] [sh sh [~ sh]]>", MEDIO),
  ),
  // C3, c.93–100
  c3: bateria(
    golpe("<[bd bd [~ bd]] [bd ~ ~]!4 [bd ~ bd] ~ [bd ~ bd]>", FUERTE),
    golpe("<~ [~ sd [~ sd]]!5 ~ [~ sd ~]>", FUERTE),
    golpe("<~!7 [~ ~ sd]>", MEDIO),
    golpe("<~ [~ oh ~] ~!6>", FUERTE),
    golpe("<[cr cr [~ cr]] [~ ~ [~ hh]] ~!5 [cr ~ ~]>", MEDIO),
    golpe("<~!2 [~ oh [~ hh]] ~ [~ oh [~ hh]]!2 ~ [~ oh hh]>", SUAVE),
    golpe("<~!4 [lt mt [~ ht]] ~ [lt mt [~ ht]] ~>", FUERTE),
    golpe("<~!6 [~ tb [~ tb]] ~>", FUERTE),
    golpe("<[[~ tb] ~ tb] ~!7>", NORMAL),
    golpe("<~!7 [[~ cb] ~ cb]>", MEDIO),
    golpe("<[sh sh [~ sh]]!2 ~ [sh sh [~ sh]] ~ [sh sh [~ sh]]!2 [sh sh sh]>", MEDIO),
    golpe("<~!2 [sh ~ ~] ~ [sh ~ ~] ~!3>", SUAVE),
  ),
};

const BATERIA = OIR_PARTITURA ? PARTITURA : PRUEBA;

// ═══════════════════════ 6. Secciones ══════════════════════

// ─────────────────────── C2, segunda mitad (c.75–82) ───────────────────────
/*
El coro 1 con otro violín. El piano cambia el bajo del c.76 (Si2) y los
c.80–82 (Gmaj13 · A7 · E♭7): el c.82 pone E♭7 donde el coro habría cerrado
en D, y la guitarra calla en él.
*/

const C2 = {
  desde: 75,
  violin: [
    "[E4@2 C#4]", // c.75     Em
    "D4", // c.76     G
    "[E4@4 F#4 G4@3 A4@4]", // c.77     F#m7
    "[B4 F#4]", // c.78     Bm
    "[[E4,G4]@2 [B3,B4]]", // c.79     Em
    "[D4,G4,E5]", // c.80     Gmaj13
    "[[F#4,C#5]@2 [A4,E5]@3 [E4,C#5]]", // c.81     A7
    "[G4,Eb5]", // c.82     Eb7
  ],
  guitarra: [
    "[E2,B2,E3,G3,B3,E4]", // c.75     Em
    "[G2,B2,G3,B3]", // c.76     G
    "[F#2,A2,F#3,A3]", // c.77     F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.78     Bm
    "[E2,B2,E3,G3,B3,E4]", // c.79     Em
    "[G2,B2,G3,B3]", // c.80     Gmaj13
    "[A2,C#3,E4,A4,E5]", // c.81     A7
    "~", // c.82     Eb7
  ],
  der: [
    "[~ [E4,E5] [E4,E5]]", // c.75     Em
    "[~ [D4,B4] [D4,B4]]", // c.76     G
    "[~ [E4,A4] [E4,A4]]", // c.77     F#m7
    "[D4,F#4]", // c.78     Bm
    "[~ G4 G4]", // c.79     Em
    "[~ [E4,D5] [F#4,D5]]", // c.80     Gmaj13
    "[~@2 [G4,C#5]@3 [A4,E5]]", // c.81     A7
    "[Bb4,Eb5]", // c.82     Eb7
  ],
  izq: [
    "[[E2,E3] E3 E3]", // c.75     Em
    "[[B2,G3] G3 G3]", // c.76     G
    "[[F#2,F#3] F#3 F#3]", // c.77     F#m7
    "[[[B2,B3] ~@2], B3]", // c.78     Bm
    "[[E2,E3] [E3,B3] [E3,B3]]", // c.79     Em
    "[[G2,F#3] [E3,G3] [F#3,B3]]", // c.80     Gmaj13
    "[[A2,E3]@2 [C#3,E3]@3 [C#3,E3]]", // c.81     A7
    "[[Eb2,Db3]@4 Bb3 G3]", // c.82     Eb7
  ],
  bateria: BATERIA.c2,
};

// ─────────────────────── B2 (c.83–92) ───────────────────────
/*
La armadura pasa a un bemol. La guitarra deja el rasgueo: acordes en bloque
desde el c.85.
*/

const B2 = {
  desde: 83,
  violin: [
    "[[D4,A4]@5 [F4,D5]]", // c.83     Dm
    "[[D4,F5] [F4,D5]]", // c.84     Dm
    "[Bb3,Bb4,G5]", // c.85     Gm
    "[C4,A4,E5]", // c.86     Am
    "[[C4,G4,F5]@2 [F4,C5,F5]]", // c.87     Csus4
    "[[G4,D5]@2 [D4,B4]@3 [B3,G4]]", // c.88     G7
    "[[C4,G4]@2 [E4,C5]]", // c.89     C7
    "[[F4,C5,F5] [G4,D5,F5] [A4,Eb5,A5]]", // c.90     F · F7
    "[[Bb4,F5,Bb5]@2 [F4,G5]]", // c.91     Bb
    "[A4,F#5]", // c.92     D
  ],
  guitarra: [
    "~", // c.83     Dm
    "~", // c.84     Dm
    "[~@2 [G2,D3,Bb3]@3 [G2,D3,Bb3]]", // c.85     Gm
    "[~@2 [A2,E3,C4]@3 [A2,E3,C4]]", // c.86     Am
    "[~@2 [C3,F3,Bb3]@3 [C3,F3,Bb3]]", // c.87     Csus4
    "[~@2 [D3,G3,D4]@3 [D3,G3,D4]]", // c.88     G7
    "[[C3,G3,E4] [E3,Bb3,E4]]", // c.89     C7
    "[[F3,C4]@2 [A3,F4]@3 [Eb4,A4]]", // c.90     F · F7
    "[D3,Bb3,D4,F4,Bb4]", // c.91     Bb
    "[[D3,A3,F#4] [D3,A3,F#4]]", // c.92     D
  ],
  der: [
    "[[A4,F5] [G4,E5]@2 [F4,D5]]", // c.83     Dm
    "[[D4,A4] [F4,D5]]", // c.84     Dm
    "[G4 Bb4 D5@3 D5]", // c.85     Gm
    "[E5 A4@3 F4 A4]", // c.86     Am
    "[C5 F4 [G4,F5]@3 [F4,C5]]", // c.87     Csus4
    "[[G4,D5] [B4,F5]@3 D5 B4]", // c.88     G7
    "[C5 G4 E4]", // c.89     C7
    "[F4@2 [A4,F5]@3 [A4,A5]]", // c.90     F · F7
    "[[D4,Bb4,Bb5]@3 [F4,Bb4,Bb5] [F4,Bb4,Bb5]@2]", // c.91     Bb
    "[[F#4,D5,A5]@2 G4 B4 D5 F#5]", // c.92     D
  ],
  izq: [
    "[D2,D3,A3]", // c.83     Dm
    "[[D2,F3] [A2,D3]]", // c.84     Dm
    "[[G2,D3]@2 [D3,G3]@3 [D3,G3]]", // c.85     Gm
    "[[C3,A3] [E3,A3]@3 [A2,E3]@2]", // c.86     Am
    "[[C3,G3]@2 [F2,C3]@3 [C3,G3]]", // c.87     Csus4
    "[[G2,G3]@2 [F2,F3]@3 [G2,F3]]", // c.88     G7
    "[[C3,Bb3] [C3,G3] [C3,E3]]", // c.89     C7
    "[[F2,F3,A3]@4 ~ [A2,Eb3,A3]]", // c.90     F · F7
    "[Bb2,F3,C4]", // c.91     Bb
    "[[D2,A3]@5 [D2,F#3]]", // c.92     D
  ],
  rasgueo: false,
  bateria: BATERIA.b2,
};

// ─────────────────────── C3, primera mitad (c.93–100) ───────────────────────
/*
Vuelve a Re mayor. El coro 1 con otro violín, que canta esta mitad; la
guitarra calla en el c.96. Cierra en A7 → D (c.99–100).
*/

const C3 = {
  desde: 93,
  violin: [
    "[B3,G4,E5]", // c.93     Em
    "[[G4,D5] F#4 G4]", // c.94     G
    "[A4@2 C#4@3 D4]", // c.95     F#m7
    "[[D4,F#4]@2 [D4,B4]@3 [F#4,D5]]", // c.96     Bm
    "[G4,E5]", // c.97     Em
    "[[G4,D5] F#4 G4]", // c.98     G
    "[A4 C#4 E4]", // c.99     A7
    "[F#4 E4 D4@2 F#4@2]", // c.100    D
  ],
  guitarra: [
    "[E2,B2,E3,G3,B3,E4]", // c.93     Em
    "[G2,B2,G3,B3]", // c.94     G
    "[F#2,A2,F#3,A3]", // c.95     F#m7
    "~", // c.96     Bm
    "[E2,B2,E3,G3,B3,E4]", // c.97     Em
    "[G2,B2,G3,B3]", // c.98     G
    "[A2,C#3,E4,A4,E5]", // c.99     A7
    "[~ [A3,D4,F#4,A4] [A3,D4,F#4,A4]]", // c.100    D
  ],
  der: [
    "[[G4,E5,G5] E4 E4]", // c.93     Em
    "[~ G4 G4]", // c.94     G
    "[~ F#4 F#4]", // c.95     F#m7
    "[~@2 [B4,F#5]@3 [F#4,B4,F#5]]", // c.96     Bm
    "[~ E4 E4]", // c.97     Em
    "[~ G4 G4]", // c.98     G
    "[~@2 A4@3 A4]", // c.99     A7
    "~", // c.100    D
  ],
  izq: [
    "[[E2,E3] ~@2]", // c.93     Em
    "[G3 ~@2]", // c.94     G
    "[F#3 ~@2]", // c.95     F#m7
    "[[B2 ~@2], B3]", // c.96     Bm
    "[E3 ~@2]", // c.97     Em
    "[G2 G3 G3]", // c.98     G
    "[A2@2 E3@3 E3]", // c.99     A7
    "[[D2 ~@2], D3]", // c.100    D
  ],
  bateria: BATERIA.c3,
};

// ═══════════════════════ 7. Forma ══════════════════════

const TRAMO = [C2, B2, C3];

// Unos compases sueltos, en bucle: tramo(81, 85) va del c.81 al c.85
let tramo = (desde, hasta) => {
  let inicio = TRAMO[0].desde;
  let fin = inicio + TRAMO.reduce((n, sec) => n + largo(sec), 0) - 1;
  if (desde < inicio || hasta > fin || desde > hasta) {
    fallar(String.raw`tramo: este archivo va del c.${inicio} al c.${fin}`);
  }
  let partes = TRAMO.filter((sec) => sec.desde <= hasta && sec.desde + largo(sec) > desde).map((sec) =>
    recortar(sec, Math.max(desde, sec.desde), Math.min(hasta, sec.desde + largo(sec) - 1)),
  );
  return forma(...partes);
};

forma(...TRAMO);

// Para trabajar un pedazo, cambia la línea de arriba. Todo suena en bucle:
//   tramo(81, 85)   la entrada al B2
//   tramo(90, 94)   la salida, del F al c.94
//   tocar(B2)       una sección sola
//   forma(B2, C3)   dos secciones
