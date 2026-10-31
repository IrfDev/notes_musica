setcpm(160 / 3);

/*
Louise, el C3: para producir. Con el final de la sección anterior y el
inicio de la siguiente, para oír cómo entra y cómo sale.

Fuente: 7. Partituras/2. Composiciones/Louise-melancolica.mscz
        guardado 2026-10-31 12:31 · commit fa80a73 (blob 0bf41d8, limpio)
        c.88–111: B2, segunda mitad (c.88–92), C3 (c.93–108) y Outro, primera mitad (c.109–111).
        Notas, golpes y velocidades comprobados contra el .musicxml y contra
        el MIDI que exporta MuseScore, que es lo que suena.

Para qué
  Probar dinámicas, batería, sonidos y efectos. Todo está escrito compás por
  compás, aunque se repita: nada sale de una función ni de otra sección. Si
  cambias un compás, cambia solo ese. Lo que se quede se pasa a mano a
  MuseScore; este archivo no vuelve al .mscz.

Dónde se mueve cada cosa
  - Dinámicas: en cada sección, `dinamica`, una velocidad por compás y por
    instrumento (0–127, como en MuseScore).
  - Batería: en cada sección, `bateria`, una columna por compás.
  - Sonidos: SONIDO (en 1), y `tecnica` en cada sección para el violín.
  - Efectos: EFECTOS (en 1): reverb, eco y paneo por instrumento.
  - Volumen: MEZCLA y KIT (en 1).

Cómo se escucha
  forma(...TRAMO) al final toca todo en bucle; tramo(91, 95) repite
  solo esos compases, y tocar(...) una sección sola.

Lo que MuseScore toca y aquí no
  - La reverb: MuseScore manda 0.3 de cada pista, menos del piano, a su
    reverb. Aquí EFECTOS empieza en 0.
  - Los sonidos: MuseScore usa MS Basic; aquí son General MIDI y el kit
    AkaiLinn.
  - Los cifrados ya no: sus pistas están silenciadas en el mezclador.

Cómo está armado
  1. Sonido, mezcla y efectos   qué suena, a qué volumen y con qué efectos.
  2. Batería                    las velocidades de los golpes.
  3. Herramientas               las funciones que tocan las secciones.
  4. Secciones                  una por sección: notas, dinámica y batería.
  5. Forma                      el orden, o un tramo.

Convenciones
  - Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con
    su número y el cifrado de la partitura, para leerla al lado de MuseScore.
  - Todo va en altura real: la guitarra se escribe una octava arriba de como
    suena.
  - Una nota ligada a la barra va en ligar(semicorcheas, "…"): suena hasta el
    compás siguiente, que lleva silencio ahí.
  - Toda comilla es mini-notación. VS Code, al guardar, pasa las comillas
    simples a dobles, así que el código no usa textos de JavaScript: los
    interruptores son true o false, las claves van sin comillas y los
    mensajes de error van en String.raw`…`, lo único que ni Strudel ni el
    formateador tocan.
*/

// ═══════════════════════ 1. Sonido, mezcla y efectos ══════════════════════

const SONIDO = {
  arco: "gm_violin",
  pizz: "gm_pizzicato_strings",
  guitarra: "gm_acoustic_guitar_nylon",
  piano: "piano",
  kit: "AkaiLinn",
};

// Volumen de cada instrumento: 0 lo apaga. Copia el mezclador de MuseScore,
// donde todo va a +12 dB salvo la guitarra, a +6: 10^(−6/20) = 0.5
const MEZCLA = { violin: 1, guitarra: 0.5, piano: 1, bateria: 1 };

// Dentro de la batería, por muestra; la que no está, a 1. El shaker va a
// +1.3 dB: 10^(−10.7/20) = 0.29
const KIT = { sh: 0.29 };

// Efectos de cada instrumento. Así como están no cambian nada:
//   room   reverb, de 0 a 1
//   delay  eco, de 0 a 1
//   pan    0 izquierda, 0.5 centro, 1 derecha
//   orbit  cada instrumento va por su lado, para que la reverb y el eco de
//          uno no pisen los del otro
const EFECTOS = {
  violin: { room: 0, delay: 0, pan: 0.5, orbit: 1 },
  guitarra: { room: 0, delay: 0, pan: 0.5, orbit: 2 },
  piano: { room: 0, delay: 0, pan: 0.5, orbit: 3 },
  bateria: { room: 0, delay: 0, pan: 0.5, orbit: 4 },
};

// Cada cuerda de un acorde arpegiado entra 0.71 semicorcheas después de la
// anterior, como en MuseScore
const ARPEGIO = 0.71 / 12;

// ═══════════════════════ 2. Batería ══════════════════════

// La velocidad de cada golpe, la que muestra Propiedades en MuseScore
const FUERTE = 103;
const NORMAL = 90;
const MEDIO = 80; // la de los golpes sin velocidad propia
const SUAVE = 68;
const GHOST = 34;

// ═══════════════════════ 3. Herramientas ══════════════════════

// Un mensaje de error, siempre en String.raw`…` (ver Convenciones)
let fallar = (mensaje) => {
  throw new Error(mensaje);
};

// Una entrada por compás → un compás por ciclo
let compases = (lista) => cat(...lista);

// Una velocidad MIDI por compás → la escala de Strudel (0–1)
let velocidades = (lista) => cat(...lista).div(127);

// Ligadura por encima de la barra: lo que sigue sonando al final del compás
// dura `semis` semicorcheas más. El compás siguiente lleva silencio ahí.
let ligar = (semis, compas) =>
  reify(compas).withHap((hap) =>
    hap.whole.end.eq(hap.whole.begin.sam().add(1))
      ? new Hap(new TimeSpan(hap.whole.begin, hap.whole.end.add(Fraction(semis).div(12))), hap.part, hap.value, hap.context)
      : hap,
  );

// Acordes arpegiados, como los toca MuseScore: en cada acorde, la nota i (de
// grave a aguda) entra i × gap después y termina con las demás. Las notas
// sueltas suenan tal cual.
let arpegio = (pat, gap) => {
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
        .late(i * gap)
        .withHaps((haps) =>
          haps.flatMap((hap) => {
            let fin = hap.whole.end.sub(i * gap);
            return hap.part.begin.gte(fin)
              ? []
              : [new Hap(new TimeSpan(hap.whole.begin, fin), new TimeSpan(hap.part.begin, hap.part.end.min(fin)), hap.value, hap.context)];
          }),
        ),
    ),
  );
};

// ── Secciones ──
// Una sección es un objeto: desde qué compás empieza, el sonido del violín,
// si la guitarra arpegia, una lista por parte (violin, guitarra, der, izq),
// una lista de velocidades por instrumento y su batería.

// Cuántos compases dura una sección; todas sus listas tienen que coincidir
let largo = (sec) => {
  let listas = [sec.violin, sec.guitarra, sec.der, sec.izq, sec.dinamica.violin, sec.dinamica.guitarra, sec.dinamica.piano];
  let largos = [...new Set(listas.map((lista) => lista.length))];
  if (largos.length !== 1) {
    fallar(String.raw`La sección del c.${sec.desde} tiene listas de ${largos} compases`);
  }
  return largos[0];
};

// ── Instrumentos ──

let efectos = (pat, e) => pat.room(e.room).delay(e.delay).pan(e.pan).orbit(e.orbit);

let violin = (sec) =>
  efectos(note(compases(sec.violin)), EFECTOS.violin)
    .sound(sec.tecnica)
    .velocity(velocidades(sec.dinamica.violin))
    .gain(MEZCLA.violin);

// Arpegiada, salvo en las secciones con `arpegio: false` (acordes en bloque)
let guitarra = (sec) => {
  let notas = note(compases(sec.guitarra));
  return efectos(sec.arpegio ? arpegio(notas, ARPEGIO) : notas, EFECTOS.guitarra)
    .sound(SONIDO.guitarra)
    .velocity(velocidades(sec.dinamica.guitarra))
    .gain(MEZCLA.guitarra);
};

let piano = (sec) =>
  efectos(stack(note(compases(sec.der)), note(compases(sec.izq))), EFECTOS.piano)
    .sound(SONIDO.piano)
    .velocity(velocidades(sec.dinamica.piano))
    .gain(MEZCLA.piano);

// Una línea de batería: el patrón con sus muestras y una velocidad MIDI
let golpe = (patron, vel = MEDIO) => s(patron).velocity(vel / 127);

// Las líneas de una sección, con el kit, el volumen de la mezcla y los efectos
let bateria = (...lineas) =>
  efectos(stack(...lineas), EFECTOS.bateria)
    .bank(SONIDO.kit)
    .withValue((v) => ({ ...v, gain: MEZCLA.bateria * (KIT[v.s] ?? 1) }));

// Todo lo que toca una sección
let tocar = (sec) => stack(violin(sec), guitarra(sec), piano(sec), sec.bateria);

// Las secciones una tras otra, cada una con sus compases
let forma = (...secciones) => arrange(...secciones.map((sec) => [largo(sec), tocar(sec)]));

// Una sección solo de `desde` a `hasta`. Las listas se cortan por compás, así
// que la primera nota no arrastra la cola del compás anterior
let recortar = (sec, desde, hasta) => {
  let i = desde - sec.desde;
  let n = hasta - desde + 1;
  let corte = (lista) => lista.slice(i, i + n);
  return {
    ...sec,
    desde,
    violin: corte(sec.violin),
    guitarra: corte(sec.guitarra),
    der: corte(sec.der),
    izq: corte(sec.izq),
    dinamica: {
      violin: corte(sec.dinamica.violin),
      guitarra: corte(sec.dinamica.guitarra),
      piano: corte(sec.dinamica.piano),
    },
    bateria: sec.bateria.ribbon(i, n),
  };
};

// ═══════════════════════ 4. Secciones ══════════════════════

// ─────────────────────── B2, segunda mitad (c.88–92) ───────────────────────
/*
Suenan violín, guitarra, piano y batería.
El violín va con arco.
La guitarra toca sus acordes en bloque, sin arpegio.
*/

const B2 = {
  desde: 88,
  tecnica: SONIDO.arco, // el sonido del violín
  arpegio: false, // la guitarra arpegia sus acordes
  violin: [
    "[[G4,D5]@2 [D4,B4]@3 [B3,G4]]",       // c.88   G7
    "[[C4,G4]@2 [E4,C5]]",                 // c.89   C7
    "[[F4,C5,F5] [G4,D5,F5] [A4,Eb5,A5]]", // c.90   F · F7
    "[[Bb4,F5,Bb5]@2 [F4,G5]]",            // c.91   Bb
    "[A4,F#5]",                            // c.92   D
  ],
  guitarra: [
    "[~@2 [D3,G3,D4]@3 [D3,G3,D4]]",  // c.88   G7
    "[[C3,G3,E4] [E3,Bb3,E4]]",       // c.89   C7
    "[[F3,C4]@2 [A3,F4]@3 [Eb4,A4]]", // c.90   F · F7
    "[D3,Bb3,D4,F4,Bb4]",             // c.91   Bb
    "[[D3,A3,F#4] [D3,A3,F#4]]",      // c.92   D
  ],
  der: [
    "[[G4,D5] [B4,F5]@3 D5 B4]",                    // c.88   G7
    "[C5 G4 E4]",                                   // c.89   C7
    "[F4@2 [A4,F5]@3 [A4,A5]]",                     // c.90   F · F7
    "[[D4,Bb4,Bb5]@3 [F4,Bb4,Bb5] [F4,Bb4,Bb5]@2]", // c.91   Bb
    "[[F#4,D5,A5]@2 G4 B4 D5 F#5]",                 // c.92   D
  ],
  izq: [
    "[[G2,G3]@2 [F2,F3]@3 [G2,F3]]", // c.88   G7
    "[[C3,Bb3] [C3,G3] [C3,E3]]",    // c.89   C7
    "[[F2,F3,A3]@4 ~ [A2,Eb3,A3]]",  // c.90   F · F7
    "[Bb2,F3,C4]",                   // c.91   Bb
    "[[D2,A3]@5 [D2,F#3]]",          // c.92   D
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      "[77@2 74@3 70]", // c.88
      "[68@2 62]",      // c.89
      "[60 57 54]",     // c.90
      50,               // c.91
      49,               // c.92
    ],
    guitarra: [
      80, // c.88
      80, // c.89
      80, // c.90
      80, // c.91
      80, // c.92
    ],
    piano: [
      112,                 // c.88
      112,                 // c.89
      "[112@2 114@3 122]", // c.90
      "[124 127]",         // c.91
      127,                 // c.92
    ],
  },
  // Batería. Una columna por compás; filas: c.88 · c.89–92
  bateria: bateria(
    // Bombo
    golpe(`<
      [bd ~ ~]
      [bd ~ ~] [bd ~ ~] [bd ~ ~] ~
    >`, FUERTE),
    // Bombo
    golpe(`<
      ~
      ~            [~ [~ bd] ~] [~ [~ bd] ~] ~
    >`, MEDIO),
    // Caja
    golpe(`<
      [[~ sd] ~ sd]
      ~              [[~ sd] ~ sd]  [sd [~ sd] ~]  [sd sd [~ sd]]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~
      ~        ~        [~ oh ~] ~
    >`, FUERTE),
    // Platillos
    golpe(`<
      ~
      ~              [cr ~ [oh hh]] [~ ~ [~ hh]]   ~
    >`, MEDIO),
    // Toms
    golpe(`<
      ~
      [~ lt [~ mt]]  [~ mt [~ lt]]  ~              [lt mt [~ ht]]
    >`, MEDIO),
    // Pandereta
    golpe(`<
      [~ tb [~ tb]]
      ~             [~ tb [~ tb]] [[~ tb] ~ tb] ~
    >`, NORMAL),
    // Cencerro
    golpe(`<
      ~
      [~ cb [~ cb]] ~             ~             ~
    >`, MEDIO),
    // Palmas
    golpe(`<
      [~ cp [~ cp]]
      ~             [~ cp [~ cp]] [[~ cp] ~ cp] ~
    >`, NORMAL),
    // Shaker
    golpe(`<
      [[sh sh] ~ sh]
      [sh sh [~ sh]] [sh sh [~ sh]] [[sh sh] ~ sh] [sh sh [~ sh]]
    >`, MEDIO),
  ),
};

// ─────────────────────── C3 (c.93–108) ─────────────────────────────────────
/*
Suenan violín, guitarra, piano y batería.
El violín va con arco.
La guitarra arpegia sus acordes, como MuseScore.
*/

const C3 = {
  desde: 93,
  tecnica: SONIDO.arco, // el sonido del violín
  arpegio: true, // la guitarra arpegia sus acordes
  violin: [
    "[B3,G4,E5]",                      // c.93   Em
    "[[G4,D5] F#4 G4]",                // c.94   G
    "[A4@2 C#4@3 D4]",                 // c.95   F#m7
    "[[D4,F#4]@2 [D4,B4]@3 [F#4,D5]]", // c.96   Bm
    "[G4,E5]",                         // c.97   Em
    "[[G4,D5] F#4 G4]",                // c.98   G
    "[A4 C#4 E4]",                     // c.99   A7
    "[F#4 E4 D4@2 F#4@2]",             // c.100  D
    "[B3,G4]",                         // c.101  Em
    "[G4 B4 D5]",                      // c.102  G
    "[F#4@2 G4@3 A4]",                 // c.103  F#m7
    "[D4,B4]",                         // c.104  Bm
    "[B4@2 A4@3 E4]",                  // c.105  Em
    "[D5 B4 G4]",                      // c.106  G
    "[E4 G4 A4@2 C#5@2]",              // c.107  A7
    "[F#4,D5]",                        // c.108  D
  ],
  guitarra: [
    "[E2,B2,E3,G3,B3,E4]",               // c.93   Em
    "[G2,B2,G3,B3]",                     // c.94   G
    "[F#2,A2,F#3,A3]",                   // c.95   F#m7
    "~",                                 // c.96   Bm
    "[E2,B2,E3,G3,B3,E4]",               // c.97   Em
    "[G2,B2,G3,B3]",                     // c.98   G
    "[A2,C#3,E4,A4,E5]",                 // c.99   A7
    "[~ [A3,D4,F#4,A4] [A3,D4,F#4,A4]]", // c.100  D
    "[E2,B2,E3,G3,B3,E4]",               // c.101  Em
    "[G2,B2,G3,B3]",                     // c.102  G
    "[F#2,A2,F#3,A3]",                   // c.103  F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.104  Bm
    "[E2,B2,E3,G3,B3,E4]",               // c.105  Em
    "[G2,B2,G3,B3]",                     // c.106  G
    "[A2,C#3,E4,A4,E5]",                 // c.107  A7
    "~",                                 // c.108  D
  ],
  der: [
    "[[G4,E5,G5] E4 E4]",              // c.93   Em
    "[~ G4 G4]",                       // c.94   G
    "[~ F#4 F#4]",                     // c.95   F#m7
    "[~@2 [B4,F#5]@3 [F#4,B4,F#5]]",   // c.96   Bm
    "[~ E4 E4]",                       // c.97   Em
    "[~ G4 G4]",                       // c.98   G
    "[~@2 A4@3 A4]",                   // c.99   A7
    "~",                               // c.100  D
    "[~ [E4,E5] [E4,E5]]",             // c.101  Em
    "[~ [D4,B4] [D4,B4]]",             // c.102  G
    "[~ [E4,A4] [E4,A4]]",             // c.103  F#m7
    "[D4,F#4]",                        // c.104  Bm
    "[~ [G4,E5,G5] [G4,E5,G5]]",       // c.105  Em
    "[~ [D4,B4,G5] [D4,B4,G5]]",       // c.106  G
    "[~@2 [A4,C#5,A5]@3 [A4,C#5,A5]]", // c.107  A7
    ligar(4, "[D4,A4,D5]"),            // c.108  D — se liga 4 semicorcheas al c.109
  ],
  izq: [
    "[[E2,E3] ~@2]",             // c.93   Em
    "[G3 ~@2]",                  // c.94   G
    "[F#3 ~@2]",                 // c.95   F#m7
    "[B3, [B2 ~@2]]",            // c.96   Bm
    "[E3 ~@2]",                  // c.97   Em
    "[G2 G3 G3]",                // c.98   G
    "[A2@2 E3@3 E3]",            // c.99   A7
    "[D3, [D2 ~@2]]",            // c.100  D
    "[[E2,E3] E3 E3]",           // c.101  Em
    "[[G2,G3] G3 G3]",           // c.102  G
    "[[F#2,F#3] F#3 F#3]",       // c.103  F#m7
    "[B3, [[B2,B3] ~@2]]",       // c.104  Bm
    "[[E2,E3] [E3,B3] [E3,B3]]", // c.105  Em
    "[[G2,G3] G3 G3]",           // c.106  G
    "[[A2,G3]@2 G3@3 [C#2,G3]]", // c.107  A7
    "[D2,A3]",                   // c.108  D
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      82,                  // c.93
      96,                  // c.94
      96,                  // c.95
      96,                  // c.96
      96,                  // c.97
      "[96 95 93]",        // c.98
      "[91 89 87]",        // c.99
      "[86 85 84@2 82@2]", // c.100
      80,                  // c.101
      "[75 73 71]",        // c.102
      "[69@2 68@3 65]",    // c.103
      64,                  // c.104
      "[59@2 57@3 54]",    // c.105
      "[53 51 50]",        // c.106
      "[48 47 46@2 44@2]", // c.107
      42,                  // c.108
    ],
    guitarra: [
      80, // c.93
      80, // c.94
      80, // c.95
      80, // c.96
      80, // c.97
      80, // c.98
      80, // c.99
      80, // c.100
      80, // c.101
      80, // c.102
      80, // c.103
      80, // c.104
      80, // c.105
      80, // c.106
      80, // c.107
      80, // c.108
    ],
    piano: [
      127,           // c.93
      "[127 80 83]", // c.94
      "[86 89 92]",  // c.95
      96,            // c.96
      96,            // c.97
      96,            // c.98
      96,            // c.99
      96,            // c.100
      96,            // c.101
      96,            // c.102
      96,            // c.103
      96,            // c.104
      96,            // c.105
      96,            // c.106
      96,            // c.107
      96,            // c.108
    ],
  },
  // Batería. Una columna por compás; filas: c.93–96 · c.97–100 · c.101–104 · c.105–108
  bateria: bateria(
    // Bombo
    golpe(`<
      [bd bd [~ bd]] [bd ~ ~]       [bd ~ ~]       [bd ~ ~]
      [bd ~ ~]       [bd ~ bd]      ~              [bd ~ bd]
      [bd ~ bd]      [bd ~ bd]      [bd ~ bd]      [bd ~ bd]
      [bd ~ bd]      [bd ~ bd]      ~              ~
    >`, FUERTE),
    // Caja
    golpe(`<
      ~             [~ sd [~ sd]] [~ sd [~ sd]] [~ sd [~ sd]]
      [~ sd [~ sd]] [~ sd [~ sd]] ~             [~ sd ~]
      [~ ~ sd]      [~ ~ sd]      [~ ~ sd]      ~
      ~             ~             ~             ~
    >`, FUERTE),
    // Caja
    golpe(`<
      ~              ~              ~              ~
      ~              ~              ~              [~ ~ sd]
      [sd sd [~ sd]] [sd sd [~ sd]] [sd sd [~ sd]] [[sd sd] ~ sd]
      ~              ~              ~              ~
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~        [~ oh ~] ~        ~
      ~        ~        ~        ~
      [~ oh ~] ~        ~        ~
      ~        ~        ~        ~
    >`, FUERTE),
    // Platillos
    golpe(`<
      [cr cr [~ cr]] [~ ~ [~ hh]]   ~              ~
      ~              ~              ~              [cr ~ ~]
      [~ ~ [~ hh]]   ~              ~              ~
      ~              ~              ~              [cr ~ ~]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~             ~             [~ oh [~ hh]] ~
      [~ oh [~ hh]] [~ oh [~ hh]] ~             [~ oh hh]
      ~             ~             ~             ~
      ~             ~             ~             [~ oh [~ hh]]
    >`, SUAVE),
    // Toms
    golpe(`<
      ~              ~              ~              ~
      [lt mt [~ ht]] ~              [lt mt [~ ht]] ~
      ~              ~              ~              ~
      ~              ~              [lt mt [~ ht]] ~
    >`, FUERTE),
    // Pandereta
    golpe(`<
      ~             ~             ~             ~
      ~             ~             [~ tb [~ tb]] ~
      ~             ~             ~             ~
      ~             ~             ~             ~
    >`, FUERTE),
    // Pandereta
    golpe(`<
      [[~ tb] ~ tb] ~             ~             ~
      ~             ~             ~             ~
      ~             ~             ~             ~
      ~             ~             ~             ~
    >`, NORMAL),
    // Cencerro
    golpe(`<
      ~             ~             ~             ~
      ~             ~             ~             [[~ cb] ~ cb]
      [[~ cb] ~ cb] [[~ cb] ~ cb] [[~ cb] ~ cb] [[~ cb] ~ cb]
      [[~ cb] ~ cb] [[~ cb] ~ cb] ~             ~
    >`, MEDIO),
    // Palmas
    golpe(`<
      ~         ~         ~         ~
      ~         ~         ~         ~
      [cp cp ~] [cp cp ~] [cp cp ~] ~
      ~         ~         ~         ~
    >`, MEDIO),
    // Shaker
    golpe(`<
      [sh sh [~ sh]] [sh sh [~ sh]] ~              [sh sh [~ sh]]
      ~              [sh sh [~ sh]] [sh sh [~ sh]] [sh sh sh]
      [sh sh [~ sh]] [sh sh [~ sh]] [sh sh [~ sh]] [sh sh [~ sh]]
      [sh sh [~ sh]] [sh sh [~ sh]] [sh sh [~ sh]] [sh sh [~ sh]]
    >`, MEDIO),
    // Shaker
    golpe(`<
      ~        ~        [sh ~ ~] ~
      [sh ~ ~] ~        ~        ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, SUAVE),
  ),
};

// ─────────────────────── Outro, primera mitad (c.109–111) ──────────────────
/*
Suenan piano y batería. Callan violín y guitarra.
*/

const OUTRO = {
  desde: 109,
  tecnica: SONIDO.arco, // el sonido del violín
  arpegio: true, // la guitarra arpegia sus acordes
  violin: [
    "~", // c.109
    "~", // c.110  D
    "~", // c.111
  ],
  guitarra: [
    "~", // c.109
    "~", // c.110  D
    "~", // c.111
  ],
  der: [
    "~", // c.109
    "~", // c.110  D
    "~", // c.111
  ],
  izq: [
    "[[F#2,A2] G2@2 F#2]",   // c.109
    ligar(1, "[D2@5 D3@7]"), // c.110  D — se liga 1 semicorchea al c.111
    "~",                     // c.111  — sigue lo del c.110
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      42, // c.109
      42, // c.110
      42, // c.111
    ],
    guitarra: [
      80, // c.109
      80, // c.110
      80, // c.111
    ],
    piano: [
      96, // c.109
      96, // c.110
      96, // c.111
    ],
  },
  // Batería. Una columna por compás; filas: c.109–111
  bateria: bateria(
    // Pandereta
    golpe(`<
      [~ tb tb]     [tb [~ tb] ~] ~
    >`, MEDIO),
    // Pandereta
    golpe(`<
      [tb ~ ~] ~        ~
    >`, SUAVE),
  ),
};

// ═══════════════════════ 5. Forma ══════════════════════

const TRAMO = [B2, C3, OUTRO];

// Unos compases sueltos, en bucle: tramo(91, 95) va del c.91 al c.95
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
//   tramo(91, 95)     la entrada al C3
//   tramo(107, 111)   la salida al Outro
//   tocar(C3)         una sección sola
