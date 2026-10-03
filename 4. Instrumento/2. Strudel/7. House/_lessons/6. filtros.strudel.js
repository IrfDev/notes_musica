// ════════════════════════════════════════════════════════════════
// Sesión 6 · El filtro es un instrumento
// Guía: 7. House/0. House desde cero.md  →  §9
// 30–40 min
//
// Objetivo  mover un loop sin escribir notas nuevas.
// Hecho     ocho compases se sostienen solo con el filtro.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// Recuerda  la señal se lee al EMPEZAR cada nota: en stabs barre suave,
//           en un acorde largo va a saltos (usa la envolvente, PASO 4).
//           En comillas, decimales: "3/16" dentro de comillas NO es tres dieciseisavos.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909"
setcpm(124 / 4)

const PROG = "<Am9 D9>"     // ← tu armonía
const bateria = s("bd*4, ~ cp ~ cp, [~ oh]*4").bank(BANK)
const stabs = chord(PROG).struct("[~ ~ x ~]*4").voicing()
  .s("sawtooth").decay(.2).sustain(0).gain(.4)

// ── PASO 1 · Un barrido ─────────────────────────────────────────

stack(bateria, stabs.lpf(sine.range(300, 3000).slow(8)).lpq(8))

// ── PASO 2 · Cuatro señales ─────────────────────────────────────
// Ocho compases con cada una: sine, saw, perlin y escalones por compás.
// Para cada una, anota en una palabra qué emoción tiene.

// stack(bateria, stabs.lpf(sine.range(____, ____).slow(8)).lpq(8))     // sine:   ____
// stack(bateria, stabs.lpf(saw.range(____, ____).slow(8)).lpq(8))      // saw:    ____
// stack(bateria, stabs.lpf(perlin.range(____, ____).slow(8)).lpq(8))   // perlin: ____
// stack(bateria, stabs.lpf("<____ ____ ____ ____>").lpq(8))            // escalones: ____

// ── PASO 3 · El filtro de DJ ────────────────────────────────────
// Todo lo de arriba en un `loop`, el kick FUERA. .djf: <.5 pasa-bajos, >.5 pasa-altos.
// Haz que abra en 8 compases. Después prueba al revés: que se vaya a pasa-altos.

// const loop = stack(
//   s("~ cp ~ cp, [hh oh]*4").bank(BANK),
//   stabs,
// )
// stack(
//   s("bd*4").bank(BANK),
//   loop.djf(saw.range(____, ____).slow(8)),
// )

// ── PASO 4 · Pluck o swell ──────────────────────────────────────
// Dos compases cada uno. El pluck abre y cierra en cada golpe; el swell abre
// despacio dentro de una nota larga.

// const acorde = chord(PROG).voicing().s("sawtooth").lpf(300).lpq(6).gain(.35)
// stack(
//   s("bd*4, [~ oh]*4").bank(BANK),
//   arrange(
//     [2, acorde.struct("[~ ~ x ~]*4").lpenv(____).lpattack(____).lpdecay(____).lpsustain(0)],
//     [2, acorde.lpenv(____).lpattack(____).lpsustain(1)],
//   ),
// )

// ── PASO 5 · La escalera de delay ───────────────────────────────
// Un tiempo de eco por compás, en decimales:
//   corchea .125 · corchea con punto .1875 · negra .25 · tresillo de negra .1667
// Y las palmas en OTRO orbit si quieres que tengan otro eco.

// stack(
//   s("bd*4").bank(BANK),
//   s("~ cp ~ cp").bank(BANK).delay(.3).delaysync(3/16).delayfeedback(.35),
//   chord(PROG).struct("[~ ~ ~ x] ~ [~ ~ x ~] ~").voicing().s("gm_epiano1")
//     .delay(.4).delaysync("<____ ____ ____ ____>").delayfeedback(.45)
//     .orbit(2),
// )

// DECISIÓN · mi movimiento es ____ (señal, djf o envolvente) en ____ compases,
//            y mi eco es ____

// ── CIERRE ──────────────────────────────────────────────────────
// Un solo loop de tu armonía y tu batería, sin notas nuevas, durante 8 compases.
// Solo se mueve el filtro.
// HECHO cuando lo escuchas entero y no notas que es el mismo compás repetido.
