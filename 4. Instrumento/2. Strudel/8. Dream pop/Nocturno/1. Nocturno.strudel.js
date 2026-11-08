// ════════════════════════════════════════════════════════════════
// Nocturno · la partitura en Strudel, para buscarle el dream pop
//
// Obra     3. Composiciones/2. nocturno/0. Obra.md
// Fuente   7. Partituras/2. Composiciones/Nocturno primer intento.mscz
//          transcrito nota por nota de su .musicxml (2026-11-04)
// Guía     8. Dream pop/0. Dream pop desde cero.md  (los § de abajo)
//
// Cómo     pégalo en strudel.cc o en un bloque ```strudel de Obsidian.
//          Primero dale play tal cual: suena la partitura en piano, como
//          en MuseScore. Después mueve UNA perilla y vuelve a escuchar.
//
// Ojo      las perillas no deciden nada: son las opciones de la guía,
//          puestas a mano para probar. Las notas son las tuyas, intactas.
//          Lo que elijas va a 2. Decisiones de la obra, y entonces sí se
//          cambia el código.
// ════════════════════════════════════════════════════════════════

// ── Perillas ────────────────────────────────────────────────────

const PULSO = 46; // negra con punto. La partitura dice negra = 72: es lo mismo (§1.2)
const DESDE = 1; // primer compás que suena; el 1 es la anacrusa
const HASTA = 15; // último. Para quedarte en un pedazo: DESDE = 10, HASTA = 14

const MELODIA = "piano"; // mano derecha. Prueba (§3.3, §7.4): organ_full · gm_epiano1 ·
//   vibraphone · gm_voice_oohs · triangle · square
const ARPEGIO = "piano"; // mano izquierda. Prueba (§3.3, §6.1): organ_8inch · piano1 ·
//   gm_electric_guitar_clean · gm_synth_strings_2 · pulse

const VIBRATO = 0; // 1 = el temblor de órgano viejo (§3.1). Solo en sintes y samples, no en gm_*
const ECO = 0.1; // eco del arpegio (§6.1, §8.3): 0 = seco · .3–.5 = cada nota vuelve un pulso después
const SALA = 0.5; // reverb (§8.1): .2 habitación · .6 sala · .9 catedral
const CINTA = 0.5; // 1 = poco brillo y polvo, a todo (§8.4)

const CAJA = 1; // 0 = sin batería · 1 = slow rock (§2.2) · 2 = medio tiempo: caja solo en el 3
const BANCO = "RolandCompurhythm78"; // la caja (§2.3): RolandCompurhythm78 · RhythmAce · KorgKR55 ·
//   UnivoxMicroRhythmer12 · CasioVL1 · LinnDrum

const BOCETO = 0; // 1 = en lugar de c.1–15, el boceto en 4/4 de c.53–57 (solo mano izquierda)

let diatonicVoicingByScale = (
  gradeVoicing,
  rootNoteIndex,
  chordsToUse,
  baseScale,
) =>
  n(gradeVoicing).anchor(chordsToUse.rootNotes(rootNoteIndex)).scale(baseScale);

const FLOATING_CHORDS = "<~ Bb Ab Ao F Bb Bb Ab F7 Bbm Ch7 C7 Fm F7 Bb>";

const beatingSynth = chord(FLOATING_CHORDS)
  .voicing()
  .struct("x!8")
  .gain(1)
  .sustain(0.3)
  .velocity("<~ [0.5 0.8]*4!14>")
  .sound("gm_synth_strings_2");

const floatingSynth = chord(FLOATING_CHORDS)
  .voicing()
  .sound("gm_reed_organ")
  .attack(0.15)
  .hpf(350)
  .hpq(8)
  .vib(5)
  .vibmod(0.08)
  .tremolo(5)
  .tremolodepth(0.6)
  .velocity(0.3)
  .mask("0")
  .firstOf(8, (cy) => cy.mask("1 1 1 1"));

// ── Las notas ───────────────────────────────────────────────────
// Un compás por línea y un compás por ciclo. La rejilla es de
// semicorcheas, 24 por compás de 12/8: @2 = corchea, @4 = negra,
// @6 = negra con punto. A la derecha, el cifrado tal como está escrito
// en la partitura, y los adornos: Strudel no los toca.

const MD = [
  "[~@22 D5@2]", // c.1   anacrusa
  "[Bb4@4 F5@8 D5@8 G5@2 F5@2]", // c.2   B♭
  "[Ab4@4 C5@8 ~@2 C5@2 Eb5@2 G5@2 Ab5@4]", // c.3   A♭
  "[A5@4 Eb5@2 A5@2 C6@4 C5@8 Bb5@2 A5@2]", // c.4   Adim · el último La5 va ligado al c.5
  "[~@2 G5 Eb5 C6@4 Eb5@2 G5@2 C5@2 Eb5 A4@2 F4@4 Eb4@3]", // c.5   F7 · el ~@2 es la ligadura: aquí, silencio
  "[D4@4 F4@2 D5@4 F5@2 Bb4@4 D5@2 Bb5@4 F5@2]", // c.6   B♭ · grupeto invertido en el 2.º Re5
  "[Eb5@8 D5@2 Bb4@4 F4@4 Bb4@2 Eb4@4]", // c.7   B♭
  "[F4@6 Ab4@2 C5@2 Db5 Eb5@6 C5@4 Ab4@3]", // c.8   A♭
  "[A4@4 F4@4 C5@2 A5@4 Eb5@2 F5@4 Eb5@4]", // c.9   F7 · grupeto en el 1.er Mi♭5
  "[F5@4 Db5 C5 Eb5 F5 Ab5 Bb5 Bb4@4 F4@4 Bb4 A4 G4 Eb4 F4 Db4]", // c.10  B♭m · mordente en Re♭5 y La4, grupeto en Fa4
  "[Eb4@4 Gb4@2 Bb4@4 Eb5 G5@2 Eb5@6 C5@2 Bb4@2 Gb4]", // c.11  Cm7 · mordente en el 2.º Si♭4
  "[G4@4 E4@4 C4@2 C5@4 E5@4 C5 D5 E5 G5 A5 Bb5]", // c.12  C7
  "[C6@4 Ab5@2 F5@4 Bb4@2 Ab4@2 C5@2 F5@4 Ab5@4]", // c.13  Fm · grupeto en el 1.er La♭5
  "[A5@4 F5@2 Eb5 D5 C5 Bb4 D5 Eb5 F5@2 A5@2 C6@2 F6@4 A6@2]", // c.14  F7
  "[[F5,D6,Bb6]@4 [F4,F5]@8 F4@2 A4@4 [D4,Bb4,F5]@6]", // c.15  B♭ · grupeto en el La4
];

const MI = [
  "[~@24]", // c.1
  "[Bb2@2 F3@2 D3@2 Bb3@2 F3@2 D4@2 Bb2@2 F3@2 D3@2 Bb3@2 F3@2 D4@2]", // c.2
  "[Ab2@2 Eb3@2 C3@2 Ab3@2 Eb3@2 C4@2 Ab2@2 Eb3@2 C3@2 Ab3@2 Eb3@2 C4@2]", // c.3
  "[A2@2 A3@2 Eb3@2 C3@2 Eb3@2 A3@2 A2@2 A3@2 Eb3@2 C3@2 Eb3@2 A3@2]", // c.4
  "[F2@2 Eb3@2 C3@2 A3@2 Eb3@2 A2@2 F2@2 Eb3@2 C3@2 A3@2 Eb3@2 A2@2]", // c.5
  "[Bb2@2 F3@2 D3@2 Bb2@2 C4@2 F3@2 Bb2@2 F3@2 D3@2 Bb2@2 C4@2 F3@2]", // c.6
  "[Bb2@2 F3@2 Eb3@2 Bb3@2 Eb3@2 D4@2 Bb2@2 F3@2 Eb3@2 Bb3@2 Eb3@2 D4@2]", // c.7
  "[Ab2@2 Eb3@2 C3@2 Ab3@2 D3@2 C4@2 Ab2@2 Eb3@2 C3@2 Ab3@2 D3@2 C4@2]", // c.8
  "[F2@2 Eb3@2 C3@2 A3@2 Eb3@2 A2@2 F2@2 Eb3@2 C3@2 A3@2 Eb3@2 A2@2]", // c.9
  "[Bb2@2 [Db3,Bb3]@2 [F3,Bb3,F4]@2 Db3@2 [Bb2,F3]@2 [Db3,F3,Db4]@2 Bb2@2 [Db3,Bb3]@2 [F3,Bb3,F4]@2 Db3@2 [Bb2,F3]@2 [Db3,F3,Db4]@2]", // c.10
  "[C3@2 [Eb3,Gb3]@2 [Gb2,Eb3,Bb3]@2 Gb2@2 [C3,Gb3]@2 [Gb2,Eb3,D4]@2 C3@2 [Eb3,Gb3]@2 [Gb2,Eb3,Bb3]@2 Gb2@2 [C3,Gb3]@2 [Gb2,Eb3,D4]@2]", // c.11
  "[C3@2 [E3,G3]@2 [G2,E3,Bb3]@2 G2@2 [C3,G3]@2 [G2,E3,D4]@2 C3@2 [E3,G3]@2 [G2,E3,Bb3]@2 G2@2 [C3,G3]@2 [G2,E3,D4]@2]", // c.12
  "[Bb2@2 [Db3,Bb3]@2 [F3,Bb3,F4]@2 Db3@2 [Bb2,F3]@2 [Db3,F3,Db4]@2 Bb2@2 [Db3,Bb3]@2 [F3,Bb3,F4]@2 Db3@2 [Bb2,F3]@2 [Db3,F3,Db4]@2]", // c.13
  "[Eb2@2 [A2,F3]@2 [C3,F3,D4]@2 F2@2 [A2,Eb3]@2 [Eb3,A3,Eb4]@2 Eb2@2 [A2,F3]@2 [C3,F3,D4]@2 F2@2 [A2,Eb3]@2 [Eb3,A3,Eb4]@2]", // c.14
  "[Bb2@2 F3@2 D3@2 Bb3@2 F3@2 D4@2 [F2,Bb2,F3]@6 [F2,D3,Bb3]@6]", // c.15
];

// El boceto de c.53–57: en la partitura está en 4/4, con la mano derecha
// vacía. Cuatro negras con tresillos son la misma rejilla que el 12/8, así
// que aquí cada compás también es un ciclo. En MuseScore va a negra = 72,
// más rápido que la sección de 12/8: para oírlo así, PULSO = 72.
const BOCETO_MI = [
  "[Bb2 F3 D3 Bb3 Bb2 F3 Bb2 F3 D3 Bb3 Bb2 F3]", // c.53  B♭ · tresillos de corchea
  "[Ab3 Eb3 C3 Eb3]", // c.54  A♭ · negras
  "[A3 C4 C3 Eb3]", // c.55  Adim
  "[F3 Eb3 C3 A2]", // c.56  F7
  "[Bb2 D3 ~@2]", // c.57  B♭
];

// ── La caja (§2) ────────────────────────────────────────────────
// Los presets de la guía, en 12/8. En su propio stack, con su .bank().

// ck(
//   // Kick
//   s("bd").beat("0, 6, 8, 14", 16),
//   // Aro
//   s("rim").beat("0, 3, 6, 10, 13", 16).velocity(.6),
//   // High hat
//   s("hh*8").velocity("[.5 .25]*4"),
// ).bank("KorgKR55")
const CAJAS = [
  silence,
  stack(
    s("bd ~ bd ~"),
    s("~ sd ~ sd"),
    s("hh*12").velocity("[.6 .3 .4]*4"),
  ).bank("KorgMinipops"),
  stack(
    // 2 · medio tiempo: kick en el 1, caja solo en el 3
    s("bd ~ ~ ~"),
    s("~ ~ sd ~"),
    s("hh*12").velocity("[.6 .3 .4]*4"),
  ),
  stack(
    // Kick
    s("bd").beat("0, 3, 6, 10, 13", 16),
    // Aro
    s("rim").beat("0, 6, 8, 14", 16).velocity(0.6),
    // High hat
    s("hh*8").velocity("[.5 .25]*4"),
  ).bank("KorgKR55"),
  stack(s("bd ~ ~"), s("~ sd sd").velocity(0.5), s("[hh!3]!3")).bank(
    "RolandCompurhythm78",
  ),
];

// ── Cómo suena ──────────────────────────────────────────────────

setcpm(PULSO / 4); // 12/8: un compás por ciclo (§1.2)

const compases = (lista) => cat(...lista.slice(DESDE - 1, HASTA));
const tiembla = (p) => (VIBRATO ? p.vib(5).vibmod(0.08) : p);
const gastado = (p) => (CINTA ? p.lpf(3500).crush(11) : p);

const melodia = tiembla(note(compases(MD)).s(MELODIA));
const arpegio = tiembla(note(compases(MI)).s(ARPEGIO))
  .delay(ECO)
  .delaysync(1 / 4)
  .delayfeedback(0.4); // 1/4 de compás = una negra con punto

gastado(
  stack(
    // Piano
    melodia,
    arpegio,
    // Drums
    CAJAS[CAJA].bank(BANCO),

    // beating synth
    beatingSynth,

    // Floating synth
    floatingSynth,
  ).room(SALA),
);
