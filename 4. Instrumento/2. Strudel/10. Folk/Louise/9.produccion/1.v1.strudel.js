setcpm(160 / 3);

/*
Louise, el V1: para producir. Con el final de la sección anterior y el
inicio de la siguiente, para oír cómo entra y cómo sale.

Fuente: 7. Partituras/2. Composiciones/Louise-melancolica.mscz
        guardado 2026-10-31 12:31 · commit fa80a73 (blob 0bf41d8, limpio)
        c.6–34: Intro, segunda mitad (c.6–10), V1 (c.11–26) y C1, primera mitad (c.27–34).
        Notas, golpes y velocidades comprobados contra el .musicxml y contra
        el MIDI que exporta MuseScore, que es lo que suena.

Para qué
  Probar dinámicas, batería, sonidos y efectos. Todo está escrito compás por
  compás, aunque se repita: nada sale de una función ni de otra sección. Si
  cambias un compás, cambia solo ese. Lo que se quede se pasa a mano a
  MuseScore; este archivo no vuelve al .mscz.

  El final del Intro (c.6–10) trae lo que quedó en 0.intro: dinámicas,
  batería y efectos del piano. El inicio del C1 (c.27–34) suena como quedó en
  2.c1: dinámicas, batería y efectos.

Dónde se mueve cada cosa
  - Dinámicas: en cada sección, `dinamica`, una velocidad por compás y por
    instrumento (0–127, como en MuseScore).
  - Batería: en cada sección, `bateria`, una columna por compás.
  - Sonidos: SONIDO (en 1), y `tecnica` en cada sección para el violín.
  - Efectos: EFECTOS (en 1) vale para todo el archivo, y `efectos` en cada
    sección cambia solo esa sección: un valor, o una lista con uno por
    compás. Así lo que ya quedó en una sección no se mueve al trabajar otra.
  - Volumen: MEZCLA y KIT (en 1).

Cómo se escucha
  forma(...TRAMO) al final toca todo en bucle; tramo(9, 13) repite
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
      ? new Hap(
          new TimeSpan(
            hap.whole.begin,
            hap.whole.end.add(Fraction(semis).div(12)),
          ),
          hap.part,
          hap.value,
          hap.context,
        )
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
              : [
                  new Hap(
                    new TimeSpan(hap.whole.begin, fin),
                    new TimeSpan(hap.part.begin, hap.part.end.min(fin)),
                    hap.value,
                    hap.context,
                  ),
                ];
          }),
        ),
    ),
  );
};

// ── Secciones ──
// Una sección es un objeto: desde qué compás empieza, el sonido del violín,
// si la guitarra arpegia, una lista por parte (violin, guitarra, der, izq),
// una lista de velocidades por instrumento, sus efectos y su batería.

// Cuántos compases dura una sección; todas sus listas tienen que coincidir
let largo = (sec) => {
  let porCompas = Object.values(sec.efectos).flatMap((e) =>
    Object.values(e).filter(Array.isArray),
  );
  let listas = [
    sec.violin,
    sec.guitarra,
    sec.der,
    sec.izq,
    sec.dinamica.violin,
    sec.dinamica.guitarra,
    sec.dinamica.piano,
    ...porCompas,
  ];
  let largos = [...new Set(listas.map((lista) => lista.length))];
  if (largos.length !== 1) {
    fallar(
      String.raw`La sección del c.${sec.desde} tiene listas de ${largos} compases`,
    );
  }
  return largos[0];
};

// ── Instrumentos ──

// Los efectos de un instrumento: los de EFECTOS, con lo que cambie la sección.
// Cada clave es un efecto de Strudel (room, roomsize, delay, pan, lpf…) y su
// valor vale para toda la sección, o es una lista con uno por compás.
let efectos = (pat, base, propios = {}) =>
  Object.entries({ ...base, ...propios }).reduce(
    (p, [efecto, valor]) =>
      p[efecto](Array.isArray(valor) ? cat(...valor) : valor),
    pat,
  );

let violin = (sec) =>
  efectos(note(compases(sec.violin)), EFECTOS.violin, sec.efectos.violin)
    .sound(sec.tecnica)
    .velocity(velocidades(sec.dinamica.violin))
    .gain(MEZCLA.violin);

// Arpegiada, salvo en las secciones con `arpegio: false` (acordes en bloque)
let guitarra = (sec) => {
  let notas = note(compases(sec.guitarra));
  return efectos(
    sec.arpegio ? arpegio(notas, ARPEGIO) : notas,
    EFECTOS.guitarra,
    sec.efectos.guitarra,
  )
    .sound(SONIDO.guitarra)
    .velocity(velocidades(sec.dinamica.guitarra))
    .gain(MEZCLA.guitarra);
};

let piano = (sec) =>
  efectos(
    stack(note(compases(sec.der)), note(compases(sec.izq))),
    EFECTOS.piano,
    sec.efectos.piano,
  )
    .sound(SONIDO.piano)
    .velocity(velocidades(sec.dinamica.piano))
    .gain(MEZCLA.piano);

// Una línea de batería: el patrón con sus muestras y una velocidad MIDI
let golpe = (patron, vel = MEDIO) => s(patron).velocity(vel / 127);

// Las líneas de una sección, con el kit y el volumen de la mezcla (los
// efectos se ponen en tocar, con los de la sección)
let bateria = (...lineas) =>
  stack(...lineas)
    .bank(SONIDO.kit)
    .withValue((v) => ({ ...v, gain: MEZCLA.bateria * (KIT[v.s] ?? 1) }));

// Todo lo que toca una sección
let tocar = (sec) =>
  stack(
    violin(sec),
    guitarra(sec),
    piano(sec),
    efectos(sec.bateria, EFECTOS.bateria, sec.efectos.bateria),
  );

// Las secciones una tras otra, cada una con sus compases
let forma = (...secciones) =>
  arrange(...secciones.map((sec) => [largo(sec), tocar(sec)]));

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
    efectos: Object.fromEntries(
      Object.entries(sec.efectos).map(([instrumento, e]) => [
        instrumento,
        Object.fromEntries(
          Object.entries(e).map(([efecto, v]) => [
            efecto,
            Array.isArray(v) ? corte(v) : v,
          ]),
        ),
      ]),
    ),
    bateria: sec.bateria.ribbon(i, n),
  };
};

// ═══════════════════════ 4. Secciones ══════════════════════

// ─────────────────────── Intro, segunda mitad (c.6–10) ─────────────────────
/*
Suenan piano y batería. Callan violín y guitarra.
*/

const INTRO = {
  desde: 6,
  tecnica: SONIDO.arco, // el sonido del violín
  arpegio: true, // la guitarra arpegia sus acordes
  violin: [
    "~", // c.6    D
    "~", // c.7    D
    "~", // c.8    A
    "~", // c.9    Bm
    "~", // c.10   Gmaj7
  ],
  guitarra: [
    "~", // c.6    D
    "~", // c.7    D
    "~", // c.8    A
    "~", // c.9    Bm
    "~", // c.10   Gmaj7
  ],
  der: [
    "[A4 G4@2 F#4]", // c.6    D
    "[D4@5 F#4@7]", // c.7    D
    "[~ [E4,C#5]@2 [E4,C#5]]", // c.8    A
    "[~ [D4,D5]@2 [D4,D5]]", // c.9    Bm
    "[~ [F#4,D5]@2 [E4,E5]]", // c.10   Gmaj7
  ],
  izq: [
    "[D2,A3]", // c.6    D
    "F#2", // c.7    D
    "[[~ A3@2 A3], A2]", // c.8    A
    "[[~ [F#3,B3]@2 [F#3,B3]], B2]", // c.9    Bm
    "[[~ [G3,C#4]@2 [G3,C#4]], [G2@2 ~]]", // c.10   Gmaj7
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      80, // c.6
      80, // c.7
      80, // c.8
      80, // c.9
      80, // c.10
    ],
    guitarra: [
      80, // c.6
      80, // c.7
      80, // c.8
      80, // c.9
      80, // c.10
    ],
    piano: [
      100, // c.6
      100, // c.7
      80, // c.8
      80, // c.9
      80, // c.10
    ],
  },
  // Efectos de esta sección; los que no están salen de EFECTOS (en 1). Los
  // del piano vienen de 0.intro
  efectos: {
    piano: {
      room: 1,
      roomsize: [0.5, 0.5, 1, 1, 1], // c.6–10
      delay: [0, 0, 0.25, 0.25, 0.25],
      pan: [0.2, 0.2, 0.8, 0.8, 0.5],
    },
  },
  // Batería. Una columna por compás; filas: c.6–10
  bateria: bateria(
    // Bombo
    golpe(
      `<
      [~ ~ bd]  [bd ~ ~]  [bd ~ ~]  [bd ~ bd] ~
    >`,
      FUERTE,
    ),
    // Platillos
    golpe(
      `<
      [cr ~ ~] ~        ~        ~        ~
    >`,
      FUERTE,
    ),
    // Toms
    golpe(
      `<
      ~             ~             ~             ~             [~ ~ [lt ht]]
    >`,
      FUERTE,
    ),
    // Pandereta, con la velocidad de 0.intro (de 0 a 1, una por compás)
    s(`<
      ~         [tb tb ~] [~ tb tb] [~ tb tb] [tb ~ ~]
    >`).velocity(`<
      1         1         1         1         1
    >`),
    // Shaker
    golpe(
      `<
      ~            [sh sh sh]   [sh ~ ~]     [~ [~ sh] ~] [~ [~ sh] ~]
    >`,
      GHOST,
    ),
  ),
};

// ─────────────────────── V1 (c.11–26) ──────────────────────────────────────
/*
Suenan violín, guitarra, piano y batería.
El violín va en pizz. (escrito en el c.11).
La guitarra arpegia sus acordes, como MuseScore.
*/

const V1 = {
  desde: 11,
  tecnica: SONIDO.pizz, // el sonido del violín
  arpegio: true, // la guitarra arpegia sus acordes
  violin: [
    "[~ D4 D4]", // c.11   Dmaj7
    "[~ [F#4,A4]@2]", // c.12   F#m · D
    "[~ E4 G4]", // c.13   C#dim
    "[~ [F#4,B4]@2]", // c.14   A · A7
    "[~ F#4 B3]", // c.15   Bm7
    "[D4@2 [E4,B4]]", // c.16   G · G6
    "[~ F#4 F#4]", // c.17   Dmaj7
    "[~ [C#4,A4] [C#4,F#4]]", // c.18   F#m · F#m7
    "[D4,C#5]", // c.19   Dmaj7
    "[~ F#4 D4]", // c.20   F#m
    "E4", // c.21   C#dim
    "[~ [C#4,A4]]", // c.22   A · A7
    "[D4,C#5]", // c.23   Bm7
    "[~ G4 B4]", // c.24   G · G6
    "F#4", // c.25   D6
    "[~ [F#4,C#5] [C#4,A4]]", // c.26   F#m
  ],
  guitarra: [
    "[D3,A3,C#4,F#4]", // c.11   Dmaj7
    "[F#3,A3,C#4,F#4]", // c.12   F#m · D
    "[C#3,E3,C#4,G4]", // c.13   C#dim
    "[A2,E3,A3,C#4,E4]", // c.14   A · A7
    "[B2,D3,A3,B3,F#4]", // c.15   Bm7
    "[G2,B2,D3,G3,B3,G4]", // c.16   G · G6
    "[D3,A3,D4,A4]", // c.17   Dmaj7
    "[C#4,F#4,A4,C#5]", // c.18   F#m · F#m7
    "[~ [D3,F#3,D4,A4] [D3,F#3,D4,A4]]", // c.19   Dmaj7
    "[F#3,A3,C#4,F#4]", // c.20   F#m
    "[~ [C#3,E3,C#4,G4] [C#3,E3,C#4,G4]]", // c.21   C#dim
    "[A2,E3,A3,C#4,E4]", // c.22   A · A7
    "[~ [B3,F#4,B4,F#5] [B3,F#4,B4,F#5]]", // c.23   Bm7
    "[G3,D4,G4,D5]", // c.24   G · G6
    "[~ [F#3,A3,D4,A4] [F#3,A3,D4,A4]]", // c.25   D6
    "[C#3,A3,C#4,F#4,A4,C#5]", // c.26   F#m
  ],
  der: [
    "[F#4,D5]", // c.11   Dmaj7
    "[[C#4,C#5]@3 [C#4,A4]]", // c.12   F#m · D
    "[E4,G4]", // c.13   C#dim
    "[[E4,C#5] [C#4,G5]]", // c.14   A · A7
    "[D4,F#5]", // c.15   Bm7
    "[[B3,D5]@3 [E4,B4]]", // c.16   G · G6
    "[F#4,C#5]", // c.17   Dmaj7
    "[[C#4,A4] [A4,E5]]", // c.18   F#m · F#m7
    "[[F#4,C#5] ~@2]", // c.19   Dmaj7
    "[[C#4,C#5]@3 [C#4,A4]]", // c.20   F#m
    "[E4,G4]", // c.21   C#dim
    "[[E4,C#5] [C#4,G5]]", // c.22   A · A7
    "[D4,F#5]", // c.23   Bm7
    "[[B3,D5]@3 [E4,B4]]", // c.24   G · G6
    "[F#4,A4]", // c.25   D6
    "[[C#4,A4] [A4,E5]]", // c.26   F#m
  ],
  izq: [
    "[D2,C#4]", // c.11   Dmaj7
    "[F#3@3 G3]", // c.12   F#m · D
    "[C#3,E3]", // c.13   C#dim
    "[A3 A3]", // c.14   A · A7
    "B3", // c.15   Bm7
    "[G3@3 F#3]", // c.16   G · G6
    "A3", // c.17   Dmaj7
    "[F#2 F#2]", // c.18   F#m · F#m7
    "[[A2,D3] ~@2]", // c.19   Dmaj7
    "[A3@3 A3]", // c.20   F#m
    "[C#3,E3]", // c.21   C#dim
    "[A3 A3]", // c.22   A · A7
    "B3", // c.23   Bm7
    "[G3@3 F#3]", // c.24   G · G6
    "D3", // c.25   D6
    "[[F#3,A3] [F#3,A3]]", // c.26   F#m
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      127, // c.11
      127, // c.12
      127, // c.13
      127, // c.14
      127, // c.15
      127, // c.16
      127, // c.17
      127, // c.18
      127, // c.19
      127, // c.20
      127, // c.21
      127, // c.22
      127, // c.23
      127, // c.24
      127, // c.25
      127, // c.26
    ],
    guitarra: [
      90, // c.11
      90, // c.12
      90, // c.13
      90, // c.14
      90, // c.15
      90, // c.16
      90, // c.17
      90, // c.18
      90, // c.19
      90, // c.20
      90, // c.21
      90, // c.22
      90, // c.23
      90, // c.24
      90, // c.25
      90, // c.26
    ],
    piano: [
      80, // c.11
      80, // c.12
      80, // c.13
      80, // c.14
      80, // c.15
      80, // c.16
      80, // c.17
      80, // c.18
      80, // c.19
      80, // c.20
      80, // c.21
      80, // c.22
      80, // c.23
      80, // c.24
      80, // c.25
      80, // c.26
    ],
  },
  // Efectos de esta sección; los que no están salen de EFECTOS (en 1)
  efectos: {
    violin: {
      pan: [
        0.5, // c.11
        0.5, // c.12
        0.5, // c.13
        0.5, // c.14
        0.5, // c.15
        0.8, // c.16
        0.8, // c.17
        0.8, // c.18
        0.8, // c.19
        0.8, // c.20
        0.8, // c.21
        0.8, // c.22
        0.8, // c.23
        0.8, // c.24
        0.8, // c.25
        0.8, // c.26
      ],
    },
    piano: {
      pan: 0.1,
      room: 1,
      roomsize: 0.5,
    },
    guitarra: {
      pan: 0.5,
    },
  },
  // Batería. Una columna por compás; filas: c.11–14 · c.15–18 · c.19–22 · c.23–26
  bateria: bateria(
    // Bombo
    golpe(
      `<
      [bd ~ ~] [bd ~ ~] [bd ~ ~] [bd ~ ~]
      [bd ~ ~] [bd ~ ~] [bd ~ ~] ~
      [bd ~ ~] [bd ~ ~] [bd ~ ~] [bd ~ ~]
      [bd ~ ~] [bd ~ ~] [bd ~ ~] ~
    >`,
      NORMAL,
    ),
    // Platillos
    golpe(
      `<
      [oh hh ~] ~         ~         ~
      ~         ~         ~         ~
      [oh hh ~] ~         ~         ~
      ~         ~         ~         ~
    >`,
      FUERTE,
    ),
    // Toms
    golpe(
      `<
      ~          ~          ~          ~
      ~          ~          ~          [mt lt ht]
      ~          ~          ~          ~
      ~          ~          ~          [mt lt ht]
    >`,
      FUERTE,
    ),
    // Pandereta
    s(
      `<
      [~ ~ tb] [~ ~ tb] [~ ~ tb] [~ ~ tb]
      [~ ~ tb] [~ ~ tb] [~ ~ tb] [~ ~ tb]
      [~ ~ tb] [~ ~ tb] [~ ~ tb] [~ ~ tb]
      [~ tb tb] [~ tb tb] [~ tb tb] [~ tb tb]
    >`,
    ).velocity(`<
      0.27!8 0.5!8
    >`),

    // Cencerro (velocidad de 0 a 1)
    s(`<
      [~ cb ~] [~ cb ~] [~ cb ~] [~ cb ~]
      [~ cb ~] [~ cb ~] [~ cb ~] [~ cb ~]
      [~ cb ~] [~ cb ~] [~ cb ~] [~ cb ~]
      [cb [~ cb] ~] [cb [~ cb] ~] [cb [~ cb] ~] [cb [~ cb] ~]
    >`).velocity(`<
      0.27
    >`),
    // Shaker
    golpe(
      `<
      [~ sh sh] [~ sh sh] [~ sh sh] [~ sh sh]
      [~ sh sh] [~ sh sh] [~ sh sh] [~ sh sh]
      [~ sh sh] [~ sh sh] [~ sh sh] [~ sh sh]
      [~ sh sh] [~ sh sh] [~ sh sh] [~ sh sh]
    >`,
      GHOST,
    ),
  ),
};

// ─────────────────────── C1, primera mitad (c.27–34) ───────────────────────
/*
Suenan violín, guitarra, piano y batería.
El violín va con arco (escrito en el c.27).
La guitarra arpegia sus acordes, como MuseScore.
*/

const C1 = {
  desde: 27,
  tecnica: SONIDO.arco, // el sonido del violín
  arpegio: true, // la guitarra arpegia sus acordes
  violin: [
    ligar(8, "G4"), // c.27   Em — se liga 8 semicorcheas al c.28
    "[~@2 B4]", // c.28   G — sigue lo del c.27
    "A4", // c.29   F#m7
    "[F#4 D4]", // c.30   Bm
    "G4", // c.31   Em
    "[B4 D4 B3]", // c.32   G
    "C#4", // c.33   A7
    "[D4@2 A4]", // c.34   D
  ],
  guitarra: [
    "[E2,B2,E3,G3,B3,E4]", // c.27   Em
    "[G2,B2,G3,B3]", // c.28   G
    "[F#2,A2,F#3,A3]", // c.29   F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.30   Bm
    "[E2,B2,E3,G3,B3,E4]", // c.31   Em
    "[G2,B2,G3,B3]", // c.32   G
    "[A2,C#3,E4,A4,E5]", // c.33   A7
    "[~ [A3,D4,F#4,A4] [A3,D4,F#4,A4]]", // c.34   D
  ],
  der: [
    "[~ E4 E4]", // c.27   Em
    "[~ G4 G4]", // c.28   G
    "[~ F#4 F#4]", // c.29   F#m7
    "~", // c.30   Bm
    "[~ E4 E4]", // c.31   Em
    "[~ G4 G4]", // c.32   G
    "[~@2 A4@3 A4]", // c.33   A7
    "~", // c.34   D
  ],
  izq: [
    "[E3 ~@2]", // c.27   Em
    "[G3 ~@2]", // c.28   G
    "[F#3 ~@2]", // c.29   F#m7
    "[B3, [B2 ~@2]]", // c.30   Bm
    "[E3 ~@2]", // c.31   Em
    "[G3 ~@2]", // c.32   G
    "[A2@2 E3@3 E3]", // c.33   A7
    "[D3, [D2 ~@2]]", // c.34   D
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      49, // c.27
      55, // c.28
      57, // c.29
      62, // c.30
      70, // c.31
      70, // c.32
      70, // c.33
      70, // c.34
    ],
    guitarra: [
      100, // c.27
      100, // c.28
      100, // c.29
      100, // c.30
      100, // c.31
      100, // c.32
      100, // c.33
      100, // c.34
    ],
    piano: [
      80, // c.27
      80, // c.28
      80, // c.29
      80, // c.30
      80, // c.31
      80, // c.32
      80, // c.33
      80, // c.34
    ],
  },
  // Efectos de esta sección; los que no están salen de EFECTOS (en 1). Vienen
  // de 2.c1
  efectos: {
    piano: {
      room: 1,
      roomsize: 0.5,
    },
    guitarra: {
      pan: 0.5,
    },
  },
  // Batería. Una columna por compás; filas: c.27–30 · c.31–34
  bateria: bateria(
    // Bombo
    golpe(
      `<
      [bd ~ ~] [bd ~ ~] [bd ~ ~] ~
      [bd ~ ~] [bd ~ ~] [bd ~ ~] ~
    >`,
      SUAVE,
    ),
    // Caja
    golpe(
      `<
      [~ sd sd] [~ sd sd] [~ sd sd] [~ sd sd]
      [~ sd sd] [~ sd sd] [~ sd sd] [~ sd sd]
    >`,
      SUAVE,
    ),
    // Platillos
    golpe(
      `<
      [hh oh ~] ~         ~         ~
      ~         ~         ~         ~
    >`,
      FUERTE,
    ),
    // Pandereta
    golpe(
      `<
      [tb ~ ~] [tb ~ ~] [tb ~ ~] [tb ~ ~]
      [tb ~ ~] [tb ~ ~] [tb ~ ~] [tb ~ ~]
    >`,
      SUAVE,
    ),
    // Palmas
    golpe(
      `<
      ~        ~        ~        [cp ~ ~]
      ~        ~        ~        [cp ~ ~]
    >`,
      SUAVE,
    ),
  ),
};

// ═══════════════════════ 5. Forma ══════════════════════

const TRAMO = [INTRO, V1, C1];

// Unos compases sueltos, en bucle: tramo(9, 13) va del c.9 al c.13
let tramo = (desde, hasta) => {
  let inicio = TRAMO[0].desde;
  let fin = inicio + TRAMO.reduce((n, sec) => n + largo(sec), 0) - 1;
  if (desde < inicio || hasta > fin || desde > hasta) {
    fallar(String.raw`tramo: este archivo va del c.${inicio} al c.${fin}`);
  }
  let partes = TRAMO.filter(
    (sec) => sec.desde <= hasta && sec.desde + largo(sec) > desde,
  ).map((sec) =>
    recortar(
      sec,
      Math.max(desde, sec.desde),
      Math.min(hasta, sec.desde + largo(sec) - 1),
    ),
  );
  return forma(...partes);
};

forma(...TRAMO);

// Para trabajar un pedazo, cambia la línea de arriba. Todo suena en bucle:
//   tramo(9, 13)    la entrada al V1
//   tramo(25, 29)   la salida al C1
//   tocar(V1)       una sección sola
