setcpm(160 / 3);

/*
Louise, transcrita de la partitura:
  7. Partituras/2. Composiciones/Louise.musicxml (c.1–82)
sobre la estructura de 0.first: mismas secciones, mismos sonidos, arrange() al final.

Un ciclo = un compás. Cada lista lleva una entrada por compás, con su número y
el acorde que marca la partitura, para leerla al lado de MuseScore.
cat(...lista) toca la entrada n en el ciclo n.

La guitarra se escribe una octava arriba de como suena: aquí va en altura real.
La partitura no tiene dinámicas: los velocity() de la batería son los de 0.first.
*/

// Guitarra rasgueada: la cuerda i (de grave a aguda) entra i × gap después.
// Es el .late() por voces de 0.first, pero cuerda por cuerda.
// Los acordes ocupan el compás entero y el ritmo lo pone .struct(), como en 0.first:
// arpWith() pierde el ataque de un acorde que no empieza en el 1.
let strum = (chords, rhythm, gap = 0.01) =>
  stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      chords
        .arpWith((haps) => haps[i] ?? silence)
        .struct(rhythm)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");

// ═══════════════════════ Intro (c.1–10) ══════════════════════
/*
La frase de 5 compases, dos veces. El motivo La–Sol–Fa#–Re–Fa# en los dos
primeros, y el vals (bajo en el 1, acorde que entra antes del 2) en los tres
siguientes. Piano y batería, sin guitarra.
*/

const INTRO_RIGHT = [
  "[A4 G4@2 F#4]", // c.1  D — el motivo
  "[D4@5 F#4@7]", // c.2  D/F#
  "[~ C#5@2 C#5]", // c.3  A
  "[~ [F#4,D5]@2 [F#4,D5]]", // c.4  Bm
  "[~ [D4,D5]@2 [D4,B4]]", // c.5  G
  "[A4 G4@2 F#4]", // c.6  D — el motivo otra vez
  "[D4@5 F#4@7]", // c.7  D
  "[~ [E4,C#5]@2 [E4,C#5]]", // c.8  A
  "[~ [D4,D5]@2 [D4,D5]]", // c.9  Bm
  "[~ [F#4,D5]@2 [E4,E5]]", // c.10 Gmaj7
];

const INTRO_LEFT = [
  "D3", // c.1
  "F#3", // c.2
  "[A2, [~ A3@2 A3]]", // c.3
  "[B2, [~ B3@2 B3]]", // c.4
  "[G2, [~ G3@2 G3]]", // c.5
  "[D2,A3]", // c.6
  "F#2", // c.7
  "[A2, [~ A3@2 A3]]", // c.8
  "[B2, [~ [F#3,B3]@2 [F#3,B3]]]", // c.9
  "[[G2@2 ~], [~ [G3,C#4]@2 [G3,C#4]]]", // c.10
];

let introPiano = stack(
  note(cat(...INTRO_RIGHT)),
  note(cat(...INTRO_LEFT)),
).sound("piano");

let introDrums = stack(
  // Bombo: cada frase de 5 empieza distinto
  s("<~ [bd ~ ~] [bd ~ ~] [bd ~ bd] ~ [~ bd bd] [bd ~ ~] [bd ~ ~] [bd ~ bd] ~>"),
  // Pandereta
  s("<~ [tb tb ~] [~ tb tb] [~ tb tb] [tb ~ ~]>"),
  // Shaker
  s("<~ [sh sh sh] [sh ~ ~] [~ [~ sh] ~] [~ [~ sh] ~]>").velocity(0.1),
  // Crash al empezar la segunda frase, toms al cerrar cada una
  s("<~!5 [cr ~ ~] ~!4>"),
  s("<~!4 [~ ~ [lt ht]]>"),
).bank("AkaiLinn");

let intro = stack(
  // Piano: el motivo y el vals
  introPiano,
  // Drums
  introDrums,
);

// ═══════════════════════ Verse (c.11–26) ══════════════════════
/*
El piano toca acordes largos y la guitarra rasguea uno por compás. En los
compases de cadencia (19, 21, 23, 25) el vals se reparte: piano en el 1,
guitarra en el 2 y el 3.
*/

const VERSE_RIGHT = [
  "[F#4,D5]", // c.11 Dmaj7
  "[[C#4,C#5]@3 [C#4,A4]]", // c.12 F#m
  "[E4,G4]", // c.13 C#dim
  "[[E4,C#5] [C#4,G5]]", // c.14 A · A7
  "[D4,F#5]", // c.15 Bm7
  "[[B3,D5]@3 [E4,B4]]", // c.16 G · G6
  "[F#4,C#5]", // c.17 Dmaj7
  "[[C#4,A4] [A4,E5]]", // c.18 F#m · F#m7
  "[[F#4,C#5] ~ ~]", // c.19 Dmaj7
  "[[C#4,C#5]@3 [C#4,A4]]", // c.20 F#m
  "[E4,G4]", // c.21 C#dim
  "[[E4,C#5] [C#4,G5]]", // c.22 A · A7
  "[D4,F#5]", // c.23 Bm7
  "[[B3,D5]@3 [E4,B4]]", // c.24 G · G6
  "[F#4,A4]", // c.25 D6
  "[[C#4,A4] [A4,E5]]", // c.26 F#m
];

const VERSE_LEFT = [
  "[D2,C#4]", // c.11
  "[F#3@3 G3]", // c.12 el G3 anticipa el C#dim
  "[C#3,E3]", // c.13
  "[A3 A3]", // c.14
  "B3", // c.15
  "[G3@3 F#3]", // c.16
  "A3", // c.17
  "[F#2 F#2]", // c.18
  "[[A2,D3] ~ ~]", // c.19
  "[A3@3 A3]", // c.20
  "[C#3,E3]", // c.21
  "[A3 A3]", // c.22
  "B3", // c.23
  "[G3@3 F#3]", // c.24
  "D3", // c.25
  "[[F#3,A3] [F#3,A3]]", // c.26
];

// De grave a aguda, en altura real
const VERSE_GUITAR = [
  "[E2,A2,D3,A3,C#4,F#4]", // c.11 Dmaj7
  "[F#2,A2,F#3,A3,F#4,C#5]", // c.12 F#m
  "[C#3,E3,C#4,G4]", // c.13 C#dim
  "[A2,C#3,A3,C#4,A4,E5]", // c.14 A
  "[B2,D3,F#4,B4,F#5]", // c.15 Bm7
  "[G2,B2,D4,G4,D5]", // c.16 G
  "[D3,A3,D4,A4]", // c.17 Dmaj7
  "[C#4,F#4,A4,C#5]", // c.18 F#m
  "[D3,F#3,D4,A4]", // c.19 Dmaj7 — en el 2 y el 3
  "[F#2,A2,F#3,A3,F#4,C#5]", // c.20 F#m
  "[C#3,E3,C#4,G4]", // c.21 C#dim — en el 2 y el 3
  "[A2,C#3,A3,C#4,A4,E5]", // c.22 A
  "[B3,F#4,B4,F#5]", // c.23 Bm7 — en el 2 y el 3
  "[G3,D4,G4,D5]", // c.24 G
  "[F#3,A3,D4,A4]", // c.25 D6 — en el 2 y el 3
  "[C#3,A3,C#4,F#4,A4,C#5]", // c.26 F#m
];

// El mismo de 0.first: la partitura lo conservó
let guitarStruct = `<
    [x@3]!8
    [~ x x]
    [x@3]
    [~ x x]
    [x@3]
    [~ x x]
    [x@3]
    [~ x x]
    [x@3]
>`;

let versePiano = stack(
  note(cat(...VERSE_RIGHT)),
  note(cat(...VERSE_LEFT)),
).sound("piano");

let verseGuitar = strum(note(cat(...VERSE_GUITAR)), guitarStruct);

let verseDrums = stack(
  // Kick
  s("<[bd ~ ~]!7 ~>"),
  // Pandereta en el 3
  s("[~ ~ tb]").velocity(0.7),
  // Hi-hat al abrir cada mitad, toms al cerrarla
  s("<[oh hh ~] ~!7>"),
  s("<~!7 [mt lt ht]>"),
  // Ghosty: shaker en el 2 y el 3, cencerro en el 2
  s("[~ [sh,cb] sh]").velocity(0.1),
).bank("AkaiLinn");

let verse = stack(
  // Piano
  versePiano,
  // Guitar
  verseGuitar,
  // Drums
  verseDrums,
);

// ═══════════════════════ Chorus (c.27–42) ══════════════════════
/*
El piano vuelve al vals: bajo en el 1, una nota en el 2 y el 3. La guitarra
toca el acorde largo y, cada cuatro compases, se queda con el 2 y el 3.
Las dos mitades cierran en A7 → D (c.33–34 y 41–42).
*/

const CHORUS_RIGHT = [
  "[~ E4 E4]", // c.27 Em
  "[~ G4 G4]", // c.28 G
  "[~ F#4 F#4]", // c.29 F#m7
  "~", // c.30 Bm
  "[~ E4 E4]", // c.31 Em
  "[~ G4 G4]", // c.32 G
  "[~@2 A4@3 A4]", // c.33 A7
  "~", // c.34 D
  "[~ [E4,E5] [E4,E5]]", // c.35 Em
  "[~ [D4,B4] [D4,B4]]", // c.36 G
  "[~ [E4,A4] [E4,A4]]", // c.37 F#m7
  "[D4,F#4]", // c.38 Bm
  "[~ G4 G4]", // c.39 Em
  "[~ [D4,B4] [D4,B4]]", // c.40 G
  "[~@2 [A4,C#5]@3 [A4,C#5]]", // c.41 A7
  "[D4,D5]", // c.42 D
];

const CHORUS_LEFT = [
  "[E3 ~ ~]", // c.27
  "[G3 ~ ~]", // c.28
  "[F#3 ~ ~]", // c.29
  "[B3, [B2 ~ ~]]", // c.30
  "[E3 ~ ~]", // c.31
  "[G3 ~ ~]", // c.32
  "[A2@2 E3@3 E3]", // c.33
  "[D3, [D2 ~ ~]]", // c.34
  "[[E2,E3] E3 E3]", // c.35
  "[[G2,G3] G3 G3]", // c.36
  "[[F#2,F#3] F#3 F#3]", // c.37
  "[B3, [[B2,B3] ~ ~]]", // c.38
  "[[E2,E3] [E3,B3] [E3,B3]]", // c.39
  "[[G2,G3] G3 G3]", // c.40
  "[[A2,G3]@2 G3@3 G3]", // c.41
  "[[D2,F#3]@4 D4 C#4]", // c.42 D–C# lleva al Bm del bridge
];

const CHORUS_GUITAR = [
  "[E2,G2,E3,G3]", // c.27 Em
  "[G2,B2,G3,B3]", // c.28 G
  "[F#2,A2,F#3,A3]", // c.29 F#m7
  "[B3,D4,B4,F#5]", // c.30 Bm — en el 2 y el 3
  "[E2,G2,E3,G3]", // c.31 Em
  "[G2,B2,G3,B3]", // c.32 G
  "[A2,C#3,E4,A4,E5]", // c.33 A7
  "[A3,D4,F#4,A4]", // c.34 D — en el 2 y el 3
  "[E2,G2,E3,G3]", // c.35 Em
  "[G2,B2,G3,B3]", // c.36 G
  "[F#2,A2,F#3,A3]", // c.37 F#m7
  "[B3,D4,B4,F#5]", // c.38 Bm — en el 2 y el 3
  "[E2,G2,E3,G3,E4]", // c.39 Em
  "[G2,B2,G3,B3]", // c.40 G
  "[A2,C#3,E4,A4,E5]", // c.41 A7
  "~", // c.42 D — la guitarra calla
];

let CHORUS_GUITAR_STRUCT = `<[x@3]!3 [~ x x]>`;

let chorusPiano = stack(
  note(cat(...CHORUS_RIGHT)),
  note(cat(...CHORUS_LEFT)),
).sound("piano");

let chorusGuitar = strum(note(cat(...CHORUS_GUITAR)), CHORUS_GUITAR_STRUCT);

let chorusDrums = stack(
  // Kick
  s("<[bd ~ ~]!3 ~>"),
  // Caja en el 2 y el 3, pandereta en el 1
  s("[~ sd sd]").velocity(0.6),
  s("[tb ~ ~]").velocity(0.7),
  // Palmas en el compás de cadencia
  s("<~!3 [cp ~ ~]>"),
  // Hi-hat solo al entrar
  s("<[hh oh ~] ~!15>"),
).bank("AkaiLinn");

let chorus = stack(
  // Walts
  chorusPiano,
  // Armonic guitar
  chorusGuitar,
  // Drums
  chorusDrums,
);

// ═══════════════════════ Bridge (c.43–50) ══════════════════════
/*
Piano solo. Tres compases nuevos (Bm · Em · E sobre La) con el bajo bajando
por quintas, y el G# del c.45 sube al La del motivo: vuelve la frase de la intro.
*/

const BRIDGE_RIGHT = [
  "[F#4,D5]", // c.43 Bm
  "[~ [G4,D5] [G4,D5]]", // c.44 Em
  "[~@2 [E4,B4]@3 G#4]", // c.45 E/A — el G# sube al La
  "[A4 G4@2 F#4]", // c.46 D — el motivo
  "[D4@5 F#4@7]", // c.47 D
  "[~ [E4,C#5] [E4,C#5]]", // c.48 A
  "[~@2 [F#4,D5]@3 [F#4,D5]]", // c.49 Bm
  "[[G4,D5]@3 [G4,D5] D4@2]", // c.50 Gmaj7
];

const BRIDGE_LEFT = [
  "[B3@2 D3@3 F#3]", // c.43
  "[[E3,B3] B3 B3]", // c.44
  "[[A2,E3] E3]", // c.45
  "[D2,D3]", // c.46
  "A2", // c.47
  "[A2, [~ A3 A3]]", // c.48
  "[B2, [~@2 B3@3 B3]]", // c.49
  "[G2@2 B3]", // c.50
];

let bridge = stack(
  note(cat(...BRIDGE_RIGHT)),
  note(cat(...BRIDGE_LEFT)),
).sound("piano");

// ═══════════════════════ Verse 2 (c.51–66) ══════════════════════
/*
El verso 1 salvo estos compases. La batería es la misma.
*/

const VERSE2_RIGHT = [...VERSE_RIGHT];
VERSE2_RIGHT[0] = "F#4"; // c.51 sin el D5

const VERSE2_LEFT = [...VERSE_LEFT];
VERSE2_LEFT[0] = "[D3,C#4]"; // c.51 bajo D3 (V1: D2)
VERSE2_LEFT[1] = "[F#3@3 A3]"; // c.52 A3 (V1: G3)

const VERSE2_GUITAR = [...VERSE_GUITAR];
VERSE2_GUITAR[0] = "[A2,D3,A3,C#4,F#4]"; // c.51 sin el E2
VERSE2_GUITAR[2] = "[E2,G2,C#3,E3,C#4,G4]"; // c.53 C#dim desde E2
VERSE2_GUITAR[6] = "[F#2,A2,A3,D4,A4]"; // c.57 Dmaj7 sobre F#
VERSE2_GUITAR[7] = "[F#2,A2,C#4,F#4,A4,C#5]"; // c.58 F#m con bajo

let verse2 = stack(
  // Piano
  stack(note(cat(...VERSE2_RIGHT)), note(cat(...VERSE2_LEFT))).sound("piano"),
  // Guitar
  strum(note(cat(...VERSE2_GUITAR)), guitarStruct),
  // Drums
  verseDrums,
);

// ═══════════════════════ Chorus 2 (c.67–82) ══════════════════════
/*
Piano y guitarra iguales al coro 1. Cambia la batería: sin caja ni palmas,
bombo en el 1 y el 3, hi-hat cada dos compases y toms cada cuatro.
*/

let chorus2Drums = stack(
  // Kick
  s("<[bd ~ bd]!3 ~>"),
  // Pandereta en el 2 y el 3
  s("[~ tb tb]").velocity(0.7),
  // Crash al entrar, hi-hat cada dos compases
  s("<[cr hh oh] ~!15>"),
  s("<~ [~ oh hh]>"),
  // Toms en el compás de cadencia
  s("<~!3 [lt mt ht]>"),
  // Ghosty: cencerro en el 1, shaker cada dos compases
  s("[cb ~ ~]").velocity(0.4),
  s("<~ [sh ~ ~]>").velocity(0.4),
).bank("AkaiLinn");

let chorus2 = stack(
  // Walts
  chorusPiano,
  // Armonic guitar
  chorusGuitar,
  // Drums
  chorus2Drums,
);

arrange(
  // Intro
  [10, intro],
  // Verse
  [16, verse],
  // Chorus
  [16, chorus],
  // Bridge
  [8, bridge],
  // Verse 2
  [16, verse2],
  // Chorus 2
  [16, chorus2],
  // c.83–108 (B2, C3, outro) están vacíos en la partitura
);
