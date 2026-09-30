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
