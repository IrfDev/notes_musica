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

setcpm(66 / 4);

const caja = s("bd ~ ~ ~, ~ ~ sd ~").bank("KorgMinipops");
const organo = (x) => x.voicing().s("organ_full").vib(5).vibmod(0.06).gain(0.6);

// MI TONALIDAD · Bb mayor. Mi I es Bb, mi IV es Eb, mi iv prestado es Ebm.

// ── PASO 1 · Un acorde ──────────────────────────────────────────

// stack(caja, organo(chord("<D^7>")));

// ── PASO 2 · Una nota de color, sobre TU I ─────────────────────
// Triada, sexta, novena añadida, séptima mayor. Un compás cada uno.

// Add9 suena nostalgico y trsite
// con sexta suena con un poco de brillo, y esperanzador
// ^7 Le da la sensación de que algo está pasando, algo se redime

// stack(caja, organo(chord("<Bb Bbadd9 Bb6 Bb^7>")));

// DECISIÓN · mi color es Bbadd9 me gustó (la nota que define mi sonido: 6.ª, 9.ª, 7.ª mayor)

// ── PASO 3 · La sombra ──────────────────────────────────────────
// I – IV – iv – I en tu tonalidad. ¿Qué nota baja medio tono del IV al iv? 3era
// Eb = Eb - G - Bb
// Ebm = Eb - Gb - Bb
// Después prueba ♭VI^7 y ♭VII en lugar del iv. ¿Cuál "recuerda" más?

//bVI^7 Suena muy a cambio a otra cosa. Como que quiere irse, pero no sabe como
// El clásico acorde prestado del modo lidio. Se siente como Que algo bueno podría pasar
// iv: Es el que da la myor sensación de que algo recordamos
// stack(caja, organo(chord("<Bb Eb Ebm Bb>")));

// ── PASO 4 · La línea que baja por dentro ───────────────────────
// Un acorde que no cambia; una voz interior baja por semitonos: raíz, 7.ª mayor,
// 7.ª menor, 6.ª. Escribe las notas a mano (chord() elegiría otros voicings).

// note(
//   "<[Bb2, D2, D5, Bb4] [Bb2, D2, D5, A4] [Bb2, D2, D5, Ab4] [Bb2, D2, D5, G4]>",
// )
//   .s("triangle")
//   .vib(5)
//   .vibmod(0.06)
//   .attack(0.1)
//   .release(0.8)
//   .room(0.6);

// La versión menor: raíz menor, menor con 7.ª mayor, con 7.ª, con 6.ª.

// note(
//   "<[Bb, Db2, Db5, Bb4] [Bb, Db2, Db5, A4] [Bb, Db2, Db5, Ab4] [Bb, Db2, Db5, G4]>",
// )
//   .s("organ_full")
//   .room(0.6);

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
