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

let kick = sound("bd ~ [bd ~] ~")
  .lastOf(4, (x) => x.mask("1 1 0 0"))
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
  .swingBy(0.2, 8)
  .velocity(rand.range(0.5, 0.6));

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
  .velocity(rand.range(0.1, 0.8))
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
