setcpm(160 / 3);

/*
Louise, la partitura entera en Strudel: violín, guitarra, piano y batería.

Fuente: 7. Partituras/2. Composiciones/Louise-melancolica.mscz
        guardado 2026-10-24 12:29 · blob d6c13e5 · sin commit (HEAD 76af301)
        c.1–111, todo lo que tiene la partitura. El autosave (12:37) es más
        nuevo y no está: esto es lo guardado.

Cómo está armado
  1. Sonido y mezcla      qué suena y a qué volumen. Para trabajar la batería
                          sola, pon los demás en 0 en MEZCLA.
  2. Matices              dinámicas y pizz./arco de la partitura, por compás.
  3. Herramientas         las funciones. Ninguna sabe nada de Louise: sirven
                          para cualquier pieza armada igual.
  4. Partes que vuelven   el motivo.
  5. Batería              todas las baterías juntas, en el orden de la forma.
  6. Secciones            una por sección del Mapa, una entrada por compás.
  7. Forma                el orden. Para oír un tramo: forma(C2, B2).

Convenciones
  - Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con
    su número y el cifrado de la partitura, para leerla al lado de MuseScore.
  - Todo va en altura real: la guitarra se escribe una octava arriba de como
    suena.
  - Una sección que repite otra es una variante(): solo se escribe lo que
    cambia. Si cambias un compás del V1, el V2 cambia con él, salvo en los
    compases que el V2 tiene propios.
  - Comillas dobles y backticks son mini-notación. Los textos de JavaScript
    (nombres de sonidos, mensajes) van con comillas simples.
*/

// ═══════════════════════ 1. Sonido y mezcla ══════════════════════

const SONIDO = {
  arco: 'gm_violin',
  pizz: 'gm_pizzicato_strings',
  guitarra: 'gm_acoustic_guitar_nylon',
  piano: 'piano',
  kit: 'AkaiLinn',
};

// Volumen de cada instrumento: 0 lo apaga
const MEZCLA = { violin: 1, guitarra: 1, piano: 1, bateria: 1 };

// ═══════════════════════ 2. Matices ══════════════════════
/*
Las velocidades de MuseScore, en MIDI / 127. Una marca vale desde su compás
hasta la siguiente; lo que la partitura no marca suena mf. Los reguladores
(< crescendo, > diminuendo) no se aplican: van anotados al lado.
*/

const MATIZ = { p: 0.39, mp: 0.5, mf: 0.63, f: 0.76 };

// Batería: las velocidades de cada golpe, su "dynamics" (% de 90) / 127
const FUERTE = 0.81; // 114 %
const NORMAL = 0.71; // 100 %, y los golpes sin velocidad propia
const SUAVE = 0.54; // 76 %
const GHOST = 0.27; // 38 %

const DINAMICA = {
  violin: {
    1: MATIZ.mf,
    27: MATIZ.p, // < hasta el 30
    67: MATIZ.p, // < hasta el 70 · > del 80 al 82
    94: MATIZ.mf, // < hasta el 105 (la partitura le da la velocidad de f)
  },
  guitarra: {
    1: MATIZ.mf,
  },
  piano: {
    1: MATIZ.mf,
    43: MATIZ.f, // < hasta el 49 · > del 51 al 52
    52: MATIZ.mp, // < hasta el 64 · > del 67 al 73
    73: MATIZ.mp, // < hasta el 82
    83: MATIZ.f, // < hasta el 92
    95: MATIZ.mp, // < hasta el 102
    102: MATIZ.mf, // < hasta el 109
  },
};

// Pizz. y arco del violín
const TECNICA = {
  1: SONIDO.arco,
  11: SONIDO.pizz,
  27: SONIDO.arco,
  51: SONIDO.pizz,
  67: SONIDO.arco,
};

// ═══════════════════════ 3. Herramientas ══════════════════════

// Una entrada por compás → un compás por ciclo
let compases = (lista) => cat(...lista);

// Ligadura por encima de la barra: lo que sigue sonando al final del compás
// dura `semis` semicorcheas más. El compás siguiente lleva silencio ahí.
let ligar = (semis, compas) =>
  reify(compas).withHap((hap) =>
    hap.whole.end.eq(hap.whole.begin.sam().add(1))
      ? new Hap(
          new TimeSpan(hap.whole.begin, hap.whole.end.add(Fraction(semis).div(12))),
          hap.part,
          hap.value,
          hap.context,
        )
      : hap,
  );

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

const PARTES = ['violin', 'guitarra', 'der', 'izq'];

// Cuántos compases dura una sección; todas sus partes tienen que coincidir
let largo = (sec) => {
  let largos = [...new Set(PARTES.filter((parte) => sec[parte]).map((parte) => sec[parte].length))];
  if (largos.length !== 1) {
    throw new Error('La sección del c.' + sec.desde + ' tiene partes de ' + largos.join(' y ') + ' compases');
  }
  return largos[0];
};

// Una sección que repite otra. `cambios` va por parte:
//   { compás: "nuevo" }   cambia esos compases (con los números de la nueva)
//   [ … ], un patrón o null   reemplaza la parte entera
// Lo que no está en `cambios` es lo de la base, batería incluida.
let variante = (base, desde, cambios = {}) => {
  let sec = { ...base, desde };
  for (let [parte, cambio] of Object.entries(cambios)) {
    let parche = cambio && !Array.isArray(cambio) && !isPattern(cambio);
    if (!parche) {
      sec[parte] = cambio;
      continue;
    }
    for (let c of Object.keys(cambio).map(Number)) {
      if (c < desde || c >= desde + base[parte].length) {
        throw new Error('variante: el c.' + c + ' no está en la sección que empieza en el c.' + desde);
      }
    }
    sec[parte] = base[parte].map((compas, i) => cambio[desde + i] ?? compas);
  }
  return sec;
};

// ── Instrumentos ──

let violin = (sec) =>
  note(compases(sec.violin))
    .sound(marcas(TECNICA, sec.desde, largo(sec)))
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

// Una línea de batería: el patrón con sus muestras y una velocidad.
// Muestras: bd bombo · sd caja · hh oh cr hi-hat cerrado, abierto y crash ·
// lt mt ht toms · tb pandereta · cb cencerro · cp palmas · sh shaker
let golpe = (patron, vel = NORMAL) => s(patron).velocity(vel);

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

// ═══════════════════════ 4. Partes que vuelven ══════════════════════

// El motivo La–Sol–Fa#–Re–Fa#, dos compases de mano derecha. Abre las dos
// frases de la intro (c.1 y c.6) y vuelve en el puente (c.46).
const MOTIVO = [
  "[A4 G4@2 F#4]",
  "[D4@5 F#4@7]",
];

// ═══════════════════════ 5. Batería ══════════════════════
/*
Sale de las ocho partes de percusión de la partitura: una línea por
instrumento y por velocidad. Dentro de < > va una entrada por compás y, al
acabarse, vuelve a empezar: una línea de 8 compases en una sección de 16 suena
dos veces.
El puente, el C3 y el outro no tienen batería. Para darles una, escríbela
aquí y ponla en su sección (bateria: BATERIA.c3).
*/

const BATERIA = {
  // Intro (c.1–10): entra en el c.2. Dos frases de 5
  intro: bateria(
    // Bombo: cada frase empieza distinto
    golpe("<~ [bd ~ ~]!2 [bd ~ bd] ~ [~ bd bd] [bd ~ ~]!2 [bd ~ bd] ~>", FUERTE),
    // Crash al empezar la segunda frase
    golpe("<~!5 [cr ~ ~] ~!4>", FUERTE),
    // Toms al cerrar cada frase
    golpe("<~!4 [~ ~ [lt ht]]>", FUERTE),
    // Pandereta
    golpe("<~ [tb tb ~] [~ tb tb]!2 [tb ~ ~]>", FUERTE),
    // Shaker
    golpe("<~ [sh sh sh] [sh ~ ~] [~ [~ sh] ~]!2>", GHOST),
  ),

  // V1 y V2 (c.11–26, 51–66): dos mitades de 8
  verso: bateria(
    // Bombo en el 1, menos al cerrar cada mitad
    golpe("<[bd ~ ~]!7 ~>", FUERTE),
    // Hi-hat al abrir cada mitad
    golpe("<[oh hh ~] ~!7>", FUERTE),
    // Toms al cerrar cada mitad
    golpe("<~!7 [mt lt ht]>", FUERTE),
    // Pandereta en el 3
    golpe("[~ ~ tb]", NORMAL),
    // Cencerro en el 2
    golpe("[~ cb ~]", GHOST),
    // Shaker en el 2 y el 3
    golpe("[~ sh sh]", GHOST),
  ),

  // C1 (c.27–42): cuatro frases de 4
  coro: bateria(
    // Bombo en el 1, menos en el compás de cadencia
    golpe("<[bd ~ ~]!3 ~>", FUERTE),
    // Caja en el 2 y el 3
    golpe("[~ sd sd]", FUERTE),
    // Hi-hat solo al entrar
    golpe("<[hh oh ~] ~!15>", FUERTE),
    // Pandereta en el 1
    golpe("[tb ~ ~]", FUERTE),
    // Palmas en el compás de cadencia
    golpe("<~!3 [cp ~ ~]>", FUERTE),
  ),

  // C2 (c.67–82): 16 compases escritos, uno por columna, en filas de 4
  coro2: bateria(
    // Bombo en el 1 y el 3, en los tres tiempos del 76 al 81; calla en 70, 73 y 82
    golpe(`<
      [bd ~ bd] [bd ~ bd] [bd ~ bd] ~
      [bd ~ bd] [bd ~ bd] ~         [bd ~ bd]
      [bd ~ bd] [bd bd bd] [bd bd bd] [bd bd bd]
      [bd bd bd] [bd bd bd] [bd bd bd] ~
    >`, FUERTE),
    // Caja en el 2 y el 3, y un redoble suave en el 82
    golpe("<[~ sd sd]!15 ~>", FUERTE),
    golpe("<~!15 [~ [sd sd] ~]>", NORMAL),
    // Crash y abierto al entrar…
    golpe("<[cr oh ~] ~!15>", FUERTE),
    // …y cerrado en el 3
    golpe("<[~ ~ hh] ~!15>", NORMAL),
    // Hi-hat suave cada dos compases, seguido del 78 al 81
    golpe(`<
      ~         [~ oh hh] ~         [~ oh hh]
      ~         [~ oh hh] ~         [~ oh hh]
      ~         [~ oh hh] ~         [~ oh hh]
      [~ oh hh] [~ oh hh] [~ oh hh] ~
    >`, SUAVE),
    // Toms en 70 y 73; en el 82, grave en el 1 y medio en el 3
    golpe("<~!3 [lt mt ht] ~!2 [lt mt ht] ~!8 [lt ~ ~]>", FUERTE),
    golpe("<~!15 [~ ~ mt]>", NORMAL),
    // Pandereta desde el c.72
    golpe("<~!5 [tb tb ~]!2 [~ tb tb]!8 ~>", NORMAL),
    // Cencerro en el 1
    golpe("[cb ~ ~]", SUAVE),
    // Shaker cada dos compases, seguido en el 80 y el 81
    golpe(`<
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] [sh ~ ~] ~
    >`, SUAVE),
  ),

  // B2 (c.83–92): todo a la vez en el c.83, y después calla
  b2: bateria(
    golpe("<[bd bd bd] ~!9>", FUERTE),
    golpe("<[oh hh hh] ~!9>", NORMAL),
    golpe("<[ht ~ ~] ~!9>", FUERTE),
    golpe("<[tb ~ ~] ~!9>", NORMAL),
    golpe("<[cb cb ~] ~!9>", NORMAL),
    golpe("<[~ ~ cb] ~!9>", SUAVE),
    golpe("<[cp ~ ~] ~!9>", NORMAL),
    golpe("<[sh sh ~] ~!9>", NORMAL),
  ),
};

// ═══════════════════════ 6. Secciones ══════════════════════

// ─────────────────────── Intro (c.1–10) ───────────────────────
/*
La frase de 5 compases, dos veces: el motivo en los dos primeros y el vals
(bajo en el 1, acorde que entra antes del 2) en los tres siguientes. Piano y
batería; el violín y la guitarra callan.
*/

const INTRO = {
  desde: 1,
  der: [
    ...MOTIVO,                 // c.1–2    D · D/F# — el motivo
    "[~ C#5@2 C#5]",           // c.3      A
    "[~ [F#4,D5]@2 [F#4,D5]]", // c.4      Bm
    "[~ [D4,D5]@2 [D4,B4]]",   // c.5      G
    ...MOTIVO,                 // c.6–7    D · D — el motivo
    "[~ [E4,C#5]@2 [E4,C#5]]", // c.8      A
    "[~ [D4,D5]@2 [D4,D5]]",   // c.9      Bm
    "[~ [F#4,D5]@2 [E4,E5]]",  // c.10     Gmaj7
  ],
  izq: [
    "D3",                                  // c.1      D
    "F#3",                                 // c.2      D/F#
    "[A2, [~ A3@2 A3]]",                   // c.3      A
    "[B2, [~ B3@2 B3]]",                   // c.4      Bm
    "[G2, [~ G3@2 G3]]",                   // c.5      G
    "[D2,A3]",                             // c.6      D
    "F#2",                                 // c.7      D
    "[A2, [~ A3@2 A3]]",                   // c.8      A
    "[B2, [~ [F#3,B3]@2 [F#3,B3]]]",       // c.9      Bm
    "[[G2@2 ~], [~ [G3,C#4]@2 [G3,C#4]]]", // c.10     Gmaj7
  ],
  bateria: BATERIA.intro,
};

// ─────────────────────── V1 (c.11–26) ───────────────────────
/*
El violín entra en pizz. El piano toca acordes largos y la guitarra rasguea uno
por compás. En los compases de cadencia (19, 21, 23, 25) el vals se reparte:
el piano ataca en el 1 y la guitarra entra en el 2 y el 3.
*/

const V1 = {
  desde: 11,
  violin: [
    "[~ D4 D4]",              // c.11     Dmaj7
    "[~ [F#4,A4]@2]",         // c.12     F#m · D
    "[~ E4 G4]",              // c.13     C#dim
    "[~ [F#4,B4]@2]",         // c.14     A · A7
    "[~ A4 F#4]",             // c.15     Bm7
    "[D4@2 [E4,B4]]",         // c.16     G · G6
    "[~ F#4 F#4]",            // c.17     Dmaj7
    "[~ [C#4,A4] [C#4,F#4]]", // c.18     F#m · F#m7
    "[[D4,A4]@2 ~]",          // c.19     Dmaj7
    "[~ F#4 D4]",             // c.20     F#m
    "[E4 ~@2]",               // c.21     C#dim
    "[~ [C#4,A4]]",           // c.22     A · A7
    "[D4,B4]",                // c.23     Bm7
    "[~ G4 B4]",              // c.24     G · G6
    "F#4",                    // c.25     D6
    "[~ [F#4,C#5] [C#4,A4]]", // c.26     F#m
  ],
  guitarra: [
    "[E2,A2,D3,A3,C#4,F#4]",               // c.11     Dmaj7
    "[F#2,A2,F#3,A3,F#4,C#5]",             // c.12     F#m · D
    "[C#3,E3,C#4,G4]",                     // c.13     C#dim
    "[A2,C#3,A3,C#4,A4,E5]",               // c.14     A · A7
    "[B2,D3,F#4,B4,F#5]",                  // c.15     Bm7
    "[G2,B2,D4,G4,D5]",                    // c.16     G · G6
    "[D3,A3,D4,A4]",                       // c.17     Dmaj7
    "[C#4,F#4,A4,C#5]",                    // c.18     F#m · F#m7
    "[~ [D3,F#3,D4,A4] [D3,F#3,D4,A4]]",   // c.19     Dmaj7
    "[F#2,A2,F#3,A3,F#4,C#5]",             // c.20     F#m
    "[~ [C#3,E3,C#4,G4] [C#3,E3,C#4,G4]]", // c.21     C#dim
    "[A2,C#3,A3,C#4,A4,E5]",               // c.22     A · A7
    "[~ [B3,F#4,B4,F#5] [B3,F#4,B4,F#5]]", // c.23     Bm7
    "[G3,D4,G4,D5]",                       // c.24     G · G6
    "[~ [F#3,A3,D4,A4] [F#3,A3,D4,A4]]",   // c.25     D6
    "[C#3,A3,C#4,F#4,A4,C#5]",             // c.26     F#m
  ],
  der: [
    "[F#4,D5]",               // c.11     Dmaj7
    "[[C#4,C#5]@3 [C#4,A4]]", // c.12     F#m · D
    "[E4,G4]",                // c.13     C#dim
    "[[E4,C#5] [C#4,G5]]",    // c.14     A · A7
    "[D4,F#5]",               // c.15     Bm7
    "[[B3,D5]@3 [E4,B4]]",    // c.16     G · G6
    "[F#4,C#5]",              // c.17     Dmaj7
    "[[C#4,A4] [A4,E5]]",     // c.18     F#m · F#m7
    "[[F#4,C#5] ~@2]",        // c.19     Dmaj7
    "[[C#4,C#5]@3 [C#4,A4]]", // c.20     F#m
    "[E4,G4]",                // c.21     C#dim
    "[[E4,C#5] [C#4,G5]]",    // c.22     A · A7
    "[D4,F#5]",               // c.23     Bm7
    "[[B3,D5]@3 [E4,B4]]",    // c.24     G · G6
    "[F#4,A4]",               // c.25     D6
    "[[C#4,A4] [A4,E5]]",     // c.26     F#m
  ],
  izq: [
    "[D2,C#4]",            // c.11     Dmaj7
    "[F#3@3 G3]",          // c.12     F#m · D
    "[C#3,E3]",            // c.13     C#dim
    "[A3 A3]",             // c.14     A · A7
    "B3",                  // c.15     Bm7
    "[G3@3 F#3]",          // c.16     G · G6
    "A3",                  // c.17     Dmaj7
    "[F#2 F#2]",           // c.18     F#m · F#m7
    "[[A2,D3] ~@2]",       // c.19     Dmaj7
    "[A3@3 A3]",           // c.20     F#m
    "[C#3,E3]",            // c.21     C#dim
    "[A3 A3]",             // c.22     A · A7
    "B3",                  // c.23     Bm7
    "[G3@3 F#3]",          // c.24     G · G6
    "D3",                  // c.25     D6
    "[[F#3,A3] [F#3,A3]]", // c.26     F#m
  ],
  bateria: BATERIA.verso,
};

// ─────────────────────── C1 (c.27–42) ───────────────────────
/*
El violín pasa a arco. El piano vuelve al vals: bajo en el 1 y una nota en el
2 y el 3. La guitarra toca el acorde largo y en los c.30, 34 y 38 se queda con
el 2 y el 3. Las dos mitades cierran en A7 → D (c.33–34 y 41–42).
*/

const C1 = {
  desde: 27,
  violin: [
    ligar(8, "G4"),    // c.27     Em — se liga 8 semicorcheas al c.28
    "[~@2 B4]",        // c.28     G — sigue lo del c.27
    "A4",              // c.29     F#m7
    "[F#4 D4]",        // c.30     Bm
    "G4",              // c.31     Em
    "[B4 D4 B3]",      // c.32     G
    "C#4",             // c.33     A7
    "[D4 A4]",         // c.34     D
    "[E4@2 B3]",       // c.35     Em
    "G4",              // c.36     G
    "F#4",             // c.37     F#m7
    "[B4 F#4]",        // c.38     Bm
    "[E4@2 B3]",       // c.39     Em
    "D4",              // c.40     G
    "[F#4@2 A4@3 A4]", // c.41     A7
    "D4",              // c.42     D
  ],
  guitarra: [
    "[E2,G2,E3,G3]",                     // c.27     Em
    "[G2,B2,G3,B3]",                     // c.28     G
    "[F#2,A2,F#3,A3]",                   // c.29     F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.30     Bm
    "[E2,G2,E3,G3]",                     // c.31     Em
    "[G2,B2,G3,B3]",                     // c.32     G
    "[A2,C#3,E4,A4,E5]",                 // c.33     A7
    "[~ [A3,D4,F#4,A4] [A3,D4,F#4,A4]]", // c.34     D
    "[E2,G2,E3,G3]",                     // c.35     Em
    "[G2,B2,G3,B3]",                     // c.36     G
    "[F#2,A2,F#3,A3]",                   // c.37     F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.38     Bm
    "[E2,G2,E3,G3,E4]",                  // c.39     Em
    "[G2,B2,G3,B3]",                     // c.40     G
    "[A2,C#3,E4,A4,E5]",                 // c.41     A7
    "~",                                 // c.42     D
  ],
  der: [
    "[~ E4 E4]",                 // c.27     Em
    "[~ G4 G4]",                 // c.28     G
    "[~ F#4 F#4]",               // c.29     F#m7
    "~",                         // c.30     Bm
    "[~ E4 E4]",                 // c.31     Em
    "[~ G4 G4]",                 // c.32     G
    "[~@2 A4@3 A4]",             // c.33     A7
    "~",                         // c.34     D
    "[~ [E4,E5] [E4,E5]]",       // c.35     Em
    "[~ [D4,B4] [D4,B4]]",       // c.36     G
    "[~ [E4,A4] [E4,A4]]",       // c.37     F#m7
    "[D4,F#4]",                  // c.38     Bm
    "[~ G4 G4]",                 // c.39     Em
    "[~ [D4,B4] [D4,B4]]",       // c.40     G
    "[~@2 [A4,C#5]@3 [A4,C#5]]", // c.41     A7
    "[D4,D5]",                   // c.42     D
  ],
  izq: [
    "[E3 ~@2]",                  // c.27     Em
    "[G3 ~@2]",                  // c.28     G
    "[F#3 ~@2]",                 // c.29     F#m7
    "[[B2 ~@2], B3]",            // c.30     Bm
    "[E3 ~@2]",                  // c.31     Em
    "[G3 ~@2]",                  // c.32     G
    "[A2@2 E3@3 E3]",            // c.33     A7
    "[[D2 ~@2], D3]",            // c.34     D
    "[[E2,E3] E3 E3]",           // c.35     Em
    "[[G2,G3] G3 G3]",           // c.36     G
    "[[F#2,F#3] F#3 F#3]",       // c.37     F#m7
    "[[[B2,B3] ~@2], B3]",       // c.38     Bm
    "[[E2,E3] [E3,B3] [E3,B3]]", // c.39     Em
    "[[G2,G3] G3 G3]",           // c.40     G
    "[[A2,G3]@2 G3@3 G3]",       // c.41     A7
    "[[D2,F#3]@4 D4 C#4]",       // c.42     D
  ],
  bateria: BATERIA.coro,
};

// ─────────────────────── B1 (c.43–50) ───────────────────────
/*
Piano solo. Bm · Em · E con el bajo bajando por quintas (B–E–A–D); el G# del
c.45 sube al La del motivo y vuelve la frase de la intro.
*/

const B1 = {
  desde: 43,
  der: [
    "[F#4,D5]",                  // c.43     Bm
    "[~ [G4,D5] [G4,D5]]",       // c.44     Em
    "[~@2 [E4,B4]@3 G#4]",       // c.45     E
    ...MOTIVO,                   // c.46–47  D · D — el motivo
    "[~ [E4,C#5] [E4,C#5]]",     // c.48     A
    "[~@2 [F#4,D5]@3 [F#4,D5]]", // c.49     Bm
    "[[G4,D5]@3 [G4,D5] D4@2]",  // c.50     Gmaj7
  ],
  izq: [
    "[B3@2 D3@3 F#3]",      // c.43     Bm
    "[[E3,B3] B3 B3]",      // c.44     Em
    "[[A2,E3] E3]",         // c.45     E
    "[D2,D3]",              // c.46     D
    "A2",                   // c.47     D
    "[A2, [~ A3 A3]]",      // c.48     A
    "[B2, [~@2 B3@3 B3]]",  // c.49     Bm
    "[[G2@2 ~], [~@2 B3]]", // c.50     Gmaj7
  ],
};

// ─────────────────────── V2 (c.51–66) ───────────────────────
/*
El verso otra vez, con otro violín: más agudo y con más notas, todavía en
pizz. Piano y guitarra son los del V1 salvo los compases de abajo; la batería
es la del V1.
*/

const V2 = variante(V1, 51, {
  violin: [
    "[F#5 D5 F#5]",                 // c.51     Dmaj7
    "[[C#5,A5] [A4,F#5]@2]",        // c.52     F#m · F#m7
    "[E5 C#5 E5]",                  // c.53     C#dim
    "[C#5@3 [E5,A5] [E5,A5]@2]",    // c.54     A · A7
    "[D5@2 A5@3 F#5]",              // c.55     Bm7
    "[D5@2 [E5,B5]]",               // c.56     G · G6
    "[C#5@2 D5@3 E5]",              // c.57     Dmaj7
    "[F#5 [C#5,A5] [C#5,F#5]]",     // c.58     F#m · F#m7
    "[[D5,A5]@2 [D5,A5]]",          // c.59     Dmaj7
    "[C#5 F#5 C#5]",                // c.60     F#m
    "[E5@2 G5@3 F#5]",              // c.61     C#dim
    "[A5 [C#5,A5]]",                // c.62     A · A7
    "[D5,B5]",                      // c.63     Bm7
    "[D5@2 G5@3 B5]",               // c.64     G · G6
    "F#5",                          // c.65     D6
    "[[A4,A5] [F#5,C#6] [C#5,A5]]", // c.66     F#m
  ],
  guitarra: {
    51: "[A2,D3,A3,C#4,F#4]",      // Dmaj7 — V1: [E2,A2,D3,A3,C#4,F#4]
    53: "[E2,G2,C#3,E3,C#4,G4]",   // C#dim — V1: [C#3,E3,C#4,G4]
    57: "[F#2,A2,A3,D4,A4]",       // Dmaj7 — V1: [D3,A3,D4,A4]
    58: "[F#2,A2,C#4,F#4,A4,C#5]", // F#m · F#m7 — V1: [C#4,F#4,A4,C#5]
  },
  der: {
    51: "F#4", // Dmaj7 — V1: [F#4,D5]
  },
  izq: {
    51: "[D3,C#4]",   // Dmaj7 — V1: [D2,C#4]
    52: "[F#3@3 A3]", // F#m · F#m7 — V1: [F#3@3 G3]
  },
});

// ─────────────────────── C2 (c.67–82) ───────────────────────
/*
El coro 1 con su propia batería y otro violín. El piano cambia solo en los
c.80–82 (Gmaj13 · A7 · E♭7): el c.82 pone E♭7 donde el coro habría cerrado en
D. La guitarra es la del C1 entera.
*/

const C2 = variante(C1, 67, {
  violin: [
    ligar(8, "G4"),                     // c.67     Em — se liga 8 semicorcheas al c.68
    "[~@4 B4 D5]",                      // c.68     G — sigue lo del c.67
    "[A4 G4]",                          // c.69     F#m7
    "[F#4 D4]",                         // c.70     Bm
    "[G4@3 E4 G4 A4]",                  // c.71     Em
    "[B4 D4 B3]",                       // c.72     G
    "[C#4@2 B3@3 C#4]",                 // c.73     A7
    "[D4 A4]",                          // c.74     D
    "[E4@2 B3]",                        // c.75     Em
    "G4",                               // c.76     G
    "F#4",                              // c.77     F#m7
    "[B4 F#4]",                         // c.78     Bm
    "[[E4,B4]@2 [B3,G4]]",              // c.79     Em
    "[D4,G4,E5]",                       // c.80     Gmaj13
    "[[F#4,C#5]@2 [A4,E5]@3 [E4,C#5]]", // c.81     A7
    "[G4,Eb5]",                         // c.82     Eb7
  ],
  der: {
    80: "[~ [E4,D5] [F#4,D5]]",     // Gmaj13 — C1: [~ [D4,B4] [D4,B4]]
    81: "[~@2 [G4,C#5]@3 [A4,E5]]", // A7 — C1: [~@2 [A4,C#5]@3 [A4,C#5]]
    82: "[Bb4,Eb5]",                // Eb7 — C1: [D4,D5]
  },
  izq: {
    80: "[[G2,F#3] [E3,G3] [F#3,B3]]",     // Gmaj13 — C1: [[G2,G3] G3 G3]
    81: "[[A2,E3]@2 [C#3,E3]@3 [C#3,E3]]", // A7 — C1: [[A2,G3]@2 G3@3 G3]
    82: "[[Eb2,Db3]@4 Bb3 G3]",            // Eb7 — C1: [[D2,F#3]@4 D4 C#4]
  },
  bateria: BATERIA.coro2,
});

// ─────────────────────── B2 (c.83–92) ───────────────────────
/*
La armadura pasa a un bemol. La batería entra toda en el c.83 y calla. La
guitarra deja el rasgueo: acordes en bloque desde el c.85.
*/

const B2 = {
  desde: 83,
  violin: [
    "[[D4,A4]@5 [F4,D5]]",                 // c.83     Dm
    "[[D4,F5] [F4,A5]]",                   // c.84     Dm
    "[Bb3,Bb4,G5]",                        // c.85     Gm
    "[C4,A4,F5]",                          // c.86     Am
    "[[C4,G4,G5]@2 [F4,C5,F5]]",           // c.87     Csus4
    "[[G4,D5]@2 [D4,Bb4]@3 [B3,G4]]",      // c.88     G7
    "[[C4,G4]@2 [E4,C5]]",                 // c.89     C7
    "[[F4,C5,F5] [G4,D5,F5] [A4,Eb5,A5]]", // c.90     F · F7
    "[[Bb4,F5,Bb5]@2 [F4,G5]]",            // c.91     Bb
    "[A4,F#5]",                            // c.92     D
  ],
  guitarra: [
    "~",                               // c.83     Dm
    "~",                               // c.84     Dm
    "[~@2 [G2,D3,Bb3]@3 [G2,D3,Bb3]]", // c.85     Gm
    "[~@2 [A2,E3,C4]@3 [A2,E3,C4]]",   // c.86     Am
    "[~@2 [C3,F3,Bb3]@3 [C3,F3,Bb3]]", // c.87     Csus4
    "[~@2 [D3,G3,D4]@3 [D3,G3,D4]]",   // c.88     G7
    "[[C3,G3,E4] [E3,Bb3,E4]]",        // c.89     C7
    "[[F3,C4]@2 [A3,F4]@3 [Eb4,A4]]",  // c.90     F · F7
    "[D3,Bb3,D4,F4,Bb4]",              // c.91     Bb
    "[[D3,A3,F#4] [D3,A3,F#4]]",       // c.92     D
  ],
  der: [
    "[[A4,F5] [G4,E5]@2 [F4,D5]]",                  // c.83     Dm
    "[[D4,A4] [F4,D5]]",                            // c.84     Dm
    "[G4 Bb4 D5@3 D5]",                             // c.85     Gm
    "[E5 A4@3 F4 A4]",                              // c.86     Am
    "[C5 F4 [G4,F5]@3 [F4,C5]]",                    // c.87     Csus4
    "[[G4,D5] [B4,F5]@3 D5 B4]",                    // c.88     G7
    "[C5 G4 E4]",                                   // c.89     C7
    "[F4@2 [A4,F5]@3 [A4,A5]]",                     // c.90     F · F7
    "[[D4,Bb4,Bb5]@3 [F4,Bb4,Bb5] [F4,Bb4,Bb5]@2]", // c.91     Bb
    "[[F#4,D5,A5]@2 G4 B4 D5 F#5]",                 // c.92     D
  ],
  izq: [
    "[D2,D3,A3]",                    // c.83     Dm
    "[[D2,F3] [A2,D3]]",             // c.84     Dm
    "[[G2,D3]@2 [D3,G3]@3 [D3,G3]]", // c.85     Gm
    "[[C3,A3] [E3,A3]@3 [A2,E3]@2]", // c.86     Am
    "[[C3,G3]@2 [F2,C3]@3 [C3,G3]]", // c.87     Csus4
    "[[G2,G3]@2 [F2,F3]@3 [G2,F3]]", // c.88     G7
    "[[C3,Bb3] [C3,G3] [C3,E3]]",    // c.89     C7
    "[[F2,F3,A3]@4 ~ [A2,Eb3,A3]]",  // c.90     F · F7
    "[Bb2,F3,C4]",                   // c.91     Bb
    "[[D2,A3]@5 [D2,F#3]]",          // c.92     D
  ],
  rasgueo: false,
  bateria: BATERIA.b2,
};

// ─────────────────────── C3 (c.93–108) ───────────────────────
/*
Vuelve a Re mayor. El coro 1 sin batería y con otro violín; el piano y la
guitarra solo cambian en el c.93 y en el acorde final, que se liga al outro.
*/

const C3 = variante(C1, 93, {
  violin: [
    "[B3,G4]",             // c.93     Em
    "[[G4,D5] F#4 G4]",    // c.94     G
    "[A4@2 C#4@3 D4]",     // c.95     F#m7
    "[[D4,F#4] B4]",       // c.96     Bm
    "[G4,E5]",             // c.97     Em
    "[[G4,D5] F#4 G4]",    // c.98     G
    "[A4 C#4 E4]",         // c.99     A7
    "[F#4 E4 D4@2 F#4@2]", // c.100    D
    "[B3,G4]",             // c.101    Em
    "[G4 B4 D5]",          // c.102    G
    "[F#4@2 G4@3 A4]",     // c.103    F#m7
    "[D4,B4]",             // c.104    Bm
    "[B4@2 A4@3 E4]",      // c.105    Em
    "[D5 B4 G4]",          // c.106    G
    "[E4 G4 A4@2 C#5@2]",  // c.107    A7
    "[F#4,D5]",            // c.108    D
  ],
  guitarra: {
    93: "[E2,G2,E3,G3,G4]", // Em — C1: [E2,G2,E3,G3]
  },
  der: {
    93: "[[G4,E5,G5] E4 E4]",    // Em — C1: [~ E4 E4]
    108: ligar(4, "[D4,A4,D5]"), // D — C1: [D4,D5] · se liga 4 semicorcheas al c.109
  },
  izq: {
    93: "[[E2,E3] ~@2]", // Em — C1: [E3 ~@2]
    108: "~",            // D — C1: [[D2,F#3]@4 D4 C#4]
  },
  bateria: null,
});

// ─────────────────────── Outro (c.109–111) ───────────────────────
/*
La mano izquierda sola, debajo del acorde de D que viene ligado del c.108.
*/

const OUTRO = {
  desde: 109,
  der: [
    "~", // c.109    sigue lo del c.108
    "~", // c.110    D
    "~", // c.111
  ],
  izq: [
    "[[F#2,A2] G2@2 F#2]",   // c.109
    ligar(1, "[D2@5 D3@7]"), // c.110    D — se liga 1 semicorchea al c.111
    "~",                     // c.111    sigue lo del c.110
  ],
};

// ═══════════════════════ 7. Forma ══════════════════════

forma(INTRO, V1, C1, B1, V2, C2, B2, C3, OUTRO);

// Para trabajar un tramo, cambia la línea de arriba. Todo suena en bucle:
//   forma(C2, B2)   el C2 y el B2, uno tras otro
//   tocar(C2)       una sección sola
