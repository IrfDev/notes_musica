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
