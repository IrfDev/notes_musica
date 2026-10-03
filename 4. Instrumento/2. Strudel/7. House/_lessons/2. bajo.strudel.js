// ════════════════════════════════════════════════════════════════
// Sesión 2 · El bajo
// Guía: 7. House/0. House desde cero.md  →  §4
// 40 min
//
// Objetivo  tres bajos sobre el mismo kick: contratiempo, octavas, sincopado.
// Hecho     solo kick y bajo, 16 compases, y ya hay track.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
//           La tonalidad y las raíces las eliges tú: escríbelas una vez aquí.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909"
setcpm(124 / 4)

const kick = s("bd*4").bank(BANK)
const arriba = s("~ cp ~ cp, [~ oh]*4").bank(BANK)

// MIS RAÍCES · una por compás, en octava 2 (p. ej. a2, f2…)
// const RAICES = "<____ ____ ____ ____>"

// ── PASO 1 · El kick solo ───────────────────────────────────────
// Escucha dónde están los huecos: ahí va a vivir el bajo.

stack(kick, arriba)

// ── PASO 2 · En contratiempo ────────────────────────────────────
// Tus raíces, tocadas en cada "&". El kick y el bajo nunca coinciden.
// .decay corto: que la nota se apague antes del kick siguiente.

// stack(
//   kick, arriba,
//   note(RAICES).struct("____")
//     .s("sawtooth").lpf(400).decay(____).sustain(0),
// )

// ── PASO 3 · De octavas ─────────────────────────────────────────
// Corcheas: abajo en el tiempo, una octava arriba en el "&".
// Ojo: note("a2").add(12) NO transpone. Usa .transpose().

// stack(
//   kick, arriba,
//   note(RAICES).struct("x*8").transpose("____")
//     .s("sawtooth").lpf(700).decay(.15).sustain(0),
// )

// ── PASO 4 · Sincopado ──────────────────────────────────────────
// Escribe primero la rejilla con letras de nota. Reglas:
//   · nunca en un paso donde hay kick (0, 4, 8, 12)
//   · al menos una nota en una "a" (3, 7, 11, 15) que empuje al tiempo siguiente
/*
        1 e & a 2 e & a 3 e & a 4 e & a
kick    x . . . x . . . x . . . x . . .
bajo    . . . . . . . . . . . . . . . .
*/

// stack(
//   kick, arriba,
//   note("[____] [____] [____] [____]")
//     .s("sawtooth").lpf(500).decay(.15).sustain(0),
// )

// ── PASO 5 · El sonido ──────────────────────────────────────────
// Tu línea del PASO 4 pasando por cinco sonidos, dos compases cada uno.
// sawtooth · square · gm_synth_bass_1 · gm_drawbar_organ · gm_electric_bass_finger

// const linea = note("____")
// stack(
//   kick,
//   arrange(
//     [2, linea.s("____")],
//     [2, linea.s("____")],
//     [2, linea.s("____")],
//     [2, linea.s("____")],
//     [2, linea.s("____")],
//   ),
// )

// DECISIÓN · mi bajo es ____ (contratiempo / octavas / sincopado), con sonido ____,
//            y se ____ (turna / abraza) con el kick

// ── PASO 6 · Cuerpo y sub ───────────────────────────────────────
// Tu bajo elegido, dos capas: sierra para el cuerpo y seno una octava abajo.
// Escúchalo con audífonos y comenta el sub para notar lo que falta.

// const elegido = note(RAICES).struct("____")
// stack(
//   kick,
//   elegido.s("sawtooth").lpf(600).decay(.2).sustain(0).gain(.6),
//   elegido.transpose(____).s("sine").decay(.25).sustain(0),
// )

// ── CIERRE · La prueba ──────────────────────────────────────────
// Solo kick y tu bajo, 16 compases, sin palmas ni hats.
// HECHO cuando no echas de menos nada más para mover la cabeza.
