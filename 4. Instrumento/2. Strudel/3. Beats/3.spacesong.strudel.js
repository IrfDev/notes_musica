const BPM = 74;
setcpm(BPM / 4);

const acordes = "<Eb^7 Cm7 Ab^7 Bb7sus>";

stack(
  // ── Batería: un preset que corre igual toda la canción ──
  stack(
    s("[bd ~ ~ ~] [~ ~ ~ ~] [bd ~ ~ bd] [~ ~ ~ ~]").lpf(800),
    s("~ sd ~ sd").velocity(0.5).room(0.95).roomsize(10),
    s("hh*8").velocity("[.3 .12]*4").hpf(6000),
  ).bank("RhythmAce"),

  // ── Bajo: la raíz, larga y redonda ──
  note("<eb2 c2 ab1 bb1>").s("sine").gain(0.8),

  // ── Órgano: acordes sostenidos con vibrato de cinta ──
  chord(acordes)
    .anchor("eb5")
    .voicing()
    .s("square")
    .lpf(1100)
    .attack(0.4)
    .release(2)
    .vib(4)
    .vibmod(0.08)
    .room(0.8)
    .gain(0.2),

  // ── La línea que baja: arpegio descendente con eco ──
  n("[4 3 2 1]*2")
    .chord(acordes)
    .anchor("eb4")
    .mode("above")
    .voicing()
    .s("triangle")
    .delay(0.6)
    .delayfeedback(0.6)
    .room(0.9)
    .gain(0.35),
);
