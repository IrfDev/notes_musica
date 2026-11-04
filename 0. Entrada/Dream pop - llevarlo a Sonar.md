---
tipo: guia-ai
estado: borrador
area: 8. Setup
tags:
  - dream-pop
---

# Dream pop: llevarlo a Sonar

> [!info] De dónde sale y adónde va
> Era el §13 de [[4. Instrumento/2. Strudel/8. Dream pop/0. Dream pop desde cero|Dream pop desde cero]].
> El 2026-11-04 esa guía quedó **solo para Strudel**, y esto salió de ahí sin cambios, junto con dos
> líneas sueltas de la guía que también eran de montaje (al final).
>
> Es material para la **guía de montaje para improvisar dream pop con equipo**, que todavía no existe.
> Cuando exista, esto se mueve ahí (o a `_legacy/`, si la guía nueva lo reemplaza). Hasta entonces se
> queda en la entrada: todavía no se sabe dónde va.

## Llevarlo a Sonar

En Obsidian todo suena con los samples del plugin. En el estudio, Strudel manda
**notas** por MIDI y el sonido lo pone Analog Lab ([[4. Instrumento/2. Strudel/README|README]]).

Un dato útil: el análisis de Reverb Machine recrea los sonidos de Beach House con
instrumentos de Arturia (Solina, Prophet, Mini, un órgano B3), y varios de esos
instrumentos son los que hay detrás de tus presets:

| Capa | En el motor local | Pista | Presets sugeridos |
|---|---|---|---|
| bajo | `.midichan(2).midi(OUT)` | `STR - Bass` | *Fret Bass* o *Club Sub* (Mini V3) · *Mello Bass* ([[8. Setup/4. Presets/Analog Lab V/4. Bajo\|Bajo]]) |
| órgano, cuerdas | `.midichan(3).midi(OUT)` | `STR - Pad` | *Dirt Road* (VOX Continental) · *Cheap But So Good* (Farfisa) · *Air String 1* (Solina) · *Dream Strings* (Mellotron) ([[8. Setup/4. Presets/Analog Lab V/2. Teclas\|Teclas]], [[8. Setup/4. Presets/Analog Lab V/3. Pads\|Pads]]) |
| arpegio, latido | `.midichan(4).midi(OUT)` | `STR - Arp` | *PW Pluck* (pulso fino) · *Lofi Bells* · *Music Box* ([[8. Setup/4. Presets/Analog Lab V/5. Arpegios\|Arpegios]]) |
| slide, línea | la tocas en el KeyStep | `HUM - Lead` | *Lonely Lead* · *Resonant String* · *Kit Lead 2* (Solina) ([[8. Setup/4. Presets/Analog Lab V/7. Leads\|Leads]]) |
| batería | no se manda: la tocas | Batería, SMC-PAD canal 10 | *Beat Maker In The Air*: caja de los 70, suave ([[8. Setup/4. Presets/Analog Lab V/1. Beat Maker\|Beat Maker]]) |
| textura, luz | con *Latch* o *Hold* | ver [[8. Setup/5. Áreas/3. Atmósferas\|Atmósferas]] | *Moon* · *Longtemps* · *I Am a Replicant* ([[8. Setup/4. Presets/Analog Lab V/8. Texturas\|Texturas]]) |

```js
// en 1. Acompañamientos/, para el motor local
setcpm(70/4)

$: chord("<D^7 Bm7 G^7 A7sus>").rootNotes(2)
  .midichan(2).midi(OUT)                       // STR - Bass

$: chord("<D^7 Bm7 G^7 A7sus>").voicing()
  .midichan(3).midi(OUT)                       // STR - Pad: el colchón

$: chord("<D^7 Bm7 G^7 A7sus>").voicing().struct("x*8")
  .velocity("[.6 .35]*4")
  .midichan(4).midi(OUT)                       // STR - Arp: el latido
```

> [!warning] Lo que no viaja por MIDI
> - **La reverb, el eco y la cinta** (`.room`, `.delay`, `.crush`, `.lpf`) se quedan en
>   Strudel. En Sonar son los efectos del preset (perillas A 6 y 7 del SMC-PAD, como en
>   Atmósferas) o de la pista.
> - **El vibrato y el slide** (`.vib`, `.penv`) tampoco: en Analog Lab el vibrato es
>   del preset (la rueda o la macro *Movement*), y el slide lo haces tocando, con la
>   tira de *pitch bend* del KeyStep.
> - **La batería desde Strudel** sigue sin estar montada (ver House §14): se toca con el pad.
> - `.velocity()` **sí** viaja: el latido llega con sus acentos.

## Lo demás que salió de la guía

- De *Dónde va lo que hagas*: un acompañamiento para el motor local va a
  `4. Instrumento/2. Strudel/1. Acompañamientos/`.
- De los enlaces, *El estudio*: [[8. Setup/5. Áreas/3. Atmósferas|Atmósferas]] ·
  [[8. Setup/5. Áreas/4. Jam con Strudel|Jam con Strudel]] · [[8. Setup/1. Software/0. Cakewalk Sonar]]
- De §7.4 y de la sesión `_lessons/4. voz.strudel.js`: la voz se graba en Sonar (pista `HUM - Lead` o una
  de audio) y se le sube la reverb hasta que deje de ser *tu* voz y sea *una* voz.
