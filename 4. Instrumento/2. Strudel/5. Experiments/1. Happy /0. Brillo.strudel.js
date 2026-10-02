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
  .sound("piano");

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
