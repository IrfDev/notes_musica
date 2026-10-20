setcpm(160 / 3);

/*
Louise, B2 con todo el feedback resuelto: cuarta propuesta para revisar
(Claude, 2026-10-18). No toca la partitura ni tus archivos.
Las versiones anteriores (4.ai_1, 4.ai_2, 4.ai_3) quedan para comparar.

Toca el cierre del coro 2 (c.75–81), el B2 (c.82–92) y el primer compás del
C3 (c.93, Em). El B2 mide 11 compases, así que en la partitura el C3 pasaría
del c.91 al c.93. Sin batería, a propósito.

Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con su
número y su cifrado. La guitarra va en altura real (suena así).
La dinámica va en las listas *_DYN: un valor de velocity por compás.

Cada punto de 3. Composiciones/6. louise/AI/10. Feedback del B2, y cómo queda:

§2.1 c.91 (el piano seguía en el B2) → en la entrada del C3 el bajo del piano y
     el de la guitarra son Mi; no queda ningún Si♭ ni Fa, y el Fa♯ ya no vuelve a Fa.
§2.2 El Dm no sonaba → Dm limpio, con su compás (c.91). El D dura dos tiempos (c.92).
§2.3 F7/B♭ del c.89 → ya no existe: no hay cadencia en Fa.
§2.4 El B♭ disfrazado → B♭ en estado fundamental (Si♭1–Fa2 en el bajo), sin Mi
     natural y con la guitarra en su registro. Conserva el ritmo de la partitura
     (1 · 2 con puntillo · 3&), una octava abajo.
§2.5 Batería → fuera, como pediste.
§2.6 El B2 sonaba a valle → crescendo de mp a ff dentro del B2 (B2_DYN) y la masa
     crece hasta 11 notas a la vez. Termina por encima del C2.
§3.1 Empezaba arriba y bajaba → la voz de arriba del piano sube de Re5 a Sol6.
§3.2 Se cerraba solo en Fa → el clímax cae en el A7, sostenido dos compases sobre
     un pedal de La (c.89–90), sin resolver. Resuelve en el Dm, ya de bajada.
§3.3 Fa mayor en vez de B♭ → el B2 gira en Re menor (B♭ es el ♭VI). La armadura
     de un bemol de la partitura ahora sí dice lo que suena.
§3.4 B♭ → Dm → Em → B♭ · Gm · C · Am · B♭ · C/B♭ · A7 · A7 · Dm · D (D♯° en el 3) → Em.
     El bajo hace Si♭→La (tu ♭6→5) al llegar al pico, y Re→Re♯→Mi al entrar al C3.
     El B2 entra (B♭) y sale (Dm) por acordes distintos.
§3.5 El mismo empuje en todos los compases → vals desde el c.84 (vuelve el tiempo
     3). El empuje del 3& queda solo para dos llegadas: el c.83 al vals y el c.88
     al pico (la guitarra adelanta el La del A7).
§3.6 Piano y guitarra en la misma octava → bandas separadas, sin unísonos ni
     semitonos. La guitarra ataca en el 1 y entre tiempos; el piano en el 2 y el 3.
§3.7 El motivo enterrado → la cabeza del motivo en secuencia (c.84–87) y el motivo
     entero al descubierto en c.91–92, sin nada en su registro.
§3.8 El piso en Re2 → el bajo baja a Sol1, La1 y Si♭1, y engorda hacia el pico.
§3.9 El pico duraba lo que el valle → 11 compases (~12 s) contra los 8 del B1.
§3.10 La guitarra real → todo en posiciones bajas, trastes 0 a 3.
§4   Recursos que no se usaban, ahora sí: pedal (Si♭ en c.87–88, La en c.89–90),
     dinámica, rasgueo, la dominante de Em (D♯°) y el motivo transformado.
     Siguen sin usarse: batería, aahs, voz, silencio y tag.

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

// Dinámica: un valor de velocity por compás
let dyn = (list) => cat(...list);

// ═══════════════════ Cierre del coro 2 (c.75–81) ═══════════════════
/*
Las notas son las de la partitura. Lo único nuevo es un crescendo hacia el B2.
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

const C2_DYN = [
  0.68, // c.75 mf
  0.7, // c.76
  0.72, // c.77
  0.73, // c.78
  0.75, // c.79
  0.78, // c.80
  0.8, // c.81 f
];

let c2close = stack(
  // Walts
  piano(C2_RIGHT, C2_LEFT),
  // Armonic guitar
  guitar(C2_GUITAR),
).velocity(dyn(C2_DYN));

// ═══════════════════════ B2 (c.82–92) ═══════════════════════
/*
Dos compases de respiro (E♭7 y B♭), seis de vals que suben (B♭ · Gm · C · Am ·
B♭ · C/B♭), dos de pico sobre un pedal de La (A7) y dos de bajada (Dm · D) hasta
el Em del C3.
*/

const B2_RIGHT = [
  "[Bb4,Eb5]", // c.82 E♭7 — de la partitura
  "[[F4,Bb4,D5]@2 [F4,Bb4,D5]@3 [F4,Bb4,F5]]", // c.83 B♭ — el ritmo de la partitura, una octava abajo
  "[~ [G4,Bb4,D5] [Bb4,D5,G5]]", // c.84 Gm — entra el vals; en el 3 sube una inversión
  "[~ [C5,E5,G5] [E5,G5,C6]]", // c.85 C — otra
  "[~ [E5,A5,C6] [E5,A5,C6]]", // c.86 Am
  "[~ [F5,Bb5,D6] [F5,Bb5,D6]]", // c.87 B♭
  "[~ [E5,G5,C6] [G5,C6,E6]]", // c.88 C/B♭ — se agacha y salta
  "[~ [G5,C#6,E6] [G5,C#6,E6]]", // c.89 A7 — llega el pico
  "[[G5,C#6,E6,G6] [G5,C#6,E6,G6] [G5,C#6,E6,G6]]", // c.90 A7 — la cima, en los tres tiempos
  "[~ [A5,D6,F6] [A5,D6,F6]]", // c.91 Dm — el Sol6 baja a Fa6, el Do♯ sube a Re
  "[~ [A5,D6,F#6] [A5,D#6,F#6]]", // c.92 D · D♯° — el Fa sube a Fa♯, el Re a Re♯
];

const B2_LEFT = [
  "[[Eb2,Db3]@3 Eb3 Bb3 G3]", // c.82 E♭7 — de la partitura
  "[Bb1,F2]", // c.83 B♭ — en estado fundamental
  "G1", // c.84 Gm
  "[C2,G2]", // c.85 C — quinta
  "[A1,E2]", // c.86 Am
  "[Bb1,F2]", // c.87 B♭ — empieza el pedal de Si♭
  "[Bb1,F2,Bb2]", // c.88 C/B♭ — sigue el pedal, con octava
  "[A1,E2,A2]", // c.89 A7 — Si♭→La: pedal de La
  "[A1,E2,A2]", // c.90 A7 — sigue el pedal
  "[D2,A2]", // c.91 Dm
  "[D2@2 D#2]", // c.92 D · D♯° — Re→Re♯→Mi
];

const B2_GUITAR = [
  "~", // c.82 E♭7 — calla
  "~", // c.83 B♭ — va aparte, sin rasgueo (B2_GUITAR_BLOCK)
  "[D4 C4@2 Bb3]", // c.84 Gm — la cabeza del motivo, en Re–Do–Si♭
  "[E4 D4@2 C4]", // c.85 C — la misma, un grado arriba
  "[C4 D4 E4 G4@2 A4]", // c.86 Am — responde subiendo
  "[D4 C4@2 Bb3]", // c.87 B♭ — la cabeza otra vez, ahora sobre B♭
  "[Bb3 C4 D4 E4 G4 A4]", // c.88 C/B♭ — escala; el La adelanta el A7
  "[[E3,G3,C#4,E4] [E3,G3,C#4,E4] [E3,G3,C#4,E4]]", // c.89 A7 — rasgueo en los tres tiempos
  "[[E3,A3,C#4,G4] [E3,A3,C#4,G4] [E3,A3,C#4,G4]]", // c.90 A7 — el acorde sube con el piano
  "[A4 G4@2 F4]", // c.91 Dm — el motivo en menor
  "[D4@5 F#4@7]", // c.92 D · D♯° — …y vuelve a mayor
];

const B2_GUITAR_BLOCK = [
  "~", // c.82
  "[F3,Bb3,D4]", // c.83 B♭ — sostenido, como en la partitura, en su registro
  "~", // c.84
  "~", // c.85
  "~", // c.86
  "~", // c.87
  "~", // c.88
  "~", // c.89
  "~", // c.90
  "~", // c.91
  "~", // c.92
];

const B2_DYN = [
  0.64, // c.82 mp — respira
  0.66, // c.83
  0.68, // c.84
  0.72, // c.85 mf
  0.76, // c.86
  0.8, // c.87 f
  0.85, // c.88
  0.92, // c.89
  1.0, // c.90 ff — la cima
  0.82, // c.91 f — empieza la bajada
  0.7, // c.92 mf
];

let b2 = stack(
  // Piano
  piano(B2_RIGHT, B2_LEFT),
  // Guitar
  guitar(B2_GUITAR),
  // Guitar, el acorde del c.83
  guitarBlock(B2_GUITAR_BLOCK),
).velocity(dyn(B2_DYN));

// ═══════════════════ Entrada del C3 (c.93) ═══════════════════
/*
El primer compás del coro, como en el c.27, ya en mp: la despedida.
*/

let c3entry = stack(
  // Walts
  piano(["[~ E4 E4]"], ["[E3 ~@2]"]),
  // Armonic guitar
  guitar(["[E2,G2,E3,G3]"]),
).velocity(0.58);

arrange(
  // Chorus 2, segunda mitad
  [7, c2close],
  // B2
  [11, b2],
  // C3, primer compás
  [1, c3entry],
);
