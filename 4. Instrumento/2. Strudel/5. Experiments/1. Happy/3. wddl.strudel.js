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
