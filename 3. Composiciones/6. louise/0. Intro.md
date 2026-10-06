---
tipo: composicion
estado: boceto
inicio: 2026-10-02
cierre:
instrumento: Strudel — piano, guitarra nylon, batería AkaiLinn
tonalidad: Re mayor
metrica: 3/4
tempo: 160
definicion_terminado:
referencias:
conceptos:
  - "[[2. Composición binaria — contraste, intro y puente]]"
  - "[[0. Enlaces 2.0 y motivos]]"
ultimo_audio:
tags:
  - curso-musica/obra
---

# Louise

> [!important] Antes de la primera nota
> `definicion_terminado` está vacío a propósito: lo escribes tú, en la sesión 0.
> "Que quede bien" no es una definición. "90 s, forma AABA, una toma limpia exportada" sí.

## Cronograma

Dos semanas, ocho sesiones. Los pasos de cada sesión y lo que se registra están en la nota de su
semana, en la bitácora.

| Semana                                                       | Fecha      | Sesión              | Objetivo                               | Hecho cuando                               | ✓     |
| ------------------------------------------------------------ | ---------- | ------------------- | -------------------------------------- | ------------------------------------------ | ----- |
| [[2026-10-05 - Semana 02 - Louise, del loop a la forma\|02]] | lun 5 oct  | 0 · Definición      | escribir `definicion_terminado`        | el campo está lleno y hay audio de partida | [ X ] |
|                                                              | mar 6 oct  | 1 · Limpiar         | decidir las cuatro dudas               | 4 líneas en `## Decisiones` y un audio     | [ ]   |
|                                                              | jue 8 oct  | 2 · Motivo          | el motivo en los compases de respuesta | 1–2 versiones elegidas y un audio          | [ ]   |
|                                                              | sáb 10 oct | 3 · Forma en papel  | la tabla de secciones                  | tabla llena, sin código                    | [ ]   |
|                                                              | dom 11 oct | Revisión            | revisión semanal                       | la revisión de la semana está llena        | [ ]   |
| [[2026-10-12 - Semana 03 - Louise, forma y cierre\|03]]      | lun 12 oct | 4 · Forma en código | la tabla en `arrange()`                | **primer audio de la pieza entera**        | [ ]   |
|                                                              | mar 13 oct | 5 · Escucha en frío | rúbrica, 24 h después                  | rúbrica llena y una prioridad elegida      | [ ]   |
|                                                              | jue 15 oct | 6 · Revisión        | la prioridad y dos detalles            | un audio revisado                          | [ ]   |
|                                                              | sáb 17 oct | 7 · Cierre          | exportar y cerrar                      | se cumple `definicion_terminado`           | [ ]   |
|                                                              | dom 18 oct | Revisión            | revisión semanal y retrospectiva       | `estado: cerrada` o la causa escrita       | [ ]   |

> [!info] Cómo se usa
> 1. **Antes de cada sesión:** abre la nota de la semana y lee solo la sesión del día.
> 2. **Durante:** marca los pasos. No hagas los de otra sesión.
> 3. **Al terminar:** llena *Registro*, graba el audio en `render/` (con la fecha delante) y pasa
>    la decisión del día a `## Decisiones`. Marca ✓ en esta tabla.
> 4. **El domingo:** haz la revisión semanal en la misma nota de la semana y actualiza
>    *Último audio* en [[Inicio]].
> 5. **Si se pierde un día:** la sesión pasa al siguiente día libre y las demás se corren. No se
>    recupera con un maratón.

## Origen

- Nació en Strudel, sin partitura. El esqueleto es `3. wddl.strudel.js` (2 oct): vals con el bajo
  en el 1 y el acorde en el 2 y el 3, armado con grados (`RAIZ.add(voicing)`).
	- El origen viene de tratar de replicar un walz tipo Elouise de the lumineers, pero con una progresión que me gustó y una melodía que logré hacer en el piano, a partir de mi acorde favorito. Bb
- *Louise* nace el mismo día sobre ese esqueleto y le suma melodía y batería. La guitarra entra el 3 oct.
- El motivo **La–Sol–Fa#–Re–Fa#** ya estaba antes, en 4/4, en
  `5. Experiments/2. House/0.happy_beats.strudel.js`. Louise es el tercer archivo donde aparece.
- Archivo: `4. Instrumento/2. Strudel/5. Experiments/1. Happy/4. Louise.strudel.js`
  (Obsidian no muestra `.js`; se abre en VS Code).
- Qué escuchabas, por qué *Louise*: ____

## Material

Estado al 2026-10-05, con las notas que salen al evaluar el archivo compás por compás.

**La frase dura 5 compases.** `RAIZ = "<0@2 4 5 3>"` → **D · D · A · Bm · G**.

| Capa | Suena en | Qué toca |
|---|---|---|
| melodía (piano) | cc. 1–2 | el motivo, una vez. Pesos 0.5 · 0.75 · 0.5 · 0.75 · 1, repartidos en 6 tiempos |
| bajo (piano) | cc. 1, 3, 4, 5 | la raíz, una por compás: D2 · A2 · B2 · G2 |
| armonía (piano) | cc. 3–5 | `CHORD_TYPES.nor` (1-3-5 y la 3ª arriba) sobre RAIZ, en el 2 y el 3, con el balanceo de `x@1.2` |
| guitarra (nylon) | cc. 3–5 | Re fijo: D2 F#2 · A2 D3 · F#4 A4, rasgueada con `late()` |
| kick | ciclo de 4 | tiempo 3 · tiempo 1 · tiempo 3 · nada |
| toms y crash | ciclo de 5 | crash al empezar, toms después |
| shaker | cada compás | ghost a 0.1 |

**Cómo está armada hoy:** los cc. 1–2 son una *pregunta* (melodía sola sobre el bajo) y los
cc. 3–5 la *respuesta* (entra la banda y se va la melodía). La melodía y la armonía nunca suenan juntas.

Cambios que ya hiciste. El *qué* sale de git; el *por qué* es tuyo:

| Fecha | Cambio | Por qué |
|---|---|---|
| 2026-10-03 | `nor` pierde la octava: `[0,2,4,7,9]` → `[0,2,4,9]` | |
| 2026-10-03 | armonía: `[~ x]` → `[~ x@1.2 x]`, de un golpe a dos y con balanceo | |
| 2026-10-03 | entra la guitarra nylon | |
| 2026-10-05 | tempo 180 → 160 | |
| 2026-10-05 | `sus` gana la 6ª: `[0,1,4]` → `[0,1,4,9]` (todavía no se usa) | |

## Decisiones

> Una línea por decisión: **qué hice · por qué · qué cambió → enlace al concepto**.
> Sin esto, las decisiones quedan dentro de la narración: valiosas pero irrecuperables.

- <!-- Guitarra arriba y siguiendo RAIZ · el V volvía a sonar a V · → [[...]] -->

## Problemas abiertos

> Los bloqueos, formulados como problema y no como queja.

- [ ] **La guitarra pisa al bajo.** Toca Re fijo y solo suena en los compases que *no* son Re
  (A, Bm, G). Su D2 queda debajo del bajo, así que el A suena a Dmaj9, el G a G/D, y el V
  desaparece. D2–F#2 es una tercera en registro de barro. → sesión 1
- [ ] **La melodía no cae en los tiempos del vals.** Dentro de `[ ]`, `@` reparte en proporción:
  los cinco pesos suman 3.5 y se estiran sobre 6 tiempos. De las cinco notas, solo el Re cae en
  un tiempo. ¿Flotando o en rejilla? → sesión 1
- [ ] **El kick dura 4 compases y la frase 5.** Solo coinciden cada 20. ¿Recurso o accidente? → sesión 1
- [ ] **La frase dura 5 compases (2 + 3).** ¿La asimetría es buscada, o le falta o le sobra un compás? → sesión 1
- [ ] **Los compases de respuesta no tienen voz.** El motivo suena una vez y desaparece. → sesión 2
- [ ] **No hay forma.** No tiene intro, B ni final: es un loop de 5 compases. → sesiones 3 y 4

## Feedback

> Fechado y con fuente. Incluye el tuyo propio después de 24 h.

### 2026-10-05 — *Claude (código evaluado nota por nota, sin escucharlo)*

- Funciona: el `x@1.2` (el tiempo 2 entra antes y el 3 después, como el balanceo de un vals
  vienés), un motivo que vuelve desde `happy_beats`, las cuentas de `CHORD_TYPES` y el rasgueo con `late()`.
- Choca: ver *Problemas abiertos*.

## Revisiones

- [ ]

## Grabaciones

> Bounce incondicional: cada vez que dejas de trabajar, exportas. Aunque esté feo.
> Van a `render/` con la fecha delante.

| Fecha | Archivo | Qué cambió respecto a la anterior |
|---|---|---|
| | | |

---

## Cierre

- [ ] Se cumple `definicion_terminado`
- [ ] Rúbrica aplicada → [[Rúbrica - Composición]]
- [ ] Escuchada tras 24 h de descanso
- [ ] Exportada con fecha
- [ ] Retrospectiva de tres líneas

### Retrospectiva

- Qué aprendí:
- Qué evitaría la próxima:
- Qué me llevo a la siguiente pieza:

### Qué sube a Teoría

> Una obra no es solo un producto: es una fuente.
> Lo que descubriste aquí pertenece a una nota de concepto, con enlace de vuelta a esta pieza.

- [ ] `[[...]]` ←
