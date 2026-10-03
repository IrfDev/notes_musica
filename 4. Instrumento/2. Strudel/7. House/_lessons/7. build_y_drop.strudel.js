// ════════════════════════════════════════════════════════════════
// Sesión 7 · Breakdown, build y drop
// Guía: 7. House/0. House desde cero.md  →  §10
// 40 min
//
// Objetivo  quitar el suelo, subir la tensión, un hueco, y que todo vuelva.
// Hecho     el drop pega sin subir el volumen.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909"
setcpm(124 / 4)

const PROG = "<Am9 Am9 D9 D9>"     // ← tu armonía
const RAICES = "<a2 a2 d2 d2>"     // ← tus raíces

const kick   = s("bd*4").bank(BANK)
const palmas = s("~ cp ~ cp").bank(BANK)
const hats   = s("[hh hh oh hh]*4").cut(1).velocity("[.45 .3 .75 .3]*4").bank(BANK)
const bajo   = note(RAICES).struct("[~ x]*4").s("sawtooth").lpf(450).decay(.2).sustain(0)
const pad    = chord(PROG).voicing().s("sawtooth").lpf(1200).gain(.3).attack(.2).release(.5)

// ── PASO 1 · El groove ──────────────────────────────────────────

stack(kick, palmas, hats, bajo, pad)

// ── PASO 2 · El breakdown ───────────────────────────────────────
// ¿Qué capas quitas? Como mínimo, el kick y el bajo.
// ¿Qué le haces a lo que queda para que se oiga "lejos"? (room, hpf…)

// stack(____)

// ── PASO 3 · Las piezas del build ───────────────────────────────
// Escúchalas una por una, 4 compases cada una.

// const redoble = s("sd*4").ply("<____ ____ ____ ____>").bank(BANK)
//                   .velocity(saw.range(____, ____).slow(4))
// const riser   = s("white*16").hpf(saw.range(____, ____).slow(4))
//                   .gain(saw.range(____, ____).slow(4))
// const hueco   = x => x.mask("<1 1 1 [____]>")     // compás 4: ¿qué tiempo calla?

// redoble
// riser
// hueco(stack(pad, redoble, riser))

// ── PASO 4 · Las cuatro secciones ───────────────────────────────
// Groove, breakdown, build y drop, 4 compases cada una. El drop con crash.

// const crash = s("<cr ~ ~ ~>").bank(BANK)
// arrange(
//   [4, ____],            // groove
//   [4, ____],            // breakdown
//   [4, ____],            // build
//   [4, ____],            // drop
// )

// ── PASO 5 · ¿Qué pega más? ─────────────────────────────────────
// Tres versiones del build. Escucha cada una seguida del drop:
//   a · riser sin hueco
//   b · hueco sin riser
//   c · riser y hueco
// Escribe cuál pega más: ____  y por qué: ____

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · mi breakdown quita ____; mi build usa ____; mi hueco es ____
// HECHO cuando el drop pega sin subir el volumen, escuchado al día siguiente.
