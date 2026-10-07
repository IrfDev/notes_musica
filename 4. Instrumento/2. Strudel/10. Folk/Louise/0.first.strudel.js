setcpm(160 / 3);

const MODO = "D:major";
const INTRO_CHORDS = "<D@2 A Bm G>";
let MAIN_VOICING = "<[0,2,4,9]>";
let MAIN_MELODY = "<[A4@0.5 G4@0.75 F#4@0.5 D4@0.75 F#4]@2 ~!3>";

let diatonicVoicingByScale = (
  gradeVoicing,
  rootNoteIndex,
  chordsToUse,
  baseScale,
) =>
  n(gradeVoicing).anchor(chordsToUse.rootNotes(rootNoteIndex)).scale(baseScale);

let melody = note(MAIN_MELODY).sound("piano");

let bassy = chord(INTRO_CHORDS).rootNotes(2).sound("piano");

let armonic = diatonicVoicingByScale(MAIN_VOICING, 3, INTRO_CHORDS, MODO)
  .struct("<~@2 [~ x@1.2 x]!3>")
  .sound("piano");

// Piano
let chumPamPam = stack(
  // Left finger, one note coming from the transposed. There's no voicing, so it'll just play the first note
  bassy,
  // The armonic part is a custom voicing planned, that may be reused
  armonic,
);

let kick = s("<[~ ~ bd] [bd ~ ~] [~ ~ bd]!2 ~>");

let box = s(
  "<[cr,oh] [tb tb ~] [~ [[tb,lt,mt] [tb,mt,lt]] ~]!2 [tb ~ [[lt,mt] [mt,ht]]]>",
)
  .velocity(0.7)
  .swingBy(0.2, 6);

let ghosty = s("<[[sh ~ ~ sh] ~ [~ sh] ~]>").velocity(0.1);

let drums = stack(
  // Kick
  kick,
  // Box
  box,
  // Ghosty
  ghosty,
)
  .mask("<0 0 1!8>")
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

// So we have two patterns repeated twice
let VERSE_CHORDS = `<
  [D^7 F#m@0.75 F#m@0.25 C#o A@0.5 A7@0.5]!2
  [
    Bm
    G@0.75
    G6@0.25
    D6
    F#@0.5
    F#7@0.5
  ]!2
>/4`;

let pianoVerseVoicing = `<
  [
    [0,2,9,11,13]
    [0,2,4,11]@0.75
    [0,2,4,9]@0.25
    [0,2,4,9]
    [0,2,4,9]@0.5
    [0,2,9,11,13]@0.5
  ]!2
  [
    [0,2,9,11,13]
    [0,2,4,11]@0.75
    [0,2,4,5]@0.25
    [0,2,4,5]
    [0,2,4,9]@0.5
    [0,2,9,11,13]@0.5
  ]!2
  >/4`;

let firstVerseArmonyPiano = diatonicVoicingByScale(
  pianoVerseVoicing,
  3,
  VERSE_CHORDS,
  MODO,
).sound("piano");

let guitarStruct = `<
  [x@3]!4
  [~ x x]
  [x@3]
  [~ x x]
  [x@3]
>`;

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

let verse = stack(
  //Piano
  firstVerseArmonyPiano,
  // Melodic Guitar
  guitar,
);

const CHORUS_CHORDS = `<
  Em G F#m7 Bm
  Em G A7 D 
>`;
let CHORUS_VOICING = "<[0,2,4,9]!2 [0,2,6,9] [0,2,4,9]>";

let bassyChorus = chord(CHORUS_CHORDS).rootNotes(2).sound("piano");
let armonicChorus = diatonicVoicingByScale(
  CHORUS_VOICING,
  3,
  CHORUS_CHORDS,
  MODO,
)
  .struct("<[~ x x]!3 [~ x@2]>")
  .swingBy(1 / 3, 6)
  .sound("piano");

// Same chords as intro, but more waltzy
let chorus = stack(
  // Walts
  bassyChorus,
  // Armonic
  armonicChorus,
);

arrange(
  // Intro
  [10, intro],
  // // Verse
  [16, verse],
  // Chorus
  [8, chorus],
);
