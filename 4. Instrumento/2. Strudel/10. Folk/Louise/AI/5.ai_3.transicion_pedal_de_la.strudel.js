setcpm(160 / 3);

/*
Louise · del coro 2 al motivo en menor (A7 → Gm, c.81–85)
Versión 3 de 5: PEDAL DE LA.
Propuesta de Claude (19 oct 2026), para revisar. No toca la partitura ni tus archivos.

La idea
  El A7 pierde la sensible: Do♯ → Do. El c.82 es el mismo compás que el c.81
  con una sola nota cambiada, y queda Am7, la dominante menor de Re eólico, que
  no empuja a nada. Es tu idea del Fa♯/Fa (una nota separa la felicidad de la
  melancolía), aplicada a la dominante.
  El bajo se queda en La del c.81 al c.84, así que el motivo suena sobre Dm/A, y
  da su primer paso en el c.85: La → Sol. Nada cae ni llega, el B2 aparece.
  Batería sin corte: la capa suave (bombo, cencerro y shaker en el 1) sigue
  debajo del motivo y le pasa el pulso a la guitarra en el c.85.

Qué cambia (todo lo demás es la partitura)
  c.82  piano MD  Si♭4/Mi♭5            → ~ · Sol4/Do5 · La4/Mi5  (el c.81 con Do en vez de Do♯)
  c.82  piano MI  Mi♭2/Re♭3 · Si♭3 · Sol3 → La2/Mi3 · Do3/Mi3 · Do3/Mi3
  c.82  guitarra  calla                → Am7 abierto: La2 Mi3 Sol3 Do4 Mi4 (x02010)
  c.82  batería   el redoble           → capa suave
  c.83  piano MI  Re2 Re3 La3          → La2 Re3 La3
  c.83  batería   el golpe             → capa suave
  c.84  piano MI  Mi2/Fa3 · La2/Re3    → La2/Fa3 · La2/Re3
  c.84  batería   nada                 → capa suave
  Cifrado: E♭7 → Am7 (c.82), Dm → Dm/A (c.83 y c.84)
  No cambian: la mano derecha del motivo (c.83–84) y el c.85 en adelante.

Qué escuchar
  - El Do♯ → Do del c.82: ¿se oye como "se apagó la luz"?
  - Los cuatro compases de La: ¿flotan o se estancan?
  - ¿Te falta la llegada a Re, o no la necesitas?

Riesgo
  No hay llegada: el B2 no empieza, se funde. Dm/A (segunda inversión) suena a
  que todavía falta algo, y cuatro compases sobre La pueden sonar quietos.

Cómo está hecho
  Un ciclo es un compás de 3/4. Suena del c.77 al c.87: el cierre del coro 2,
  la costura y los tres primeros compases de la subida, y luego vuelve a empezar.
  Debajo está la partitura tal cual (Louise-melancolica, abierta en MuseScore el
  19 oct a las 18:37, con el bajo del c.83 en Re2). El bloque "Versión" del final
  aplica los cambios, y cada línea dice qué había.
  Para comparar con la partitura, pon VERSION = false.
  Las cinco versiones (5.ai_1 a 5.ai_5) están en esta carpeta y comparten todo
  menos ese bloque. Vienen de la nota 11, "Entrada del B2 y motivo en menor".
*/

// ── Interruptor ───────────────────────────────────────────────────
// true: esta versión. false: la partitura tal cual, para comparar.
const VERSION = true;

// Velocidades de la partitura (las de 3.full_score)
const FUERTE = 0.81; // 114 %
const NORMAL = 0.71; // 100 %, y los golpes sin velocidad propia
const SUAVE = 0.54; // 76 %

// Suena del c.77 al c.87 y vuelve a empezar. Cada objeto lleva una entrada por
// compás, con su número; un compás que no aparece, calla.
const DESDE = 77;
const HASTA = 87;
let compases = (porNumero) =>
  cat(
    ...Array.from(
      { length: HASTA - DESDE + 1 },
      (_, i) => porNumero[DESDE + i] ?? silence,
    ),
  );

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual. (Igual que en 3.full_score.)
let strum = (pat, gap = 0.01) => {
  let numbered = pat.withHaps((haps) => {
    let seen = new Map();
    return haps.map((hap) => {
      let begin = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = seen.get(begin) ?? 0;
      seen.set(begin, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numbered
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");
};

let piano = (right, left) =>
  stack(note(compases(right)), note(compases(left))).sound("piano");

let guitar = (porNumero) => strum(note(compases(porNumero)));

// ═══════════════════ Hoy: la partitura (c.77–87) ═══════════════════
/*
Louise-melancolica.mscz como estaba abierta en MuseScore el 19 oct a las 18:37,
con el bajo del c.83 ya en Re2. El cierre del coro 2 (c.77–81), la entrada del
B2 (c.82–84) y el arranque de la subida (c.85–87).
*/

const RIGHT = {
  77: "[~ [E4,A4] [E4,A4]]", // F#m7
  78: "[D4,F#4]", // Bm
  79: "[~ G4 G4]", // Em
  80: "[~ [E4,D5] [F#4,D5]]", // Gmaj13
  81: "[~ [G4,C#5] [A4,E5]]", // A7
  82: "[Bb4,Eb5]", // E♭7 — la armadura pasa a un bemol
  83: "[[A4,F5] [G4,E5]@2 [F4,D5]]", // Dm — B2: el motivo en menor, en sextas
  84: "[[D4,A4] [F4,D5]]", // Dm — el 2º compás del motivo (hemiola)
  85: "[G4 Bb4 D5@3 D5]", // Gm — empieza la subida
  86: "[E5 A4@3 F4 A4]", // Am
  87: "[C5 F4 [G4,F5]@3 [F4,C5]]", // Csus4
};

const LEFT = {
  77: "[[F#2,F#3] F#3 F#3]", // F#m7
  78: "[B3, [[B2,B3] ~@2]]", // Bm
  79: "[[E2,E3] [E3,B3] [E3,B3]]", // Em
  80: "[[G2,F#3] [E3,G3] [F#3,B3]]", // Gmaj13
  81: "[[A2,E3] [C#3,E3] [C#3,E3]]", // A7
  82: "[[Eb2,Db3]@4 Bb3 G3]", // E♭7
  83: "[D2,D3,A3]", // Dm
  84: "[[E2,F3] [A2,D3]]", // Dm
  85: "[[G2,D3]@2 [Bb2,G3]@3 [Bb2,G3]]", // Gm
  86: "[[C3,A3] [C3,A3]@3 [A2,E3]@2]", // Am
  87: "[[C3,F3]@2 [Bb2,G3]@3 [C3,G3]]", // Csus4
};

// De grave a aguda, en altura real (la partitura la escribe una 8ª arriba)
const GUITAR = {
  77: "[F#2,A2,F#3,A3]", // F#m7
  78: "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // Bm — en el 2 y el 3
  79: "[E2,G2,E3,G3,E4]", // Em
  80: "[G2,B2,G3,B3]", // Gmaj13
  81: "[A2,C#3,E4,A4,E5]", // A7
  // 82–84: calla
  85: "[~@2 [G2,D3,G3]@3 [G2,D3,G3]]", // Gm — vuelve la guitarra
  86: "[~@2 [A2,E3,A3]@3 [A2,E3,A3]]", // Am
  87: "[~@2 [Bb2,F3,C4]@3 [Bb2,F3,C4]]", // Csus4
};

// La batería del coro 2: bombo en 1-2-3, caja y pandereta en el 2 y el 3,
// cencerro en el 1. El hi-hat entra en el c.78; el shaker suena en 78, 80 y 81.
let grooveC2 = ({ hihat = true, shaker = true } = {}) =>
  stack(
    s("[bd bd bd]").velocity(FUERTE),
    s("[~ sd sd]").velocity(FUERTE),
    s("[~ tb tb]").velocity(NORMAL),
    s("[cb ~ ~]").velocity(SUAVE),
    hihat ? s("[~ oh hh]").velocity(SUAVE) : silence,
    shaker ? s("[sh ~ ~]").velocity(SUAVE) : silence,
  );

// c.82: el redoble — tom grave, tom medio, caja en el 2 y el 2&, cencerro en el 1
let redoble = stack(
  s("[lt@2 ~]").velocity(FUERTE),
  s("[~@2 mt]").velocity(NORMAL),
  s("[~ [sd sd] ~]").velocity(NORMAL),
  s("[cb ~ ~]").velocity(SUAVE),
);

// c.83: el golpe del B2 — bombo 1-2-3, tom agudo, hi-hat, pandereta, palmas,
// cencerro y shaker
let golpe = stack(
  s("[bd bd bd]").velocity(FUERTE),
  s("[ht ~ ~]").velocity(FUERTE),
  s("[oh hh hh]").velocity(NORMAL),
  s("[tb ~ ~]").velocity(NORMAL),
  s("[cp ~ ~]").velocity(NORMAL),
  s("[[cb ~] cb ~]").velocity(NORMAL),
  s("[~ ~ cb]").velocity(SUAVE),
  s("[sh sh@2]").velocity(NORMAL),
);

// La capa suave: bombo, cencerro y shaker en el 1 (solo la usa esta versión)
let capaSuave = stack(
  s("[bd ~ ~]").velocity(FUERTE),
  s("[cb ~ ~]").velocity(SUAVE),
  s("[sh ~ ~]").velocity(SUAVE),
);

const BATERIA = {
  77: grooveC2({ hihat: false, shaker: false }), // F#m7
  78: grooveC2(), // Bm
  79: grooveC2({ shaker: false }), // Em
  80: grooveC2(), // Gmaj13
  81: grooveC2(), // A7
  82: redoble, // E♭7
  83: golpe, // Dm
  // 84–87: nada
};

// ═══════════════════ Versión 3: pedal de La ═══════════════════
// Solo esto cambia. Cada línea dice qué había.
if (VERSION) {
  // c.82 — Am7: el c.81 con Do en vez de Do♯
  RIGHT[82] = "[~ [G4,C5] [A4,E5]]"; // hoy: [Bb4,Eb5]
  LEFT[82] = "[[A2,E3] [C3,E3] [C3,E3]]"; // hoy: [[Eb2,Db3]@4 Bb3 G3]
  GUITAR[82] = "[A2,E3,G3,C4,E4]"; // hoy: calla
  BATERIA[82] = capaSuave; // hoy: redoble

  // c.83 — Dm/A: el bajo se queda en La
  LEFT[83] = "[A2,D3,A3]"; // hoy: [D2,D3,A3]
  BATERIA[83] = capaSuave; // hoy: golpe

  // c.84 — Dm/A otra vez
  LEFT[84] = "[[A2,F3] [A2,D3]]"; // hoy: [[E2,F3] [A2,D3]]
  BATERIA[84] = capaSuave; // hoy: nada
}

stack(
  // Piano
  piano(RIGHT, LEFT),
  // Guitar
  guitar(GUITAR),
  // Drums
  compases(BATERIA).bank("AkaiLinn"),
);
