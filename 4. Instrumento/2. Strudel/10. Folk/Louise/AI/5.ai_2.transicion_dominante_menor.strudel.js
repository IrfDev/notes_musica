setcpm(160 / 3);

/*
Louise · del coro 2 al motivo en menor (A7 → Gm, c.81–85)
Versión 2 de 5: LA DOMINANTE DE RE MENOR.
Propuesta de Claude (19 oct 2026), para revisar. No toca la partitura ni tus archivos.

La idea
  Sin sustituto tritonal. El c.82 sigue siendo el A7, pero ya oscurecido: le
  entra el Si♭ (su ♭9) y el bajo pasa a Do♯. Suena Do♯–Mi–Sol–Si♭, un A7♭9 sin
  fundamental, que es el Do♯° de Re menor armónico: la dominante de libro del
  menor. El bajo sube por semitono a Re (La → Do♯ → Re) en vez de bajar
  (La → Mi♭ → Re). Respecto a hoy cambian dos teclas.

Qué cambia (todo lo demás es la partitura, batería incluida)
  c.82  piano MI  bajo Mi♭2           → Do♯2. El Re♭3 se queda: es la misma tecla que Do♯3
  c.82  piano MD  Mi♭5                → Mi5, que se queda del A7
  Cifrado del c.82: E♭7 → A7(♭9)/C♯

Cómo se mueven las voces, c.81 → c.82 → c.83
  arriba     Mi5  → Mi5  → Fa5   la nota común y luego sube: el Fa del motivo llega por semitono
  MD         La4  → Si♭4 → La4   el suspiro, ahora como bordadura
  MI         Si♭3 → La3          el mismo suspiro, una octava abajo
  tenor      Do♯3 → Do♯3 → Re3   la sensible resuelve…
  bajo       La2  → Do♯2 → Re2   …y en el bajo también
  Do♯ (bajo) y Si♭ (arriba) suenan juntos: la segunda aumentada del menor
  armónico, el color "triste clásico".

Qué escuchar
  - ¿Extrañas el color del E♭7, o el c.82 ya suena a Re menor antes de tiempo?
  - ¿El c.83 suena más a llegar?
  - ¿El Do♯ en el bajo empuja demasiado, suena a libro?

Riesgo
  Es la más previsible de las cinco: la dominante de siempre. Pierde el color
  raro que elegiste a cambio de claridad, porque el menor se anuncia un compás
  antes (Si♭ sobre La).

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

// ═══════════════════ Versión 2: la dominante de Re menor ═══════════════════
// Solo esto cambia. Cada línea dice qué había.
if (VERSION) {
  // c.82 — A7(♭9)/C♯ en lugar de E♭7
  LEFT[82] = "[[C#2,C#3]@4 Bb3 G3]"; // hoy: [[Eb2,Db3]@4 Bb3 G3]
  RIGHT[82] = "[Bb4,E5]"; // hoy: [Bb4,Eb5]
}

stack(
  // Piano
  piano(RIGHT, LEFT),
  // Guitar
  guitar(GUITAR),
  // Drums
  compases(BATERIA).bank("AkaiLinn"),
);
