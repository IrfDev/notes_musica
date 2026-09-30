const BPM = 30;

setcpm(BPM);

const acordes = "<Eb^7 Cm7 Ab^7 Bb7sus>";

stack(
  stack(
    s("bd ~ bd ~"), // kick en 1 y 3
    s("~ sd ~ sd"), // caja en 2 y 4
    s("hh*8"), // hi-hat en corcheas
  ).bank("RolandTR909"),
  // // Batería: LinnDrum, puro 80s ──
  stack(
    s("bd ~ bd bd"), // kick en los 4 tiempos
    s("~ sd ~ sd").room(0.6).roomsize(4), // caja con reverb grande
    s("hh*4").velocity("[.4 2 .4 .25]*4"), // hi-hat en semicorcheas
  ).bank("LinnDrum"),

  note("<[a0 a1]*4 [f1 f2]*4 [c2 c3]*4 [g2 g3]*4>").s("piano").lpf(600),

  n("[0 1 2 3 4 3 2 1]*2")
    .chord(acordes)
    .anchor("a3")
    .mode("above")
    .voicing()
    .s("sawtooth")
    .lpf(2500)
    .delay(1)
    .room(0.4)
    .gain(0.5),

  chord(acordes)
    .anchor("c5")
    .voicing()
    .s("piano")
    .lpf(1500)
    .room(0.7)
    .gain(0.25),
);
