setcpm(180 / 3);

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

let melody = note("<[A4@0.5 G4@0.75 F#4@0.5 D4@0.75 F#4]@2 ~!3>").sound(
  "piano",
);
let bassy = n(RAIZ.sub(7)).scale(MODO).mode("above").sound("piano");
let armonic = n(RAIZ.add(voicing).sub(0))
  .scale(MODO)
  .struct("<~@2 [~ x]!3>")
  .sound("piano")
  .mode("above");

let kick = s("<[~ ~ bd] [bd ~ ~] [~ ~ bd] ~>");

let box = s(
  "<[cr,oh] [[lt,tb] [tb,mt] ~] [~ [tb tb] ~]!2 [tb ~ [[lt,mt] [mt,ht]]]>",
);

let ghosty = s("<[[sh ~ ~ sh] ~ [~ sh] ~]>").velocity(0.1);

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
  bassy,
).pianoroll({ labels: 2, cycles: 2, vertical: 0 });
