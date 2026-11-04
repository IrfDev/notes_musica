setcpm(160 / 3);

/*
Louise, la pieza entera: c.1–111.

NO SE EDITA. Lo genera ./_scripts/pieza-strudel.py con los archivos de producción de esta carpeta, y
lo pisa cada vez que corre. Para cambiar algo, cámbialo en el archivo de su sección, pásalo a los
vecinos que comparten esos compases y vuelve a correr el script.

De dónde sale cada sección
  Intro  c.1–10     0.intro.strudel.js
  V1     c.11–26    1.v1.strudel.js
  C1     c.27–42    2.c1.strudel.js
  B1     c.43–50    3.b1.strudel.js
  V2     c.51–66    4.v2.strudel.js
  C2     c.67–82    5.c2.strudel.js
  B2     c.83–92    6.b2.strudel.js
  C3     c.93–108   7.c3.strudel.js
  Outro  c.109–111  7.c3.strudel.js   solo «Outro, primera mitad»: todavía no tiene archivo propio

  Las partes 1 a 3 (sonido, batería, herramientas) son iguales en todos los archivos; el script lo
  comprueba antes de unir.

Cómo se escucha
  forma(...TRAMO) al final toca la pieza entera, en bucle; tramo(51, 66) repite solo
  esos compases, y tocar(V2) una sección sola.
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

// ─────────────────────── Intro (c.1–10) ────────────────────────────────────
/*
Suenan piano y batería. Callan violín y guitarra.
*/

const INTRO = {
  desde: 1,
  tecnica: SONIDO.arco, // el sonido del violín
  arpegio: true, // la guitarra arpegia sus acordes
  violin: [
    "~", // c.1    D
    "~", // c.2    D/F#
    "~", // c.3    A
    "~", // c.4    Bm
    "~", // c.5    G
    "~", // c.6    D
    "~", // c.7    D
    "~", // c.8    A
    "~", // c.9    Bm
    "~", // c.10   Gmaj7
  ],
  guitarra: [
    "~", // c.1    D
    "~", // c.2    D/F#
    "~", // c.3    A
    "~", // c.4    Bm
    "~", // c.5    G
    "~", // c.6    D
    "~", // c.7    D
    "~", // c.8    A
    "~", // c.9    Bm
    "~", // c.10   Gmaj7
  ],
  der: [
    "[A4 G4@2 F#4]", // c.1    D
    "[D4@5 F#4@7]", // c.2    D/F#
    "[~ C#5@2 C#5]", // c.3    A
    "[~ [F#4,D5]@2 [F#4,D5]]", // c.4    Bm
    "[~ [D4,D5]@2 [D4,B4]]", // c.5    G
    "[A4 G4@2 F#4]", // c.6    D
    "[D4@5 F#4@7]", // c.7    D
    "[~ [E4,C#5]@2 [E4,C#5]]", // c.8    A
    "[~ [D4,D5]@2 [D4,D5]]", // c.9    Bm
    "[~ [F#4,D5]@2 [E4,E5]]", // c.10   Gmaj7
  ],
  izq: [
    "D3", // c.1    D
    "F#3", // c.2    D/F#
    "[[~ A3@2 A3], A2]", // c.3    A
    "[[~ B3@2 B3], B2]", // c.4    Bm
    "[[~ G3@2 G3], G2]", // c.5    G
    "[D2,A3]", // c.6    D
    "F#2", // c.7    D
    "[[~ A3@2 A3], A2]", // c.8    A
    "[[~ [F#3,B3]@2 [F#3,B3]], B2]", // c.9    Bm
    "[[~ [G3,C#4]@2 [G3,C#4]], [G2@2 ~]]", // c.10   Gmaj7
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      90, // c.1
      50, // c.2
      80, // c.3
      80, // c.4
      80, // c.5
      80, // c.6
      80, // c.7
      80, // c.8
      80, // c.9
      80, // c.10
    ],
    guitarra: [
      80, // c.1
      80, // c.2
      80, // c.3
      80, // c.4
      80, // c.5
      80, // c.6
      80, // c.7
      80, // c.8
      80, // c.9
      80, // c.10
    ],
    piano: [
      100, // c.1
      100, // c.2
      80, // c.3
      80, // c.4
      80, // c.5
      100, // c.6
      100, // c.7
      80, // c.8
      80, // c.9
      80, // c.10
    ],
  },
  // Efectos de esta sección; los que no están salen de EFECTOS (en 1). Los
  // del piano son los que quedaron en el Intro
  efectos: {
    piano: {
      room: 1,
      roomsize: [0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 1], // c.1–10
      delay: [0, 0, 0.25, 0.25, 0.25, 0, 0, 0.25, 0.25, 0.25],
      pan: [0.2, 0.2, 0.8, 0.8, 0.5, 0.2, 0.2, 0.8, 0.8, 0.5],
    },
  },
  // Batería. Una columna por compás; filas: c.1–5 · c.6–10
  bateria: bateria(
    // Bombo
    golpe(
      `<
      ~         [bd ~ ~]  [bd ~ ~]  [bd ~ bd] ~
      [~ ~ bd] [bd ~ ~]  [bd ~ ~]  [bd ~ bd] ~
    >`,
      FUERTE,
    ),
    // Platillos
    golpe(
      `<
      ~        ~        ~        ~        ~
      [cr ~ ~] ~        ~        ~        ~
    >`,
      FUERTE,
    ),
    // Toms
    golpe(
      `<
      ~             ~             ~             ~             [~ ~ [lt ht]]
      ~             ~             ~             ~             [~ ~ [lt ht]]
    >`,
      FUERTE,
    ),
    // Pandereta
    s(
      `<
      ~         [tb tb ~] [~ tb tb] [~ tb tb] [tb ~ ~]
      ~         [tb tb ~] [~ tb tb] [~ tb tb] [tb ~ ~]
    >`,
    ).velocity("<0.5!5 1!5>"),
    // Shaker
    golpe(
      `<
      ~            [sh sh sh]   [sh ~ ~]     [~ [~ sh] ~] [~ [~ sh] ~]
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

// ─────────────────────── C1 (c.27–42) ──────────────────────────────────────
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
    "E4", // c.35   Em
    "D4", // c.36   G
    "F#4", // c.37   F#m7
    "[B3@2 D4@3 F#4]", // c.38   Bm
    "[E4@2 C#4]", // c.39   Em
    "D4", // c.40   G
    "[F#4@2 A4@3 A4]", // c.41   A7
    "D4", // c.42   D
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
    "[E2,B2,E3,G3,B3,E4]", // c.35   Em
    "[G2,B2,G3,B3]", // c.36   G
    "[F#2,A2,F#3,A3]", // c.37   F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.38   Bm
    "[E2,B2,E3,G3,B3,E4]", // c.39   Em
    "[G2,B2,G3,B3]", // c.40   G
    "[A2,C#3,E4,A4,E5]", // c.41   A7
    "~", // c.42   D
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
    "[~ [E4,E5] [E4,E5]]", // c.35   Em
    "[~ [D4,B4] [D4,B4]]", // c.36   G
    "[~ [E4,A4] [E4,A4]]", // c.37   F#m7
    "[D4,F#4]", // c.38   Bm
    "[~ G4 G4]", // c.39   Em
    "[~ [D4,B4] [D4,B4]]", // c.40   G
    "[~@2 [A4,C#5]@3 [A4,C#5]]", // c.41   A7
    "[F#4,D5]", // c.42   D
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
    "[[E2,E3] E3 E3]", // c.35   Em
    "[[G2,G3] G3 G3]", // c.36   G
    "[[F#2,F#3] F#3 F#3]", // c.37   F#m7
    "[B3, [[B2,B3] ~@2]]", // c.38   Bm
    "[[E2,E3] [E3,B3] [E3,B3]]", // c.39   Em
    "[[G2,G3] G3 G3]", // c.40   G
    "[[A2,G3]@2 G3@3 G3]", // c.41   A7
    "[[F#2,F#3]@4 D4 C#4]", // c.42   D
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
      70, // c.35
      70, // c.36
      85, // c.37
      85, // c.38
      85, // c.39
      85, // c.40
      85, // c.41
      85, // c.42
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
      100, // c.35
      100, // c.36
      100, // c.37
      100, // c.38
      100, // c.39
      100, // c.40
      100, // c.41
      100, // c.42
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
      "[80 64@2]", // c.35
      64, // c.36
      64, // c.37
      64, // c.38
      64, // c.39
      64, // c.40
      64, // c.41
      64, // c.42
    ],
  },
  // Efectos de esta sección; los que no están salen de EFECTOS (en 1)
  efectos: {
    piano: {
      room: 1,
      roomsize: 0.5,
    },

    guitarra: {
      pan: 0.5,
    },
  },
  // Batería. Una columna por compás; filas: c.27–30 · c.31–34 · c.35–38 · c.39–42
  bateria: bateria(
    // Bombo
    golpe(
      `<
      [bd ~ ~] [bd ~ ~] [bd ~ ~] ~
      [bd ~ ~] [bd ~ ~] [bd ~ ~] ~
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
      [~ sd sd] [~ sd sd] [~ sd sd] [~ sd sd]
      [~ sd sd] [~ sd sd] [~ sd sd] [sd sd ~]
    >`,
      SUAVE,
    ),
    // Caja
    golpe(
      `<
      ~            ~            ~            ~
      ~            ~            ~            ~
      ~            ~            ~            ~
      ~            ~            ~            [[~ sd] ~ ~]
    >`,
      MEDIO,
    ),
    // Platillos
    golpe(
      `<
      [hh oh ~] ~         ~         ~
      ~         ~         ~         ~
      ~         ~         ~         ~
      ~         ~         ~         ~
    >`,
      FUERTE,
    ),
    // Toms
    golpe(
      `<
      ~              ~              ~              ~
      ~              ~              ~              ~
      ~              ~              ~              ~
      ~              ~              ~              [~ [lt lt] mt]
    >`,
      FUERTE,
    ),
    // Pandereta
    golpe(
      `<
      [tb ~ ~] [tb ~ ~] [tb ~ ~] [tb ~ ~]
      [tb ~ ~] [tb ~ ~] [tb ~ ~] [tb ~ ~]
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
      ~        ~        ~        [cp ~ ~]
      ~        ~        ~        [cp ~ ~]
    >`,
      SUAVE,
    ),
  ),
};

// ─────────────────────── B1 (c.43–50) ──────────────────────────────────────
/*
Suenan piano y batería. Callan violín y guitarra.
*/

const B1 = {
  desde: 43,
  tecnica: SONIDO.arco, // el sonido del violín
  arpegio: true, // la guitarra arpegia sus acordes
  violin: [
    "~", // c.43   Bm
    "~", // c.44   Em
    "~", // c.45   E
    "~", // c.46   D
    "~", // c.47   D
    "~", // c.48   A
    "~", // c.49   Bm
    "~", // c.50   Gmaj7
  ],
  guitarra: [
    "~", // c.43   Bm
    "~", // c.44   Em
    "~", // c.45   E
    "~", // c.46   D
    "~", // c.47   D
    "~", // c.48   A
    "~", // c.49   Bm
    "~", // c.50   Gmaj7
  ],
  der: [
    "[F#4,D5]", // c.43   Bm
    "[~ [G4,D5] [G4,D5]]", // c.44   Em
    "[~@2 [E4,B4]@3 G#4]", // c.45   E
    "[A4 G4@2 F#4]", // c.46   D
    "[D4@5 F#4@7]", // c.47   D
    "[~ [E4,C#5] [E4,C#5]]", // c.48   A
    "[~@2 [F#4,D5]@3 [F#4,D5]]", // c.49   Bm
    "[[G4,D5]@3 [G4,D5] D4@2]", // c.50   Gmaj7
  ],
  izq: [
    "[B3@2 D3@3 F#3]", // c.43   Bm
    "[[E3,B3] B3 B3]", // c.44   Em
    "[[A2,E3] E3]", // c.45   E
    "[D2,D3]", // c.46   D
    "A2", // c.47   D
    "[[~ A3 A3], A2]", // c.48   A
    "[[~@2 B3@3 B3], B2]", // c.49   Bm
    "[[~@2 B3], [G2@2 ~]]", // c.50   Gmaj7
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      65, // c.43
      65, // c.44
      65, // c.45
      65, // c.46
      65, // c.47
      65, // c.48
      65, // c.49
      65, // c.50
    ],
    guitarra: [
      80, // c.43
      80, // c.44
      80, // c.45
      80, // c.46
      80, // c.47
      80, // c.48
      80, // c.49
      80, // c.50
    ],
    piano: [
      96, // c.43
      98, // c.44
      100, // c.45
      103, // c.46
      104, // c.47
      108, // c.48
      110, // c.49
      112, // c.50
    ],
  },
  // Efectos de esta sección; los que no están salen de EFECTOS (en 1)
  efectos: {
    piano: {},
  },
  // Batería. Una columna por compás; filas: c.43–45 · c.46–50
  bateria: bateria(
    // Bombo
    golpe(
      `<
      ~         ~         ~
      ~         ~         [bd ~ ~]  [bd ~ bd] ~
    >`,
      FUERTE,
    ),
    // Caja
    golpe(
      `<
      ~             ~             ~
      ~             ~             [~ sd sd]     [sd [~ sd] ~] ~
    >`,
      MEDIO,
    ),
    // Platillos
    golpe(
      `<
      [cr ~ ~] ~        ~
      ~        ~        ~        ~        ~
    >`,
      MEDIO,
    ),
    // Toms
    golpe(
      `<
      ~             ~             ~
      ~             ~             ~             ~             [~ ~ [lt ht]]
    >`,
      MEDIO,
    ),
    // Pandereta
    golpe(
      `<
      ~         ~         ~
      ~         ~         [~ tb tb] [~ tb tb] [tb ~ ~]
    >`,
      MEDIO,
    ),
    // Palmas
    golpe(
      `<
      ~             ~             ~
      ~             ~             ~             ~             [cp [~ cp] ~]
    >`,
      MEDIO,
    ),
    // Shaker
    golpe(
      `<
      ~            ~            ~
      ~            ~            [sh ~ ~]     [~ [~ sh] ~] [~ [~ sh] ~]
    >`,
      GHOST,
    ),
  ),
};

// ─────────────────────── V2 (c.51–66) ──────────────────────────────────────
/*
Suenan violín, guitarra, piano y batería.
El violín va en pizz. (escrito en el c.51).
La guitarra arpegia sus acordes, como MuseScore.
*/

const V2 = {
  desde: 51,
  tecnica: SONIDO.pizz, // el sonido del violín
  arpegio: true, // la guitarra arpegia sus acordes
  violin: [
    "[F#5 D5 F#5]", // c.51   Dmaj7
    "[[C#5,A5] [A4,F#5]@2]", // c.52   F#m · F#m7
    "[G5 C#5 E5]", // c.53   C#dim
    "[C#5@3 [E5,A5] [E5,A5]@2]", // c.54   A · A7
    "[D5@2 A5@3 F#5]", // c.55   Bm7
    "[B4@2 [D5,G5]]", // c.56   G · G6
    "[C#5@2 D5@3 E5]", // c.57   Dmaj7
    "[F#5 [C#5,A5] [C#5,F#5]]", // c.58   F#m · F#m7
    "[[D5,A5]@2 [D5,F#5]]", // c.59   Dmaj7
    "[C#5 F#5 C#5]", // c.60   F#m
    "[E5@2 G5@3 F#5]", // c.61   C#dim
    "[A5 [C#5,A5]]", // c.62   A · A7
    "[D5,F#5]", // c.63   Bm7
    "[B4@2 E5@3 G5]", // c.64   G · G6
    "F#5", // c.65   D6
    "[[A4,A5] [C#5,F#5] [C#4,A4]]", // c.66   F#m
  ],
  guitarra: [
    "[A2,D3,A3,C#4,F#4]", // c.51   Dmaj7
    "[F#3,A3,C#4,F#4]", // c.52   F#m · F#m7
    "[C#3,G3,C#4,E4]", // c.53   C#dim
    "[A2,E3,A3,C#4,E4]", // c.54   A · A7
    "[B2,D3,A3,B3,F#4]", // c.55   Bm7
    "[G2,B2,D3,G3,B3,G4]", // c.56   G · G6
    "[F#2,A2,A3,D4,A4]", // c.57   Dmaj7
    "[F#3,A3,C#4,F#4]", // c.58   F#m · F#m7
    "[~ [D3,F#3,D4,A4] [D3,F#3,D4,A4]]", // c.59   Dmaj7
    "[F#3,A3,C#4,F#4]", // c.60   F#m
    "[~ [C#3,E3,C#4,G4] [C#3,E3,C#4,G4]]", // c.61   C#dim
    "[A2,E3,A3,C#4,E4]", // c.62   A · A7
    "[~ [B3,F#4,B4,F#5] [B3,F#4,B4,F#5]]", // c.63   Bm7
    "[G3,D4,G4,D5]", // c.64   G · G6
    "[~ [F#3,A3,D4,A4] [F#3,A3,D4,A4]]", // c.65   D6
    "[C#3,A3,C#4,F#4,A4,C#5]", // c.66   F#m
  ],
  der: [
    "F#4", // c.51   Dmaj7
    "[[C#4,C#5]@3 [C#4,A4]]", // c.52   F#m · F#m7
    "[E4,G4]", // c.53   C#dim
    "[[E4,C#5] [C#4,G5]]", // c.54   A · A7
    "[D4,F#5]", // c.55   Bm7
    "[[B3,D5]@3 [E4,B4]]", // c.56   G · G6
    "[F#4,C#5]", // c.57   Dmaj7
    "[[C#4,A4] [A4,E5]]", // c.58   F#m · F#m7
    "[[F#4,C#5] ~@2]", // c.59   Dmaj7
    "[[C#4,C#5]@3 [C#4,A4]]", // c.60   F#m
    "[E4,G4]", // c.61   C#dim
    "[[E4,C#5] [C#4,G5]]", // c.62   A · A7
    "[D4,F#5]", // c.63   Bm7
    "[[B3,D5]@3 [E4,B4]]", // c.64   G · G6
    "[F#4,A4]", // c.65   D6
    "[[C#4,A4] [A4,E5]]", // c.66   F#m
  ],
  izq: [
    "[D3,C#4]", // c.51   Dmaj7
    "[F#3@3 A3]", // c.52   F#m · F#m7
    "[C#3,E3]", // c.53   C#dim
    "[A3 A3]", // c.54   A · A7
    "B3", // c.55   Bm7
    "[G3@3 F#3]", // c.56   G · G6
    "A3", // c.57   Dmaj7
    "[F#2 F#2]", // c.58   F#m · F#m7
    "[[D2,D3] ~@2]", // c.59   Dmaj7
    "[A3@3 A3]", // c.60   F#m
    "[C#3,E3]", // c.61   C#dim
    "[A3 A3]", // c.62   A · A7
    "B3", // c.63   Bm7
    "[G3@3 F#3]", // c.64   G · G6
    "D3", // c.65   D6
    "[[F#3,A3] [F#3,A3]]", // c.66   F#m
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      "[64 70 76]", // c.51
      127, // c.52
      127, // c.53
      127, // c.54
      127, // c.55
      127, // c.56
      127, // c.57
      127, // c.58
      127, // c.59
      127, // c.60
      127, // c.61
      127, // c.62
      127, // c.63
      127, // c.64
      127, // c.65
      127, // c.66
    ],
    guitarra: [
      100, // c.51
      100, // c.52
      100, // c.53
      100, // c.54
      100, // c.55
      100, // c.56
      100, // c.57
      100, // c.58
      100, // c.59
      100, // c.60
      100, // c.61
      100, // c.62
      100, // c.63
      100, // c.64
      80, // c.65
      80, // c.66
    ],
    piano: [
      77, // c.51
      75, // c.52
      64, // c.53
      66, // c.54
      66, // c.55
      68, // c.56
      68, // c.57
      70, // c.58
      68, // c.59
      68, // c.60
      68, // c.61
      68, // c.62
      68, // c.63
      76, // c.64
      78, // c.65
      79, // c.66
    ],
  },
  // Efectos de esta sección; los que no están salen de EFECTOS (en 1)
  efectos: {
    violin: {
      pan: 0.1,
    },
    piano: {
      pan: 0.8,
      room: 1,
      roomsize: 0.5,
    },
    guitarra: {
      pan: 0.5,
    },
  },
  // Batería. Una columna por compás; filas: c.51–54 · c.55–58 · c.59–62 · c.63–66
  bateria: bateria(
    // Bombo
    golpe(
      `<
      [bd ~ ~] [bd ~ ~] [bd ~ ~] [bd ~ ~]
      [bd ~ ~] [bd ~ ~] [bd ~ ~] ~
      [bd ~ ~] [bd ~ ~] [bd ~ ~] [bd ~ ~]
      [bd ~ ~] [bd ~ ~] [bd ~ ~] ~
    >`,
      SUAVE,
    ),
    // Caja
    golpe(
      `<
      ~             ~             ~             ~
      ~             ~             ~             ~
      [~ sd ~]      [~ [sd sd] ~] [~ sd ~]      [~ [sd sd] ~]
      [~ sd ~]      [~ [sd sd] ~] [~ sd ~]      ~
    >`,
      SUAVE,
    ),
    // Platillos
    golpe(
      `<
      [oh hh ~] ~         ~         ~
      ~         ~         ~         ~
      [oh hh ~] ~         ~         ~
      ~         ~         ~         ~
    >`,
      MEDIO,
    ),
    // Toms
    golpe(
      `<
      ~          ~          ~          ~
      ~          ~          ~          [mt lt ht]
      ~          ~          ~          ~
      ~          ~          ~          [mt lt ht]
    >`,
      MEDIO,
    ),
    // Pandereta
    golpe(
      `<
      [~ ~ tb] [~ ~ tb] [~ ~ tb] [~ ~ tb]
      [~ ~ tb] [~ ~ tb] [~ ~ tb] [~ ~ tb]
      [~ ~ tb] [~ ~ tb] [~ ~ tb] [~ ~ tb]
      [~ ~ tb] [~ ~ tb] [~ ~ tb] [~ ~ tb]
    >`,
      SUAVE,
    ),
    // Cencerro
    golpe(
      `<
      [~ cb ~] [~ cb ~] [~ cb ~] [~ cb ~]
      [~ cb ~] [~ cb ~] [~ cb ~] [~ cb ~]
      [~ cb ~] [~ cb ~] [~ cb ~] [~ cb ~]
      [~ cb ~] [~ cb ~] [~ cb ~] [~ cb ~]
    >`,
      GHOST,
    ),
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
    ligar(8, "G4"), // c.67   Em — se liga 8 semicorcheas al c.68
    "[~@4 B4 D5]", // c.68   G — sigue lo del c.67
    "[A4 G4]", // c.69   F#m7
    "[F#4 D4]", // c.70   Bm
    "[G4@3 E4 G4 A4]", // c.71   Em
    "[B4 D4 B3]", // c.72   G
    "[C#4@2 B3@3 C#4]", // c.73   A7
    "[D4 A4]", // c.74   D
    "[E4@2 C#4]", // c.75   Em
    "D4", // c.76   G
    "[E4@4 F#4 G4@3 A4@4]", // c.77   F#m7
    "[B4 F#4]", // c.78   Bm
    "[[E4,G4]@2 [B3,B4]]", // c.79   Em
    "[D4,G4,E5]", // c.80   Gmaj13
    "[[F#4,C#5]@2 [A4,E5]@3 [E4,C#5]]", // c.81   A7
    "[G4,Eb5]", // c.82   Eb7
  ],
  guitarra: [
    "[E2,B2,E3,G3,B3,E4]", // c.67   Em
    "[G2,B2,G3,B3]", // c.68   G
    "[F#2,A2,F#3,A3]", // c.69   F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.70   Bm
    "[E2,B2,E3,G3,B3,E4]", // c.71   Em
    "[G2,B2,G3,B3]", // c.72   G
    "[A2,C#3,E4,A4,E5]", // c.73   A7
    "[~ [A3,D4,F#4,A4] [A3,D4,F#4,A4]]", // c.74   D
    "[E2,B2,E3,G3,B3,E4]", // c.75   Em
    "[G2,B2,G3,B3]", // c.76   G
    "[F#2,A2,F#3,A3]", // c.77   F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.78   Bm
    "[E2,B2,E3,G3,B3,E4]", // c.79   Em
    "[G2,B2,G3,B3]", // c.80   Gmaj13
    "[A2,C#3,E4,A4,E5]", // c.81   A7
    "~", // c.82   Eb7
  ],
  der: [
    "[~ E4 E4]", // c.67   Em
    "[~ G4 G4]", // c.68   G
    "[~ F#4 F#4]", // c.69   F#m7
    "~", // c.70   Bm
    "[~ E4 E4]", // c.71   Em
    "[~ G4 G4]", // c.72   G
    "[~@2 A4@3 A4]", // c.73   A7
    "~", // c.74   D
    "[~ [E4,E5] [E4,E5]]", // c.75   Em
    "[~ [D4,B4] [D4,B4]]", // c.76   G
    "[~ [E4,A4] [E4,A4]]", // c.77   F#m7
    "[D4,F#4]", // c.78   Bm
    "[~ G4 G4]", // c.79   Em
    "[~ [E4,D5] [F#4,D5]]", // c.80   Gmaj13
    "[~@2 [G4,C#5]@3 [A4,E5]]", // c.81   A7
    "[Bb4,Eb5]", // c.82   Eb7
  ],
  izq: [
    "[E3 ~@2]", // c.67   Em
    "[G3 ~@2]", // c.68   G
    "[F#3 ~@2]", // c.69   F#m7
    "[B3, [B2 ~@2]]", // c.70   Bm
    "[E3 ~@2]", // c.71   Em
    "[G3 ~@2]", // c.72   G
    "[A2@2 E3@3 E3]", // c.73   A7
    "[D3, [D2 ~@2]]", // c.74   D
    "[[E2,E3] E3 E3]", // c.75   Em
    "[[B2,G3] G3 G3]", // c.76   G
    "[[F#2,F#3] F#3 F#3]", // c.77   F#m7
    "[B3, [[B2,B3] ~@2]]", // c.78   Bm
    "[[E2,E3] [E3,B3] [E3,B3]]", // c.79   Em
    "[[G2,F#3] [E3,G3] [F#3,B3]]", // c.80   Gmaj13
    "[[A2,E3]@2 [C#3,E3]@3 [C#3,E3]]", // c.81   A7
    "[[Eb2,Db3]@4 Bb3 G3]", // c.82   Eb7
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
      71, // c.75
      71, // c.76
      71, // c.77
      74, // c.78
      78, // c.79
      80, // c.80
      85, // c.81
      90, // c.82
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
  // Efectos de esta sección; los que no están salen de EFECTOS (en 1)
  efectos: {
    violin: {
      room: [
        0, // c.67
        0, // c.68
        0, // c.69
        0, // c.70
        0, // c.71
        0, // c.72
        0, // c.73
        0, // c.74
        1, // c.75
        1, // c.76
        1, // c.77
        1, // c.78
        0, // c.79
        0, // c.80
        0, // c.81
        0, // c.82
      ],
      roomsize: 0.5,
    },
  },
  // Batería. Una columna por compás; filas: c.67–70 · c.71–74 · c.75–78 · c.79–82
  bateria: bateria(
    // Bombo
    golpe(
      `<
      [bd ~ bd]  [bd ~ bd]  [bd ~ bd]  ~
      [bd ~ bd]  [bd ~ bd]  ~          [bd ~ bd]
      [bd ~ bd]  [bd bd bd] [bd bd bd] [bd bd bd]
      [bd bd bd] [bd bd bd] [bd bd bd] ~
    >`,
      MEDIO,
    ),
    // Caja
    golpe(
      `<
      [~ sd sd] [~ sd sd] [~ sd sd] [~ sd sd]
      [~ sd sd] [~ sd sd] [~ sd sd] [~ sd sd]
      [~ sd sd] [~ sd sd] [~ sd sd] [~ sd sd]
      [~ sd sd] [~ sd sd] [~ sd sd] ~
    >`,
      SUAVE,
    ),
    // Caja
    golpe(
      `<
      ~             ~             ~             ~
      ~             ~             ~             ~
      ~             ~             ~             ~
      ~             ~             ~             [~ [sd sd] ~]
    >`,
      SUAVE,
    ),
    // Platillos
    golpe(
      `<
      [cr oh ~] ~         ~         ~
      ~         ~         ~         ~
      ~         ~         ~         ~
      ~         ~         ~         ~
    >`,
      FUERTE,
    ),
    // Platillos
    golpe(
      `<
      [~ ~ hh] ~        ~        ~
      ~        ~        ~        ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`,
      MEDIO,
    ),
    // Platillos
    golpe(
      `<
      ~         [~ oh hh] ~         [~ oh hh]
      ~         [~ oh hh] ~         [~ oh hh]
      ~         [~ oh hh] ~         [~ oh hh]
      [~ oh hh] [~ oh hh] [~ oh hh] ~
    >`,
      SUAVE,
    ),
    // Toms
    golpe(
      `<
      ~          ~          ~          [lt mt ht]
      ~          ~          [lt mt ht] ~
      ~          ~          ~          ~
      ~          ~          ~          [lt ~ ~]
    >`,
      FUERTE,
    ),
    // Toms
    golpe(
      `<
      ~        ~        ~        ~
      ~        ~        ~        ~
      ~        ~        ~        ~
      ~        ~        ~        [~ ~ mt]
    >`,
      SUAVE,
    ),
    // Pandereta
    golpe(
      `<
      ~             ~             ~             ~
      ~             [tb tb ~]     [tb tb ~]     [~ tb tb]
      [~ tb tb]     [~ tb tb]     [~ tb [~ tb]] [~ tb [~ tb]]
      [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]] ~
    >`,
      MEDIO,
    ),

    // Cencerro
    golpe(
      `<
      [cb ~ ~] [cb ~ ~] [cb ~ ~] [cb ~ ~]
      [cb ~ ~] [cb ~ ~] [cb ~ ~] [cb ~ ~]
      [cb ~ ~] [cb ~ ~] [cb ~ ~] [~ ~ cb]
      [~ ~ cb] [~ ~ cb] [~ ~ cb] [cb ~ ~]
    >`,
      SUAVE,
    ),
    // Shaker
    golpe(
      `<
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] [sh ~ ~] ~
    >`,
      SUAVE,
    ),
  ),
};

// ─────────────────────── B2 (c.83–92) ──────────────────────────────────────
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
    "[[D4,A4]@5 [F4,D5]]", // c.83   Dm
    "[[D4,F5] [F4,D5]]", // c.84   Dm
    "[Bb3,Bb4,G5]", // c.85   Gm
    "[C4,A4,E5]", // c.86   Am
    "[[C4,G4,F5]@2 [F4,C5,F5]]", // c.87   Csus4
    "[[G4,D5]@2 [D4,B4]@3 [B3,G4]]", // c.88   G7
    "[[C4,G4]@2 [E4,C5]]", // c.89   C7
    "[[F4,C5,F5] [G4,D5,F5] [A4,Eb5,A5]]", // c.90   F · F7
    "[[Bb4,F5,Bb5]@2 [F4,G5]]", // c.91   Bb
    "[A4,F#5]", // c.92   D
  ],
  guitarra: [
    "~", // c.83   Dm
    "~", // c.84   Dm
    "[~@2 [G2,D3,Bb3]@3 [G2,D3,Bb3]]", // c.85   Gm
    "[~@2 [A2,E3,C4]@3 [A2,E3,C4]]", // c.86   Am
    "[~@2 [C3,F3,Bb3]@3 [C3,F3,Bb3]]", // c.87   Csus4
    "[~@2 [D3,G3,D4]@3 [D3,G3,D4]]", // c.88   G7
    "[[C3,G3,E4] [E3,Bb3,E4]]", // c.89   C7
    "[[F3,C4]@2 [A3,F4]@3 [Eb4,A4]]", // c.90   F · F7
    "[D3,Bb3,D4,F4,Bb4]", // c.91   Bb
    "[[D3,A3,F#4] [D3,A3,F#4]]", // c.92   D
  ],
  der: [
    "[[A4,F5] [G4,E5]@2 [F4,D5]]", // c.83   Dm
    "[[D4,A4] [F4,D5]]", // c.84   Dm
    "[G4 Bb4 D5@3 D5]", // c.85   Gm
    "[E5 A4@3 F4 A4]", // c.86   Am
    "[C5 F4 [G4,F5]@3 [F4,C5]]", // c.87   Csus4
    "[[G4,D5] [B4,F5]@3 D5 B4]", // c.88   G7
    "[C5 G4 E4]", // c.89   C7
    "[F4@2 [A4,F5]@3 [A4,A5]]", // c.90   F · F7
    "[[D4,Bb4,Bb5]@3 [F4,Bb4,Bb5] [F4,Bb4,Bb5]@2]", // c.91   Bb
    "[[F#4,D5,A5]@2 G4 B4 D5 F#5]", // c.92   D
  ],
  izq: [
    "[D2,D3,A3]", // c.83   Dm
    "[[D2,F3] [A2,D3]]", // c.84   Dm
    "[[G2,D3]@2 [D3,G3]@3 [D3,G3]]", // c.85   Gm
    "[[C3,A3] [E3,A3]@3 [A2,E3]@2]", // c.86   Am
    "[[C3,G3]@2 [F2,C3]@3 [C3,G3]]", // c.87   Csus4
    "[[G2,G3]@2 [F2,F3]@3 [G2,F3]]", // c.88   G7
    "[[C3,Bb3] [C3,G3] [C3,E3]]", // c.89   C7
    "[[F2,F3,A3]@4 ~ [A2,Eb3,A3]]", // c.90   F · F7
    "[Bb2,F3,C4]", // c.91   Bb
    "[[D2,A3]@5 [D2,F#3]]", // c.92   D
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      "[101@5 112]", // c.83
      "[111 107]", // c.84
      102, // c.85
      94, // c.86
      85, // c.87
      77, // c.88
      77, // c.89
      85, // c.90
      90, // c.91
      77, // c.92
    ],
    guitarra: [
      80, // c.83
      80, // c.84
      80, // c.85
      80, // c.86
      80, // c.87
      80, // c.88
      80, // c.89
      80, // c.90
      80, // c.91
      80, // c.92
    ],
    piano: [
      "[96 112@3]", // c.83
      112, // c.84
      112, // c.85
      112, // c.86
      112, // c.87
      112, // c.88
      112, // c.89
      "[112@2 114@3 122]", // c.90
      "[124 127]", // c.91
      127, // c.92
    ],
  },
  // Efectos de esta sección; los que no están salen de EFECTOS (en 1)
  efectos: {
    bateria: {
      // room: 1,
      // roomsize: 0.5,
    },
    piano: {
      room: 1,
      roomsize: 0.5,
    },
  },
  // Batería. Una columna por compás; filas: c.83–84 · c.85–88 · c.89–92
  bateria: bateria(
    // Bombo
    golpe(
      `<
      [bd bd bd]     [bd bd [~ bd]]
      [bd ~ ~]       [bd ~ ~]       [bd ~ ~]       [bd ~ ~]
      [bd ~ ~]       [bd ~ ~]       [bd ~ ~]       ~
    >`,
      NORMAL,
    ),
    // Bombo
    golpe(
      `<
      ~            ~
      [~ [~ bd] ~] ~            [~ [~ bd] ~] ~
      ~            [~ [~ bd] ~] [~ [~ bd] ~] ~
    >`,
      MEDIO,
    ),
    // Caja
    golpe(
      `<
      ~              ~
      [[~ sd] ~ sd]  [[~ sd] ~ sd]  [[~ sd] ~ sd]  [[~ sd] ~ sd]
      ~              [[~ sd] ~ sd]  [sd [~ sd] ~]  [sd sd [~ sd]]
    >`,
      MEDIO,
    ),
    // Platillos
    golpe(
      `<
      [oh hh hh]     ~
      [cr ~ ~]       ~              ~              ~
      ~              [cr oh [oh hh]] [~ ~ [~ hh]]   ~
    >`,
      MEDIO,
    ),
    // Toms
    golpe(
      `<
      [ht ~ ~] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`,
      NORMAL,
    ),
    // Toms
    golpe(
      `<
      ~              ~
      ~              ~              ~              ~
      [~ lt [~ mt]]  [~ mt [~ lt]]  ~              [lt mt [~ ht]]
    >`,
      NORMAL,
    ),
    // Pandereta
    golpe(
      `<
      ~             ~
      [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]]
      ~             [~ tb [~ tb]] [[~ tb] ~ tb] ~
    >`,
      SUAVE,
    ),
    // Pandereta
    golpe(
      `<
      [tb ~ ~] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`,
      SUAVE,
    ),
    // Cencerro
    golpe(
      `<
      [cb cb cb]     ~
      ~             ~             ~             ~
      [~ cb [~ cb]] ~             ~             ~
    >`,
      GHOST,
    ),
    // Palmas
    golpe(
      `<
      [cp ~ ~]            ~
      [~ cp [~ cp]] [~ cp [~ cp]] [~ cp [~ cp]] [~ cp [~ cp]]
      ~             [~ cp [~ cp]] [[~ cp] ~ cp] ~
    >`,
      SUAVE,
    ),

    // Shaker
    golpe(
      `<
      [sh sh ~]      [[sh sh] ~ sh]
      [[sh sh] ~ sh] [[sh sh] ~ sh] [[sh sh] ~ sh] [[sh sh] ~ sh]
      [sh sh [~ sh]] [sh sh [~ sh]] [[sh sh] ~ sh] [sh sh [~ sh]]
    >`,
      GHOST,
    ),
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
    "[B3,G4,E5]", // c.93   Em
    "[[G4,D5] F#4 G4]", // c.94   G
    "[A4@2 C#4@3 D4]", // c.95   F#m7
    "[[D4,F#4]@2 [D4,B4]@3 [F#4,D5]]", // c.96   Bm
    "[G4,E5]", // c.97   Em
    "[[G4,D5] F#4 G4]", // c.98   G
    "[A4 C#4 E4]", // c.99   A7
    "[F#4 E4 D4@2 F#4@2]", // c.100  D
    "[B3,G4]", // c.101  Em
    "[G4 B4 D5]", // c.102  G
    "[F#4@2 G4@3 A4]", // c.103  F#m7
    "[D4,B4]", // c.104  Bm
    "[B4@2 A4@3 E4]", // c.105  Em
    "[D5 B4 G4]", // c.106  G
    "[E4 G4 A4@2 C#5@2]", // c.107  A7
    "[F#4,D5]", // c.108  D
  ],
  guitarra: [
    "[E2,B2,E3,G3,B3,E4]", // c.93   Em
    "[G2,B2,G3,B3]", // c.94   G
    "[F#2,A2,F#3,A3]", // c.95   F#m7
    "~", // c.96   Bm
    "[E2,B2,E3,G3,B3,E4]", // c.97   Em
    "[G2,B2,G3,B3]", // c.98   G
    "[A2,C#3,E4,A4,E5]", // c.99   A7
    "[~ [A3,D4,F#4,A4] [A3,D4,F#4,A4]]", // c.100  D
    "[E2,B2,E3,G3,B3,E4]", // c.101  Em
    "[G2,B2,G3,B3]", // c.102  G
    "[F#2,A2,F#3,A3]", // c.103  F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.104  Bm
    "[E2,B2,E3,G3,B3,E4]", // c.105  Em
    "[G2,B2,G3,B3]", // c.106  G
    "[A2,C#3,E4,A4,E5]", // c.107  A7
    "~", // c.108  D
  ],
  der: [
    "[[G4,E5,G5] E4 E4]", // c.93   Em
    "[~ G4 G4]", // c.94   G
    "[~ F#4 F#4]", // c.95   F#m7
    "[~@2 [B4,F#5]@3 [F#4,B4,F#5]]", // c.96   Bm
    "[~ E4 E4]", // c.97   Em
    "[~ G4 G4]", // c.98   G
    "[~@2 A4@3 A4]", // c.99   A7
    "~", // c.100  D
    "[~ [E4,E5] [E4,E5]]", // c.101  Em
    "[~ [D4,B4] [D4,B4]]", // c.102  G
    "[~ [E4,A4] [E4,A4]]", // c.103  F#m7
    "[D4,F#4]", // c.104  Bm
    "[~ [G4,E5,G5] [G4,E5,G5]]", // c.105  Em
    "[~ [D4,B4,G5] [D4,B4,G5]]", // c.106  G
    "[~@2 [A4,C#5,A5]@3 [A4,C#5,A5]]", // c.107  A7
    ligar(4, "[D4,A4,D5]"), // c.108  D — se liga 4 semicorcheas al c.109
  ],
  izq: [
    "[[E2,E3] ~@2]", // c.93   Em
    "[G3 ~@2]", // c.94   G
    "[F#3 ~@2]", // c.95   F#m7
    "[B3, [B2 ~@2]]", // c.96   Bm
    "[E3 ~@2]", // c.97   Em
    "[G2 G3 G3]", // c.98   G
    "[A2@2 E3@3 E3]", // c.99   A7
    "[D3, [D2 ~@2]]", // c.100  D
    "[[E2,E3] E3 E3]", // c.101  Em
    "[[G2,G3] G3 G3]", // c.102  G
    "[[F#2,F#3] F#3 F#3]", // c.103  F#m7
    "[B3, [[B2,B3] ~@2]]", // c.104  Bm
    "[[E2,E3] [E3,B3] [E3,B3]]", // c.105  Em
    "[[G2,G3] G3 G3]", // c.106  G
    "[[A2,G3]@2 G3@3 [C#2,G3]]", // c.107  A7
    "[D2,A3]", // c.108  D
  ],
  // Velocidad MIDI (0–127) de cada compás, como la toca MuseScore
  dinamica: {
    violin: [
      82, // c.93
      82, // c.94
      82, // c.95
      82, // c.96
      77, // c.97
      77, // c.98
      77, // c.99
      77, // c.100
      77, // c.101
      "[75 73 71]", // c.102
      "[69@2 68@3 65]", // c.103
      64, // c.104
      "[59@2 57@3 54]", // c.105
      "[53 51 50]", // c.106
      "[48 47 46@2 44@2]", // c.107
      42, // c.108
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
      100, // c.93
      90, // c.94
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
  },
  // Efectos de esta sección; los que no están salen de EFECTOS (en 1)
  efectos: {
    piano: { room: 1, roomsize: 0.5 },
  },
  // Batería. Una columna por compás; filas: c.93–96 · c.97–100 · c.101–104 · c.105–108
  bateria: bateria(
    // Bombo
    golpe(
      `<
      [bd bd [~ bd]] [bd ~ ~]       [bd ~ ~]       [bd ~ ~]
      [bd ~ ~]       [bd ~ bd]      ~              [bd ~ bd]
      [bd ~ bd]      [bd ~ bd]      [bd ~ bd]      [bd ~ bd]
      [bd ~ bd]      [bd ~ bd]      ~              ~
    >`,
      MEDIO,
    ),
    // Caja
    golpe(
      `<
      ~             [~ sd [~ sd]] [~ sd [~ sd]] [~ sd [~ sd]]
      [~ sd [~ sd]] [~ sd [~ sd]] ~             [~ sd ~]
      [~ ~ sd]      [~ ~ sd]      [~ ~ sd]      ~
      ~             ~             ~             ~
    >`,
      SUAVE,
    ),
    // Caja
    golpe(
      `<
      ~              ~              ~              ~
      ~              ~              ~              [~ ~ sd]
      [sd sd [~ sd]] [sd sd [~ sd]] [sd sd [~ sd]] [[sd sd] ~ sd]
      ~              ~              ~              ~
    >`,
      SUAVE,
    ),
    // Platillos
    golpe(
      `<
      [cr ~ ~] [~ oh [~ hh]]   ~              ~
      ~              ~              ~              [cr ~ ~]
      [~ oh [~ hh]]   ~              ~              ~
      ~              ~              ~              [cr ~ ~]
    >`,
      MEDIO,
    ),
    // Platillos
    golpe(
      `<
      ~             ~             [~ oh [~ hh]] ~
      [~ oh [~ hh]] [~ oh [~ hh]] ~             [~ oh hh]
      ~             ~             ~             ~
      ~             ~             ~             [~ oh [~ hh]]
    >`,
      SUAVE,
    ),
    // Toms
    golpe(
      `<
      ~              ~              ~              ~
      [lt mt [~ ht]] ~              [lt mt [~ ht]] ~
      ~              ~              ~              ~
      ~              ~              [lt mt [~ ht]] ~
    >`,
      NORMAL,
    ),
    // Pandereta
    golpe(
      `<
      ~             ~             ~             ~
      ~             ~             [~ tb [~ tb]] ~
      ~             ~             ~             ~
      ~             ~             ~             ~
    >`,
      SUAVE,
    ),
    // Pandereta
    golpe(
      `<
      [[~ tb] ~ tb] ~             ~             ~
      ~             ~             ~             ~
      ~             ~             ~             ~
      ~             ~             ~             ~
    >`,
      SUAVE,
    ),
    // Cencerro
    golpe(
      `<
      ~             ~             ~             ~
      ~             ~             ~             [[~ cb] ~ cb]
      [[~ cb] ~ cb] [[~ cb] ~ cb] [[~ cb] ~ cb] [[~ cb] ~ cb]
      [[~ cb] ~ cb] [[~ cb] ~ cb] ~             ~
    >`,
      GHOST,
    ),
    // Palmas
    golpe(
      `<
      ~         ~         ~         ~
      ~         ~         ~         ~
      [cp cp ~] [cp cp ~] [cp cp ~] ~
      ~         ~         ~         ~
    >`,
      GHOST,
    ),
    // Shaker
    golpe(
      `<
      [sh sh [~ sh]] [sh sh [~ sh]] ~              [sh sh [~ sh]]
      ~              [sh sh [~ sh]] [sh sh [~ sh]] [sh sh sh]
      [sh sh [~ sh]] [sh sh [~ sh]] [sh sh [~ sh]] [sh sh [~ sh]]
      [sh sh [~ sh]] [sh sh [~ sh]] [sh sh [~ sh]] [sh sh [~ sh]]
    >`,
      GHOST,
    ),
    // Shaker
    golpe(
      `<
      ~        ~        [sh ~ ~] ~
      [sh ~ ~] ~        ~        ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`,
      GHOST,
    ),
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
    "[[F#2,A2] G2@2 F#2]", // c.109
    ligar(1, "[D2@5 D3@7]"), // c.110  D — se liga 1 semicorchea al c.111
    "~", // c.111  — sigue lo del c.110
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
  // Efectos de esta sección; los que no están salen de EFECTOS (en 1)
  efectos: {},
  // Batería. Una columna por compás; filas: c.109–111
  bateria: bateria(
    // Pandereta
    golpe(
      `<
      [~ tb tb]     [tb [~ tb] ~] ~
    >`,
      MEDIO,
    ),
    // Pandereta
    golpe(
      `<
      [tb ~ ~] ~        ~
    >`,
      SUAVE,
    ),
  ),
};

// ═══════════════════════ 5. Forma ══════════════════════

const TRAMO = [INTRO, V1, C1, B1, V2, C2, B2, C3, OUTRO];

// Unos compases sueltos, en bucle: tramo(51, 66) va del c.51 al c.66
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

// Para oír un pedazo, cambia la línea de arriba. Todo suena en bucle:
//   tramo(51, 66)   del c.51 al c.66
//   tocar(V2)       una sección sola
