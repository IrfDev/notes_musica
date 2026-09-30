const BPM = 76;
setcpm(BPM / 4);

const acordes = "<D^7 Bm7 G^7 A7sus>"; // ^7 = maj7 en Strudel

stack(
  // ── Batería: caja de ritmos vieja, con la caja muy lejos ──
  stack(
    s("bd ~ [~ bd] ~").lpf(900), // kick redondo, sin clic
    s("~ sd ~ sd").velocity(0.6).room(0.9).roomsize(8), // caja que se va lejos
    s("hh*8").velocity("[.4 .15]*4").hpf(5000), // hi-hats casi aire
  ).bank("RolandCompurhythm78"),

  // ── Bajo: una nota larga por compás ──
  note("<d2 b1 g1 a1>").s("triangle").lpf(400),

  // ── Pad: acordes que entran despacio ──
  chord(acordes)
    .anchor("d5")
    .voicing()
    .s("sawtooth")
    .lpf(900)
    .attack(0.6)
    .release(2)
    .room(0.8)
    .gain(0.3),

  // ── Arpegio lento con eco ──
  n("0 2 4 3 1 3 2 4")
    .chord(acordes)
    .anchor("d4")
    .mode("above")
    .voicing()
    .s("triangle")
    .delay(1)
    .room(1)
    .gain(0.4),
);
