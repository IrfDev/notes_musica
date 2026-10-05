// ════════════════════════════════════════════════════════════════
// Sesión 4 · La voz y la melodía
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §7
// 40 min
//
// Objetivo  una melodía de cuatro compases que no resuelve.
// Hecho     todas las notas largas caen en la 7.ª o la 9.ª del acorde menos una,
//           y sabes por qué esa una sí resuelve.
//
// Cómo      escribe la melodía primero en papel o en MuseScore, luego aquí.
//           Solo un PASO activo a la vez. Llena cada ____ tú.
// ════════════════════════════════════════════════════════════════

setcpm(66 / 4)

const PROG = "<D^7!2 G^7!2>"            // ← tu progresión, dos compases por acorde
const fondo = stack(
  chord(PROG).voicing().s("organ_full").vib(5).vibmod(.06).gain(.4),
  chord(PROG).rootNotes(2).s("sawtooth").lpf(300).gain(.7),
)

// ── PASO 1 · El fondo ───────────────────────────────────────────
// Canta encima, sin escribir nada. Busca notas largas que rocen.

fondo

// ── PASO 2 · Las notas de cada acorde ───────────────────────────
// Antes de la melodía, la tabla. Para cada acorde de tu progresión:
/*
acorde     raíz   3.ª    5.ª    7.ª    9.ª
____       ____   ____   ____   ____   ____
____       ____   ____   ____   ____   ____
*/

// ── PASO 3 · Cuatro compases ────────────────────────────────────
// Reglas: ámbito de una sexta como mucho · grado conjunto · notas largas.
// Marca qué es cada nota larga respecto a su acorde:
/*
compás   nota larga   sobre    es la…
1        ____         ____     ____
2        ____         ____     ____
3        ____         ____     ____
4        ____         ____     ____
*/

// stack(
//   fondo,
//   note("<[____] [____] [____] [____]>")
//     .s("gm_voice_oohs").gain(.9).room(.6),
// )

// ── PASO 4 · Abrir el final ─────────────────────────────────────
// Si alguna frase termina en la tónica, muévela a la 7.ª o a la 9.ª.
// Escucha las dos versiones seguidas. ¿Cuál se queda contigo?  ____

// ── PASO 5 · Doblada y detrás del tiempo ────────────────────────
// Compás 1 a tiempo, compás 2 un pelo tarde. Y una copia una octava abajo,
// bajita, que entra en el compás 3.

// const voz = note("<[____] [____] [____] [____]>").s("gm_voice_oohs")
// stack(
//   fondo,
//   voz.late("<0 ____>").room(.6),
//   voz.transpose(____).gain(.4).room(.6).mask("<0 0 1 1>"),
// )

// ── PASO 6 · Tu voz ─────────────────────────────────────────────
// En Sonar: graba la melodía cantada encima de este fondo (pista HUM - Lead
// o una de audio). Súbele la reverb hasta que deje de ser tu voz y sea una voz.

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · mi melodía termina en ____ (qué grado) y la frase que resuelve
//            es la ____, porque ____
// HECHO cuando la tarareas al día siguiente sin haberla vuelto a oír.
