// ════════════════════════════════════════════════════════════════
// Sesión 0 · El tempo que flota y la caja que no cambia
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §1 y §2
// 30–40 min
//
// Objetivo  elegir cuánto flota una pieza tuya y con qué reloj.
// Hecho     eliges un preset de caja para una pieza tuya y sabes por qué.
//
// Cómo      solo un PASO activo a la vez. Para pasar al siguiente, comenta
//           el anterior y descomenta el nuevo. Llena cada ____ tú.
// ════════════════════════════════════════════════════════════════

// setcpm(66 / 4); // 12/8 a 66 negras con punto: 1 ciclo = 1 compás

// ── PASO 1 · Slow rock ──────────────────────────────────────────
// El preset de balada en 12/8. Escúchalo 8 compases y mécete con él.

// stack(s("bd ~ bd ~"), s("~ sd ~ sd"), s("hh*12").velocity("[.6 .3 .4]*4")).bank(
//   "KorgMinipops",
// );

// ── PASO 2 · Tempo medido, tempo sentido ────────────────────────
// Elige una canción de dream pop que te guste. Da palmas con ella.
//   BPM que dice internet: 105      BPM que siente tu cuerpo: 70
//   ¿La caja cae una vez por compás (half-time) o dos?  ____
// Escribe su esqueleto con el tempo SENTIDO: Esta canción es PPP

/*
Mi error aquí fue mayormente no darme cuenta de que el hh es el que lleva todo,
Más allá del kick y la caja. El hh es el que marca el pulso, y el kick y la caja son acentos.
*/
// setcpm(70 / 2) // 6/8
// stack(
//   s("bd ~!5"),        // kick
//   s("~ ~ ~ sd ~ ~"),        // caja
//   s("hh*6"),        // hats
// ).bank("KorgMinipops")

// ── PASO 3 · De a dos o de a tres ───────────────────────────────
// El mismo acorde con 8 corcheas por compás y luego con 12.
// El kick y la caja no cambian: solo cuántas notas caben en cada pulso.

// setcpm(70/2)

// stack(
//   s("bd ~ sd ~").bank("KorgMinipops"),
//   s("hh*8").velocity("[.6 .3 .4]*4").bank("KorgMinipops"),
//   chord("<D^7>").voicing()
//     .struct("<[x x x x x x x x] [x x x x x x x x x x x x]>")
//     .s("organ_full").gain(.5),
// )

// ── PASO 4 · Tres presets, sin mirar la guía ───────────────────
// Vals en 3/4: kick en el 1, caja suave en 2 y 3, hats en corcheas.

// setcpm(84 / 3)
// stack(s("bd ~ ~"), s("~ sd sd").velocity(.5), s("[hh!3]!3")).bank("RolandCompurhythm78")

// Bossa nova, por pasos. Desde esta rejilla:
/*
        1 e & a 2 e & a 3 e & a 4 e & a
aro     x . . x . . x . . . x . . x . .
hh      x . x . x . x . x . x . x . x .
kick    x . . . . . x . x . . . . . x .
*/
// Todo esto es a 4/4
// setcpm(76 / 4)
// stack(
//   // Kick
//   s("bd").beat("0, 6, 8, 14", 16),
//   // Aro
//   s("rim").beat("0, 3, 6, 10, 13", 16).velocity(.6),
//   // High hat
//   s("hh*8").velocity("[.5 .25]*4"),
// ).bank("KorgKR55")

// Rock lento half-time: kick en el 1 (y una "a" del 3 si quieres), caja solo en el 3.

//4/4
// setcpm(74 / 4)
// stack(s("bd bd [~!3 bd] bd"), s("~!3 sd").velocity(.7), s("hh*8").velocity("[.4 .15]*4")).bank("RhythmAce")

// ── PASO 5 · El mismo preset, cuatro cajas ──────────────────────
// Tu preset favorito de los anteriores, dos compases por caja.
// KorgMinipops · RolandCompurhythm78 · RhythmAce · UnivoxMicroRhythmer12 · CasioVL1


// Senti que me gustaba el bossa nova, pero no
// setcpm(74/4)
// const preset = stack(
//   // Kick
//   s("bd [~ bd] bd [~ bd]"), 
//   // Hi hat
//   s("hh*8").velocity("[.5 .25]*4"), 
//   // Rim
//   s("rim ~ ~ rim ~ ~ rim ~ ~ ~ rim ~ ~ rim ~ ~"))
// arrange(
//   [2, preset.bank("KorgMinipops")],
//   [2, preset.bank("RolandCompurhythm78")],
//   [2, preset.bank("RhythmAce")],
//   [2, preset.bank("UnivoxMicroRhythmer12")],
//   [2, preset.bank("CasioVL1")],
// )

// ── PASO 6 · Mazas y platos ─────────────────────────────────────
// Batería "real" de dream pop, sin banco: tom_mallet, snare_modern lejos,
// tambourine, y un gm_reverse_cymbal en el compás 4 que crezca hacia el 1.

setcpm(70 / 4)
stack(
  // Toms
  s("").velocity(.7).room(.5),
  // Sname
  s("____").velocity(.4).room(.8).roomsize(8),
  // Tambourine
  s("____"),
  // Reverse cymbal
  s("<~ ~ ~ ____>").gain(.6),
)

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · para ____ (una pieza tuya) elijo el preset ____ con la caja ____,
//            a ____ BPM sentidos, de a ____ (dos / tres)
// HECHO cuando la pieza en tu cabeza "cabe" en ese reloj sin forzarla.
