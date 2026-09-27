// Prueba de la Fase 2: Strudel → loopMIDI → Sonar → Analog Lab.
// Si suena en la pista STR - Bass (canal 2), el puente funciona.
// No es música: es un cable de prueba.

setcpm(90 / 4)

$: note("d2 a2 c3 a2")
  .midichan(2)
  .midi(OUT)
