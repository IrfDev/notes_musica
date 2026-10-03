// ════════════════════════════════════════════════════════════════
// Sesión 5 · Ganchos: stabs, empujón, piano, riff, arpegio
// Guía: 7. House/0. House desde cero.md  →  §7 y §8
// 45 min
//
// Objetivo  probar cinco ganchos y quedarte con UNO.
// Hecho     tienes un solo gancho y puedes tararearlo sin la máquina.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909"
setcpm(124 / 4)

const PROG = "<Am9 D9>"     // ← tu armonía de la sesión 4
const bateria = s("bd*4, ~ cp ~ cp, [~ oh]*4").bank(BANK)

// ── PASO 1 · La armonía, quieta ─────────────────────────────────

stack(bateria, chord(PROG).voicing().s("gm_epiano1").gain(.7))

// ── PASO 2 · Cuatro ritmos de stab, y uno tuyo ─────────────────
// Desde la rejilla (sin mirar el bloque de la guía), un compás de cada uno:
/*
                1 e & a 2 e & a 3 e & a 4 e & a
contratiempo    . . x . . . x . . . x . . . x .
charleston      x . . . . . x . . . . . . . . .
tresillo doble  x . . x . . x . x . . x . . x .
deep            . . . x . . x . . . . x . . x .
el mío          . . . . . . . . . . . . . . . .
*/

// stack(
//   bateria,
//   chord(PROG)
//     .struct(cat("____", "____", "____", "____", "____"))
//     .voicing().s("sawtooth").lpf(1800).decay(.15).sustain(0).gain(.4).room(.3),
// )

// ── PASO 3 · El empujón ─────────────────────────────────────────
// Tu ritmo de stab favorito, con la armonía adelantada una corchea.
// .early() va ANTES de .struct(): se adelanta la armonía, no el ritmo.
// ¿Hay un golpe en el "&" del 4? Si no, el empujón no se oye: añádelo.

// stack(
//   bateria,
//   chord(PROG).early(____).struct("____")
//     .voicing().s("piano"),
// )

// ── PASO 4 · Piano house ────────────────────────────────────────
// El ritmo 3+3+4+3+3 con pesos (@). Luego inventa otro reparto de 16:
// 4+3+3+3+3, 3+3+3+3+4…  ¿cuál baila más?

// stack(
//   bateria,
//   chord(PROG).struct("____").voicing().s("piano").gain(.9),
// )

// ── PASO 5 · Un riff de dos compases ────────────────────────────
// Pregunta y respuesta. Reglas:
//   · la pregunta termina FUERA de la tónica
//   · la respuesta termina EN la tónica (grado 0)
//   · grados de la escala, desde 0; la escala la eliges tú
// Primero en papel o en MuseScore, luego aquí.

// stack(
//   bateria,
//   n(cat(
//     "____",       // pregunta
//     "____",       // respuesta
//   ))
//     .scale("____")
//     .s("square").lpf(2500).decay(.2).sustain(0).gain(.5)
//     .delay(.3).delayfeedback(.4),
// )

// ── PASO 6 · Un arpegio sin raíz ────────────────────────────────
// Índices del voicing, de grave a agudo; el 0 es la raíz y no se toca.
// (El espacio en `.arp (` es a propósito: así el script de arpegiadores
//  no convierte esta lección en un preset de Sonar.)

// stack(
//   bateria,
//   chord(PROG).voicing()
//     .arp ("____")
//     .s("square").lpf(2200).decay(.12).sustain(0).gain(.4).delay(.25),
// )

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · mi gancho es ____ (stab / empujón / piano / riff / arpegio)
//            con sonido ____, y los otros cuatro se van.
// Escríbelo como constante para las sesiones 6 a 8:
// const gancho = ____
// HECHO cuando lo tarareas sin la máquina.
