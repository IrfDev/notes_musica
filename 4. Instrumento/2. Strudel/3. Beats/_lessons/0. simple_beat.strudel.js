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
