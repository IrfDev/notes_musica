setcpm(90 / 4);

let melody = note("<[A4@0.5 G4@0.75 F#4@0.5 D4@0.75 F#4]>").sound("piano1");

let armony = chord("D Aadd9 Bm G").voicing().sound("piano");

let bass = note("D2 A2 B2 G1").sound("gm_acoustic_bass");

stack(
  // Armony
  armony,
  // Melodic
  melody,
  // Bass
  bass,
).pianoroll({ labels: 2, cycles: 2, vertical: 0 });
