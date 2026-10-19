# Strudel: todos los patrones (código)

> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario (Obsidian + git), el 2026-10-18. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.

Cada .strudel.js de la bóveda salvo los de Louise (esos están en su propio proyecto): beats, lecciones, experimentos y arpegios.

Contiene:

- `4. Instrumento/2. Strudel/3. Beats/0.composing.strudel.js`
- `4. Instrumento/2. Strudel/3. Beats/1.synthwave.strudel.js`
- `4. Instrumento/2. Strudel/3. Beats/2.dreampop.strudel.js`
- `4. Instrumento/2. Strudel/3. Beats/3.spacesong.strudel.js`
- `4. Instrumento/2. Strudel/3. Beats/4.dawnchorus.strudel.js`
- `4. Instrumento/2. Strudel/3. Beats/_lessons/0. simple_beat.strudel.js`
- `4. Instrumento/2. Strudel/3. Beats/beats.strudel.js`
- `4. Instrumento/2. Strudel/4. Arpeggios/intro.strudel.js`
- `4. Instrumento/2. Strudel/4. Arpeggios/second.strudel.js`
- `4. Instrumento/2. Strudel/5. Experiments/1. Happy/0. Brillo.strudel.js`
- `4. Instrumento/2. Strudel/5. Experiments/1. Happy/0.with_arp.strudel.js`
- `4. Instrumento/2. Strudel/5. Experiments/1. Happy/1. BrilloArp.strudel.js`
- `4. Instrumento/2. Strudel/5. Experiments/1. Happy/2. Hypnotic.strudel.js`
- `4. Instrumento/2. Strudel/5. Experiments/1. Happy/3. wddl.strudel.js`
- `4. Instrumento/2. Strudel/5. Experiments/2. House/0.happy_beats.strudel.js`
- `4. Instrumento/2. Strudel/7. House/__exercises/0.intro.strudel.js`
- `4. Instrumento/2. Strudel/7. House/_lessons/0. four_on_the_floor.strudel.js`
- `4. Instrumento/2. Strudel/7. House/_lessons/1. groove.strudel.js`
- `4. Instrumento/2. Strudel/7. House/_lessons/2. bajo.strudel.js`
- `4. Instrumento/2. Strudel/7. House/_lessons/3. sidechain.strudel.js`
- `4. Instrumento/2. Strudel/7. House/_lessons/4. acordes.strudel.js`
- `4. Instrumento/2. Strudel/7. House/_lessons/5. ganchos.strudel.js`
- `4. Instrumento/2. Strudel/7. House/_lessons/6. filtros.strudel.js`
- `4. Instrumento/2. Strudel/7. House/_lessons/7. build_y_drop.strudel.js`
- `4. Instrumento/2. Strudel/7. House/_lessons/8. track.strudel.js`
- `4. Instrumento/2. Strudel/8. Dream pop/_lessons/0. tempo_y_caja.strudel.js`
- `4. Instrumento/2. Strudel/8. Dream pop/_lessons/1. organo.strudel.js`
- `4. Instrumento/2. Strudel/8. Dream pop/_lessons/2. armonia.strudel.js`
- `4. Instrumento/2. Strudel/8. Dream pop/_lessons/3. bajo_y_guitarra.strudel.js`
- `4. Instrumento/2. Strudel/8. Dream pop/_lessons/4. voz.strudel.js`
- `4. Instrumento/2. Strudel/8. Dream pop/_lessons/5. espacio.strudel.js`
- `4. Instrumento/2. Strudel/8. Dream pop/_lessons/6. textura.strudel.js`
- `4. Instrumento/2. Strudel/8. Dream pop/_lessons/7. cancion.strudel.js`

---

## Archivo: `4. Instrumento/2. Strudel/3. Beats/0.composing.strudel.js`

```js
const BPM = 30;

setcpm(BPM);

const acordes = "<Eb^7 Cm7 Ab^7 Bb7sus>";

stack(
  stack(
    s("bd ~ bd ~"), // kick en 1 y 3
    s("~ sd ~ sd"), // caja en 2 y 4
    s("hh*8"), // hi-hat en corcheas
  ).bank("RolandTR909"),
  // // Batería: LinnDrum, puro 80s ──
  stack(
    s("bd ~ bd bd"), // kick en los 4 tiempos
    s("~ sd ~ sd").room(0.6).roomsize(4), // caja con reverb grande
    s("hh*4").velocity("[.4 2 .4 .25]*4"), // hi-hat en semicorcheas
  ).bank("LinnDrum"),

  note("<[a0 a1]*4 [f1 f2]*4 [c2 c3]*4 [g2 g3]*4>").s("piano").lpf(600),

  n("[0 1 2 3 4 3 2 1]*2")
    .chord(acordes)
    .anchor("a3")
    .mode("above")
    .voicing()
    .s("sawtooth")
    .lpf(2500)
    .delay(1)
    .room(0.4)
    .gain(0.5),

  chord(acordes)
    .anchor("c5")
    .voicing()
    .s("piano")
    .lpf(1500)
    .room(0.7)
    .gain(0.25),
);
```

---

## Archivo: `4. Instrumento/2. Strudel/3. Beats/1.synthwave.strudel.js`

```js
const BPM = 100;
setcpm(BPM / 4); // 1 ciclo = 1 compás de 4/4

const acordes = "<Eb^7 Cm7 Ab^7 Bb7sus>";

stack(
  // ── Batería: LinnDrum, puro 80s ──
  stack(
    s("bd*4"), // kick en los 4 tiempos
    s("~ sd ~ sd").room(0.6).roomsize(4), // caja con reverb grande
    s("hh*16").velocity("[.6 .25 .4 .25]*4"), // hi-hat en semicorcheas
  ).bank("LinnDrum"),

  // ── Bajo: corcheas saltando de octava ──
  note("<[a0 a1]*4 [f1 f2]*4 [c2 c3]*4 [g3 g4]*4>").s("sawtooth").lpf(600),

  // ── Arpegio: sube y baja por el acorde en semicorcheas ──
  n("[0 1 2 3 4 3 2 1]*2")
    .chord(acordes)
    .anchor("a3")
    .mode("above")
    .voicing()
    .s("sawtooth")
    .lpf(2500)
    .delay(0.3)
    .room(0.4)
    .gain(0.5),

  // ── Pad: el acorde entero, de fondo ──
  chord(acordes)
    .anchor("c5")
    .voicing()
    .s("supersaw")
    .lpf(1500)
    .room(0.7)
    .gain(0.25),
);
```

---

## Archivo: `4. Instrumento/2. Strudel/3. Beats/2.dreampop.strudel.js`

```js
const BPM = 76;
setcpm(BPM / 4);

const acordes = "<D^7 Bm7 G^7 A7sus>"; // ^7 = maj7 en Strudel

stack(
  // ── Batería: caja de ritmos vieja, con la caja muy lejos ──
  stack(
    s("bd ~ [~ bd] ~").lpf(900), // kick redondo, sin clic
    s("~ sd ~ sd").velocity(0.6).room(0.9).roomsize(8), // caja que se va lejos
    s("hh*8").velocity("[.4 .15]*4").hpf(5000), // hi-hats casi aire
  ).bank("RolandCompurhythm78"),

  // ── Bajo: una nota larga por compás ──
  note("<d2 b1 g1 a1>").s("triangle").lpf(400),

  // ── Pad: acordes que entran despacio ──
  chord(acordes)
    .anchor("d5")
    .voicing()
    .s("sawtooth")
    .lpf(900)
    .attack(0.6)
    .release(2)
    .room(0.8)
    .gain(0.3),

  // ── Arpegio lento con eco ──
  n("0 2 4 3 1 3 2 4")
    .chord(acordes)
    .anchor("d4")
    .mode("above")
    .voicing()
    .s("triangle")
    .delay(1)
    .room(1)
    .gain(0.4),
);
```

---

## Archivo: `4. Instrumento/2. Strudel/3. Beats/3.spacesong.strudel.js`

```js
const BPM = 74;
setcpm(BPM / 4);

const acordes = "<Eb^7 Cm7 Ab^7 Bb7sus>";

stack(
  // ── Batería: un preset que corre igual toda la canción ──
  stack(
    s("[bd ~ ~ ~] [~ ~ ~ ~] [bd ~ ~ bd] [~ ~ ~ ~]").lpf(800),
    s("~ sd ~ sd").velocity(0.5).room(0.95).roomsize(10),
    s("hh*8").velocity("[.3 .12]*4").hpf(6000),
  ).bank("RhythmAce"),

  // ── Bajo: la raíz, larga y redonda ──
  note("<eb2 c2 ab1 bb1>").s("sine").gain(0.8),

  // ── Órgano: acordes sostenidos con vibrato de cinta ──
  chord(acordes)
    .anchor("eb5")
    .voicing()
    .s("square")
    .lpf(1100)
    .attack(0.4)
    .release(2)
    .vib(4)
    .vibmod(0.08)
    .room(0.8)
    .gain(0.2),

  // ── La línea que baja: arpegio descendente con eco ──
  n("[4 3 2 1]*2")
    .chord(acordes)
    .anchor("eb4")
    .mode("above")
    .voicing()
    .s("triangle")
    .delay(0.6)
    .delayfeedback(0.6)
    .room(0.9)
    .gain(0.35),
);
```

---

## Archivo: `4. Instrumento/2. Strudel/3. Beats/4.dawnchorus.strudel.js`

```js
const BPM = 68;
setcpm(BPM / 4);

// Tu progresión, cc. 1–8. Bmb6 → Bm y Dsus2add13 → Dadd9 (Strudel no tiene esos dos)
const acordes = "<G^7 G6 D D7sus Bm Bm D7 Dadd9>";

stack(
  // ── El latido: el acorde repetido en corcheas, con un filtro que abre y cierra ──
  chord(acordes)
    .anchor("b4")
    .voicing()
    .struct("x*8")
    .s("sawtooth")
    .lpf(sine.range(500, 1800).slow(8)) // se abre y se cierra cada 8 compases
    .attack(0.01)
    .release(0.3)
    .velocity("[.6 .35]*4")
    .room(0.5)
    .gain(0.3),

  // ── Sub bajo: la raíz, larga ──
  note("<g1 g1 d2 d2 b1 b1 d2 d2>").s("sine").gain(0.9),

  // ── Niebla: el mismo acorde muy arriba, entrando lentísimo ──
  chord(acordes)
    .anchor("d6")
    .voicing()
    .s("sawtooth")
    .lpf(700)
    .attack(2)
    .release(4)
    .room(0.9)
    .gain(0.12),

  // ── Pájaros (el "dawn chorus"): notas sueltas, agudas, con eco ──
  n("<~ [~ 4] ~ [~ ~ 6 5]>")
    .scale("G5:major")
    .s("sine")
    .delay(0.7)
    .room(0.9)
    .gain(0.15),

  // ── Si quieres un corazón debajo, quita las // ──
  // s("bd ~ ~ ~").bank("RolandTR808").lpf(200).gain(0.6),
);
```

---

## Archivo: `4. Instrumento/2. Strudel/3. Beats/_lessons/0. simple_beat.strudel.js`

```js
const BANK = "RolandTr909";
// Se miden por ciclos, un ciclo es un compás
// cpm = cycles per min

// Dentro de cada ciclo se considera como un compás, es decir que son tus bpm entre el numero de pulsos por compás eg

// Eg: 4/4 = setcpm(BPM/4)

// La subdivisión sería el clásico

/**
 * negras        1       2       3       4
 *  corcheas      1   &   2   &   3   &   4   &
 * semicorcheas  1 e & a 2 e & a 3 e & a 4 e & a
 * tresillos     1 - -   2 - -   3 - -   4 - -
 */

// setcpm(80 / 4);

// Cada espacio es un ciclo
// Cuando usas corchetes estás usando un pulso dentro de ese ciclo, a menos que sean dentro de otra subdivisión
// Usar <> es para crear notas dentro de un ciclo y si le pones un multiplicador
// Será para reproducir una cantidad de notas definidas por ciclo
// <e5 b4 d5 c5 a4 c5>*8 = 8 notas por ciclo, obvio se repiten

// sound("bd*4, hh*<4 8 16 12>").bank("RolandTr909");

// sound(
//   cat(
//     "bd ~ bd ~",
//      This is the same sound, cos of the cycles and notes inside each cycle
//     "[bd ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [bd ~ ~ ~]",
//     "[bd ~ ~ ~] [~ ~ ~ bd] [bd ~ ~ ~] [~ ~ ~ ~]",
//   ),
// ).bank("RolandTr909");

// 2. Los tres roles
/* 
Kick - bombo - Suena grave, da peso y apoyo - bd -
Box - Snare - Medio, da acento - contesta una frase - sd cp rim
Hi hat - Agudo, da reloj y subdivisión - Te dice a qué velocidad va el tiempo - hh oh 
*/

// setcpm(90 / 4);

// 2. Fácil
// stack(sound("bd ~ bd ~~"), sound("~ cp ~ cp"), sound("hh*8")).bank(
//   "RolandTR909",
// );

// 2. Con rejilla integrada
// stack(
//   sound("[bd bd ~ ~] [bd ~ ~ bd] [~ bd ~ bd]"),
//   sound("[~ ~ ~ cp]  [~ cp cp ~] [cp cp cp cp]"),
//   sound("hh*12"),
// ).bank("RolandTR909");

// 3. Con backbeat

/*
Recordar que en 4/4 tiempos fuertes son: 1 y 3. Débiles son 2 y 4
El back beat pone los golpe más brillantes: la caja (sd cp rim) en tiempo débil
El kick dice donde está el suelo y la caja contesta a eso

En el rock casi no se mueve la caja y el kick sí


Cuando mueves el kick la canción cambia, la caja cambia la sesnsación
*/

// stack(
//   // Kick
//   // 1. Cayendo justo en el tiempo que no cae el box
//   // sound("[bd ~ ~ ~] [~ ~ ~ ~] [bd ~ ~ ~] [~ ~ ~ ~]"),
//   // 2. Usando subdivisiones
//   // sound("[bd ~ ~ bd] [~ ~ ~ bd] [bd ~ ~ bd] [~ ~ ~ bd]"),
//   // 3. Usando subdivisiones menos movidas
//   // sound("[bd ~ ~ bd] [~ ~ ~ ~] [bd ~ bd bd] [~ ~ ~ ~]"),
//   // 4. Subdivisiones atascadas
//   sound("[bd bd ~ bd] [~ ~ ~ ~] [bd ~ bd bd] [~ ~ ~ ~]"),
//   // Box
//   sound("[~ ~ ~ ~] [cp ~ ~ ~] [~ ~ ~ ~] [cp ~ ~ ~]"),
//   // Hi hat
//   sound("hh*8"),
// ).bank(BANK);

// 4. La sensación

/*
Para cambiar la sesnsación de rapidez, se usa la caja 

Pareciera que el hh siempre es el doble del kick y la caja
half-time
        1 e & a 2 e & a 3 e & a 4 e & a
hh      x . x . x . x . x . x . x . x .
caja    . . . . . . . . x . . . . . . .
kick    x . . . . . . . . . . . . . . .

double-time
hh      x x x x x x x x x x x x x x x x
caja    . . x . . . x . . . x . . . x .
kick    x . . . x . . . x . . . x . . .
*/

// const normal = stack(
//   // Kick
//   sound("bd ~ bd ~"),
//   // Box Siempre cae en diferente tiempo que el kick
//   sound("[~ ~ ~ ~] [sd ~ ~ ~] [~ ~ ~ ~] [sd ~ ~ ~]"),
//   // Hi hat
//   sound("hh*8"),
// );

// const halfTime = stack(
//   // Kick
//   sound("bd ~ ~ ~"),
//   // Box
//   sound("[~ ~ ~ ~] [~ ~ ~ ~] [sd ~ ~ ~] [~ ~ ~ ~]"),
//   // Hi hat
//   sound("hh*8"),
// );

// const doubleTime = stack(
//   // Kick Suena en cada cuarto
//   sound("bd bd bd bd"),
//   // Box Suena la misma cantidad que kick
//   sound("[~ sd] [~ sd] [~ sd] [~ sd]"),
//   // HiHat
//   sound("hh*16"),
// );

// // Arrange toca Patrones durante n tiempos
// arrange([2, doubleTime]).bank(BANK);

// 5. Dinámica
/*
Que la dinámica sea en que no todos pesen igual

velocity y gain sirven para eso
*/

// 5.1 Acentos

// stack(
//   // Kick
//   s("bd ~ bd ~"),
//   // Box
//   s("~ sd ~ sd"),
//   // Hihat
// Son 4 ciclos
//   s("hh*8").velocity("<1 [1 .5]*4>"),
// );

// 5.2 ghost notes
// Golpes casi inaudibles entre los backbeats, se usan para dar movimiento
/*
        1 e & a 2 e & a 3 e & a 4 e & a
hh      X . x . X . x . X . x . X . x .
caja    . . . g X . g . . g . . X . . g
kick    X . . . . . . . . . X . . . . .
*/

// stack(
//   // Kick
//   sound("bd ~ bd ~"),
//   // Box
//   sound("[] sd ~ sd"),
//   // Box ghost
//   // Es únicamente añadir sonidos que tengan muy poco sonido entre beatback
//   sound("[~ ~ ~ cp] [~ ~ cp ~] [~ cp ~ ~] [~ ~ ~ cp]").velocity(".3"),
//   // HiHat
//   sound("hh*8").velocity("[1 .4]*4"),
// ).bank(BANK);

// 5.3 Humanizar
// Agregar valores al azar entre golpes
// stack(
//   // Kick
//   sound("~ bd ~~ bd"),
//   // Box
//   sound("cp ~ cp ~"),
//   // HiHat
//   // Se usa un valor al azar entre estos números por cada golpe
//   // La "humanización" caería en estos valores random
//   sound("hh*8").velocity(rand.range(0.1, 0.9)),
// ).bank(BANK);

// 6. Tiempo fino

// 6.1 Swing
/*
Atrasar la segunda corchea de cada par, es decir 2 y 4 
Ritmo recto es que todo cae donde tiene que caer
un tiempo partido en 6:  | 1 . . . . . | 2 . . . . . |
recto                    | x . . x . . | x . . x . . |   "&" en la mitad
swing de tresillo        | x . . . x . | x . . . x . |   "&" en el último tercio
*/

// Para el swing se usa el swing by
//

// setcpm(90 / 4);
// stack(
//   // Kick
//   sound("bd ~ bd ~"),
//   // Box
//   sound("~ sd ~ sd"),
//   // HiHat
//   sound("hh*8").velocity("[1 .4]*4"),
// )
//   .bank(BANK)
//   //   Primer ciclo recto, segundo con swing de .33, 4 pares por compás (corcheas)
//   .swingBy(0.33, 4);
// // También puede ser por porcentajes, cantidad = 2 x (porcentaje - 0.5)

// 6.2 Microtiming: Tocar detrás del tiempo

// Se puede atrasar una sola capa por milisecs. Se usa en hip hop y neo soul en la caja
// .late(x) milisegundos = x × 240 000 / BPM. A 90 BPM, .late(.012) ≈ 32 ms.

// Swing es un tipo de microtiming
// .early(0.25) traerá un

// setcpm(90 / 4);

// stack(
//   // Kick
//   sound("[bd ~ ~ ~] [~ ~ ~ ~] [~ ~ bd ~] [~ ~ ~ ~]"),
//   // Box
//   sound("[~ ~ ~ ~] [sd ~ ~ ~] [~ ~ ~ ~] [sd ~ ~ ~]").late("<0 0.12>"),
//   // HiHat
//   sound("hh*8"),
// ).bank(BANK);

// 7. Síncopa: El kick fuera del tiempo
/*
Es como adelantar un ascento 

Hacer que un kick caiga en la parte debil. Casi siempre lo lleva el kick 
*/

// 7.2 Ritmos euclidianos
// bd(k,n) reparte k golpes en n pasos

/*
bd(3,8)      x . . x . . x .     tresillo, 3+3+2
bd(5,8)      x . x x . x x .     cinquillo
bd(3,8,2)    x . x . . x . .     el tresillo rotado: 2+3+3

            1   &   2   &   3   &   4   &
hh*8        x   x   x   x   x   x   x   x
caja        .   .   x   .   .   .   x   .
bd(3,8)     x   .   .   x   .   .   x   .
*/

// setcpm(90 / 4);

// stack(
//   // Kick
//   sound("bd(5,8)"),
//   // box
//   sound("~ cp [~ cp] cp"),
//   sound("[~ ~ sd sd] [~ sd ~ ~] [~ sd ~ ~] [~ ~ sd sd]").velocity(0.1),
//   // Hh
//   sound("hh*8").velocity("[0.8 0.3]*4"),
// ).bank(BANK);

// 8. Resto del kit

/*
- hh abierto ho - Respiración en los & 
- palmas cp - Backbeat alternativo
cross stick -rim
toms - lt mt ht 
crash cr
ride - rd - Sustituye al 
shaker o pandereta -  sh, tb
Cncerro db, perc
*/

// 9. Fill y variación

// También en los beats se generan frases y variaciones. Regularmente presentas y después anuncias que algo viene

/*
Herramienta	Qué hace	Para qué
"<a b c d>" o cat(a, b, c, d)	un compás distinto por ciclo	fills escritos a mano
.lastOf(n, f)	aplica f al último de cada n compases	fill por transformación
.firstOf(n, f) (o .every)	aplica f al primero de cada n	variación al abrir la frase
.ply(n)	repite cada golpe n veces	redobles: .lastOf(4, x => x.ply(2))
.degradeBy(p)	quita golpes al azar con probabilidad p	hi-hats que respiran
.sometimesBy(p, f)	aplica f a algunos golpes	variación que no escribiste
hh*8?	cada golpe tiene 50 % de sonar	lo mismo, en mini-notación

un fill puede ser simplemente callar unas voces y meter una variación
*/

// setcpm(80 / 4);

// stack(
//   // Kick
//   sound("bd ~ bd ~").lastOf(4, (x) => x.mask("1 1 0 0")),
//   // Box
//   sound(
//     cat(
//       "~ cp ~ cp",
//       "~ cp ~ cp",
//       "~ cp ~ [cp cp ~ ~]",
//       "[~ sd ~ ~] [ht ht mt mt] [~ sd sd ~] [lt lt sd sd]",
//     ),
//   ),
//   // Hh
//   sound("hh*8")
//     .velocity(rand.range(0.1, 0.4))
//     .lastOf(4, (x) => x.mask("1 1 0 0")),
// ).bank(BANK);

// 10. The box

/*

*/
// setcpm(84 / 4);

// const beat = stack(
//   s("bd ~ [~ bd] ~"),
//   s("~ sd ~ sd"),
//   s("hh*8").velocity("[.8 .4]*4"),
// );

// arrange(
//   [2, beat], // sin banco: E-mu SP-12
//   [2, beat.bank("RolandTR808")],
//   [2, beat.bank("RolandTR909")],
//   [2, beat.bank("LinnDrum")],
//   [2, beat.bank("RolandCompurhythm78")],
//   [2, beat.bank("KorgMinipops")],
// );

// 10.2 Esculpir

/*
lpf - pasa bajos: quita brillo - oscuro, lejano
hpf - pasa altos: quita grave - hats finos, beat de radio
room/roomsize: Reverb - Espacial y dream pop
delay: Eco - Aro 
shape: Saturación pegada, calidez
crush: Menos bits, más lofi
speed: Velocidad del sample
pan: panorama - percusión a los lados, mas alejados
*/

// 11. El beat dentro de una rolita

// 11.1 El kick y el bajo; como interactuan
// Comparten registro. Se abrazan o se turnan, porque sino se pisan
// Para algo simple puedes hacer que compartan el mismo ritmo desde el
// Inicio con una constante

// setcpm(80 / 4);

// const golpes = `x(4,8)`;

// stack(
//   stack(
//     // Kick
//     sound("bd").struct(golpes),
//     // Box
//     sound("[~ rim rim ~] [sd ~ sd ~] [~ rim rim ~] [sd ~ sd ~]").velocity(
//       rand.range(0.3, 0.6),
//     ),
//     //  HH
//     sound("hh*8"),
//   ).bank("Linn9000"),

//   //   note("A1").struct(golpes).s("sawtooth").lpf(600),
// );

// 11.2 La forma por densidad
// La batería es lo más barato, cambia la forma. Cada seccion tiene un nivel
// De densidad y la canción es la curva que va dibujando el nivel de densidad

/*
densidad
  alta   │                    ██████████            ██████████
  media  │          ██████████                                   
  baja   │██████████                    ██████████               
         └──────────────────────────────────────────────────────
           intro     verso      coro       puente     coro
           solo hats kick+aro   todo+crash half-time  todo+crash
*/

// setcpm(88 / 4);
// stack(
//   s("[bd ~ ~ ~] [~ ~ ~ bd] [~ ~ bd ~] [~ ~ ~ ~]"),
//   s("~ sd ~ sd"),
//   s("hh*16").velocity("[.7 .25 .45 .25]*4"),
// )
//   .swingBy(0.2, 8) // swing de semicorcheas, ~60 % de MPC
//   .crush(10)
//   .lpf(4000); // el polvo del sampler

setcpm(52 / 2); // 6/8 a 52 negras con punto
stack(
  s("bd ~ ~ ~ ~ ~"),
  s("~ ~ ~ rim ~ ~").room(0.4),
  s("hh*6").velocity("[.6 .25 .35]*2"),
).bank("LinnDrum");
```

---

## Archivo: `4. Instrumento/2. Strudel/3. Beats/beats.strudel.js`

```js
const BPM = 40;

setcpm(BPM);

stack(
  s("bd ~ bd bd"), // kick en 1 y 3
  s("~ sd ~ sd"), // caja en 2 y 4
  s("hh*6"), // hi-hat en corcheas
).bank("RolandTR909");
```

---

## Archivo: `4. Instrumento/2. Strudel/4. Arpeggios/intro.strudel.js`

```js
const BPM = 80;
const PASOS = 5;
const NOTAS = 10;
const DIRECTION = "down";

setcpm(BPM / 4);

// Aquí, los pasos se definene por el numero de pasos per sé y cuantas notas por paso
const pasos = run(PASOS).mod(NOTAS);

// irand nos da cosas random y después segment las segmenta por nota
const random = irand(NOTAS).segment(PASOS);
// Pasos iniciales: "1 0 3 2 3 1 2"

// Palindrome toma un run y lo hace para arriba y abajo
const updown = pasos.palindrome();
const reverse = pasos.rev();

const indices = {
  up: pasos,
  down: reverse,
  updown: updown,
  random,
}[DIRECTION];

const runs = n("0 1 2 3 0 1 2 3")
  .struct("x ~ x ~")
  .chord("C")
  .anchor("c3")
  .mode("above")
  .voicing()
  .s("gm_viola")
  .lpf(100)
  .lpq(0.5)
  .hpf(0.5)
  .lpenv(10)
  .swingBy(0.5)
  .velocity(rand.range(0.6, 0.5));

const second = n("0 3 2 1 0 2 1 3")
  .chord("Am7")
  .anchor("A2")
  .voicing()
  .s("sawtooth")
  .lpf(100)
  .lpq(0.5)
  .hpf(0.5)
  .lpenv(10)
  .velocity(rand.range(0.7, 0.7));

const kick = sound("bd ~ [bd ~ bd ~] ~").bank("LinnDrum");
const box = sound("~ sd ~ sd").velocity(0.2).bank("RolandD110");
const high = sound("hh*16");

stack(runs)._scope();
```

---

## Archivo: `4. Instrumento/2. Strudel/4. Arpeggios/second.strudel.js`

```js
setcpm(72 / 4);

// $: n("<[0 3 2 1 2 2 3 2 1] [0 3 2 1 0 3 2 1]>")
//   .chord("<Am7>")
//   .anchor("A5")
//   .voicing()
//   .s("piano");

$: note("c3 e3 g4 b4")
  .s("gm_pizzicato_strings")
  .lpq(100)
  .pianoroll({ labels: 1, cycles: 2, vertical: 0 });

$: note("<c1 a1 b1 f1 b1>")
  .sound("gm_synth_strings_1")
  .velocity(1)
  .lpq(20)
  .lpf(150)
  .pianoroll({ labels: 1, cycles: 2, vertical: 0 });

$: chord("<C Am Bo Fadd9 G7>")
  .voicing()
  .arp("0 3 1 2")
  .sound("piano")
  .lastOf(5, (x) => x.arp("0,3,2,1"))
  .pan(1);
// .first((x) => x.arp(false));

$: note("<<[c4, e3, g4, c5]>!4 [e4, d3, g5, b4]>")
  .sound("gm_synth_bass_1")
  .pianoroll({ labels: 1, cycles: 2, vertical: 0 })
  .velocity(0.4)
  .lastOf(5, (x) => x.velocity(0.8) && x.pan(1))
  .lpf(500)
  .lpq(10)
  .room(0.5)
  .pan(-1);

$: sound("bd ~ bd ~").hpf(100).bank("RolandD110");

$: sound("~ [cp cp ~ cp] ~ [cp ~ cp ~]").bank("AkaiLinn").velocity(0.3).hpf(10);

$: sound("[~ tb tb ~] [~ ~ tb ~] [~ tb tb ~] [~ tb tb ~]")
  .pan(-1)
  .lpf(0.1)
  .velocity(0.5)
  .bank("AkaiLinn");

$: sound("hh*8").velocity(rand.range(0.2, 0.6));
```

---

## Archivo: `4. Instrumento/2. Strudel/5. Experiments/1. Happy/0. Brillo.strudel.js`

```js
setcpm(120 / 4);
// let PROG = "<Bb Dm Ebsus Gm [F@1.5 F7]>";
let PROG = "<Bb Dm Eb6 Gm7 F F7>";

// let ARP_ORDER = `<
//   [[0,2] 3 2 1]
//   [[0,2] 3 2 1]
//   [[0,1] 1 2 3]
//   [[0,2] 0 2 1]
//   [[[0,2] 2][[1,3] 1]]
// >`;
let ARP_ORDER = `<
  [[0,2] 3 2 1]
  [[0,2] 3 2 1]
  [[0,2] 3 2 1]
  [[0,2] 4 2 1] 
  [[0,2] 3 4 3]
  [[0,2] [1,2,3,5]]
>`;

let ARP_RYTHM = "<[x x x x]!5 [x x]>";

let high = s("hh*4").velocity(rand.range(0.1, 0.3)).bank("RolandD70");

let kick = s("<[bd ~ [~ bd] ~]!5 [[bd ~]  ~ [~ bd bd ~]]>")
  .velocity(0.8)
  .bank("RolandD70");

let box = s(
  "<[~ [[sd,rim] ~ ~ ~] ~ [sd sd ~ ~]]!5 [[~ sd]  sd ~ [[sd,rim] ~ ~ [sd,rim,cr]]]>",
)
  .swingBy(0.2, 8)
  .velocity(0.5)
  .bank("RolandD70");

let ghostFolk = s("<[[rd ~ ~ cp] ~ [~ cp] ~]!5 [~ [oh oh oh rd] ~ ~]>")
  .velocity(0.1)
  .bank("RolandD70");

/*
Usando piano y usando notas tan específicas no puede sonar un arp tipo true love waits
*/
let synth = chord(PROG)
  .voicing()
  .arp(ARP_ORDER)
  .struct(ARP_RYTHM)
  .lpf(300)
  .lpq(4)
  .sound("gm_synth_choir");

stack(
  // Synth
  synth,
  // HH
  high,
  // kick
  kick,
  // box
  box,
  // Ghost
  ghostFolk,
).pianoroll({ labels: 2, cycles: 2, vertical: 0 });
```

---

## Archivo: `4. Instrumento/2. Strudel/5. Experiments/1. Happy/0.with_arp.strudel.js`

```js
setcpm(90 / 4);

const chordObject = {
  G: "~ ~ [a5 b5 c5] [d5 c5 b5]",
  C: "~ ~ [g4 a4 b5] [a5 g5 a5]",
  F6: "~ ~ [c5 d5 e5] [f5 e5 d5]",
  Gmaj7: "~ ~ [c5,e5] [e4,g4]",
};

// const CHORDS = Object.keys(chordObject).join(" ");

const ornamentation = stack(
  note(`<
    [ [g4, b5, d5] [g4, b5, d5] [A4 B4 C5] [d5 c5 b4]]
    [ [g4, c5, e5] [g4, c5, e5] [g4 a4 b4] [a4 g4 a4]]
    [ [f4, a4, d5] [f4, a4, d5] [c5 d5 e5] [f5 e5 d5]]
    [ [f4#, b4, d5] [f4#, b4, d5] [c5, e5] [e4, g4]]
  >`),
  note(`<
    [ [g2, d2, b3]@0.75 [g2, d2, b3] ~ ~]
    [ [c2, g3, c3]@0.75 [c2, g3, c3] ~ ~]
    [ [f2, c3, a3]@0.75 [f2, c3, a3] ~ ~]
    [ [ g2, d2, b3]@0.75 [g2, d2, b3] ~ ~]
  >`),
)
  .sound("piano")
  .lpf(3000)
  .lpenv(5)
  .room(0.3)
  .roomsize(9)
  .velocity(0.85);

let violin = note(`<
     [[g4 d5 b4] d5 g4 d5]
     [[c5 g5 e5] d5 c4 e4]
     [[f4 c5 a5] d5 f4@2]
     [[g4 d5 b4] f#5 g5 b5]
   >`)
  .sound("gm_violin")
  .lpf(4000)
  .lpenv(5)
  .room(0.2)
  .velocity(0.5);

let bass = note(`<
    [g2, d3] 
    [c2, g3] 
    [f2, d3] 
    [b2, f#3] 
>`).sound("gm_acoustic_bass");

let kick = sound("bd ~ bd ~")
  .lastOf(4, (x) => x.mask("1 1 0 0"))
  .velocity(0.7)
  .bank("RolandD110");

let box = sound(
  cat(
    "~ sd ~ [sd ~ [sd,rim] ~]",
    "~ sd ~ [sd ~ sd ~]",
    "~ sd ~ [[sd,rim] ~ [sd,rim]]",
    "~ [ [sd] ~ [sd] ~ ] ~ [sd [rim,sd] ~ [sd, rim]]",
  ),
)
  .bank("RolandD110")
  // .swingBy(0.2, 8)
  .velocity(rand.range(0.4, 0.3));

let hiHats = sound("hh*8").bank("RolandD110").velocity(rand.range(0.1, 0.4));

let ghosty = sound(
  cat(
    "[~ ~ ~ tb] [~ ~ tb ~] ~ [~ ~ ~ tb]",
    "[~ ~ ~ tb] [~ ~ tb ~] ~ [~ ~ ~ tb]",
    "[~ ~ ~ tb] [~ ~ tb ~] ~ [~ ~ tb ~]",
    "[~ ~ ~ tb] [~ ~ tb ~] ~ [~ ~ ~ tb]",
  ),
)
  .bank("RolandD110")
  .velocity(0.2);

const guitarBase = chord("<Gadd9 Cadd9 F6 F7>")
  .struct("x ~ x x ~ x x ~") // ritmo del rasgueo (corcheas)
  .voicing()
  .anchor("g4");

const strum = (base, gap = 0.012) =>
  stack(...[0, 1, 2, 3].map((i) => base.arp(i).late(i * gap)));

let guitar = strum(guitarBase)
  .sound("gm_acoustic_guitar_steel")
  .velocity(0.5)
  .room(0.3)
  .roomsize(1);

stack(
  // Piano
  ornamentation,
  // Strings,
  violin,
  // Bass
  bass,
  // Kick
  kick,
  // Box
  box,
  // Filler
  ghosty,
  // hi hat
  hiHats,
  // Guitar
  guitar,
);
```

---

## Archivo: `4. Instrumento/2. Strudel/5. Experiments/1. Happy/1. BrilloArp.strudel.js`

```js
setcpm(120 / 4);
// let PROG = "<Bb Dm Ebsus Gm [F@1.5 F7]>";
// let PROG = "<Bb Dm Eb Gm F7>";
let PROG = "<Bb Bb Dm Dm6 Gm Gm F F7>";

let ARP_ORDER = "<[[6 3] 3 1 2]!3 [[0 2] 3 1 5 [2, 5]]>";

let ARP_RYTHM = "<[[x x]@1.5 [1]@0.5 1 1]!3 [[1 1][1 1]@1.25 ~@0.75 [1 1]]>";

let synth = chord(PROG)
  .voicing()
  .arp(ARP_ORDER)
  .struct(ARP_RYTHM)
  .lpf(4000)
  .lpq(1)
  .room(0.3)
  .roomsize(8)
  .swingBy(0.2, 8)
  .velocity(rand.range(0.7, 0.9))
  .sound("piano");

let high = s("oh*4").bank("RolandD70").velocity(rand.range(0.1, 0.3));

let kick = s("<[bd ~ bd ~]!3 [~]>").bank("RolandD70");

let box = s("<[~ perc ~ perc]!3 [~ ~ perc perc]>")
  .bank("RolandD70")
  .swingBy(0.2, 8);

let ghostFolk = s("<[[sh ~ ~ sh] ~ [~ sh] ~]!3 [oh oh ~ [cb,rd,cr]]>")
  .bank("RolandD70")
  .velocity(0.1);

let bass = note(
  "<[B2,D2] [B2,F2] [D2, A1] [D2,Bb2] [G2,B2] [G2,D2] [F3, C2] [f2, E3]>",
)
  .velocity(0.3)
  .lpf(900)
  .lpq(8)
  .room(0.8)
  .roomsize(5)
  .sound("gm_electric_bass_pick");

stack(
  // Arp synth
  synth,
  // hh
  high,
  kick,
  box,
  ghostFolk,
  bass,
).pianoroll({ labels: 2, cycles: 2, vertical: 0 });
```

---

## Archivo: `4. Instrumento/2. Strudel/5. Experiments/1. Happy/2. Hypnotic.strudel.js`

```js
setcpm(130 / 4);
// let PROG = "<Bb Dm Ebsus Gm [F@1.5 F7]>";
// let PROG = "<Bb Dm Eb Gm F7>";
let PROG = "<Bb Bb6 Dm Dm6 Gm Gm F F7>";

let ARP_ORDER = `
      0
      2@2
      3
      2
      3
      2@0.5
      4
      2@0.5
`;

// .struct(ARP_RYTHM)
let synth = chord(PROG).voicing().arp(ARP_ORDER).hpf(400).hpq(6).sound("piano");

let pad = chord(PROG)
  .voicing()
  .swingBy(0.2, 10)
  .sound("gm_synth_bass_1")
  .lpf(500)
  .lpq(9)
  .velocity(0.4);

// let violin = note(`<

// >`).sound("gm_violin");

stack(
  // Arp synth
  synth,
  // Pad
  pad,
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

## Archivo: `4. Instrumento/2. Strudel/7. House/__exercises/0.intro.strudel.js`

```js
/*
El house se compone de: 
- Groove - Latencia
- Grave - Que empuja abajo
- Armonía - Color
- Movimiento  - Filtro y tensiones
- Forma - Que cambia
*/

// Disco sin orquesta, Frankie Knuckles empezó todo
/*
70's: Kick en negras, hat en contratiempo 
80's: Box + house 
86: Deep house: Acordes de jazz y soul, menos golpes
90: Garage de NY, piano y frecnch
20: Sidechain exagerado
2010's: Tech house y lofi
*/

// Tempo siempre va entre 118 y 130
setcpm(118 / 4);

// stack(
//   // Kick
//   s("bd").beat("0, 4, 8, 12, 16", 16),
//   // Box
//   s("sd").beat("2, 6, 10, 14", 16),
// ).bank("RolandTr909");

// El house se divide en bloques de 8 compases, en los cuales algo tiene que cambiar
// En el último compás

// stack(
//   // Kick
//   s("bd*4").lastOf(8, (x) => x.mask("1 1 1 0")),
//   // Box
//   s("~ sd [~ sd] ~"),
//   // Hi hats
//   s("oh ~ oh ~"),
//   // Crash on last one
//   s("<cr ~!7>"),
// ).bank("RolandTR909");

// 2. Four on the floor

/*
El kick rara vez se mueve

El back beat mayormente es en 2 y 4 
Clap se usa mucho más 
*/

// stack(
//   //Kick
//   s("bd*4"),
//   // Box
//   s("<[~ cp ~ cp]>"),
//   // Oh
//   s("<[[hh hh hh oh]*4]>").cut(1),
// ).bank("RolandTR909");

// 2.1 Backbeat: claps, box or both

stack(
  // KIck
  s("bd:2*4"),

  // Box
  s("~ [sd,cp] ~ [sd,cp]"),
  // Box normal
  s("~ [~ sd ~ sd] ~ [~ ~ ~ sd]"),
  // Aro
  s("~ [~ rim rim ~] ~ [~ rim ~ rim]"),
  s("[hh hh ~ hh]*4"),
).swingBy(0.12, 8);

// 3 El groove
// 3.1 El groove es eso que pasa afuera del kick, regularmente en los high

/*
4 maneras de tocar los hats: 
| En Strudel          |
| ------------------- |
| `[~ oh]*4`          |
| `[hh oh]*4`         |
| `[hh hh ~ hh]*4`    |
| `hh*16` con acentos |
*/
```

---

## Archivo: `4. Instrumento/2. Strudel/7. House/_lessons/0. four_on_the_floor.strudel.js`

```js
// ════════════════════════════════════════════════════════════════
// Sesión 0 · Four on the floor
// Guía: 7. House/0. House desde cero.md  →  §1 y §2
// 30–40 min
//
// Objetivo  el esqueleto del house, de memoria: por tiempos y por pasos.
// Hecho     escribes el pentagrama de §2 sin mirar la guía y suena igual.
//
// Cómo      solo un PASO activo a la vez. Para pasar al siguiente, comenta
//           el anterior y descomenta el nuevo. Llena cada ____ tú.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909";
setcpm(124 / 4); // 1 ciclo = 1 compás de 4/4

/*
paso    0 1 2 3   4 5 6 7   8 9 10 11   12 13 14 15
cuenta  1 e & a   2 e & a   3 e &  a    4  e  &  a
*/

// ── PASO 1 · El corazón ─────────────────────────────────────────
// Escucha 8 compases solo el kick. Cuéntalos en voz alta.
let chords = "<C Am F Fmaj7 Em7 G G7>";
$: s("bd*8").bank(BANK).swingBy(2, 8);
$: s("[hh hh hh oh]*4").bank(BANK);
$: s("[[~ sd ~ ~] [~ sd ~ sd] [~ sd sd ~] [~ sd]]").bank(BANK);
$: s(chords).sound("gm_lead_8_bass_lead").room(0.4).roomsize(2).lpf(300).hpf(5);
$: n("[0 3 1 2 3 1 2 1]".sub(7))
  .chord(chords)
  .voicing()
  .swingBy(2, 8)
  .room(0.5)
  .roomsize(9)
  .lpf(300)
  .hpf(3)
  .sound("gm_synth_strings_2");

// ── PASO 2 · Palmas y hat abierto, por tiempos ─────────────────
// Sin mirar la guía. La rejilla que tiene que sonar:
/*
        1 e & a 2 e & a 3 e & a 4 e & a
oh      . . x . . . x . . . x . . . x .
palmas  . . . . x . . . . . . . x . . .
kick    x . . . x . . . x . . . x . . .
*/

// stack(
//   s("bd*4"),
//   s("____"),        // palmas: 2 y 4
//   s("____"),        // hat abierto: los cuatro "&"
// ).bank(BANK)

// ── PASO 3 · Los cerrados, en una sola capa ─────────────────────
// Una capa con cerrado-cerrado-ABIERTO-cerrado por tiempo, y .cut(1)
// para que el cerrado corte la cola del abierto.
// Después, 16 valores de velocity: el "&" más fuerte que el resto.

// stack(
//   s("bd*4"),
//   s("~ cp ~ cp"),
//   s("[____]*4").cut(1)
//     .velocity("[____]*4"),
// ).bank(BANK)

// Quita el .cut(1) y escucha qué pasa con el abierto. Vuelve a ponerlo.

// ── PASO 4 · Lo mismo, por pasos ────────────────────────────────
// Reescribe el PASO 3 con .beat("posiciones", 16), contando desde 0.
// Tiene que sonar idéntico: compáralo alternando los dos.

// stack(
//   s("bd").beat("____", 16),
//   s("cp").beat("____", 16),
//   s("oh").beat("____", 16),
//   s("hh").beat("____", 16),
// ).bank(BANK).cut(1)

// ── PASO 5 · El backbeat ────────────────────────────────────────
// Un compás de cada uno: palmas, caja, las dos a la vez, aro.
// Prueba también variantes de sample: sd:3, sd:9, cp:2…

// stack(
//   s("bd*4"),
//   s(cat(
//     "____",          // palmas
//     "____",          // caja
//     "____",          // palmas y caja a la vez
//     "____",          // aro
//   )),
//   s("[~ oh]*4").velocity(.7),
// ).bank(BANK)

// DECISIÓN · mi backbeat es ____ porque ____

// ── PASO 6 · La frase de 8 ──────────────────────────────────────
// Crash solo en el compás 1 de cada 8, y en el compás 8 el kick calla
// en el último tiempo. Cuenta hasta 8 y escucha cómo pega el 1.

// stack(
//   s("<____>"),                                   // crash
//   s("bd*4").lastOf(8, x => x.mask("____")),      // el hueco
//   s("~ cp ~ cp"),
//   s("[hh hh oh hh]*4").cut(1),
// ).bank(BANK)

// ── CIERRE ──────────────────────────────────────────────────────
// Tapa todo esto, abre una línea en blanco y escribe el PASO 3 de memoria.
// HECHO cuando suena igual al primer intento.
```

---

## Archivo: `4. Instrumento/2. Strudel/7. House/_lessons/1. groove.strudel.js`

```js
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
```

---

## Archivo: `4. Instrumento/2. Strudel/7. House/_lessons/2. bajo.strudel.js`

```js
// ════════════════════════════════════════════════════════════════
// Sesión 2 · El bajo
// Guía: 7. House/0. House desde cero.md  →  §4
// 40 min
//
// Objetivo  tres bajos sobre el mismo kick: contratiempo, octavas, sincopado.
// Hecho     solo kick y bajo, 16 compases, y ya hay track.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
//           La tonalidad y las raíces las eliges tú: escríbelas una vez aquí.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909"
setcpm(124 / 4)

const kick = s("bd*4").bank(BANK)
const arriba = s("~ cp ~ cp, [~ oh]*4").bank(BANK)

// MIS RAÍCES · una por compás, en octava 2 (p. ej. a2, f2…)
// const RAICES = "<____ ____ ____ ____>"

// ── PASO 1 · El kick solo ───────────────────────────────────────
// Escucha dónde están los huecos: ahí va a vivir el bajo.

stack(kick, arriba)

// ── PASO 2 · En contratiempo ────────────────────────────────────
// Tus raíces, tocadas en cada "&". El kick y el bajo nunca coinciden.
// .decay corto: que la nota se apague antes del kick siguiente.

// stack(
//   kick, arriba,
//   note(RAICES).struct("____")
//     .s("sawtooth").lpf(400).decay(____).sustain(0),
// )

// ── PASO 3 · De octavas ─────────────────────────────────────────
// Corcheas: abajo en el tiempo, una octava arriba en el "&".
// Ojo: note("a2").add(12) NO transpone. Usa .transpose().

// stack(
//   kick, arriba,
//   note(RAICES).struct("x*8").transpose("____")
//     .s("sawtooth").lpf(700).decay(.15).sustain(0),
// )

// ── PASO 4 · Sincopado ──────────────────────────────────────────
// Escribe primero la rejilla con letras de nota. Reglas:
//   · nunca en un paso donde hay kick (0, 4, 8, 12)
//   · al menos una nota en una "a" (3, 7, 11, 15) que empuje al tiempo siguiente
/*
        1 e & a 2 e & a 3 e & a 4 e & a
kick    x . . . x . . . x . . . x . . .
bajo    . . . . . . . . . . . . . . . .
*/

// stack(
//   kick, arriba,
//   note("[____] [____] [____] [____]")
//     .s("sawtooth").lpf(500).decay(.15).sustain(0),
// )

// ── PASO 5 · El sonido ──────────────────────────────────────────
// Tu línea del PASO 4 pasando por cinco sonidos, dos compases cada uno.
// sawtooth · square · gm_synth_bass_1 · gm_drawbar_organ · gm_electric_bass_finger

// const linea = note("____")
// stack(
//   kick,
//   arrange(
//     [2, linea.s("____")],
//     [2, linea.s("____")],
//     [2, linea.s("____")],
//     [2, linea.s("____")],
//     [2, linea.s("____")],
//   ),
// )

// DECISIÓN · mi bajo es ____ (contratiempo / octavas / sincopado), con sonido ____,
//            y se ____ (turna / abraza) con el kick

// ── PASO 6 · Cuerpo y sub ───────────────────────────────────────
// Tu bajo elegido, dos capas: sierra para el cuerpo y seno una octava abajo.
// Escúchalo con audífonos y comenta el sub para notar lo que falta.

// const elegido = note(RAICES).struct("____")
// stack(
//   kick,
//   elegido.s("sawtooth").lpf(600).decay(.2).sustain(0).gain(.6),
//   elegido.transpose(____).s("sine").decay(.25).sustain(0),
// )

// ── CIERRE · La prueba ──────────────────────────────────────────
// Solo kick y tu bajo, 16 compases, sin palmas ni hats.
// HECHO cuando no echas de menos nada más para mover la cabeza.
```

---

## Archivo: `4. Instrumento/2. Strudel/7. House/_lessons/3. sidechain.strudel.js`

```js
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
```

---

## Archivo: `4. Instrumento/2. Strudel/7. House/_lessons/4. acordes.strudel.js`

```js
// ════════════════════════════════════════════════════════════════
// Sesión 4 · Acordes
// Guía: 7. House/0. House desde cero.md  →  §6
// 40–45 min
//
// Objetivo  elegir UN color y UN ritmo armónico.
// Hecho     puedes decir qué color tiene tu track y cuántos compases dura cada acorde.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// Recuerda  símbolos que suenan: m7 m9 m11 9 13 ^7 ^9 6 69 7sus add9
//           Fmaj7 y Am13 dan SILENCIO sin error: escribe F^7.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909"
setcpm(122 / 4)

const bateria = s("bd*4, ~ cp ~ cp, [~ oh]*4").bank(BANK)
const teclas = x => x.voicing().s("gm_epiano1").gain(.8)

// ── PASO 1 · Un acorde ──────────────────────────────────────────

stack(bateria, teclas(chord("<Am9>")))

// ── PASO 2 · La escalera de color, sobre TU raíz ────────────────
// Misma raíz, un compás cada uno: triada, m7, m9, m11.
// Escucha el m11: Strudel le quita la tercera. ¿Flota o se pierde?

// stack(bateria, teclas(chord("<____ ____ ____ ____>")))

// DECISIÓN · mi color es ____

// ── PASO 3 · El dórico ──────────────────────────────────────────
// i9 – IV9 sobre tu raíz. El IV está una cuarta justa arriba.
// Mi raíz es ____, así que mi IV9 es ____.
// Después, la versión natural: i9 – iv9 (el iv menor). ¿Cuál es más tuya?

// stack(bateria, teclas(chord("<____ ____>")))     // dórico
// stack(bateria, teclas(chord("<____ ____>")))     // natural

// ── PASO 4 · Una progresión ─────────────────────────────────────
// Elige UNA de las seis de §6.3 (o una tuya de 1. Teoría) y llévala a tu tonalidad.
// Escribe los grados primero: ____ – ____ – ____ – ____

// stack(bateria, teclas(chord("<____>")))

// ── PASO 5 · El ritmo armónico ──────────────────────────────────
// Tu progresión con tres duraciones. `!2` repite: "<Am9!2 D9!2>".
//   a · un compás por acorde
//   b · dos compases por acorde
//   c · desigual: uno se queda más (p. ej. !3 y !1)

// stack(bateria, teclas(chord("<____>")))          // a
// stack(bateria, teclas(chord("<____>")))          // b
// stack(bateria, teclas(chord("<____>")))          // c

// DECISIÓN · cada acorde dura ____ compases porque ____

// ── PASO 6 · Memoria de acorde ──────────────────────────────────
// Congela UNA forma (las notas de tu acorde favorito, entre corchetes con comas)
// y muévela entera con .transpose(). Prueba movimientos de -2, -4, +3, +5.
// Ojo con las quintas paralelas: aquí son el punto (§6.5).

// stack(
//   bateria,
//   note("[____]")
//     .transpose("<____ ____ ____ ____>")
//     .struct("[~ ~ x ~]*4")
//     .s("sawtooth").lpf(1600).decay(.18).sustain(0).gain(.35),
// )

// ── CIERRE ──────────────────────────────────────────────────────
// Escribe aquí tu armonía final, la que vas a usar en las sesiones 5 a 8:
// const PROG = "<____>"
// HECHO cuando suena 16 compases sobre la batería y no quieres cambiarle nada.
```

---

## Archivo: `4. Instrumento/2. Strudel/7. House/_lessons/5. ganchos.strudel.js`

```js
// ════════════════════════════════════════════════════════════════
// Sesión 5 · Ganchos: stabs, empujón, piano, riff, arpegio
// Guía: 7. House/0. House desde cero.md  →  §7 y §8
// 45 min
//
// Objetivo  probar cinco ganchos y quedarte con UNO.
// Hecho     tienes un solo gancho y puedes tararearlo sin la máquina.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// ════════════════════════════════════════════════════════════════

const BANK = "RolandTR909"
setcpm(124 / 4)

const PROG = "<Am9 D9>"     // ← tu armonía de la sesión 4
const bateria = s("bd*4, ~ cp ~ cp, [~ oh]*4").bank(BANK)

// ── PASO 1 · La armonía, quieta ─────────────────────────────────

stack(bateria, chord(PROG).voicing().s("gm_epiano1").gain(.7))

// ── PASO 2 · Cuatro ritmos de stab, y uno tuyo ─────────────────
// Desde la rejilla (sin mirar el bloque de la guía), un compás de cada uno:
/*
                1 e & a 2 e & a 3 e & a 4 e & a
contratiempo    . . x . . . x . . . x . . . x .
charleston      x . . . . . x . . . . . . . . .
tresillo doble  x . . x . . x . x . . x . . x .
deep            . . . x . . x . . . . x . . x .
el mío          . . . . . . . . . . . . . . . .
*/

// stack(
//   bateria,
//   chord(PROG)
//     .struct(cat("____", "____", "____", "____", "____"))
//     .voicing().s("sawtooth").lpf(1800).decay(.15).sustain(0).gain(.4).room(.3),
// )

// ── PASO 3 · El empujón ─────────────────────────────────────────
// Tu ritmo de stab favorito, con la armonía adelantada una corchea.
// .early() va ANTES de .struct(): se adelanta la armonía, no el ritmo.
// ¿Hay un golpe en el "&" del 4? Si no, el empujón no se oye: añádelo.

// stack(
//   bateria,
//   chord(PROG).early(____).struct("____")
//     .voicing().s("piano"),
// )

// ── PASO 4 · Piano house ────────────────────────────────────────
// El ritmo 3+3+4+3+3 con pesos (@). Luego inventa otro reparto de 16:
// 4+3+3+3+3, 3+3+3+3+4…  ¿cuál baila más?

// stack(
//   bateria,
//   chord(PROG).struct("____").voicing().s("piano").gain(.9),
// )

// ── PASO 5 · Un riff de dos compases ────────────────────────────
// Pregunta y respuesta. Reglas:
//   · la pregunta termina FUERA de la tónica
//   · la respuesta termina EN la tónica (grado 0)
//   · grados de la escala, desde 0; la escala la eliges tú
// Primero en papel o en MuseScore, luego aquí.

// stack(
//   bateria,
//   n(cat(
//     "____",       // pregunta
//     "____",       // respuesta
//   ))
//     .scale("____")
//     .s("square").lpf(2500).decay(.2).sustain(0).gain(.5)
//     .delay(.3).delayfeedback(.4),
// )

// ── PASO 6 · Un arpegio sin raíz ────────────────────────────────
// Índices del voicing, de grave a agudo; el 0 es la raíz y no se toca.
// (El espacio en `.arp (` es a propósito: así el script de arpegiadores
//  no convierte esta lección en un preset de Sonar.)

// stack(
//   bateria,
//   chord(PROG).voicing()
//     .arp ("____")
//     .s("square").lpf(2200).decay(.12).sustain(0).gain(.4).delay(.25),
// )

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · mi gancho es ____ (stab / empujón / piano / riff / arpegio)
//            con sonido ____, y los otros cuatro se van.
// Escríbelo como constante para las sesiones 6 a 8:
// const gancho = ____
// HECHO cuando lo tarareas sin la máquina.
```

---

## Archivo: `4. Instrumento/2. Strudel/7. House/_lessons/6. filtros.strudel.js`

```js
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
```

---

## Archivo: `4. Instrumento/2. Strudel/7. House/_lessons/7. build_y_drop.strudel.js`

```js
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
```

---

## Archivo: `4. Instrumento/2. Strudel/7. House/_lessons/8. track.strudel.js`

```js
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
```

---

## Archivo: `4. Instrumento/2. Strudel/8. Dream pop/_lessons/0. tempo_y_caja.strudel.js`

```js
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

setcpm(66 / 4) // 12/8 a 66 negras con punto: 1 ciclo = 1 compás

// ── PASO 1 · Slow rock ──────────────────────────────────────────
// El preset de balada en 12/8. Escúchalo 8 compases y mécete con él.

stack(
  s("bd ~ bd ~"),
  s("~ sd ~ sd"),
  s("hh*12").velocity("[.6 .3 .4]*4"),
).bank("KorgMinipops")

// ── PASO 2 · Tempo medido, tempo sentido ────────────────────────
// Elige una canción de dream pop que te guste. Da palmas con ella.
//   BPM que dice internet: ____      BPM que siente tu cuerpo: ____
//   ¿La caja cae una vez por compás (half-time) o dos?  ____
// Escribe su esqueleto con el tempo SENTIDO:

// setcpm(____ / 4)
// stack(
//   s("____"),        // kick
//   s("____"),        // caja
//   s("____"),        // hats
// ).bank("KorgMinipops")

// ── PASO 3 · De a dos o de a tres ───────────────────────────────
// El mismo acorde con 8 corcheas por compás y luego con 12.
// El kick y la caja no cambian: solo cuántas notas caben en cada pulso.

// stack(
//   s("bd ~ sd ~").bank("KorgMinipops"),
//   chord("<D^7>").voicing()
//     .struct("<[____] [____]>")
//     .s("organ_full").gain(.5),
// )

// ── PASO 4 · Tres presets, sin mirar la guía ───────────────────
// Vals en 3/4: kick en el 1, caja suave en 2 y 3, hats en corcheas.

// setcpm(84 / 3)
// stack(s("____"), s("____").velocity(.5), s("____")).bank("RolandCompurhythm78")

// Bossa nova, por pasos. Desde esta rejilla:
/*
        1 e & a 2 e & a 3 e & a 4 e & a
aro     x . . x . . x . . . x . . x . .
hh      x . x . x . x . x . x . x . x .
kick    x . . . . . x . x . . . . . x .
*/

// setcpm(76 / 4)
// stack(
//   s("bd").beat("____", 16),
//   s("rim").beat("____", 16).velocity(.6),
//   s("hh*8").velocity("[.5 .25]*4"),
// ).bank("KorgKR55")

// Rock lento half-time: kick en el 1 (y una "a" del 3 si quieres), caja solo en el 3.

// setcpm(74 / 4)
// stack(s("____"), s("____").velocity(.7), s("hh*8").velocity("[.4 .15]*4")).bank("RhythmAce")

// ── PASO 5 · El mismo preset, cuatro cajas ──────────────────────
// Tu preset favorito de los anteriores, dos compases por caja.
// KorgMinipops · RolandCompurhythm78 · RhythmAce · UnivoxMicroRhythmer12 · CasioVL1

// const preset = stack(s("____"), s("____"), s("____"))
// arrange(
//   [2, preset.bank("____")],
//   [2, preset.bank("____")],
//   [2, preset.bank("____")],
//   [2, preset.bank("____")],
// )

// ── PASO 6 · Mazas y platos ─────────────────────────────────────
// Batería "real" de dream pop, sin banco: tom_mallet, snare_modern lejos,
// tambourine, y un gm_reverse_cymbal en el compás 4 que crezca hacia el 1.

// setcpm(70 / 4)
// stack(
//   s("____").velocity(.7).room(.5),
//   s("____").velocity(.4).room(.8).roomsize(8),
//   s("____"),
//   s("<~ ~ ~ ____>").gain(.6),
// )

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · para ____ (una pieza tuya) elijo el preset ____ con la caja ____,
//            a ____ BPM sentidos, de a ____ (dos / tres)
// HECHO cuando la pieza en tu cabeza "cabe" en ese reloj sin forzarla.
```

---

## Archivo: `4. Instrumento/2. Strudel/8. Dream pop/_lessons/1. organo.strudel.js`

```js
// ════════════════════════════════════════════════════════════════
// Sesión 1 · El órgano: colchón y latido
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §3
// 30–40 min
//
// Objetivo  un órgano que tiembla sin marear, y decidir qué trabajo hace.
// Hecho     el órgano tiembla como uno viejo y no te mareas en 16 compases.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// Recuerda  el vibrato funciona en sintes y samples (organ_full, square…),
//           no está garantizado en los gm_*.
// ════════════════════════════════════════════════════════════════

setcpm(70 / 4)

const PROG = "<D^7 G^7>"          // ← cámbiala por la tuya cuando quieras
const caja = s("bd ~ ~ ~, ~ ~ sd ~").bank("KorgMinipops")

// ── PASO 1 · El colchón, quieto ─────────────────────────────────

chord(PROG).voicing().s("organ_full").attack(.15).release(.8).gain(.6)

// ── PASO 2 · La escalera de vibrato ─────────────────────────────
// Cuatro profundidades, una por compás. La última es la de serie (.5).
// ¿Cuál suena a órgano viejo? ¿Cuál a barco?

// chord(PROG).voicing().s("organ_full").attack(.15).release(.8).gain(.6)
//   .vib(5).vibmod("<.03 .08 .15 .5>")

// DECISIÓN · mi vibmod es ____ y mi vib es ____ Hz

// ── PASO 3 · Más trémolo ────────────────────────────────────────
// El volumen también tiembla. Prueba tremolodepth de .1 a .6.

// chord(PROG).voicing().s("organ_full").gain(.6)
//   .vib(____).vibmod(____)
//   .tremolo(____).tremolodepth(____)

// ── PASO 4 · El latido ──────────────────────────────────────────
// El acorde repetido en corcheas, con el tiempo más fuerte que el "&".
// Escríbelo primero en 4/4 (8 golpes) y después en 12/8 (12 golpes, de tres en tres).

// stack(
//   caja,
//   chord(PROG).voicing()
//     .struct("____")
//     .velocity("[____]*4")
//     .s("organ_8inch").decay(.25).sustain(.3)
//     .vib(5).vibmod(.06),
// )

// Ahora quita la caja. ¿El latido sostiene el pulso solo? ____

// ── PASO 5 · Cinco teclados baratos ─────────────────────────────
// Dos compases cada uno. Para cada uno, una palabra.
// organ_full · pipeorgan_quiet · gm_reed_organ · square (con lpf y vib) · gm_synth_strings_2 · piano1

// const acordes = chord(PROG).voicing().attack(.1).release(1)
// arrange(
//   [2, acordes.s("____")],          // ____
//   [2, acordes.s("____")],          // ____
//   [2, acordes.s("____")],          // ____
//   [2, acordes.s("____")],          // ____
//   [2, acordes.s("____")],          // ____
// )

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · mi órgano es ____, hace de ____ (colchón / latido),
//            con vib ____ y vibmod ____
// HECHO cuando lo escuchas 16 compases y suena viejo, no mareado.
```

---

## Archivo: `4. Instrumento/2. Strudel/8. Dream pop/_lessons/2. armonia.strudel.js`

```js
// ════════════════════════════════════════════════════════════════
// Sesión 2 · Armonía: luz difusa
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §4
// 40–45 min
//
// Objetivo  tres decisiones: un color, una sombra y un suelo.
// Hecho     tienes una progresión con su color, su préstamo y su bajo, y te gusta.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// Recuerda  D^7, no Dmaj7 (silencio). Nada de barras: G/D rompe el bloque.
//           Strudel escribe en bemoles: Gb = F#, Db = C#.
// ════════════════════════════════════════════════════════════════

setcpm(66 / 4)

const caja = s("bd ~ ~ ~, ~ ~ sd ~").bank("KorgMinipops")
const organo = x => x.voicing().s("organ_full").vib(5).vibmod(.06).gain(.6)

// MI TONALIDAD · ____ mayor. Mi I es ____, mi IV es ____, mi iv prestado es ____.

// ── PASO 1 · Un acorde ──────────────────────────────────────────

stack(caja, organo(chord("<D^7>")))

// ── PASO 2 · Una nota de color, sobre TU I ─────────────────────
// Triada, sexta, novena añadida, séptima mayor. Un compás cada uno.

// stack(caja, organo(chord("<____ ____ ____ ____>")))

// DECISIÓN · mi color es ____ (la nota que define mi sonido: 6.ª, 9.ª, 7.ª mayor)

// ── PASO 3 · La sombra ──────────────────────────────────────────
// I – IV – iv – I en tu tonalidad. ¿Qué nota baja medio tono del IV al iv? ____
// Después prueba ♭VI^7 y ♭VII en lugar del iv. ¿Cuál "recuerda" más?

// stack(caja, organo(chord("<____ ____ ____ ____>")))

// ── PASO 4 · La línea que baja por dentro ───────────────────────
// Un acorde que no cambia; una voz interior baja por semitonos: raíz, 7.ª mayor,
// 7.ª menor, 6.ª. Escribe las notas a mano (chord() elegiría otros voicings).

// note("<[____] [____] [____] [____]>")
//   .s("organ_full").vib(5).vibmod(.06).attack(.1).release(.8).room(.6)

// La versión menor: raíz menor, menor con 7.ª mayor, con 7.ª, con 6.ª.
// note("<[____] [____] [____] [____]>").s("organ_full").room(.6)

// ── PASO 5 · El suelo ───────────────────────────────────────────
// a · pedal: tu raíz en el bajo, los acordes cambiando encima
// b · bajo que baja: los acordes en una capa, el bajo por grados en otra

// stack(
//   organo(chord("<____>")),
//   note("____").s("sawtooth").lpf(300).gain(.8),                    // a · pedal
// )

// stack(
//   organo(chord("<____ ____ ____ ____ ____ ____ ____ ____>")),
//   note("<____ ____ ____ ____ ____ ____ ____ ____>")                 // b · baja por grados
//     .s("sawtooth").lpf(400).attack(.05).release(.5),
// )

// ── PASO 6 · Tu progresión y su ritmo armónico ──────────────────
// Elige una de la tabla de §4.5 (o una tuya) y llévala a tu tonalidad.
// Pruébala con un compás por acorde y con dos (!2).

// stack(caja, organo(chord("<____>")))

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · color ____ · sombra ____ (en el compás ____) · suelo ____
// Escríbela aquí para las sesiones siguientes:
// const PROG = "<____>"
// HECHO cuando suena 16 compases y no quieres cambiarle nada.
```

---

## Archivo: `4. Instrumento/2. Strudel/8. Dream pop/_lessons/3. bajo_y_guitarra.strudel.js`

```js
// ════════════════════════════════════════════════════════════════
// Sesión 3 · El bajo y la guitarra que no suena a guitarra
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §5 y §6
// 45 min
//
// Objetivo  un bajo que ancla y una guitarra con UNA firma: eco, slide,
//           trémolo o chorus.
// Hecho     alguien que lo escucha no está seguro de que sea una guitarra.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// ════════════════════════════════════════════════════════════════

setcpm(70 / 4)

const PROG = "<D^7 Bm7 G^7 A7sus>"     // ← tu progresión de la sesión 2
const organo = chord(PROG).voicing().s("organ_full").vib(5).vibmod(.06).gain(.45)
const bajo = x => x.s("sawtooth").lpf(350).attack(.03).release(.4).gain(.8)

// ── PASO 1 · El órgano solo ─────────────────────────────────────

organo

// ── PASO 2 · Cuatro bajos ───────────────────────────────────────
// Cuatro compases cada uno, bajo tu progresión:
//   raíz larga · con paso (la última negra camina a la raíz siguiente)
//   pedal · latido (corcheas)

// stack(
//   organo,
//   arrange(
//     [4, bajo(note("<____>"))],                           // raíz larga
//     [4, bajo(note("<____>"))],                           // con paso: [x@3 y]
//     [4, bajo(note("____"))],                              // pedal
//     [4, bajo(note("<____>").struct("x*8")).decay(.2).sustain(.4)],   // latido
//   ),
// )

// DECISIÓN · mi bajo es ____ con sonido ____ (sawtooth / pulse / triangle / sine)

// ── PASO 3 · El arpegio con eco ─────────────────────────────────
// Índices del voicing, sin el 0 (la raíz es del bajo). Eco en corchea con punto.
// (El espacio en `.arp (` es a propósito: así el script de arpegiadores no
//  convierte esta lección en un preset de Sonar.)

// stack(
//   organo,
//   chord(PROG).voicing()
//     .arp ("____")
//     .s("gm_electric_guitar_clean")
//     .delay(.45).delaysync(3 / 16).delayfeedback(____)
//     .room(.5),
// )

// ── PASO 4 · El slide ───────────────────────────────────────────
// Una línea de dos compases, notas largas. Cada nota llega desde abajo.
// Prueba penv 1, 2 y 3, y pattack .05, .12 y .3. ¿Cuándo empieza a sonar a sirena?

// stack(
//   organo,
//   note("<[____] [____]>")
//     .s("triangle").lpf(1800)
//     .penv(____).pattack(____)
//     .vib(5).vibmod(.12)
//     .attack(.05).release(.6)
//     .delay(.3).delaysync(1 / 4).delayfeedback(.4)
//     .room(.7),
// )

// ── PASO 5 · El trémolo ─────────────────────────────────────────
// El acorde sostenido, con el volumen latiendo. ¿Cuántos pulsos por compás?

// chord(PROG).voicing().s("gm_electric_guitar_clean").gain(.8)
//   .tremolosync(____).tremolodepth(____).room(.6)

// ── PASO 6 · El chorus ──────────────────────────────────────────
// Tu arpegio del PASO 3, dos veces: una un poco más grave a la izquierda,
// otra un poco más aguda a la derecha. ¿Cuánto desafinar? Prueba .03, .07, .15.

// const linea = chord(PROG).voicing().arp ("____")
//   .s("triangle").lpf(2000).decay(.4).sustain(0).gain(.6)
// stack(
//   linea.add(note(____)).pan(.2),
//   linea.add(note(____)).pan(.8),
// )

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · la guitarra ____ (arpegia / canta), y su firma es ____
//            (eco / slide / trémolo / chorus). Solo una.
// HECHO cuando, sin decir qué es, alguien duda de que sea una guitarra.
```

---

## Archivo: `4. Instrumento/2. Strudel/8. Dream pop/_lessons/4. voz.strudel.js`

```js
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
```

---

## Archivo: `4. Instrumento/2. Strudel/8. Dream pop/_lessons/5. espacio.strudel.js`

```js
// ════════════════════════════════════════════════════════════════
// Sesión 5 · El espacio
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §8
// 40 min
//
// Objetivo  poner cada capa a su distancia.
// Hecho     con los ojos cerrados puedes decir qué está cerca y qué lejos.
//
// Cómo      solo un PASO activo a la vez. Llena cada ____ tú.
// Recuerda  la sala es del orbit: dos espacios distintos, dos orbits.
//           roomsize, roomfade, roomlp y roomdim: fíjalos, no los cambies en cada nota.
// ════════════════════════════════════════════════════════════════

setcpm(66 / 4)

const PROG = "<D^7 G^7>"                // ← tu progresión
const organo = chord(PROG).voicing().s("organ_full").vib(5).vibmod(.06).gain(.6)

// ── PASO 1 · Seco ───────────────────────────────────────────────

organo

// ── PASO 2 · Cuatro salas ───────────────────────────────────────
// Habitación, sala, catedral… y una tuya. Dos compases cada una.

// arrange(
//   [2, organo.room(____).roomsize(____)],
//   [2, organo.room(____).roomsize(____)],
//   [2, organo.room(____).roomsize(____).roomfade(____)],
//   [2, organo.room(____).roomsize(____).roomfade(____)],
// )

// ── PASO 3 · Una reverb oscura ──────────────────────────────────
// La misma catedral, con la cola cada vez más oscura. ¿Cuál ensucia menos?

// arrange(
//   [2, organo.room(.9).roomsize(10).roomfade(8)],
//   [2, organo.room(.9).roomsize(10).roomfade(8).roomlp(____).roomdim(____)],
//   [2, organo.room(.9).roomsize(10).roomfade(8).roomlp(____).roomdim(____)],
// )

// ── PASO 4 · Dos salas, dos orbits ──────────────────────────────
// La voz en una habitación (orbit 1), el órgano en una catedral (orbit 2).
// Después pon los dos en el mismo orbit y escucha qué se pierde.

// stack(
//   organo.room(.9).roomsize(10).roomfade(8).orbit(____),
//   note("<[a4 f#4] [e4 c#4@3]>").s("gm_voice_oohs").room(____).roomsize(____),
// )

// ── PASO 5 · La cinta ───────────────────────────────────────────
// Wow (vib lento y poquito), menos brillo, polvo. De a una herramienta.

// stack(
//   s("[bd ~ ~ ~] ~ [bd ~ ~ bd] ~, ~ ~ sd ~, hh*8").bank("KorgMinipops")
//     .speed(____).velocity(.6),
//   chord(PROG).voicing().s("piano1").vib(____).vibmod(____),
// ).lpf(____).crush(____)

// ── PASO 6 · Las cuatro distancias ──────────────────────────────
// Primero la tabla, después el código: una capa en cada distancia.
/*
distancia   capa          room   roomsize   lpf    gain   orbit
cerca       ____          ____   ____       ____   ____   ____
medio       ____          ____   ____       ____   ____   ____
lejos       ____          ____   ____       ____   ____   ____
muy lejos   ____          ____   ____       ____   ____   ____
*/

// stack(
//   ____,
//   ____,
//   ____,
//   ____,
// )

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · mi sala principal es ____ (roomsize ____, roomfade ____),
//            y lo único que se queda seco es ____
// HECHO cuando con los ojos cerrados aciertas las cuatro distancias.
```

---

## Archivo: `4. Instrumento/2. Strudel/8. Dream pop/_lessons/6. textura.strudel.js`

```js
// ════════════════════════════════════════════════════════════════
// Sesión 6 · Textura: suelo, motor, colchón, línea y luz
// Guía: 8. Dream pop/0. Dream pop desde cero.md  →  §9
// 40 min
//
// Objetivo  cinco capas, cada una con un trabajo y un registro.
// Hecho     no hay dos capas haciendo el mismo trabajo en el mismo registro.
//
// Cómo      primero la tabla, después el código, una capa a la vez.
// ════════════════════════════════════════════════════════════════

setcpm(66 / 4)

const PROG = "<D^7 G^7>"                 // ← tu progresión

// ── PASO 1 · La tabla ───────────────────────────────────────────
// Un solo instrumento por fila. Usa lo que decidiste en las sesiones 0–5.
/*
capa       registro      instrumento        de la sesión
SUELO      grave         ____               0 (caja) · 3 (bajo)
MOTOR      medio-grave   ____               1 (latido) · 3 (arpegio)
COLCHÓN    medio         ____               1 (órgano) · 2
LÍNEA      medio-agudo   ____               3 (slide) · 4 (voz)
LUZ        agudo         ____               esta sesión
*/

// ── PASO 2 · El suelo ───────────────────────────────────────────

const suelo = stack(
  s("[bd ~ ~ ~] ~ [bd ~ ~ bd] ~").bank("KorgMinipops"),   // ← tu preset
  chord(PROG).rootNotes(2).s("sawtooth").lpf(300).gain(.7),  // ← tu bajo
)

suelo

// ── PASO 3 · Suma una capa cada 8 compases ──────────────────────
// Descomenta de a una y escucha 8 compases antes de la siguiente.
// Cada capa con la distancia que decidiste en la sesión 5.

// const colchon = ____
// const motor   = ____
// const linea   = ____
// stack(suelo, colchon)
// stack(suelo, colchon, motor)
// stack(suelo, colchon, motor, linea)

// ── PASO 4 · La luz y el aire ───────────────────────────────────
// Unas pocas notas de campana que aparecen al azar, y un ruido de afuera muy bajo.
// Sonidos: vibraphone · glockenspiel · gm_celesta · gm_music_box · gm_guitar_harmonics
// Aire: wind · insect · crow · gm_seashore · oceandrum

// const luz = n("____").scale("____").degradeBy(____)
//   .s("____").gain(.35).room(.9).orbit(2)
// const aire = s("____").lpf(1200).gain(.15).orbit(2)
// stack(suelo, colchon, motor, linea, luz, aire)

// ── PASO 5 · Quitar ─────────────────────────────────────────────
// Con todo sonando, quita una capa cada vez (coméntala). Para cada una:
//   ¿se nota que falta?  suelo ____ · motor ____ · colchón ____ · línea ____ · luz ____
// La que no se nota, sobra. Quítala de verdad.

// ── CIERRE ──────────────────────────────────────────────────────
// DECISIÓN · mi textura final es ____ capas: ____
//            y la capa que guardo para la coda (sesión 7) es ____
// HECHO cuando cada capa se nota al quitarla.
```

---

## Archivo: `4. Instrumento/2. Strudel/8. Dream pop/_lessons/7. cancion.strudel.js`

```js
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
```
