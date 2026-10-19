# El código de Strudel

> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario (Obsidian + git), el 2026-10-18. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.

Del esqueleto del vals al B2: el origen (happy_beats, wddl), el archivo con el que nació la forma (0.first), el puente, las transcripciones de la partitura y las propuestas de Claude para el B2 (4.ai_*).

Contiene:

- `4. Instrumento/2. Strudel/5. Experiments/2. House/0.happy_beats.strudel.js`
- `4. Instrumento/2. Strudel/5. Experiments/1. Happy/3. wddl.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/4. Louise.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/0.first.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/1.second_bridge.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/2.from_score.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/3.full_score.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/4.ai_1.b2_waltz.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/4.ai_2.b2_respiro.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/4.ai_3.b2_bb_score.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/4.ai_4.b2_resuelto.strudel.js`

---

## Archivo: `4. Instrumento/2. Strudel/5. Experiments/2. House/0.happy_beats.strudel.js`

```js
setcpm(120 / 4);

let melody = note("<[A4@0.5 G4 F#4@0.5 D4@0.75 F#4]>").sound(
  "gm_lead_8_bass_lead",
);

let armony = chord("G7");

stack(
  // Armony
  melody,
  // Melodic
  // melody,
).pianoroll({ labels: 2, cycles: 2, vertical: 0 });
```

---

## Archivo: `4. Instrumento/2. Strudel/5. Experiments/1. Happy/3. wddl.strudel.js`

```js
setcpm(120 / 3);

const MODO = "D:major";
const RAIZ = "<0@2 4 5 3>";

let CHORD_TYPES = {
  nor: "[0,2,4,7,9]",
  sus: "[0,1,4]",
  sus4: "[0,3,4]",
  add9: "[0,2,4,8]",
  add11: "[0,2,4,10]",
  add13: "[0,2,4,12]",
  ado8: "[0,2,4,7]",
};

const voicing = CHORD_TYPES.nor;

let piso = n(RAIZ.sub(7)).mode("above");
let motor = n(RAIZ.add(voicing).sub(0)).mode("above");

let melody = note("<[A4@0.5 G4@0.75 F#4@0.5 D4@0.75 F#4]!2 ~ ~ ~ ~>").sound(
  "piano",
);

let armony = chord("D Aadd9 Bm G").voicing().sound("piano");

let bass = note("D2 A2 B2 G1").sound("gm_acoustic_bass");

// let guitar = n("<[0 1 0 2]>")
//   .scale("<D:major C:major G:major>")
//   .anchor("D2")
//   .mode("below")
//   .sound("gm_acoustic_guitar_steel");

let bassy = piso.scale(MODO).sound("piano");
let guitar = motor.scale(MODO).struct("[~ x x]").sound("piano");

stack(
  // Armony
  // armony,
  // Melodic
  // melody,
  // Bass
  // bass,
  // Guiar
  guitar,
  bassy,
).pianoroll({ labels: 2, cycles: 2, vertical: 0 });
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/4. Louise.strudel.js`

```js
setcpm(160 / 3);

const MODO = "D:major";
const RAIZ = "<0@2 4 5 3>";

let CHORD_TYPES = {
  nor: "[0,2,4,9]",
  sus: "[0,1,4,9]",
  sus4: "[0,3,4]",
  add9: "[0,2,4,8]",
  add11: "[0,2,4,10]",
  add13: "[0,2,4,12]",
  ado8: "[0,2,4,7]",
};

const voicing = CHORD_TYPES.nor;

let melody = note("<[A4@0.5 G4@0.75 F#4@0.5 D4@0.75 F#4]@2 ~!3>").sound(
  "piano",
);
let bassy = n(RAIZ.sub(7)).scale(MODO).mode("above").sound("piano");
let armonic = n(RAIZ.add(voicing))
  .scale(MODO)
  .struct("<~@2 [~ x@1.2 x]!3>")
  .sound("piano")
  .mode("above");

let kick = s("<[~ ~ bd] [bd ~ ~] [~ ~ bd] ~>");

let box = s(
  "<[cr,oh] [[lt,tb] [tb,mt] ~] [~ [tb tb] ~]!2 [tb ~ [[lt,mt] [mt,ht]]]>",
).velocity(0.7);

let ghosty = s("<[[sh ~ ~ sh] ~ [~ sh] ~]>").velocity(0.1);

let guitarBass = n("[0,2]".sub(7));
let guitarMid = n("[4, 7]".sub(7));
let guitarHigh = n("[9, 11]");
let guitarStruct = "<~@2 [~ x@2]!3>";

let guitar = stack(
  guitarBass.scale(MODO).struct(guitarStruct),
  guitarMid.scale(MODO).struct(guitarStruct).late(rand.range(0.01, 0.013)),
  guitarHigh.scale(MODO).struct(guitarStruct).late(rand.range(0.013, 0.015)),
).sound("gm_acoustic_guitar_nylon");

let drums = stack(
  // Kick
  kick,
  // Box
  box,
  // Ghosty
  ghosty,
).bank("AkaiLinn");

stack(
  // // Drums
  // drums,
  // // Melodic
  // melody,
  // // Armony
  armonic,
  // Bass
  bassy,
  // Guitar
  // guitar,
).pianoroll({ labels: 2, cycles: 2, vertical: 0 });
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/0.first.strudel.js`

```js
setcpm(160 / 3);

const MODO = "D:major";
const INTRO_CHORDS = "<D@2 A Bm G D@2 A Bm G^7>";
let MAIN_VOICING = "<[0,2,4,9]!9 [0,2,4,6]>";
let MAIN_MELODY = "<[A4@0.5 G4@0.75 F#4@0.5 D4@0.75 F#4]@2 ~!3>";

let diatonicVoicingByScale = (
  gradeVoicing,
  rootNoteIndex,
  chordsToUse,
  baseScale,
) =>
  n(gradeVoicing).anchor(chordsToUse.rootNotes(rootNoteIndex)).scale(baseScale);

let melody = note(MAIN_MELODY).sound("piano");

// ═══════════════════════ Intro ══════════════════════

let bassy = chord(INTRO_CHORDS).rootNotes(2).sound("piano");
let armonic = diatonicVoicingByScale(MAIN_VOICING, 3, INTRO_CHORDS, MODO)
  .struct("<~@2 [~ x@1.5 x]!3>")
  .sound("piano");

// Piano
let chumPamPam = stack(
  // Left finger, one note coming from the transposed. There's no voicing, so it'll just play the first note
  bassy,
  // The armonic part is a custom voicing planned, that may be reused
  armonic,
);

// Drums
let kick = s(`<
    [~ bd bd]
    [bd ~ ~]
    [bd ~ ~]
    [bd ~@1.3 bd]
    ~
  >`);

let introTiming = s(`<
  ~
  [tb tb ~]
  [~ tb@1.4 tb]
  [~ tb@1.3 tb]
  [tb ~ ~]
>`);

let introFills = s(`<
  [cr ~ ~]
  ~
  ~
  ~
  [~ ~ [lt ht]]
>`);

let ghosty = s(`<
  ~
  [sh sh sh]
  [sh]
  [~ sh]
  [~ sh]
>`).velocity(0.1);

let drums = stack(
  // Kick
  kick,
  // Box
  introTiming,
  introFills,
  // Ghosty
  ghosty,
)
  .mask("<0 1!9>")
  .bank("AkaiLinn");

let intro = stack(
  // Drums
  drums,
  // Melodic
  melody,
  // Piano doing the cun pa pa
  chumPamPam,
  // guitar,
);

// ═══════════════════════ Verse ══════════════════════
/*
The verse is a combination of the guitar doing the chumpampam waltzy thing 
And long piano verses
*/

// So we have two patterns repeated twice
let VERSE_CHORDS = `<
    D^7
    F#m@0.75
    F#m@0.25
    C#o
    A@0.5
    A7@0.5

    Bm7
    G@0.75
    G6@0.25
    D6
    F#m@0.5
    F#m7@0.5 
>`;

// Per pattern we have specific voicings
// THe only change occours on the 2nd and 3rd compass with the 6th
let pianoVerseVoicing = `<
    [0,2,9,11,13]

    [0,2,4,11]@0.75
    [0,2,4,9]@0.25

    [0,2,4,9]

    [0,2,4,9]@0.5 
    [0,2,9,11,13]@0.5
  


    [0,2,9,11,13]

    [0,2,4,11]@0.75
    [0,2,4,5]@0.25

    [0,2,4,5]

    [0,2,4,9]@0.5
    [0,2,9,11,13]@0.5
  >`;

// Voiced chords long playing
let firstVerseArmonyPiano = diatonicVoicingByScale(
  pianoVerseVoicing,
  3,
  VERSE_CHORDS,
  MODO,
).sound("piano");

// Guitar
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
// [~ x x]
// [x@3]

// Guitar divided by voices, creating voicings by scale
let guitar = stack(
  // Guitar bass
  diatonicVoicingByScale("[0,2]", 2, VERSE_CHORDS, MODO).struct(guitarStruct),
  // Guitar Mid
  diatonicVoicingByScale("<[0, 2]!4 [4,7]!4>", 3, VERSE_CHORDS, MODO)
    .struct(guitarStruct)
    .late(rand.range(0.01, 0.025)),
  // Guitar high
  diatonicVoicingByScale("<[0,4]!7 [2,4]>", 4, VERSE_CHORDS, MODO)
    .struct(guitarStruct)
    .late(rand.range(0.04, 0.06)),
).sound("gm_acoustic_guitar_nylon");

//Drums
let verseDrums = stack(
  //kick
  s("<[bd ~ ~]!7 ~>"),
  // Box: cr, oh, ht,lt,mt, tb, cp
  s("<[~ ~ tb]>").velocity(0.7),
  s("<[oh hh ~] ~!6 [mt lt ht]>"),
  // Ghosty:
  s("<[~ [cb,sh] sh]>").velocity(0.1),
).bank("AkaiLinn");

let verse = stack(
  //Piano
  firstVerseArmonyPiano,
  // Melodic Guitar
  guitar,
  // Drums
  verseDrums,
  note("<[g3 a3 b3] a4>").sound("gm_choir_aahs"),
);

// ═══════════════════════ Chorus ══════════════════════
/*
In the chorus, we'll leaving the piano doing the waltzy rythm 
And the guitar can do the long chords
*/
const CHORUS_CHORDS = `<
  Em G F#m7 Bm
  Em G A7 D 
>`;

let BASS_CHORUS_VOICING = `<
  [0]!8

  [0,7]!8
>`;

let CHORUS_VOICING = `< 
  [
    0!4
  ]!2

  [
    [0,4,9]!2
    [0,6,9]
    [0,4,9]
  ]!2
>/4`;

let bassyChorus = diatonicVoicingByScale(
  BASS_CHORUS_VOICING,
  2,
  CHORUS_CHORDS,
  MODO,
)
  .struct(
    `<
      [x ~ ~]!4
    >`,
  )
  .sound("piano");

let armonicChorus = diatonicVoicingByScale(
  CHORUS_VOICING,
  3,
  CHORUS_CHORDS,
  MODO,
)
  .struct(
    `<
      [~ x x]!3
      [x@3]
    >`,
  )
  .swingBy(1 / 3, 6)
  .sound("piano");

let chumPamPamPiano = stack(
  // bassy
  bassyChorus,
  // Armonic
  armonicChorus,
);

// Guitar
let CHORUS_GUITAR_STRUCT = `<[x@3]!3 [~ x x]>`;

// Guitar divided by voices, creating voicings by scale
let chorusGuitar = stack(
  // Guitar bass
  diatonicVoicingByScale("[0,2]", 2, CHORUS_CHORDS, MODO).struct(
    CHORUS_GUITAR_STRUCT,
  ),
  // Guitar Mid
  diatonicVoicingByScale("<[0, 2]!4 [4,7]!4>", 3, CHORUS_CHORDS, MODO)
    .struct(CHORUS_GUITAR_STRUCT)
    .late(rand.range(0.01, 0.025)),
  // Guitar high
  diatonicVoicingByScale("<[0,4]!7 [2,4]>", 4, CHORUS_CHORDS, MODO)
    .struct(CHORUS_GUITAR_STRUCT)
    .late(rand.range(0.04, 0.06)),
).sound("gm_acoustic_guitar_nylon");

//Drums
let chorusDrums = stack(
  //kick
  s("<[bd ~ bd]!3 ~>"),
  // Box: cr, oh, ht,lt,mt, tb, cp
  s("<[~ tb tb]>").velocity(0.7),
  //Fills
  s("<~!3 [lt mt ht]>"),
  s("<[cr hh oh] ~!15>"),
  // Ghosty:
  s("<[cb ~] [[cb,sh] oh hh]>").velocity(0.4),
).bank("AkaiLinn");

// Same chords as intro, but more waltzy
let chorus = stack(
  // Walts
  chumPamPamPiano,
  // Armonic guitar
  chorusGuitar,
  // Drums
  chorusDrums,
);

// ═══════════════════════ Bridge ══════════════════════
/*
How about repeating the intro?
*/

let bridge = stack();

arrange(
  // Intro
  // [10, intro],
  // // Verse
  // [16, verse],
  // Chorus
  [16, chorus],
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/1.second_bridge.strudel.js`

```js
setcpm(160 / 3);

const MODO = "D:major";

let diatonicVoicingByScale = (
  gradeVoicing,
  rootNoteIndex,
  chordsToUse,
  baseScale,
) =>
  n(gradeVoicing).anchor(chordsToUse.rootNotes(rootNoteIndex)).scale(baseScale);

// ═══════════════════════ Chorus ══════════════════════
/*
In the chorus, we'll leaving the piano doing the waltzy rythm 
And the guitar can do the long chords
*/
const CHORUS_CHORDS = `<
  Em G F#m7 Bm
  Em G A7 D 
>`;

let BASS_CHORUS_VOICING = `<
  [0]!8

  [0,7]!8
>`;

let CHORUS_VOICING = `< 
  [
    0!4
  ]!2

  [
    [0,4,9]!2
    [0,6,9]
    [0,4,9]
  ]!2
>/4`;

let bassyChorus = diatonicVoicingByScale(
  BASS_CHORUS_VOICING,
  2,
  CHORUS_CHORDS,
  MODO,
)
  .struct(
    `<
      [x ~ ~]!4
    >`,
  )
  .sound("piano");

let armonicChorus = diatonicVoicingByScale(
  CHORUS_VOICING,
  3,
  CHORUS_CHORDS,
  MODO,
)
  .struct(
    `<
      [~ x x]!3
      [x@3]
    >`,
  )
  .swingBy(1 / 3, 6)
  .sound("piano");

let chumPamPamPiano = stack(
  // bassy
  bassyChorus,
  // Armonic
  armonicChorus,
);

// Guitar
let CHORUS_GUITAR_STRUCT = `<[x@3]!3 [~ x x]>`;

// Guitar divided by voices, creating voicings by scale
let chorusGuitar = stack(
  // Guitar bass
  diatonicVoicingByScale("[0,2]", 2, CHORUS_CHORDS, MODO).struct(
    CHORUS_GUITAR_STRUCT,
  ),
  // Guitar Mid
  diatonicVoicingByScale("<[0, 2]!4 [4,7]!4>", 3, CHORUS_CHORDS, MODO)
    .struct(CHORUS_GUITAR_STRUCT)
    .late(rand.range(0.01, 0.025)),
  // Guitar high
  diatonicVoicingByScale("<[0,4]!7 [2,4]>", 4, CHORUS_CHORDS, MODO)
    .struct(CHORUS_GUITAR_STRUCT)
    .late(rand.range(0.04, 0.06)),
).sound("gm_acoustic_guitar_nylon");

//Drums
let chorusDrums = stack(
  //kick
  s("<[bd ~ ~]!3 ~>"),
  // Box: cr, oh, ht,lt,mt, tb, cp
  s("<[~ sd sd]>").velocity(0.6),
  //Fills
  s("<~!3 tb>"),
  s("<[hh oh ~] ~!15>"),
  // Ghosty:
  s("<[sh ~]>").velocity(0.3),
).bank("AkaiLinn");

// Same chords as intro, but more waltzy
let chorus = stack(
  // Walts
  chumPamPamPiano,
  // Armonic guitar
  chorusGuitar,
  // Drums
  chorusDrums,
);

// ═══════════════════════ Bridge ══════════════════════
/*
How about repeating the intro?
*/

let bridge = stack();

arrange(
  // Intro
  // [10, intro],
  // // Verse
  // [16, verse],
  // Chorus
  [16, chorus],
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/2.from_score.strudel.js`

```js
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
  s(
    "<~ [bd ~ ~] [bd ~ ~] [bd ~ bd] ~ [~ bd bd] [bd ~ ~] [bd ~ ~] [bd ~ bd] ~>",
  ),
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

let bridge = stack(note(cat(...BRIDGE_RIGHT)), note(cat(...BRIDGE_LEFT))).sound(
  "piano",
);

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

stack(
  //RH
  n("<[]>"),
  // lh
  n("<[]>"),
).sound("piano");

// arrange(
//   // Intro
//   [10, intro],
//   // Verse
//   [16, verse],
//   // Chorus
//   [16, chorus],
//   // Bridge
//   [8, bridge],
//   // Verse 2
//   [16, verse2],
//   // Chorus 2
//   [16, chorus2],
//   // c.83–108 (B2, C3, outro) están vacíos en la partitura
// );
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/3.full_score.strudel.js`

```js
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
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/4.ai_1.b2_waltz.strudel.js`

```js
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
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/4.ai_2.b2_respiro.strudel.js`

```js
setcpm(160 / 3);

/*
Louise, B2 con respiro: segunda propuesta para revisar (Claude, 2026-10-18).
No toca la partitura ni los otros archivos. 4.ai_1.b2_waltz queda para comparar.

Toca el cierre del coro 2 (c.75–81, tal como está en la partitura), el B2
(c.82–90) y el primer compás del C3 (c.91, Em). Sin batería, a propósito.

Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con su
número y su cifrado. La guitarra va en altura real (suena así).

Qué cambia respecto a 4.ai_1.b2_waltz:

- c.82–83 respiran, como en la partitura. El c.82 es tu E♭7 tal cual
  (acorde largo y el arpegio de corcheas al final). El c.83 repite el gesto
  sobre B♭: acorde largo, en estado fundamental, y un arpegio que lleva al vals.
  La guitarra calla en los dos.
- El vals entra en el c.84, después del B♭, y con él entra la guitarra.
- La guitarra ya no arpegia: toca una línea hecha de la cabeza del motivo
  (La–Sol–Fa♯), con su ritmo de la intro, y la sube por grados:
    c.84 Re–Do–Si♭ · c.85 Mi–Re–Do · c.86 responde subiendo en corcheas
    · c.87 escala hasta el La que adelanta el A7 · c.88 rasgueo
    · c.89–90 el motivo entero, en menor y luego en mayor.
  Las notas de paso (el Do sobre Gm, el Re sobre C) caen en las notas largas.

Lo que se queda igual que en 4.ai_1.b2_waltz, del c.84 al 91:

- Armonía: E♭7 · B♭ · Gm · C · Am · B♭ (C/B♭ en el 3) · A7 · Dm · D (D♯° en el 3) → Em.
- La voz de arriba del piano sube hasta el Mi6 del c.88, sobre el A7.
- El bajo baja de Re2 y engorda: nota sola, quinta, quinta y octava.
  El Si♭→La del bajo (c.87→88) es tu ♭6→5.
- Sin unísonos ni semitonos entre la guitarra y el piano.
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
Dos compases de respiro (E♭7 y B♭, acordes largos, piano solo) y siete de vals.
La guitarra entra con el vals y sube con la cabeza del motivo hasta el pico
del c.88; del pico se baja por Dm y D, con el motivo entero, hasta el Em del C3.
*/

const B2_RIGHT = [
  "[Bb4,Eb5]", // c.82 E♭7 — largo, como en la partitura
  "[F4,Bb4,D5]", // c.83 B♭ — largo
  "[~ [G4,Bb4,D5] [G4,Bb4,D5]]", // c.84 Gm — entra el vals
  "[~ [G4,C5,E5] [G4,C5,E5]]", // c.85 C
  "[~ [A4,C5,E5] [C5,E5,A5]]", // c.86 Am — en el 3 sube una inversión
  "[~ [Bb4,D5,F5] [E5,G5,C6]]", // c.87 B♭ · C/B♭ — se agacha y salta
  "[[E5,G5,C#6,E6] [E5,G5,C#6,E6] [E5,G5,C#6,E6]]", // c.88 A7 — el pico, en los tres tiempos
  "[~ [F5,A5,D6] [F5,A5,D6]]", // c.89 Dm — el Do♯ sube a Re, el Sol baja a Fa
  "[~ [F#5,A5,D6] [D#5,F#5,A5]]", // c.90 D · D♯°
];

const B2_LEFT = [
  "[[Eb2,Db3]@3 Eb3 Bb3 G3]", // c.82 E♭7 — tu arpegio de la partitura
  "[[Bb1,F2]@3 Bb2 D3 F3]", // c.83 B♭ — el mismo gesto, lleva al vals
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
  "~", // c.83 B♭ — calla
  "[D4 C4@2 Bb3]", // c.84 Gm — la cabeza del motivo, en Re–Do–Si♭
  "[E4 D4@2 C4]", // c.85 C — la misma, un grado arriba
  "[C4 D4 E4 G4@2 A4]", // c.86 Am — responde subiendo
  "[Bb3 C4 D4 F4 G4 A4]", // c.87 B♭ · C/B♭ — escala; el La adelanta el A7
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
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/4.ai_3.b2_bb_score.strudel.js`

```js
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
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/4.ai_4.b2_resuelto.strudel.js`

```js
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
```
