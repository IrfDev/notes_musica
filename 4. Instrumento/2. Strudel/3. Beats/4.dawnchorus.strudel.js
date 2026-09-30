const BPM = 68;
setcpm(BPM / 4);

// Tu progresión, cc. 1–8. Bmb6 → Bm y Dsus2add13 → Dadd9 (Strudel no tiene esos dos)
const acordes = "<G^7 G6 D D7sus Bm Bm D7 Dadd9>";

stack(
  // ── El latido: el acorde repetido en corcheas, con un filtro que abre y cierra ──
  chord(acordes)
    .anchor("b4")
    .voicing()
    .struct("x*8")
    .s("sawtooth")
    .lpf(sine.range(500, 1800).slow(8)) // se abre y se cierra cada 8 compases
    .attack(0.01)
    .release(0.3)
    .velocity("[.6 .35]*4")
    .room(0.5)
    .gain(0.3),

  // ── Sub bajo: la raíz, larga ──
  note("<g1 g1 d2 d2 b1 b1 d2 d2>").s("sine").gain(0.9),

  // ── Niebla: el mismo acorde muy arriba, entrando lentísimo ──
  chord(acordes)
    .anchor("d6")
    .voicing()
    .s("sawtooth")
    .lpf(700)
    .attack(2)
    .release(4)
    .room(0.9)
    .gain(0.12),

  // ── Pájaros (el "dawn chorus"): notas sueltas, agudas, con eco ──
  n("<~ [~ 4] ~ [~ ~ 6 5]>")
    .scale("G5:major")
    .s("sine")
    .delay(0.7)
    .room(0.9)
    .gain(0.15),

  // ── Si quieres un corazón debajo, quita las // ──
  // s("bd ~ ~ ~").bank("RolandTR808").lpf(200).gain(0.6),
);
