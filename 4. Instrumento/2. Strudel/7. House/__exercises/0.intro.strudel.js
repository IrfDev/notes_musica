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
