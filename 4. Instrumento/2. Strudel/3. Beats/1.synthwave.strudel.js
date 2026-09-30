const BPM = 100;
setcpm(BPM / 4); // 1 ciclo = 1 compás de 4/4

const acordes = "<Eb^7 Cm7 Ab^7 Bb7sus>";

stack(
  // ── Batería: LinnDrum, puro 80s ──
  stack(
    s("bd*4"), // kick en los 4 tiempos
    s("~ sd ~ sd").room(0.6).roomsize(4), // caja con reverb grande
    s("hh*16").velocity("[.6 .25 .4 .25]*4"), // hi-hat en semicorcheas
  ).bank("LinnDrum"),

  // ── Bajo: corcheas saltando de octava ──
  note("<[a0 a1]*4 [f1 f2]*4 [c2 c3]*4 [g3 g4]*4>").s("sawtooth").lpf(600),

  // ── Arpegio: sube y baja por el acorde en semicorcheas ──
  n("[0 1 2 3 4 3 2 1]*2")
    .chord(acordes)
    .anchor("a3")
    .mode("above")
    .voicing()
    .s("sawtooth")
    .lpf(2500)
    .delay(0.3)
    .room(0.4)
    .gain(0.5),

  // ── Pad: el acorde entero, de fondo ──
  chord(acordes)
    .anchor("c5")
    .voicing()
    .s("supersaw")
    .lpf(1500)
    .room(0.7)
    .gain(0.25),
);
