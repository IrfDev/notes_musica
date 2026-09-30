const BPM = 40;

setcpm(BPM);

stack(
  s("bd ~ bd bd"), // kick en 1 y 3
  s("~ sd ~ sd"), // caja en 2 y 4
  s("hh*6"), // hi-hat en corcheas
).bank("RolandTR909");
