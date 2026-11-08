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

setcpm(70 / 4);

const PROG = "<D^7 G^7>"; // ← cámbiala por la tuya cuando quieras
const caja = s("bd ~ ~ ~, ~ ~ sd ~").bank("KorgMinipops");

// ── PASO 1 · El colchón, quieto ─────────────────────────────────

// chord(PROG).voicing().s("organ_full").attack(0.15).release(0.8).gain(0.6);

// ── PASO 2 · La escalera de vibrato ─────────────────────────────
// Cuatro profundidades, una por compás. La última es la de serie (.5).
// ¿Cuál suena a órgano viejo? ¿Cuál a barco?
// 0.3 Y 0.8 SUENAN A barco flotando. 0.15 y 0.8 suenan a organo. 0.15 y 0.5 suenan a synth
// El organo tiene que vibrar o sentir que se está moviendo suave

// chord(PROG)
//   .voicing()
//   .s("organ_full")
//   .attack(0.15)
//   .release(0.8)
//   .gain(0.6)
//   // Vibrato, velocidad del vibrato (cada cuanto hace que)
//   .vib(5)
//   // el vibmod lo que hace es decir cuanto sube o baje
//   .vibmod(".08");

// DECISIÓN · mi vibmod es 0.8 y mi vib es 5 Hz

// ── PASO 3 · Más trémolo ────────────────────────────────────────
// El volumen también tiembla. Prueba tremolodepth de .1 a .6.

// El tremolo es demasiado potenete la verdad
// chord(PROG)
//   .voicing()
//   .s("organ_full")
//   .gain(0.6)
//   .vib(5)
//   .vibmod(0.8)
//   .tremolo("0.4")
//   .tremolodepth("0.1");

// ── PASO 4 · El latido ──────────────────────────────────────────
// En el dream pop el latido muchas veces se queda en lo que va flotando
// El acorde repetido en corcheas, con el tiempo más fuerte que el "&".
// Escríbelo primero en 4/4 (8 golpes) y después en 12/8 (12 golpes, de tres en tres).

// stack(
//   // caja,
//   chord(PROG)
//     .voicing()
//     .struct("x!8")
//     .velocity("[0.5 0.2]*6")
//     .s("organ_8inch")
//     .decay(0.25)
//     .sustain(0.3)
//     .vib(5)
//     .vibmod(0.06),
// );

// Ahora quita la caja. ¿El latido sostiene el pulso solo? si

// ── PASO 5 · Cinco teclados baratos ─────────────────────────────
// Dos compases cada uno. Para cada uno, una palabra.
// organ_full · pipeorgan_quiet · gm_reed_organ · square (con lpf y vib) · gm_synth_strings_2 · piano1

const acordes = chord(PROG).voicing().attack(0.1).release(1);
arrange(
  [2, acordes.s("organ_full")], // Barco viejo navegando
  [2, acordes.s("pipeorgan_quiet")], //
  [2, acordes.s("gm_reed_organ")], // Sueño extrañas
  [2, acordes.s("square")], // Triste y fuerte
  [2, acordes.s("gm_synth_strings_2")], // Sueño, flotante, lo que quieres llegar a ser
);

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · mi órgano es ____, hace de ____ (colchón / latido),
//            con vib ____ y vibmod ____
// HECHO cuando lo escuchas 16 compases y suena viejo, no mareado.
