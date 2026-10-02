const BPM = 80;
const PASOS = 5;
const NOTAS = 10;
const DIRECTION = "down";

setcpm(BPM / 4);

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

const runs = n("0 1 2 3 0 1 2 3")
  .struct("x ~ x ~")
  .chord("C")
  .anchor("c3")
  .mode("above")
  .voicing()
  .s("gm_viola")
  .lpf(100)
  .lpq(0.5)
  .hpf(0.5)
  .lpenv(10)
  .swingBy(0.5)
  .velocity(rand.range(0.6, 0.5));

const second = n("0 3 2 1 0 2 1 3")
  .chord("Am7")
  .anchor("A2")
  .voicing()
  .s("sawtooth")
  .lpf(100)
  .lpq(0.5)
  .hpf(0.5)
  .lpenv(10)
  .velocity(rand.range(0.7, 0.7));

const kick = sound("bd ~ [bd ~ bd ~] ~").bank("LinnDrum");
const box = sound("~ sd ~ sd").velocity(0.2).bank("RolandD110");
const high = sound("hh*16");

stack(runs)._scope();
