// ════════════════════════════════════════════════════════════════
// Sesión 1 · El groove
// Guía: 7. House/0. House desde cero.md  →  §3
// 30–45 min
//
// Objetivo  lo que se mueve encima del kick: hats, swing, percusión, clave.
// Hecho     eliges un swing y puedes decir por qué ese y no el de al lado.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909"
setcpm(124 / 4)

const esqueleto = s("bd*4, ~ cp ~ cp").bank(BANK)

// ── PASO 1 · El punto de partida ────────────────────────────────

stack(esqueleto, s("[~ oh]*4").bank(BANK).velocity(.7))

// ── PASO 2 · Cuatro maneras de tocar los hats ──────────────────
// Un compás de cada una, en una sola capa con .cut(1).
//   1 · solo abierto      2 · corcheas (cerrado en el tiempo, abierto en el "&")
//   3 · galope (x x . x)  4 · semicorcheas
// La misma velocity de 16 valores tiene que servir para las cuatro.

// stack(
//   esqueleto,
//   s(cat("____", "____", "____", "____"))
//     .cut(1).velocity("[____]*4").bank(BANK),
// )

// DECISIÓN · mis hats son el patrón ____

// ── PASO 3 · La escalera de swing ───────────────────────────────
// Un valor de swingBy por compás. Empieza en 0 y sube.
// Tabla: 50 % = 0 · 54 % = .08 · 56 % = .12 · 58 % = .16 · 62 % = .24 · 66 % = .33
// Escucha: ¿qué golpes se mueven? ¿cuáles no? (pista: pasos pares e impares)

// stack(
//   esqueleto,
//   s("[hh hh oh hh]*4").cut(1).velocity("[.45 .3 .75 .3]*4").bank(BANK),
//   s("shaker_small*16").velocity("[.5 .25 .35 .25]*4").pan(.7),
// ).swingBy("<____ ____ ____ ____>", 8)

// DECISIÓN · mi swing es ____ porque ____

// ── PASO 4 · Dos instrumentos de percusión ──────────────────────
// Elige DOS de la tabla de §3.3 (no más). Escribe primero la rejilla aquí,
// luego las posiciones con .beat(). Sin .bank(): son acústicos.
/*
        1 e & a 2 e & a 3 e & a 4 e & a
____    . . . . . . . . . . . . . . . .
____    . . . . . . . . . . . . . . . .
kick    x . . . x . . . x . . . x . . .
*/

// stack(
//   esqueleto,
//   s("[~ oh]*4").bank(BANK).velocity(.6),
//   s("____").beat("____", 16).velocity(____).pan(____),
//   s("____").beat("____", 16).velocity(____).pan(____),
// ).swingBy(____, 8)                              // el swing que elegiste

// ── PASO 5 · La clave ───────────────────────────────────────────
// La clave son 3-2, por pasos, desde esta rejilla:
/*
clave   x . . x . . x . . . x . x . . .
kick    x . . . x . . . x . . . x . . .
*/

// stack(
//   s("bd*4, [~ oh]*4").bank(BANK),
//   s("clave").beat("____", 16).velocity(.7),
// )

// Ahora escríbela también por tiempos, con un [ ] por tiempo:
// s("[____] [____] [____] [____]")

// ── CIERRE ──────────────────────────────────────────────────────
// Junta en un solo stack: esqueleto + tus hats + tu swing + UNA percusión.
// HECHO cuando lo escuchas 16 compases y el cuerpo se mueve sin que lo pienses.
