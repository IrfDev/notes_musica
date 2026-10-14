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
