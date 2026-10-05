// ════════════════════════════════════════════════════════════════
// Sesión 5 · El espacio
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §8
// 40 min
//
// Objetivo  poner cada capa a su distancia.
// Hecho     con los ojos cerrados puedes decir qué está cerca y qué lejos.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// Recuerda  la sala es del orbit: dos espacios distintos, dos orbits.
//           roomsize, roomfade, roomlp y roomdim: fíjalos, no los cambies en cada nota.
// ════════════════════════════════════════════════════════════════

setcpm(66 / 4)

const PROG = "<D^7 G^7>"                // ← tu progresión
const organo = chord(PROG).voicing().s("organ_full").vib(5).vibmod(.06).gain(.6)

// ── PASO 1 · Seco ───────────────────────────────────────────────

organo

// ── PASO 2 · Cuatro salas ───────────────────────────────────────
// Habitación, sala, catedral… y una tuya. Dos compases cada una.

// arrange(
//   [2, organo.room(____).roomsize(____)],
//   [2, organo.room(____).roomsize(____)],
//   [2, organo.room(____).roomsize(____).roomfade(____)],
//   [2, organo.room(____).roomsize(____).roomfade(____)],
// )

// ── PASO 3 · Una reverb oscura ──────────────────────────────────
// La misma catedral, con la cola cada vez más oscura. ¿Cuál ensucia menos?

// arrange(
//   [2, organo.room(.9).roomsize(10).roomfade(8)],
//   [2, organo.room(.9).roomsize(10).roomfade(8).roomlp(____).roomdim(____)],
//   [2, organo.room(.9).roomsize(10).roomfade(8).roomlp(____).roomdim(____)],
// )

// ── PASO 4 · Dos salas, dos orbits ──────────────────────────────
// La voz en una habitación (orbit 1), el órgano en una catedral (orbit 2).
// Después pon los dos en el mismo orbit y escucha qué se pierde.

// stack(
//   organo.room(.9).roomsize(10).roomfade(8).orbit(____),
//   note("<[a4 f#4] [e4 c#4@3]>").s("gm_voice_oohs").room(____).roomsize(____),
// )

// ── PASO 5 · La cinta ───────────────────────────────────────────
// Wow (vib lento y poquito), menos brillo, polvo. De a una herramienta.

// stack(
//   s("[bd ~ ~ ~] ~ [bd ~ ~ bd] ~, ~ ~ sd ~, hh*8").bank("KorgMinipops")
//     .speed(____).velocity(.6),
//   chord(PROG).voicing().s("piano1").vib(____).vibmod(____),
// ).lpf(____).crush(____)

// ── PASO 6 · Las cuatro distancias ──────────────────────────────
// Primero la tabla, después el código: una capa en cada distancia.
/*
distancia   capa          room   roomsize   lpf    gain   orbit
cerca       ____          ____   ____       ____   ____   ____
medio       ____          ____   ____       ____   ____   ____
lejos       ____          ____   ____       ____   ____   ____
muy lejos   ____          ____   ____       ____   ____   ____
*/

// stack(
//   ____,
//   ____,
//   ____,
//   ____,
// )

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · mi sala principal es ____ (roomsize ____, roomfade ____),
//            y lo único que se queda seco es ____
// HECHO cuando con los ojos cerrados aciertas las cuatro distancias.
