# El código de Strudel

> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario (Obsidian + git), el 2026-11-04. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.

Del esqueleto del vals al B2: el origen (happy_beats, wddl), el archivo con el que nació la forma (0.first), el puente, las transcripciones de la partitura y las propuestas de Claude para el B2 (AI/: 4.ai_* y 5.ai_*).

Contiene:

- `4. Instrumento/2. Strudel/5. Experiments/2. House/0.happy_beats.strudel.js`
- `4. Instrumento/2. Strudel/5. Experiments/1. Happy/3. wddl.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/4. Louise.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/0.first.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/1.second_bridge.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/2.from_score.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/3.full_score.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/6.melancolica.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/7.b2_bateria.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/8.b2_musescore.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/AI/4.ai_1.b2_waltz.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/AI/4.ai_2.b2_respiro.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/AI/4.ai_3.b2_bb_score.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/AI/4.ai_4.b2_resuelto.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/AI/5.ai_1.transicion_caer_al_fondo.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/AI/5.ai_2.transicion_dominante_menor.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/AI/5.ai_3.transicion_pedal_de_la.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/AI/5.ai_4.transicion_re_que_baja.strudel.js`
- `4. Instrumento/2. Strudel/10. Folk/Louise/AI/5.ai_5.transicion_motivo_anticipado.strudel.js`

---

## Archivo: `4. Instrumento/2. Strudel/5. Experiments/2. House/0.happy_beats.strudel.js`

```js
setcpm(120 / 4);

let melody = note("<[A4@0.5 G4 F#4@0.5 D4@0.75 F#4]>").sound(
  "gm_lead_8_bass_lead",
);

let armony = chord("G7");

stack(
  // Armony
  melody,
  // Melodic
  // melody,
).pianoroll({ labels: 2, cycles: 2, vertical: 0 });
```

---

## Archivo: `4. Instrumento/2. Strudel/5. Experiments/1. Happy/3. wddl.strudel.js`

```js
setcpm(120 / 3);

const MODO = "D:major";
const RAIZ = "<0@2 4 5 3>";

let CHORD_TYPES = {
  nor: "[0,2,4,7,9]",
  sus: "[0,1,4]",
  sus4: "[0,3,4]",
  add9: "[0,2,4,8]",
  add11: "[0,2,4,10]",
  add13: "[0,2,4,12]",
  ado8: "[0,2,4,7]",
};

const voicing = CHORD_TYPES.nor;

let piso = n(RAIZ.sub(7)).mode("above");
let motor = n(RAIZ.add(voicing).sub(0)).mode("above");

let melody = note("<[A4@0.5 G4@0.75 F#4@0.5 D4@0.75 F#4]!2 ~ ~ ~ ~>").sound(
  "piano",
);

let armony = chord("D Aadd9 Bm G").voicing().sound("piano");

let bass = note("D2 A2 B2 G1").sound("gm_acoustic_bass");

// let guitar = n("<[0 1 0 2]>")
//   .scale("<D:major C:major G:major>")
//   .anchor("D2")
//   .mode("below")
//   .sound("gm_acoustic_guitar_steel");

let bassy = piso.scale(MODO).sound("piano");
let guitar = motor.scale(MODO).struct("[~ x x]").sound("piano");

stack(
  // Armony
  // armony,
  // Melodic
  // melody,
  // Bass
  // bass,
  // Guiar
  guitar,
  bassy,
).pianoroll({ labels: 2, cycles: 2, vertical: 0 });
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/4. Louise.strudel.js`

```js
setcpm(160 / 3);

const MODO = "D:major";
const RAIZ = "<0@2 4 5 3>";

let CHORD_TYPES = {
  nor: "[0,2,4,9]",
  sus: "[0,1,4,9]",
  sus4: "[0,3,4]",
  add9: "[0,2,4,8]",
  add11: "[0,2,4,10]",
  add13: "[0,2,4,12]",
  ado8: "[0,2,4,7]",
};

const voicing = CHORD_TYPES.nor;

let melody = note("<[A4@0.5 G4@0.75 F#4@0.5 D4@0.75 F#4]@2 ~!3>").sound(
  "piano",
);
let bassy = n(RAIZ.sub(7)).scale(MODO).mode("above").sound("piano");
let armonic = n(RAIZ.add(voicing))
  .scale(MODO)
  .struct("<~@2 [~ x@1.2 x]!3>")
  .sound("piano")
  .mode("above");

let kick = s("<[~ ~ bd] [bd ~ ~] [~ ~ bd] ~>");

let box = s(
  "<[cr,oh] [[lt,tb] [tb,mt] ~] [~ [tb tb] ~]!2 [tb ~ [[lt,mt] [mt,ht]]]>",
).velocity(0.7);

let ghosty = s("<[[sh ~ ~ sh] ~ [~ sh] ~]>").velocity(0.1);

let guitarBass = n("[0,2]".sub(7));
let guitarMid = n("[4, 7]".sub(7));
let guitarHigh = n("[9, 11]");
let guitarStruct = "<~@2 [~ x@2]!3>";

let guitar = stack(
  guitarBass.scale(MODO).struct(guitarStruct),
  guitarMid.scale(MODO).struct(guitarStruct).late(rand.range(0.01, 0.013)),
  guitarHigh.scale(MODO).struct(guitarStruct).late(rand.range(0.013, 0.015)),
).sound("gm_acoustic_guitar_nylon");

let drums = stack(
  // Kick
  kick,
  // Box
  box,
  // Ghosty
  ghosty,
).bank("AkaiLinn");

stack(
  // // Drums
  // drums,
  // // Melodic
  // melody,
  // // Armony
  armonic,
  // Bass
  bassy,
  // Guitar
  // guitar,
).pianoroll({ labels: 2, cycles: 2, vertical: 0 });
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/0.first.strudel.js`

```js
setcpm(160 / 3);

const MODO = "D:major";
const INTRO_CHORDS = "<D@2 A Bm G D@2 A Bm G^7>";
let MAIN_VOICING = "<[0,2,4,9]!9 [0,2,4,6]>";
let MAIN_MELODY = "<[A4@0.5 G4@0.75 F#4@0.5 D4@0.75 F#4]@2 ~!3>";

let diatonicVoicingByScale = (
  gradeVoicing,
  rootNoteIndex,
  chordsToUse,
  baseScale,
) =>
  n(gradeVoicing).anchor(chordsToUse.rootNotes(rootNoteIndex)).scale(baseScale);

let melody = note(MAIN_MELODY).sound("piano");

// ═══════════════════════ Intro ══════════════════════

let bassy = chord(INTRO_CHORDS).rootNotes(2).sound("piano");
let armonic = diatonicVoicingByScale(MAIN_VOICING, 3, INTRO_CHORDS, MODO)
  .struct("<~@2 [~ x@1.5 x]!3>")
  .sound("piano");

// Piano
let chumPamPam = stack(
  // Left finger, one note coming from the transposed. There's no voicing, so it'll just play the first note
  bassy,
  // The armonic part is a custom voicing planned, that may be reused
  armonic,
);

// Drums
let kick = s(`<
    [~ bd bd]
    [bd ~ ~]
    [bd ~ ~]
    [bd ~@1.3 bd]
    ~
  >`);

let introTiming = s(`<
  ~
  [tb tb ~]
  [~ tb@1.4 tb]
  [~ tb@1.3 tb]
  [tb ~ ~]
>`);

let introFills = s(`<
  [cr ~ ~]
  ~
  ~
  ~
  [~ ~ [lt ht]]
>`);

let ghosty = s(`<
  ~
  [sh sh sh]
  [sh]
  [~ sh]
  [~ sh]
>`).velocity(0.1);

let drums = stack(
  // Kick
  kick,
  // Box
  introTiming,
  introFills,
  // Ghosty
  ghosty,
)
  .mask("<0 1!9>")
  .bank("AkaiLinn");

let intro = stack(
  // Drums
  drums,
  // Melodic
  melody,
  // Piano doing the cun pa pa
  chumPamPam,
  // guitar,
);

// ═══════════════════════ Verse ══════════════════════
/*
The verse is a combination of the guitar doing the chumpampam waltzy thing 
And long piano verses
*/

// So we have two patterns repeated twice
let VERSE_CHORDS = `<
    D^7
    F#m@0.75
    F#m@0.25
    C#o
    A@0.5
    A7@0.5

    Bm7
    G@0.75
    G6@0.25
    D6
    F#m@0.5
    F#m7@0.5 
>`;

// Per pattern we have specific voicings
// THe only change occours on the 2nd and 3rd compass with the 6th
let pianoVerseVoicing = `<
    [0,2,9,11,13]

    [0,2,4,11]@0.75
    [0,2,4,9]@0.25

    [0,2,4,9]

    [0,2,4,9]@0.5 
    [0,2,9,11,13]@0.5
  


    [0,2,9,11,13]

    [0,2,4,11]@0.75
    [0,2,4,5]@0.25

    [0,2,4,5]

    [0,2,4,9]@0.5
    [0,2,9,11,13]@0.5
  >`;

// Voiced chords long playing
let firstVerseArmonyPiano = diatonicVoicingByScale(
  pianoVerseVoicing,
  3,
  VERSE_CHORDS,
  MODO,
).sound("piano");

// Guitar
let guitarStruct = `<
    [x@3]!8
    [~ x x]
    [x@3]
    [~ x x]
    [x@3]
    [~ x x] 
    [x@3]
    [~ x x]
    [x@3]
>`;
// [~ x x]
// [x@3]

// Guitar divided by voices, creating voicings by scale
let guitar = stack(
  // Guitar bass
  diatonicVoicingByScale("[0,2]", 2, VERSE_CHORDS, MODO).struct(guitarStruct),
  // Guitar Mid
  diatonicVoicingByScale("<[0, 2]!4 [4,7]!4>", 3, VERSE_CHORDS, MODO)
    .struct(guitarStruct)
    .late(rand.range(0.01, 0.025)),
  // Guitar high
  diatonicVoicingByScale("<[0,4]!7 [2,4]>", 4, VERSE_CHORDS, MODO)
    .struct(guitarStruct)
    .late(rand.range(0.04, 0.06)),
).sound("gm_acoustic_guitar_nylon");

//Drums
let verseDrums = stack(
  //kick
  s("<[bd ~ ~]!7 ~>"),
  // Box: cr, oh, ht,lt,mt, tb, cp
  s("<[~ ~ tb]>").velocity(0.7),
  s("<[oh hh ~] ~!6 [mt lt ht]>"),
  // Ghosty:
  s("<[~ [cb,sh] sh]>").velocity(0.1),
).bank("AkaiLinn");

let verse = stack(
  //Piano
  firstVerseArmonyPiano,
  // Melodic Guitar
  guitar,
  // Drums
  verseDrums,
  note("<[g3 a3 b3] a4>").sound("gm_choir_aahs"),
);

// ═══════════════════════ Chorus ══════════════════════
/*
In the chorus, we'll leaving the piano doing the waltzy rythm 
And the guitar can do the long chords
*/
const CHORUS_CHORDS = `<
  Em G F#m7 Bm
  Em G A7 D 
>`;

let BASS_CHORUS_VOICING = `<
  [0]!8

  [0,7]!8
>`;

let CHORUS_VOICING = `< 
  [
    0!4
  ]!2

  [
    [0,4,9]!2
    [0,6,9]
    [0,4,9]
  ]!2
>/4`;

let bassyChorus = diatonicVoicingByScale(
  BASS_CHORUS_VOICING,
  2,
  CHORUS_CHORDS,
  MODO,
)
  .struct(
    `<
      [x ~ ~]!4
    >`,
  )
  .sound("piano");

let armonicChorus = diatonicVoicingByScale(
  CHORUS_VOICING,
  3,
  CHORUS_CHORDS,
  MODO,
)
  .struct(
    `<
      [~ x x]!3
      [x@3]
    >`,
  )
  .swingBy(1 / 3, 6)
  .sound("piano");

let chumPamPamPiano = stack(
  // bassy
  bassyChorus,
  // Armonic
  armonicChorus,
);

// Guitar
let CHORUS_GUITAR_STRUCT = `<[x@3]!3 [~ x x]>`;

// Guitar divided by voices, creating voicings by scale
let chorusGuitar = stack(
  // Guitar bass
  diatonicVoicingByScale("[0,2]", 2, CHORUS_CHORDS, MODO).struct(
    CHORUS_GUITAR_STRUCT,
  ),
  // Guitar Mid
  diatonicVoicingByScale("<[0, 2]!4 [4,7]!4>", 3, CHORUS_CHORDS, MODO)
    .struct(CHORUS_GUITAR_STRUCT)
    .late(rand.range(0.01, 0.025)),
  // Guitar high
  diatonicVoicingByScale("<[0,4]!7 [2,4]>", 4, CHORUS_CHORDS, MODO)
    .struct(CHORUS_GUITAR_STRUCT)
    .late(rand.range(0.04, 0.06)),
).sound("gm_acoustic_guitar_nylon");

//Drums
let chorusDrums = stack(
  //kick
  s("<[bd ~ bd]!3 ~>"),
  // Box: cr, oh, ht,lt,mt, tb, cp
  s("<[~ tb tb]>").velocity(0.7),
  //Fills
  s("<~!3 [lt mt ht]>"),
  s("<[cr hh oh] ~!15>"),
  // Ghosty:
  s("<[cb ~] [[cb,sh] oh hh]>").velocity(0.4),
).bank("AkaiLinn");

// Same chords as intro, but more waltzy
let chorus = stack(
  // Walts
  chumPamPamPiano,
  // Armonic guitar
  chorusGuitar,
  // Drums
  chorusDrums,
);

// ═══════════════════════ Bridge ══════════════════════
/*
How about repeating the intro?
*/

let bridge = stack();

arrange(
  // Intro
  // [10, intro],
  // // Verse
  // [16, verse],
  // Chorus
  [16, chorus],
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/1.second_bridge.strudel.js`

```js
setcpm(160 / 3);

const MODO = "D:major";

let diatonicVoicingByScale = (
  gradeVoicing,
  rootNoteIndex,
  chordsToUse,
  baseScale,
) =>
  n(gradeVoicing).anchor(chordsToUse.rootNotes(rootNoteIndex)).scale(baseScale);

// ═══════════════════════ Chorus ══════════════════════
/*
In the chorus, we'll leaving the piano doing the waltzy rythm 
And the guitar can do the long chords
*/
const CHORUS_CHORDS = `<
  Em G F#m7 Bm
  Em G A7 D 
>`;

let BASS_CHORUS_VOICING = `<
  [0]!8

  [0,7]!8
>`;

let CHORUS_VOICING = `< 
  [
    0!4
  ]!2

  [
    [0,4,9]!2
    [0,6,9]
    [0,4,9]
  ]!2
>/4`;

let bassyChorus = diatonicVoicingByScale(
  BASS_CHORUS_VOICING,
  2,
  CHORUS_CHORDS,
  MODO,
)
  .struct(
    `<
      [x ~ ~]!4
    >`,
  )
  .sound("piano");

let armonicChorus = diatonicVoicingByScale(
  CHORUS_VOICING,
  3,
  CHORUS_CHORDS,
  MODO,
)
  .struct(
    `<
      [~ x x]!3
      [x@3]
    >`,
  )
  .swingBy(1 / 3, 6)
  .sound("piano");

let chumPamPamPiano = stack(
  // bassy
  bassyChorus,
  // Armonic
  armonicChorus,
);

// Guitar
let CHORUS_GUITAR_STRUCT = `<[x@3]!3 [~ x x]>`;

// Guitar divided by voices, creating voicings by scale
let chorusGuitar = stack(
  // Guitar bass
  diatonicVoicingByScale("[0,2]", 2, CHORUS_CHORDS, MODO).struct(
    CHORUS_GUITAR_STRUCT,
  ),
  // Guitar Mid
  diatonicVoicingByScale("<[0, 2]!4 [4,7]!4>", 3, CHORUS_CHORDS, MODO)
    .struct(CHORUS_GUITAR_STRUCT)
    .late(rand.range(0.01, 0.025)),
  // Guitar high
  diatonicVoicingByScale("<[0,4]!7 [2,4]>", 4, CHORUS_CHORDS, MODO)
    .struct(CHORUS_GUITAR_STRUCT)
    .late(rand.range(0.04, 0.06)),
).sound("gm_acoustic_guitar_nylon");

//Drums
let chorusDrums = stack(
  //kick
  s("<[bd ~ ~]!3 ~>"),
  // Box: cr, oh, ht,lt,mt, tb, cp
  s("<[~ sd sd]>").velocity(0.6),
  //Fills
  s("<~!3 tb>"),
  s("<[hh oh ~] ~!15>"),
  // Ghosty:
  s("<[sh ~]>").velocity(0.3),
).bank("AkaiLinn");

// Same chords as intro, but more waltzy
let chorus = stack(
  // Walts
  chumPamPamPiano,
  // Armonic guitar
  chorusGuitar,
  // Drums
  chorusDrums,
);

// ═══════════════════════ Bridge ══════════════════════
/*
How about repeating the intro?
*/

let bridge = stack();

arrange(
  // Intro
  // [10, intro],
  // // Verse
  // [16, verse],
  // Chorus
  [16, chorus],
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/2.from_score.strudel.js`

```js
setcpm(160 / 3);

/*
Louise, transcrita de la partitura:
  7. Partituras/2. Composiciones/Louise.musicxml (c.1–82)
  (hoy _legacy/partituras/versiones-viejas/Louise - primer intento.musicxml)
sobre la estructura de 0.first: mismas secciones, mismos sonidos, arrange() al final.

Un ciclo = un compás. Cada lista lleva una entrada por compás, con su número y
el acorde que marca la partitura, para leerla al lado de MuseScore.
cat(...lista) toca la entrada n en el ciclo n.

La guitarra se escribe una octava arriba de como suena: aquí va en altura real.
La partitura no tiene dinámicas: los velocity() de la batería son los de 0.first.
*/

// Guitarra rasgueada: la cuerda i (de grave a aguda) entra i × gap después.
// Es el .late() por voces de 0.first, pero cuerda por cuerda.
// Los acordes ocupan el compás entero y el ritmo lo pone .struct(), como en 0.first:
// arpWith() pierde el ataque de un acorde que no empieza en el 1.
let strum = (chords, rhythm, gap = 0.01) =>
  stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      chords
        .arpWith((haps) => haps[i] ?? silence)
        .struct(rhythm)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");

// ═══════════════════════ Intro (c.1–10) ══════════════════════
/*
La frase de 5 compases, dos veces. El motivo La–Sol–Fa#–Re–Fa# en los dos
primeros, y el vals (bajo en el 1, acorde que entra antes del 2) en los tres
siguientes. Piano y batería, sin guitarra.
*/

const INTRO_RIGHT = [
  "[A4 G4@2 F#4]", // c.1  D — el motivo
  "[D4@5 F#4@7]", // c.2  D/F#
  "[~ C#5@2 C#5]", // c.3  A
  "[~ [F#4,D5]@2 [F#4,D5]]", // c.4  Bm
  "[~ [D4,D5]@2 [D4,B4]]", // c.5  G
  "[A4 G4@2 F#4]", // c.6  D — el motivo otra vez
  "[D4@5 F#4@7]", // c.7  D
  "[~ [E4,C#5]@2 [E4,C#5]]", // c.8  A
  "[~ [D4,D5]@2 [D4,D5]]", // c.9  Bm
  "[~ [F#4,D5]@2 [E4,E5]]", // c.10 Gmaj7
];

const INTRO_LEFT = [
  "D3", // c.1
  "F#3", // c.2
  "[A2, [~ A3@2 A3]]", // c.3
  "[B2, [~ B3@2 B3]]", // c.4
  "[G2, [~ G3@2 G3]]", // c.5
  "[D2,A3]", // c.6
  "F#2", // c.7
  "[A2, [~ A3@2 A3]]", // c.8
  "[B2, [~ [F#3,B3]@2 [F#3,B3]]]", // c.9
  "[[G2@2 ~], [~ [G3,C#4]@2 [G3,C#4]]]", // c.10
];

let introPiano = stack(
  note(cat(...INTRO_RIGHT)),
  note(cat(...INTRO_LEFT)),
).sound("piano");

let introDrums = stack(
  // Bombo: cada frase de 5 empieza distinto
  s(
    "<~ [bd ~ ~] [bd ~ ~] [bd ~ bd] ~ [~ bd bd] [bd ~ ~] [bd ~ ~] [bd ~ bd] ~>",
  ),
  // Pandereta
  s("<~ [tb tb ~] [~ tb tb] [~ tb tb] [tb ~ ~]>"),
  // Shaker
  s("<~ [sh sh sh] [sh ~ ~] [~ [~ sh] ~] [~ [~ sh] ~]>").velocity(0.1),
  // Crash al empezar la segunda frase, toms al cerrar cada una
  s("<~!5 [cr ~ ~] ~!4>"),
  s("<~!4 [~ ~ [lt ht]]>"),
).bank("AkaiLinn");

let intro = stack(
  // Piano: el motivo y el vals
  introPiano,
  // Drums
  introDrums,
);

// ═══════════════════════ Verse (c.11–26) ══════════════════════
/*
El piano toca acordes largos y la guitarra rasguea uno por compás. En los
compases de cadencia (19, 21, 23, 25) el vals se reparte: piano en el 1,
guitarra en el 2 y el 3.
*/

const VERSE_RIGHT = [
  "[F#4,D5]", // c.11 Dmaj7
  "[[C#4,C#5]@3 [C#4,A4]]", // c.12 F#m
  "[E4,G4]", // c.13 C#dim
  "[[E4,C#5] [C#4,G5]]", // c.14 A · A7
  "[D4,F#5]", // c.15 Bm7
  "[[B3,D5]@3 [E4,B4]]", // c.16 G · G6
  "[F#4,C#5]", // c.17 Dmaj7
  "[[C#4,A4] [A4,E5]]", // c.18 F#m · F#m7
  "[[F#4,C#5] ~ ~]", // c.19 Dmaj7
  "[[C#4,C#5]@3 [C#4,A4]]", // c.20 F#m
  "[E4,G4]", // c.21 C#dim
  "[[E4,C#5] [C#4,G5]]", // c.22 A · A7
  "[D4,F#5]", // c.23 Bm7
  "[[B3,D5]@3 [E4,B4]]", // c.24 G · G6
  "[F#4,A4]", // c.25 D6
  "[[C#4,A4] [A4,E5]]", // c.26 F#m
];

const VERSE_LEFT = [
  "[D2,C#4]", // c.11
  "[F#3@3 G3]", // c.12 el G3 anticipa el C#dim
  "[C#3,E3]", // c.13
  "[A3 A3]", // c.14
  "B3", // c.15
  "[G3@3 F#3]", // c.16
  "A3", // c.17
  "[F#2 F#2]", // c.18
  "[[A2,D3] ~ ~]", // c.19
  "[A3@3 A3]", // c.20
  "[C#3,E3]", // c.21
  "[A3 A3]", // c.22
  "B3", // c.23
  "[G3@3 F#3]", // c.24
  "D3", // c.25
  "[[F#3,A3] [F#3,A3]]", // c.26
];

// De grave a aguda, en altura real
const VERSE_GUITAR = [
  "[E2,A2,D3,A3,C#4,F#4]", // c.11 Dmaj7
  "[F#2,A2,F#3,A3,F#4,C#5]", // c.12 F#m
  "[C#3,E3,C#4,G4]", // c.13 C#dim
  "[A2,C#3,A3,C#4,A4,E5]", // c.14 A
  "[B2,D3,F#4,B4,F#5]", // c.15 Bm7
  "[G2,B2,D4,G4,D5]", // c.16 G
  "[D3,A3,D4,A4]", // c.17 Dmaj7
  "[C#4,F#4,A4,C#5]", // c.18 F#m
  "[D3,F#3,D4,A4]", // c.19 Dmaj7 — en el 2 y el 3
  "[F#2,A2,F#3,A3,F#4,C#5]", // c.20 F#m
  "[C#3,E3,C#4,G4]", // c.21 C#dim — en el 2 y el 3
  "[A2,C#3,A3,C#4,A4,E5]", // c.22 A
  "[B3,F#4,B4,F#5]", // c.23 Bm7 — en el 2 y el 3
  "[G3,D4,G4,D5]", // c.24 G
  "[F#3,A3,D4,A4]", // c.25 D6 — en el 2 y el 3
  "[C#3,A3,C#4,F#4,A4,C#5]", // c.26 F#m
];

// El mismo de 0.first: la partitura lo conservó
let guitarStruct = `<
    [x@3]!8
    [~ x x]
    [x@3]
    [~ x x]
    [x@3]
    [~ x x]
    [x@3]
    [~ x x]
    [x@3]
>`;

let versePiano = stack(
  note(cat(...VERSE_RIGHT)),
  note(cat(...VERSE_LEFT)),
).sound("piano");

let verseGuitar = strum(note(cat(...VERSE_GUITAR)), guitarStruct);

let verseDrums = stack(
  // Kick
  s("<[bd ~ ~]!7 ~>"),
  // Pandereta en el 3
  s("[~ ~ tb]").velocity(0.7),
  // Hi-hat al abrir cada mitad, toms al cerrarla
  s("<[oh hh ~] ~!7>"),
  s("<~!7 [mt lt ht]>"),
  // Ghosty: shaker en el 2 y el 3, cencerro en el 2
  s("[~ [sh,cb] sh]").velocity(0.1),
).bank("AkaiLinn");

let verse = stack(
  // Piano
  versePiano,
  // Guitar
  verseGuitar,
  // Drums
  verseDrums,
);

// ═══════════════════════ Chorus (c.27–42) ══════════════════════
/*
El piano vuelve al vals: bajo en el 1, una nota en el 2 y el 3. La guitarra
toca el acorde largo y, cada cuatro compases, se queda con el 2 y el 3.
Las dos mitades cierran en A7 → D (c.33–34 y 41–42).
*/

const CHORUS_RIGHT = [
  "[~ E4 E4]", // c.27 Em
  "[~ G4 G4]", // c.28 G
  "[~ F#4 F#4]", // c.29 F#m7
  "~", // c.30 Bm
  "[~ E4 E4]", // c.31 Em
  "[~ G4 G4]", // c.32 G
  "[~@2 A4@3 A4]", // c.33 A7
  "~", // c.34 D
  "[~ [E4,E5] [E4,E5]]", // c.35 Em
  "[~ [D4,B4] [D4,B4]]", // c.36 G
  "[~ [E4,A4] [E4,A4]]", // c.37 F#m7
  "[D4,F#4]", // c.38 Bm
  "[~ G4 G4]", // c.39 Em
  "[~ [D4,B4] [D4,B4]]", // c.40 G
  "[~@2 [A4,C#5]@3 [A4,C#5]]", // c.41 A7
  "[D4,D5]", // c.42 D
];

const CHORUS_LEFT = [
  "[E3 ~ ~]", // c.27
  "[G3 ~ ~]", // c.28
  "[F#3 ~ ~]", // c.29
  "[B3, [B2 ~ ~]]", // c.30
  "[E3 ~ ~]", // c.31
  "[G3 ~ ~]", // c.32
  "[A2@2 E3@3 E3]", // c.33
  "[D3, [D2 ~ ~]]", // c.34
  "[[E2,E3] E3 E3]", // c.35
  "[[G2,G3] G3 G3]", // c.36
  "[[F#2,F#3] F#3 F#3]", // c.37
  "[B3, [[B2,B3] ~ ~]]", // c.38
  "[[E2,E3] [E3,B3] [E3,B3]]", // c.39
  "[[G2,G3] G3 G3]", // c.40
  "[[A2,G3]@2 G3@3 G3]", // c.41
  "[[D2,F#3]@4 D4 C#4]", // c.42 D–C# lleva al Bm del bridge
];

const CHORUS_GUITAR = [
  "[E2,G2,E3,G3]", // c.27 Em
  "[G2,B2,G3,B3]", // c.28 G
  "[F#2,A2,F#3,A3]", // c.29 F#m7
  "[B3,D4,B4,F#5]", // c.30 Bm — en el 2 y el 3
  "[E2,G2,E3,G3]", // c.31 Em
  "[G2,B2,G3,B3]", // c.32 G
  "[A2,C#3,E4,A4,E5]", // c.33 A7
  "[A3,D4,F#4,A4]", // c.34 D — en el 2 y el 3
  "[E2,G2,E3,G3]", // c.35 Em
  "[G2,B2,G3,B3]", // c.36 G
  "[F#2,A2,F#3,A3]", // c.37 F#m7
  "[B3,D4,B4,F#5]", // c.38 Bm — en el 2 y el 3
  "[E2,G2,E3,G3,E4]", // c.39 Em
  "[G2,B2,G3,B3]", // c.40 G
  "[A2,C#3,E4,A4,E5]", // c.41 A7
  "~", // c.42 D — la guitarra calla
];

let CHORUS_GUITAR_STRUCT = `<[x@3]!3 [~ x x]>`;

let chorusPiano = stack(
  note(cat(...CHORUS_RIGHT)),
  note(cat(...CHORUS_LEFT)),
).sound("piano");

let chorusGuitar = strum(note(cat(...CHORUS_GUITAR)), CHORUS_GUITAR_STRUCT);

let chorusDrums = stack(
  // Kick
  s("<[bd ~ ~]!3 ~>"),
  // Caja en el 2 y el 3, pandereta en el 1
  s("[~ sd sd]").velocity(0.6),
  s("[tb ~ ~]").velocity(0.7),
  // Palmas en el compás de cadencia
  s("<~!3 [cp ~ ~]>"),
  // Hi-hat solo al entrar
  s("<[hh oh ~] ~!15>"),
).bank("AkaiLinn");

let chorus = stack(
  // Walts
  chorusPiano,
  // Armonic guitar
  chorusGuitar,
  // Drums
  chorusDrums,
);

// ═══════════════════════ Bridge (c.43–50) ══════════════════════
/*
Piano solo. Tres compases nuevos (Bm · Em · E sobre La) con el bajo bajando
por quintas, y el G# del c.45 sube al La del motivo: vuelve la frase de la intro.
*/

const BRIDGE_RIGHT = [
  "[F#4,D5]", // c.43 Bm
  "[~ [G4,D5] [G4,D5]]", // c.44 Em
  "[~@2 [E4,B4]@3 G#4]", // c.45 E/A — el G# sube al La
  "[A4 G4@2 F#4]", // c.46 D — el motivo
  "[D4@5 F#4@7]", // c.47 D
  "[~ [E4,C#5] [E4,C#5]]", // c.48 A
  "[~@2 [F#4,D5]@3 [F#4,D5]]", // c.49 Bm
  "[[G4,D5]@3 [G4,D5] D4@2]", // c.50 Gmaj7
];

const BRIDGE_LEFT = [
  "[B3@2 D3@3 F#3]", // c.43
  "[[E3,B3] B3 B3]", // c.44
  "[[A2,E3] E3]", // c.45
  "[D2,D3]", // c.46
  "A2", // c.47
  "[A2, [~ A3 A3]]", // c.48
  "[B2, [~@2 B3@3 B3]]", // c.49
  "[G2@2 B3]", // c.50
];

let bridge = stack(note(cat(...BRIDGE_RIGHT)), note(cat(...BRIDGE_LEFT))).sound(
  "piano",
);

// ═══════════════════════ Verse 2 (c.51–66) ══════════════════════
/*
El verso 1 salvo estos compases. La batería es la misma.
*/

const VERSE2_RIGHT = [...VERSE_RIGHT];
VERSE2_RIGHT[0] = "F#4"; // c.51 sin el D5

const VERSE2_LEFT = [...VERSE_LEFT];
VERSE2_LEFT[0] = "[D3,C#4]"; // c.51 bajo D3 (V1: D2)
VERSE2_LEFT[1] = "[F#3@3 A3]"; // c.52 A3 (V1: G3)

const VERSE2_GUITAR = [...VERSE_GUITAR];
VERSE2_GUITAR[0] = "[A2,D3,A3,C#4,F#4]"; // c.51 sin el E2
VERSE2_GUITAR[2] = "[E2,G2,C#3,E3,C#4,G4]"; // c.53 C#dim desde E2
VERSE2_GUITAR[6] = "[F#2,A2,A3,D4,A4]"; // c.57 Dmaj7 sobre F#
VERSE2_GUITAR[7] = "[F#2,A2,C#4,F#4,A4,C#5]"; // c.58 F#m con bajo

let verse2 = stack(
  // Piano
  stack(note(cat(...VERSE2_RIGHT)), note(cat(...VERSE2_LEFT))).sound("piano"),
  // Guitar
  strum(note(cat(...VERSE2_GUITAR)), guitarStruct),
  // Drums
  verseDrums,
);

// ═══════════════════════ Chorus 2 (c.67–82) ══════════════════════
/*
Piano y guitarra iguales al coro 1. Cambia la batería: sin caja ni palmas,
bombo en el 1 y el 3, hi-hat cada dos compases y toms cada cuatro.
*/

let chorus2Drums = stack(
  // Kick
  s("<[bd ~ bd]!3 ~>"),
  // Pandereta en el 2 y el 3
  s("[~ tb tb]").velocity(0.7),
  // Crash al entrar, hi-hat cada dos compases
  s("<[cr hh oh] ~!15>"),
  s("<~ [~ oh hh]>"),
  // Toms en el compás de cadencia
  s("<~!3 [lt mt ht]>"),
  // Ghosty: cencerro en el 1, shaker cada dos compases
  s("[cb ~ ~]").velocity(0.4),
  s("<~ [sh ~ ~]>").velocity(0.4),
).bank("AkaiLinn");

let chorus2 = stack(
  // Walts
  chorusPiano,
  // Armonic guitar
  chorusGuitar,
  // Drums
  chorus2Drums,
);

stack(
  //RH
  n("<[]>"),
  // lh
  n("<[]>"),
).sound("piano");

// arrange(
//   // Intro
//   [10, intro],
//   // Verse
//   [16, verse],
//   // Chorus
//   [16, chorus],
//   // Bridge
//   [8, bridge],
//   // Verse 2
//   [16, verse2],
//   // Chorus 2
//   [16, chorus2],
//   // c.83–108 (B2, C3, outro) están vacíos en la partitura
// );
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/3.full_score.strudel.js`

```js
setcpm(160 / 3);

/*
Louise, transcrita entera de la partitura:
  7. Partituras/2. Composiciones/Louise.musicxml (c.1–88, commit 1ee5e33)
  (hoy _legacy/partituras/versiones-viejas/Louise - primer intento.musicxml)
Es 2.from_score más lo que la partitura tiene desde entonces: la batería
escrita, el final nuevo del coro 2 (c.80–81) y el B2 (c.82–88).

Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con su
número y el cifrado de la partitura, para leerla al lado de MuseScore.
cat(...lista) toca la entrada n en el ciclo n.

- La guitarra se escribe una octava arriba de como suena: aquí va en altura real.
- La batería sale de las ocho partes de percusión, una línea por instrumento y
  por velocidad. Los golpes entre paréntesis de la partitura son SUAVE o GHOST.
- Una ligadura no cruza la barra: la nota se corta al final del ciclo. Solo
  pasa con el F5 de la guitarra en c.85–87.
- La voz está vacía, y de c.89 a c.109 no hay nada escrito: no salen.

Para oír una sección sola, cambia el arrange() del final por su nombre (b2, chorus2…).
*/

// Velocidades de la partitura: su "dynamics" (% de 90) pasado a MIDI / 127
const FUERTE = 0.81; // 114 %
const NORMAL = 0.71; // 100 %, y los golpes sin velocidad propia
const SUAVE = 0.54; // 76 %
const GHOST = 0.27; // 38 %

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual.
// El strum de 2.from_score usaba arpWith(), que pierde todo lo que no empieza
// en el 1; aquí el ritmo va escrito en cada compás, así que se numera a mano.
let strum = (pat, gap = 0.01) => {
  let numbered = pat.withHaps((haps) => {
    let seen = new Map();
    return haps.map((hap) => {
      let begin = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = seen.get(begin) ?? 0;
      seen.set(begin, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numbered
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");
};

let piano = (right, left) =>
  stack(note(cat(...right)), note(cat(...left))).sound("piano");

let guitar = (list) => strum(note(cat(...list)));

// ═══════════════════════ Intro (c.1–10) ══════════════════════
/*
La frase de 5 compases, dos veces. El motivo La–Sol–Fa#–Re–Fa# en los dos
primeros, y el vals (bajo en el 1, acorde que entra antes del 2) en los tres
siguientes. Piano y batería, sin guitarra. La batería entra en el c.2: crash
al empezar la segunda frase, toms al cerrar cada una.
*/

const INTRO_RIGHT = [
  "[A4 G4@2 F#4]", // c.1  D — el motivo
  "[D4@5 F#4@7]", // c.2  D/F#
  "[~ C#5@2 C#5]", // c.3  A
  "[~ [F#4,D5]@2 [F#4,D5]]", // c.4  Bm
  "[~ [D4,D5]@2 [D4,B4]]", // c.5  G
  "[A4 G4@2 F#4]", // c.6  D — el motivo otra vez
  "[D4@5 F#4@7]", // c.7  D
  "[~ [E4,C#5]@2 [E4,C#5]]", // c.8  A
  "[~ [D4,D5]@2 [D4,D5]]", // c.9  Bm
  "[~ [F#4,D5]@2 [E4,E5]]", // c.10 Gmaj7
];

const INTRO_LEFT = [
  "D3", // c.1  D
  "F#3", // c.2  D/F#
  "[A2, [~ A3@2 A3]]", // c.3  A
  "[B2, [~ B3@2 B3]]", // c.4  Bm
  "[G2, [~ G3@2 G3]]", // c.5  G
  "[D2,A3]", // c.6  D
  "F#2", // c.7  D
  "[A2, [~ A3@2 A3]]", // c.8  A
  "[B2, [~ [F#3,B3]@2 [F#3,B3]]]", // c.9  Bm
  "[[G2@2 ~], [~ [G3,C#4]@2 [G3,C#4]]]", // c.10 Gmaj7
];

let introDrums = stack(
  // Bombo: cada frase de 5 empieza distinto
  s("<~ [bd ~ ~]!2 [bd ~ bd] ~ [~ bd bd] [bd ~ ~]!2 [bd ~ bd] ~>").velocity(FUERTE),
  // Toms al cerrar cada frase
  s("<~!4 [~ ~ [lt ht]]>").velocity(FUERTE),
  // Crash al empezar la segunda frase
  s("<~!5 [cr ~ ~] ~!4>").velocity(FUERTE),
  // Pandereta
  s("<~ [tb tb ~] [~ tb tb]!2 [tb ~ ~]>").velocity(FUERTE),
  // Shaker
  s("<~ [sh sh sh] [sh ~ ~] [~ [~ sh] ~]!2>").velocity(GHOST),
).bank("AkaiLinn");

let intro = stack(
  // Piano: el motivo y el vals
  piano(INTRO_RIGHT, INTRO_LEFT),
  // Drums
  introDrums,
);

// ═══════════════════════ Verse (c.11–26) ══════════════════════
/*
El piano toca acordes largos y la guitarra rasguea uno por compás. En los
compases de cadencia (19, 21, 23, 25) el vals se reparte: el piano ataca en el 1
y la guitarra entra en el 2 y el 3.
*/

const VERSE_RIGHT = [
  "[F#4,D5]", // c.11 Dmaj7
  "[[C#4,C#5]@3 [C#4,A4]]", // c.12 F#m · D
  "[E4,G4]", // c.13 C#dim
  "[[E4,C#5] [C#4,G5]]", // c.14 A · A7
  "[D4,F#5]", // c.15 Bm7
  "[[B3,D5]@3 [E4,B4]]", // c.16 G · G6
  "[F#4,C#5]", // c.17 Dmaj7
  "[[C#4,A4] [A4,E5]]", // c.18 F#m · F#m7
  "[[F#4,C#5] ~@2]", // c.19 Dmaj7
  "[[C#4,C#5]@3 [C#4,A4]]", // c.20 F#m
  "[E4,G4]", // c.21 C#dim
  "[[E4,C#5] [C#4,G5]]", // c.22 A · A7
  "[D4,F#5]", // c.23 Bm7
  "[[B3,D5]@3 [E4,B4]]", // c.24 G · G6
  "[F#4,A4]", // c.25 D6
  "[[C#4,A4] [A4,E5]]", // c.26 F#m
];

const VERSE_LEFT = [
  "[D2,C#4]", // c.11 Dmaj7
  "[F#3@3 G3]", // c.12 F#m · D — el G3 anticipa el C#dim
  "[C#3,E3]", // c.13 C#dim
  "[A3 A3]", // c.14 A · A7
  "B3", // c.15 Bm7
  "[G3@3 F#3]", // c.16 G · G6
  "A3", // c.17 Dmaj7
  "[F#2 F#2]", // c.18 F#m · F#m7
  "[[A2,D3] ~@2]", // c.19 Dmaj7
  "[A3@3 A3]", // c.20 F#m
  "[C#3,E3]", // c.21 C#dim
  "[A3 A3]", // c.22 A · A7
  "B3", // c.23 Bm7
  "[G3@3 F#3]", // c.24 G · G6
  "D3", // c.25 D6
  "[[F#3,A3] [F#3,A3]]", // c.26 F#m
];

// De grave a aguda, en altura real
const VERSE_GUITAR = [
  "[E2,A2,D3,A3,C#4,F#4]", // c.11 Dmaj7
  "[F#2,A2,F#3,A3,F#4,C#5]", // c.12 F#m · D
  "[C#3,E3,C#4,G4]", // c.13 C#dim
  "[A2,C#3,A3,C#4,A4,E5]", // c.14 A · A7
  "[B2,D3,F#4,B4,F#5]", // c.15 Bm7
  "[G2,B2,D4,G4,D5]", // c.16 G · G6
  "[D3,A3,D4,A4]", // c.17 Dmaj7
  "[C#4,F#4,A4,C#5]", // c.18 F#m · F#m7
  "[~ [D3,F#3,D4,A4] [D3,F#3,D4,A4]]", // c.19 Dmaj7 — en el 2 y el 3
  "[F#2,A2,F#3,A3,F#4,C#5]", // c.20 F#m
  "[~ [C#3,E3,C#4,G4] [C#3,E3,C#4,G4]]", // c.21 C#dim — en el 2 y el 3
  "[A2,C#3,A3,C#4,A4,E5]", // c.22 A · A7
  "[~ [B3,F#4,B4,F#5] [B3,F#4,B4,F#5]]", // c.23 Bm7 — en el 2 y el 3
  "[G3,D4,G4,D5]", // c.24 G · G6
  "[~ [F#3,A3,D4,A4] [F#3,A3,D4,A4]]", // c.25 D6 — en el 2 y el 3
  "[C#3,A3,C#4,F#4,A4,C#5]", // c.26 F#m
];

let verseDrums = stack(
  // Bombo en el 1, menos al cerrar cada mitad
  s("<[bd ~ ~]!7 ~>").velocity(FUERTE),
  // Toms al cerrar cada mitad
  s("<~!7 [mt lt ht]>").velocity(FUERTE),
  // Hi-hat al abrir cada mitad
  s("<[oh hh ~] ~!7>").velocity(FUERTE),
  // Pandereta en el 3
  s("[~ ~ tb]").velocity(NORMAL),
  // Ghosty: cencerro en el 2
  s("[~ cb ~]").velocity(GHOST),
  // Ghosty: shaker en el 2 y el 3
  s("[~ sh sh]").velocity(GHOST),
).bank("AkaiLinn");

let verse = stack(
  // Piano
  piano(VERSE_RIGHT, VERSE_LEFT),
  // Guitar
  guitar(VERSE_GUITAR),
  // Drums
  verseDrums,
);

// ═══════════════════════ Chorus (c.27–42) ══════════════════════
/*
El piano vuelve al vals: bajo en el 1, una nota en el 2 y el 3. La guitarra
toca el acorde largo y, cada cuatro compases, se queda con el 2 y el 3.
Las dos mitades cierran en A7 → D (c.33–34 y 41–42).
*/

const CHORUS_RIGHT = [
  "[~ E4 E4]", // c.27 Em
  "[~ G4 G4]", // c.28 G
  "[~ F#4 F#4]", // c.29 F#m7
  "~", // c.30 Bm
  "[~ E4 E4]", // c.31 Em
  "[~ G4 G4]", // c.32 G
  "[~@2 A4@3 A4]", // c.33 A7
  "~", // c.34 D
  "[~ [E4,E5] [E4,E5]]", // c.35 Em
  "[~ [D4,B4] [D4,B4]]", // c.36 G
  "[~ [E4,A4] [E4,A4]]", // c.37 F#m7
  "[D4,F#4]", // c.38 Bm
  "[~ G4 G4]", // c.39 Em
  "[~ [D4,B4] [D4,B4]]", // c.40 G
  "[~@2 [A4,C#5]@3 [A4,C#5]]", // c.41 A7
  "[D4,D5]", // c.42 D
];

const CHORUS_LEFT = [
  "[E3 ~@2]", // c.27 Em
  "[G3 ~@2]", // c.28 G
  "[F#3 ~@2]", // c.29 F#m7
  "[B3, [B2 ~@2]]", // c.30 Bm
  "[E3 ~@2]", // c.31 Em
  "[G3 ~@2]", // c.32 G
  "[A2@2 E3@3 E3]", // c.33 A7
  "[D3, [D2 ~@2]]", // c.34 D
  "[[E2,E3] E3 E3]", // c.35 Em
  "[[G2,G3] G3 G3]", // c.36 G
  "[[F#2,F#3] F#3 F#3]", // c.37 F#m7
  "[B3, [[B2,B3] ~@2]]", // c.38 Bm
  "[[E2,E3] [E3,B3] [E3,B3]]", // c.39 Em
  "[[G2,G3] G3 G3]", // c.40 G
  "[[A2,G3]@2 G3@3 G3]", // c.41 A7
  "[[D2,F#3]@4 D4 C#4]", // c.42 D — D–C# lleva al Bm del bridge
];

const CHORUS_GUITAR = [
  "[E2,G2,E3,G3]", // c.27 Em
  "[G2,B2,G3,B3]", // c.28 G
  "[F#2,A2,F#3,A3]", // c.29 F#m7
  "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.30 Bm — en el 2 y el 3
  "[E2,G2,E3,G3]", // c.31 Em
  "[G2,B2,G3,B3]", // c.32 G
  "[A2,C#3,E4,A4,E5]", // c.33 A7
  "[~ [A3,D4,F#4,A4] [A3,D4,F#4,A4]]", // c.34 D — en el 2 y el 3
  "[E2,G2,E3,G3]", // c.35 Em
  "[G2,B2,G3,B3]", // c.36 G
  "[F#2,A2,F#3,A3]", // c.37 F#m7
  "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.38 Bm — en el 2 y el 3
  "[E2,G2,E3,G3,E4]", // c.39 Em
  "[G2,B2,G3,B3]", // c.40 G
  "[A2,C#3,E4,A4,E5]", // c.41 A7
  "~", // c.42 D — la guitarra calla
];

let chorusDrums = stack(
  // Bombo en el 1, menos en el compás de cadencia
  s("<[bd ~ ~]!3 ~>").velocity(FUERTE),
  // Caja en el 2 y el 3
  s("[~ sd sd]").velocity(FUERTE),
  // Hi-hat solo al entrar
  s("<[hh oh ~] ~!15>").velocity(FUERTE),
  // Pandereta en el 1
  s("[tb ~ ~]").velocity(FUERTE),
  // Palmas en el compás de cadencia
  s("<~!3 [cp ~ ~]>").velocity(FUERTE),
).bank("AkaiLinn");

let chorus = stack(
  // Walts
  piano(CHORUS_RIGHT, CHORUS_LEFT),
  // Armonic guitar
  guitar(CHORUS_GUITAR),
  // Drums
  chorusDrums,
);

// ═══════════════════════ Bridge (c.43–50) ══════════════════════
/*
Piano solo. Tres compases nuevos (Bm · Em · E sobre La) con el bajo bajando
por quintas, y el G# del c.45 sube al La del motivo: vuelve la frase de la intro.
*/

const BRIDGE_RIGHT = [
  "[F#4,D5]", // c.43 Bm
  "[~ [G4,D5] [G4,D5]]", // c.44 Em
  "[~@2 [E4,B4]@3 G#4]", // c.45 E — el G# sube al La
  "[A4 G4@2 F#4]", // c.46 D — el motivo
  "[D4@5 F#4@7]", // c.47 D
  "[~ [E4,C#5] [E4,C#5]]", // c.48 A
  "[~@2 [F#4,D5]@3 [F#4,D5]]", // c.49 Bm
  "[[G4,D5]@3 [G4,D5] D4@2]", // c.50 Gmaj7
];

const BRIDGE_LEFT = [
  "[B3@2 D3@3 F#3]", // c.43 Bm
  "[[E3,B3] B3 B3]", // c.44 Em
  "[[A2,E3] E3]", // c.45 E
  "[D2,D3]", // c.46 D
  "A2", // c.47 D
  "[A2, [~ A3 A3]]", // c.48 A
  "[B2, [~@2 B3@3 B3]]", // c.49 Bm
  "[[G2@2 ~], [~@2 B3]]", // c.50 Gmaj7
];

let bridge = piano(BRIDGE_RIGHT, BRIDGE_LEFT);

// ═══════════════════════ Verse 2 (c.51–66) ══════════════════════
/*
El verso 1 salvo estos compases. La batería es la misma.
*/

const VERSE2_RIGHT = [...VERSE_RIGHT];
VERSE2_RIGHT[0] = "F#4"; // c.51 (V1: [F#4,D5])

const VERSE2_LEFT = [...VERSE_LEFT];
VERSE2_LEFT[0] = "[D3,C#4]"; // c.51 (V1: [D2,C#4])
VERSE2_LEFT[1] = "[F#3@3 A3]"; // c.52 (V1: [F#3@3 G3])

const VERSE2_GUITAR = [...VERSE_GUITAR];
VERSE2_GUITAR[0] = "[A2,D3,A3,C#4,F#4]"; // c.51 (V1: [E2,A2,D3,A3,C#4,F#4])
VERSE2_GUITAR[2] = "[E2,G2,C#3,E3,C#4,G4]"; // c.53 (V1: [C#3,E3,C#4,G4])
VERSE2_GUITAR[6] = "[F#2,A2,A3,D4,A4]"; // c.57 (V1: [D3,A3,D4,A4])
VERSE2_GUITAR[7] = "[F#2,A2,C#4,F#4,A4,C#5]"; // c.58 (V1: [C#4,F#4,A4,C#5])

let verse2 = stack(
  // Piano
  piano(VERSE2_RIGHT, VERSE2_LEFT),
  // Guitar
  guitar(VERSE2_GUITAR),
  // Drums
  verseDrums,
);

// ═══════════════════════ Chorus 2 (c.67–81) ══════════════════════
/*
Quince compases: el C2 no cierra. Piano y guitarra son los del coro 1 hasta el
c.79; en el 80–81 cambia el piano (Gmaj13 · A7) y el A7 no resuelve en D: el
c.82 ya es el B2.
La batería es otra: bombo en el 1 y el 3 (en los tres tiempos del 76 al 80),
caja en el 2 y el 3, la pandereta entra en el c.72 y el hi-hat va cada dos compases.
*/

const CHORUS2_RIGHT = CHORUS_RIGHT.slice(0, 15);
CHORUS2_RIGHT[13] = "[~ [E4,D5] [F#4,D5]]"; // c.80 (C1: [~ [D4,B4] [D4,B4]])
CHORUS2_RIGHT[14] = "[~ [G4,C#5] [A4,E5]]"; // c.81 (C1: [~@2 [A4,C#5]@3 [A4,C#5]])

const CHORUS2_LEFT = CHORUS_LEFT.slice(0, 15);
CHORUS2_LEFT[13] = "[[G2,F#3] [E3,G3] [F#3,B3]]"; // c.80 (C1: [[G2,G3] G3 G3])
CHORUS2_LEFT[14] = "[[A2,E3] [C#3,E3] [C#3,E3]]"; // c.81 (C1: [[A2,G3]@2 G3@3 G3])

const CHORUS2_GUITAR = CHORUS_GUITAR.slice(0, 15);

let chorus2Drums = stack(
  // Bombo
  s("<[bd ~ bd]!3 ~ [bd ~ bd]!2 ~ [bd ~ bd]!2 [bd bd bd]!5 ~>").velocity(FUERTE),
  // Caja en el 2 y el 3, menos en el último compás
  s("<[~ sd sd]!14 ~>").velocity(FUERTE),
  // Toms en 70, 73 y 81
  s("<~!3 [lt mt ht] ~!2 [lt mt ht] ~!7 [lt mt ht]>").velocity(FUERTE),
  // Crash y abierto al entrar
  s("<[cr oh ~] ~!14>").velocity(FUERTE),
  // …y cerrado en el 3
  s("<[~ ~ hh] ~!14>").velocity(NORMAL),
  // Hi-hat suave cada dos compases, seguido al final
  s(`<
      ~ [~ oh hh] ~ [~ oh hh]
      ~ [~ oh hh] ~ [~ oh hh]
      ~ [~ oh hh] ~ [~ oh hh]
      [~ oh hh]!3
    >`).velocity(SUAVE),
  // Pandereta desde el c.72
  s("<~!5 [tb tb ~]!2 [~ tb tb]!7 ~>").velocity(NORMAL),
  // Ghosty: cencerro en el 1
  s("[cb ~ ~]").velocity(SUAVE),
  // Ghosty: shaker cada dos compases
  s("<~ [sh ~ ~]>").velocity(SUAVE),
).bank("AkaiLinn");

let chorus2 = stack(
  // Walts
  piano(CHORUS2_RIGHT, CHORUS2_LEFT),
  // Armonic guitar
  guitar(CHORUS2_GUITAR),
  // Drums
  chorus2Drums,
);

// ═══════════════════════ B2 (c.82–88) ══════════════════════
/*
La armadura pasa a un bemol. El c.82 pone E♭7 donde el coro habría cerrado en D,
con toda la batería a la vez; desde el 83 la batería calla y quedan piano y
guitarra. La guitarra deja el rasgueo y toca línea. 87 y 88 no tienen cifrado.
*/

const B2_RIGHT = [
  "[Bb4,Eb5]", // c.82 E♭7
  "[[F4,D5]@2 ~]", // c.83 B♭
  "[G4@2 ~]", // c.84 Gm
  "[C5 [E5,C6] F5]", // c.85 Am
  "G5", // c.86 Csus4
  "[B4@4 A4 C5]", // c.87 (sin cifrado)
  "[Bb4@2 ~]", // c.88 (sin cifrado)
];

const B2_LEFT = [
  "[[Eb2,Db3]@3 Eb3 Bb3 G3]", // c.82 E♭7
  "[Bb2,F3]", // c.83 B♭
  "[[G2,D3]@2 ~]", // c.84 Gm
  "[[A2,E3]@2 ~]", // c.85 Am
  "[[C3,F3]@2 ~]", // c.86 Csus4
  "[[G2,G3]@2 ~]", // c.87 (sin cifrado)
  "[[C3,G3]@2 ~]", // c.88 (sin cifrado)
];

const B2_GUITAR = [
  "~", // c.82 E♭7
  "[[F4,D5]@4 Bb4 D5]", // c.83 B♭
  "[~@2 F5@2 G5 Bb5]", // c.84 Gm
  "[[A4,E5,A5]@4 G5 F5]", // c.85 Am — el F5 se liga al 86
  "[~@2 Bb4 D5 E5 F5]", // c.86 Csus4 — el F5 se liga al 87
  "[[D4,B4]@2 A4 [F4,C5]@3]", // c.87 (sin cifrado)
  "[[C4,E4,C5,G5] ~@2]", // c.88 (sin cifrado)
];

let b2Drums = stack(
  // Todo en el c.82: bombo en los tres tiempos
  s("<[bd bd bd] ~!6>").velocity(FUERTE),
  // Toms
  s("<[~ mt ht] ~!6>").velocity(FUERTE),
  // Crash y abierto
  s("<[cr oh ~] ~!6>").velocity(FUERTE),
  // Cerrado
  s("<[~ ~ hh] ~!6>").velocity(NORMAL),
  // Pandereta
  s("<[~ tb tb] ~!6>").velocity(NORMAL),
  // Palmas
  s("<[~ cp [cp cp]] ~!6>").velocity(NORMAL),
  // Cencerro
  s("<[~ cb ~] ~!6>").velocity(NORMAL),
  // Cencerro suave
  s("<[~ ~ cb] ~!6>").velocity(SUAVE),
  // Shaker
  s("<[~ sh ~] ~!6>").velocity(NORMAL),
  // Shaker suave
  s("<[[~ sh] ~ ~] ~!6>").velocity(SUAVE),
).bank("AkaiLinn");

let b2 = stack(
  // Piano
  piano(B2_RIGHT, B2_LEFT),
  // Guitar
  guitar(B2_GUITAR),
  // Drums
  b2Drums,
);

arrange(
  // Intro
  [10, intro],
  // Verse
  [16, verse],
  // Chorus
  [16, chorus],
  // Bridge
  [8, bridge],
  // Verse 2
  [16, verse2],
  // Chorus 2
  [15, chorus2],
  // B2
  [7, b2],
  // c.89–109 están vacíos en la partitura
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/6.melancolica.strudel.js`

```js
setcpm(160 / 3);

/*
Louise, la partitura entera en Strudel: violín, guitarra, piano y batería.

Convenciones
  - Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con
    su número y el cifrado de la partitura, para leerla al lado de MuseScore.
  - Todo va en altura real: la guitarra se escribe una octava arriba de como
    suena.
  - Una sección que repite otra es una variante(): solo se escribe lo que
    cambia. Si cambias un compás del V1, el V2 cambia con él, salvo en los
    compases que el V2 tiene propios.
  - Comillas dobles y backticks son mini-notación. Los textos de JavaScript
    (nombres de sonidos, mensajes) van con comillas simples.
*/

// ═══════════════════════ 1. Sonido y mezcla ══════════════════════

const SONIDO = {
  arco: "gm_violin",
  pizz: "gm_pizzicato_strings",
  guitarra: "gm_acoustic_guitar_nylon",
  piano: "piano",
  kit: "AkaiLinn",
};

// Volumen de cada instrumento: 0 lo apaga
const MEZCLA = { violin: 1, guitarra: 1, piano: 1, bateria: 1 };

// ═══════════════════════ 2. Matices ══════════════════════
/*
Las velocidades de MuseScore, en MIDI / 127. Una marca vale desde su compás
hasta la siguiente; lo que la partitura no marca suena mf. Los reguladores
(< crescendo, > diminuendo) no se aplican: van anotados al lado.
*/

const MATIZ = { p: 0.39, mp: 0.5, mf: 0.63, f: 0.76, ff: 0.88 };

// Batería: las velocidades de cada golpe, su "dynamics" (% de 90) / 127
const FUERTE = 0.81; // 114 %
const NORMAL = 0.71; // 100 %, y los golpes sin velocidad propia
const SUAVE = 0.54; // 76 %
const GHOST = 0.27; // 38 %

const DINAMICA = {
  violin: {
    1: MATIZ.mf,
    27: MATIZ.p, // < hasta el 30
    51: MATIZ.mp, // < en el 51
    67: MATIZ.p, // < hasta el 70
    75: MATIZ.mp, // < hasta el 79 · < al final del 82, hasta el f
    83: MATIZ.f, // escrita al final del 82 · > del 83 al 91
    91: MATIZ.mp, // (la partitura le da la velocidad de p) · < al final del 92, hasta el mf
    93: MATIZ.mf, // escrita al final del 92 · > del 98 al 109; su p cae en el 109, con el violín ya callado
  },
  guitarra: {
    1: MATIZ.mf,
  },
  piano: {
    1: MATIZ.mf,
    35: MATIZ.mf, // (la partitura le da la velocidad de mp)
    43: MATIZ.f, // < hasta el 49 · > del 51 al 52
    52: MATIZ.mp, // < hasta el 66 · > del 67 al 73
    73: MATIZ.mp, // < hasta el 82
    83: MATIZ.f, // < del 90 al 91
    90: MATIZ.ff,
    94: MATIZ.mf, // < hasta el 95 · en el 99 hay una dinámica vacía
  },
};

// Pizz. y arco del violín
const TECNICA = {
  1: SONIDO.arco,
  11: SONIDO.pizz,
  27: SONIDO.arco,
  51: SONIDO.pizz,
  67: SONIDO.arco,
};

// ═══════════════════════ 3. Herramientas ══════════════════════

// Una entrada por compás → un compás por ciclo
let compases = (lista) => cat(...lista);

// Ligadura por encima de la barra: lo que sigue sonando al final del compás
// dura `semis` semicorcheas más. El compás siguiente lleva silencio ahí.
let ligar = (semis, compas) =>
  reify(compas).withHap((hap) =>
    hap.whole.end.eq(hap.whole.begin.sam().add(1))
      ? new Hap(
          new TimeSpan(
            hap.whole.begin,
            hap.whole.end.add(Fraction(semis).div(12)),
          ),
          hap.part,
          hap.value,
          hap.context,
        )
      : hap,
  );

// La marca que vale en un compás: la última escrita en él o antes
let currentMark = (objectComp, currentComp) =>
  objectComp[
    Math.max(
      ...Object.keys(objectComp)
        .map(Number)
        .filter((c) => c <= currentComp),
    )
  ];

// Un mapa { compás: valor } leído compás por compás, desde `desde` y durante `n`
let marcas = (mapa, desde, length) =>
  cat(...Array.from({ length }, (_, i) => currentMark(mapa, desde + i)));

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual.
let rasgueo = (pat, gap = 0.01) => {
  let numeradas = pat.withHaps((haps) => {
    let vistas = new Map();
    return haps.map((hap) => {
      let inicio = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = vistas.get(inicio) ?? 0;
      vistas.set(inicio, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numeradas
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  );
};

// ── Secciones ──
// Una sección es un objeto: desde qué compás empieza y una lista por parte
// (violin, guitarra, der, izq), más su batería. La parte que no está, calla.

const PARTES = ["violin", "guitarra", "der", "izq"];

// Cuántos compases dura una sección; todas sus partes tienen que coincidir
let largo = (sec) => {
  let largos = [
    ...new Set(
      PARTES.filter((parte) => sec[parte]).map((parte) => sec[parte].length),
    ),
  ];
  if (largos.length !== 1) {
    throw new Error(
      "La sección del c." +
        sec.desde +
        " tiene partes de " +
        largos.join(" y ") +
        " compases",
    );
  }
  return largos[0];
};

// Una sección que repite otra. `cambios` va por parte:
//   { compás: "nuevo" }   cambia esos compases (con los números de la nueva)
//   [ … ], un patrón o null   reemplaza la parte entera
// Lo que no está en `cambios` es lo de la base, batería incluida.
let variante = (base, desde, cambios = {}) => {
  let sec = { ...base, desde };
  for (let [parte, cambio] of Object.entries(cambios)) {
    let parche = cambio && !Array.isArray(cambio) && !isPattern(cambio);
    if (!parche) {
      sec[parte] = cambio;
      continue;
    }
    for (let c of Object.keys(cambio).map(Number)) {
      if (c < desde || c >= desde + base[parte].length) {
        throw new Error(
          "variante: el c." +
            c +
            " no está en la sección que empieza en el c." +
            desde,
        );
      }
    }
    sec[parte] = base[parte].map((compas, i) => cambio[desde + i] ?? compas);
  }
  return sec;
};

// ── Instrumentos ──

let violin = (sec) =>
  note(compases(sec.violin))
    .sound(marcas(TECNICA, sec.desde, largo(sec)))
    .velocity(marcas(DINAMICA.violin, sec.desde, largo(sec)))
    .gain(MEZCLA.violin);

// Rasgueada, salvo en las secciones con `rasgueo: false` (acordes en bloque)
let guitarra = (sec) => {
  let notas = note(compases(sec.guitarra));
  return (sec.rasgueo === false ? notas : rasgueo(notas))
    .sound(SONIDO.guitarra)
    .velocity(marcas(DINAMICA.guitarra, sec.desde, largo(sec)))
    .gain(MEZCLA.guitarra);
};

let piano = (sec) =>
  stack(note(compases(sec.der)), note(compases(sec.izq)))
    .sound(SONIDO.piano)
    .velocity(marcas(DINAMICA.piano, sec.desde, largo(sec)))
    .gain(MEZCLA.piano);

// Una línea de batería: el patrón con sus muestras y una velocidad.
// Muestras: bd bombo · sd caja · hh oh cr hi-hat cerrado, abierto y crash ·
// lt mt ht toms · tb pandereta · cb cencerro · cp palmas · sh shaker
let golpe = (patron, vel = NORMAL) => s(patron).velocity(vel);

// Las líneas de una sección, con el kit y el volumen de la mezcla
let bateria = (...lineas) =>
  stack(...lineas)
    .bank(SONIDO.kit)
    .gain(MEZCLA.bateria);

// Todo lo que toca una sección
let tocar = (sec) =>
  stack(
    sec.violin ? violin(sec) : silence,
    sec.guitarra ? guitarra(sec) : silence,
    sec.der ? piano(sec) : silence,
    sec.bateria ?? silence,
  );

// Las secciones una tras otra, cada una con sus compases
let forma = (...secciones) =>
  arrange(...secciones.map((sec) => [largo(sec), tocar(sec)]));

// ═══════════════════════ 4. Partes que vuelven ══════════════════════

// El motivo La–Sol–Fa#–Re–Fa#, dos compases de mano derecha. Abre las dos
// frases de la intro (c.1 y c.6) y vuelve en el puente (c.46).
const MOTIVO = ["[A4 G4@2 F#4]", "[D4@5 F#4@7]"];

// ═══════════════════════ 5. Batería ══════════════════════
/*
Sale de las ocho partes de percusión de la partitura: una línea por
instrumento y por velocidad. Dentro de < > va una entrada por compás y, al
acabarse, vuelve a empezar: una línea de 8 compases en una sección de 16 suena
dos veces.
El puente, el C3 y el outro no tienen batería. Para darles una, escríbela
aquí y ponla en su sección (bateria: BATERIA.c3).
*/

const BATERIA = {
  // Intro (c.1–10): entra en el c.2. Dos frases de 5
  intro: bateria(
    // Bombo: cada frase empieza distinto
    golpe(
      "<~ [bd ~ ~]!2 [bd ~ bd] ~ [~ bd bd] [bd ~ ~]!2 [bd ~ bd] ~>",
      FUERTE,
    ),
    // Crash al empezar la segunda frase
    golpe("<~!5 [cr ~ ~] ~!4>", FUERTE),
    // Toms al cerrar cada frase
    golpe("<~!4 [~ ~ [lt ht]]>", FUERTE),
    // Pandereta
    golpe("<~ [tb tb ~] [~ tb tb]!2 [tb ~ ~]>", FUERTE),
    // Shaker
    golpe("<~ [sh sh sh] [sh ~ ~] [~ [~ sh] ~]!2>", GHOST),
  ),

  // V1 y V2 (c.11–26, 51–66): dos mitades de 8
  verso: bateria(
    // Bombo en el 1, menos al cerrar cada mitad
    golpe("<[bd ~ ~]!7 ~>", FUERTE),
    // Hi-hat al abrir cada mitad
    golpe("<[oh hh ~] ~!7>", FUERTE),
    // Toms al cerrar cada mitad
    golpe("<~!7 [mt lt ht]>", FUERTE),
    // Pandereta en el 3
    golpe("[~ ~ tb]", NORMAL),
    // Cencerro en el 2
    golpe("[~ cb ~]", GHOST),
    // Shaker en el 2 y el 3
    golpe("[~ sh sh]", GHOST),
  ),

  // C1 (c.27–42): cuatro frases de 4
  coro: bateria(
    // Bombo en el 1, menos en el compás de cadencia
    golpe("<[bd ~ ~]!3 ~>", FUERTE),
    // Caja en el 2 y el 3
    golpe("[~ sd sd]", FUERTE),
    // Hi-hat solo al entrar
    golpe("<[hh oh ~] ~!15>", FUERTE),
    // Pandereta en el 1
    golpe("[tb ~ ~]", FUERTE),
    // Palmas en el compás de cadencia
    golpe("<~!3 [cp ~ ~]>", FUERTE),
  ),

  // C2 (c.67–82): 16 compases escritos, uno por columna, en filas de 4
  coro2: bateria(
    // Bombo en el 1 y el 3, en los tres tiempos del 76 al 81; calla en 70, 73 y 82
    golpe(
      `<
      [bd ~ bd] [bd ~ bd] [bd ~ bd] ~
      [bd ~ bd] [bd ~ bd] ~         [bd ~ bd]
      [bd ~ bd] [bd bd bd] [bd bd bd] [bd bd bd]
      [bd bd bd] [bd bd bd] [bd bd bd] ~
    >`,
      FUERTE,
    ),
    // Caja en el 2 y el 3, y un redoble suave en el 82
    golpe("<[~ sd sd]!15 ~>", FUERTE),
    golpe("<~!15 [~ [sd sd] ~]>", NORMAL),
    // Crash y abierto al entrar…
    golpe("<[cr oh ~] ~!15>", FUERTE),
    // …y cerrado en el 3
    golpe("<[~ ~ hh] ~!15>", NORMAL),
    // Hi-hat suave cada dos compases, seguido del 78 al 81
    golpe(
      `<
      ~         [~ oh hh] ~         [~ oh hh]
      ~         [~ oh hh] ~         [~ oh hh]
      ~         [~ oh hh] ~         [~ oh hh]
      [~ oh hh] [~ oh hh] [~ oh hh] ~
    >`,
      SUAVE,
    ),
    // Toms en 70 y 73; en el 82, grave en el 1 y medio en el 3
    golpe("<~!3 [lt mt ht] ~!2 [lt mt ht] ~!8 [lt ~ ~]>", FUERTE),
    golpe("<~!15 [~ ~ mt]>", NORMAL),
    // Pandereta desde el c.72
    golpe("<~!5 [tb tb ~]!2 [~ tb tb]!8 ~>", NORMAL),
    // Cencerro en el 1
    golpe("[cb ~ ~]", SUAVE),
    // Shaker cada dos compases, seguido en el 80 y el 81
    golpe(
      `<
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] [sh ~ ~] ~
    >`,
      SUAVE,
    ),
  ),

  // B2 (c.83–92): todo a la vez en el c.83, y después calla
  b2: bateria(
    golpe("<[bd bd bd] ~!9>", FUERTE),
    golpe("<[oh hh hh] ~!9>", NORMAL),
    golpe("<[ht ~ ~] ~!9>", FUERTE),
    golpe("<[tb ~ ~] ~!9>", NORMAL),
    golpe("<[cb cb ~] ~!9>", NORMAL),
    golpe("<[~ ~ cb] ~!9>", SUAVE),
    golpe("<[cp ~ ~] ~!9>", NORMAL),
    golpe("<[sh sh ~] ~!9>", NORMAL),
  ),
};

// ═══════════════════════ 6. Secciones ══════════════════════

// ─────────────────────── Intro (c.1–10) ───────────────────────
/*
La frase de 5 compases, dos veces: el motivo en los dos primeros y el vals
(bajo en el 1, acorde que entra antes del 2) en los tres siguientes. Piano y
batería; el violín y la guitarra callan.
*/

const INTRO = {
  desde: 1,
  der: [
    ...MOTIVO, // c.1–2    D · D/F# — el motivo
    "[~ C#5@2 C#5]", // c.3      A
    "[~ [F#4,D5]@2 [F#4,D5]]", // c.4      Bm
    "[~ [D4,D5]@2 [D4,B4]]", // c.5      G
    ...MOTIVO, // c.6–7    D · D — el motivo
    "[~ [E4,C#5]@2 [E4,C#5]]", // c.8      A
    "[~ [D4,D5]@2 [D4,D5]]", // c.9      Bm
    "[~ [F#4,D5]@2 [E4,E5]]", // c.10     Gmaj7
  ],
  izq: [
    "D3", // c.1      D
    "F#3", // c.2      D/F#
    "[A2, [~ A3@2 A3]]", // c.3      A
    "[B2, [~ B3@2 B3]]", // c.4      Bm
    "[G2, [~ G3@2 G3]]", // c.5      G
    "[D2,A3]", // c.6      D
    "F#2", // c.7      D
    "[A2, [~ A3@2 A3]]", // c.8      A
    "[B2, [~ [F#3,B3]@2 [F#3,B3]]]", // c.9      Bm
    "[[G2@2 ~], [~ [G3,C#4]@2 [G3,C#4]]]", // c.10     Gmaj7
  ],
  bateria: BATERIA.intro,
};

// ─────────────────────── V1 (c.11–26) ───────────────────────
/*
El violín entra en pizz. El piano toca acordes largos y la guitarra rasguea uno
por compás. En los compases de cadencia (19, 21, 23, 25) el vals se reparte:
el piano ataca en el 1 y la guitarra entra en el 2 y el 3.
*/

const V1 = {
  desde: 11,
  violin: [
    "[~ D4 D4]", // c.11     Dmaj7
    "[~ [F#4,A4]@2]", // c.12     F#m · D
    "[~ E4 G4]", // c.13     C#dim
    "[~ [F#4,B4]@2]", // c.14     A · A7
    "[~ F#4 B3]", // c.15     Bm7
    "[D4@2 [E4,B4]]", // c.16     G · G6
    "[~ F#4 F#4]", // c.17     Dmaj7
    "[~ [C#4,A4] [C#4,F#4]]", // c.18     F#m · F#m7
    "[D4,C#5]", // c.19     Dmaj7
    "[~ F#4 D4]", // c.20     F#m
    "E4", // c.21     C#dim
    "[~ [C#4,A4]]", // c.22     A · A7
    "[D4,C#5]", // c.23     Bm7
    "[~ G4 B4]", // c.24     G · G6
    "F#4", // c.25     D6
    "[~ [F#4,C#5] [C#4,A4]]", // c.26     F#m
  ],
  guitarra: [
    "[E2,A2,D3,A3,C#4,F#4]", // c.11     Dmaj7
    "[F#2,A2,F#3,A3,F#4,C#5]", // c.12     F#m · D
    "[C#3,E3,C#4,G4]", // c.13     C#dim
    "[A2,C#3,A3,C#4,A4,E5]", // c.14     A · A7
    "[B2,D3,F#4,B4,F#5]", // c.15     Bm7
    "[G2,B2,D4,G4,D5]", // c.16     G · G6
    "[D3,A3,D4,A4]", // c.17     Dmaj7
    "[C#4,F#4,A4,C#5]", // c.18     F#m · F#m7
    "[~ [D3,F#3,D4,A4] [D3,F#3,D4,A4]]", // c.19     Dmaj7
    "[F#2,A2,F#3,A3,F#4,C#5]", // c.20     F#m
    "[~ [C#3,E3,C#4,G4] [C#3,E3,C#4,G4]]", // c.21     C#dim
    "[A2,C#3,A3,C#4,A4,E5]", // c.22     A · A7
    "[~ [B3,F#4,B4,F#5] [B3,F#4,B4,F#5]]", // c.23     Bm7
    "[G3,D4,G4,D5]", // c.24     G · G6
    "[~ [F#3,A3,D4,A4] [F#3,A3,D4,A4]]", // c.25     D6
    "[C#3,A3,C#4,F#4,A4,C#5]", // c.26     F#m
  ],
  der: [
    "[F#4,D5]", // c.11     Dmaj7
    "[[C#4,C#5]@3 [C#4,A4]]", // c.12     F#m · D
    "[E4,G4]", // c.13     C#dim
    "[[E4,C#5] [C#4,G5]]", // c.14     A · A7
    "[D4,F#5]", // c.15     Bm7
    "[[B3,D5]@3 [E4,B4]]", // c.16     G · G6
    "[F#4,C#5]", // c.17     Dmaj7
    "[[C#4,A4] [A4,E5]]", // c.18     F#m · F#m7
    "[[F#4,C#5] ~@2]", // c.19     Dmaj7
    "[[C#4,C#5]@3 [C#4,A4]]", // c.20     F#m
    "[E4,G4]", // c.21     C#dim
    "[[E4,C#5] [C#4,G5]]", // c.22     A · A7
    "[D4,F#5]", // c.23     Bm7
    "[[B3,D5]@3 [E4,B4]]", // c.24     G · G6
    "[F#4,A4]", // c.25     D6
    "[[C#4,A4] [A4,E5]]", // c.26     F#m
  ],
  izq: [
    "[D2,C#4]", // c.11     Dmaj7
    "[F#3@3 G3]", // c.12     F#m · D
    "[C#3,E3]", // c.13     C#dim
    "[A3 A3]", // c.14     A · A7
    "B3", // c.15     Bm7
    "[G3@3 F#3]", // c.16     G · G6
    "A3", // c.17     Dmaj7
    "[F#2 F#2]", // c.18     F#m · F#m7
    "[[A2,D3] ~@2]", // c.19     Dmaj7
    "[A3@3 A3]", // c.20     F#m
    "[C#3,E3]", // c.21     C#dim
    "[A3 A3]", // c.22     A · A7
    "B3", // c.23     Bm7
    "[G3@3 F#3]", // c.24     G · G6
    "D3", // c.25     D6
    "[[F#3,A3] [F#3,A3]]", // c.26     F#m
  ],
  bateria: BATERIA.verso,
};

// ─────────────────────── C1 (c.27–42) ───────────────────────
/*
El violín pasa a arco. El piano vuelve al vals: bajo en el 1 y una nota en el
2 y el 3. La guitarra toca el acorde largo y en los c.30, 34 y 38 se queda con
el 2 y el 3. Las dos mitades cierran en A7 → D (c.33–34 y 41–42).
*/

const C1 = {
  desde: 27,
  violin: [
    ligar(8, "G4"), // c.27     Em — se liga 8 semicorcheas al c.28
    "[~@2 B4]", // c.28     G — sigue lo del c.27
    "A4", // c.29     F#m7
    "[F#4 D4]", // c.30     Bm
    "G4", // c.31     Em
    "[B4 D4 B3]", // c.32     G
    "C#4", // c.33     A7
    "[D4@2 A4]", // c.34     D
    "E4", // c.35     Em
    "D4", // c.36     G
    "F#4", // c.37     F#m7
    "[B3@2 D4@3 F#4]", // c.38     Bm
    "[E4@2 C#4]", // c.39     Em
    "D4", // c.40     G
    "[F#4@2 A4@3 A4]", // c.41     A7
    "D4", // c.42     D
  ],
  guitarra: [
    "[E2,G2,E3,G3]", // c.27     Em
    "[G2,B2,G3,B3]", // c.28     G
    "[F#2,A2,F#3,A3]", // c.29     F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.30     Bm
    "[E2,G2,E3,G3]", // c.31     Em
    "[G2,B2,G3,B3]", // c.32     G
    "[A2,C#3,E4,A4,E5]", // c.33     A7
    "[~ [A3,D4,F#4,A4] [A3,D4,F#4,A4]]", // c.34     D
    "[E2,G2,E3,G3]", // c.35     Em
    "[G2,B2,G3,B3]", // c.36     G
    "[F#2,A2,F#3,A3]", // c.37     F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.38     Bm
    "[E2,G2,E3,G3,E4]", // c.39     Em
    "[G2,B2,G3,B3]", // c.40     G
    "[A2,C#3,E4,A4,E5]", // c.41     A7
    "~", // c.42     D
  ],
  der: [
    "[~ E4 E4]", // c.27     Em
    "[~ G4 G4]", // c.28     G
    "[~ F#4 F#4]", // c.29     F#m7
    "~", // c.30     Bm
    "[~ E4 E4]", // c.31     Em
    "[~ G4 G4]", // c.32     G
    "[~@2 A4@3 A4]", // c.33     A7
    "~", // c.34     D
    "[~ [E4,E5] [E4,E5]]", // c.35     Em
    "[~ [D4,B4] [D4,B4]]", // c.36     G
    "[~ [E4,A4] [E4,A4]]", // c.37     F#m7
    "[D4,F#4]", // c.38     Bm
    "[~ G4 G4]", // c.39     Em
    "[~ [D4,B4] [D4,B4]]", // c.40     G
    "[~@2 [A4,C#5]@3 [A4,C#5]]", // c.41     A7
    "[F#4,D5]", // c.42     D
  ],
  izq: [
    "[E3 ~@2]", // c.27     Em
    "[G3 ~@2]", // c.28     G
    "[F#3 ~@2]", // c.29     F#m7
    "[[B2 ~@2], B3]", // c.30     Bm
    "[E3 ~@2]", // c.31     Em
    "[G3 ~@2]", // c.32     G
    "[A2@2 E3@3 E3]", // c.33     A7
    "[[D2 ~@2], D3]", // c.34     D
    "[[E2,E3] E3 E3]", // c.35     Em
    "[[G2,G3] G3 G3]", // c.36     G
    "[[F#2,F#3] F#3 F#3]", // c.37     F#m7
    "[[[B2,B3] ~@2], B3]", // c.38     Bm
    "[[E2,E3] [E3,B3] [E3,B3]]", // c.39     Em
    "[[G2,G3] G3 G3]", // c.40     G
    "[[A2,G3]@2 G3@3 G3]", // c.41     A7
    "[[F#2,F#3]@4 D4 C#4]", // c.42     D
  ],
  bateria: BATERIA.coro,
};

// ─────────────────────── B1 (c.43–50) ───────────────────────
/*
Piano solo. Bm · Em · E con el bajo bajando por quintas (B–E–A–D); el G# del
c.45 sube al La del motivo y vuelve la frase de la intro.
*/

const B1 = {
  desde: 43,
  der: [
    "[F#4,D5]", // c.43     Bm
    "[~ [G4,D5] [G4,D5]]", // c.44     Em
    "[~@2 [E4,B4]@3 G#4]", // c.45     E
    ...MOTIVO, // c.46–47  D · D — el motivo
    "[~ [E4,C#5] [E4,C#5]]", // c.48     A
    "[~@2 [F#4,D5]@3 [F#4,D5]]", // c.49     Bm
    "[[G4,D5]@3 [G4,D5] D4@2]", // c.50     Gmaj7
  ],
  izq: [
    "[B3@2 D3@3 F#3]", // c.43     Bm
    "[[E3,B3] B3 B3]", // c.44     Em
    "[[A2,E3] E3]", // c.45     E
    "[D2,D3]", // c.46     D
    "A2", // c.47     D
    "[A2, [~ A3 A3]]", // c.48     A
    "[B2, [~@2 B3@3 B3]]", // c.49     Bm
    "[[G2@2 ~], [~@2 B3]]", // c.50     Gmaj7
  ],
};

// ─────────────────────── V2 (c.51–66) ───────────────────────
/*
El verso otra vez, con otro violín: más agudo y con más notas, todavía en
pizz. Piano y guitarra son los del V1 salvo los compases de abajo; la batería
es la del V1.
*/

const V2 = variante(V1, 51, {
  violin: [
    "[F#5 D5 F#5]", // c.51     Dmaj7
    "[[C#5,A5] [A4,F#5]@2]", // c.52     F#m · F#m7
    "[G5 C#5 E5]", // c.53     C#dim
    "[C#5@3 [E5,A5] [E5,A5]@2]", // c.54     A · A7
    "[D5@2 A5@3 F#5]", // c.55     Bm7
    "[B4@2 [D5,G5]]", // c.56     G · G6
    "[C#5@2 D5@3 E5]", // c.57     Dmaj7
    "[F#5 [C#5,A5] [C#5,F#5]]", // c.58     F#m · F#m7
    "[[D5,A5]@2 [D5,F#5]]", // c.59     Dmaj7
    "[C#5 F#5 C#5]", // c.60     F#m
    "[E5@2 G5@3 F#5]", // c.61     C#dim
    "[A5 [C#5,A5]]", // c.62     A · A7
    "[D5,F#5]", // c.63     Bm7
    "[B4@2 E5@3 G5]", // c.64     G · G6
    "F#5", // c.65     D6
    "[[A4,A5] [C#5,F#5] [C#4,A4]]", // c.66     F#m
  ],
  guitarra: {
    51: "[A2,D3,A3,C#4,F#4]", // Dmaj7 — V1: [E2,A2,D3,A3,C#4,F#4]
    53: "[E2,G2,C#3,E3,C#4,G4]", // C#dim — V1: [C#3,E3,C#4,G4]
    57: "[F#2,A2,A3,D4,A4]", // Dmaj7 — V1: [D3,A3,D4,A4]
    58: "[F#2,A2,C#4,F#4,A4,C#5]", // F#m · F#m7 — V1: [C#4,F#4,A4,C#5]
  },
  der: {
    51: "F#4", // Dmaj7 — V1: [F#4,D5]
  },
  izq: {
    51: "[D3,C#4]", // Dmaj7 — V1: [D2,C#4]
    52: "[F#3@3 A3]", // F#m · F#m7 — V1: [F#3@3 G3]
    59: "[[D2,D3] ~@2]", // Dmaj7 — V1: [[A2,D3] ~@2]
  },
});

// ─────────────────────── C2 (c.67–82) ───────────────────────
/*
El coro 1 con su propia batería y otro violín. El piano cambia el bajo del
c.76 (Si2) y los c.80–82 (Gmaj13 · A7 · E♭7): el c.82 pone E♭7 donde el coro
habría cerrado en D. La guitarra es la del C1 entera.
*/

const C2 = variante(C1, 67, {
  violin: [
    ligar(8, "G4"), // c.67     Em — se liga 8 semicorcheas al c.68
    "[~@4 B4 D5]", // c.68     G — sigue lo del c.67
    "[A4 G4]", // c.69     F#m7
    "[F#4 D4]", // c.70     Bm
    "[G4@3 E4 G4 A4]", // c.71     Em
    "[B4 D4 B3]", // c.72     G
    "[C#4@2 B3@3 C#4]", // c.73     A7
    "[D4 A4]", // c.74     D
    "[E4@2 C#4]", // c.75     Em
    "D4", // c.76     G
    "[E4@4 F#4 G4@3 A4@4]", // c.77     F#m7
    "[B4 F#4]", // c.78     Bm
    "[[E4,G4]@2 [B3,B4]]", // c.79     Em
    "[D4,G4,E5]", // c.80     Gmaj13
    "[[F#4,C#5]@2 [A4,E5]@3 [E4,C#5]]", // c.81     A7
    "[G4,Eb5]", // c.82     Eb7
  ],
  der: {
    80: "[~ [E4,D5] [F#4,D5]]", // Gmaj13 — C1: [~ [D4,B4] [D4,B4]]
    81: "[~@2 [G4,C#5]@3 [A4,E5]]", // A7 — C1: [~@2 [A4,C#5]@3 [A4,C#5]]
    82: "[Bb4,Eb5]", // Eb7 — C1: [D4,D5]
  },
  izq: {
    76: "[[B2,G3] G3 G3]", // G — C1: [[G2,G3] G3 G3]
    80: "[[G2,F#3] [E3,G3] [F#3,B3]]", // Gmaj13 — C1: [[G2,G3] G3 G3]
    81: "[[A2,E3]@2 [C#3,E3]@3 [C#3,E3]]", // A7 — C1: [[A2,G3]@2 G3@3 G3]
    82: "[[Eb2,Db3]@4 Bb3 G3]", // Eb7 — C1: [[D2,F#3]@4 D4 C#4]
  },
  bateria: BATERIA.coro2,
});

// ─────────────────────── B2 (c.83–92) ───────────────────────
/*
La armadura pasa a un bemol. La batería entra toda en el c.83 y calla. La
guitarra deja el rasgueo: acordes en bloque desde el c.85.
*/

const B2 = {
  desde: 83,
  violin: [
    "[[D4,A4]@5 [F4,D5]]", // c.83     Dm
    "[[D4,F5] [F4,D5]]", // c.84     Dm
    "[Bb3,Bb4,G5]", // c.85     Gm
    "[C4,A4,E5]", // c.86     Am
    "[[C4,G4,F5]@2 [F4,C5,F5]]", // c.87     Csus4
    "[[G4,D5]@2 [D4,B4]@3 [B3,G4]]", // c.88     G7
    "[[C4,G4]@2 [E4,C5]]", // c.89     C7
    "[[F4,C5,F5] [G4,D5,F5] [A4,Eb5,A5]]", // c.90     F · F7
    "[[Bb4,F5,Bb5]@2 [F4,G5]]", // c.91     Bb
    "[A4,F#5]", // c.92     D
  ],
  guitarra: [
    "~", // c.83     Dm
    "~", // c.84     Dm
    "[~@2 [G2,D3,Bb3]@3 [G2,D3,Bb3]]", // c.85     Gm
    "[~@2 [A2,E3,C4]@3 [A2,E3,C4]]", // c.86     Am
    "[~@2 [C3,F3,Bb3]@3 [C3,F3,Bb3]]", // c.87     Csus4
    "[~@2 [D3,G3,D4]@3 [D3,G3,D4]]", // c.88     G7
    "[[C3,G3,E4] [E3,Bb3,E4]]", // c.89     C7
    "[[F3,C4]@2 [A3,F4]@3 [Eb4,A4]]", // c.90     F · F7
    "[D3,Bb3,D4,F4,Bb4]", // c.91     Bb
    "[[D3,A3,F#4] [D3,A3,F#4]]", // c.92     D
  ],
  der: [
    "[[A4,F5] [G4,E5]@2 [F4,D5]]", // c.83     Dm
    "[[D4,A4] [F4,D5]]", // c.84     Dm
    "[G4 Bb4 D5@3 D5]", // c.85     Gm
    "[E5 A4@3 F4 A4]", // c.86     Am
    "[C5 F4 [G4,F5]@3 [F4,C5]]", // c.87     Csus4
    "[[G4,D5] [B4,F5]@3 D5 B4]", // c.88     G7
    "[C5 G4 E4]", // c.89     C7
    "[F4@2 [A4,F5]@3 [A4,A5]]", // c.90     F · F7
    "[[D4,Bb4,Bb5]@3 [F4,Bb4,Bb5] [F4,Bb4,Bb5]@2]", // c.91     Bb
    "[[F#4,D5,A5]@2 G4 B4 D5 F#5]", // c.92     D
  ],
  izq: [
    "[D2,D3,A3]", // c.83     Dm
    "[[D2,F3] [A2,D3]]", // c.84     Dm
    "[[G2,D3]@2 [D3,G3]@3 [D3,G3]]", // c.85     Gm
    "[[C3,A3] [E3,A3]@3 [A2,E3]@2]", // c.86     Am
    "[[C3,G3]@2 [F2,C3]@3 [C3,G3]]", // c.87     Csus4
    "[[G2,G3]@2 [F2,F3]@3 [G2,F3]]", // c.88     G7
    "[[C3,Bb3] [C3,G3] [C3,E3]]", // c.89     C7
    "[[F2,F3,A3]@4 ~ [A2,Eb3,A3]]", // c.90     F · F7
    "[Bb2,F3,C4]", // c.91     Bb
    "[[D2,A3]@5 [D2,F#3]]", // c.92     D
  ],
  rasgueo: false,
  bateria: BATERIA.b2,
};

// ─────────────────────── C3 (c.93–108) ───────────────────────
/*
Vuelve a Re mayor. El coro 1 sin batería y con otro violín. La primera mitad
deja espacio al violín: la guitarra calla en el c.96. En la segunda cierra el
piano: la mano derecha sube a Sol5–La5 en c.105–107, y el bajo llega a Re2 en
el acorde final, que se liga al outro.
*/

const C3 = variante(C1, 93, {
  violin: [
    "[B3,G4,E5]", // c.93     Em
    "[[G4,D5] F#4 G4]", // c.94     G
    "[A4@2 C#4@3 D4]", // c.95     F#m7
    "[[D4,F#4]@2 [D4,B4]@3 [F#4,D5]]", // c.96     Bm
    "[G4,E5]", // c.97     Em
    "[[G4,D5] F#4 G4]", // c.98     G
    "[A4 C#4 E4]", // c.99     A7
    "[F#4 E4 D4@2 F#4@2]", // c.100    D
    "[B3,G4]", // c.101    Em
    "[G4 B4 D5]", // c.102    G
    "[F#4@2 G4@3 A4]", // c.103    F#m7
    "[D4,B4]", // c.104    Bm
    "[B4@2 A4@3 E4]", // c.105    Em
    "[D5 B4 G4]", // c.106    G
    "[E4 G4 A4@2 C#5@2]", // c.107    A7
    "[F#4,D5]", // c.108    D
  ],
  guitarra: {
    96: "~", // Bm — C1: [~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]
  },
  der: {
    93: "[[G4,E5,G5] E4 E4]", // Em — C1: [~ E4 E4]
    96: "[~@2 [B4,F#5]@3 [F#4,B4,F#5]]", // Bm — C1: ~
    105: "[~ [G4,E5,G5] [G4,E5,G5]]", // Em — C1: [~ G4 G4]
    106: "[~ [D4,B4,G5] [D4,B4,G5]]", // G — C1: [~ [D4,B4] [D4,B4]]
    107: "[~@2 [A4,C#5,A5]@3 [A4,C#5,A5]]", // A7 — C1: [~@2 [A4,C#5]@3 [A4,C#5]]
    108: ligar(4, "[D4,A4,D5]"), // D — C1: [D4,D5] · se liga 4 semicorcheas al c.109
  },
  izq: {
    93: "[[E2,E3] ~@2]", // Em — C1: [E3 ~@2]
    98: "[G2 G3 G3]", // G — C1: [G3 ~@2]
    107: "[[A2,G3]@2 G3@3 [C#2,G3]]", // A7 — C1: [[A2,G3]@2 G3@3 G3]
    108: "[D2,A3]", // D — C1: [[D2,F#3]@4 D4 C#4]
  },
  bateria: null,
});

// ─────────────────────── Outro (c.109–111) ───────────────────────
/*
La mano izquierda sola, debajo del acorde de D que viene ligado del c.108.
*/

const OUTRO = {
  desde: 109,
  der: [
    "~", // c.109    sigue lo del c.108
    "~", // c.110    D
    "~", // c.111
  ],
  izq: [
    "[[F#2,A2] G2@2 F#2]", // c.109
    ligar(1, "[D2@5 D3@7]"), // c.110    D — se liga 1 semicorchea al c.111
    "~", // c.111    sigue lo del c.110
  ],
};

// ═══════════════════════ 7. Forma ══════════════════════

forma(INTRO, V1, C1, B1, V2, C2, B2, C3, OUTRO);

// Para trabajar un tramo, cambia la línea de arriba. Todo suena en bucle:
//   forma(C2, B2)   el C2 y el B2, uno tras otro
//   tocar(C2)       una sección sola
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/7.b2_bateria.strudel.js`

```js
setcpm(160 / 3);

/*
Louise, del final del C2 al inicio del C3, para trabajar la batería.

Fuente: 7. Partituras/2. Composiciones/Louise-melancolica.mscz
        guardado 2026-10-31 12:31 · commit fa80a73 (blob 0bf41d8, limpio)
        c.75–100: la segunda mitad del C2, el B2 entero y la primera mitad
        del C3, con su batería. Las notas y los golpes se comprobaron compás
        por compás contra el .musicxml. Las velocidades salen de las marcas
        de la partitura, sin reguladores: para oírlo como MuseScore, el 8.

Para qué
  Probar baterías en este tramo. Violín, guitarra y piano son la partitura y
  no se tocan aquí: lo que se edita es la batería en prueba (4). Lo que se
  quede se escribe a mano en MuseScore; este archivo no vuelve al .mscz.

  Hallazgos abiertos que tocan este tramo: H-02 (energía) y H-03 (el c.82).

Cómo se itera
  - Cambia la batería en 4. Empieza igual a la de la partitura.
  - OIR_PARTITURA = true (en 1) vuelve a la del .mscz, para comparar.
  - MEZCLA (en 1) baja o apaga los demás: la batería sola o al frente.
  - tramo(81, 85) (en 7) repite solo esos compases.

Cómo está armado
  1. Sonido y mezcla          qué suena, a qué volumen y qué batería.
  2. Matices                  dinámicas de la partitura, por compás.
  3. Herramientas             las de 6.melancolica, y recortar() para tramo().
  4. Batería en prueba        la que se edita.
  5. Batería de la partitura  la del .mscz, para comparar. No se edita.
  6. Secciones                una por sección, una entrada por compás.
  7. Forma                    el orden, o un tramo.

Convenciones
  - Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con
    su número y el cifrado de la partitura, para leerla al lado de MuseScore.
  - Todo va en altura real: la guitarra se escribe una octava arriba de como
    suena.
  - Toda comilla es mini-notación. VS Code, al guardar, pasa las comillas
    simples a dobles, así que el código no usa textos de JavaScript: los
    interruptores son true o false, las claves van sin comillas y los
    mensajes de error van en String.raw`…`, lo único que ni Strudel ni el
    formateador tocan.
*/

// ═══════════════════════ 1. Sonido y mezcla ══════════════════════

const SONIDO = {
  arco: "gm_violin", // en todo el tramo el violín va con arco
  guitarra: "gm_acoustic_guitar_nylon",
  piano: "piano",
  kit: "AkaiLinn",
};

// Volumen de cada instrumento: 0 lo apaga
const MEZCLA = { violin: 1, guitarra: 1, piano: 1, bateria: 1 };

// Qué batería suena: false la de 4 (la que editas), true la de 5 (la partitura)
const OIR_PARTITURA = false;

// ═══════════════════════ 2. Matices ══════════════════════
/*
Las velocidades de MuseScore, en MIDI / 127. Una marca vale desde su compás
hasta la siguiente; lo que la partitura no marca suena mf. Los reguladores
(< crescendo, > diminuendo) no se aplican: van anotados al lado.
*/

const MATIZ = { p: 0.39, mp: 0.5, mf: 0.63, f: 0.76, ff: 0.88 };

// Batería: las velocidades de cada golpe, su "dynamics" (% de 90) / 127
const FUERTE = 0.81; // 114 %
const NORMAL = 0.71; // 100 %
const MEDIO = 0.63; // los golpes sin velocidad propia: suenan al mf de MuseScore (80)
const SUAVE = 0.54; // 76 %
const GHOST = 0.27; // 38 %

const DINAMICA = {
  violin: {
    75: MATIZ.mp, // < hasta el 79 · < al final del 82, hasta el f
    83: MATIZ.f,  // escrita al final del 82 · > del 83 al 91
    91: MATIZ.mp, // (la partitura le da la velocidad de p) · < al final del 92, hasta el mf
    93: MATIZ.mf, // escrita al final del 92 · > desde el 98
  },
  guitarra: {
    1: MATIZ.mf,
  },
  piano: {
    73: MATIZ.mp, // viene del c.73 · < hasta el 82
    83: MATIZ.f,  // < del 90 al 91
    90: MATIZ.ff,
    94: MATIZ.mf, // < hasta el 95 · en el 99 hay una dinámica vacía
  },
};

// ═══════════════════════ 3. Herramientas ══════════════════════

// Un mensaje de error, siempre en String.raw`…` (ver Convenciones)
let fallar = (mensaje) => {
  throw new Error(mensaje);
};

// Una entrada por compás → un compás por ciclo
let compases = (lista) => cat(...lista);

// La marca que vale en un compás: la última escrita en él o antes
let vigente = (mapa, compas) =>
  mapa[Math.max(...Object.keys(mapa).map(Number).filter((c) => c <= compas))];

// Un mapa { compás: valor } leído compás por compás, desde `desde` y durante `n`
let marcas = (mapa, desde, n) =>
  cat(...Array.from({ length: n }, (_, i) => vigente(mapa, desde + i)));

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual.
let rasgueo = (pat, gap = 0.01) => {
  let numeradas = pat.withHaps((haps) => {
    let vistas = new Map();
    return haps.map((hap) => {
      let inicio = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = vistas.get(inicio) ?? 0;
      vistas.set(inicio, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numeradas
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  );
};

// ── Secciones ──
// Una sección es un objeto: desde qué compás empieza y una lista por parte
// (violin, guitarra, der, izq), más su batería. La parte que no está, calla.

// Cuántos compases dura una sección; todas sus partes tienen que coincidir
let largo = (sec) => {
  let partes = [sec.violin, sec.guitarra, sec.der, sec.izq].filter(Boolean);
  let largos = [...new Set(partes.map((lista) => lista.length))];
  if (largos.length !== 1) {
    fallar(String.raw`La sección del c.${sec.desde} tiene partes de ${largos} compases`);
  }
  return largos[0];
};

// ── Instrumentos ──

let violin = (sec) =>
  note(compases(sec.violin))
    .sound(SONIDO.arco)
    .velocity(marcas(DINAMICA.violin, sec.desde, largo(sec)))
    .gain(MEZCLA.violin);

// Rasgueada, salvo en las secciones con `rasgueo: false` (acordes en bloque)
let guitarra = (sec) => {
  let notas = note(compases(sec.guitarra));
  return (sec.rasgueo === false ? notas : rasgueo(notas))
    .sound(SONIDO.guitarra)
    .velocity(marcas(DINAMICA.guitarra, sec.desde, largo(sec)))
    .gain(MEZCLA.guitarra);
};

let piano = (sec) =>
  stack(note(compases(sec.der)), note(compases(sec.izq)))
    .sound(SONIDO.piano)
    .velocity(marcas(DINAMICA.piano, sec.desde, largo(sec)))
    .gain(MEZCLA.piano);

// Una línea de batería: el patrón con sus muestras y una velocidad
let golpe = (patron, vel = MEDIO) => s(patron).velocity(vel);

// Las líneas de una sección, con el kit y el volumen de la mezcla
let bateria = (...lineas) => stack(...lineas).bank(SONIDO.kit).gain(MEZCLA.bateria);

// Todo lo que toca una sección
let tocar = (sec) =>
  stack(
    sec.violin ? violin(sec) : silence,
    sec.guitarra ? guitarra(sec) : silence,
    sec.der ? piano(sec) : silence,
    sec.bateria ?? silence,
  );

// Las secciones una tras otra, cada una con sus compases
let forma = (...secciones) => arrange(...secciones.map((sec) => [largo(sec), tocar(sec)]));

// Una sección solo de `desde` a `hasta`. Las partes se cortan por compás, así
// que la primera nota no arrastra la cola del compás anterior
let recortar = (sec, desde, hasta) => {
  let i = desde - sec.desde;
  let n = hasta - desde + 1;
  let corte = (lista) => lista && lista.slice(i, i + n);
  return {
    ...sec,
    desde,
    violin: corte(sec.violin),
    guitarra: corte(sec.guitarra),
    der: corte(sec.der),
    izq: corte(sec.izq),
    bateria: sec.bateria && sec.bateria.ribbon(i, n),
  };
};

// ═══════════════════════ 4. Batería en prueba ══════════════════════
/*
La que se edita. Empieza igual a la de la partitura (5).

Una línea por instrumento y por velocidad: golpe(`<…>`, VELOCIDAD). Dentro de
< > va una entrada por compás, siempre todas: cada columna es un compás y cada
fila, una frase. ~ es un compás callado; [bd ~ bd] reparte el compás en sus
tres tiempos, y [~ [~ bd] ~] pone el golpe en la segunda corchea del 2. Si a
una línea le sobra o le falta una entrada, todo lo que sigue se corre un compás.

Muestras: bd bombo · sd caja · hh oh cr hi-hat cerrado, abierto y crash ·
lt mt ht toms · tb pandereta · cb cencerro · cp palmas · sh shaker
Velocidades: FUERTE · NORMAL · MEDIO · SUAVE · GHOST (en 2)

Para sumar un instrumento o una velocidad, copia una línea y cámbiala.
*/

const PRUEBA = {
  // C2, segunda mitad (c.75–82). Filas: c.75–78 · c.79–82
  c2: bateria(
    // Bombo
    golpe(`<
      [bd ~ bd]  [bd bd bd] [bd bd bd] [bd bd bd]
      [bd bd bd] [bd bd bd] [bd bd bd] ~
    >`, FUERTE),
    // Caja
    golpe(`<
      [~ sd sd] [~ sd sd] [~ sd sd] [~ sd sd]
      [~ sd sd] [~ sd sd] [~ sd sd] ~
    >`, FUERTE),
    // Caja
    golpe(`<
      ~             ~             ~             ~
      ~             ~             ~             [~ [sd sd] ~]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~         [~ oh hh] ~         [~ oh hh]
      [~ oh hh] [~ oh hh] [~ oh hh] ~
    >`, SUAVE),
    // Toms
    golpe(`<
      ~        ~        ~        ~
      ~        ~        ~        [lt ~ ~]
    >`, FUERTE),
    // Toms
    golpe(`<
      ~        ~        ~        ~
      ~        ~        ~        [~ ~ mt]
    >`, MEDIO),
    // Pandereta
    golpe(`<
      [~ tb tb]     [~ tb tb]     [~ tb [~ tb]] [~ tb [~ tb]]
      [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]] ~
    >`, NORMAL),
    // Cencerro
    golpe(`<
      ~         ~         ~         [cb cb ~]
      [cb cb ~] [cb cb ~] [cb cb ~] ~
    >`, MEDIO),
    // Cencerro
    golpe(`<
      [cb ~ ~] [cb ~ ~] [cb ~ ~] [~ ~ cb]
      [~ ~ cb] [~ ~ cb] [~ ~ cb] [cb ~ ~]
    >`, SUAVE),
    // Shaker
    golpe(`<
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] [sh ~ ~] ~
    >`, SUAVE),
  ),

  // B2 (c.83–92). Filas: c.83–84 · c.85–88 · c.89–92
  b2: bateria(
    // Bombo
    golpe(`<
      [bd bd bd]     [bd bd [~ bd]]
      [bd ~ ~]       [bd ~ ~]       [bd ~ ~]       [bd ~ ~]
      [bd ~ ~]       [bd ~ ~]       [bd ~ ~]       ~
    >`, FUERTE),
    // Bombo
    golpe(`<
      ~            ~
      [~ [~ bd] ~] ~            [~ [~ bd] ~] ~
      ~            [~ [~ bd] ~] [~ [~ bd] ~] ~
    >`, MEDIO),
    // Caja
    golpe(`<
      ~              ~
      [[~ sd] ~ sd]  [[~ sd] ~ sd]  [[~ sd] ~ sd]  [[~ sd] ~ sd]
      ~              [[~ sd] ~ sd]  [sd [~ sd] ~]  [sd sd [~ sd]]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~        ~
      ~        ~        ~        ~
      ~        ~        [~ oh ~] ~
    >`, FUERTE),
    // Platillos
    golpe(`<
      [oh hh hh]     ~
      [cr ~ ~]       ~              ~              ~
      ~              [cr ~ [oh hh]] [~ ~ [~ hh]]   ~
    >`, MEDIO),
    // Toms
    golpe(`<
      [ht ~ ~] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, FUERTE),
    // Toms
    golpe(`<
      ~              ~
      ~              ~              ~              ~
      [~ lt [~ mt]]  [~ mt [~ lt]]  ~              [lt mt [~ ht]]
    >`, MEDIO),
    // Pandereta
    golpe(`<
      ~             ~
      [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]]
      ~             [~ tb [~ tb]] [[~ tb] ~ tb] ~
    >`, NORMAL),
    // Pandereta
    golpe(`<
      [tb ~ ~] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, MEDIO),
    // Cencerro
    golpe(`<
      [cb cb ~]     ~
      ~             ~             ~             ~
      [~ cb [~ cb]] ~             ~             ~
    >`, MEDIO),
    // Cencerro
    golpe(`<
      [~ ~ cb] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, SUAVE),
    // Palmas
    golpe(`<
      ~             ~
      [~ cp [~ cp]] [~ cp [~ cp]] [~ cp [~ cp]] [~ cp [~ cp]]
      ~             [~ cp [~ cp]] [[~ cp] ~ cp] ~
    >`, NORMAL),
    // Palmas
    golpe(`<
      [cp ~ ~] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, MEDIO),
    // Shaker
    golpe(`<
      [sh sh ~]      [[sh sh] ~ sh]
      [[sh sh] ~ sh] [[sh sh] ~ sh] [[sh sh] ~ sh] [[sh sh] ~ sh]
      [sh sh [~ sh]] [sh sh [~ sh]] [[sh sh] ~ sh] [sh sh [~ sh]]
    >`, MEDIO),
  ),

  // C3, primera mitad (c.93–100). Filas: c.93–96 · c.97–100
  c3: bateria(
    // Bombo
    golpe(`<
      [bd bd [~ bd]] [bd ~ ~]       [bd ~ ~]       [bd ~ ~]
      [bd ~ ~]       [bd ~ bd]      ~              [bd ~ bd]
    >`, FUERTE),
    // Caja
    golpe(`<
      ~             [~ sd [~ sd]] [~ sd [~ sd]] [~ sd [~ sd]]
      [~ sd [~ sd]] [~ sd [~ sd]] ~             [~ sd ~]
    >`, FUERTE),
    // Caja
    golpe(`<
      ~        ~        ~        ~
      ~        ~        ~        [~ ~ sd]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~        [~ oh ~] ~        ~
      ~        ~        ~        ~
    >`, FUERTE),
    // Platillos
    golpe(`<
      [cr cr [~ cr]] [~ ~ [~ hh]]   ~              ~
      ~              ~              ~              [cr ~ ~]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~             ~             [~ oh [~ hh]] ~
      [~ oh [~ hh]] [~ oh [~ hh]] ~             [~ oh hh]
    >`, SUAVE),
    // Toms
    golpe(`<
      ~              ~              ~              ~
      [lt mt [~ ht]] ~              [lt mt [~ ht]] ~
    >`, FUERTE),
    // Pandereta
    golpe(`<
      ~             ~             ~             ~
      ~             ~             [~ tb [~ tb]] ~
    >`, FUERTE),
    // Pandereta
    golpe(`<
      [[~ tb] ~ tb] ~             ~             ~
      ~             ~             ~             ~
    >`, NORMAL),
    // Cencerro
    golpe(`<
      ~             ~             ~             ~
      ~             ~             ~             [[~ cb] ~ cb]
    >`, MEDIO),
    // Shaker
    golpe(`<
      [sh sh [~ sh]] [sh sh [~ sh]] ~              [sh sh [~ sh]]
      ~              [sh sh [~ sh]] [sh sh [~ sh]] [sh sh sh]
    >`, MEDIO),
    // Shaker
    golpe(`<
      ~        ~        [sh ~ ~] ~
      [sh ~ ~] ~        ~        ~
    >`, SUAVE),
  ),
};

// ═══════════════════════ 5. Batería de la partitura ══════════════════════
/*
La del .mscz, tal cual, para comparar con OIR_PARTITURA = true. No se edita: si
la partitura cambia, se vuelve a transcribir.
*/

const PARTITURA = {
  // C2, c.75–82
  c2: bateria(
    golpe("<[bd ~ bd] [bd bd bd]!6 ~>", FUERTE),
    golpe("<[~ sd sd]!7 ~>", FUERTE),
    golpe("<~!7 [~ [sd sd] ~]>", MEDIO),
    golpe("<~ [~ oh hh] ~ [~ oh hh]!4 ~>", SUAVE),
    golpe("<~!7 [lt ~ ~]>", FUERTE),
    golpe("<~!7 [~ ~ mt]>", MEDIO),
    golpe("<[~ tb tb]!2 [~ tb [~ tb]]!5 ~>", NORMAL),
    golpe("<~!3 [cb cb ~]!4 ~>", MEDIO),
    golpe("<[cb ~ ~]!3 [~ ~ cb]!4 [cb ~ ~]>", SUAVE),
    golpe("<~ [sh ~ ~] ~ [sh ~ ~] ~ [sh ~ ~]!2 ~>", SUAVE),
  ),
  // B2, c.83–92
  b2: bateria(
    golpe("<[bd bd bd] [bd bd [~ bd]] [bd ~ ~]!7 ~>", FUERTE),
    golpe("<~!2 [~ [~ bd] ~] ~ [~ [~ bd] ~] ~!2 [~ [~ bd] ~]!2 ~>", MEDIO),
    golpe("<~!2 [[~ sd] ~ sd]!4 ~ [[~ sd] ~ sd] [sd [~ sd] ~] [sd sd [~ sd]]>", MEDIO),
    golpe("<~!8 [~ oh ~] ~>", FUERTE),
    golpe("<[oh hh hh] ~ [cr ~ ~] ~!4 [cr ~ [oh hh]] [~ ~ [~ hh]] ~>", MEDIO),
    golpe("<[ht ~ ~] ~!9>", FUERTE),
    golpe("<~!6 [~ lt [~ mt]] [~ mt [~ lt]] ~ [lt mt [~ ht]]>", MEDIO),
    golpe("<~!2 [~ tb [~ tb]]!4 ~ [~ tb [~ tb]] [[~ tb] ~ tb] ~>", NORMAL),
    golpe("<[tb ~ ~] ~!9>", MEDIO),
    golpe("<[cb cb ~] ~!5 [~ cb [~ cb]] ~!3>", MEDIO),
    golpe("<[~ ~ cb] ~!9>", SUAVE),
    golpe("<~!2 [~ cp [~ cp]]!4 ~ [~ cp [~ cp]] [[~ cp] ~ cp] ~>", NORMAL),
    golpe("<[cp ~ ~] ~!9>", MEDIO),
    golpe("<[sh sh ~] [[sh sh] ~ sh]!5 [sh sh [~ sh]]!2 [[sh sh] ~ sh] [sh sh [~ sh]]>", MEDIO),
  ),
  // C3, c.93–100
  c3: bateria(
    golpe("<[bd bd [~ bd]] [bd ~ ~]!4 [bd ~ bd] ~ [bd ~ bd]>", FUERTE),
    golpe("<~ [~ sd [~ sd]]!5 ~ [~ sd ~]>", FUERTE),
    golpe("<~!7 [~ ~ sd]>", MEDIO),
    golpe("<~ [~ oh ~] ~!6>", FUERTE),
    golpe("<[cr cr [~ cr]] [~ ~ [~ hh]] ~!5 [cr ~ ~]>", MEDIO),
    golpe("<~!2 [~ oh [~ hh]] ~ [~ oh [~ hh]]!2 ~ [~ oh hh]>", SUAVE),
    golpe("<~!4 [lt mt [~ ht]] ~ [lt mt [~ ht]] ~>", FUERTE),
    golpe("<~!6 [~ tb [~ tb]] ~>", FUERTE),
    golpe("<[[~ tb] ~ tb] ~!7>", NORMAL),
    golpe("<~!7 [[~ cb] ~ cb]>", MEDIO),
    golpe("<[sh sh [~ sh]]!2 ~ [sh sh [~ sh]] ~ [sh sh [~ sh]]!2 [sh sh sh]>", MEDIO),
    golpe("<~!2 [sh ~ ~] ~ [sh ~ ~] ~!3>", SUAVE),
  ),
};

const BATERIA = OIR_PARTITURA ? PARTITURA : PRUEBA;

// ═══════════════════════ 6. Secciones ══════════════════════

// ─────────────────────── C2, segunda mitad (c.75–82) ───────────────────────
/*
El coro 1 con otro violín. El piano cambia el bajo del c.76 (Si2) y los
c.80–82 (Gmaj13 · A7 · E♭7): el c.82 pone E♭7 donde el coro habría cerrado
en D, y la guitarra calla en él.
*/

const C2 = {
  desde: 75,
  violin: [
    "[E4@2 C#4]", // c.75     Em
    "D4", // c.76     G
    "[E4@4 F#4 G4@3 A4@4]", // c.77     F#m7
    "[B4 F#4]", // c.78     Bm
    "[[E4,G4]@2 [B3,B4]]", // c.79     Em
    "[D4,G4,E5]", // c.80     Gmaj13
    "[[F#4,C#5]@2 [A4,E5]@3 [E4,C#5]]", // c.81     A7
    "[G4,Eb5]", // c.82     Eb7
  ],
  guitarra: [
    "[E2,B2,E3,G3,B3,E4]", // c.75     Em
    "[G2,B2,G3,B3]", // c.76     G
    "[F#2,A2,F#3,A3]", // c.77     F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.78     Bm
    "[E2,B2,E3,G3,B3,E4]", // c.79     Em
    "[G2,B2,G3,B3]", // c.80     Gmaj13
    "[A2,C#3,E4,A4,E5]", // c.81     A7
    "~", // c.82     Eb7
  ],
  der: [
    "[~ [E4,E5] [E4,E5]]", // c.75     Em
    "[~ [D4,B4] [D4,B4]]", // c.76     G
    "[~ [E4,A4] [E4,A4]]", // c.77     F#m7
    "[D4,F#4]", // c.78     Bm
    "[~ G4 G4]", // c.79     Em
    "[~ [E4,D5] [F#4,D5]]", // c.80     Gmaj13
    "[~@2 [G4,C#5]@3 [A4,E5]]", // c.81     A7
    "[Bb4,Eb5]", // c.82     Eb7
  ],
  izq: [
    "[[E2,E3] E3 E3]", // c.75     Em
    "[[B2,G3] G3 G3]", // c.76     G
    "[[F#2,F#3] F#3 F#3]", // c.77     F#m7
    "[[[B2,B3] ~@2], B3]", // c.78     Bm
    "[[E2,E3] [E3,B3] [E3,B3]]", // c.79     Em
    "[[G2,F#3] [E3,G3] [F#3,B3]]", // c.80     Gmaj13
    "[[A2,E3]@2 [C#3,E3]@3 [C#3,E3]]", // c.81     A7
    "[[Eb2,Db3]@4 Bb3 G3]", // c.82     Eb7
  ],
  bateria: BATERIA.c2,
};

// ─────────────────────── B2 (c.83–92) ───────────────────────
/*
La armadura pasa a un bemol. La guitarra deja el rasgueo: acordes en bloque
desde el c.85.
*/

const B2 = {
  desde: 83,
  violin: [
    "[[D4,A4]@5 [F4,D5]]", // c.83     Dm
    "[[D4,F5] [F4,D5]]", // c.84     Dm
    "[Bb3,Bb4,G5]", // c.85     Gm
    "[C4,A4,E5]", // c.86     Am
    "[[C4,G4,F5]@2 [F4,C5,F5]]", // c.87     Csus4
    "[[G4,D5]@2 [D4,B4]@3 [B3,G4]]", // c.88     G7
    "[[C4,G4]@2 [E4,C5]]", // c.89     C7
    "[[F4,C5,F5] [G4,D5,F5] [A4,Eb5,A5]]", // c.90     F · F7
    "[[Bb4,F5,Bb5]@2 [F4,G5]]", // c.91     Bb
    "[A4,F#5]", // c.92     D
  ],
  guitarra: [
    "~", // c.83     Dm
    "~", // c.84     Dm
    "[~@2 [G2,D3,Bb3]@3 [G2,D3,Bb3]]", // c.85     Gm
    "[~@2 [A2,E3,C4]@3 [A2,E3,C4]]", // c.86     Am
    "[~@2 [C3,F3,Bb3]@3 [C3,F3,Bb3]]", // c.87     Csus4
    "[~@2 [D3,G3,D4]@3 [D3,G3,D4]]", // c.88     G7
    "[[C3,G3,E4] [E3,Bb3,E4]]", // c.89     C7
    "[[F3,C4]@2 [A3,F4]@3 [Eb4,A4]]", // c.90     F · F7
    "[D3,Bb3,D4,F4,Bb4]", // c.91     Bb
    "[[D3,A3,F#4] [D3,A3,F#4]]", // c.92     D
  ],
  der: [
    "[[A4,F5] [G4,E5]@2 [F4,D5]]", // c.83     Dm
    "[[D4,A4] [F4,D5]]", // c.84     Dm
    "[G4 Bb4 D5@3 D5]", // c.85     Gm
    "[E5 A4@3 F4 A4]", // c.86     Am
    "[C5 F4 [G4,F5]@3 [F4,C5]]", // c.87     Csus4
    "[[G4,D5] [B4,F5]@3 D5 B4]", // c.88     G7
    "[C5 G4 E4]", // c.89     C7
    "[F4@2 [A4,F5]@3 [A4,A5]]", // c.90     F · F7
    "[[D4,Bb4,Bb5]@3 [F4,Bb4,Bb5] [F4,Bb4,Bb5]@2]", // c.91     Bb
    "[[F#4,D5,A5]@2 G4 B4 D5 F#5]", // c.92     D
  ],
  izq: [
    "[D2,D3,A3]", // c.83     Dm
    "[[D2,F3] [A2,D3]]", // c.84     Dm
    "[[G2,D3]@2 [D3,G3]@3 [D3,G3]]", // c.85     Gm
    "[[C3,A3] [E3,A3]@3 [A2,E3]@2]", // c.86     Am
    "[[C3,G3]@2 [F2,C3]@3 [C3,G3]]", // c.87     Csus4
    "[[G2,G3]@2 [F2,F3]@3 [G2,F3]]", // c.88     G7
    "[[C3,Bb3] [C3,G3] [C3,E3]]", // c.89     C7
    "[[F2,F3,A3]@4 ~ [A2,Eb3,A3]]", // c.90     F · F7
    "[Bb2,F3,C4]", // c.91     Bb
    "[[D2,A3]@5 [D2,F#3]]", // c.92     D
  ],
  rasgueo: false,
  bateria: BATERIA.b2,
};

// ─────────────────────── C3, primera mitad (c.93–100) ───────────────────────
/*
Vuelve a Re mayor. El coro 1 con otro violín, que canta esta mitad; la
guitarra calla en el c.96. Cierra en A7 → D (c.99–100).
*/

const C3 = {
  desde: 93,
  violin: [
    "[B3,G4,E5]", // c.93     Em
    "[[G4,D5] F#4 G4]", // c.94     G
    "[A4@2 C#4@3 D4]", // c.95     F#m7
    "[[D4,F#4]@2 [D4,B4]@3 [F#4,D5]]", // c.96     Bm
    "[G4,E5]", // c.97     Em
    "[[G4,D5] F#4 G4]", // c.98     G
    "[A4 C#4 E4]", // c.99     A7
    "[F#4 E4 D4@2 F#4@2]", // c.100    D
  ],
  guitarra: [
    "[E2,B2,E3,G3,B3,E4]", // c.93     Em
    "[G2,B2,G3,B3]", // c.94     G
    "[F#2,A2,F#3,A3]", // c.95     F#m7
    "~", // c.96     Bm
    "[E2,B2,E3,G3,B3,E4]", // c.97     Em
    "[G2,B2,G3,B3]", // c.98     G
    "[A2,C#3,E4,A4,E5]", // c.99     A7
    "[~ [A3,D4,F#4,A4] [A3,D4,F#4,A4]]", // c.100    D
  ],
  der: [
    "[[G4,E5,G5] E4 E4]", // c.93     Em
    "[~ G4 G4]", // c.94     G
    "[~ F#4 F#4]", // c.95     F#m7
    "[~@2 [B4,F#5]@3 [F#4,B4,F#5]]", // c.96     Bm
    "[~ E4 E4]", // c.97     Em
    "[~ G4 G4]", // c.98     G
    "[~@2 A4@3 A4]", // c.99     A7
    "~", // c.100    D
  ],
  izq: [
    "[[E2,E3] ~@2]", // c.93     Em
    "[G3 ~@2]", // c.94     G
    "[F#3 ~@2]", // c.95     F#m7
    "[[B2 ~@2], B3]", // c.96     Bm
    "[E3 ~@2]", // c.97     Em
    "[G2 G3 G3]", // c.98     G
    "[A2@2 E3@3 E3]", // c.99     A7
    "[[D2 ~@2], D3]", // c.100    D
  ],
  bateria: BATERIA.c3,
};

// ═══════════════════════ 7. Forma ══════════════════════

const TRAMO = [C2, B2, C3];

// Unos compases sueltos, en bucle: tramo(81, 85) va del c.81 al c.85
let tramo = (desde, hasta) => {
  let inicio = TRAMO[0].desde;
  let fin = inicio + TRAMO.reduce((n, sec) => n + largo(sec), 0) - 1;
  if (desde < inicio || hasta > fin || desde > hasta) {
    fallar(String.raw`tramo: este archivo va del c.${inicio} al c.${fin}`);
  }
  let partes = TRAMO.filter((sec) => sec.desde <= hasta && sec.desde + largo(sec) > desde).map((sec) =>
    recortar(sec, Math.max(desde, sec.desde), Math.min(hasta, sec.desde + largo(sec) - 1)),
  );
  return forma(...partes);
};

forma(...TRAMO);

// Para trabajar un pedazo, cambia la línea de arriba. Todo suena en bucle:
//   tramo(81, 85)   la entrada al B2
//   tramo(90, 94)   la salida, del F al c.94
//   tocar(B2)       una sección sola
//   forma(B2, C3)   dos secciones
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/8.b2_musescore.strudel.js`

```js
setcpm(160 / 3);

/*
Louise, del final del C2 al inicio del C3, como suena en MuseScore.

Fuente: 7. Partituras/2. Composiciones/Louise-melancolica.mscz
        guardado 2026-10-31 12:31 · commit fa80a73 (blob 0bf41d8, limpio)
        c.75–100: la segunda mitad del C2, el B2 entero y la primera mitad
        del C3, con su batería. Notas, golpes y velocidades comprobados
        contra el .musicxml y contra el MIDI que exporta MuseScore, que es lo
        que suena.

Qué cambia contra 7.b2_bateria
  - Las velocidades son las que toca MuseScore, sacadas de su MIDI: con los
    reguladores (el violín baja de 112 a 49 a lo largo del B2).
  - La guitarra arpegia como MuseScore: cada cuerda entra 0.71 semicorcheas
    después de la anterior (unos 66 ms), y el acorde termina donde termina.
  - La mezcla copia el mezclador de MuseScore: guitarra −6 dB, shaker −10.7 dB.

Lo que MuseScore toca y aquí no
  - La reverb: MuseScore manda 0.3 de cada pista, menos del piano, a su reverb.
  - Los sonidos: MuseScore usa MS Basic; aquí son General MIDI y el kit AkaiLinn.
  - Los cifrados ya no: sus pistas están silenciadas en el mezclador.

Para qué
  Probar baterías en este tramo. Violín, guitarra y piano son la partitura y
  no se tocan aquí: lo que se edita es la batería en prueba (4). Lo que se
  quede se escribe a mano en MuseScore; este archivo no vuelve al .mscz.

Cómo se itera
  - Cambia la batería en 4. Empieza igual a la de la partitura.
  - OIR_PARTITURA = true (en 1) vuelve a la del .mscz, para comparar.
  - MEZCLA (en 1) baja o apaga los demás: la batería sola o al frente.
  - tramo(81, 85) (en 7) repite solo esos compases.

Cómo está armado
  1. Sonido y mezcla          qué suena, a qué volumen y qué batería.
  2. Matices                  las velocidades de MuseScore, por compás.
  3. Herramientas             las de 7.b2_bateria, con el arpegio de MuseScore.
  4. Batería en prueba        la que se edita.
  5. Batería de la partitura  la del .mscz, para comparar. No se edita.
  6. Secciones                una por sección, una entrada por compás.
  7. Forma                    el orden, o un tramo.

Convenciones
  - Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con
    su número y el cifrado de la partitura, para leerla al lado de MuseScore.
  - Todo va en altura real: la guitarra se escribe una octava arriba de como
    suena.
  - Toda comilla es mini-notación. VS Code, al guardar, pasa las comillas
    simples a dobles, así que el código no usa textos de JavaScript: los
    interruptores son true o false, las claves van sin comillas y los
    mensajes de error van en String.raw`…`, lo único que ni Strudel ni el
    formateador tocan.
*/

// ═══════════════════════ 1. Sonido y mezcla ══════════════════════

const SONIDO = {
  arco: "gm_violin", // en todo el tramo el violín va con arco
  guitarra: "gm_acoustic_guitar_nylon",
  piano: "piano",
  kit: "AkaiLinn",
};

// Volumen de cada instrumento: 0 lo apaga. Copia el mezclador de MuseScore,
// donde todo va a +12 dB salvo la guitarra, a +6: 10^(−6/20) = 0.5
const MEZCLA = { violin: 1, guitarra: 0.5, piano: 1, bateria: 1 };

// Dentro de la batería, por muestra; la que no está, a 1. El shaker va a
// +1.3 dB: 10^(−10.7/20) = 0.29
const KIT = { sh: 0.29 };

// Qué batería suena: false la de 4 (la que editas), true la de 5 (la partitura)
const OIR_PARTITURA = false;

// Cada cuerda de un acorde arpegiado entra 0.71 semicorcheas después de la
// anterior, como en MuseScore
const ARPEGIO = 0.71 / 12;

// ═══════════════════════ 2. Matices ══════════════════════
/*
Las velocidades que toca MuseScore, en MIDI (0–127), sacadas del MIDI que
exporta: ya traen los reguladores. Una entrada vale desde su compás hasta la
siguiente. Si cambia dentro del compás va en mini-notación, en semicorcheas:
"[101@10 112@2]" es 101 en las diez primeras y 112 en las dos últimas. Al
lado van las marcas escritas en la partitura.
*/

// Batería: la velocidad de cada golpe, la que muestra Propiedades en MuseScore
const FUERTE = 103;
const NORMAL = 90;
const MEDIO = 80; // la de los golpes sin velocidad propia
const SUAVE = 68;
const GHOST = 34;

const DINAMICA = {
  violin: {
    75: 65, // mp · < hasta el 79
    76: 67,
    77: 71,
    78: 74,
    79: 78,
    80: 80,
    83: "[101@10 112@2]", // f, escrita al final del 82 · > del 83 al 91
    84: "[111@6 107@6]",
    85: 102,
    86: 94,
    87: "[85@8 80@4]",
    88: "[77@4 74@6 70@2]",
    89: "[68@8 62@4]",
    90: "[60 57 54]",
    91: 50, // mp, con la velocidad de p · < al final del 92, hasta el mf
    92: 49,
    93: 82, // mf, escrita al final del 92
    94: 96,
    98: "[96 95 93]", // > desde el 98
    99: "[91 89 87]",
    100: "[86@2 85@2 84@4 82@4]",
  },
  guitarra: {
    1: 80, // la partitura no le marca nada: mf
  },
  piano: {
    75: 67, // mp desde el c.73 · < hasta el 82
    76: 69,
    77: 71,
    78: 72,
    79: 74,
    80: 76,
    81: 78,
    82: 79,
    83: "[96@3 112@9]", // f · < al empezar el 83
    84: 112,
    90: "[112@4 114@6 122@2]", // ff · < del 90 al 91
    91: "[124@6 127@6]",
    92: 127,
    94: "[127 80 83]", // mf en el 2 · < hasta el 95
    95: "[86 89 92]",
    96: 96,
  },
};

// ═══════════════════════ 3. Herramientas ══════════════════════

// Un mensaje de error, siempre en String.raw`…` (ver Convenciones)
let fallar = (mensaje) => {
  throw new Error(mensaje);
};

// Una entrada por compás → un compás por ciclo
let compases = (lista) => cat(...lista);

// La marca que vale en un compás: la última escrita en él o antes
let vigente = (mapa, compas) =>
  mapa[Math.max(...Object.keys(mapa).map(Number).filter((c) => c <= compas))];

// Un mapa { compás: velocidad MIDI } leído compás por compás, desde `desde` y
// durante `n`, en la escala de Strudel (0–1)
let marcas = (mapa, desde, n) =>
  cat(...Array.from({ length: n }, (_, i) => vigente(mapa, desde + i))).div(127);

// Acordes arpegiados, como los toca MuseScore: en cada acorde, la nota i (de
// grave a aguda) entra i × gap después y termina con las demás. Las notas
// sueltas suenan tal cual.
let arpegio = (pat, gap) => {
  let numeradas = pat.withHaps((haps) => {
    let vistas = new Map();
    return haps.map((hap) => {
      let inicio = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = vistas.get(inicio) ?? 0;
      vistas.set(inicio, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numeradas
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap)
        .withHaps((haps) =>
          haps.flatMap((hap) => {
            let fin = hap.whole.end.sub(i * gap);
            return hap.part.begin.gte(fin)
              ? []
              : [new Hap(new TimeSpan(hap.whole.begin, fin), new TimeSpan(hap.part.begin, hap.part.end.min(fin)), hap.value, hap.context)];
          }),
        ),
    ),
  );
};

// ── Secciones ──
// Una sección es un objeto: desde qué compás empieza y una lista por parte
// (violin, guitarra, der, izq), más su batería. La parte que no está, calla.

// Cuántos compases dura una sección; todas sus partes tienen que coincidir
let largo = (sec) => {
  let partes = [sec.violin, sec.guitarra, sec.der, sec.izq].filter(Boolean);
  let largos = [...new Set(partes.map((lista) => lista.length))];
  if (largos.length !== 1) {
    fallar(String.raw`La sección del c.${sec.desde} tiene partes de ${largos} compases`);
  }
  return largos[0];
};

// ── Instrumentos ──

let violin = (sec) =>
  note(compases(sec.violin))
    .sound(SONIDO.arco)
    .velocity(marcas(DINAMICA.violin, sec.desde, largo(sec)))
    .gain(MEZCLA.violin);

// Arpegiada, salvo en las secciones con `arpegio: false` (acordes en bloque)
let guitarra = (sec) => {
  let notas = note(compases(sec.guitarra));
  return (sec.arpegio === false ? notas : arpegio(notas, ARPEGIO))
    .sound(SONIDO.guitarra)
    .velocity(marcas(DINAMICA.guitarra, sec.desde, largo(sec)))
    .gain(MEZCLA.guitarra);
};

let piano = (sec) =>
  stack(note(compases(sec.der)), note(compases(sec.izq)))
    .sound(SONIDO.piano)
    .velocity(marcas(DINAMICA.piano, sec.desde, largo(sec)))
    .gain(MEZCLA.piano);

// Una línea de batería: el patrón con sus muestras y una velocidad MIDI
let golpe = (patron, vel = MEDIO) => s(patron).velocity(vel / 127);

// Las líneas de una sección, con el kit y el volumen de la mezcla
let bateria = (...lineas) =>
  stack(...lineas)
    .bank(SONIDO.kit)
    .withValue((v) => ({ ...v, gain: MEZCLA.bateria * (KIT[v.s] ?? 1) }));

// Todo lo que toca una sección
let tocar = (sec) =>
  stack(
    sec.violin ? violin(sec) : silence,
    sec.guitarra ? guitarra(sec) : silence,
    sec.der ? piano(sec) : silence,
    sec.bateria ?? silence,
  );

// Las secciones una tras otra, cada una con sus compases
let forma = (...secciones) => arrange(...secciones.map((sec) => [largo(sec), tocar(sec)]));

// Una sección solo de `desde` a `hasta`. Las partes se cortan por compás, así
// que la primera nota no arrastra la cola del compás anterior
let recortar = (sec, desde, hasta) => {
  let i = desde - sec.desde;
  let n = hasta - desde + 1;
  let corte = (lista) => lista && lista.slice(i, i + n);
  return {
    ...sec,
    desde,
    violin: corte(sec.violin),
    guitarra: corte(sec.guitarra),
    der: corte(sec.der),
    izq: corte(sec.izq),
    bateria: sec.bateria && sec.bateria.ribbon(i, n),
  };
};

// ═══════════════════════ 4. Batería en prueba ══════════════════════
/*
La que se edita. Empieza igual a la de la partitura (5).

Una línea por instrumento y por velocidad: golpe(`<…>`, VELOCIDAD). Dentro de
< > va una entrada por compás, siempre todas: cada columna es un compás y cada
fila, una frase. ~ es un compás callado; [bd ~ bd] reparte el compás en sus
tres tiempos, y [~ [~ bd] ~] pone el golpe en la segunda corchea del 2. Si a
una línea le sobra o le falta una entrada, todo lo que sigue se corre un compás.

Muestras: bd bombo · sd caja · hh oh cr hi-hat cerrado, abierto y crash ·
lt mt ht toms · tb pandereta · cb cencerro · cp palmas · sh shaker
Velocidades: FUERTE 103 · NORMAL 90 · MEDIO 80 · SUAVE 68 · GHOST 34 (en 2)

Para sumar un instrumento o una velocidad, copia una línea y cámbiala.
*/

const PRUEBA = {
  // C2, segunda mitad (c.75–82). Filas: c.75–78 · c.79–82
  c2: bateria(
    // Bombo
    golpe(`<
      [bd ~ bd]  [bd bd bd] [bd bd bd] [bd bd bd]
      [bd bd bd] [bd bd bd] [bd bd bd] ~
    >`, FUERTE),
    // Caja
    golpe(`<
      [~ sd sd] [~ sd sd] [~ sd sd] [~ sd sd]
      [~ sd sd] [~ sd sd] [~ sd sd] ~
    >`, FUERTE),
    // Caja
    golpe(`<
      ~             ~             ~             ~
      ~             ~             ~             [~ [sd sd] ~]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~         [~ oh hh] ~         [~ oh hh]
      [~ oh hh] [~ oh hh] [~ oh hh] ~
    >`, SUAVE),
    // Toms
    golpe(`<
      ~        ~        ~        ~
      ~        ~        ~        [lt ~ ~]
    >`, FUERTE),
    // Toms
    golpe(`<
      ~        ~        ~        ~
      ~        ~        ~        [~ ~ mt]
    >`, MEDIO),
    // Pandereta
    golpe(`<
      [~ tb tb]     [~ tb tb]     [~ tb [~ tb]] [~ tb [~ tb]]
      [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]] ~
    >`, NORMAL),
    // Cencerro
    golpe(`<
      ~         ~         ~         [cb cb ~]
      [cb cb ~] [cb cb ~] [cb cb ~] ~
    >`, MEDIO),
    // Cencerro
    golpe(`<
      [cb ~ ~] [cb ~ ~] [cb ~ ~] [~ ~ cb]
      [~ ~ cb] [~ ~ cb] [~ ~ cb] [cb ~ ~]
    >`, SUAVE),
    // Shaker
    golpe(`<
      ~        [sh ~ ~] ~        [sh ~ ~]
      ~        [sh ~ ~] [sh ~ ~] ~
    >`, SUAVE),
  ),

  // B2 (c.83–92). Filas: c.83–84 · c.85–88 · c.89–92
  b2: bateria(
    // Bombo
    golpe(`<
      [bd bd bd]     [bd bd [~ bd]]
      [bd ~ ~]       [bd ~ ~]       [bd ~ ~]       [bd ~ ~]
      [bd ~ ~]       [bd ~ ~]       [bd ~ ~]       ~
    >`, FUERTE),
    // Bombo
    golpe(`<
      ~            ~
      [~ [~ bd] ~] ~            [~ [~ bd] ~] ~
      ~            [~ [~ bd] ~] [~ [~ bd] ~] ~
    >`, MEDIO),
    // Caja
    golpe(`<
      ~              ~
      [[~ sd] ~ sd]  [[~ sd] ~ sd]  [[~ sd] ~ sd]  [[~ sd] ~ sd]
      ~              [[~ sd] ~ sd]  [sd [~ sd] ~]  [sd sd [~ sd]]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~        ~
      ~        ~        ~        ~
      ~        ~        [~ oh ~] ~
    >`, FUERTE),
    // Platillos
    golpe(`<
      [oh hh hh]     ~
      [cr ~ ~]       ~              ~              ~
      ~              [cr ~ [oh hh]] [~ ~ [~ hh]]   ~
    >`, MEDIO),
    // Toms
    golpe(`<
      [ht ~ ~] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, FUERTE),
    // Toms
    golpe(`<
      ~              ~
      ~              ~              ~              ~
      [~ lt [~ mt]]  [~ mt [~ lt]]  ~              [lt mt [~ ht]]
    >`, MEDIO),
    // Pandereta
    golpe(`<
      ~             ~
      [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]] [~ tb [~ tb]]
      ~             [~ tb [~ tb]] [[~ tb] ~ tb] ~
    >`, NORMAL),
    // Pandereta
    golpe(`<
      [tb ~ ~] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, MEDIO),
    // Cencerro
    golpe(`<
      [cb cb ~]     ~
      ~             ~             ~             ~
      [~ cb [~ cb]] ~             ~             ~
    >`, MEDIO),
    // Cencerro
    golpe(`<
      [~ ~ cb] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, SUAVE),
    // Palmas
    golpe(`<
      ~             ~
      [~ cp [~ cp]] [~ cp [~ cp]] [~ cp [~ cp]] [~ cp [~ cp]]
      ~             [~ cp [~ cp]] [[~ cp] ~ cp] ~
    >`, NORMAL),
    // Palmas
    golpe(`<
      [cp ~ ~] ~
      ~        ~        ~        ~
      ~        ~        ~        ~
    >`, MEDIO),
    // Shaker
    golpe(`<
      [sh sh ~]      [[sh sh] ~ sh]
      [[sh sh] ~ sh] [[sh sh] ~ sh] [[sh sh] ~ sh] [[sh sh] ~ sh]
      [sh sh [~ sh]] [sh sh [~ sh]] [[sh sh] ~ sh] [sh sh [~ sh]]
    >`, MEDIO),
  ),

  // C3, primera mitad (c.93–100). Filas: c.93–96 · c.97–100
  c3: bateria(
    // Bombo
    golpe(`<
      [bd bd [~ bd]] [bd ~ ~]       [bd ~ ~]       [bd ~ ~]
      [bd ~ ~]       [bd ~ bd]      ~              [bd ~ bd]
    >`, FUERTE),
    // Caja
    golpe(`<
      ~             [~ sd [~ sd]] [~ sd [~ sd]] [~ sd [~ sd]]
      [~ sd [~ sd]] [~ sd [~ sd]] ~             [~ sd ~]
    >`, FUERTE),
    // Caja
    golpe(`<
      ~        ~        ~        ~
      ~        ~        ~        [~ ~ sd]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~        [~ oh ~] ~        ~
      ~        ~        ~        ~
    >`, FUERTE),
    // Platillos
    golpe(`<
      [cr cr [~ cr]] [~ ~ [~ hh]]   ~              ~
      ~              ~              ~              [cr ~ ~]
    >`, MEDIO),
    // Platillos
    golpe(`<
      ~             ~             [~ oh [~ hh]] ~
      [~ oh [~ hh]] [~ oh [~ hh]] ~             [~ oh hh]
    >`, SUAVE),
    // Toms
    golpe(`<
      ~              ~              ~              ~
      [lt mt [~ ht]] ~              [lt mt [~ ht]] ~
    >`, FUERTE),
    // Pandereta
    golpe(`<
      ~             ~             ~             ~
      ~             ~             [~ tb [~ tb]] ~
    >`, FUERTE),
    // Pandereta
    golpe(`<
      [[~ tb] ~ tb] ~             ~             ~
      ~             ~             ~             ~
    >`, NORMAL),
    // Cencerro
    golpe(`<
      ~             ~             ~             ~
      ~             ~             ~             [[~ cb] ~ cb]
    >`, MEDIO),
    // Shaker
    golpe(`<
      [sh sh [~ sh]] [sh sh [~ sh]] ~              [sh sh [~ sh]]
      ~              [sh sh [~ sh]] [sh sh [~ sh]] [sh sh sh]
    >`, MEDIO),
    // Shaker
    golpe(`<
      ~        ~        [sh ~ ~] ~
      [sh ~ ~] ~        ~        ~
    >`, SUAVE),
  ),
};

// ═══════════════════════ 5. Batería de la partitura ══════════════════════
/*
La del .mscz, tal cual, para comparar con OIR_PARTITURA = true. No se edita: si
la partitura cambia, se vuelve a transcribir.
*/

const PARTITURA = {
  // C2, c.75–82
  c2: bateria(
    golpe("<[bd ~ bd] [bd bd bd]!6 ~>", FUERTE),
    golpe("<[~ sd sd]!7 ~>", FUERTE),
    golpe("<~!7 [~ [sd sd] ~]>", MEDIO),
    golpe("<~ [~ oh hh] ~ [~ oh hh]!4 ~>", SUAVE),
    golpe("<~!7 [lt ~ ~]>", FUERTE),
    golpe("<~!7 [~ ~ mt]>", MEDIO),
    golpe("<[~ tb tb]!2 [~ tb [~ tb]]!5 ~>", NORMAL),
    golpe("<~!3 [cb cb ~]!4 ~>", MEDIO),
    golpe("<[cb ~ ~]!3 [~ ~ cb]!4 [cb ~ ~]>", SUAVE),
    golpe("<~ [sh ~ ~] ~ [sh ~ ~] ~ [sh ~ ~]!2 ~>", SUAVE),
  ),
  // B2, c.83–92
  b2: bateria(
    golpe("<[bd bd bd] [bd bd [~ bd]] [bd ~ ~]!7 ~>", FUERTE),
    golpe("<~!2 [~ [~ bd] ~] ~ [~ [~ bd] ~] ~!2 [~ [~ bd] ~]!2 ~>", MEDIO),
    golpe("<~!2 [[~ sd] ~ sd]!4 ~ [[~ sd] ~ sd] [sd [~ sd] ~] [sd sd [~ sd]]>", MEDIO),
    golpe("<~!8 [~ oh ~] ~>", FUERTE),
    golpe("<[oh hh hh] ~ [cr ~ ~] ~!4 [cr ~ [oh hh]] [~ ~ [~ hh]] ~>", MEDIO),
    golpe("<[ht ~ ~] ~!9>", FUERTE),
    golpe("<~!6 [~ lt [~ mt]] [~ mt [~ lt]] ~ [lt mt [~ ht]]>", MEDIO),
    golpe("<~!2 [~ tb [~ tb]]!4 ~ [~ tb [~ tb]] [[~ tb] ~ tb] ~>", NORMAL),
    golpe("<[tb ~ ~] ~!9>", MEDIO),
    golpe("<[cb cb ~] ~!5 [~ cb [~ cb]] ~!3>", MEDIO),
    golpe("<[~ ~ cb] ~!9>", SUAVE),
    golpe("<~!2 [~ cp [~ cp]]!4 ~ [~ cp [~ cp]] [[~ cp] ~ cp] ~>", NORMAL),
    golpe("<[cp ~ ~] ~!9>", MEDIO),
    golpe("<[sh sh ~] [[sh sh] ~ sh]!5 [sh sh [~ sh]]!2 [[sh sh] ~ sh] [sh sh [~ sh]]>", MEDIO),
  ),
  // C3, c.93–100
  c3: bateria(
    golpe("<[bd bd [~ bd]] [bd ~ ~]!4 [bd ~ bd] ~ [bd ~ bd]>", FUERTE),
    golpe("<~ [~ sd [~ sd]]!5 ~ [~ sd ~]>", FUERTE),
    golpe("<~!7 [~ ~ sd]>", MEDIO),
    golpe("<~ [~ oh ~] ~!6>", FUERTE),
    golpe("<[cr cr [~ cr]] [~ ~ [~ hh]] ~!5 [cr ~ ~]>", MEDIO),
    golpe("<~!2 [~ oh [~ hh]] ~ [~ oh [~ hh]]!2 ~ [~ oh hh]>", SUAVE),
    golpe("<~!4 [lt mt [~ ht]] ~ [lt mt [~ ht]] ~>", FUERTE),
    golpe("<~!6 [~ tb [~ tb]] ~>", FUERTE),
    golpe("<[[~ tb] ~ tb] ~!7>", NORMAL),
    golpe("<~!7 [[~ cb] ~ cb]>", MEDIO),
    golpe("<[sh sh [~ sh]]!2 ~ [sh sh [~ sh]] ~ [sh sh [~ sh]]!2 [sh sh sh]>", MEDIO),
    golpe("<~!2 [sh ~ ~] ~ [sh ~ ~] ~!3>", SUAVE),
  ),
};

const BATERIA = OIR_PARTITURA ? PARTITURA : PRUEBA;

// ═══════════════════════ 6. Secciones ══════════════════════

// ─────────────────────── C2, segunda mitad (c.75–82) ───────────────────────
/*
El coro 1 con otro violín. El piano cambia el bajo del c.76 (Si2) y los
c.80–82 (Gmaj13 · A7 · E♭7): el c.82 pone E♭7 donde el coro habría cerrado
en D, y la guitarra calla en él.
*/

const C2 = {
  desde: 75,
  violin: [
    "[E4@2 C#4]",                       // c.75     Em
    "D4",                               // c.76     G
    "[E4@4 F#4 G4@3 A4@4]",             // c.77     F#m7
    "[B4 F#4]",                         // c.78     Bm
    "[[E4,G4]@2 [B3,B4]]",              // c.79     Em
    "[D4,G4,E5]",                       // c.80     Gmaj13
    "[[F#4,C#5]@2 [A4,E5]@3 [E4,C#5]]", // c.81     A7
    "[G4,Eb5]",                         // c.82     Eb7
  ],
  guitarra: [
    "[E2,B2,E3,G3,B3,E4]",               // c.75     Em
    "[G2,B2,G3,B3]",                     // c.76     G
    "[F#2,A2,F#3,A3]",                   // c.77     F#m7
    "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.78     Bm
    "[E2,B2,E3,G3,B3,E4]",               // c.79     Em
    "[G2,B2,G3,B3]",                     // c.80     Gmaj13
    "[A2,C#3,E4,A4,E5]",                 // c.81     A7
    "~",                                 // c.82     Eb7
  ],
  der: [
    "[~ [E4,E5] [E4,E5]]",      // c.75     Em
    "[~ [D4,B4] [D4,B4]]",      // c.76     G
    "[~ [E4,A4] [E4,A4]]",      // c.77     F#m7
    "[D4,F#4]",                 // c.78     Bm
    "[~ G4 G4]",                // c.79     Em
    "[~ [E4,D5] [F#4,D5]]",     // c.80     Gmaj13
    "[~@2 [G4,C#5]@3 [A4,E5]]", // c.81     A7
    "[Bb4,Eb5]",                // c.82     Eb7
  ],
  izq: [
    "[[E2,E3] E3 E3]",                 // c.75     Em
    "[[B2,G3] G3 G3]",                 // c.76     G
    "[[F#2,F#3] F#3 F#3]",             // c.77     F#m7
    "[[[B2,B3] ~@2], B3]",             // c.78     Bm
    "[[E2,E3] [E3,B3] [E3,B3]]",       // c.79     Em
    "[[G2,F#3] [E3,G3] [F#3,B3]]",     // c.80     Gmaj13
    "[[A2,E3]@2 [C#3,E3]@3 [C#3,E3]]", // c.81     A7
    "[[Eb2,Db3]@4 Bb3 G3]",            // c.82     Eb7
  ],
  bateria: BATERIA.c2,
};

// ─────────────────────── B2 (c.83–92) ───────────────────────
/*
La armadura pasa a un bemol. La guitarra deja el arpegio: acordes en bloque
desde el c.85.
*/

const B2 = {
  desde: 83,
  violin: [
    "[[D4,A4]@5 [F4,D5]]",                 // c.83     Dm
    "[[D4,F5] [F4,D5]]",                   // c.84     Dm
    "[Bb3,Bb4,G5]",                        // c.85     Gm
    "[C4,A4,E5]",                          // c.86     Am
    "[[C4,G4,F5]@2 [F4,C5,F5]]",           // c.87     Csus4
    "[[G4,D5]@2 [D4,B4]@3 [B3,G4]]",       // c.88     G7
    "[[C4,G4]@2 [E4,C5]]",                 // c.89     C7
    "[[F4,C5,F5] [G4,D5,F5] [A4,Eb5,A5]]", // c.90     F · F7
    "[[Bb4,F5,Bb5]@2 [F4,G5]]",            // c.91     Bb
    "[A4,F#5]",                            // c.92     D
  ],
  guitarra: [
    "~",                               // c.83     Dm
    "~",                               // c.84     Dm
    "[~@2 [G2,D3,Bb3]@3 [G2,D3,Bb3]]", // c.85     Gm
    "[~@2 [A2,E3,C4]@3 [A2,E3,C4]]",   // c.86     Am
    "[~@2 [C3,F3,Bb3]@3 [C3,F3,Bb3]]", // c.87     Csus4
    "[~@2 [D3,G3,D4]@3 [D3,G3,D4]]",   // c.88     G7
    "[[C3,G3,E4] [E3,Bb3,E4]]",        // c.89     C7
    "[[F3,C4]@2 [A3,F4]@3 [Eb4,A4]]",  // c.90     F · F7
    "[D3,Bb3,D4,F4,Bb4]",              // c.91     Bb
    "[[D3,A3,F#4] [D3,A3,F#4]]",       // c.92     D
  ],
  der: [
    "[[A4,F5] [G4,E5]@2 [F4,D5]]",                  // c.83     Dm
    "[[D4,A4] [F4,D5]]",                            // c.84     Dm
    "[G4 Bb4 D5@3 D5]",                             // c.85     Gm
    "[E5 A4@3 F4 A4]",                              // c.86     Am
    "[C5 F4 [G4,F5]@3 [F4,C5]]",                    // c.87     Csus4
    "[[G4,D5] [B4,F5]@3 D5 B4]",                    // c.88     G7
    "[C5 G4 E4]",                                   // c.89     C7
    "[F4@2 [A4,F5]@3 [A4,A5]]",                     // c.90     F · F7
    "[[D4,Bb4,Bb5]@3 [F4,Bb4,Bb5] [F4,Bb4,Bb5]@2]", // c.91     Bb
    "[[F#4,D5,A5]@2 G4 B4 D5 F#5]",                 // c.92     D
  ],
  izq: [
    "[D2,D3,A3]",                    // c.83     Dm
    "[[D2,F3] [A2,D3]]",             // c.84     Dm
    "[[G2,D3]@2 [D3,G3]@3 [D3,G3]]", // c.85     Gm
    "[[C3,A3] [E3,A3]@3 [A2,E3]@2]", // c.86     Am
    "[[C3,G3]@2 [F2,C3]@3 [C3,G3]]", // c.87     Csus4
    "[[G2,G3]@2 [F2,F3]@3 [G2,F3]]", // c.88     G7
    "[[C3,Bb3] [C3,G3] [C3,E3]]",    // c.89     C7
    "[[F2,F3,A3]@4 ~ [A2,Eb3,A3]]",  // c.90     F · F7
    "[Bb2,F3,C4]",                   // c.91     Bb
    "[[D2,A3]@5 [D2,F#3]]",          // c.92     D
  ],
  arpegio: false,
  bateria: BATERIA.b2,
};

// ─────────────────────── C3, primera mitad (c.93–100) ───────────────────────
/*
Vuelve a Re mayor. El coro 1 con otro violín, que canta esta mitad; la
guitarra calla en el c.96. Cierra en A7 → D (c.99–100).
*/

const C3 = {
  desde: 93,
  violin: [
    "[B3,G4,E5]",                      // c.93     Em
    "[[G4,D5] F#4 G4]",                // c.94     G
    "[A4@2 C#4@3 D4]",                 // c.95     F#m7
    "[[D4,F#4]@2 [D4,B4]@3 [F#4,D5]]", // c.96     Bm
    "[G4,E5]",                         // c.97     Em
    "[[G4,D5] F#4 G4]",                // c.98     G
    "[A4 C#4 E4]",                     // c.99     A7
    "[F#4 E4 D4@2 F#4@2]",             // c.100    D
  ],
  guitarra: [
    "[E2,B2,E3,G3,B3,E4]",               // c.93     Em
    "[G2,B2,G3,B3]",                     // c.94     G
    "[F#2,A2,F#3,A3]",                   // c.95     F#m7
    "~",                                 // c.96     Bm
    "[E2,B2,E3,G3,B3,E4]",               // c.97     Em
    "[G2,B2,G3,B3]",                     // c.98     G
    "[A2,C#3,E4,A4,E5]",                 // c.99     A7
    "[~ [A3,D4,F#4,A4] [A3,D4,F#4,A4]]", // c.100    D
  ],
  der: [
    "[[G4,E5,G5] E4 E4]",            // c.93     Em
    "[~ G4 G4]",                     // c.94     G
    "[~ F#4 F#4]",                   // c.95     F#m7
    "[~@2 [B4,F#5]@3 [F#4,B4,F#5]]", // c.96     Bm
    "[~ E4 E4]",                     // c.97     Em
    "[~ G4 G4]",                     // c.98     G
    "[~@2 A4@3 A4]",                 // c.99     A7
    "~",                             // c.100    D
  ],
  izq: [
    "[[E2,E3] ~@2]",   // c.93     Em
    "[G3 ~@2]",        // c.94     G
    "[F#3 ~@2]",       // c.95     F#m7
    "[[B2 ~@2], B3]",  // c.96     Bm
    "[E3 ~@2]",        // c.97     Em
    "[G2 G3 G3]",      // c.98     G
    "[A2@2 E3@3 E3]",  // c.99     A7
    "[[D2 ~@2], D3]",  // c.100    D
  ],
  bateria: BATERIA.c3,
};

// ═══════════════════════ 7. Forma ══════════════════════

const TRAMO = [C2, B2, C3];

// Unos compases sueltos, en bucle: tramo(81, 85) va del c.81 al c.85
let tramo = (desde, hasta) => {
  let inicio = TRAMO[0].desde;
  let fin = inicio + TRAMO.reduce((n, sec) => n + largo(sec), 0) - 1;
  if (desde < inicio || hasta > fin || desde > hasta) {
    fallar(String.raw`tramo: este archivo va del c.${inicio} al c.${fin}`);
  }
  let partes = TRAMO.filter((sec) => sec.desde <= hasta && sec.desde + largo(sec) > desde).map((sec) =>
    recortar(sec, Math.max(desde, sec.desde), Math.min(hasta, sec.desde + largo(sec) - 1)),
  );
  return forma(...partes);
};

forma(...TRAMO);

// Para trabajar un pedazo, cambia la línea de arriba. Todo suena en bucle:
//   tramo(81, 85)   la entrada al B2
//   tramo(90, 94)   la salida, del F al c.94
//   tocar(B2)       una sección sola
//   forma(B2, C3)   dos secciones
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/AI/4.ai_1.b2_waltz.strudel.js`

```js
setcpm(160 / 3);

/*
Louise, B2 en vals: una propuesta para revisar (Claude, 2026-10-18).
No toca la partitura ni 3.full_score: es un archivo aparte para oírlo.

Toca el cierre del coro 2 (c.75–81, tal como está en la partitura), un B2 nuevo
(c.82–90) y el primer compás del C3 (c.91, Em). Sin batería, a propósito.

Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con su
número y su cifrado. La guitarra va en altura real (suena así).

Las decisiones, contra la retro de 3. Composiciones/6. louise/AI/10. Feedback del B2:

- Armonía: E♭7 · B♭ · Gm · C · Am · B♭ (C/B♭ en el 3) · A7 · Dm · D (D♯° en el 3) → Em.
  Todo de Re menor natural salvo el E♭7 de entrada, el A7 (la dominante de Re
  menor, con su Do♯) y el D y el D♯° de salida. Ya no hay cadencia en Fa: el B2
  gira alrededor de Re y llega a Dm por su dominante.
- La columna vertebral es el registro: la voz de arriba del piano sube
  Re5 · Re5 · Mi5 · Mi5→La5 · Fa5→Do6 · Mi6 y el punto más alto cae en el c.88,
  el 7.º de 9 compases, sobre el A7, que todavía no resuelve.
- El bajo baja por debajo de Re2 (el piso de toda la pieza): Si♭1, Sol1, La1.
  La masa crece desde abajo: nota sola (c.83–84), quinta (c.85–86), quinta y
  octava (c.87–88). El Si♭→La del bajo (c.87→88) es tu ♭6→5.
- El piano en vals: bajo largo en el 1, acorde en el 2 y el 3. Solo el c.88
  ataca en los tres tiempos: es el golpe del pico.
- La guitarra va por debajo de la mano derecha del piano, en su registro natural
  (trastes bajos), sin unísonos con el piano. Notas de paso en las partes débiles.
  Su densidad crece: calla (c.82) · 4 · 5 · 6 · 6 · 7 ataques · rasgueo (c.88).
- c.89–90: la guitarra toca el motivo con su ritmo de la intro, en menor:
  La–Sol–Fa sobre Dm y Re–Fa♯ sobre D. El Fa→Fa♯ del motivo es el Dm→D.
- c.90: el D dura dos tiempos, y en el 3 el bajo sube Re→Re♯→Mi: el D♯° es la
  sensible de Em (su dominante sin la raíz). Si sobra, quítalo y deja el D entero.
- c.91: el bajo del piano (Mi3) y el de la guitarra (Mi2) coinciden.

Para oír solo el B2, cambia el arrange() del final por `b2`.
*/

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual. (Igual que en 3.full_score.)
let strum = (pat, gap = 0.01) => {
  let numbered = pat.withHaps((haps) => {
    let seen = new Map();
    return haps.map((hap) => {
      let begin = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = seen.get(begin) ?? 0;
      seen.set(begin, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numbered
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");
};

let piano = (right, left) =>
  stack(note(cat(...right)), note(cat(...left))).sound("piano");

let guitar = (list) => strum(note(cat(...list)));

// ═══════════════════ Cierre del coro 2 (c.75–81) ═══════════════════
/*
Copiado de la partitura: la segunda mitad del C2, con el Gmaj13 y el A7 del
final. El A7 no resuelve en D: el c.82 ya es el B2.
*/

const C2_RIGHT = [
  "[~ [E4,E5] [E4,E5]]", // c.75 Em
  "[~ [D4,B4] [D4,B4]]", // c.76 G
  "[~ [E4,A4] [E4,A4]]", // c.77 F#m7
  "[D4,F#4]", // c.78 Bm
  "[~ G4 G4]", // c.79 Em
  "[~ [E4,D5] [F#4,D5]]", // c.80 Gmaj13
  "[~ [G4,C#5] [A4,E5]]", // c.81 A7
];

const C2_LEFT = [
  "[[E2,E3] E3 E3]", // c.75 Em
  "[[G2,G3] G3 G3]", // c.76 G
  "[[F#2,F#3] F#3 F#3]", // c.77 F#m7
  "[B3, [[B2,B3] ~@2]]", // c.78 Bm
  "[[E2,E3] [E3,B3] [E3,B3]]", // c.79 Em
  "[[G2,F#3] [E3,G3] [F#3,B3]]", // c.80 Gmaj13
  "[[A2,E3] [C#3,E3] [C#3,E3]]", // c.81 A7
];

const C2_GUITAR = [
  "[E2,G2,E3,G3]", // c.75 Em
  "[G2,B2,G3,B3]", // c.76 G
  "[F#2,A2,F#3,A3]", // c.77 F#m7
  "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.78 Bm — en el 2 y el 3
  "[E2,G2,E3,G3,E4]", // c.79 Em
  "[G2,B2,G3,B3]", // c.80 Gmaj13
  "[A2,C#3,E4,A4,E5]", // c.81 A7
];

let c2close = stack(
  // Walts
  piano(C2_RIGHT, C2_LEFT),
  // Armonic guitar
  guitar(C2_GUITAR),
);

// ═══════════════════════ B2 (c.82–90) ═══════════════════════
/*
Dos frases de 4 después del E♭7. La primera (B♭ · Gm · C · Am) se queda abierta
en Am; la segunda empieza igual, en B♭, y en vez de seguir sube al A7 del pico.
Del pico se baja por Dm y D hasta el Em del C3.
*/

const B2_RIGHT = [
  "[~ [G4,Bb4,Eb5] [G4,Bb4,Eb5]]", // c.82 E♭7 — La→Si♭ y Mi→Mi♭ desde el A7
  "[~ [F4,Bb4,D5] [F4,Bb4,D5]]", // c.83 B♭
  "[~ [G4,Bb4,D5] [G4,Bb4,D5]]", // c.84 Gm
  "[~ [G4,C5,E5] [G4,C5,E5]]", // c.85 C
  "[~ [A4,C5,E5] [C5,E5,A5]]", // c.86 Am — en el 3 sube una inversión
  "[~ [Bb4,D5,F5] [E5,G5,C6]]", // c.87 B♭ · C/B♭ — se agacha y salta
  "[[E5,G5,C#6,E6] [E5,G5,C#6,E6] [E5,G5,C#6,E6]]", // c.88 A7 — el pico, en los tres tiempos
  "[~ [F5,A5,D6] [F5,A5,D6]]", // c.89 Dm — el Do♯ sube a Re, el Sol baja a Fa
  "[~ [F#5,A5,D6] [D#5,F#5,A5]]", // c.90 D · D♯°
];

const B2_LEFT = [
  "[Eb2,Db3]", // c.82 E♭7 — el Do♯ del A7 se queda como Re♭
  "Bb1", // c.83 B♭ — en estado fundamental
  "G1", // c.84 Gm
  "[C2,G2]", // c.85 C — quinta
  "[A1,E2]", // c.86 Am
  "[Bb1,F2,Bb2]", // c.87 B♭ — quinta y octava
  "[A1,E2,A2]", // c.88 A7 — Si♭→La en el bajo
  "[D2,A2]", // c.89 Dm
  "[D2@2 D#2]", // c.90 D · D♯° — Re→Re♯→Mi
];

const B2_GUITAR = [
  "~", // c.82 E♭7 — calla: respira antes del B♭
  "[Bb2@2 F3 Bb3 D4@2]", // c.83 B♭
  "[G2@2 D3 G3 Bb3 C4]", // c.84 Gm — el Do anticipa el C
  "[C3 G3 C4 D4 E4 G3]", // c.85 C — Re de paso
  "[A2 E3 A3 C4 E4 G4]", // c.86 Am — Sol de paso
  "[D3 F3 Bb3 D4 E4 [F4 G4]]", // c.87 B♭ · C/B♭ — sube hacia el pico
  "[[E3,G3,C#4,E4] [E3,G3,C#4,E4] [E3,G3,C#4,E4]]", // c.88 A7 — rasgueo en los tres tiempos
  "[A4 G4@2 F4]", // c.89 Dm — el motivo en menor
  "[D4@5 F#4@7]", // c.90 D · D♯° — …y vuelve a mayor
];

let b2 = stack(
  // Piano
  piano(B2_RIGHT, B2_LEFT),
  // Guitar
  guitar(B2_GUITAR),
);

// ═══════════════════ Entrada del C3 (c.91) ═══════════════════
/*
El primer compás del coro, como en el c.27.
*/

let c3entry = stack(
  // Walts
  piano(["[~ E4 E4]"], ["[E3 ~@2]"]),
  // Armonic guitar
  guitar(["[E2,G2,E3,G3]"]),
);

arrange(
  // Chorus 2, segunda mitad
  [7, c2close],
  // B2
  [9, b2],
  // C3, primer compás
  [1, c3entry],
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/AI/4.ai_2.b2_respiro.strudel.js`

```js
setcpm(160 / 3);

/*
Louise, B2 con respiro: segunda propuesta para revisar (Claude, 2026-10-18).
No toca la partitura ni los otros archivos. 4.ai_1.b2_waltz queda para comparar.

Toca el cierre del coro 2 (c.75–81, tal como está en la partitura), el B2
(c.82–90) y el primer compás del C3 (c.91, Em). Sin batería, a propósito.

Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con su
número y su cifrado. La guitarra va en altura real (suena así).

Qué cambia respecto a 4.ai_1.b2_waltz:

- c.82–83 respiran, como en la partitura. El c.82 es tu E♭7 tal cual
  (acorde largo y el arpegio de corcheas al final). El c.83 repite el gesto
  sobre B♭: acorde largo, en estado fundamental, y un arpegio que lleva al vals.
  La guitarra calla en los dos.
- El vals entra en el c.84, después del B♭, y con él entra la guitarra.
- La guitarra ya no arpegia: toca una línea hecha de la cabeza del motivo
  (La–Sol–Fa♯), con su ritmo de la intro, y la sube por grados:
    c.84 Re–Do–Si♭ · c.85 Mi–Re–Do · c.86 responde subiendo en corcheas
    · c.87 escala hasta el La que adelanta el A7 · c.88 rasgueo
    · c.89–90 el motivo entero, en menor y luego en mayor.
  Las notas de paso (el Do sobre Gm, el Re sobre C) caen en las notas largas.

Lo que se queda igual que en 4.ai_1.b2_waltz, del c.84 al 91:

- Armonía: E♭7 · B♭ · Gm · C · Am · B♭ (C/B♭ en el 3) · A7 · Dm · D (D♯° en el 3) → Em.
- La voz de arriba del piano sube hasta el Mi6 del c.88, sobre el A7.
- El bajo baja de Re2 y engorda: nota sola, quinta, quinta y octava.
  El Si♭→La del bajo (c.87→88) es tu ♭6→5.
- Sin unísonos ni semitonos entre la guitarra y el piano.
- c.91: el bajo del piano (Mi3) y el de la guitarra (Mi2) coinciden.

Para oír solo el B2, cambia el arrange() del final por `b2`.
*/

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual. (Igual que en 3.full_score.)
let strum = (pat, gap = 0.01) => {
  let numbered = pat.withHaps((haps) => {
    let seen = new Map();
    return haps.map((hap) => {
      let begin = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = seen.get(begin) ?? 0;
      seen.set(begin, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numbered
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");
};

let piano = (right, left) =>
  stack(note(cat(...right)), note(cat(...left))).sound("piano");

let guitar = (list) => strum(note(cat(...list)));

// ═══════════════════ Cierre del coro 2 (c.75–81) ═══════════════════
/*
Copiado de la partitura: la segunda mitad del C2, con el Gmaj13 y el A7 del
final. El A7 no resuelve en D: el c.82 ya es el B2.
*/

const C2_RIGHT = [
  "[~ [E4,E5] [E4,E5]]", // c.75 Em
  "[~ [D4,B4] [D4,B4]]", // c.76 G
  "[~ [E4,A4] [E4,A4]]", // c.77 F#m7
  "[D4,F#4]", // c.78 Bm
  "[~ G4 G4]", // c.79 Em
  "[~ [E4,D5] [F#4,D5]]", // c.80 Gmaj13
  "[~ [G4,C#5] [A4,E5]]", // c.81 A7
];

const C2_LEFT = [
  "[[E2,E3] E3 E3]", // c.75 Em
  "[[G2,G3] G3 G3]", // c.76 G
  "[[F#2,F#3] F#3 F#3]", // c.77 F#m7
  "[B3, [[B2,B3] ~@2]]", // c.78 Bm
  "[[E2,E3] [E3,B3] [E3,B3]]", // c.79 Em
  "[[G2,F#3] [E3,G3] [F#3,B3]]", // c.80 Gmaj13
  "[[A2,E3] [C#3,E3] [C#3,E3]]", // c.81 A7
];

const C2_GUITAR = [
  "[E2,G2,E3,G3]", // c.75 Em
  "[G2,B2,G3,B3]", // c.76 G
  "[F#2,A2,F#3,A3]", // c.77 F#m7
  "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.78 Bm — en el 2 y el 3
  "[E2,G2,E3,G3,E4]", // c.79 Em
  "[G2,B2,G3,B3]", // c.80 Gmaj13
  "[A2,C#3,E4,A4,E5]", // c.81 A7
];

let c2close = stack(
  // Walts
  piano(C2_RIGHT, C2_LEFT),
  // Armonic guitar
  guitar(C2_GUITAR),
);

// ═══════════════════════ B2 (c.82–90) ═══════════════════════
/*
Dos compases de respiro (E♭7 y B♭, acordes largos, piano solo) y siete de vals.
La guitarra entra con el vals y sube con la cabeza del motivo hasta el pico
del c.88; del pico se baja por Dm y D, con el motivo entero, hasta el Em del C3.
*/

const B2_RIGHT = [
  "[Bb4,Eb5]", // c.82 E♭7 — largo, como en la partitura
  "[F4,Bb4,D5]", // c.83 B♭ — largo
  "[~ [G4,Bb4,D5] [G4,Bb4,D5]]", // c.84 Gm — entra el vals
  "[~ [G4,C5,E5] [G4,C5,E5]]", // c.85 C
  "[~ [A4,C5,E5] [C5,E5,A5]]", // c.86 Am — en el 3 sube una inversión
  "[~ [Bb4,D5,F5] [E5,G5,C6]]", // c.87 B♭ · C/B♭ — se agacha y salta
  "[[E5,G5,C#6,E6] [E5,G5,C#6,E6] [E5,G5,C#6,E6]]", // c.88 A7 — el pico, en los tres tiempos
  "[~ [F5,A5,D6] [F5,A5,D6]]", // c.89 Dm — el Do♯ sube a Re, el Sol baja a Fa
  "[~ [F#5,A5,D6] [D#5,F#5,A5]]", // c.90 D · D♯°
];

const B2_LEFT = [
  "[[Eb2,Db3]@3 Eb3 Bb3 G3]", // c.82 E♭7 — tu arpegio de la partitura
  "[[Bb1,F2]@3 Bb2 D3 F3]", // c.83 B♭ — el mismo gesto, lleva al vals
  "G1", // c.84 Gm
  "[C2,G2]", // c.85 C — quinta
  "[A1,E2]", // c.86 Am
  "[Bb1,F2,Bb2]", // c.87 B♭ — quinta y octava
  "[A1,E2,A2]", // c.88 A7 — Si♭→La en el bajo
  "[D2,A2]", // c.89 Dm
  "[D2@2 D#2]", // c.90 D · D♯° — Re→Re♯→Mi
];

const B2_GUITAR = [
  "~", // c.82 E♭7 — calla
  "~", // c.83 B♭ — calla
  "[D4 C4@2 Bb3]", // c.84 Gm — la cabeza del motivo, en Re–Do–Si♭
  "[E4 D4@2 C4]", // c.85 C — la misma, un grado arriba
  "[C4 D4 E4 G4@2 A4]", // c.86 Am — responde subiendo
  "[Bb3 C4 D4 F4 G4 A4]", // c.87 B♭ · C/B♭ — escala; el La adelanta el A7
  "[[E3,G3,C#4,E4] [E3,G3,C#4,E4] [E3,G3,C#4,E4]]", // c.88 A7 — rasgueo en los tres tiempos
  "[A4 G4@2 F4]", // c.89 Dm — el motivo en menor
  "[D4@5 F#4@7]", // c.90 D · D♯° — …y vuelve a mayor
];

let b2 = stack(
  // Piano
  piano(B2_RIGHT, B2_LEFT),
  // Guitar
  guitar(B2_GUITAR),
);

// ═══════════════════ Entrada del C3 (c.91) ═══════════════════
/*
El primer compás del coro, como en el c.27.
*/

let c3entry = stack(
  // Walts
  piano(["[~ E4 E4]"], ["[E3 ~@2]"]),
  // Armonic guitar
  guitar(["[E2,G2,E3,G3]"]),
);

arrange(
  // Chorus 2, segunda mitad
  [7, c2close],
  // B2
  [9, b2],
  // C3, primer compás
  [1, c3entry],
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/AI/4.ai_3.b2_bb_score.strudel.js`

```js
setcpm(160 / 3);

/*
Louise, B2 con el B♭ de la partitura: tercera propuesta para revisar
(Claude, 2026-10-18). No toca la partitura ni los otros archivos;
4.ai_1.b2_waltz y 4.ai_2.b2_respiro quedan para comparar.

Toca el cierre del coro 2 (c.75–81), el B2 (c.82–90) y el primer compás del
C3 (c.91, Em). Sin batería, a propósito.

Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con su
número y su cifrado. La guitarra va en altura real (suena así).

Qué cambia respecto a 4.ai_2.b2_respiro:

- c.82 y c.83 son los de la partitura, nota por nota: el E♭7 con su arpegio, y
  el B♭ con el bajo en Re en tres octavas, el Fa6 en el 3& y la guitarra
  Mi4–Si♭4–Re5–Si♭5 sostenida (sin rasgueo, como en la partitura).
- Como ese B♭ ya llega a Re6/Fa6, el vals del c.84 arranca abajo (Re5) y sube
  más rápido, una inversión por tiempo, hasta un pico más alto: Sol6 en el
  c.88. Así la nota más aguda del B2 vuelve a caer en el pico, no en el c.83.
- El Sol6 es la séptima del A7 y baja a Fa6 en el Dm del c.89: el mismo Fa6
  que se oyó un instante en el c.83. En el c.90 ese Fa sube a Fa♯ (D mayor).

Lo que se queda igual que en 4.ai_2.b2_respiro:

- Armonía: E♭7 · B♭ · Gm · C · Am · B♭ (C/B♭ en el 3) · A7 · Dm · D (D♯° en el 3) → Em.
- El vals entra en el c.84 y con él la guitarra, con la cabeza del motivo
  (Re–Do–Si♭, Mi–Re–Do), una respuesta en corcheas, la escala al pico, el
  rasgueo del c.88 y el motivo entero en c.89–90.
- El bajo baja de Re2 y engorda: nota sola, quinta, quinta y octava.
  El Si♭→La del bajo (c.87→88) es tu ♭6→5.
- Del c.84 al c.90, sin unísonos ni semitonos entre la guitarra y el piano.
  Los del c.83 (Si♭4 en los dos, Mi4 contra Fa5) son de la partitura.

Para oír solo el B2, cambia el arrange() del final por `b2`.
*/

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual. (Igual que en 3.full_score.)
let strum = (pat, gap = 0.01) => {
  let numbered = pat.withHaps((haps) => {
    let seen = new Map();
    return haps.map((hap) => {
      let begin = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = seen.get(begin) ?? 0;
      seen.set(begin, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numbered
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");
};

let piano = (right, left) =>
  stack(note(cat(...right)), note(cat(...left))).sound("piano");

let guitar = (list) => strum(note(cat(...list)));

// Guitarra sin rasgueo: los acordes suenan de golpe
let guitarBlock = (list) =>
  note(cat(...list)).sound("gm_acoustic_guitar_nylon");

// ═══════════════════ Cierre del coro 2 (c.75–81) ═══════════════════
/*
Copiado de la partitura: la segunda mitad del C2, con el Gmaj13 y el A7 del
final. El A7 no resuelve en D: el c.82 ya es el B2.
*/

const C2_RIGHT = [
  "[~ [E4,E5] [E4,E5]]", // c.75 Em
  "[~ [D4,B4] [D4,B4]]", // c.76 G
  "[~ [E4,A4] [E4,A4]]", // c.77 F#m7
  "[D4,F#4]", // c.78 Bm
  "[~ G4 G4]", // c.79 Em
  "[~ [E4,D5] [F#4,D5]]", // c.80 Gmaj13
  "[~ [G4,C#5] [A4,E5]]", // c.81 A7
];

const C2_LEFT = [
  "[[E2,E3] E3 E3]", // c.75 Em
  "[[G2,G3] G3 G3]", // c.76 G
  "[[F#2,F#3] F#3 F#3]", // c.77 F#m7
  "[B3, [[B2,B3] ~@2]]", // c.78 Bm
  "[[E2,E3] [E3,B3] [E3,B3]]", // c.79 Em
  "[[G2,F#3] [E3,G3] [F#3,B3]]", // c.80 Gmaj13
  "[[A2,E3] [C#3,E3] [C#3,E3]]", // c.81 A7
];

const C2_GUITAR = [
  "[E2,G2,E3,G3]", // c.75 Em
  "[G2,B2,G3,B3]", // c.76 G
  "[F#2,A2,F#3,A3]", // c.77 F#m7
  "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.78 Bm — en el 2 y el 3
  "[E2,G2,E3,G3,E4]", // c.79 Em
  "[G2,B2,G3,B3]", // c.80 Gmaj13
  "[A2,C#3,E4,A4,E5]", // c.81 A7
];

let c2close = stack(
  // Walts
  piano(C2_RIGHT, C2_LEFT),
  // Armonic guitar
  guitar(C2_GUITAR),
);

// ═══════════════════════ B2 (c.82–90) ═══════════════════════
/*
Dos compases de la partitura (E♭7 y B♭) y siete de vals. El vals arranca abajo
y sube una inversión por tiempo hasta el Sol6 del c.88; del pico se baja por
Dm y D, con el motivo entero en la guitarra, hasta el Em del C3.
*/

const B2_RIGHT = [
  "[Bb4,Eb5]", // c.82 E♭7 — de la partitura
  "[[Bb4,F5,D6]@2 [Bb4,F5,D6]@3 [Bb4,F5,F6]]", // c.83 B♭ — de la partitura
  "[~ [G4,Bb4,D5] [G4,Bb4,D5]]", // c.84 Gm — entra el vals, abajo
  "[~ [G4,C5,E5] [C5,E5,G5]]", // c.85 C — en el 3 sube una inversión
  "[~ [C5,E5,A5] [E5,A5,C6]]", // c.86 Am — otra
  "[~ [F5,Bb5,D6] [G5,C6,E6]]", // c.87 B♭ · C/B♭ — otra
  "[[G5,C#6,E6,G6] [G5,C#6,E6,G6] [G5,C#6,E6,G6]]", // c.88 A7 — el pico, en los tres tiempos
  "[~ [A5,D6,F6] [A5,D6,F6]]", // c.89 Dm — el Sol6 baja a Fa6, el Do♯ sube a Re
  "[~ [A5,D6,F#6] [A5,D#6,F#6]]", // c.90 D · D♯° — el Fa sube a Fa♯, el Re a Re♯
];

const B2_LEFT = [
  "[[Eb2,Db3]@3 Eb3 Bb3 G3]", // c.82 E♭7 — de la partitura
  "[D2,D3,D4]", // c.83 B♭ — de la partitura: bajo en Re
  "G1", // c.84 Gm
  "[C2,G2]", // c.85 C — quinta
  "[A1,E2]", // c.86 Am
  "[Bb1,F2,Bb2]", // c.87 B♭ — quinta y octava
  "[A1,E2,A2]", // c.88 A7 — Si♭→La en el bajo
  "[D2,A2]", // c.89 Dm
  "[D2@2 D#2]", // c.90 D · D♯° — Re→Re♯→Mi
];

const B2_GUITAR = [
  "~", // c.82 E♭7 — calla
  "~", // c.83 B♭ — va aparte, sin rasgueo (B2_GUITAR_BLOCK)
  "[D4 C4@2 Bb3]", // c.84 Gm — la cabeza del motivo, en Re–Do–Si♭
  "[E4 D4@2 C4]", // c.85 C — la misma, un grado arriba
  "[C4 D4 E4 G4@2 A4]", // c.86 Am — responde subiendo
  "[Bb3 C4 D4 F4 G4 A4]", // c.87 B♭ · C/B♭ — escala; el La adelanta el A7
  "[[E3,G3,C#4,E4] [E3,G3,C#4,E4] [E3,G3,C#4,E4]]", // c.88 A7 — rasgueo en los tres tiempos
  "[A4 G4@2 F4]", // c.89 Dm — el motivo en menor
  "[D4@5 F#4@7]", // c.90 D · D♯° — …y vuelve a mayor
];

const B2_GUITAR_BLOCK = [
  "~", // c.82
  "[E4,Bb4,D5,Bb5]", // c.83 B♭ — de la partitura, sostenido
  "~", // c.84
  "~", // c.85
  "~", // c.86
  "~", // c.87
  "~", // c.88
  "~", // c.89
  "~", // c.90
];

let b2 = stack(
  // Piano
  piano(B2_RIGHT, B2_LEFT),
  // Guitar
  guitar(B2_GUITAR),
  // Guitar, el acorde del c.83
  guitarBlock(B2_GUITAR_BLOCK),
);

// ═══════════════════ Entrada del C3 (c.91) ═══════════════════
/*
El primer compás del coro, como en el c.27.
*/

let c3entry = stack(
  // Walts
  piano(["[~ E4 E4]"], ["[E3 ~@2]"]),
  // Armonic guitar
  guitar(["[E2,G2,E3,G3]"]),
);

arrange(
  // Chorus 2, segunda mitad
  [7, c2close],
  // B2
  [9, b2],
  // C3, primer compás
  [1, c3entry],
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/AI/4.ai_4.b2_resuelto.strudel.js`

```js
setcpm(160 / 3);

/*
Louise, B2 con todo el feedback resuelto: cuarta propuesta para revisar
(Claude, 2026-10-18). No toca la partitura ni tus archivos.
Las versiones anteriores (4.ai_1, 4.ai_2, 4.ai_3) quedan para comparar.

Toca el cierre del coro 2 (c.75–81), el B2 (c.82–92) y el primer compás del
C3 (c.93, Em). El B2 mide 11 compases, así que en la partitura el C3 pasaría
del c.91 al c.93. Sin batería, a propósito.

Un ciclo = un compás de 3/4. Cada lista lleva una entrada por compás, con su
número y su cifrado. La guitarra va en altura real (suena así).
La dinámica va en las listas *_DYN: un valor de velocity por compás.

Cada punto de 3. Composiciones/6. louise/AI/10. Feedback del B2, y cómo queda:

§2.1 c.91 (el piano seguía en el B2) → en la entrada del C3 el bajo del piano y
     el de la guitarra son Mi; no queda ningún Si♭ ni Fa, y el Fa♯ ya no vuelve a Fa.
§2.2 El Dm no sonaba → Dm limpio, con su compás (c.91). El D dura dos tiempos (c.92).
§2.3 F7/B♭ del c.89 → ya no existe: no hay cadencia en Fa.
§2.4 El B♭ disfrazado → B♭ en estado fundamental (Si♭1–Fa2 en el bajo), sin Mi
     natural y con la guitarra en su registro. Conserva el ritmo de la partitura
     (1 · 2 con puntillo · 3&), una octava abajo.
§2.5 Batería → fuera, como pediste.
§2.6 El B2 sonaba a valle → crescendo de mp a ff dentro del B2 (B2_DYN) y la masa
     crece hasta 11 notas a la vez. Termina por encima del C2.
§3.1 Empezaba arriba y bajaba → la voz de arriba del piano sube de Re5 a Sol6.
§3.2 Se cerraba solo en Fa → el clímax cae en el A7, sostenido dos compases sobre
     un pedal de La (c.89–90), sin resolver. Resuelve en el Dm, ya de bajada.
§3.3 Fa mayor en vez de B♭ → el B2 gira en Re menor (B♭ es el ♭VI). La armadura
     de un bemol de la partitura ahora sí dice lo que suena.
§3.4 B♭ → Dm → Em → B♭ · Gm · C · Am · B♭ · C/B♭ · A7 · A7 · Dm · D (D♯° en el 3) → Em.
     El bajo hace Si♭→La (tu ♭6→5) al llegar al pico, y Re→Re♯→Mi al entrar al C3.
     El B2 entra (B♭) y sale (Dm) por acordes distintos.
§3.5 El mismo empuje en todos los compases → vals desde el c.84 (vuelve el tiempo
     3). El empuje del 3& queda solo para dos llegadas: el c.83 al vals y el c.88
     al pico (la guitarra adelanta el La del A7).
§3.6 Piano y guitarra en la misma octava → bandas separadas, sin unísonos ni
     semitonos. La guitarra ataca en el 1 y entre tiempos; el piano en el 2 y el 3.
§3.7 El motivo enterrado → la cabeza del motivo en secuencia (c.84–87) y el motivo
     entero al descubierto en c.91–92, sin nada en su registro.
§3.8 El piso en Re2 → el bajo baja a Sol1, La1 y Si♭1, y engorda hacia el pico.
§3.9 El pico duraba lo que el valle → 11 compases (~12 s) contra los 8 del B1.
§3.10 La guitarra real → todo en posiciones bajas, trastes 0 a 3.
§4   Recursos que no se usaban, ahora sí: pedal (Si♭ en c.87–88, La en c.89–90),
     dinámica, rasgueo, la dominante de Em (D♯°) y el motivo transformado.
     Siguen sin usarse: batería, aahs, voz, silencio y tag.

Para oír solo el B2, cambia el arrange() del final por `b2`.
*/

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual. (Igual que en 3.full_score.)
let strum = (pat, gap = 0.01) => {
  let numbered = pat.withHaps((haps) => {
    let seen = new Map();
    return haps.map((hap) => {
      let begin = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = seen.get(begin) ?? 0;
      seen.set(begin, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numbered
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");
};

let piano = (right, left) =>
  stack(note(cat(...right)), note(cat(...left))).sound("piano");

let guitar = (list) => strum(note(cat(...list)));

// Guitarra sin rasgueo: los acordes suenan de golpe
let guitarBlock = (list) =>
  note(cat(...list)).sound("gm_acoustic_guitar_nylon");

// Dinámica: un valor de velocity por compás
let dyn = (list) => cat(...list);

// ═══════════════════ Cierre del coro 2 (c.75–81) ═══════════════════
/*
Las notas son las de la partitura. Lo único nuevo es un crescendo hacia el B2.
*/

const C2_RIGHT = [
  "[~ [E4,E5] [E4,E5]]", // c.75 Em
  "[~ [D4,B4] [D4,B4]]", // c.76 G
  "[~ [E4,A4] [E4,A4]]", // c.77 F#m7
  "[D4,F#4]", // c.78 Bm
  "[~ G4 G4]", // c.79 Em
  "[~ [E4,D5] [F#4,D5]]", // c.80 Gmaj13
  "[~ [G4,C#5] [A4,E5]]", // c.81 A7
];

const C2_LEFT = [
  "[[E2,E3] E3 E3]", // c.75 Em
  "[[G2,G3] G3 G3]", // c.76 G
  "[[F#2,F#3] F#3 F#3]", // c.77 F#m7
  "[B3, [[B2,B3] ~@2]]", // c.78 Bm
  "[[E2,E3] [E3,B3] [E3,B3]]", // c.79 Em
  "[[G2,F#3] [E3,G3] [F#3,B3]]", // c.80 Gmaj13
  "[[A2,E3] [C#3,E3] [C#3,E3]]", // c.81 A7
];

const C2_GUITAR = [
  "[E2,G2,E3,G3]", // c.75 Em
  "[G2,B2,G3,B3]", // c.76 G
  "[F#2,A2,F#3,A3]", // c.77 F#m7
  "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // c.78 Bm — en el 2 y el 3
  "[E2,G2,E3,G3,E4]", // c.79 Em
  "[G2,B2,G3,B3]", // c.80 Gmaj13
  "[A2,C#3,E4,A4,E5]", // c.81 A7
];

const C2_DYN = [
  0.68, // c.75 mf
  0.7, // c.76
  0.72, // c.77
  0.73, // c.78
  0.75, // c.79
  0.78, // c.80
  0.8, // c.81 f
];

let c2close = stack(
  // Walts
  piano(C2_RIGHT, C2_LEFT),
  // Armonic guitar
  guitar(C2_GUITAR),
).velocity(dyn(C2_DYN));

// ═══════════════════════ B2 (c.82–92) ═══════════════════════
/*
Dos compases de respiro (E♭7 y B♭), seis de vals que suben (B♭ · Gm · C · Am ·
B♭ · C/B♭), dos de pico sobre un pedal de La (A7) y dos de bajada (Dm · D) hasta
el Em del C3.
*/

const B2_RIGHT = [
  "[Bb4,Eb5]", // c.82 E♭7 — de la partitura
  "[[F4,Bb4,D5]@2 [F4,Bb4,D5]@3 [F4,Bb4,F5]]", // c.83 B♭ — el ritmo de la partitura, una octava abajo
  "[~ [G4,Bb4,D5] [Bb4,D5,G5]]", // c.84 Gm — entra el vals; en el 3 sube una inversión
  "[~ [C5,E5,G5] [E5,G5,C6]]", // c.85 C — otra
  "[~ [E5,A5,C6] [E5,A5,C6]]", // c.86 Am
  "[~ [F5,Bb5,D6] [F5,Bb5,D6]]", // c.87 B♭
  "[~ [E5,G5,C6] [G5,C6,E6]]", // c.88 C/B♭ — se agacha y salta
  "[~ [G5,C#6,E6] [G5,C#6,E6]]", // c.89 A7 — llega el pico
  "[[G5,C#6,E6,G6] [G5,C#6,E6,G6] [G5,C#6,E6,G6]]", // c.90 A7 — la cima, en los tres tiempos
  "[~ [A5,D6,F6] [A5,D6,F6]]", // c.91 Dm — el Sol6 baja a Fa6, el Do♯ sube a Re
  "[~ [A5,D6,F#6] [A5,D#6,F#6]]", // c.92 D · D♯° — el Fa sube a Fa♯, el Re a Re♯
];

const B2_LEFT = [
  "[[Eb2,Db3]@3 Eb3 Bb3 G3]", // c.82 E♭7 — de la partitura
  "[Bb1,F2]", // c.83 B♭ — en estado fundamental
  "G1", // c.84 Gm
  "[C2,G2]", // c.85 C — quinta
  "[A1,E2]", // c.86 Am
  "[Bb1,F2]", // c.87 B♭ — empieza el pedal de Si♭
  "[Bb1,F2,Bb2]", // c.88 C/B♭ — sigue el pedal, con octava
  "[A1,E2,A2]", // c.89 A7 — Si♭→La: pedal de La
  "[A1,E2,A2]", // c.90 A7 — sigue el pedal
  "[D2,A2]", // c.91 Dm
  "[D2@2 D#2]", // c.92 D · D♯° — Re→Re♯→Mi
];

const B2_GUITAR = [
  "~", // c.82 E♭7 — calla
  "~", // c.83 B♭ — va aparte, sin rasgueo (B2_GUITAR_BLOCK)
  "[D4 C4@2 Bb3]", // c.84 Gm — la cabeza del motivo, en Re–Do–Si♭
  "[E4 D4@2 C4]", // c.85 C — la misma, un grado arriba
  "[C4 D4 E4 G4@2 A4]", // c.86 Am — responde subiendo
  "[D4 C4@2 Bb3]", // c.87 B♭ — la cabeza otra vez, ahora sobre B♭
  "[Bb3 C4 D4 E4 G4 A4]", // c.88 C/B♭ — escala; el La adelanta el A7
  "[[E3,G3,C#4,E4] [E3,G3,C#4,E4] [E3,G3,C#4,E4]]", // c.89 A7 — rasgueo en los tres tiempos
  "[[E3,A3,C#4,G4] [E3,A3,C#4,G4] [E3,A3,C#4,G4]]", // c.90 A7 — el acorde sube con el piano
  "[A4 G4@2 F4]", // c.91 Dm — el motivo en menor
  "[D4@5 F#4@7]", // c.92 D · D♯° — …y vuelve a mayor
];

const B2_GUITAR_BLOCK = [
  "~", // c.82
  "[F3,Bb3,D4]", // c.83 B♭ — sostenido, como en la partitura, en su registro
  "~", // c.84
  "~", // c.85
  "~", // c.86
  "~", // c.87
  "~", // c.88
  "~", // c.89
  "~", // c.90
  "~", // c.91
  "~", // c.92
];

const B2_DYN = [
  0.64, // c.82 mp — respira
  0.66, // c.83
  0.68, // c.84
  0.72, // c.85 mf
  0.76, // c.86
  0.8, // c.87 f
  0.85, // c.88
  0.92, // c.89
  1.0, // c.90 ff — la cima
  0.82, // c.91 f — empieza la bajada
  0.7, // c.92 mf
];

let b2 = stack(
  // Piano
  piano(B2_RIGHT, B2_LEFT),
  // Guitar
  guitar(B2_GUITAR),
  // Guitar, el acorde del c.83
  guitarBlock(B2_GUITAR_BLOCK),
).velocity(dyn(B2_DYN));

// ═══════════════════ Entrada del C3 (c.93) ═══════════════════
/*
El primer compás del coro, como en el c.27, ya en mp: la despedida.
*/

let c3entry = stack(
  // Walts
  piano(["[~ E4 E4]"], ["[E3 ~@2]"]),
  // Armonic guitar
  guitar(["[E2,G2,E3,G3]"]),
).velocity(0.58);

arrange(
  // Chorus 2, segunda mitad
  [7, c2close],
  // B2
  [11, b2],
  // C3, primer compás
  [1, c3entry],
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/AI/5.ai_1.transicion_caer_al_fondo.strudel.js`

```js
setcpm(160 / 3);

/*
Louise · del coro 2 al motivo en menor (A7 → Gm, c.81–85)
Versión 1 de 5: CAER AL FONDO.
Propuesta de Claude (19 oct 2026), para revisar. No toca la partitura ni tus archivos.

La idea
  Los acordes son los que ya elegiste: A7 → E♭7 → Dm, con el bajo en Re.
  Cambian la energía y la textura. El coro 2 no se apaga en el E♭7: sigue a todo
  groove hasta la barra y se corta de golpe en el primer tiempo del B2 (el primer
  corte de la pieza). El motivo entra solo, en una voz, sobre Re, como en la intro
  (c.1 y c.46). Lo único que lo distingue de la intro es el Fa natural.
  Es la combinación 1 de la nota 11 ("Caer al fondo").

Qué cambia (todo lo demás es la partitura)
  c.82  batería   el redoble          → sigue el groove del c.81
  c.82  guitarra  calla               → rasguea el E♭7: Mi♭3 Si♭3 Re♭4 Sol4
  c.83  batería   el golpe            → nada: corte seco
  c.83  piano MD  motivo en sextas    → solo la voz de abajo: La4 Sol4 Fa4
  c.83  piano MI  Re2 Re3 La3         → Re2 Re3, en octava, como en el c.46
  c.84  piano MD  Re4/La4 · Fa4/Re5   → Re4 · Fa4
  c.84  piano MI  Mi2/Fa3 · La2/Re3   → Mi2 · La2, solo el bajo
  No cambian: los acordes y el cifrado, el c.81, el c.85 en adelante.

Qué escuchar
  - El silencio del c.83: ¿suena a llegada o a que algo se rompió?
  - ¿Se reconoce la intro en el motivo, y se oye que ahora es menor?
  - ¿El c.85 arranca, o el B2 se queda en el piso?

Riesgo
  El valle dura dos compases sin batería ni guitarra (c.83–84). Si el c.85 no
  arranca, el B2 se queda abajo.

Cómo está hecho
  Un ciclo es un compás de 3/4. Suena del c.77 al c.87: el cierre del coro 2,
  la costura y los tres primeros compases de la subida, y luego vuelve a empezar.
  Debajo está la partitura tal cual (Louise-melancolica, abierta en MuseScore el
  19 oct a las 18:37, con el bajo del c.83 en Re2). El bloque "Versión" del final
  aplica los cambios, y cada línea dice qué había.
  Para comparar con la partitura, pon VERSION = false.
  Las cinco versiones (5.ai_1 a 5.ai_5) están en esta carpeta y comparten todo
  menos ese bloque. Vienen de la nota 11, "Entrada del B2 y motivo en menor".
*/

// ── Interruptor ───────────────────────────────────────────────────
// true: esta versión. false: la partitura tal cual, para comparar.
const VERSION = true;

// Velocidades de la partitura (las de 3.full_score)
const FUERTE = 0.81; // 114 %
const NORMAL = 0.71; // 100 %, y los golpes sin velocidad propia
const SUAVE = 0.54; // 76 %

// Suena del c.77 al c.87 y vuelve a empezar. Cada objeto lleva una entrada por
// compás, con su número; un compás que no aparece, calla.
const DESDE = 77;
const HASTA = 87;
let compases = (porNumero) =>
  cat(
    ...Array.from(
      { length: HASTA - DESDE + 1 },
      (_, i) => porNumero[DESDE + i] ?? silence,
    ),
  );

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual. (Igual que en 3.full_score.)
let strum = (pat, gap = 0.01) => {
  let numbered = pat.withHaps((haps) => {
    let seen = new Map();
    return haps.map((hap) => {
      let begin = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = seen.get(begin) ?? 0;
      seen.set(begin, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numbered
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");
};

let piano = (right, left) =>
  stack(note(compases(right)), note(compases(left))).sound("piano");

let guitar = (porNumero) => strum(note(compases(porNumero)));

// ═══════════════════ Hoy: la partitura (c.77–87) ═══════════════════
/*
Louise-melancolica.mscz como estaba abierta en MuseScore el 19 oct a las 18:37,
con el bajo del c.83 ya en Re2. El cierre del coro 2 (c.77–81), la entrada del
B2 (c.82–84) y el arranque de la subida (c.85–87).
*/

const RIGHT = {
  77: "[~ [E4,A4] [E4,A4]]", // F#m7
  78: "[D4,F#4]", // Bm
  79: "[~ G4 G4]", // Em
  80: "[~ [E4,D5] [F#4,D5]]", // Gmaj13
  81: "[~ [G4,C#5] [A4,E5]]", // A7
  82: "[Bb4,Eb5]", // E♭7 — la armadura pasa a un bemol
  83: "[[A4,F5] [G4,E5]@2 [F4,D5]]", // Dm — B2: el motivo en menor, en sextas
  84: "[[D4,A4] [F4,D5]]", // Dm — el 2º compás del motivo (hemiola)
  85: "[G4 Bb4 D5@3 D5]", // Gm — empieza la subida
  86: "[E5 A4@3 F4 A4]", // Am
  87: "[C5 F4 [G4,F5]@3 [F4,C5]]", // Csus4
};

const LEFT = {
  77: "[[F#2,F#3] F#3 F#3]", // F#m7
  78: "[B3, [[B2,B3] ~@2]]", // Bm
  79: "[[E2,E3] [E3,B3] [E3,B3]]", // Em
  80: "[[G2,F#3] [E3,G3] [F#3,B3]]", // Gmaj13
  81: "[[A2,E3] [C#3,E3] [C#3,E3]]", // A7
  82: "[[Eb2,Db3]@4 Bb3 G3]", // E♭7
  83: "[D2,D3,A3]", // Dm
  84: "[[E2,F3] [A2,D3]]", // Dm
  85: "[[G2,D3]@2 [Bb2,G3]@3 [Bb2,G3]]", // Gm
  86: "[[C3,A3] [C3,A3]@3 [A2,E3]@2]", // Am
  87: "[[C3,F3]@2 [Bb2,G3]@3 [C3,G3]]", // Csus4
};

// De grave a aguda, en altura real (la partitura la escribe una 8ª arriba)
const GUITAR = {
  77: "[F#2,A2,F#3,A3]", // F#m7
  78: "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // Bm — en el 2 y el 3
  79: "[E2,G2,E3,G3,E4]", // Em
  80: "[G2,B2,G3,B3]", // Gmaj13
  81: "[A2,C#3,E4,A4,E5]", // A7
  // 82–84: calla
  85: "[~@2 [G2,D3,G3]@3 [G2,D3,G3]]", // Gm — vuelve la guitarra
  86: "[~@2 [A2,E3,A3]@3 [A2,E3,A3]]", // Am
  87: "[~@2 [Bb2,F3,C4]@3 [Bb2,F3,C4]]", // Csus4
};

// La batería del coro 2: bombo en 1-2-3, caja y pandereta en el 2 y el 3,
// cencerro en el 1. El hi-hat entra en el c.78; el shaker suena en 78, 80 y 81.
let grooveC2 = ({ hihat = true, shaker = true } = {}) =>
  stack(
    s("[bd bd bd]").velocity(FUERTE),
    s("[~ sd sd]").velocity(FUERTE),
    s("[~ tb tb]").velocity(NORMAL),
    s("[cb ~ ~]").velocity(SUAVE),
    hihat ? s("[~ oh hh]").velocity(SUAVE) : silence,
    shaker ? s("[sh ~ ~]").velocity(SUAVE) : silence,
  );

// c.82: el redoble — tom grave, tom medio, caja en el 2 y el 2&, cencerro en el 1
let redoble = stack(
  s("[lt@2 ~]").velocity(FUERTE),
  s("[~@2 mt]").velocity(NORMAL),
  s("[~ [sd sd] ~]").velocity(NORMAL),
  s("[cb ~ ~]").velocity(SUAVE),
);

// c.83: el golpe del B2 — bombo 1-2-3, tom agudo, hi-hat, pandereta, palmas,
// cencerro y shaker
let golpe = stack(
  s("[bd bd bd]").velocity(FUERTE),
  s("[ht ~ ~]").velocity(FUERTE),
  s("[oh hh hh]").velocity(NORMAL),
  s("[tb ~ ~]").velocity(NORMAL),
  s("[cp ~ ~]").velocity(NORMAL),
  s("[[cb ~] cb ~]").velocity(NORMAL),
  s("[~ ~ cb]").velocity(SUAVE),
  s("[sh sh@2]").velocity(NORMAL),
);

const BATERIA = {
  77: grooveC2({ hihat: false, shaker: false }), // F#m7
  78: grooveC2(), // Bm
  79: grooveC2({ shaker: false }), // Em
  80: grooveC2(), // Gmaj13
  81: grooveC2(), // A7
  82: redoble, // E♭7
  83: golpe, // Dm
  // 84–87: nada
};

// ═══════════════════ Versión 1: caer al fondo ═══════════════════
// Solo esto cambia. Cada línea dice qué había.
if (VERSION) {
  // c.82 — el coro 2 sigue entero hasta la barra
  BATERIA[82] = grooveC2(); // hoy: redoble
  GUITAR[82] = "[Eb3,Bb3,Db4,G4]"; // hoy: calla

  // c.83 — corte seco; el motivo solo, sobre Re
  BATERIA[83] = silence; // hoy: golpe
  RIGHT[83] = "[A4 G4@2 F4]"; // hoy: [[A4,F5] [G4,E5]@2 [F4,D5]]
  LEFT[83] = "[D2,D3]"; // hoy: [D2,D3,A3]

  // c.84 — el 2º compás del motivo, también solo
  RIGHT[84] = "[D4 F4]"; // hoy: [[D4,A4] [F4,D5]]
  LEFT[84] = "[E2 A2]"; // hoy: [[E2,F3] [A2,D3]]
}

stack(
  // Piano
  piano(RIGHT, LEFT),
  // Guitar
  guitar(GUITAR),
  // Drums
  compases(BATERIA).bank("AkaiLinn"),
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/AI/5.ai_2.transicion_dominante_menor.strudel.js`

```js
setcpm(160 / 3);

/*
Louise · del coro 2 al motivo en menor (A7 → Gm, c.81–85)
Versión 2 de 5: LA DOMINANTE DE RE MENOR.
Propuesta de Claude (19 oct 2026), para revisar. No toca la partitura ni tus archivos.

La idea
  Sin sustituto tritonal. El c.82 sigue siendo el A7, pero ya oscurecido: le
  entra el Si♭ (su ♭9) y el bajo pasa a Do♯. Suena Do♯–Mi–Sol–Si♭, un A7♭9 sin
  fundamental, que es el Do♯° de Re menor armónico: la dominante de libro del
  menor. El bajo sube por semitono a Re (La → Do♯ → Re) en vez de bajar
  (La → Mi♭ → Re). Respecto a hoy cambian dos teclas.

Qué cambia (todo lo demás es la partitura, batería incluida)
  c.82  piano MI  bajo Mi♭2           → Do♯2. El Re♭3 se queda: es la misma tecla que Do♯3
  c.82  piano MD  Mi♭5                → Mi5, que se queda del A7
  Cifrado del c.82: E♭7 → A7(♭9)/C♯

Cómo se mueven las voces, c.81 → c.82 → c.83
  arriba     Mi5  → Mi5  → Fa5   la nota común y luego sube: el Fa del motivo llega por semitono
  MD         La4  → Si♭4 → La4   el suspiro, ahora como bordadura
  MI         Si♭3 → La3          el mismo suspiro, una octava abajo
  tenor      Do♯3 → Do♯3 → Re3   la sensible resuelve…
  bajo       La2  → Do♯2 → Re2   …y en el bajo también
  Do♯ (bajo) y Si♭ (arriba) suenan juntos: la segunda aumentada del menor
  armónico, el color "triste clásico".

Qué escuchar
  - ¿Extrañas el color del E♭7, o el c.82 ya suena a Re menor antes de tiempo?
  - ¿El c.83 suena más a llegar?
  - ¿El Do♯ en el bajo empuja demasiado, suena a libro?

Riesgo
  Es la más previsible de las cinco: la dominante de siempre. Pierde el color
  raro que elegiste a cambio de claridad, porque el menor se anuncia un compás
  antes (Si♭ sobre La).

Cómo está hecho
  Un ciclo es un compás de 3/4. Suena del c.77 al c.87: el cierre del coro 2,
  la costura y los tres primeros compases de la subida, y luego vuelve a empezar.
  Debajo está la partitura tal cual (Louise-melancolica, abierta en MuseScore el
  19 oct a las 18:37, con el bajo del c.83 en Re2). El bloque "Versión" del final
  aplica los cambios, y cada línea dice qué había.
  Para comparar con la partitura, pon VERSION = false.
  Las cinco versiones (5.ai_1 a 5.ai_5) están en esta carpeta y comparten todo
  menos ese bloque. Vienen de la nota 11, "Entrada del B2 y motivo en menor".
*/

// ── Interruptor ───────────────────────────────────────────────────
// true: esta versión. false: la partitura tal cual, para comparar.
const VERSION = true;

// Velocidades de la partitura (las de 3.full_score)
const FUERTE = 0.81; // 114 %
const NORMAL = 0.71; // 100 %, y los golpes sin velocidad propia
const SUAVE = 0.54; // 76 %

// Suena del c.77 al c.87 y vuelve a empezar. Cada objeto lleva una entrada por
// compás, con su número; un compás que no aparece, calla.
const DESDE = 77;
const HASTA = 87;
let compases = (porNumero) =>
  cat(
    ...Array.from(
      { length: HASTA - DESDE + 1 },
      (_, i) => porNumero[DESDE + i] ?? silence,
    ),
  );

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual. (Igual que en 3.full_score.)
let strum = (pat, gap = 0.01) => {
  let numbered = pat.withHaps((haps) => {
    let seen = new Map();
    return haps.map((hap) => {
      let begin = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = seen.get(begin) ?? 0;
      seen.set(begin, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numbered
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");
};

let piano = (right, left) =>
  stack(note(compases(right)), note(compases(left))).sound("piano");

let guitar = (porNumero) => strum(note(compases(porNumero)));

// ═══════════════════ Hoy: la partitura (c.77–87) ═══════════════════
/*
Louise-melancolica.mscz como estaba abierta en MuseScore el 19 oct a las 18:37,
con el bajo del c.83 ya en Re2. El cierre del coro 2 (c.77–81), la entrada del
B2 (c.82–84) y el arranque de la subida (c.85–87).
*/

const RIGHT = {
  77: "[~ [E4,A4] [E4,A4]]", // F#m7
  78: "[D4,F#4]", // Bm
  79: "[~ G4 G4]", // Em
  80: "[~ [E4,D5] [F#4,D5]]", // Gmaj13
  81: "[~ [G4,C#5] [A4,E5]]", // A7
  82: "[Bb4,Eb5]", // E♭7 — la armadura pasa a un bemol
  83: "[[A4,F5] [G4,E5]@2 [F4,D5]]", // Dm — B2: el motivo en menor, en sextas
  84: "[[D4,A4] [F4,D5]]", // Dm — el 2º compás del motivo (hemiola)
  85: "[G4 Bb4 D5@3 D5]", // Gm — empieza la subida
  86: "[E5 A4@3 F4 A4]", // Am
  87: "[C5 F4 [G4,F5]@3 [F4,C5]]", // Csus4
};

const LEFT = {
  77: "[[F#2,F#3] F#3 F#3]", // F#m7
  78: "[B3, [[B2,B3] ~@2]]", // Bm
  79: "[[E2,E3] [E3,B3] [E3,B3]]", // Em
  80: "[[G2,F#3] [E3,G3] [F#3,B3]]", // Gmaj13
  81: "[[A2,E3] [C#3,E3] [C#3,E3]]", // A7
  82: "[[Eb2,Db3]@4 Bb3 G3]", // E♭7
  83: "[D2,D3,A3]", // Dm
  84: "[[E2,F3] [A2,D3]]", // Dm
  85: "[[G2,D3]@2 [Bb2,G3]@3 [Bb2,G3]]", // Gm
  86: "[[C3,A3] [C3,A3]@3 [A2,E3]@2]", // Am
  87: "[[C3,F3]@2 [Bb2,G3]@3 [C3,G3]]", // Csus4
};

// De grave a aguda, en altura real (la partitura la escribe una 8ª arriba)
const GUITAR = {
  77: "[F#2,A2,F#3,A3]", // F#m7
  78: "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // Bm — en el 2 y el 3
  79: "[E2,G2,E3,G3,E4]", // Em
  80: "[G2,B2,G3,B3]", // Gmaj13
  81: "[A2,C#3,E4,A4,E5]", // A7
  // 82–84: calla
  85: "[~@2 [G2,D3,G3]@3 [G2,D3,G3]]", // Gm — vuelve la guitarra
  86: "[~@2 [A2,E3,A3]@3 [A2,E3,A3]]", // Am
  87: "[~@2 [Bb2,F3,C4]@3 [Bb2,F3,C4]]", // Csus4
};

// La batería del coro 2: bombo en 1-2-3, caja y pandereta en el 2 y el 3,
// cencerro en el 1. El hi-hat entra en el c.78; el shaker suena en 78, 80 y 81.
let grooveC2 = ({ hihat = true, shaker = true } = {}) =>
  stack(
    s("[bd bd bd]").velocity(FUERTE),
    s("[~ sd sd]").velocity(FUERTE),
    s("[~ tb tb]").velocity(NORMAL),
    s("[cb ~ ~]").velocity(SUAVE),
    hihat ? s("[~ oh hh]").velocity(SUAVE) : silence,
    shaker ? s("[sh ~ ~]").velocity(SUAVE) : silence,
  );

// c.82: el redoble — tom grave, tom medio, caja en el 2 y el 2&, cencerro en el 1
let redoble = stack(
  s("[lt@2 ~]").velocity(FUERTE),
  s("[~@2 mt]").velocity(NORMAL),
  s("[~ [sd sd] ~]").velocity(NORMAL),
  s("[cb ~ ~]").velocity(SUAVE),
);

// c.83: el golpe del B2 — bombo 1-2-3, tom agudo, hi-hat, pandereta, palmas,
// cencerro y shaker
let golpe = stack(
  s("[bd bd bd]").velocity(FUERTE),
  s("[ht ~ ~]").velocity(FUERTE),
  s("[oh hh hh]").velocity(NORMAL),
  s("[tb ~ ~]").velocity(NORMAL),
  s("[cp ~ ~]").velocity(NORMAL),
  s("[[cb ~] cb ~]").velocity(NORMAL),
  s("[~ ~ cb]").velocity(SUAVE),
  s("[sh sh@2]").velocity(NORMAL),
);

const BATERIA = {
  77: grooveC2({ hihat: false, shaker: false }), // F#m7
  78: grooveC2(), // Bm
  79: grooveC2({ shaker: false }), // Em
  80: grooveC2(), // Gmaj13
  81: grooveC2(), // A7
  82: redoble, // E♭7
  83: golpe, // Dm
  // 84–87: nada
};

// ═══════════════════ Versión 2: la dominante de Re menor ═══════════════════
// Solo esto cambia. Cada línea dice qué había.
if (VERSION) {
  // c.82 — A7(♭9)/C♯ en lugar de E♭7
  LEFT[82] = "[[C#2,C#3]@4 Bb3 G3]"; // hoy: [[Eb2,Db3]@4 Bb3 G3]
  RIGHT[82] = "[Bb4,E5]"; // hoy: [Bb4,Eb5]
}

stack(
  // Piano
  piano(RIGHT, LEFT),
  // Guitar
  guitar(GUITAR),
  // Drums
  compases(BATERIA).bank("AkaiLinn"),
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/AI/5.ai_3.transicion_pedal_de_la.strudel.js`

```js
setcpm(160 / 3);

/*
Louise · del coro 2 al motivo en menor (A7 → Gm, c.81–85)
Versión 3 de 5: PEDAL DE LA.
Propuesta de Claude (19 oct 2026), para revisar. No toca la partitura ni tus archivos.

La idea
  El A7 pierde la sensible: Do♯ → Do. El c.82 es el mismo compás que el c.81
  con una sola nota cambiada, y queda Am7, la dominante menor de Re eólico, que
  no empuja a nada. Es tu idea del Fa♯/Fa (una nota separa la felicidad de la
  melancolía), aplicada a la dominante.
  El bajo se queda en La del c.81 al c.84, así que el motivo suena sobre Dm/A, y
  da su primer paso en el c.85: La → Sol. Nada cae ni llega, el B2 aparece.
  Batería sin corte: la capa suave (bombo, cencerro y shaker en el 1) sigue
  debajo del motivo y le pasa el pulso a la guitarra en el c.85.

Qué cambia (todo lo demás es la partitura)
  c.82  piano MD  Si♭4/Mi♭5            → ~ · Sol4/Do5 · La4/Mi5  (el c.81 con Do en vez de Do♯)
  c.82  piano MI  Mi♭2/Re♭3 · Si♭3 · Sol3 → La2/Mi3 · Do3/Mi3 · Do3/Mi3
  c.82  guitarra  calla                → Am7 abierto: La2 Mi3 Sol3 Do4 Mi4 (x02010)
  c.82  batería   el redoble           → capa suave
  c.83  piano MI  Re2 Re3 La3          → La2 Re3 La3
  c.83  batería   el golpe             → capa suave
  c.84  piano MI  Mi2/Fa3 · La2/Re3    → La2/Fa3 · La2/Re3
  c.84  batería   nada                 → capa suave
  Cifrado: E♭7 → Am7 (c.82), Dm → Dm/A (c.83 y c.84)
  No cambian: la mano derecha del motivo (c.83–84) y el c.85 en adelante.

Qué escuchar
  - El Do♯ → Do del c.82: ¿se oye como "se apagó la luz"?
  - Los cuatro compases de La: ¿flotan o se estancan?
  - ¿Te falta la llegada a Re, o no la necesitas?

Riesgo
  No hay llegada: el B2 no empieza, se funde. Dm/A (segunda inversión) suena a
  que todavía falta algo, y cuatro compases sobre La pueden sonar quietos.

Cómo está hecho
  Un ciclo es un compás de 3/4. Suena del c.77 al c.87: el cierre del coro 2,
  la costura y los tres primeros compases de la subida, y luego vuelve a empezar.
  Debajo está la partitura tal cual (Louise-melancolica, abierta en MuseScore el
  19 oct a las 18:37, con el bajo del c.83 en Re2). El bloque "Versión" del final
  aplica los cambios, y cada línea dice qué había.
  Para comparar con la partitura, pon VERSION = false.
  Las cinco versiones (5.ai_1 a 5.ai_5) están en esta carpeta y comparten todo
  menos ese bloque. Vienen de la nota 11, "Entrada del B2 y motivo en menor".
*/

// ── Interruptor ───────────────────────────────────────────────────
// true: esta versión. false: la partitura tal cual, para comparar.
const VERSION = true;

// Velocidades de la partitura (las de 3.full_score)
const FUERTE = 0.81; // 114 %
const NORMAL = 0.71; // 100 %, y los golpes sin velocidad propia
const SUAVE = 0.54; // 76 %

// Suena del c.77 al c.87 y vuelve a empezar. Cada objeto lleva una entrada por
// compás, con su número; un compás que no aparece, calla.
const DESDE = 77;
const HASTA = 87;
let compases = (porNumero) =>
  cat(
    ...Array.from(
      { length: HASTA - DESDE + 1 },
      (_, i) => porNumero[DESDE + i] ?? silence,
    ),
  );

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual. (Igual que en 3.full_score.)
let strum = (pat, gap = 0.01) => {
  let numbered = pat.withHaps((haps) => {
    let seen = new Map();
    return haps.map((hap) => {
      let begin = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = seen.get(begin) ?? 0;
      seen.set(begin, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numbered
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");
};

let piano = (right, left) =>
  stack(note(compases(right)), note(compases(left))).sound("piano");

let guitar = (porNumero) => strum(note(compases(porNumero)));

// ═══════════════════ Hoy: la partitura (c.77–87) ═══════════════════
/*
Louise-melancolica.mscz como estaba abierta en MuseScore el 19 oct a las 18:37,
con el bajo del c.83 ya en Re2. El cierre del coro 2 (c.77–81), la entrada del
B2 (c.82–84) y el arranque de la subida (c.85–87).
*/

const RIGHT = {
  77: "[~ [E4,A4] [E4,A4]]", // F#m7
  78: "[D4,F#4]", // Bm
  79: "[~ G4 G4]", // Em
  80: "[~ [E4,D5] [F#4,D5]]", // Gmaj13
  81: "[~ [G4,C#5] [A4,E5]]", // A7
  82: "[Bb4,Eb5]", // E♭7 — la armadura pasa a un bemol
  83: "[[A4,F5] [G4,E5]@2 [F4,D5]]", // Dm — B2: el motivo en menor, en sextas
  84: "[[D4,A4] [F4,D5]]", // Dm — el 2º compás del motivo (hemiola)
  85: "[G4 Bb4 D5@3 D5]", // Gm — empieza la subida
  86: "[E5 A4@3 F4 A4]", // Am
  87: "[C5 F4 [G4,F5]@3 [F4,C5]]", // Csus4
};

const LEFT = {
  77: "[[F#2,F#3] F#3 F#3]", // F#m7
  78: "[B3, [[B2,B3] ~@2]]", // Bm
  79: "[[E2,E3] [E3,B3] [E3,B3]]", // Em
  80: "[[G2,F#3] [E3,G3] [F#3,B3]]", // Gmaj13
  81: "[[A2,E3] [C#3,E3] [C#3,E3]]", // A7
  82: "[[Eb2,Db3]@4 Bb3 G3]", // E♭7
  83: "[D2,D3,A3]", // Dm
  84: "[[E2,F3] [A2,D3]]", // Dm
  85: "[[G2,D3]@2 [Bb2,G3]@3 [Bb2,G3]]", // Gm
  86: "[[C3,A3] [C3,A3]@3 [A2,E3]@2]", // Am
  87: "[[C3,F3]@2 [Bb2,G3]@3 [C3,G3]]", // Csus4
};

// De grave a aguda, en altura real (la partitura la escribe una 8ª arriba)
const GUITAR = {
  77: "[F#2,A2,F#3,A3]", // F#m7
  78: "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // Bm — en el 2 y el 3
  79: "[E2,G2,E3,G3,E4]", // Em
  80: "[G2,B2,G3,B3]", // Gmaj13
  81: "[A2,C#3,E4,A4,E5]", // A7
  // 82–84: calla
  85: "[~@2 [G2,D3,G3]@3 [G2,D3,G3]]", // Gm — vuelve la guitarra
  86: "[~@2 [A2,E3,A3]@3 [A2,E3,A3]]", // Am
  87: "[~@2 [Bb2,F3,C4]@3 [Bb2,F3,C4]]", // Csus4
};

// La batería del coro 2: bombo en 1-2-3, caja y pandereta en el 2 y el 3,
// cencerro en el 1. El hi-hat entra en el c.78; el shaker suena en 78, 80 y 81.
let grooveC2 = ({ hihat = true, shaker = true } = {}) =>
  stack(
    s("[bd bd bd]").velocity(FUERTE),
    s("[~ sd sd]").velocity(FUERTE),
    s("[~ tb tb]").velocity(NORMAL),
    s("[cb ~ ~]").velocity(SUAVE),
    hihat ? s("[~ oh hh]").velocity(SUAVE) : silence,
    shaker ? s("[sh ~ ~]").velocity(SUAVE) : silence,
  );

// c.82: el redoble — tom grave, tom medio, caja en el 2 y el 2&, cencerro en el 1
let redoble = stack(
  s("[lt@2 ~]").velocity(FUERTE),
  s("[~@2 mt]").velocity(NORMAL),
  s("[~ [sd sd] ~]").velocity(NORMAL),
  s("[cb ~ ~]").velocity(SUAVE),
);

// c.83: el golpe del B2 — bombo 1-2-3, tom agudo, hi-hat, pandereta, palmas,
// cencerro y shaker
let golpe = stack(
  s("[bd bd bd]").velocity(FUERTE),
  s("[ht ~ ~]").velocity(FUERTE),
  s("[oh hh hh]").velocity(NORMAL),
  s("[tb ~ ~]").velocity(NORMAL),
  s("[cp ~ ~]").velocity(NORMAL),
  s("[[cb ~] cb ~]").velocity(NORMAL),
  s("[~ ~ cb]").velocity(SUAVE),
  s("[sh sh@2]").velocity(NORMAL),
);

// La capa suave: bombo, cencerro y shaker en el 1 (solo la usa esta versión)
let capaSuave = stack(
  s("[bd ~ ~]").velocity(FUERTE),
  s("[cb ~ ~]").velocity(SUAVE),
  s("[sh ~ ~]").velocity(SUAVE),
);

const BATERIA = {
  77: grooveC2({ hihat: false, shaker: false }), // F#m7
  78: grooveC2(), // Bm
  79: grooveC2({ shaker: false }), // Em
  80: grooveC2(), // Gmaj13
  81: grooveC2(), // A7
  82: redoble, // E♭7
  83: golpe, // Dm
  // 84–87: nada
};

// ═══════════════════ Versión 3: pedal de La ═══════════════════
// Solo esto cambia. Cada línea dice qué había.
if (VERSION) {
  // c.82 — Am7: el c.81 con Do en vez de Do♯
  RIGHT[82] = "[~ [G4,C5] [A4,E5]]"; // hoy: [Bb4,Eb5]
  LEFT[82] = "[[A2,E3] [C3,E3] [C3,E3]]"; // hoy: [[Eb2,Db3]@4 Bb3 G3]
  GUITAR[82] = "[A2,E3,G3,C4,E4]"; // hoy: calla
  BATERIA[82] = capaSuave; // hoy: redoble

  // c.83 — Dm/A: el bajo se queda en La
  LEFT[83] = "[A2,D3,A3]"; // hoy: [D2,D3,A3]
  BATERIA[83] = capaSuave; // hoy: golpe

  // c.84 — Dm/A otra vez
  LEFT[84] = "[[A2,F3] [A2,D3]]"; // hoy: [[E2,F3] [A2,D3]]
  BATERIA[84] = capaSuave; // hoy: nada
}

stack(
  // Piano
  piano(RIGHT, LEFT),
  // Guitar
  guitar(GUITAR),
  // Drums
  compases(BATERIA).bank("AkaiLinn"),
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/AI/5.ai_4.transicion_re_que_baja.strudel.js`

```js
setcpm(160 / 3);

/*
Louise · del coro 2 al motivo en menor (A7 → Gm, c.81–85)
Versión 4 de 5: RE QUE BAJA (línea cliché).
Propuesta de Claude (19 oct 2026), para revisar. No toca la partitura ni tus archivos.

La idea
  Los c.81–82 y la mano derecha son los de hoy. Cambia una voz interior de la
  mano izquierda: el Re♭ del E♭7 sube a Re y desde ahí baja por semitonos,
  Re → Do♯ → Do → Si → Si♭, mientras el bajo se queda en Re. Es la línea cliché
  del menor (Dm · Dm(maj7) · Dm7 · Dm6): debajo del motivo la armonía se mueve
  sola, y el Si♭ llega justo como tercera del Gm.
  La línea cambia cada negra con puntillo, así que la hemiola empieza a
  sentirse desde el c.83, un compás antes que en el motivo.

Qué cambia (todo lo demás es la partitura, batería incluida)
  c.83  piano MI  Re2 Re3 La3 (todo el compás) → Re2 Re3 La3 · Re2 Do♯3 La3
  c.84  piano MI  Mi2/Fa3 · La2/Re3            → Re2 Do3 La3 · Re2 Si2 La3
  Cifrado: Dm → Dm · Dm(maj7) (c.83), Dm → Dm7 · Dm6 (c.84)

  La línea: Re♭3 (c.82) → Re3 → Do♯3 (c.83) → Do3 → Si2 (c.84) → Si♭ (c.85:
  Si♭4 en el 1& de la mano derecha y Si♭2 en el 2 de la izquierda).

Qué escuchar
  - ¿Se oye la línea debajo del motivo, o se pierde?
  - El Si natural del 2& del c.84: Dm6 tiene Si y Fa, así que suena casi a G7,
    y el c.85 lo vuelve Gm. Si → Si♭ es el mismo gesto que Fa♯ → Fa: una
    tercera mayor que se vuelve menor. ¿Es un destello de luz o distrae?

Riesgo
  - El Si♮ del c.84 adelanta la primera nota "feliz", que hoy llega en el c.88
    (nota 11, §0). Cambia el arco de la luz.
  - Se pierde el bajo Mi → La de la hemiola del c.84.
  - En el 2& del c.83, el Do♯ contra el Sol4/Mi5 del motivo suena a A7 sobre
    pedal de Re: es la tensión más fuerte de las cinco versiones.

Cómo está hecho
  Un ciclo es un compás de 3/4. Suena del c.77 al c.87: el cierre del coro 2,
  la costura y los tres primeros compases de la subida, y luego vuelve a empezar.
  Debajo está la partitura tal cual (Louise-melancolica, abierta en MuseScore el
  19 oct a las 18:37, con el bajo del c.83 en Re2). El bloque "Versión" del final
  aplica los cambios, y cada línea dice qué había.
  Para comparar con la partitura, pon VERSION = false.
  Las cinco versiones (5.ai_1 a 5.ai_5) están en esta carpeta y comparten todo
  menos ese bloque. Vienen de la nota 11, "Entrada del B2 y motivo en menor".
*/

// ── Interruptor ───────────────────────────────────────────────────
// true: esta versión. false: la partitura tal cual, para comparar.
const VERSION = true;

// Velocidades de la partitura (las de 3.full_score)
const FUERTE = 0.81; // 114 %
const NORMAL = 0.71; // 100 %, y los golpes sin velocidad propia
const SUAVE = 0.54; // 76 %

// Suena del c.77 al c.87 y vuelve a empezar. Cada objeto lleva una entrada por
// compás, con su número; un compás que no aparece, calla.
const DESDE = 77;
const HASTA = 87;
let compases = (porNumero) =>
  cat(
    ...Array.from(
      { length: HASTA - DESDE + 1 },
      (_, i) => porNumero[DESDE + i] ?? silence,
    ),
  );

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual. (Igual que en 3.full_score.)
let strum = (pat, gap = 0.01) => {
  let numbered = pat.withHaps((haps) => {
    let seen = new Map();
    return haps.map((hap) => {
      let begin = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = seen.get(begin) ?? 0;
      seen.set(begin, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numbered
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");
};

let piano = (right, left) =>
  stack(note(compases(right)), note(compases(left))).sound("piano");

let guitar = (porNumero) => strum(note(compases(porNumero)));

// ═══════════════════ Hoy: la partitura (c.77–87) ═══════════════════
/*
Louise-melancolica.mscz como estaba abierta en MuseScore el 19 oct a las 18:37,
con el bajo del c.83 ya en Re2. El cierre del coro 2 (c.77–81), la entrada del
B2 (c.82–84) y el arranque de la subida (c.85–87).
*/

const RIGHT = {
  77: "[~ [E4,A4] [E4,A4]]", // F#m7
  78: "[D4,F#4]", // Bm
  79: "[~ G4 G4]", // Em
  80: "[~ [E4,D5] [F#4,D5]]", // Gmaj13
  81: "[~ [G4,C#5] [A4,E5]]", // A7
  82: "[Bb4,Eb5]", // E♭7 — la armadura pasa a un bemol
  83: "[[A4,F5] [G4,E5]@2 [F4,D5]]", // Dm — B2: el motivo en menor, en sextas
  84: "[[D4,A4] [F4,D5]]", // Dm — el 2º compás del motivo (hemiola)
  85: "[G4 Bb4 D5@3 D5]", // Gm — empieza la subida
  86: "[E5 A4@3 F4 A4]", // Am
  87: "[C5 F4 [G4,F5]@3 [F4,C5]]", // Csus4
};

const LEFT = {
  77: "[[F#2,F#3] F#3 F#3]", // F#m7
  78: "[B3, [[B2,B3] ~@2]]", // Bm
  79: "[[E2,E3] [E3,B3] [E3,B3]]", // Em
  80: "[[G2,F#3] [E3,G3] [F#3,B3]]", // Gmaj13
  81: "[[A2,E3] [C#3,E3] [C#3,E3]]", // A7
  82: "[[Eb2,Db3]@4 Bb3 G3]", // E♭7
  83: "[D2,D3,A3]", // Dm
  84: "[[E2,F3] [A2,D3]]", // Dm
  85: "[[G2,D3]@2 [Bb2,G3]@3 [Bb2,G3]]", // Gm
  86: "[[C3,A3] [C3,A3]@3 [A2,E3]@2]", // Am
  87: "[[C3,F3]@2 [Bb2,G3]@3 [C3,G3]]", // Csus4
};

// De grave a aguda, en altura real (la partitura la escribe una 8ª arriba)
const GUITAR = {
  77: "[F#2,A2,F#3,A3]", // F#m7
  78: "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // Bm — en el 2 y el 3
  79: "[E2,G2,E3,G3,E4]", // Em
  80: "[G2,B2,G3,B3]", // Gmaj13
  81: "[A2,C#3,E4,A4,E5]", // A7
  // 82–84: calla
  85: "[~@2 [G2,D3,G3]@3 [G2,D3,G3]]", // Gm — vuelve la guitarra
  86: "[~@2 [A2,E3,A3]@3 [A2,E3,A3]]", // Am
  87: "[~@2 [Bb2,F3,C4]@3 [Bb2,F3,C4]]", // Csus4
};

// La batería del coro 2: bombo en 1-2-3, caja y pandereta en el 2 y el 3,
// cencerro en el 1. El hi-hat entra en el c.78; el shaker suena en 78, 80 y 81.
let grooveC2 = ({ hihat = true, shaker = true } = {}) =>
  stack(
    s("[bd bd bd]").velocity(FUERTE),
    s("[~ sd sd]").velocity(FUERTE),
    s("[~ tb tb]").velocity(NORMAL),
    s("[cb ~ ~]").velocity(SUAVE),
    hihat ? s("[~ oh hh]").velocity(SUAVE) : silence,
    shaker ? s("[sh ~ ~]").velocity(SUAVE) : silence,
  );

// c.82: el redoble — tom grave, tom medio, caja en el 2 y el 2&, cencerro en el 1
let redoble = stack(
  s("[lt@2 ~]").velocity(FUERTE),
  s("[~@2 mt]").velocity(NORMAL),
  s("[~ [sd sd] ~]").velocity(NORMAL),
  s("[cb ~ ~]").velocity(SUAVE),
);

// c.83: el golpe del B2 — bombo 1-2-3, tom agudo, hi-hat, pandereta, palmas,
// cencerro y shaker
let golpe = stack(
  s("[bd bd bd]").velocity(FUERTE),
  s("[ht ~ ~]").velocity(FUERTE),
  s("[oh hh hh]").velocity(NORMAL),
  s("[tb ~ ~]").velocity(NORMAL),
  s("[cp ~ ~]").velocity(NORMAL),
  s("[[cb ~] cb ~]").velocity(NORMAL),
  s("[~ ~ cb]").velocity(SUAVE),
  s("[sh sh@2]").velocity(NORMAL),
);

const BATERIA = {
  77: grooveC2({ hihat: false, shaker: false }), // F#m7
  78: grooveC2(), // Bm
  79: grooveC2({ shaker: false }), // Em
  80: grooveC2(), // Gmaj13
  81: grooveC2(), // A7
  82: redoble, // E♭7
  83: golpe, // Dm
  // 84–87: nada
};

// ═══════════════════ Versión 4: Re que baja ═══════════════════
// Solo esto cambia. Cada línea dice qué había.
if (VERSION) {
  // c.83 — Dm · Dm(maj7): Re → Do♯
  LEFT[83] = "[[D2,D3,A3] [D2,C#3,A3]]"; // hoy: [D2,D3,A3]

  // c.84 — Dm7 · Dm6: Do → Si, y el Si♭ llega en el Gm del c.85
  LEFT[84] = "[[D2,C3,A3] [D2,B2,A3]]"; // hoy: [[E2,F3] [A2,D3]]
}

stack(
  // Piano
  piano(RIGHT, LEFT),
  // Guitar
  guitar(GUITAR),
  // Drums
  compases(BATERIA).bank("AkaiLinn"),
);
```

---

## Archivo: `4. Instrumento/2. Strudel/10. Folk/Louise/AI/5.ai_5.transicion_motivo_anticipado.strudel.js`

```js
setcpm(160 / 3);

/*
Louise · del coro 2 al motivo en menor (A7 → Gm, c.81–85)
Versión 5 de 5: EL MOTIVO SE ADELANTA.
Propuesta de Claude (19 oct 2026), para revisar. No toca la partitura ni tus archivos.

La idea
  El motivo no espera al B2: empieza sobre el E♭7 (c.82), y para caber ahí se
  dobla. La voz de arriba de las sextas pasa de Fa–Mi–Re a Fa–Mi♭–Re♭; la de
  abajo (La–Sol–Fa) queda igual, porque sobre el E♭7 son su ♯11, su 3ª y su 9ª.
  Así el primer tiempo del B2 (c.83) cae en "Re", el final del motivo, junto con
  el golpe de batería: el golpe por fin coincide con una llegada.
  En el c.84 el motivo vuelve, ahora derecho (tu c.83 tal cual), y su segundo
  compás no llega: lo reemplaza el Sol–Si♭–Re de la subida (c.85).

Qué cambia (todo lo demás es la partitura)
  c.82  piano MD  Si♭4/Mi♭5 sostenido → La4/Fa5 · Sol4/Mi♭5 · Fa4/Re♭5  (la cabeza, doblada)
  c.83  piano MD  la cabeza del motivo → Re4/La4 · Fa4/Re5  (tu c.84)
  c.83  piano MI  Re2 Re3 La3          → Re2 Re3 La3 · La2 Re3  (con el bajo de la hemiola de tu c.84)
  c.84  piano MD  Re4/La4 · Fa4/Re5    → La4/Fa5 · Sol4/Mi5 · Fa4/Re5  (tu c.83)
  c.84  piano MI  Mi2/Fa3 · La2/Re3    → Re2 Re3 La3  (tu c.83)
  No cambian: la mano izquierda del c.82 (E♭7), la batería (redoble en el 82,
  golpe en el 83), el cifrado y el c.85 en adelante.

  El motivo, tal como queda: La–Sol–Fa (c.82, doblado) · Re–Fa (c.83) ·
  La–Sol–Fa (c.84, derecho) · Sol–Si♭–Re (c.85, la subida)

Qué escuchar
  - La versión doblada (Mi♭, Re♭): ¿se reconoce como el motivo?
  - ¿El golpe del c.83 suena ahora a llegada?
  - El c.84: ¿suena a eco o a repetición?

Riesgo
  - Se pierde el suspiro Si♭ → La (el Si♭4 sostenido del c.82).
  - El motivo empieza antes de la marca B2 y cruza la doble barra. Si te quedas
    con esta, la marca y la barra pasan al c.82.
  - El redoble de toms puede tapar la cabeza del motivo.

Cómo está hecho
  Un ciclo es un compás de 3/4. Suena del c.77 al c.87: el cierre del coro 2,
  la costura y los tres primeros compases de la subida, y luego vuelve a empezar.
  Debajo está la partitura tal cual (Louise-melancolica, abierta en MuseScore el
  19 oct a las 18:37, con el bajo del c.83 en Re2). El bloque "Versión" del final
  aplica los cambios, y cada línea dice qué había.
  Para comparar con la partitura, pon VERSION = false.
  Las cinco versiones (5.ai_1 a 5.ai_5) están en esta carpeta y comparten todo
  menos ese bloque. Vienen de la nota 11, "Entrada del B2 y motivo en menor".
*/

// ── Interruptor ───────────────────────────────────────────────────
// true: esta versión. false: la partitura tal cual, para comparar.
const VERSION = true;

// Velocidades de la partitura (las de 3.full_score)
const FUERTE = 0.81; // 114 %
const NORMAL = 0.71; // 100 %, y los golpes sin velocidad propia
const SUAVE = 0.54; // 76 %

// Suena del c.77 al c.87 y vuelve a empezar. Cada objeto lleva una entrada por
// compás, con su número; un compás que no aparece, calla.
const DESDE = 77;
const HASTA = 87;
let compases = (porNumero) =>
  cat(
    ...Array.from(
      { length: HASTA - DESDE + 1 },
      (_, i) => porNumero[DESDE + i] ?? silence,
    ),
  );

// Guitarra rasgueada: en cada acorde, la nota i (de grave a aguda) entra
// i × gap después. Las notas sueltas suenan tal cual. (Igual que en 3.full_score.)
let strum = (pat, gap = 0.01) => {
  let numbered = pat.withHaps((haps) => {
    let seen = new Map();
    return haps.map((hap) => {
      let begin = hap.whole ? hap.whole.begin.valueOf() : -1;
      let i = seen.get(begin) ?? 0;
      seen.set(begin, i + 1);
      return hap.withValue((v) => ({ ...v, cuerda: i }));
    });
  });
  return stack(
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      numbered
        .filterValues((v) => v.cuerda === i)
        .withValue(({ cuerda, ...v }) => v)
        .late(i * gap),
    ),
  ).sound("gm_acoustic_guitar_nylon");
};

let piano = (right, left) =>
  stack(note(compases(right)), note(compases(left))).sound("piano");

let guitar = (porNumero) => strum(note(compases(porNumero)));

// ═══════════════════ Hoy: la partitura (c.77–87) ═══════════════════
/*
Louise-melancolica.mscz como estaba abierta en MuseScore el 19 oct a las 18:37,
con el bajo del c.83 ya en Re2. El cierre del coro 2 (c.77–81), la entrada del
B2 (c.82–84) y el arranque de la subida (c.85–87).
*/

const RIGHT = {
  77: "[~ [E4,A4] [E4,A4]]", // F#m7
  78: "[D4,F#4]", // Bm
  79: "[~ G4 G4]", // Em
  80: "[~ [E4,D5] [F#4,D5]]", // Gmaj13
  81: "[~ [G4,C#5] [A4,E5]]", // A7
  82: "[Bb4,Eb5]", // E♭7 — la armadura pasa a un bemol
  83: "[[A4,F5] [G4,E5]@2 [F4,D5]]", // Dm — B2: el motivo en menor, en sextas
  84: "[[D4,A4] [F4,D5]]", // Dm — el 2º compás del motivo (hemiola)
  85: "[G4 Bb4 D5@3 D5]", // Gm — empieza la subida
  86: "[E5 A4@3 F4 A4]", // Am
  87: "[C5 F4 [G4,F5]@3 [F4,C5]]", // Csus4
};

const LEFT = {
  77: "[[F#2,F#3] F#3 F#3]", // F#m7
  78: "[B3, [[B2,B3] ~@2]]", // Bm
  79: "[[E2,E3] [E3,B3] [E3,B3]]", // Em
  80: "[[G2,F#3] [E3,G3] [F#3,B3]]", // Gmaj13
  81: "[[A2,E3] [C#3,E3] [C#3,E3]]", // A7
  82: "[[Eb2,Db3]@4 Bb3 G3]", // E♭7
  83: "[D2,D3,A3]", // Dm
  84: "[[E2,F3] [A2,D3]]", // Dm
  85: "[[G2,D3]@2 [Bb2,G3]@3 [Bb2,G3]]", // Gm
  86: "[[C3,A3] [C3,A3]@3 [A2,E3]@2]", // Am
  87: "[[C3,F3]@2 [Bb2,G3]@3 [C3,G3]]", // Csus4
};

// De grave a aguda, en altura real (la partitura la escribe una 8ª arriba)
const GUITAR = {
  77: "[F#2,A2,F#3,A3]", // F#m7
  78: "[~ [B3,D4,B4,F#5] [B3,D4,B4,F#5]]", // Bm — en el 2 y el 3
  79: "[E2,G2,E3,G3,E4]", // Em
  80: "[G2,B2,G3,B3]", // Gmaj13
  81: "[A2,C#3,E4,A4,E5]", // A7
  // 82–84: calla
  85: "[~@2 [G2,D3,G3]@3 [G2,D3,G3]]", // Gm — vuelve la guitarra
  86: "[~@2 [A2,E3,A3]@3 [A2,E3,A3]]", // Am
  87: "[~@2 [Bb2,F3,C4]@3 [Bb2,F3,C4]]", // Csus4
};

// La batería del coro 2: bombo en 1-2-3, caja y pandereta en el 2 y el 3,
// cencerro en el 1. El hi-hat entra en el c.78; el shaker suena en 78, 80 y 81.
let grooveC2 = ({ hihat = true, shaker = true } = {}) =>
  stack(
    s("[bd bd bd]").velocity(FUERTE),
    s("[~ sd sd]").velocity(FUERTE),
    s("[~ tb tb]").velocity(NORMAL),
    s("[cb ~ ~]").velocity(SUAVE),
    hihat ? s("[~ oh hh]").velocity(SUAVE) : silence,
    shaker ? s("[sh ~ ~]").velocity(SUAVE) : silence,
  );

// c.82: el redoble — tom grave, tom medio, caja en el 2 y el 2&, cencerro en el 1
let redoble = stack(
  s("[lt@2 ~]").velocity(FUERTE),
  s("[~@2 mt]").velocity(NORMAL),
  s("[~ [sd sd] ~]").velocity(NORMAL),
  s("[cb ~ ~]").velocity(SUAVE),
);

// c.83: el golpe del B2 — bombo 1-2-3, tom agudo, hi-hat, pandereta, palmas,
// cencerro y shaker
let golpe = stack(
  s("[bd bd bd]").velocity(FUERTE),
  s("[ht ~ ~]").velocity(FUERTE),
  s("[oh hh hh]").velocity(NORMAL),
  s("[tb ~ ~]").velocity(NORMAL),
  s("[cp ~ ~]").velocity(NORMAL),
  s("[[cb ~] cb ~]").velocity(NORMAL),
  s("[~ ~ cb]").velocity(SUAVE),
  s("[sh sh@2]").velocity(NORMAL),
);

const BATERIA = {
  77: grooveC2({ hihat: false, shaker: false }), // F#m7
  78: grooveC2(), // Bm
  79: grooveC2({ shaker: false }), // Em
  80: grooveC2(), // Gmaj13
  81: grooveC2(), // A7
  82: redoble, // E♭7
  83: golpe, // Dm
  // 84–87: nada
};

// ═══════════════════ Versión 5: el motivo se adelanta ═══════════════════
// Solo esto cambia. Cada línea dice qué había.
if (VERSION) {
  // c.82 — la cabeza del motivo sobre el E♭7, con Mi♭ y Re♭ arriba
  RIGHT[82] = "[[A4,F5] [G4,Eb5]@2 [F4,Db5]]"; // hoy: [Bb4,Eb5]

  // c.83 — B2: cae en Re (el 2º compás del motivo, tu c.84)
  RIGHT[83] = "[[D4,A4] [F4,D5]]"; // hoy: [[A4,F5] [G4,E5]@2 [F4,D5]]
  LEFT[83] = "[[D2,D3,A3] [A2,D3]]"; // hoy: [D2,D3,A3]

  // c.84 — el motivo otra vez, derecho (tu c.83)
  RIGHT[84] = "[[A4,F5] [G4,E5]@2 [F4,D5]]"; // hoy: [[D4,A4] [F4,D5]]
  LEFT[84] = "[D2,D3,A3]"; // hoy: [[E2,F3] [A2,D3]]
}

stack(
  // Piano
  piano(RIGHT, LEFT),
  // Guitar
  guitar(GUITAR),
  // Drums
  compases(BATERIA).bank("AkaiLinn"),
);
```
