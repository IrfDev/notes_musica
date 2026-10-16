setcpm(160 / 3);

/*
Louise, transcrita entera de la partitura:
  7. Partituras/2. Composiciones/Louise.musicxml (c.1–88, commit 1ee5e33)
Es 2.from_score más lo que la partitura tiene desde entonces: la batería
escrita, el final nuevo del coro 2 (c.80–81) y el B2 (c.82–88).

Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con su
número y el cifrado de la partitura, para leerla al lado de MuseScore.
cat(...lista) toca la entrada n en el ciclo n.

- La guitarra se escribe una octava arriba de como suena: aquí va en altura real.
- La batería sale de las ocho partes de percusión, una línea por instrumento y
  por velocidad. Los golpes entre paréntesis de la partitura son SUAVE o GHOST.
- Una ligadura no cruza la barra: la nota se corta al final del ciclo. Solo
  pasa con el F5 de la guitarra en c.85–87.
- La voz está vacía, y de c.89 a c.109 no hay nada escrito: no salen.

Para oír una sección sola, cambia el arrange() del final por su nombre (b2, chorus2…).
*/

// Velocidades de la partitura: su "dynamics" (% de 90) pasado a MIDI / 127
const FUERTE = 0.81; // 114 %
const NORMAL = 0.71; // 100 %, y los golpes sin velocidad propia
const SUAVE = 0.54; // 76 %
const GHOST = 0.27; // 38 %

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual.
// El strum de 2.from_score usaba arpWith(), que pierde todo lo que no empieza
// en el 1; aquí el ritmo va escrito en cada compás, así que se numera a mano.
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

// ═══════════════════════ Intro (c.1–10) ══════════════════════
/*
La frase de 5 compases, dos veces. El motivo La–Sol–Fa#–Re–Fa# en los dos
primeros, y el vals (bajo en el 1, acorde que entra antes del 2) en los tres
siguientes. Piano y batería, sin guitarra. La batería entra en el c.2: crash
al empezar la segunda frase, toms al cerrar cada una.
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
  "D3", // c.1  D
  "F#3", // c.2  D/F#
  "[A2, [~ A3@2 A3]]", // c.3  A
  "[B2, [~ B3@2 B3]]", // c.4  Bm
  "[G2, [~ G3@2 G3]]", // c.5  G
  "[D2,A3]", // c.6  D
  "F#2", // c.7  D
  "[A2, [~ A3@2 A3]]", // c.8  A
  "[B2, [~ [F#3,B3]@2 [F#3,B3]]]", // c.9  Bm
  "[[G2@2 ~], [~ [G3,C#4]@2 [G3,C#4]]]", // c.10 Gmaj7
];

let introDrums = stack(
  // Bombo: cada frase de 5 empieza distinto
  s("<~ [bd ~ ~]!2 [bd ~ bd] ~ [~ bd bd] [bd ~ ~]!2 [bd ~ bd] ~>").velocity(FUERTE),
  // Toms al cerrar cada frase
  s("<~!4 [~ ~ [lt ht]]>").velocity(FUERTE),
  // Crash al empezar la segunda frase
  s("<~!5 [cr ~ ~] ~!4>").velocity(FUERTE),
  // Pandereta
  s("<~ [tb tb ~] [~ tb tb]!2 [tb ~ ~]>").velocity(FUERTE),
  // Shaker
  s("<~ [sh sh sh] [sh ~ ~] [~ [~ sh] ~]!2>").velocity(GHOST),
).bank("AkaiLinn");

let intro = stack(
  // Piano: el motivo y el vals
  piano(INTRO_RIGHT, INTRO_LEFT),
  // Drums
  introDrums,
);

// ═══════════════════════ Verse (c.11–26) ══════════════════════
/*
El piano toca acordes largos y la guitarra rasguea uno por compás. En los
compases de cadencia (19, 21, 23, 25) el vals se reparte: el piano ataca en el 1
y la guitarra entra en el 2 y el 3.
*/

const VERSE_RIGHT = [
  "[F#4,D5]", // c.11 Dmaj7
  "[[C#4,C#5]@3 [C#4,A4]]", // c.12 F#m · D
  "[E4,G4]", // c.13 C#dim
  "[[E4,C#5] [C#4,G5]]", // c.14 A · A7
  "[D4,F#5]", // c.15 Bm7
  "[[B3,D5]@3 [E4,B4]]", // c.16 G · G6
  "[F#4,C#5]", // c.17 Dmaj7
  "[[C#4,A4] [A4,E5]]", // c.18 F#m · F#m7
  "[[F#4,C#5] ~@2]", // c.19 Dmaj7
  "[[C#4,C#5]@3 [C#4,A4]]", // c.20 F#m
  "[E4,G4]", // c.21 C#dim
  "[[E4,C#5] [C#4,G5]]", // c.22 A · A7
  "[D4,F#5]", // c.23 Bm7
  "[[B3,D5]@3 [E4,B4]]", // c.24 G · G6
  "[F#4,A4]", // c.25 D6
  "[[C#4,A4] [A4,E5]]", // c.26 F#m
];

const VERSE_LEFT = [
  "[D2,C#4]", // c.11 Dmaj7
  "[F#3@3 G3]", // c.12 F#m · D — el G3 anticipa el C#dim
  "[C#3,E3]", // c.13 C#dim
  "[A3 A3]", // c.14 A · A7
  "B3", // c.15 Bm7
  "[G3@3 F#3]", // c.16 G · G6
  "A3", // c.17 Dmaj7
  "[F#2 F#2]", // c.18 F#m · F#m7
  "[[A2,D3] ~@2]", // c.19 Dmaj7
  "[A3@3 A3]", // c.20 F#m
  "[C#3,E3]", // c.21 C#dim
  "[A3 A3]", // c.22 A · A7
  "B3", // c.23 Bm7
  "[G3@3 F#3]", // c.24 G · G6
  "D3", // c.25 D6
  "[[F#3,A3] [F#3,A3]]", // c.26 F#m
];

// De grave a aguda, en altura real
const VERSE_GUITAR = [
  "[E2,A2,D3,A3,C#4,F#4]", // c.11 Dmaj7
  "[F#2,A2,F#3,A3,F#4,C#5]", // c.12 F#m · D
  "[C#3,E3,C#4,G4]", // c.13 C#dim
  "[A2,C#3,A3,C#4,A4,E5]", // c.14 A · A7
  "[B2,D3,F#4,B4,F#5]", // c.15 Bm7
  "[G2,B2,D4,G4,D5]", // c.16 G · G6
  "[D3,A3,D4,A4]", // c.17 Dmaj7
  "[C#4,F#4,A4,C#5]", // c.18 F#m · F#m7
  "[~ [D3,F#3,D4,A4] [D3,F#3,D4,A4]]", // c.19 Dmaj7 — en el 2 y el 3
  "[F#2,A2,F#3,A3,F#4,C#5]", // c.20 F#m
  "[~ [C#3,E3,C#4,G4] [C#3,E3,C#4,G4]]", // c.21 C#dim — en el 2 y el 3
  "[A2,C#3,A3,C#4,A4,E5]", // c.22 A · A7
  "[~ [B3,F#4,B4,F#5] [B3,F#4,B4,F#5]]", // c.23 Bm7 — en el 2 y el 3
  "[G3,D4,G4,D5]", // c.24 G · G6
  "[~ [F#3,A3,D4,A4] [F#3,A3,D4,A4]]", // c.25 D6 — en el 2 y el 3
  "[C#3,A3,C#4,F#4,A4,C#5]", // c.26 F#m
];

let verseDrums = stack(
  // Bombo en el 1, menos al cerrar cada mitad
  s("<[bd ~ ~]!7 ~>").velocity(FUERTE),
  // Toms al cerrar cada mitad
  s("<~!7 [mt lt ht]>").velocity(FUERTE),
  // Hi-hat al abrir cada mitad
  s("<[oh hh ~] ~!7>").velocity(FUERTE),
  // Pandereta en el 3
  s("[~ ~ tb]").velocity(NORMAL),
  // Ghosty: cencerro en el 2
  s("[~ cb ~]").velocity(GHOST),
  // Ghosty: shaker en el 2 y el 3
  s("[~ sh sh]").velocity(GHOST),
).bank("AkaiLinn");

let verse = stack(
  // Piano
  piano(VERSE_RIGHT, VERSE_LEFT),
  // Guitar
  guitar(VERSE_GUITAR),
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
  "[E3 ~@2]", // c.27 Em
  "[G3 ~@2]", // c.28 G
  "[F#3 ~@2]", // c.29 F#m7
  "[B3, [B2 ~@2]]", // c.30 Bm
  "[E3 ~@2]", // c.31 Em
  "[G3 ~@2]", // c.32 G
  "[A2@2 E3@3 E3]", // c.33 A7
  "[D3, [D2 ~@2]]", // c.34 D
  "[[E2,E3] E3 E3]", // c.35 Em
  "[[G2,G3] G3 G3]", // c.36 G
  "[[F#2,F#3] F#3 F#3]", // c.37 F#m7
  "[B3, [[B2,B3] ~@2]]", // c.38 Bm
  "[[E2,E3] [E3,B3] [E3,B3]]", // c.39 Em
  "[[G2,G3] G3 G3]", // c.40 G
  "[[A2,G3]@2 G3@3 G3]", // c.41 A7
  "[[D2,F#3]@4 D4 C#4]", // c.42 D — D–C# lleva al Bm del bridge
];

const CHORUS_GUITAR = [
  "[E2,G2,E3,G3]", // c.27 Em
  "[G2,B2,G3,B3]", // c.28 G
  "[F#2,A2,F#3,A3]", // c.29 F#m7
  "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.30 Bm — en el 2 y el 3
  "[E2,G2,E3,G3]", // c.31 Em
  "[G2,B2,G3,B3]", // c.32 G
  "[A2,C#3,E4,A4,E5]", // c.33 A7
  "[~ [A3,D4,F#4,A4] [A3,D4,F#4,A4]]", // c.34 D — en el 2 y el 3
  "[E2,G2,E3,G3]", // c.35 Em
  "[G2,B2,G3,B3]", // c.36 G
  "[F#2,A2,F#3,A3]", // c.37 F#m7
  "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.38 Bm — en el 2 y el 3
  "[E2,G2,E3,G3,E4]", // c.39 Em
  "[G2,B2,G3,B3]", // c.40 G
  "[A2,C#3,E4,A4,E5]", // c.41 A7
  "~", // c.42 D — la guitarra calla
];

let chorusDrums = stack(
  // Bombo en el 1, menos en el compás de cadencia
  s("<[bd ~ ~]!3 ~>").velocity(FUERTE),
  // Caja en el 2 y el 3
  s("[~ sd sd]").velocity(FUERTE),
  // Hi-hat solo al entrar
  s("<[hh oh ~] ~!15>").velocity(FUERTE),
  // Pandereta en el 1
  s("[tb ~ ~]").velocity(FUERTE),
  // Palmas en el compás de cadencia
  s("<~!3 [cp ~ ~]>").velocity(FUERTE),
).bank("AkaiLinn");

let chorus = stack(
  // Walts
  piano(CHORUS_RIGHT, CHORUS_LEFT),
  // Armonic guitar
  guitar(CHORUS_GUITAR),
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
  "[~@2 [E4,B4]@3 G#4]", // c.45 E — el G# sube al La
  "[A4 G4@2 F#4]", // c.46 D — el motivo
  "[D4@5 F#4@7]", // c.47 D
  "[~ [E4,C#5] [E4,C#5]]", // c.48 A
  "[~@2 [F#4,D5]@3 [F#4,D5]]", // c.49 Bm
  "[[G4,D5]@3 [G4,D5] D4@2]", // c.50 Gmaj7
];

const BRIDGE_LEFT = [
  "[B3@2 D3@3 F#3]", // c.43 Bm
  "[[E3,B3] B3 B3]", // c.44 Em
  "[[A2,E3] E3]", // c.45 E
  "[D2,D3]", // c.46 D
  "A2", // c.47 D
  "[A2, [~ A3 A3]]", // c.48 A
  "[B2, [~@2 B3@3 B3]]", // c.49 Bm
  "[[G2@2 ~], [~@2 B3]]", // c.50 Gmaj7
];

let bridge = piano(BRIDGE_RIGHT, BRIDGE_LEFT);

// ═══════════════════════ Verse 2 (c.51–66) ══════════════════════
/*
El verso 1 salvo estos compases. La batería es la misma.
*/

const VERSE2_RIGHT = [...VERSE_RIGHT];
VERSE2_RIGHT[0] = "F#4"; // c.51 (V1: [F#4,D5])

const VERSE2_LEFT = [...VERSE_LEFT];
VERSE2_LEFT[0] = "[D3,C#4]"; // c.51 (V1: [D2,C#4])
VERSE2_LEFT[1] = "[F#3@3 A3]"; // c.52 (V1: [F#3@3 G3])

const VERSE2_GUITAR = [...VERSE_GUITAR];
VERSE2_GUITAR[0] = "[A2,D3,A3,C#4,F#4]"; // c.51 (V1: [E2,A2,D3,A3,C#4,F#4])
VERSE2_GUITAR[2] = "[E2,G2,C#3,E3,C#4,G4]"; // c.53 (V1: [C#3,E3,C#4,G4])
VERSE2_GUITAR[6] = "[F#2,A2,A3,D4,A4]"; // c.57 (V1: [D3,A3,D4,A4])
VERSE2_GUITAR[7] = "[F#2,A2,C#4,F#4,A4,C#5]"; // c.58 (V1: [C#4,F#4,A4,C#5])

let verse2 = stack(
  // Piano
  piano(VERSE2_RIGHT, VERSE2_LEFT),
  // Guitar
  guitar(VERSE2_GUITAR),
  // Drums
  verseDrums,
);

// ═══════════════════════ Chorus 2 (c.67–81) ══════════════════════
/*
Quince compases: el C2 no cierra. Piano y guitarra son los del coro 1 hasta el
c.79; en el 80–81 cambia el piano (Gmaj13 · A7) y el A7 no resuelve en D: el
c.82 ya es el B2.
La batería es otra: bombo en el 1 y el 3 (en los tres tiempos del 76 al 80),
caja en el 2 y el 3, la pandereta entra en el c.72 y el hi-hat va cada dos compases.
*/

const CHORUS2_RIGHT = CHORUS_RIGHT.slice(0, 15);
CHORUS2_RIGHT[13] = "[~ [E4,D5] [F#4,D5]]"; // c.80 (C1: [~ [D4,B4] [D4,B4]])
CHORUS2_RIGHT[14] = "[~ [G4,C#5] [A4,E5]]"; // c.81 (C1: [~@2 [A4,C#5]@3 [A4,C#5]])

const CHORUS2_LEFT = CHORUS_LEFT.slice(0, 15);
CHORUS2_LEFT[13] = "[[G2,F#3] [E3,G3] [F#3,B3]]"; // c.80 (C1: [[G2,G3] G3 G3])
CHORUS2_LEFT[14] = "[[A2,E3] [C#3,E3] [C#3,E3]]"; // c.81 (C1: [[A2,G3]@2 G3@3 G3])

const CHORUS2_GUITAR = CHORUS_GUITAR.slice(0, 15);

let chorus2Drums = stack(
  // Bombo
  s("<[bd ~ bd]!3 ~ [bd ~ bd]!2 ~ [bd ~ bd]!2 [bd bd bd]!5 ~>").velocity(FUERTE),
  // Caja en el 2 y el 3, menos en el último compás
  s("<[~ sd sd]!14 ~>").velocity(FUERTE),
  // Toms en 70, 73 y 81
  s("<~!3 [lt mt ht] ~!2 [lt mt ht] ~!7 [lt mt ht]>").velocity(FUERTE),
  // Crash y abierto al entrar
  s("<[cr oh ~] ~!14>").velocity(FUERTE),
  // …y cerrado en el 3
  s("<[~ ~ hh] ~!14>").velocity(NORMAL),
  // Hi-hat suave cada dos compases, seguido al final
  s(`<
      ~ [~ oh hh] ~ [~ oh hh]
      ~ [~ oh hh] ~ [~ oh hh]
      ~ [~ oh hh] ~ [~ oh hh]
      [~ oh hh]!3
    >`).velocity(SUAVE),
  // Pandereta desde el c.72
  s("<~!5 [tb tb ~]!2 [~ tb tb]!7 ~>").velocity(NORMAL),
  // Ghosty: cencerro en el 1
  s("[cb ~ ~]").velocity(SUAVE),
  // Ghosty: shaker cada dos compases
  s("<~ [sh ~ ~]>").velocity(SUAVE),
).bank("AkaiLinn");

let chorus2 = stack(
  // Walts
  piano(CHORUS2_RIGHT, CHORUS2_LEFT),
  // Armonic guitar
  guitar(CHORUS2_GUITAR),
  // Drums
  chorus2Drums,
);

// ═══════════════════════ B2 (c.82–88) ══════════════════════
/*
La armadura pasa a un bemol. El c.82 pone E♭7 donde el coro habría cerrado en D,
con toda la batería a la vez; desde el 83 la batería calla y quedan piano y
guitarra. La guitarra deja el rasgueo y toca línea. 87 y 88 no tienen cifrado.
*/

const B2_RIGHT = [
  "[Bb4,Eb5]", // c.82 E♭7
  "[[F4,D5]@2 ~]", // c.83 B♭
  "[G4@2 ~]", // c.84 Gm
  "[C5 [E5,C6] F5]", // c.85 Am
  "G5", // c.86 Csus4
  "[B4@4 A4 C5]", // c.87 (sin cifrado)
  "[Bb4@2 ~]", // c.88 (sin cifrado)
];

const B2_LEFT = [
  "[[Eb2,Db3]@3 Eb3 Bb3 G3]", // c.82 E♭7
  "[Bb2,F3]", // c.83 B♭
  "[[G2,D3]@2 ~]", // c.84 Gm
  "[[A2,E3]@2 ~]", // c.85 Am
  "[[C3,F3]@2 ~]", // c.86 Csus4
  "[[G2,G3]@2 ~]", // c.87 (sin cifrado)
  "[[C3,G3]@2 ~]", // c.88 (sin cifrado)
];

const B2_GUITAR = [
  "~", // c.82 E♭7
  "[[F4,D5]@4 Bb4 D5]", // c.83 B♭
  "[~@2 F5@2 G5 Bb5]", // c.84 Gm
  "[[A4,E5,A5]@4 G5 F5]", // c.85 Am — el F5 se liga al 86
  "[~@2 Bb4 D5 E5 F5]", // c.86 Csus4 — el F5 se liga al 87
  "[[D4,B4]@2 A4 [F4,C5]@3]", // c.87 (sin cifrado)
  "[[C4,E4,C5,G5] ~@2]", // c.88 (sin cifrado)
];

let b2Drums = stack(
  // Todo en el c.82: bombo en los tres tiempos
  s("<[bd bd bd] ~!6>").velocity(FUERTE),
  // Toms
  s("<[~ mt ht] ~!6>").velocity(FUERTE),
  // Crash y abierto
  s("<[cr oh ~] ~!6>").velocity(FUERTE),
  // Cerrado
  s("<[~ ~ hh] ~!6>").velocity(NORMAL),
  // Pandereta
  s("<[~ tb tb] ~!6>").velocity(NORMAL),
  // Palmas
  s("<[~ cp [cp cp]] ~!6>").velocity(NORMAL),
  // Cencerro
  s("<[~ cb ~] ~!6>").velocity(NORMAL),
  // Cencerro suave
  s("<[~ ~ cb] ~!6>").velocity(SUAVE),
  // Shaker
  s("<[~ sh ~] ~!6>").velocity(NORMAL),
  // Shaker suave
  s("<[[~ sh] ~ ~] ~!6>").velocity(SUAVE),
).bank("AkaiLinn");

let b2 = stack(
  // Piano
  piano(B2_RIGHT, B2_LEFT),
  // Guitar
  guitar(B2_GUITAR),
  // Drums
  b2Drums,
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
  [15, chorus2],
  // B2
  [7, b2],
  // c.89–109 están vacíos en la partitura
);
