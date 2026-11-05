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

// El método beat te deja asignar ataques (1er arg) en un pulso, en un conteo determinado (segundo arg)

// stack(
//   // Kick
//   s("bd").beat("0, 4, 8, 12, 16", 16),
//   // Box
//   s("sd").beat("2, 6, 10, 14", 16),
// //Open hat en la tercera semicorchea de cada pulso
// s("oh".beat("2, 6, 10, 14", 16)),
// claps en pulso 2 y 3
// s("cp").beat("4, 12",16),
// Groovie en puslos aleatorios
// s("rim").beat("0,3, 6, 10, 12",16)
// )
// ).bank("RolandTr909");

// El house se divide en bloques de 8 compases, en los cuales algo tiene que cambiar
// En el último compás se agrega un silencio o algo y en el nuevo es el fill, es decir en
// el compás 1 del nuevo ciclo

// stack(
//   // Kick
//   // Mask quita
//   s("<bd*4>").lastOf(8, (x) => x.mask("1 1 1 0")),
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

// stack(
//   // KIck
//   s("bd:2*4"),

//   // Box
//   s("~ [sd,cp] ~ [sd,cp]"),
//   // Box normal
//   s("~ [~ sd ~ sd] ~ [~ ~ ~ sd]"),
//   // Aro
//   s("~ [~ rim rim ~] ~ [~ rim ~ rim]"),
//   s("[hh hh ~ hh]*4"),
// ).swingBy(0.12, 8);

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

// let battery = stack(
//   s("bd*4"),
//   s(`<
//     [[~ cp cp cp] [~ cp] [~ cp] cp]
//   >`),
//   s(`<
//     [[sd ~ sd ~] [sd ~ ~ sd] [sd ~ sd ~] [sd ~ ~ sd]]
//   >`),
//   s(`<
//     [~ ~ [oh ~ hh ~] [oh oh hh ~]]
//     [~ ~ [oh hh hh ~] ~]
//   >`),
// ).bank(BANK);

// // Synth bass
// let chords = "<C Em G7 C C7 F F7 Bb Db Dm Dm7 Gm G7>";
// // let chords = "<C Am F F7 Em7 G G7>";

// stack(
//   n("[0]".sub(7))
//     .chord(chords)
//     .voicing()
//     .sound("gm_synth_bass_2")
//     .lpf(300)
//     .hpf(8)
//     .velocity(0.4),
//   n("<[0 3 1 3 2 1]>")
//     .fast(2)
//     .chord(chords)
//     .voicing()
//     .sound("gm_synth_strings_1")
//     .lpf(600)
//     .hpf(5)
//     .velocity(0.5),
//   battery,
// );
