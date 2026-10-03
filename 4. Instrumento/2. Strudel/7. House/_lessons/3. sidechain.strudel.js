// ════════════════════════════════════════════════════════════════
// Sesión 3 · Sidechain: el bombeo
// Guía: 7. House/0. House desde cero.md  →  §5
// 30 min
//
// Objetivo  medir el bombeo para tu tempo, no copiarlo.
// Hecho     el pad toca fondo en cada kick y está arriba justo en el "&".
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// Recuerda  la víctima va en .orbit(2); el kick lleva .duckorbit(2).
//           "duck target orbit 2 does not exist" en la consola es inofensivo.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909"
const BPM = 124
setcpm(BPM / 4)

const arriba = s("~ cp ~ cp, [~ oh]*4").bank(BANK)  // orbit 1: no bombea
const pad = chord("<Am9>").voicing()                 // ← tu acorde, si ya lo tienes
  .s("sawtooth").lpf(1400).gain(.35)

// ── PASO 1 · Sin y con ──────────────────────────────────────────
// Compás 1 sin bombeo, compás 2 con bombeo. Escucha la diferencia 8 compases.

stack(
  s("bd*4").bank(BANK)
    .duckorbit(2).duckattack(.24).duckonset(.005)
    .duckdepth("<0 .8>"),
  pad.orbit(2),
  arriba,
)

// ── PASO 2 · El tiempo de vuelta ────────────────────────────────
// duckattack = segundos que tarda en VOLVER. La regla: una corchea = 30 / BPM.
// A mi tempo, una corchea son ____ segundos.
// Prueba tres valores por compás: la mitad, la corchea exacta y el doble.

// stack(
//   s("bd*4").bank(BANK)
//     .duckorbit(2).duckdepth(.8).duckonset(.005)
//     .duckattack("<____ ____ ____>"),
//   pad.orbit(2),
//   arriba,
// )

// ¿Cuál vuelve a tiempo para el hat abierto? ¿Cuál se queda abajo demasiado?

// ── PASO 3 · La profundidad ─────────────────────────────────────
// Cuatro profundidades, una por compás, con tu duckattack del PASO 2.

// stack(
//   s("bd*4").bank(BANK)
//     .duckorbit(2).duckattack(____).duckonset(.005)
//     .duckdepth("<.2 .4 .6 .8>"),
//   pad.orbit(2),
//   arriba,
// )

// DECISIÓN · mi bombeo: duckattack ____, duckdepth ____, porque ____

// ── PASO 4 · Dos víctimas ───────────────────────────────────────
// Pad en el orbit 2, bajo en el orbit 3. El kick agacha los dos con
// profundidades distintas: "2:3" y "____:____".
// ¿Notas el bombeo en el bajo? Si va en contratiempo, casi no: ya se turnan.

// stack(
//   s("bd*4").bank(BANK)
//     .duckorbit("2:3").duckdepth("____:____").duckattack(____),
//   pad.orbit(2),
//   note("<a2>").struct("[~ x]*4").s("sawtooth").lpf(400).decay(.2).sustain(0).orbit(____),
//   arriba,
// )

// ── PASO 5 · Por qué no se agachan los hats ─────────────────────
// Mete los hats en el orbit 2 y escucha 8 compases. Luego sácalos.
// Escribe en una frase qué pasa con el reloj del track: ____

// stack(
//   s("bd*4").bank(BANK).duckorbit(2).duckattack(____).duckdepth(.8),
//   pad.orbit(2),
//   s("[hh hh oh hh]*4").cut(1).bank(BANK).orbit(2),
// )

// ── CIERRE ──────────────────────────────────────────────────────
// Tu bombeo del PASO 3 sobre tu groove de la sesión 1 y tu bajo de la sesión 2.
// HECHO cuando el pad respira con el kick y los hats siguen firmes.
