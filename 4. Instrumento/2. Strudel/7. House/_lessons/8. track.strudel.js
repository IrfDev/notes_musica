// ════════════════════════════════════════════════════════════════
// Sesión 8 · El track
// Guía: 7. House/0. House desde cero.md  →  §11, §12 y §13
// 60 min, o dos sesiones
//
// Objetivo  juntar las sesiones 0 a 7 en un track con forma de pista de baile.
// Hecho     un audio exportado del track, aunque sea la versión a escala.
//
// Cómo      primero la tabla, después el código. Llena cada ____ tú.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909"
setcpm(124 / 4)     // ← tu tempo: mira la tabla de subgéneros de §12

// ── PASO 1 · La tabla de forma (antes de escribir código) ──────
// Bloques de 8. Cada fila nueva cambia UNA cosa respecto a la anterior.
/*
sección       compases   capas que suenan                       qué cambia
intro DJ      ____       kick, hats                             —
____          ____       ____                                   ____
____          ____       ____                                   ____
breakdown     ____       ____                                   se quita el suelo
build         ____       ____                                   ____
drop          ____       ____                                   vuelve todo + gancho
____          ____       ____                                   ____
outro DJ      ____       kick, hats                             —
*/

// ── PASO 2 · Las capas ──────────────────────────────────────────
// Copia aquí tus decisiones de las sesiones anteriores.

const L = 4      // compases por bloque · 4 para escuchar, 16 en el track real

const kick   = s("bd*4").bank(BANK)
const hats   = s("[hh hh oh hh]*4").cut(1).bank(BANK)   // ← tus hats (sesión 1)
// const palmas  = ____                                  // sesión 0
// const perc    = ____                                  // sesión 1
// const bajo    = ____                                  // sesión 2
// const acordes = ____                                  // sesiones 4 y 5
// const gancho  = ____                                  // sesión 5
// const pad     = ____
// const redoble = ____                                  // sesión 7
// const riser   = ____
// const crash   = s("<cr ~ ~ ~>").bank(BANK)

// ── PASO 3 · El arrange ─────────────────────────────────────────
// Una línea por fila de tu tabla. Ahora solo suena la intro: ve descomentando.

arrange(
  [L, stack(kick, hats)],                     // intro DJ
  // [L,     stack(____)],                    // ____
  // [2 * L, stack(____)],                    // ____
  // [L,     stack(____)],                    // breakdown
  // [4,     stack(____).mask("<1 1 1 [1 1 1 0]>")],   // build, con hueco
  // [2 * L, stack(____)],                    // drop
  // [2 * L, stack(____)],                    // ____
  // [L,     stack(kick, hats)],              // outro DJ
)

// ── PASO 4 · El bombeo ──────────────────────────────────────────
// Tu sidechain de la sesión 3: kick con .duckorbit(2), pad y acordes con .orbit(2).
// Escucha el track entero con y sin. DECISIÓN · ____

// ── PASO 5 · Tu frontera (opcional) ─────────────────────────────
// Una sola capa de §13 que hable tu idioma: CR-78 arriba, memoria de acorde,
// crush, palmas lejos… UNA. ¿Cuál? ____

// ── CIERRE ──────────────────────────────────────────────────────
// 1. Graba el audio. Semana sin audio es semana en blanco.
// 2. Anótalo en la bitácora: 6. Práctica/4. Bitácora/
// 3. Escúchalo al día siguiente, no hoy.
// HECHO cuando el audio existe.
