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
  // chorusGuitar,
  // Drums
  // chorusDrums,
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
