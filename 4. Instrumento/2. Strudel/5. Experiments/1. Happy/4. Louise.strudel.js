setcpm(180 / 3);

const MODO = "D:major";
const RAIZ = "<0@2 4 5 3>";

let CHORD_TYPES = {
  nor: "[0,2,4,9]",
  sus: "[0,1,4]",
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
  // Drums
  drums,
  // Melodic
  melody,
  // Armony
  armonic,
  // Bass
  bassy,
  // Guitar
  guitar,
).pianoroll({ labels: 2, cycles: 2, vertical: 0 });
