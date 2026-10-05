// ════════════════════════════════════════════════════════════════
// Sesión 6 · Textura: suelo, motor, colchón, línea y luz
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §9
// 40 min
//
// Objetivo  cinco capas, cada una con un trabajo y un registro.
// Hecho     no hay dos capas haciendo el mismo trabajo en el mismo registro.
//
// Cómo      primero la tabla, después el código, una capa a la vez.
// ════════════════════════════════════════════════════════════════

setcpm(66 / 4)

const PROG = "<D^7 G^7>"                 // ← tu progresión

// ── PASO 1 · La tabla ───────────────────────────────────────────
// Un solo instrumento por fila. Usa lo que decidiste en las sesiones 0–5.
/*
capa       registro      instrumento        de la sesión
SUELO      grave         ____               0 (caja) · 3 (bajo)
MOTOR      medio-grave   ____               1 (latido) · 3 (arpegio)
COLCHÓN    medio         ____               1 (órgano) · 2
LÍNEA      medio-agudo   ____               3 (slide) · 4 (voz)
LUZ        agudo         ____               esta sesión
*/

// ── PASO 2 · El suelo ───────────────────────────────────────────

const suelo = stack(
  s("[bd ~ ~ ~] ~ [bd ~ ~ bd] ~").bank("KorgMinipops"),   // ← tu preset
  chord(PROG).rootNotes(2).s("sawtooth").lpf(300).gain(.7),  // ← tu bajo
)

suelo

// ── PASO 3 · Suma una capa cada 8 compases ──────────────────────
// Descomenta de a una y escucha 8 compases antes de la siguiente.
// Cada capa con la distancia que decidiste en la sesión 5.

// const colchon = ____
// const motor   = ____
// const linea   = ____
// stack(suelo, colchon)
// stack(suelo, colchon, motor)
// stack(suelo, colchon, motor, linea)

// ── PASO 4 · La luz y el aire ───────────────────────────────────
// Unas pocas notas de campana que aparecen al azar, y un ruido de afuera muy bajo.
// Sonidos: vibraphone · glockenspiel · gm_celesta · gm_music_box · gm_guitar_harmonics
// Aire: wind · insect · crow · gm_seashore · oceandrum

// const luz = n("____").scale("____").degradeBy(____)
//   .s("____").gain(.35).room(.9).orbit(2)
// const aire = s("____").lpf(1200).gain(.15).orbit(2)
// stack(suelo, colchon, motor, linea, luz, aire)

// ── PASO 5 · Quitar ─────────────────────────────────────────────
// Con todo sonando, quita una capa cada vez (coméntala). Para cada una:
//   ¿se nota que falta?  suelo ____ · motor ____ · colchón ____ · línea ____ · luz ____
// La que no se nota, sobra. Quítala de verdad.

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · mi textura final es ____ capas: ____
//            y la capa que guardo para la coda (sesión 7) es ____
// HECHO cuando cada capa se nota al quitarla.
