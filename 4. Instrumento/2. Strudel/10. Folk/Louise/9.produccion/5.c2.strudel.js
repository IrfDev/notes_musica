setcpm(160 / 3);

/*
Louise, el C2: para producir. Con el final de la sección anterior y el
inicio de la siguiente, para oír cómo entra y cómo sale.

Fuente: 7. Partituras/2. Composiciones/Louise-melancolica.mscz
        guardado 2026-10-31 12:31 · commit fa80a73 (blob 0bf41d8, limpio)
        c.59–87: V2, segunda mitad (c.59–66), C2 (c.67–82) y B2, primera mitad (c.83–87).
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
  forma(...TRAMO) al final toca todo en bucle; tramo(65, 69) repite
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

// ─────────────────────── V2, segunda mitad (c.59–66) ───────────────────────
/*
Suenan violín, guitarra, piano y batería.
El violín va en pizz. (escrito en el c.51).
La guitarra arpegia sus acordes, como MuseScore.
*/

const V2 = {
  desde: 59,
  tecnica: SONIDO.pizz, // el sonido del violín
  arpegio: true, // la guitarra arpegia sus acordes
  violin: [
    "[[D5,A5]@2 [D5,F#5]]",         // c.59   Dmaj7
    "[C#5 F#5 C#5]",                // c.60   F#m
    "[E5@2 G5@3 F#5]",              // c.61   C#dim
    "[A5 [C#5,A5]]",                // c.62   A · A7
    "[D5,F#5]",                     // c.63   Bm7
    "[B4@2 E5@3 G5]",               // c.64   G · G6
    "F#5",                          // c.65   D6
    "[[A4,A5] [C#5,F#5] [C#4,A4]]", // c.66   F#m
  ],
  guitarra: [
    "[~ [D3,F#3,D4,A4] [D3,F#3,D4,A4]]",   // c.59   Dmaj7
    "[F#3,A3,C#4,F#4]",                    // c.60   F#m
    "[~ [C#3,E3,C#4,G4] [C#3,E3,C#4,G4]]", // c.61   C#dim
    "[A2,E3,A3,C#4,E4]",                   // c.62   A · A7
    "[~ [B3,F#4,B4,F#5] [B3,F#4,B4,F#5]]", // c.63   Bm7
    "[G3,D4,G4,D5]",                       // c.64   G · G6
    "[~ [F#3,A3,D4,A4] [F#3,A3,D4,A4]]",   // c.65   D6
    "[C#3,A3,C#4,F#4,A4,C#5]",             // c.66   F#m
  ],
  der: [
    "[[F#4,C#5] ~@2]",        // c.59   Dmaj7
    "[[C#4,C#5]@3 [C#4,A4]]", // c.60   F#m
    "[E4,G4]",                // c.61   C#dim
    "[[E4,C#5] [C#4,G5]]",    // c.62   A · A7
    "[D4,F#5]",               // c.63   Bm7
    "[[B3,D5]@3 [E4,B4]]",    // c.64   G · G6
    "[F#4,A4]",               // c.65   D6
    "[[C#4,A4] [A4,E5]]",     // c.66   F#m
  ],
  izq: [
    "[[D2,D3] ~@2]",       // c.59   Dmaj7
    "[A3@3 A3]",           // c.60   F#m
    "[C#3,E3]",            // c.61   C#dim
    "[A3 A3]",             // c.62   A · A7
    "B3",                  // c.63   Bm7
    "[G3@3 F#3]",          // c.64   G · G6
    "D3",                  // c.65   D6
    "[[F#3,A3] [F#3,A3]]", // c.66   F#m
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      80, // c.59
      80, // c.60
      80, // c.61
      80, // c.62
      80, // c.63
      80, // c.64
      80, // c.65
      80, // c.66
    ],
    guitarra: [
      80, // c.59
      80, // c.60
      80, // c.61
      80, // c.62
      80, // c.63
      80, // c.64
      80, // c.65
      80, // c.66
    ],
    piano: [
      71, // c.59
      72, // c.60
      73, // c.61
      74, // c.62
      75, // c.63
      76, // c.64
      78, // c.65
      79, // c.66
    ],
  },
  // Batería. Una columna por compás; filas: c.59–62 · c.63–66
  bateria: bateria(
    // Bombo
    golpe(`<
      [bd ~ ~] [bd ~ ~] [bd ~ ~] [bd ~ ~]
      [bd ~ ~] [bd ~ ~] [bd ~ ~] ~
    >`, FUERTE),
    // Caja
    golpe(`<
      [~ sd ~]      [~ [sd sd] ~] [~ sd ~]      [~ [sd sd] ~]
      [~ sd ~]      [~ [sd sd] ~] [~ sd ~]      ~
    >`, MEDIO),
    // Platillos
    golpe(`<
      [oh hh ~] ~         ~         ~
      ~         ~         ~         ~
    >`, FUERTE),
    // Toms
    golpe(`<
      ~          ~          ~          ~
      ~          ~          ~          [mt lt ht]
    >`, FUERTE),
    // Pandereta
    golpe(`<
      [~ ~ tb] [~ ~ tb] [~ ~ tb] [~ ~ tb]
      [~ ~ tb] [~ ~ tb] [~ ~ tb] [~ ~ tb]
    >`, NORMAL),
    // Cencerro
    golpe(`<
      [~ cb ~] [~ cb ~] [~ cb ~] [~ cb ~]
      [~ cb ~] [~ cb ~] [~ cb ~] [~ cb ~]
    >`, GHOST),
    // Shaker
    golpe(`<
      [~ sh sh] [~ sh sh] [~ sh sh] [~ sh sh]
      [~ sh sh] [~ sh sh] [~ sh sh] [~ sh sh]
    >`, GHOST),
  ),
};

// ─────────────────────── C2 (c.67–82) ──────────────────────────────────────
/*
Suenan violín, guitarra, piano y batería.
El violín va con arco (escrito en el c.67).
La guitarra arpegia sus acordes, como MuseScore.
*/

const C2 = {
  desde: 67,
  tecnica: SONIDO.arco, // el sonido del violín
  arpegio: true, // la guitarra arpegia sus acordes
  violin: [
    ligar(8, "G4"),                     // c.67   Em — se liga 8 semicorcheas al c.68
    "[~@4 B4 D5]",                      // c.68   G — sigue lo del c.67
    "[A4 G4]",                          // c.69   F#m7
    "[F#4 D4]",                         // c.70   Bm
    "[G4@3 E4 G4 A4]",                  // c.71   Em
    "[B4 D4 B3]",                       // c.72   G
    "[C#4@2 B3@3 C#4]",                 // c.73   A7
    "[D4 A4]",                          // c.74   D
    "[E4@2 C#4]",                       // c.75   Em
    "D4",                               // c.76   G
    "[E4@4 F#4 G4@3 A4@4]",             // c.77   F#m7
    "[B4 F#4]",                         // c.78   Bm
    "[[E4,G4]@2 [B3,B4]]",              // c.79   Em
    "[D4,G4,E5]",                       // c.80   Gmaj13
    "[[F#4,C#5]@2 [A4,E5]@3 [E4,C#5]]", // c.81   A7
    "[G4,Eb5]",                         // c.82   Eb7
  ],
  guitarra: [
    "[E2,B2,E3,G3,B3,E4]",               // c.67   Em
    "[G2,B2,G3,B3]",                     // c.68   G
    "[F#2,A2,F#3,A3]",                   // c.69   F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.70   Bm
    "[E2,B2,E3,G3,B3,E4]",               // c.71   Em
    "[G2,B2,G3,B3]",                     // c.72   G
    "[A2,C#3,E4,A4,E5]",                 // c.73   A7
    "[~ [A3,D4,F#4,A4] [A3,D4,F#4,A4]]", // c.74   D
    "[E2,B2,E3,G3,B3,E4]",               // c.75   Em
    "[G2,B2,G3,B3]",                     // c.76   G
    "[F#2,A2,F#3,A3]",                   // c.77   F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.78   Bm
    "[E2,B2,E3,G3,B3,E4]",               // c.79   Em
    "[G2,B2,G3,B3]",                     // c.80   Gmaj13
    "[A2,C#3,E4,A4,E5]",                 // c.81   A7
    "~",                                 // c.82   Eb7
  ],
  der: [
    "[~ E4 E4]",                // c.67   Em
    "[~ G4 G4]",                // c.68   G
    "[~ F#4 F#4]",              // c.69   F#m7
    "~",                        // c.70   Bm
    "[~ E4 E4]",                // c.71   Em
    "[~ G4 G4]",                // c.72   G
    "[~@2 A4@3 A4]",            // c.73   A7
    "~",                        // c.74   D
    "[~ [E4,E5] [E4,E5]]",      // c.75   Em
    "[~ [D4,B4] [D4,B4]]",      // c.76   G
    "[~ [E4,A4] [E4,A4]]",      // c.77   F#m7
    "[D4,F#4]",                 // c.78   Bm
    "[~ G4 G4]",                // c.79   Em
    "[~ [E4,D5] [F#4,D5]]",     // c.80   Gmaj13
    "[~@2 [G4,C#5]@3 [A4,E5]]", // c.81   A7
    "[Bb4,Eb5]",                // c.82   Eb7
  ],
  izq: [
    "[E3 ~@2]",                        // c.67   Em
    "[G3 ~@2]",                        // c.68   G
    "[F#3 ~@2]",                       // c.69   F#m7
    "[B3, [B2 ~@2]]",                  // c.70   Bm
    "[E3 ~@2]",                        // c.71   Em
    "[G3 ~@2]",                        // c.72   G
    "[A2@2 E3@3 E3]",                  // c.73   A7
    "[D3, [D2 ~@2]]",                  // c.74   D
    "[[E2,E3] E3 E3]",                 // c.75   Em
    "[[B2,G3] G3 G3]",                 // c.76   G
    "[[F#2,F#3] F#3 F#3]",             // c.77   F#m7
    "[B3, [[B2,B3] ~@2]]",             // c.78   Bm
    "[[E2,E3] [E3,B3] [E3,B3]]",       // c.79   Em
    "[[G2,F#3] [E3,G3] [F#3,B3]]",     // c.80   Gmaj13
    "[[A2,E3]@2 [C#3,E3]@3 [C#3,E3]]", // c.81   A7
    "[[Eb2,Db3]@4 Bb3 G3]",            // c.82   Eb7
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      49, // c.67
      56, // c.68
      58, // c.69
      62, // c.70
      65, // c.71
      65, // c.72
      65, // c.73
      65, // c.74
      65, // c.75
      67, // c.76
      71, // c.77
      74, // c.78
      78, // c.79
      80, // c.80
      80, // c.81
      80, // c.82
    ],
    guitarra: [
      80, // c.67
      80, // c.68
      80, // c.69
      80, // c.70
      80, // c.71
      80, // c.72
      80, // c.73
      80, // c.74
      80, // c.75
      80, // c.76
      80, // c.77
      80, // c.78
      80, // c.79
      80, // c.80
      80, // c.81
      80, // c.82
    ],
    piano: [
      80, // c.67
      77, // c.68
      75, // c.69
      73, // c.70
      70, // c.71
      67, // c.72
      64, // c.73
      65, // c.74
      67, // c.75
      69, // c.76
      71, // c.77
      72, // c.78
      74, // c.79
      76, // c.80
      78, // c.81
      79, // c.82
    ],
  },
  // Batería. Una columna por compás; filas: c.67–70 · c.71–74 · c.75–78 · c.79–82
  bateria: bateria(
    // Bombo
    golpe(`<
      [bd ~ bd]  [bd ~ bd]  [bd ~ bd]  ~
      [bd ~ bd]  [bd ~ bd]  ~          [bd ~ bd]
      [bd ~ bd]  [bd bd bd] [bd bd bd] [bd bd bd]
      [bd bd bd] [bd bd bd] [bd bd bd] ~
    >`, FUERTE),
    // Caja
    golpe(`<
      [~ sd sd] [~ sd sd] [~ sd sd] [~ sd sd]
      [~ sd sd] [~ sd sd] [~ sd sd] [~ sd sd]
      [~ sd sd] [~ sd sd] [~ sd sd] [~ sd sd]
      [~ sd sd] [~ sd sd] [~ sd sd] ~
    >`, FUERTE),
    // Caja
    golpe(`<
      ~             ~             ~             ~
      ~             ~             ~             ~
      ~             ~             ~             ~
      ~             ~             ~             [~ [sd sd] ~]
    >`, MEDIO),
    // Platillos
    golpe(`<
      [cr oh ~] ~         ~         ~
      ~         ~         ~         ~
      ~         ~         ~         ~
      ~         ~         ~         ~
    >`, FUERTE),
    // Platillos
    golpe(`<
      [~ ~ hh] ~        ~        ~
      ~        ~        ~        ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~         [~ oh hh] ~         [~ oh hh]
      ~         [~ oh hh] ~         [~ oh hh]
      ~         [~ oh hh] ~         [~ oh hh]
      [~ oh hh] [~ oh hh] [~ oh hh] ~
    >`, SUAVE),
    // Toms
    golpe(`<
      ~          ~          ~          [lt mt ht]
      ~          ~          [lt mt ht] ~
      ~          ~          ~          ~
      ~          ~          ~          [lt ~ ~]
    >`, FUERTE),
    // Toms
    golpe(`<
      ~        ~        ~        ~
      ~        ~        ~        ~
      ~        ~        ~        ~
      ~        ~        ~        [~ ~ mt]
    >`, MEDIO),
    // Pandereta
    golpe(`<
      ~             ~             ~             ~
      ~             [tb tb ~]     [tb tb ~]     [~ tb tb]
      [~ tb tb]     [~ tb tb]     [~ tb [~ tb]] [~ tb [~ tb]]
      [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]] ~
    >`, NORMAL),
    // Cencerro
    golpe(`<
      ~         ~         ~         ~
      ~         ~         ~         ~
      ~         ~         ~         [cb cb ~]
      [cb cb ~] [cb cb ~] [cb cb ~] ~
    >`, MEDIO),
    // Cencerro
    golpe(`<
      [cb ~ ~] [cb ~ ~] [cb ~ ~] [cb ~ ~]
      [cb ~ ~] [cb ~ ~] [cb ~ ~] [cb ~ ~]
      [cb ~ ~] [cb ~ ~] [cb ~ ~] [~ ~ cb]
      [~ ~ cb] [~ ~ cb] [~ ~ cb] [cb ~ ~]
    >`, SUAVE),
    // Shaker
    golpe(`<
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] [sh ~ ~] ~
    >`, SUAVE),
  ),
};

// ─────────────────────── B2, primera mitad (c.83–87) ───────────────────────
/*
Suenan violín, guitarra, piano y batería.
El violín va con arco.
La guitarra toca sus acordes en bloque, sin arpegio.
*/

const B2 = {
  desde: 83,
  tecnica: SONIDO.arco, // el sonido del violín
  arpegio: false, // la guitarra arpegia sus acordes
  violin: [
    "[[D4,A4]@5 [F4,D5]]",       // c.83   Dm
    "[[D4,F5] [F4,D5]]",         // c.84   Dm
    "[Bb3,Bb4,G5]",              // c.85   Gm
    "[C4,A4,E5]",                // c.86   Am
    "[[C4,G4,F5]@2 [F4,C5,F5]]", // c.87   Csus4
  ],
  guitarra: [
    "~",                               // c.83   Dm
    "~",                               // c.84   Dm
    "[~@2 [G2,D3,Bb3]@3 [G2,D3,Bb3]]", // c.85   Gm
    "[~@2 [A2,E3,C4]@3 [A2,E3,C4]]",   // c.86   Am
    "[~@2 [C3,F3,Bb3]@3 [C3,F3,Bb3]]", // c.87   Csus4
  ],
  der: [
    "[[A4,F5] [G4,E5]@2 [F4,D5]]", // c.83   Dm
    "[[D4,A4] [F4,D5]]",           // c.84   Dm
    "[G4 Bb4 D5@3 D5]",            // c.85   Gm
    "[E5 A4@3 F4 A4]",             // c.86   Am
    "[C5 F4 [G4,F5]@3 [F4,C5]]",   // c.87   Csus4
  ],
  izq: [
    "[D2,D3,A3]",                    // c.83   Dm
    "[[D2,F3] [A2,D3]]",             // c.84   Dm
    "[[G2,D3]@2 [D3,G3]@3 [D3,G3]]", // c.85   Gm
    "[[C3,A3] [E3,A3]@3 [A2,E3]@2]", // c.86   Am
    "[[C3,G3]@2 [F2,C3]@3 [C3,G3]]", // c.87   Csus4
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      "[101@5 112]", // c.83
      "[111 107]",   // c.84
      102,           // c.85
      94,            // c.86
      "[85@2 80]",   // c.87
    ],
    guitarra: [
      80, // c.83
      80, // c.84
      80, // c.85
      80, // c.86
      80, // c.87
    ],
    piano: [
      "[96 112@3]", // c.83
      112,          // c.84
      112,          // c.85
      112,          // c.86
      112,          // c.87
    ],
  },
  // Batería. Una columna por compás; filas: c.83–84 · c.85–87
  bateria: bateria(
    // Bombo
    golpe(`<
      [bd bd bd]     [bd bd [~ bd]]
      [bd ~ ~]       [bd ~ ~]       [bd ~ ~]
    >`, FUERTE),
    // Bombo
    golpe(`<
      ~            ~
      [~ [~ bd] ~] ~            [~ [~ bd] ~]
    >`, MEDIO),
    // Caja
    golpe(`<
      ~             ~
      [[~ sd] ~ sd] [[~ sd] ~ sd] [[~ sd] ~ sd]
    >`, MEDIO),
    // Platillos
    golpe(`<
      [oh hh hh] ~
      [cr ~ ~]   ~          ~
    >`, MEDIO),
    // Toms
    golpe(`<
      [ht ~ ~] ~
      ~        ~        ~
    >`, FUERTE),
    // Pandereta
    golpe(`<
      ~             ~
      [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]]
    >`, NORMAL),
    // Pandereta
    golpe(`<
      [tb ~ ~] ~
      ~        ~        ~
    >`, MEDIO),
    // Cencerro
    golpe(`<
      [cb cb ~] ~
      ~         ~         ~
    >`, MEDIO),
    // Cencerro
    golpe(`<
      [~ ~ cb] ~
      ~        ~        ~
    >`, SUAVE),
    // Palmas
    golpe(`<
      ~             ~
      [~ cp [~ cp]] [~ cp [~ cp]] [~ cp [~ cp]]
    >`, NORMAL),
    // Palmas
    golpe(`<
      [cp ~ ~] ~
      ~        ~        ~
    >`, MEDIO),
    // Shaker
    golpe(`<
      [sh sh ~]      [[sh sh] ~ sh]
      [[sh sh] ~ sh] [[sh sh] ~ sh] [[sh sh] ~ sh]
    >`, MEDIO),
  ),
};

// ═══════════════════════ 5. Forma ══════════════════════

const TRAMO = [V2, C2, B2];

// Unos compases sueltos, en bucle: tramo(65, 69) va del c.65 al c.69
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
//   tramo(65, 69)   la entrada al C2
//   tramo(81, 85)   la salida al B2
//   tocar(C2)       una sección sola
