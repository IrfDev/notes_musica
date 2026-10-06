setcpm(160 / 3);

const MODO = "D:major";
const RAIZ = "<0@2 4 5 3>";

let MAIN_VOICING = "[0,2,4,9]";
let MAIN_MELODY = "<[A4@0.5 G4@0.75 F#4@0.5 D4@0.75 F#4]@2 ~!3>";

let melody = note(MAIN_MELODY).sound("piano");

let transposedBass = RAIZ.sub(7);
let bassy = n(transposedBass).scale(MODO).mode("above").sound("piano");

let armonic = n(RAIZ.add(MAIN_VOICING))
  .scale(MODO)
  .struct("<~@2 [~ x@1.2 x]!3>")
  .sound("piano")
  .mode("above");

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
).bank("AkaiLinn");

let intro = stack(
  // Drums
  drums,
  // Melodic
  melody,
  // Piano doing the cun pa pa
  chumPamPam,
  // guitar,
);

let LONG_CHORDS = "<D^7 F#m C#o A@0.5 A7@0.5>";
let pianoVerseVoicing =
  "<[0,2,9,11,13] [0,2,4,9]!2 [0,2,4,9]@0.5 [0,2,9,11,13]@0.5>";
let firstVerseArmonyPiano = chord(LONG_CHORDS)
  .voicing()
  .arp(pianoVerseVoicing)
  .anchor("D2")
  .mode("above")
  .sound("piano")
  .pianoroll({ labels: 3, cycles: 2, vertical: 0 });

let guitarBass = n("[0,2]".sub(7));
let guitarMid = n("[4, 7]".sub(7));
let guitarHigh = n("[0, 4]".add(7));
let guitarStruct = "<[~ x x]>";

let guitar = stack(
  guitarBass.chord(LONG_CHORDS).voicing().struct(guitarStruct),
  guitarMid
    .chord(LONG_CHORDS)
    .voicing()
    .struct(guitarStruct)
    .late(rand.range(0.01, 0.02)),
  guitarHigh
    .chord(LONG_CHORDS)
    .voicing()
    .struct(guitarStruct)
    .late(rand.range(0.03, 0.04)),
).sound("gm_acoustic_guitar_nylon");

let verse = stack(
  //Piano
  firstVerseArmonyPiano,
  // Melodic Guitar
  guitar,
);

arrange(
  // Intro
  [10, intro],
  // Verse
  [10, verse],
);
