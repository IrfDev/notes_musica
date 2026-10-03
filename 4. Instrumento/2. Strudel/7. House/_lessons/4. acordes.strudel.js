// ════════════════════════════════════════════════════════════════
// Sesión 4 · Acordes
// Guía: 7. House/0. House desde cero.md  →  §6
// 40–45 min
//
// Objetivo  elegir UN color y UN ritmo armónico.
// Hecho     puedes decir qué color tiene tu track y cuántos compases dura cada acorde.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// Recuerda  símbolos que suenan: m7 m9 m11 9 13 ^7 ^9 6 69 7sus add9
//           Fmaj7 y Am13 dan SILENCIO sin error: escribe F^7.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909"
setcpm(122 / 4)

const bateria = s("bd*4, ~ cp ~ cp, [~ oh]*4").bank(BANK)
const teclas = x => x.voicing().s("gm_epiano1").gain(.8)

// ── PASO 1 · Un acorde ──────────────────────────────────────────

stack(bateria, teclas(chord("<Am9>")))

// ── PASO 2 · La escalera de color, sobre TU raíz ────────────────
// Misma raíz, un compás cada uno: triada, m7, m9, m11.
// Escucha el m11: Strudel le quita la tercera. ¿Flota o se pierde?

// stack(bateria, teclas(chord("<____ ____ ____ ____>")))

// DECISIÓN · mi color es ____

// ── PASO 3 · El dórico ──────────────────────────────────────────
// i9 – IV9 sobre tu raíz. El IV está una cuarta justa arriba.
// Mi raíz es ____, así que mi IV9 es ____.
// Después, la versión natural: i9 – iv9 (el iv menor). ¿Cuál es más tuya?

// stack(bateria, teclas(chord("<____ ____>")))     // dórico
// stack(bateria, teclas(chord("<____ ____>")))     // natural

// ── PASO 4 · Una progresión ─────────────────────────────────────
// Elige UNA de las seis de §6.3 (o una tuya de 1. Teoría) y llévala a tu tonalidad.
// Escribe los grados primero: ____ – ____ – ____ – ____

// stack(bateria, teclas(chord("<____>")))

// ── PASO 5 · El ritmo armónico ──────────────────────────────────
// Tu progresión con tres duraciones. `!2` repite: "<Am9!2 D9!2>".
//   a · un compás por acorde
//   b · dos compases por acorde
//   c · desigual: uno se queda más (p. ej. !3 y !1)

// stack(bateria, teclas(chord("<____>")))          // a
// stack(bateria, teclas(chord("<____>")))          // b
// stack(bateria, teclas(chord("<____>")))          // c

// DECISIÓN · cada acorde dura ____ compases porque ____

// ── PASO 6 · Memoria de acorde ──────────────────────────────────
// Congela UNA forma (las notas de tu acorde favorito, entre corchetes con comas)
// y muévela entera con .transpose(). Prueba movimientos de -2, -4, +3, +5.
// Ojo con las quintas paralelas: aquí son el punto (§6.5).

// stack(
//   bateria,
//   note("[____]")
//     .transpose("<____ ____ ____ ____>")
//     .struct("[~ ~ x ~]*4")
//     .s("sawtooth").lpf(1600).decay(.18).sustain(0).gain(.35),
// )

// ── CIERRE ──────────────────────────────────────────────────────
// Escribe aquí tu armonía final, la que vas a usar en las sesiones 5 a 8:
// const PROG = "<____>"
// HECHO cuando suena 16 compases sobre la batería y no quieres cambiarle nada.
