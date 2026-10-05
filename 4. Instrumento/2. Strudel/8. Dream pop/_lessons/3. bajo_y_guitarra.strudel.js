// ════════════════════════════════════════════════════════════════
// Sesión 3 · El bajo y la guitarra que no suena a guitarra
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §5 y §6
// 45 min
//
// Objetivo  un bajo que ancla y una guitarra con UNA firma: eco, slide,
//           trémolo o chorus.
// Hecho     alguien que lo escucha no está seguro de que sea una guitarra.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// ════════════════════════════════════════════════════════════════

setcpm(70 / 4)

const PROG = "<D^7 Bm7 G^7 A7sus>"     // ← tu progresión de la sesión 2
const organo = chord(PROG).voicing().s("organ_full").vib(5).vibmod(.06).gain(.45)
const bajo = x => x.s("sawtooth").lpf(350).attack(.03).release(.4).gain(.8)

// ── PASO 1 · El órgano solo ─────────────────────────────────────

organo

// ── PASO 2 · Cuatro bajos ───────────────────────────────────────
// Cuatro compases cada uno, bajo tu progresión:
//   raíz larga · con paso (la última negra camina a la raíz siguiente)
//   pedal · latido (corcheas)

// stack(
//   organo,
//   arrange(
//     [4, bajo(note("<____>"))],                           // raíz larga
//     [4, bajo(note("<____>"))],                           // con paso: [x@3 y]
//     [4, bajo(note("____"))],                              // pedal
//     [4, bajo(note("<____>").struct("x*8")).decay(.2).sustain(.4)],   // latido
//   ),
// )

// DECISIÓN · mi bajo es ____ con sonido ____ (sawtooth / pulse / triangle / sine)

// ── PASO 3 · El arpegio con eco ─────────────────────────────────
// Índices del voicing, sin el 0 (la raíz es del bajo). Eco en corchea con punto.
// (El espacio en `.arp (` es a propósito: así el script de arpegiadores no
//  convierte esta lección en un preset de Sonar.)

// stack(
//   organo,
//   chord(PROG).voicing()
//     .arp ("____")
//     .s("gm_electric_guitar_clean")
//     .delay(.45).delaysync(3 / 16).delayfeedback(____)
//     .room(.5),
// )

// ── PASO 4 · El slide ───────────────────────────────────────────
// Una línea de dos compases, notas largas. Cada nota llega desde abajo.
// Prueba penv 1, 2 y 3, y pattack .05, .12 y .3. ¿Cuándo empieza a sonar a sirena?

// stack(
//   organo,
//   note("<[____] [____]>")
//     .s("triangle").lpf(1800)
//     .penv(____).pattack(____)
//     .vib(5).vibmod(.12)
//     .attack(.05).release(.6)
//     .delay(.3).delaysync(1 / 4).delayfeedback(.4)
//     .room(.7),
// )

// ── PASO 5 · El trémolo ─────────────────────────────────────────
// El acorde sostenido, con el volumen latiendo. ¿Cuántos pulsos por compás?

// chord(PROG).voicing().s("gm_electric_guitar_clean").gain(.8)
//   .tremolosync(____).tremolodepth(____).room(.6)

// ── PASO 6 · El chorus ──────────────────────────────────────────
// Tu arpegio del PASO 3, dos veces: una un poco más grave a la izquierda,
// otra un poco más aguda a la derecha. ¿Cuánto desafinar? Prueba .03, .07, .15.

// const linea = chord(PROG).voicing().arp ("____")
//   .s("triangle").lpf(2000).decay(.4).sustain(0).gain(.6)
// stack(
//   linea.add(note(____)).pan(.2),
//   linea.add(note(____)).pan(.8),
// )

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · la guitarra ____ (arpegia / canta), y su firma es ____
//            (eco / slide / trémolo / chorus). Solo una.
// HECHO cuando, sin decir qué es, alguien duda de que sea una guitarra.
