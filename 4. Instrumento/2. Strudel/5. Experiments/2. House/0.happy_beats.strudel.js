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
