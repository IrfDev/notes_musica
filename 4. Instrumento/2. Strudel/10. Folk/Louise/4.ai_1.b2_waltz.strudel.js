setcpm(160 / 3);

/*
Louise, B2 en vals: una propuesta para revisar (Claude, 2026-10-18).
No toca la partitura ni 3.full_score: es un archivo aparte para oírlo.

Toca el cierre del coro 2 (c.75–81, tal como está en la partitura), un B2 nuevo
(c.82–90) y el primer compás del C3 (c.91, Em). Sin batería, a propósito.

Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con su
número y su cifrado. La guitarra va en altura real (suena así).

Las decisiones, contra la retro de 3. Composiciones/6. louise/AI/10. Feedback del B2:

- Armonía: E♭7 · B♭ · Gm · C · Am · B♭ (C/B♭ en el 3) · A7 · Dm · D (D♯° en el 3) → Em.
  Todo de Re menor natural salvo el E♭7 de entrada, el A7 (la dominante de Re
  menor, con su Do♯) y el D y el D♯° de salida. Ya no hay cadencia en Fa: el B2
  gira alrededor de Re y llega a Dm por su dominante.
- La columna vertebral es el registro: la voz de arriba del piano sube
  Re5 · Re5 · Mi5 · Mi5→La5 · Fa5→Do6 · Mi6 y el punto más alto cae en el c.88,
  el 7.º de 9 compases, sobre el A7, que todavía no resuelve.
- El bajo baja por debajo de Re2 (el piso de toda la pieza): Si♭1, Sol1, La1.
  La masa crece desde abajo: nota sola (c.83–84), quinta (c.85–86), quinta y
  octava (c.87–88). El Si♭→La del bajo (c.87→88) es tu ♭6→5.
- El piano en vals: bajo largo en el 1, acorde en el 2 y el 3. Solo el c.88
  ataca en los tres tiempos: es el golpe del pico.
- La guitarra va por debajo de la mano derecha del piano, en su registro natural
  (trastes bajos), sin unísonos con el piano. Notas de paso en las partes débiles.
  Su densidad crece: calla (c.82) · 4 · 5 · 6 · 6 · 7 ataques · rasgueo (c.88).
- c.89–90: la guitarra toca el motivo con su ritmo de la intro, en menor:
  La–Sol–Fa sobre Dm y Re–Fa♯ sobre D. El Fa→Fa♯ del motivo es el Dm→D.
- c.90: el D dura dos tiempos, y en el 3 el bajo sube Re→Re♯→Mi: el D♯° es la
  sensible de Em (su dominante sin la raíz). Si sobra, quítalo y deja el D entero.
- c.91: el bajo del piano (Mi3) y el de la guitarra (Mi2) coinciden.

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
Dos frases de 4 después del E♭7. La primera (B♭ · Gm · C · Am) se queda abierta
en Am; la segunda empieza igual, en B♭, y en vez de seguir sube al A7 del pico.
Del pico se baja por Dm y D hasta el Em del C3.
*/

const B2_RIGHT = [
  "[~ [G4,Bb4,Eb5] [G4,Bb4,Eb5]]", // c.82 E♭7 — La→Si♭ y Mi→Mi♭ desde el A7
  "[~ [F4,Bb4,D5] [F4,Bb4,D5]]", // c.83 B♭
  "[~ [G4,Bb4,D5] [G4,Bb4,D5]]", // c.84 Gm
  "[~ [G4,C5,E5] [G4,C5,E5]]", // c.85 C
  "[~ [A4,C5,E5] [C5,E5,A5]]", // c.86 Am — en el 3 sube una inversión
  "[~ [Bb4,D5,F5] [E5,G5,C6]]", // c.87 B♭ · C/B♭ — se agacha y salta
  "[[E5,G5,C#6,E6] [E5,G5,C#6,E6] [E5,G5,C#6,E6]]", // c.88 A7 — el pico, en los tres tiempos
  "[~ [F5,A5,D6] [F5,A5,D6]]", // c.89 Dm — el Do♯ sube a Re, el Sol baja a Fa
  "[~ [F#5,A5,D6] [D#5,F#5,A5]]", // c.90 D · D♯°
];

const B2_LEFT = [
  "[Eb2,Db3]", // c.82 E♭7 — el Do♯ del A7 se queda como Re♭
  "Bb1", // c.83 B♭ — en estado fundamental
  "G1", // c.84 Gm
  "[C2,G2]", // c.85 C — quinta
  "[A1,E2]", // c.86 Am
  "[Bb1,F2,Bb2]", // c.87 B♭ — quinta y octava
  "[A1,E2,A2]", // c.88 A7 — Si♭→La en el bajo
  "[D2,A2]", // c.89 Dm
  "[D2@2 D#2]", // c.90 D · D♯° — Re→Re♯→Mi
];

const B2_GUITAR = [
  "~", // c.82 E♭7 — calla: respira antes del B♭
  "[Bb2@2 F3 Bb3 D4@2]", // c.83 B♭
  "[G2@2 D3 G3 Bb3 C4]", // c.84 Gm — el Do anticipa el C
  "[C3 G3 C4 D4 E4 G3]", // c.85 C — Re de paso
  "[A2 E3 A3 C4 E4 G4]", // c.86 Am — Sol de paso
  "[D3 F3 Bb3 D4 E4 [F4 G4]]", // c.87 B♭ · C/B♭ — sube hacia el pico
  "[[E3,G3,C#4,E4] [E3,G3,C#4,E4] [E3,G3,C#4,E4]]", // c.88 A7 — rasgueo en los tres tiempos
  "[A4 G4@2 F4]", // c.89 Dm — el motivo en menor
  "[D4@5 F#4@7]", // c.90 D · D♯° — …y vuelve a mayor
];

let b2 = stack(
  // Piano
  piano(B2_RIGHT, B2_LEFT),
  // Guitar
  guitar(B2_GUITAR),
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
