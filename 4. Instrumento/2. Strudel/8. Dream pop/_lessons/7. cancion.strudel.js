// ════════════════════════════════════════════════════════════════
// Sesión 7 · La canción: la coda que explota
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §10, §11 y §12
// 60 min, o dos sesiones
//
// Objetivo  juntar las sesiones 0 a 6 en una canción que guarda el clímax para el final.
// Hecho     un audio exportado, aunque sea la versión a escala.
//
// Cómo      primero la tabla, después el código. Llena cada ____ tú.
// ════════════════════════════════════════════════════════════════

setcpm(70 / 4)      // ← tu tempo sentido (sesión 0)

// ── PASO 1 · La tabla de forma (antes de escribir código) ──────
// Cada sección suma o quita una capa. UNA capa queda guardada para la coda.
/*
sección      unidades   capas que suenan                  qué cambia
intro        ____       ____                              —
estrofa      ____       ____                              ____
estribillo   ____       ____                              ____
puente       ____       ____                              se quita casi todo
CODA         ____       ____ + LA CAPA GUARDADA: ____      el clímax
final        ____       ____                              se apaga
*/

// ── PASO 2 · Las capas ──────────────────────────────────────────
// Copia aquí tus decisiones de las sesiones anteriores.

const L = 2        // compases por unidad · 2 para escuchar, 4 en la canción real

const ESTROFA = "<D^7!2 G^7!2>"         // ← sesión 2
const organo = x => chord(x).voicing().s("organ_full")
  .vib(5).vibmod(.06).gain(.45).room(.8).roomsize(8).orbit(2)   // ← sesiones 1 y 5
// const ESTRIBILLO = "<____>"
// const caja    = ____                   // sesión 0
// const bajo    = x => ____              // sesión 3
// const voz     = ____                   // sesión 4
// const motor   = x => ____              // sesiones 1 y 3
// const luz     = ____                   // sesión 6
// const guardada = ____                  // la capa de la coda

// ── PASO 3 · El arrange ─────────────────────────────────────────
// Una línea por fila de tu tabla. Ahora solo suena la intro: ve descomentando.

arrange(
  [2 * L, organo(ESTROFA)],                                     // intro
  // [4 * L, stack(____)],                                      // estrofa
  // [2 * L, stack(____)],                                      // estribillo
  // [2 * L, stack(____)],                                      // puente
  // [4 * L, stack(____, guardada)],                            // CODA
  // [L,     organo("<____>").gain(saw.range(.45, 0).slow(L))], // final: se apaga
)

// ── PASO 4 · La prueba de la coda ───────────────────────────────
// Escucha el segundo estribillo y la coda seguidos.
// ¿La coda es más grande?  ____   Si no: ¿qué sonó ya antes y debería esperar?  ____

// ── PASO 5 · Tu frontera (opcional) ─────────────────────────────
// Si esta canción es Dawn Chorus o Nocturno: ¿qué UNA capa de la guía le llevas?  ____
// (una obra activa a la vez · una dificultad nueva por proyecto)

// ── CIERRE ──────────────────────────────────────────────────────
// 1. Graba el audio. Semana sin audio es semana en blanco.
// 2. Anótalo en la bitácora: 6. Práctica/4. Bitácora/
// 3. Escúchalo al día siguiente, no hoy.
// HECHO cuando el audio existe.
