// ════════════════════════════════════════════════════════════════
// Sesión 1 · El órgano: colchón y latido
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §3
// 30–40 min
//
// Objetivo  un órgano que tiembla sin marear, y decidir qué trabajo hace.
// Hecho     el órgano tiembla como uno viejo y no te mareas en 16 compases.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// Recuerda  el vibrato funciona en sintes y samples (organ_full, square…),
//           no está garantizado en los gm_*.
// ════════════════════════════════════════════════════════════════

setcpm(70 / 4)

const PROG = "<D^7 G^7>"          // ← cámbiala por la tuya cuando quieras
const caja = s("bd ~ ~ ~, ~ ~ sd ~").bank("KorgMinipops")

// ── PASO 1 · El colchón, quieto ─────────────────────────────────

chord(PROG).voicing().s("organ_full").attack(.15).release(.8).gain(.6)

// ── PASO 2 · La escalera de vibrato ─────────────────────────────
// Cuatro profundidades, una por compás. La última es la de serie (.5).
// ¿Cuál suena a órgano viejo? ¿Cuál a barco?

// chord(PROG).voicing().s("organ_full").attack(.15).release(.8).gain(.6)
//   .vib(5).vibmod("<.03 .08 .15 .5>")

// DECISIÓN · mi vibmod es ____ y mi vib es ____ Hz

// ── PASO 3 · Más trémolo ────────────────────────────────────────
// El volumen también tiembla. Prueba tremolodepth de .1 a .6.

// chord(PROG).voicing().s("organ_full").gain(.6)
//   .vib(____).vibmod(____)
//   .tremolo(____).tremolodepth(____)

// ── PASO 4 · El latido ──────────────────────────────────────────
// El acorde repetido en corcheas, con el tiempo más fuerte que el "&".
// Escríbelo primero en 4/4 (8 golpes) y después en 12/8 (12 golpes, de tres en tres).

// stack(
//   caja,
//   chord(PROG).voicing()
//     .struct("____")
//     .velocity("[____]*4")
//     .s("organ_8inch").decay(.25).sustain(.3)
//     .vib(5).vibmod(.06),
// )

// Ahora quita la caja. ¿El latido sostiene el pulso solo? ____

// ── PASO 5 · Cinco teclados baratos ─────────────────────────────
// Dos compases cada uno. Para cada uno, una palabra.
// organ_full · pipeorgan_quiet · gm_reed_organ · square (con lpf y vib) · gm_synth_strings_2 · piano1

// const acordes = chord(PROG).voicing().attack(.1).release(1)
// arrange(
//   [2, acordes.s("____")],          // ____
//   [2, acordes.s("____")],          // ____
//   [2, acordes.s("____")],          // ____
//   [2, acordes.s("____")],          // ____
//   [2, acordes.s("____")],          // ____
// )

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · mi órgano es ____, hace de ____ (colchón / latido),
//            con vib ____ y vibmod ____
// HECHO cuando lo escuchas 16 compases y suena viejo, no mareado.
