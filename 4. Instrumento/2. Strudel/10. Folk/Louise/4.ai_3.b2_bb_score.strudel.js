setcpm(160 / 3);

/*
Louise, B2 con el B♭ de la partitura: tercera propuesta para revisar
(Claude, 2026-10-18). No toca la partitura ni los otros archivos;
4.ai_1.b2_waltz y 4.ai_2.b2_respiro quedan para comparar.

Toca el cierre del coro 2 (c.75–81), el B2 (c.82–90) y el primer compás del
C3 (c.91, Em). Sin batería, a propósito.

Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con su
número y su cifrado. La guitarra va en altura real (suena así).

Qué cambia respecto a 4.ai_2.b2_respiro:

- c.82 y c.83 son los de la partitura, nota por nota: el E♭7 con su arpegio, y
  el B♭ con el bajo en Re en tres octavas, el Fa6 en el 3& y la guitarra
  Mi4–Si♭4–Re5–Si♭5 sostenida (sin rasgueo, como en la partitura).
- Como ese B♭ ya llega a Re6/Fa6, el vals del c.84 arranca abajo (Re5) y sube
  más rápido, una inversión por tiempo, hasta un pico más alto: Sol6 en el
  c.88. Así la nota más aguda del B2 vuelve a caer en el pico, no en el c.83.
- El Sol6 es la séptima del A7 y baja a Fa6 en el Dm del c.89: el mismo Fa6
  que se oyó un instante en el c.83. En el c.90 ese Fa sube a Fa♯ (D mayor).

Lo que se queda igual que en 4.ai_2.b2_respiro:

- Armonía: E♭7 · B♭ · Gm · C · Am · B♭ (C/B♭ en el 3) · A7 · Dm · D (D♯° en el 3) → Em.
- El vals entra en el c.84 y con él la guitarra, con la cabeza del motivo
  (Re–Do–Si♭, Mi–Re–Do), una respuesta en corcheas, la escala al pico, el
  rasgueo del c.88 y el motivo entero en c.89–90.
- El bajo baja de Re2 y engorda: nota sola, quinta, quinta y octava.
  El Si♭→La del bajo (c.87→88) es tu ♭6→5.
- Del c.84 al c.90, sin unísonos ni semitonos entre la guitarra y el piano.
  Los del c.83 (Si♭4 en los dos, Mi4 contra Fa5) son de la partitura.

Para oír solo el B2, cambia el arrange() del final por `b2`.
*/

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
  stack(note(cat(...right)), note(cat(...left))).sound("piano");

let guitar = (list) => strum(note(cat(...list)));

// Guitarra sin rasgueo: los acordes suenan de golpe
let guitarBlock = (list) =>
  note(cat(...list)).sound("gm_acoustic_guitar_nylon");

// ═══════════════════ Cierre del coro 2 (c.75–81) ═══════════════════
/*
Copiado de la partitura: la segunda mitad del C2, con el Gmaj13 y el A7 del
final. El A7 no resuelve en D: el c.82 ya es el B2.
*/

const C2_RIGHT = [
  "[~ [E4,E5] [E4,E5]]", // c.75 Em
  "[~ [D4,B4] [D4,B4]]", // c.76 G
  "[~ [E4,A4] [E4,A4]]", // c.77 F#m7
  "[D4,F#4]", // c.78 Bm
  "[~ G4 G4]", // c.79 Em
  "[~ [E4,D5] [F#4,D5]]", // c.80 Gmaj13
  "[~ [G4,C#5] [A4,E5]]", // c.81 A7
];

const C2_LEFT = [
  "[[E2,E3] E3 E3]", // c.75 Em
  "[[G2,G3] G3 G3]", // c.76 G
  "[[F#2,F#3] F#3 F#3]", // c.77 F#m7
  "[B3, [[B2,B3] ~@2]]", // c.78 Bm
  "[[E2,E3] [E3,B3] [E3,B3]]", // c.79 Em
  "[[G2,F#3] [E3,G3] [F#3,B3]]", // c.80 Gmaj13
  "[[A2,E3] [C#3,E3] [C#3,E3]]", // c.81 A7
];

const C2_GUITAR = [
  "[E2,G2,E3,G3]", // c.75 Em
  "[G2,B2,G3,B3]", // c.76 G
  "[F#2,A2,F#3,A3]", // c.77 F#m7
  "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.78 Bm — en el 2 y el 3
  "[E2,G2,E3,G3,E4]", // c.79 Em
  "[G2,B2,G3,B3]", // c.80 Gmaj13
  "[A2,C#3,E4,A4,E5]", // c.81 A7
];

let c2close = stack(
  // Walts
  piano(C2_RIGHT, C2_LEFT),
  // Armonic guitar
  guitar(C2_GUITAR),
);

// ═══════════════════════ B2 (c.82–90) ═══════════════════════
/*
Dos compases de la partitura (E♭7 y B♭) y siete de vals. El vals arranca abajo
y sube una inversión por tiempo hasta el Sol6 del c.88; del pico se baja por
Dm y D, con el motivo entero en la guitarra, hasta el Em del C3.
*/

const B2_RIGHT = [
  "[Bb4,Eb5]", // c.82 E♭7 — de la partitura
  "[[Bb4,F5,D6]@2 [Bb4,F5,D6]@3 [Bb4,F5,F6]]", // c.83 B♭ — de la partitura
  "[~ [G4,Bb4,D5] [G4,Bb4,D5]]", // c.84 Gm — entra el vals, abajo
  "[~ [G4,C5,E5] [C5,E5,G5]]", // c.85 C — en el 3 sube una inversión
  "[~ [C5,E5,A5] [E5,A5,C6]]", // c.86 Am — otra
  "[~ [F5,Bb5,D6] [G5,C6,E6]]", // c.87 B♭ · C/B♭ — otra
  "[[G5,C#6,E6,G6] [G5,C#6,E6,G6] [G5,C#6,E6,G6]]", // c.88 A7 — el pico, en los tres tiempos
  "[~ [A5,D6,F6] [A5,D6,F6]]", // c.89 Dm — el Sol6 baja a Fa6, el Do♯ sube a Re
  "[~ [A5,D6,F#6] [A5,D#6,F#6]]", // c.90 D · D♯° — el Fa sube a Fa♯, el Re a Re♯
];

const B2_LEFT = [
  "[[Eb2,Db3]@3 Eb3 Bb3 G3]", // c.82 E♭7 — de la partitura
  "[D2,D3,D4]", // c.83 B♭ — de la partitura: bajo en Re
  "G1", // c.84 Gm
  "[C2,G2]", // c.85 C — quinta
  "[A1,E2]", // c.86 Am
  "[Bb1,F2,Bb2]", // c.87 B♭ — quinta y octava
  "[A1,E2,A2]", // c.88 A7 — Si♭→La en el bajo
  "[D2,A2]", // c.89 Dm
  "[D2@2 D#2]", // c.90 D · D♯° — Re→Re♯→Mi
];

const B2_GUITAR = [
  "~", // c.82 E♭7 — calla
  "~", // c.83 B♭ — va aparte, sin rasgueo (B2_GUITAR_BLOCK)
  "[D4 C4@2 Bb3]", // c.84 Gm — la cabeza del motivo, en Re–Do–Si♭
  "[E4 D4@2 C4]", // c.85 C — la misma, un grado arriba
  "[C4 D4 E4 G4@2 A4]", // c.86 Am — responde subiendo
  "[Bb3 C4 D4 F4 G4 A4]", // c.87 B♭ · C/B♭ — escala; el La adelanta el A7
  "[[E3,G3,C#4,E4] [E3,G3,C#4,E4] [E3,G3,C#4,E4]]", // c.88 A7 — rasgueo en los tres tiempos
  "[A4 G4@2 F4]", // c.89 Dm — el motivo en menor
  "[D4@5 F#4@7]", // c.90 D · D♯° — …y vuelve a mayor
];

const B2_GUITAR_BLOCK = [
  "~", // c.82
  "[E4,Bb4,D5,Bb5]", // c.83 B♭ — de la partitura, sostenido
  "~", // c.84
  "~", // c.85
  "~", // c.86
  "~", // c.87
  "~", // c.88
  "~", // c.89
  "~", // c.90
];

let b2 = stack(
  // Piano
  piano(B2_RIGHT, B2_LEFT),
  // Guitar
  guitar(B2_GUITAR),
  // Guitar, el acorde del c.83
  guitarBlock(B2_GUITAR_BLOCK),
);

// ═══════════════════ Entrada del C3 (c.91) ═══════════════════
/*
El primer compás del coro, como en el c.27.
*/

let c3entry = stack(
  // Walts
  piano(["[~ E4 E4]"], ["[E3 ~@2]"]),
  // Armonic guitar
  guitar(["[E2,G2,E3,G3]"]),
);

arrange(
  // Chorus 2, segunda mitad
  [7, c2close],
  // B2
  [9, b2],
  // C3, primer compás
  [1, c3entry],
);
