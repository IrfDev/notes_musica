// ════════════════════════════════════════════════════════════════
// Sesión 0 · Four on the floor
// Guía: 7. House/0. House desde cero.md  →  §1 y §2
// 30–40 min
//
// Objetivo  el esqueleto del house, de memoria: por tiempos y por pasos.
// Hecho     escribes el pentagrama de §2 sin mirar la guía y suena igual.
//
// Cómo      solo un PASO activo a la vez. Para pasar al siguiente, comenta
//           el anterior y descomenta el nuevo. Llena cada ____ tú.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909";
setcpm(124 / 4); // 1 ciclo = 1 compás de 4/4

/*
paso    0 1 2 3   4 5 6 7   8 9 10 11   12 13 14 15
cuenta  1 e & a   2 e & a   3 e &  a    4  e  &  a
*/

// ── PASO 1 · El corazón ─────────────────────────────────────────
// Escucha 8 compases solo el kick. Cuéntalos en voz alta.
let chords = "<C Am F Fmaj7 Em7 G G7>";
$: s("bd*8").bank(BANK).swingBy(2, 8);
$: s("[hh hh hh oh]*4").bank(BANK);
$: s("[[~ sd ~ ~] [~ sd ~ sd] [~ sd sd ~] [~ sd]]").bank(BANK);
$: s(chords).sound("gm_lead_8_bass_lead").room(0.4).roomsize(2).lpf(300).hpf(5);
$: n("[0 3 1 2 3 1 2 1]".sub(7))
  .chord(chords)
  .voicing()
  .swingBy(2, 8)
  .room(0.5)
  .roomsize(9)
  .lpf(300)
  .hpf(3)
  .sound("gm_synth_strings_2");

// ── PASO 2 · Palmas y hat abierto, por tiempos ─────────────────
// Sin mirar la guía. La rejilla que tiene que sonar:
/*
        1 e & a 2 e & a 3 e & a 4 e & a
oh      . . x . . . x . . . x . . . x .
palmas  . . . . x . . . . . . . x . . .
kick    x . . . x . . . x . . . x . . .
*/

// stack(
//   s("bd*4"),
//   s("____"),        // palmas: 2 y 4
//   s("____"),        // hat abierto: los cuatro "&"
// ).bank(BANK)

// ── PASO 3 · Los cerrados, en una sola capa ─────────────────────
// Una capa con cerrado-cerrado-ABIERTO-cerrado por tiempo, y .cut(1)
// para que el cerrado corte la cola del abierto.
// Después, 16 valores de velocity: el "&" más fuerte que el resto.

// stack(
//   s("bd*4"),
//   s("~ cp ~ cp"),
//   s("[____]*4").cut(1)
//     .velocity("[____]*4"),
// ).bank(BANK)

// Quita el .cut(1) y escucha qué pasa con el abierto. Vuelve a ponerlo.

// ── PASO 4 · Lo mismo, por pasos ────────────────────────────────
// Reescribe el PASO 3 con .beat("posiciones", 16), contando desde 0.
// Tiene que sonar idéntico: compáralo alternando los dos.

// stack(
//   s("bd").beat("____", 16),
//   s("cp").beat("____", 16),
//   s("oh").beat("____", 16),
//   s("hh").beat("____", 16),
// ).bank(BANK).cut(1)

// ── PASO 5 · El backbeat ────────────────────────────────────────
// Un compás de cada uno: palmas, caja, las dos a la vez, aro.
// Prueba también variantes de sample: sd:3, sd:9, cp:2…

// stack(
//   s("bd*4"),
//   s(cat(
//     "____",          // palmas
//     "____",          // caja
//     "____",          // palmas y caja a la vez
//     "____",          // aro
//   )),
//   s("[~ oh]*4").velocity(.7),
// ).bank(BANK)

// DECISIÓN · mi backbeat es ____ porque ____

// ── PASO 6 · La frase de 8 ──────────────────────────────────────
// Crash solo en el compás 1 de cada 8, y en el compás 8 el kick calla
// en el último tiempo. Cuenta hasta 8 y escucha cómo pega el 1.

// stack(
//   s("<____>"),                                   // crash
//   s("bd*4").lastOf(8, x => x.mask("____")),      // el hueco
//   s("~ cp ~ cp"),
//   s("[hh hh oh hh]*4").cut(1),
// ).bank(BANK)

// ── CIERRE ──────────────────────────────────────────────────────
// Tapa todo esto, abre una línea en blanco y escribe el PASO 3 de memoria.
// HECHO cuando suena igual al primer intento.
