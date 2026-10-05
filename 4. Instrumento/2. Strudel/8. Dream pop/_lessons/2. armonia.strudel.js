// ════════════════════════════════════════════════════════════════
// Sesión 2 · Armonía: luz difusa
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §4
// 40–45 min
//
// Objetivo  tres decisiones: un color, una sombra y un suelo.
// Hecho     tienes una progresión con su color, su préstamo y su bajo, y te gusta.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// Recuerda  D^7, no Dmaj7 (silencio). Nada de barras: G/D rompe el bloque.
//           Strudel escribe en bemoles: Gb = F#, Db = C#.
// ════════════════════════════════════════════════════════════════

setcpm(66 / 4)

const caja = s("bd ~ ~ ~, ~ ~ sd ~").bank("KorgMinipops")
const organo = x => x.voicing().s("organ_full").vib(5).vibmod(.06).gain(.6)

// MI TONALIDAD · ____ mayor. Mi I es ____, mi IV es ____, mi iv prestado es ____.

// ── PASO 1 · Un acorde ──────────────────────────────────────────

stack(caja, organo(chord("<D^7>")))

// ── PASO 2 · Una nota de color, sobre TU I ─────────────────────
// Triada, sexta, novena añadida, séptima mayor. Un compás cada uno.

// stack(caja, organo(chord("<____ ____ ____ ____>")))

// DECISIÓN · mi color es ____ (la nota que define mi sonido: 6.ª, 9.ª, 7.ª mayor)

// ── PASO 3 · La sombra ──────────────────────────────────────────
// I – IV – iv – I en tu tonalidad. ¿Qué nota baja medio tono del IV al iv? ____
// Después prueba ♭VI^7 y ♭VII en lugar del iv. ¿Cuál "recuerda" más?

// stack(caja, organo(chord("<____ ____ ____ ____>")))

// ── PASO 4 · La línea que baja por dentro ───────────────────────
// Un acorde que no cambia; una voz interior baja por semitonos: raíz, 7.ª mayor,
// 7.ª menor, 6.ª. Escribe las notas a mano (chord() elegiría otros voicings).

// note("<[____] [____] [____] [____]>")
//   .s("organ_full").vib(5).vibmod(.06).attack(.1).release(.8).room(.6)

// La versión menor: raíz menor, menor con 7.ª mayor, con 7.ª, con 6.ª.
// note("<[____] [____] [____] [____]>").s("organ_full").room(.6)

// ── PASO 5 · El suelo ───────────────────────────────────────────
// a · pedal: tu raíz en el bajo, los acordes cambiando encima
// b · bajo que baja: los acordes en una capa, el bajo por grados en otra

// stack(
//   organo(chord("<____>")),
//   note("____").s("sawtooth").lpf(300).gain(.8),                    // a · pedal
// )

// stack(
//   organo(chord("<____ ____ ____ ____ ____ ____ ____ ____>")),
//   note("<____ ____ ____ ____ ____ ____ ____ ____>")                 // b · baja por grados
//     .s("sawtooth").lpf(400).attack(.05).release(.5),
// )

// ── PASO 6 · Tu progresión y su ritmo armónico ──────────────────
// Elige una de la tabla de §4.5 (o una tuya) y llévala a tu tonalidad.
// Pruébala con un compás por acorde y con dos (!2).

// stack(caja, organo(chord("<____>")))

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · color ____ · sombra ____ (en el compás ____) · suelo ____
// Escríbela aquí para las sesiones siguientes:
// const PROG = "<____>"
// HECHO cuando suena 16 compases y no quieres cambiarle nada.
