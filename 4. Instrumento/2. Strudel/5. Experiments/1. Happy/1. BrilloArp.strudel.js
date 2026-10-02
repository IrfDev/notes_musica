setcpm(100 / 4);
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
  "<[B2,D2] [B2,F2] [D2, A1] [D2,Bb2] [G2,B2] [G2,D2] [F3, C2] [C2, E3]>",
)
  .velocity(0.5)
  .lpf(500)
  .lpq(3)
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
