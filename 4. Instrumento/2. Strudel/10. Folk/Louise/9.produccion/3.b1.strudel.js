setcpm(160 / 3);

/*
Louise, el B1: para producir. Con el final de la sección anterior y el
inicio de la siguiente, para oír cómo entra y cómo sale.

Fuente: 7. Partituras/2. Composiciones/Louise-melancolica.mscz
        guardado 2026-10-31 12:31 · commit fa80a73 (blob 0bf41d8, limpio)
        c.35–58: C1, segunda mitad (c.35–42), B1 (c.43–50) y V2, primera mitad (c.51–58).
        Notas, golpes y velocidades comprobados contra el .musicxml y contra
        el MIDI que exporta MuseScore, que es lo que suena.

Para qué
  Probar dinámicas, batería, sonidos y efectos. Todo está escrito compás por
  compás, aunque se repita: nada sale de una función ni de otra sección. Si
  cambias un compás, cambia solo ese. Lo que se quede se pasa a mano a
  MuseScore; este archivo no vuelve al .mscz.

  El final del C1 (c.35–42) suena como quedó en 2.c1: dinámicas, batería y
  efectos. El platillo del c.43 también.

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
  forma(...TRAMO) al final toca todo en bucle; tramo(41, 45) repite
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

// ─────────────────────── C1, segunda mitad (c.35–42) ───────────────────────
/*
Suenan violín, guitarra, piano y batería.
El violín va con arco (escrito en el c.27).
La guitarra arpegia sus acordes, como MuseScore.
*/

const C1 = {
  desde: 35,
  tecnica: SONIDO.arco, // el sonido del violín
  arpegio: true, // la guitarra arpegia sus acordes
  violin: [
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
  // Batería. Una columna por compás; filas: c.35–38 · c.39–42
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
      [~ sd sd] [~ sd sd] [~ sd sd] [sd sd ~]
    >`,
      SUAVE,
    ),
    // Caja
    golpe(
      `<
      ~            ~            ~            ~
      ~            ~            ~            [[~ sd] ~ ~]
    >`,
      MEDIO,
    ),
    // Toms
    golpe(
      `<
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

// ─────────────────────── V2, primera mitad (c.51–58) ───────────────────────
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
  // Batería. Una columna por compás; filas: c.51–54 · c.55–58
  bateria: bateria(
    // Bombo
    golpe(
      `<
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
    >`,
      SUAVE,
    ),
    // Platillos
    golpe(
      `<
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
    >`,
      MEDIO,
    ),
    // Pandereta
    golpe(
      `<
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
    >`,
      GHOST,
    ),
    // Shaker
    golpe(
      `<
      [~ sh sh] [~ sh sh] [~ sh sh] [~ sh sh]
      [~ sh sh] [~ sh sh] [~ sh sh] [~ sh sh]
    >`,
      GHOST,
    ),
  ),
};

// ═══════════════════════ 5. Forma ══════════════════════

const TRAMO = [C1, B1, V2];

// Unos compases sueltos, en bucle: tramo(41, 45) va del c.41 al c.45
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
//   tramo(41, 45)   la entrada al B1
//   tramo(49, 53)   la salida al V2
//   tocar(B1)       una sección sola
