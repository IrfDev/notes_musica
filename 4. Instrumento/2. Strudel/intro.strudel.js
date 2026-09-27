const BPM = 72;
const PASOS = 5;
const NOTAS = 10;
const DIRECTION = "down";

setcpm(BPM);

// Aquí, los pasos se definene por el numero de pasos per sé y cuantas notas por paso
const pasos = run(PASOS).mod(NOTAS);

// irand nos da cosas random y después segment las segmenta por nota
const random = irand(NOTAS).segment(PASOS);
// Pasos iniciales: "1 0 3 2 3 1 2"

// Palindrome toma un run y lo hace para arriba y abajo
const updown = pasos.palindrome();
const reverse = pasos.rev();

const indices = {
  up: pasos,
  down: reverse,
  updown: updown,
  random,
}[DIRECTION];

n(indices)
  .chord("C")
  .anchor("c3")
  .mode("above")
  .voicing()
  .s("piano")
  .velocity(rand.range(1, 6))
  .lpf(100)
  .lpq(1)
  .hpf(1)
  .lpenv(4);
