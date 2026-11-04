# La nota de obra y las notas de cada sesión

> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario (Obsidian + git), el 2026-11-04. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.

La ficha, el mapa, las decisiones, el contexto (lo que toma de otras canciones) y las notas que escribió el usuario al terminar cada sesión.

Contiene:

- `3. Composiciones/6. louise/0. Obra.md`
- `3. Composiciones/6. louise/1. Mapa.md`
- `3. Composiciones/6. louise/2. Decisiones.md`
- `3. Composiciones/6. louise/4. Contexto.md`
- `3. Composiciones/6. louise/6. Hallazgos.md`
- `3. Composiciones/6. louise/3. Sesiones/00. Adding verse.md`
- `3. Composiciones/6. louise/3. Sesiones/01. Drums and separation.md`
- `3. Composiciones/6. louise/3. Sesiones/02. Verse and choruse.md`
- `3. Composiciones/6. louise/3. Sesiones/03. Adding specific voicing.md`
- `3. Composiciones/6. louise/3. Sesiones/04. Adding bridge1.md`
- `3. Composiciones/6. louise/3. Sesiones/05. Second bridge.md`
- `3. Composiciones/6. louise/3. Sesiones/06. Second bridge.md`
- `3. Composiciones/6. louise/3. Sesiones/07. violin.melodia.md`
- `3. Composiciones/6. louise/3. Sesiones/08. C1.violin.melodia.md`
- `3. Composiciones/6. louise/3. Sesiones/09. Violin.melodia.md`
- `3. Composiciones/6. louise/3. Sesiones/10. energia.md`
- `3. Composiciones/6. louise/3. Sesiones/12. energia.md`

---

## Archivo: `3. Composiciones/6. louise/0. Obra.md`

```yaml
tipo: composicion
estado: cerrada
titulo: Louise
inicio: 2026-10-02
cierre: 2026-11-04
formato: ambos
fuente: "7. Partituras/2. Composiciones/Louise-melancolica.mscz"
instrumentos: [piano, guitarra, bateria]
instrumento: Strudel — piano, guitarra nylon, batería AkaiLinn
tonalidad: Re mayor
metrica: 3/4
tempo: 160
definicion_terminado:
referencias:
conceptos:
  - "[[2. Composición binaria — contraste, intro y puente]]"
  - "[[0. Enlaces 2.0 y motivos]]"
ultimo_audio: 2026-11-04
tags:
  - curso-musica/obra
```

# Louise

> [!important] Antes de la primera nota
> `definicion_terminado` está vacío a propósito: lo escribes tú, en la sesión 0.
> "Que quede bien" no es una definición. "90 s, forma AABA, una toma limpia exportada" sí.

- 🗺️ [[1. Mapa|Mapa]] · 📜 [[2. Decisiones|Decisiones]] · 🎧 [[4. Contexto|Contexto]] · 🎯 [[6. Hallazgos|Hallazgos]]

## Versión final

> [!success] Terminada el 2026-11-04

| | Archivo |
|---|---|
| 🎼 Partitura final | [[7. Partituras/2. Composiciones/Louise-melancolica.mscz\|Louise-melancolica]] · [[7. Partituras/2. Composiciones/Louise-melancolica.musicxml\|MusicXML]] |
| 🎛️ Strudel final | [[4. Instrumento/2. Strudel/10. Folk/Louise/9.produccion/pieza.strudel.js\|pieza.strudel.js]]: la pieza entera, c.1–111, unida desde los archivos de producción de `9.produccion/` con `./_scripts/pieza-strudel.py` |
| 🎧 Audio | `4. Instrumento/2. Strudel/10. Folk/Louise/9.produccion/render/2026-11-04 Louise - final.m4a` (y `.wav`): ese Strudel renderizado en strudel.cc, 2:07. Git no lo guarda |
| 🌱 Versiones anteriores | archivadas en `_legacy/partituras/versiones-viejas/`: [[_legacy/partituras/versiones-viejas/Louise - primer intento.mscz\|Louise - primer intento]], la partitura que nació el 9 oct (antes `Louise.mscz`), y [[_legacy/partituras/versiones-viejas/Louise-simple-melancolica.mscz\|Louise-simple-melancolica]], la variante del 20 oct |
| 🌰 Strudel de origen | `4. Instrumento/2. Strudel/10. Folk/4. Louise.strudel.js` |

![[4. Instrumento/2. Strudel/10. Folk/Louise/9.produccion/render/2026-11-04 Louise - final.m4a]]

## Sesiones

> Las notas `00`–`06` de `3. Sesiones/` son las sesiones de antes de este esquema (eran 1–7), con su nombre
> original. **La próxima sesión es la `07.`**, con el formato nuevo: `07. <alcance>.md`.

```base
filters:
  and:
    - file.path.startsWith(this.file.folder)
    - file.folder.endsWith("3. Sesiones")
views:
  - type: table
    name: Sesiones
    order:
      - file.name
      - fecha
      - tipo_sesion
      - ataca
```

## Feedback

```base
filters:
  and:
    - file.path.startsWith(this.file.folder)
    - file.folder.endsWith("5. Feedback")
views:
  - type: table
    name: Feedback
    order:
      - file.name
      - fecha
      - alcance
      - siguiente
```

> [!info] Equivalencias de la migración (2026-10-22)
> El 2026-10-22 todo se renumeró desde `0`, una sola vez y con el contenido intacto. **El texto de las notas
> viejas y los mensajes de commit anteriores usan los números viejos** ("la nota 12", "notas 15–17"). Esta
> tabla los traduce:
>
> | Antes | Ahora |
> |---|---|
> | `AI/10. Feedback del B2` | `5. Feedback/00. B2` |
> | `AI/11. Entrada del B2 y motivo en menor` | `5. Feedback/01. B2` |
> | `AI/12. Feedback del B2 - entrada, subida y salida` | `5. Feedback/02. B2` |
> | `AI/14. Errores del B2` | `5. Feedback/03. B2` |
> | `AI/15. Errores pendientes del B2` | `5. Feedback/04. B2` |
> | `AI/16. … tercera ronda` | `5. Feedback/05. B2` |
> | `AI/17. … cuarta ronda` | `5. Feedback/06. B2` |
> | `AI/9. Recursos de energía y forma` | `AI/0. Recursos de energía y forma` |
> | `AI/13. Análisis estadístico` | `AI/1. Análisis estadístico` |
> | `AI/14. Louise y The Lumineers` | `AI/2. Louise y The Lumineers` |
> | sesiones `1.`–`7.` (en la raíz) | `3. Sesiones/00.`–`06.` |
> | `AI/14. Feedback` (copia vieja de la 14) | `_legacy/3. Composiciones/6. louise/AI/14. Feedback` |
>
> Los IDs (`H-NN`, `D-NN`, `R-NN`) no se tocaron.

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

| Capa             | Suena en         | Qué toca                                                                                        |
| ---------------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| melodía (piano)  | cc. 1–2          | el motivo, una vez. Pesos 0.5 · 0.75 · 0.5 · 0.75 · 1, repartidos en 6 tiempos                  |
| bajo (piano)     | cc. 1, 3, 4, 5   | la raíz, una por compás: D2 · A2 · B2 · G2                                                      |
| armonía (piano)  | cc. 3–5          | `CHORD_TYPES.nor` (1-3-5 y la 3ª arriba) sobre RAIZ, en el 2 y el 3, con el balanceo de `x@1.2` |
| guitarra (nylon) | cc. 3–5          | Re fijo: D2 F#2 · A2 D3 · F#4 A4, rasgueada con `late()`                                        |
| kick             | ciclo de 4       | tiempo 3 · tiempo 1 · tiempo 3 · nada                                                           |
| toms y crash     | ciclo de 5       | crash al empezar, toms después                                                                  |
| shaker           | cada compás      | ghost a 0.1                                                                                     |
| Melodía (Violin) | Todo menos intro | Toca la melodía y acompañamientos                                                               |

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

Viven en [[2. Decisiones|Decisiones]], con su ID (`D-01`…), junto con lo que está *Por decidir*.

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

## Feedback antes del esquema

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
| 2026-11-03 | `9.produccion/render/2026-11-03 Louise - pieza.wav` y una por sección | el primer audio de la producción, del commit `ce608ea`; el del [[3. Composiciones/6. louise/5. Feedback/16. energia\|F 16]] |
| 2026-11-04 | `9.produccion/render/2026-11-04 Louise - final.m4a` y `.wav` | **la versión final**: `pieza.strudel.js` de `7dd9d3c`. Respecto al del 3 nov: el violín del V2 a 127 y su piano más bajo, otras velocidades en la batería del C2 (bombo, caja, pandereta, cencerro y shaker), los toms del B2 a NORMAL y el violín de c.93–94 a 82 |

---

## Cierre

- [ ] Se cumple `definicion_terminado`
- [ ] Rúbrica aplicada → [[Rúbrica - Composición]]
- [ ] Escuchada tras 24 h de descanso
- [x] Exportada con fecha
- [ ] Retrospectiva de tres líneas

### Retrospectiva

- Qué aprendí:
- Qué evitaría la próxima:
- Qué me llevo a la siguiente pieza:

### Qué sube a Teoría

> Una obra no es solo un producto: es una fuente.
> Lo que descubriste aquí pertenece a una nota de concepto, con enlace de vuelta a esta pieza.

- [ ] `[[...]]` ←

---

## Archivo: `3. Composiciones/6. louise/1. Mapa.md`

```yaml
tipo: mapa-obra
estado: borrador
```

# Mapa

> [!info] Para qué sirve
> Qué quieres de la pieza y de cada sección. Es la vara con la que se mide cada feedback: lo que suena
> se compara con lo que la sección dice querer. **Lo escribes tú**; la IA solo propone cambios dentro de
> un feedback.
>
> - El nombre corto de cada sección (`B2`, `C3`, `Intro`) es el que se usa en los alcances.
> - Los compases son opcionales.

> [!warning] Borrador
> Lo armó Claude el 2026-10-22 solo con lo que ya estaba escrito: tus [[2. Decisiones|Decisiones]], el
> *Origen* de la [[0. Obra|ficha]] y las notas de `AI/`. Cada dato dice de dónde salió. Donde dice `____`
> no hay nada escrito: eso es tuyo. Cuando lo revises, cambia `estado: borrador` a `vigente`.

## Intención

- Un vals tipo *Elouise* de The Lumineers, armado desde tu acorde favorito, el B♭ → [[2. Decisiones#^d-12|D-12]], *Origen*, [[4. Contexto#^r-01|R-01]].
- Una canción triste: cada vez que llega a D se escapa, y el pico está en el B2 → [[2. Decisiones#^d-03|D-03]].
- ____

## Secciones

### Intro · presentar el motivo

- **Qué quiero:** ____
- **Energía:** ____
- **Cómo se reconoce:** el motivo, en una frase de 5 compases
- **Dónde, más o menos:** c.1–10

### V1 · el verso que no cierra

- **Qué quiero:** cadencias sencillas con dirección; el verso nunca cierra en el I (V7→vi) → [[2. Decisiones#^d-09|D-09]]
- **Energía:** ____
- **Cómo se reconoce:** ____
- **Dónde, más o menos:** c.11–26

### C1 · el coro plano

- **Qué quiero:** sin decoración (fills, brillo); solo el cambio de patrón respecto al verso, para dejar adónde crecer → [[2. Decisiones#^d-06|D-06]]
- **Energía:** ____ <!-- menos que el C2 -->
- **Cómo se reconoce:** cierra en el I (c.33–34, 41–42) → [[2. Decisiones#^d-09|D-09]]
- **Dónde, más o menos:** c.27–42

### B1 · contraste

- **Qué quiero:** contraste después del coro, y que el verso 2 entre solo → [[2. Decisiones#^d-02|D-02]]
- **Energía:** ____
- **Cómo se reconoce:** Bm · Em7 · E/A, el bajo baja por quintas B–E–A–D, suena el piano solo
- **Dónde, más o menos:** c.43–50

### V2 · el verso que vuelve

- **Qué quiero:** ____
- **Energía:** ____
- **Cómo se reconoce:** ____ <!-- Por decidir: ¿el bajo del c.51 es Mi o Re? -->
- **Dónde, más o menos:** c.51–66

### C2 · crecer sin cerrar

- **Qué quiero:** recuperar lo que perdió el C1, hacer crescendo y no cerrar en D: tensión hacia el B2 → [[2. Decisiones#^d-07|D-07]]
- **Energía:** 3 → 4
- **Cómo se reconoce:** ya no es copia exacta del coro
- **Dónde, más o menos:** c.67–82

### B2 · el pico

- **Qué quiero:** lo más alto de la pieza, por encima de todos los coros, estrenando lo único que nunca sonó → [[2. Decisiones#^d-08|D-08]]; que resuelva al entrar al Em (lo dijiste en el feedback 02)
- **Energía:** 5
- **Cómo se reconoce:** el motivo en Re menor, la cadena de dominantes y el B♭ con la nota más aguda de la pieza
- **Dónde, más o menos:** c.83–92

### C3 · despedida

- **Qué quiero:** que cierre fuerte, con declive, y que sí cierre en A7→D: la resolución que el B2 retuvo → [[2. Decisiones#^d-21|D-21]] (antes [[2. Decisiones#^d-04|D-04]], el coro con capas quitadas)
- **Energía:** ____ <!-- fuerte, con declive (D-21); antes era 2 -->
- **Cómo se reconoce:** ____
- **Dónde, más o menos:** c.93–108

### Outro · ____

- **Qué quiero:** ____ <!-- Por decidir: ¿el motivo de la intro? ¿cerrado en D o suspendido en Gmaj7♯11? -->
- **Energía:** ____
- **Cómo se reconoce:** ____
- **Dónde, más o menos:** desde el c.109

## Motivo

- **La–Sol–Fa♯–Re–Fa♯.** Ya existía en 4/4 en `happy_beats`; Louise es el tercer archivo donde aparece (*Origen*).
- En el B2 aparece en Re menor, en sextas en el piano.
- ____

## Roles

- En los compases de cadencia el vals se reparte: piano en el 1, guitarra en el 2 y el 3 → [[2. Decisiones#^d-05|D-05]].
- El vals: bajo en el 1 y acorde en el 2 y el 3 → [[2. Decisiones#^d-12|D-12]].
- ____

---

## Archivo: `3. Composiciones/6. louise/2. Decisiones.md`

```yaml
tipo: decisiones
estado: vigente
```

# Decisiones

> [!info] Cómo se escribe
> Una tabla por decisión: **ID · fecha · qué · por qué · qué cambió · enlaces** (concepto y de dónde nace), y
> debajo, pegado a la tabla, su ID de bloque (`^d-01`).
>
> - **La escribes tú**; la IA propone decisiones con `____` dentro de un feedback.
> - El ID (`D-01`) no cambia nunca. Va en una tabla propia porque Obsidian solo deja enlazar una tabla entera, no
>   una fila: así cada decisión se enlaza por su ID, `[[2. Decisiones#^d-01|D-01]]`.
> - Una decisión no se borra: su tabla pasa tachada a *Reemplazadas*, con su mismo `^d-NN`, y apunta a la que la
>   sustituye.
> - Si nace de un hallazgo, ese hallazgo pasa a estado `decisión` y enlaza aquí.
> - Dentro de una celda, el alias de un enlace se escribe `[[nota\|alias]]`: la barra sin escapar parte la columna.
>
> Salieron de `## Decisiones` de [[0. Obra|la ficha]] el 2026-10-22, con los IDs en el orden en que estaban.
> El 2026-10-25 pasaron de una línea cada una a tablas, con el mismo texto, y el mismo día a una tabla por
> decisión, para recuperar sus IDs de bloque.

> Redactadas con Claude el 2026-10-13, a partir de las notas 1–6 y de la revisión de la partitura.
> Donde dice `____`, el porqué es tuyo y no está escrito en ningún lado.

## Forma

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-01 | 2026-10-06 | **Puente automático** | ____ | ____ | [[2. Composición binaria — contraste, intro y puente]] |
^d-01

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-02 | 2026-10-13 | **Bridge 1 (c.43–50): tres compases nuevos (Bm · Em7 · E/A) y la frase de 5 de la intro** | contraste después del coro, y que el verso 2 entre solo | la frase de 5 queda en 8, el bajo baja por quintas B–E–A–D, y suena el piano solo | [[2. Composición binaria — contraste, intro y puente]] |
^d-02

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-03 | 2026-10-13 | **Forma: Intro · V1 · C1 · B1 · V2 · C2 · B2 · C3 · Outro, con el pico en el B2** | le va a una canción triste (cada vez que llega a D se escapa) y es la ruta más barata para cerrar el 17 | de 82 compases pasa a unos 100–115 (1:50–2:10) | [[2. Composición binaria — contraste, intro y puente]] |
^d-03

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-21 | 2026-11-03 | **C3: cierra fuerte, con declive, y sí cierra en A7→D** | ____ | reemplaza a [[3. Composiciones/6. louise/2. Decisiones#^d-04\|D-04]]: el C3 deja de ser el coro con capas quitadas; la cadencia A7→D, la resolución que el B2 retuvo, se queda | nace de [[3. Composiciones/6. louise/6. Hallazgos#^h-02\|H-02]] · [[0. Cadencias, progresiones y líneas melódicas]] |
^d-21

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-13 | 2026-10-23 | **Instrumental: el violín lleva la línea, sin voz** | Me gusta la melancolía o brillantez que puede llegar a adquirir ____ | ____ | |
^d-13

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-14 | 2026-10-23 | **Violín: pizzicato en los versos, arco en los coros** | Se escucha mejor y da contraste ____ | ____ | |
^d-14

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-16 | 2026-10-25 | **V1: el *pizz.* del violín solo acompaña** | ____ | ninguna nota; D-13 (*el violín lleva la línea*) no rige en el V1 | nace de [[3. Composiciones/6. louise/6. Hallazgos#^h-14\|H-14]] |
^d-16

## Energía y arreglo

> Sin nota de concepto en Teoría todavía: candidatas para `8. Textura y arreglo` (ver *Qué sube a Teoría*).

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-05 | 2026-10-08 | **Un rol específico para cada parte, y un coro que crezca con más fuerza** | lo aprendí al ver las capas por separado | en los compases de cadencia el vals se reparte: piano en el 1, guitarra en el 2 y el 3 (c.19, 30, 34, 38) | |
^d-05

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-06 | 2026-10-13 | **C1 más plano: se va la decoración (fills cada 4 compases, brillo) y se queda el cambio de patrón respecto al verso** | el C1 gastaba toda la batería y no dejaba adónde crecer | lo que pierde el C1 es lo que recupera el C2 | |
^d-06

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-07 | 2026-10-13 | **C2 sube: recupera lo que perdió el C1, hace crescendo y no cierra en D** | tensión hacia el B2 | c.67–82 dejan de ser copia exacta del coro | |
^d-07

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-08 | 2026-10-13 | **El B2 estrena lo único que nunca sonó** | el pico tiene que superar a todos los coros, no solo al C2 | | |
^d-08

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-17 | 2026-10-25 | **C1 y C2: el violín va dentro de la textura, con piano y guitarra por encima** | "que en la primera mitad se ahogue un poco y ya después agarre ritmo" ____ | ninguna nota: lo que H-23 marca en el C1 y el C2 es a propósito | nace de [[3. Composiciones/6. louise/6. Hallazgos#^h-23\|H-23]] |
^d-17

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-19 | 2026-10-25 | **C3: el violín canta la primera mitad, con el piano y la guitarra por encima en c.93, 96, 99 y 100, y el piano cierra la segunda** | ____ | ninguna nota | nace de [[3. Composiciones/6. louise/6. Hallazgos#^h-23\|H-23]] |
^d-19

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-20 | 2026-11-03 | **c.82: el hueco antes del B2 se queda** | "es el respiro antes del B2" | ninguna nota: lo que H-03 marca en el c.82 es a propósito | nace de [[3. Composiciones/6. louise/6. Hallazgos#^h-03\|H-03]] |
^d-20

## Armonía

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-09 | 2026-10-06 | **Cadencias sencillas con dirección, y cadencia rota** | "me gustó más crear cadencias sencillas, pero que tuvieran dirección" | V7→vi en c.14→15 y c.22→23: el verso nunca cierra en el I y el coro sí (c.33–34, c.41–42) | [[0. Cadencias, progresiones y líneas melódicas]] |
^d-09

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-10 | 2026-10-06 | **Mayormente acordes diatónicos** | ____ | el único cromatismo de toda la pieza es el G♯ del c.45, que sube al La del motivo | [[2. Armonización de tonalidades mayores]] |
^d-10

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-11 | 2026-10-13 | **c.12 y c.52: bajo de F♯m (F♯3) en lugar de G3** | el piano decía A7/G mientras la guitarra decía F♯m | en el c.12 el G3 queda solo al final, como anticipación del C♯° del c.13; el c.52 queda como el c.20 | [[00. Voicing e inversiones]] |
^d-11

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-18 | 2026-10-25 | **Cuatro octavas del violín con el bajo se quedan: dos en el B2, hacia el B♭ (dentro del c.90 y c.90→91), y dos en el C3 (c.98→99 y la cadencia final, c.107→108)** | ____ | ninguna nota: las otras diez paralelas de H-24 se arreglaron | nace de [[3. Composiciones/6. louise/6. Hallazgos#^h-24\|H-24]] |
^d-18

## Ritmo

| ID | Fecha | Qué | Por qué | Qué cambió | Enlaces |
|---|---|---|---|---|---|
| D-12 | 2026-10-06 | **El vals se queda** | el origen es replicar un vals tipo *Elouise* de The Lumineers | 3/4 en toda la pieza, bajo en el 1 y acorde en el 2 y el 3 | |
^d-12

## Por decidir

> Qué implica cada punto y con qué recursos se cambia → [[3. Composiciones/6. louise/AI/0. Recursos de energía y forma - Louise|0. Recursos de energía y forma - Louise]]

- [ ] **¿Voz o instrumental?** Define `definicion_terminado`.
- [ ] **c.51: ¿el bajo es Mi o Re?** El D3 nuevo queda encima del E2 de la guitarra, así que el verso 2 sigue llegando sobre Mi. D2 como en el c.11, quitar el Mi grave de la guitarra, o dejarlo a propósito.
- [ ] **Qué le quito al C1:** crash, hi-hat abierto, fills cada 4 compases.
- [ ] **Qué capa estrena el B2:** aahs, guitarra rasgueada, *ff*, cromatismo.
- [ ] **Que el B2 no arranque como el B1:** hoy el c.82 lleva el mismo enlace D–C♯–B que el c.42. Cambia el final del C2 o el arranque del B2.
- [ ] **La descarga después del B2:** corte o vaciado.
- [ ] **C3 de 8 o de 16 compases.** Cada mitad del coro ya termina en A7→D.
- [ ] **Outro:** ¿qué riff? El motivo de la intro es el candidato natural. ¿Termina en D (cerrado) o en el Gmaj7♯11 de la intro (suspendido)?
- [ ] **Mapa de dinámicas:** hoy no hay ninguna marca en toda la partitura.
- [ ] **Guitarra: ¿la grabas tú?** Si sí, hay que revoicear lo que no se puede tocar: c.13/53, el Em del coro (c.27, 31, 35, 39 y copias) y las aperturas de c.12, 14, 15, 16 y 18 (y copias).

## Reemplazadas

| ID | Fecha | Qué | Por qué | Reemplazada por |
|---|---|---|---|---|
| ~~D-04~~ | ~~2026-10-13~~ | ~~**C3 de despedida: el coro con capas quitadas, que sí cierra en A7→D**~~ | ~~después del pico llega la resolución que el B2 retuvo~~ | [[3. Composiciones/6. louise/2. Decisiones#^d-21\|D-21]], el 2026-11-03: el C3 cierra fuerte, con declive; la cadencia se queda |
^d-04

---

## Archivo: `3. Composiciones/6. louise/4. Contexto.md`

```yaml
tipo: contexto
estado: borrador
```

# Contexto

> [!info] Para qué sirve
> Qué quieres de otras canciones **para Louise**, y qué no. Exacto: un momento, un aspecto, un destino.
> La canción completa vive en `5. Referencias/`; aquí solo va lo que tomas. **Lo escribes tú**; la IA
> propone tomas con `____` dentro de un feedback.
>
> - Una toma es **un principio**, uno solo. El ID (`R-01`) no cambia nunca.
> - *Cómo se reconoce* es lo que deja medirla: sin eso, el feedback no puede decir si se oye.
> - Estados: `propuesta` · `aplicada` · `descartada` (con su `D-NN`).

> [!warning] Borrador
> Lo armó Claude el 2026-10-22 solo con lo que ya estaba escrito: el *Origen* de la [[0. Obra|ficha]] y
> [[2. Decisiones#^d-12|D-12]]. Lo que no quieres y las demás tomas son tuyas: ahí no hay nada escrito.
> Cuando lo revises, cambia `estado: borrador` a `vigente`.

## Fuentes

- [[5. Referencias/0. Análisis/The Lumineers/14. Elouise|Elouise]] · The Lumineers
- Comparación de Louise con el disco: [[3. Composiciones/6. louise/AI/2. Louise y The Lumineers - gráficas/2. Louise y The Lumineers|2. Louise y The Lumineers]]

## Tomo ✅

- **R-01** · [[5. Referencias/0. Análisis/The Lumineers/14. Elouise|Elouise]] · toda la canción · **el vals: bajo en el 1 y acorde en el 2 y el 3** · `ritmo` → `pieza` · se reconoce: 3/4 en toda la pieza, bajo en el 1 y acorde en el 2 y el 3 ([[2. Decisiones#^d-12|D-12]]) · aplicada ^r-01

## No quiero ❌

- ____

## Descartadas

-

---

## Archivo: `3. Composiciones/6. louise/6. Hallazgos.md`

```yaml
tipo: hallazgos
estado: vigente
```

# Hallazgos

> [!info] Cómo funciona
> **Los escribe la IA.** Un hallazgo describe **la pieza**, nunca una sesión: lo que escribiste (cifrado,
> [[1. Mapa|Mapa]], [[2. Decisiones|Decisiones]]) dice una cosa y lo que suena dice otra.
>
> - El ID (`H-01`) no cambia nunca, y la línea termina con su ID de bloque (`^h-01`).
> - Estados: `abierto` · `arreglado` · `decisión` · `retirado`. Nada se borra: baja a *Cerrados*.
> - Cada uno lleva su alcance (`sección.instrumento.aspecto`). Un feedback solo abre, cierra o actualiza los de su alcance.

> [!note] De dónde salen estos
> Sembrados el 2026-10-22 con lo que seguía abierto en el feedback
> [[3. Composiciones/6. louise/5. Feedback/06. B2|F 06]], sobre la versión `71a4804`. Los feedback 00–06
> se escribieron antes de este esquema y no tienen IDs `H-NN`. El
> [[3. Composiciones/6. louise/5. Feedback/07. pieza|F 07]] miró la pieza entera, y el
> [[3. Composiciones/6. louise/5. Feedback/08. pieza|F 08]] hizo el inventario de todo lo que le falta, el
> [[3. Composiciones/6. louise/5. Feedback/09. C1.guitarra.voicing|F 09]] miró la guitarra del C1, y el
> [[3. Composiciones/6. louise/5. Feedback/10. violin|F 10]] miró el violín entero, y el
> [[3. Composiciones/6. louise/5. Feedback/11. violin|F 11]] lo volvió a mirar después de la S 08. El
> [[3. Composiciones/6. louise/5. Feedback/12. pieza|F 12]] miró violín, piano y guitarra en toda la pieza, sin
> batería, energía ni dinámicas, y el
> [[3. Composiciones/6. louise/5. Feedback/13. pieza|F 13]] lo volvió a mirar con lo guardado a las 15:50, y el
> [[3. Composiciones/6. louise/5. Feedback/14. pieza|F 14]] con la partitura con la que se cerró MuseScore, y el
> [[3. Composiciones/6. louise/5. Feedback/15. energia|F 15]] miró la energía de la producción en Strudel, con lo escrito
> y sin audio, y el
> [[3. Composiciones/6. louise/5. Feedback/16. energia|F 16]] la volvió a mirar sobre audio, renderizado en strudel.cc. El próximo feedback es el **17**.

## Abiertos

- **H-01** · B2.energia · peso alto · la subida (c.85–91) no sube: en el audio, siete compases dentro de 3.3 LU y sin dirección, con el c.85 (−8.2 LUFS) por encima del c.91 (−9.1); lo que sube y baja de un compás a otro es la batería (los dos más altos, c.85 y c.90, son los de batería más fuerte); el violín, 10 LU debajo del resto, baja de 102 a 77 de c.85 a c.88 y vuelve a 90 en el c.91 sin que la mezcla cambie, y el B♭5 del c.91 lo lleva el piano, 7.6 LU sobre el violín · nació en [[3. Composiciones/6. louise/5. Feedback/06. B2|F 06]] (en el render de MuseScore: siete compases dentro de 0.8 dB, y el c.91 se apagaba 5.7 dB dentro del compás) · actualizado en [[3. Composiciones/6. louise/5. Feedback/15. energia|F 15]] (en lo escrito: 2.1 dB, y el violín de 102 a 50) · actualizado en [[3. Composiciones/6. louise/5. Feedback/16. energia|F 16]]: medido sobre audio; la S 12 subió el violín de c.89–92 entre 1.1 y 5.1 LU y la mezcla no se movió ^h-01
- **H-05** · notacion · peso bajo · las marcas de ensayo no siguen el Mapa: en c.43 y c.67 hay una segunda marca vacía junto a "B1" y "C2" · nació en [[3. Composiciones/6. louise/5. Feedback/06. B2|F 06]] (C3.notacion, solo el c.93) · ampliado en [[3. Composiciones/6. louise/5. Feedback/08. pieza|F 08]] · actualizado en [[3. Composiciones/6. louise/5. Feedback/12. pieza|F 12]]: el c.93 ya dice "C3", y apareció la marca vacía del c.43 · actualizado en [[3. Composiciones/6. louise/5. Feedback/13. pieza|F 13]]: el c.109 ya dice "Outro" ^h-05
- **H-06** · B2.notacion · peso bajo · el c.87 está cifrado "C4": suena Csus4 en el tiempo 1 y C7sus4 en los tiempos 2 y 3 · nació en [[3. Composiciones/6. louise/5. Feedback/06. B2|F 06]] ^h-06
- **H-10** · notacion · peso bajo · el cifrado no dice lo que suena en 35 compases: bajos que no escribe (c.7, 19, 26, 45, 47, 51, 53, 57, 90 y copias), notas que dice y no suenan (Bm7 sin La, D6 sin Si, F♯m7 sin Mi, A7 sin Sol en c.33/73/99, Gmaj7 sin Fa♯ en el c.50, un "D" sin Re en el c.12) o que suenan y no dice (Em7 en el c.44, Gmaj7♯11 en el c.10, B♭add9 en el c.91), y cifrados en otro tiempo (c.5, 10, 35, 50, 75, 86, 90, 101) · nació en [[3. Composiciones/6. louise/5. Feedback/07. pieza|F 07]] (c.7, 44 y 45) · ampliado en [[3. Composiciones/6. louise/5. Feedback/08. pieza|F 08]] ^h-10
- **H-12** · guitarra.voicing · peso medio · fuera del B2 la guitarra toca terceras en la octava 2 (Mi2–Sol2, Fa♯2–La2, Sol2–Si2) en 41 compases de V1, C1, V2, C2 y C3, debajo de su límite grave, y 12 más en el límite (La2–Do♯3, Si2–Re3); en 70 de los 85 compases con guitarra dobla al piano en el mismo grave · nació en [[3. Composiciones/6. louise/5. Feedback/08. pieza|F 08]] ^h-12
- **H-13** · C1.guitarra.voicing · peso medio · en el C1, 8 de los 15 compases con guitarra no caben bien en una mano en afinación estándar: el Em (c.27, 31, 35, 39) pide Mi2 y Sol2, que solo existen en la 6.ª cuerda; el Bm (c.30, 38) y el A7 (c.33, 41) solo caben del traste 9 al 14, con una cuerda apagada en medio, y se llega a ellos con saltos de unos diez trastes en un tiempo o en la barra (c.29→30, 32→33, 37→38, 40→41) · nació en [[3. Composiciones/6. louise/5. Feedback/09. C1.guitarra.voicing|F 09]] · [[3. Composiciones/6. louise/5. Feedback/13. pieza|F 13]]: en las copias del C3, el c.96 ya no tiene guitarra; si la guitarra es solo de MuseScore, se cierra como decisión ^h-13
- **H-17** · violin.energia · peso medio · el primer compás del C3 es el más fuerte del violín en toda la pieza: en el audio, el c.93 (96) suena −16.9 LUFS, 0.6 LU sobre el compás más fuerte del B2 y 2.6 sobre el B♭ del c.91; como sección, el B2 sigue siendo lo más fuerte del violín (3.7 LU sobre el C3) · contra el Mapa (B2: *"lo más alto de la pieza"*) · nació en [[3. Composiciones/6. louise/5. Feedback/10. violin|F 10]] (lo más fuerte eran los coros; el B2, *pp*, lo más bajo) · actualizado en [[3. Composiciones/6. louise/5. Feedback/11. violin|F 11]] (en el render: el C3, 7.7 dB sobre los coros y 9.9 sobre el B2) · bajó a medio en [[3. Composiciones/6. louise/5. Feedback/15. energia|F 15]]: lo del B2 está; queda el C3, el mismo de H-02 · actualizado en [[3. Composiciones/6. louise/5. Feedback/16. energia|F 16]]: medido sobre audio; la S 12 subió el c.93 de 82 a 96 · acotado por [[3. Composiciones/6. louise/2. Decisiones#^d-21|D-21]] (2026-11-03): con un C3 que cierra fuerte, que su violín suene sobre los dos coros (0.8 LU sobre el C2 y 1.8 sobre el C1 en el F 16) es a propósito; queda el c.93 por encima del B2 ^h-17
- **H-19** · violin.notacion · peso bajo · en el c.89 hay una dinámica vacía; cuatro reguladores (c.27–30, 67–70, 80–82, 94–105) sin dinámica de llegada; los dos versos y el B2 sin dinámica; ninguna ligadura ni articulación en 251 notas · nació en [[3. Composiciones/6. louise/5. Feedback/10. violin|F 10]] · actualizado en [[3. Composiciones/6. louise/5. Feedback/11. violin|F 11]]: el *p* del c.43 salió con el violín del B1, y el *pp* del c.83 también · actualizado en [[3. Composiciones/6. louise/5. Feedback/12. pieza|F 12]]: c.27 y c.67 ya dicen *arco* ^h-19
- **H-20** · V2.violin.energia · peso medio · la línea nueva del V2 está arriba de todo el 81 % del tiempo, pero en el audio de Strudel suena 13.9 LU debajo del resto (10.0 dB debajo en su propio canal, el izquierdo), ninguno de sus 40 ataques supera al resto y no le suma nada a la mezcla; va más enterrada que el arco de los coros, que según [[3. Composiciones/6. louise/2. Decisiones#^d-17|D-17]] va dentro de la textura (9.7–11.8 LU debajo) · contra D-13 · nació en [[3. Composiciones/6. louise/5. Feedback/11. violin|F 11]] (en el render de MuseScore: 16.6 dB debajo, 15.0 por encima de 500 Hz) · actualizado en [[3. Composiciones/6. louise/5. Feedback/15. energia|F 15]], sin medir (el *pizz.* a 100 y a la izquierda, el piano a la derecha y con reverb) · medido en [[3. Composiciones/6. louise/5. Feedback/16. energia|F 16]] ^h-20
- **H-26** · C2.energia · peso medio · el C2 no crece: en el audio, la primera mitad (c.67–74) suena −11.3 LUFS y la segunda (c.75–82), −12.0; la batería, el 75 % de la energía del C2, baja 2.2 LU de una mitad a la otra (bombo y caja en FUERTE en c.67–74; MEDIO y SUAVE en c.75–82), y lo que crece, el piano (+5.0) y el violín (+4.8), no alcanza; el c.67 (−8.7) es el compás más fuerte del C2, al nivel del B2 · contra el Mapa (*"Energía: 3 → 4"*) y [[3. Composiciones/6. louise/2. Decisiones#^d-07|D-07]] (*"hace crescendo"*) · nació en [[3. Composiciones/6. louise/5. Feedback/16. energia|F 16]], después de la S 12 (antes, el C2 crecía 0.8 LU) ^h-26
- **H-27** · bateria.energia · peso medio · la mezcla pasa de 0 dBFS: en el audio de Strudel recortan 83 de 111 compases, hasta +8.4 dBFS (c.83); la batería sola pasa de 0 dBFS en todas las secciones menos el Outro (+7.2 en el B2, +6.0 en el C2) y el piano solo, en el B2 (+1.3); se corta el 0.11 % de las muestras, el 0.39 % en el C2 y el 0.30 % en el B2. Arriba de 0 dBFS, golpes escritos a velocidades distintas salen al mismo techo, en el WAV y al tocar en strudel.cc, que no tiene limitador · contra lo escrito (las velocidades) · nació en [[3. Composiciones/6. louise/5. Feedback/16. energia|F 16]] ^h-27

## Cerrados

<!-- Lo arreglado antes de este esquema está en los feedback 14–17 de 5. Feedback/ y no se repite aquí. -->

- **H-04** · B2.voicing · peso bajo · c.88→89: el G7 tiene el Fa en el bajo, y ese Fa salta a Do en lugar de bajar a Mi · nació en [[3. Composiciones/6. louise/5. Feedback/06. B2|F 06]] · **arreglado** en [[3. Composiciones/6. louise/5. Feedback/08. pieza|F 08]]: el bajo vuelve a Sol2 en el 3& del c.88 y va a Do3 ^h-04
- **H-18** · B1.violin.arreglo · peso medio · D-02 y el Mapa dicen que en el B1 suena el piano solo; el violín tocaba c.43–47 sin respirar desde el C1, y en c.45–47 era lo más fuerte (+0.7, +2.1 y +4.8 dB sobre el resto) · nació en [[3. Composiciones/6. louise/5. Feedback/10. violin|F 10]] · **arreglado** en [[3. Composiciones/6. louise/5. Feedback/11. violin|F 11]]: el violín sale del B1 y calla de c.44 a c.50 ^h-18
- **H-14** · V1.violin.melodia · peso bajo · D-13 dice que el violín lleva la línea, y en el V1 el pizzicato es una voz interior: nunca está arriba de todo, el 76 % del tiempo toca una altura que ya suena en piano o guitarra, y queda 15 dB debajo del resto; es arpegio, sin un gesto que vuelva · nació en [[3. Composiciones/6. louise/5. Feedback/10. violin|F 10]] (medio, V1 y V2) · el V2 dejó de aplicar y bajó a bajo en [[3. Composiciones/6. louise/5. Feedback/11. violin|F 11]] · **decisión** en [[3. Composiciones/6. louise/2. Decisiones#^d-16|D-16]]: el *pizz.* del V1 acompaña a propósito (lo dijiste en la S 08) ^h-14
- **H-09** · ritmo · peso medio · en c.11–18 y c.51–58 piano y guitarra atacaban juntos en el 1 y sostenían el compás: en el 2 y el 3 no atacaba ninguna nota (solo el piano a contratiempo, 2& o 3e, en compases alternos); el compás caía 5.3 dB del tiempo 1 al 3 · nació en [[3. Composiciones/6. louise/5. Feedback/07. pieza|F 07]] · **arreglado** en [[3. Composiciones/6. louise/5. Feedback/12. pieza|F 12]]: los 16 compases tienen ataques en el 2 o el 3, del violín ^h-09
- **H-11** · melodia · peso alto · fuera de Intro, B1 y B2 no había melodía: en V1, C1, V2, C2 y C3 (80 de 110 compases) lo de arriba era la nota de arriba del acorde; el pentagrama de Voz estaba vacío · nació en [[3. Composiciones/6. louise/5. Feedback/08. pieza|F 08]] · **arreglado** en [[3. Composiciones/6. louise/5. Feedback/12. pieza|F 12]]: el violín lleva la línea en C1, V2, C2 y C3, y el V1 va sin ella por [[3. Composiciones/6. louise/2. Decisiones#^d-16|D-16]] ^h-11
- **H-16** · C2.violin.arreglo · peso medio · el violín del C2 era el del C1 en 15 de 16 compases, con la misma dinámica, contra [[3. Composiciones/6. louise/2. Decisiones#^d-07|D-07]] (*"hace crescendo"*, *"dejan de ser copia exacta del coro"*) · nació en [[3. Composiciones/6. louise/5. Feedback/10. violin|F 10]] · 8 de 16 en [[3. Composiciones/6. louise/5. Feedback/11. violin|F 11]] · **arreglado** en [[3. Composiciones/6. louise/5. Feedback/12. pieza|F 12]]: el C2 repite 5 de 16 compases del C1 (c.67, 70, 72, 76, 77) ^h-16
- **H-08** · C3.armonia · peso alto · el A7→D del c.107→108, la cadencia para la que existe el C3, llega sin bajo: el c.108 no tiene ni una nota en la mano izquierda ni en la guitarra, y lo más grave es Re4; el bajo entra un compás tarde, en el c.109, como Fa♯2 (D/F♯), y llega a Re2 en el c.110 · contra [[3. Composiciones/6. louise/2. Decisiones#^d-04|D-04]] y la *Intención* del Mapa · nació en [[3. Composiciones/6. louise/5. Feedback/07. pieza|F 07]] (medio: el bajo volvía en el tiempo 3 del c.108) · subido a alto en [[3. Composiciones/6. louise/5. Feedback/12. pieza|F 12]], después de que la S 07 moviera la figura un tiempo · **arreglado** en [[3. Composiciones/6. louise/5. Feedback/13. pieza|F 13]]: el c.108 tiene Re2 en el tiempo 1 (con Do♯2 en el 3& del c.107) ^h-08
- **H-15** · C1.violin.melodia · peso bajo · el final del coro sigue en paralelas con el bajo: quintas en c.39→40 (Si3→Re4 sobre Mi2→Sol2) y octavas en la cadencia c.41→42 (La4→Re4 sobre La2→Re2); en c.35–42 la fundamental cae en 5 de los 8 tiempos 1 · el C2 no tomó los c.35 y c.38 nuevos: quintas en c.75→76 y octavas en c.77→78 · contra *"Evitar quintas y octavas paralelas"* · nació en [[3. Composiciones/6. louise/5. Feedback/10. violin|F 10]] (alto, el coro entero: 12 de 15 fundamentales, 6 paralelas) · la primera mitad (c.27–34) quedó arreglada y bajó a medio en [[3. Composiciones/6. louise/5. Feedback/11. violin|F 11]] · bajó a bajo en [[3. Composiciones/6. louise/5. Feedback/12. pieza|F 12]] · **arreglado** en [[3. Composiciones/6. louise/5. Feedback/13. pieza|F 13]]: ni el C1 ni el C2 tienen paralelas con el bajo (c.39 y c.75 pasan por Do♯4; el bajo del c.42 es Fa♯2); la fundamental cae en 5 de 15 tiempos 1 del C1 ^h-15
- **H-21** · V2.violin.melodia · peso bajo · el V2 llega a Si5 en c.56 (tiempo 3), c.63 y c.64 (3&), un semitono por encima del Si♭5 del c.91: la nota más aguda de la pieza no está en el B2 · contra el Mapa (B2: *"el B♭ con la nota más aguda de la pieza"*) y [[3. Composiciones/6. louise/2. Decisiones#^d-08|D-08]] · nació en [[3. Composiciones/6. louise/5. Feedback/11. violin|F 11]] (medio: Do♯6 en el c.66, y 11 compases por encima de Sol5) · bajó a bajo en [[3. Composiciones/6. louise/5. Feedback/12. pieza|F 12]]: el Do♯6 salió · **arreglado** en [[3. Composiciones/6. louise/5. Feedback/13. pieza|F 13]]: lo más agudo del V2 es La5; los Si5 de c.56, 63 y 64 bajaron ^h-21
- **H-22** · B2.violin.armonia · peso medio · dos notas del violín contradicen el cifrado del B2: en el c.86 sostiene Fa5 sobre Am (contra el Mi5 de la mano derecha en el 1), y en el c.88 toca Si♭4 en el tiempo 2 contra el Si4 de la mano derecha, sobre G7: el violín dice Gm y el piano G7 · contra el cifrado y el Mapa (*"la cadena de dominantes"*) · nació en [[3. Composiciones/6. louise/5. Feedback/12. pieza|F 12]] · **arreglado** en [[3. Composiciones/6. louise/5. Feedback/13. pieza|F 13]]: Mi5 sobre Am en el c.86 y Si4 sobre G7 en el c.88 ^h-22
- **H-24** · violin.melodia · peso medio · fuera de los coros, el violín va en quintas u octavas con el bajo en 14 pares, 13 de ellos en la barra (de la última corchea al tiempo 1): V1 c.15→16, 18→19, 22→23 (voz interior, D-16); V2 c.52→53, 55→56, 58→59, 59→60, 63→64; B2 c.84→85, 86→87, dentro del c.90, 90→91; C3 c.98→99 y c.107→108, la cadencia final, con la sensible doblada en violín, mano derecha y bajo · contra *"Evitar quintas y octavas paralelas"* ([[00. Voicing e inversiones]]) · nació en [[3. Composiciones/6. louise/5. Feedback/13. pieza|F 13]] · **decisión** en [[3. Composiciones/6. louise/2. Decisiones#^d-18|D-18]]: en [[3. Composiciones/6. louise/5. Feedback/14. pieza|F 14]], 10 de las 14 se arreglaron, y las 4 que quedan (dentro del c.90, c.90→91, c.98→99 y c.107→108) se quedan a propósito ^h-24
- **H-25** · C3.piano.voicing · peso bajo · la mano derecha toca Si5 en el c.106 (tiempos 2 y 3), un semitono por encima del Si♭5 del c.91: la nota más aguda de la pieza no está en el B2 · contra el Mapa (B2: *"el B♭ con la nota más aguda de la pieza"*) y [[3. Composiciones/6. louise/2. Decisiones#^d-08|D-08]] · nació en [[3. Composiciones/6. louise/5. Feedback/13. pieza|F 13]] · **arreglado** en [[3. Composiciones/6. louise/5. Feedback/14. pieza|F 14]]: el c.106 toca Sol5; lo más agudo de la pieza es el Si♭5 del c.91 ^h-25
- **H-23** · C3.arreglo · peso medio · en la primera mitad del C3 (c.93–100), donde querías que cante el violín, algo suena por encima de él en c.93 (Sol5 de la mano derecha en el 1), c.96 (Fa♯5 de la mano derecha), c.99 (Mi5 de la guitarra) y c.100 (La4 y Fa♯4 de la guitarra); el violín va solo arriba el 42 % del tiempo · la segunda mitad la cierra el piano, como querías (arriba el 58 %) · contra [[3. Composiciones/6. louise/2. Decisiones#^d-13|D-13]] · nació en [[3. Composiciones/6. louise/5. Feedback/12. pieza|F 12]] (C1.arreglo, los tres coros) · el C1 y el C2 pasan a **decisión** en [[3. Composiciones/6. louise/2. Decisiones#^d-17|D-17]] · acotado a la primera mitad del C3 en [[3. Composiciones/6. louise/5. Feedback/13. pieza|F 13]] · sin cambios en la partitura en [[3. Composiciones/6. louise/5. Feedback/14. pieza|F 14]]; en el F 13 lo marcaste *ready*: si es *"así se queda"*, pasa a decisión · **decisión** en [[3. Composiciones/6. louise/2. Decisiones#^d-19|D-19]]: el C3 se queda como está, con el violín cantando la primera mitad y el piano cerrando la segunda ^h-23
- **H-07** · C3.energia · peso medio · el C3 subía en su segunda mitad: c.101–107 a −12.7 dB contra −14.2 dB de c.93–100 (+1.5), porque piano y guitarra de c.94–107 eran el C1 nota por nota, sin batería · nació en [[3. Composiciones/6. louise/5. Feedback/07. pieza|F 07]] · **arreglado** en [[3. Composiciones/6. louise/5. Feedback/15. energia|F 15]]: en Strudel las dos mitades quedan a 0.1 dB (8.8 y 8.9 dB escritos); el violín baja de 96 a 42 y el piano cierra, como dice [[3. Composiciones/6. louise/2. Decisiones#^d-19|D-19]]. El C3 entero sigue alto: eso es H-02 ^h-07
- **H-03** · B2.energia · peso medio · el c.82 es un hueco antes del golpe: en Strudel, 3.1 dB debajo del c.81 y 4.2 debajo del c.83; ataca en el 1 y sostiene, y en el 2 y el 3 solo atacan la caja, el tom medio (68) y dos notas sueltas de la mano izquierda; la guitarra calla de c.82 a c.84 · nació en [[3. Composiciones/6. louise/5. Feedback/06. B2|F 06]] (en el render: tiempos 2 y 3 en −22.1 y −21.0 dB, hueco – golpe – hueco con los c.83–84) · actualizado en [[3. Composiciones/6. louise/5. Feedback/15. energia|F 15]]: el c.84 ya no hace hueco · **decisión** en [[3. Composiciones/6. louise/2. Decisiones#^d-20|D-20]]: el hueco del c.82 se queda a propósito, como el respiro antes del B2 (lo dijiste después del F 15) ^h-03
- **H-02** · energia · peso alto · la curva del Mapa se oye en el B2 y no en el C3: en el audio, el B2 es el pico (−9.2 LUFS, 2.4 LU sobre el C2), pero el C3 (energía 2) suena al nivel del C2 (0.6 LU debajo) y 2.3 LU sobre el C1, con las cuatro capas y la batería en el 59 % de su energía: la batería del C3, sola, suena más que el C1 entero; el c.93 arranca al nivel del B2 · contra el Mapa y [[3. Composiciones/6. louise/2. Decisiones#^d-04|D-04]] (*"el coro con capas quitadas"*) · nació en [[3. Composiciones/6. louise/5. Feedback/06. B2|F 06]] (medio, solo C2, B2 y C3) · ampliado y subido a alto en [[3. Composiciones/6. louise/5. Feedback/07. pieza|F 07]] (en el render de MuseScore: seis secciones en 1.5 dB, el B2 debajo del C2 y sin batería desde el c.84, ninguna dinámica) · actualizado en [[3. Composiciones/6. louise/5. Feedback/15. energia|F 15]] (en lo escrito: la segunda sección más fuerte, 1.3 dB sobre el C2, con el piano en *f*) · actualizado en [[3. Composiciones/6. louise/5. Feedback/16. energia|F 16]]: medido sobre audio; la S 12 lo bajó 1.1 LU (de 1.2 sobre el C2 a 0.5 debajo). Que el C2 ya no crece es H-26 · **decisión** en [[3. Composiciones/6. louise/2. Decisiones#^d-21|D-21]]: el C3 cierra fuerte, con declive, y sí cierra en A7→D; [[3. Composiciones/6. louise/2. Decisiones#^d-04|D-04]] pasa a *Reemplazadas* (lo dijiste después del F 16) ^h-02

---

## Archivo: `3. Composiciones/6. louise/3. Sesiones/00. Adding verse.md`

```yaml
tipo: composicion
estado: boceto
fecha: 06/10/2026
```

# What

I added a new verse, but it was literally just adding some chords

## Then

Cambié la progresión, porque me gustó más crear cadencias sencillas, pero que tuvieran dirección

## Decisiones

- Caedncias y cadencia rota
- Puente automático
- Nos quedamos mayormente con acordes diatónicos
- La parte waltz se queda

Me gusta mucho como se queda la progresión.
El motivo aún no me convence y no sé bien como incluírlo o replicarlo. En la siguiente sesión haré un análisis de la estructura que tiene la melodía y las distancias de las otras notas, para entender como es que fluyen y como es que siguen.

Quizá será buena idea terminarla, y al final la paso a partitura.
También sería buena idea que si me bloqueo lo paso a partitura desde antes

---

## Archivo: `3. Composiciones/6. louise/3. Sesiones/01. Drums and separation.md`

```yaml
tipo: composicion
estado: boceto
fecha: 07/10/2026
```

# What

Hoy voy a separar todo y añadir la batería a la composición para ver como suena

## Then

Añadí la batería replicando un poco de waltz, me gustó bastante, si siento como la música comienza a fluir, pero igual y faltan un poco de cambios y crear un poco más de contraste

## Decisiones

- Caedncias y cadencia rota
- Puente automático
- Nos quedamos mayormente con acordes diatónicos
- La parte waltz se queda

Me gusta mucho como se queda la progresión.
El motivo aún no me convence y no sé bien como incluírlo o replicarlo. En la siguiente sesión haré un análisis de la estructura que tiene la melodía y las distancias de las otras notas, para entender como es que fluyen y como es que siguen.

Quizá será buena idea terminarla, y al final la paso a partitura.
También sería buena idea que si me bloqueo lo paso a partitura desde antes

---

Al final aprendí que es posible y mejor ver como se ve todo por su cuenta

---

## Archivo: `3. Composiciones/6. louise/3. Sesiones/02. Verse and choruse.md`

```yaml
tipo: composicion
estado: boceto
fecha: 08/10/2026
```

# Desription

Converting the chorus and verse with his own melodies and structure

---

I ended up just fixing some small stuff and putting everything together so it make sense

Now we'll be checking and continuing with tiny details

---

Lo que aprendí más bien fue que es mejor arreglar bien los voicings y darle un rol específico a cada parte, también hacer crecer el coro con más fuerza

---

## Archivo: `3. Composiciones/6. louise/3. Sesiones/03. Adding specific voicing.md`

```yaml
tipo: composicion
estado: boceto
fecha: 09/10/2026
```

### Description

Trying to add the voicing to the chorus to see if I can polish a motif there

After that I'll start thinking on bridges and how to join the different notes between

---

Now that the voicings are already in place in the score, is easy to understand some movements. Still have a way to go. But now I feel more in touch with the melody

Next steps will be to improve voicing over the piano, on the verse. Then move to the chorus and then start with the guitar, and also give space to the voice

---

## Archivo: `3. Composiciones/6. louise/3. Sesiones/04. Adding bridge1.md`

```yaml
tipo: composicion
estado: boceto
fecha: 13/10/2026
```

### Description

I already had the voicings and now I just added a bridge that includes the actual bridging between chorus and verse again

Now we have a first bridge and the second verse just slip through nicely

---

## Archivo: `3. Composiciones/6. louise/3. Sesiones/05. Second bridge.md`

```yaml
tipo: composicion
estado: boceto
fecha: 09/10/2026 - 14/10/26
```

### Description

After the bridge we'll have a chorus 2 and then we'll have the pick of the song

So the plan right now is to have a peak in the C2 and then the super peak at B2


```
            energía      compases          duración
Intro    ██░░░   2       c.1–10            11 s
V1       ███░░   3       c.11–26           18 s
C1       ███░░   3       c.27–42           18 s   ← más plano
B1       █░░░░   1       c.43–50            9 s   ← valle, piano solo
V2       ███░░   3       c.51–66           18 s
C2       ███▓░   3→4     c.67–82           18 s   ← sube, no cierra
B2       █████   5       c.83–             9–18 s ← pico, estrena lo nuevo
C3       ██░░░   2       —                 9–18 s ← despedida, cierra A7→D
Outro    █░░░░   1–2     —                 6–11 s
```

---

## Archivo: `3. Composiciones/6. louise/3. Sesiones/06. Second bridge.md`

Aún sigo buscando como es que se puede dar una conversación entre piano y guitarra, para que uno le dé armonía al otro y después intercambien el rol

Me gusta como va, pero no siento que realmente esté generando mucho

---

## Archivo: `3. Composiciones/6. louise/3. Sesiones/07. violin.melodia.md`

```yaml
tipo: sesion
estado: vigente
fecha: "2026-10-23"
tipo_sesion: correccion
alcance: violin.melodia
viene_de: "[[3. Composiciones/6. louise/5. Feedback/08. pieza|F 08]]"
ataca: "[[3. Composiciones/6. louise/6. Hallazgos#^h-11|H-11]]"
aplica:
commit_inicio: eca2c4f
commit_fin: 76af301
evidencia_audio:
tags:
  - curso-musica/sesion
```

# 07 · Inicio: el violín como melodía

> [!done] Registrada el 2026-10-24
> Fue **el inicio del violín como melodía**. El plan era el V1 y el C1, y el violín quedó escrito de punta a punta
> (c.11–108). La registró Claude a pedido tuyo, con el diff musical (el `.musicxml` del commit `eca2c4f` contra el
> sync del 2026-10-24) y con lo que contaste. Donde dice `____`, es tuyo.

> [!info] Preparada por Claude el 2026-10-23, a pedido tuyo
> Sale de lo que decidiste en conversación: **violín en lugar de voz, pizzicato en los versos, arco en los coros y
> el B2 sin violín.** Esta sesión escribe el **V1 (pizzicato)** y el **C1 (arco)**, y deja notas de qué pasa al
> llevarlos al V2 y al C2. *Antes de empezar*, *Antes*, *Lo que hay hoy* y *Plan* son la preparación. *Trabajo* y
> *Cierre* son tuyos.
>
> El alcance es `violin.melodia`, sin sección, porque la sesión toca dos y no hay forma documentada de nombrar
> dos secciones en un alcance.
>
> El último feedback es el [[3. Composiciones/6. louise/5. Feedback/09. C1.guitarra.voicing|F 09]], y su
> *Siguiente* es H-13, la guitarra. Esta sesión va primero porque lo elegiste así. Arreglar la guitarra después no
> le quita sitio al violín: en el C1, los compases donde la guitarra sube a su registro (c.30, 33, 38, 41) son
> justo los de H-13, y en posición abierta esos acordes quedan más abajo.

## Antes de empezar · fuera de la partitura

- [x] **D-13** en [[3. Composiciones/6. louise/2. Decisiones|Decisiones]].
  - Ojo: la línea termina en `^d-13` seguido de una comilla invertida (`` ` ``). Así Obsidian no reconoce el ID, y
    los enlaces a D-13 no llegan. Quita la comilla del final.
- [x] En *Por decidir*, marca **¿Voz o instrumental?**: D-13 la contesta.
- [x] **D-14** y **D-15** en Decisiones. Copia y llena el porqué:
  - `**D-14** · 2026-10-23 · **Violín: pizzicato en los versos, arco en los coros** · por qué: ____ · qué cambió: ____ ^d-14`
  - `**D-15** · 2026-10-23 · **B2 sin violín: el piano lleva la línea y el violín vuelve en el C3** · por qué: ____ · qué cambió: ____ ^d-15`
    → si la apuntas, aclara también en [[3. Composiciones/6. louise/2. Decisiones#^d-08|D-08]] que lo que estrena
    el B2 es la armonía (y el *ff*, si lo eliges), no una capa.
- [ ] En [[3. Composiciones/6. louise/0. Obra|0. Obra]], `violin` en `instrumentos`: todavía dice
  `[piano, guitarra, bateria]`.
- [x] Cómo convive el arco del C1 con [[3. Composiciones/6. louise/2. Decisiones#^d-06|D-06]] (*el C1 más plano*):
  **contenido** (el C1 deja al C2 adónde subir, como pide
  [[3. Composiciones/6. louise/2. Decisiones#^d-07|D-07]]) o **D-06 cambia** (va a *Reemplazadas*).
- [ ] **¿El pizzicato del verso es la melodía o acompañamiento?**
  - **Melodía:** no puede tener notas largas, porque el pizzicato se apaga enseguida. Cierra H-11 en el verso.
  - **Acompañamiento:** llena el 2 y el 3 y cierra [[3. Composiciones/6. louise/6. Hallazgos#^h-09|H-09]], pero el
    verso sigue sin melodía (H-11).

## Antes · 2 min

- **Objetivo:** el violín escrito de principio a fin en el V1 (c.11–26, pizzicato) y el C1 (c.27–42, arco).
- **Cómo sabré que funcionó:**
  - **V1:** el pizzicato ataca donde hoy no ataca nadie, y no se confunde con la guitarra;
  - **C1:** la línea tiene ritmo propio (no cambia solo cuando cambia el acorde) y nadie la dobla;
  - **del c.26 al c.27** se oye el paso de pizzicato a arco: es el escalón entre verso y coro;
  - el C1 deja adónde crecer al C2 (si elegiste *contenido*);
  - hay un `.m4a` en `render/`.

## Lo que hay hoy

### V1 · c.11–26

Lo más agudo de cada compás (p = mano derecha del piano, g = guitarra, altura real) y en qué tiempos atacan piano o
guitarra. El cifrado es el que está escrito en la partitura:

| c. | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
|---|---|---|---|---|---|---|---|---|
| Cifrado | Dmaj7 | F♯m · D | C♯° | A · A7 | Bm7 | G · G6 | Dmaj7 | F♯m · F♯m7 |
| Arriba | Re5 p | Do♯5 p g | Sol4 p g | Sol5 p | Fa♯5 p g | Re5 p g | Do♯5 p | Mi5 p |
| Ataques | 1 | 1 · 3 · 3e | 1 | 1 · 2& | 1 | 1 · 3 · 3e | 1 | 1 · 2& |

| c. | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 |
|---|---|---|---|---|---|---|---|---|
| Cifrado | Dmaj7 | F♯m | C♯° | A · A7 | Bm7 | G · G6 | D6 | F♯m |
| Arriba | Do♯5 p | Do♯5 p g | Sol4 p g | Sol5 p | Fa♯5 p g | Re5 p g | La4 p g | Mi5 p |
| Ataques | 1 · 2 · 3 | 1 · 3 · 3e | 1 · 2 · 3 | 1 · 2& | 1 · 2 · 3 | 1 · 3 · 3e | 1 · 2 · 3 | 1 · 2& |

- **En la primera mitad (c.11–18), el 2 y el 3 están vacíos:** en los c.11, 13, 15 y 17 solo suena el 1. Es
  H-09, y es el sitio natural del pizzicato.
- **En la segunda mitad**, el piano ya toca el 2 y el 3 en los compases impares (19, 21, 23, 25). Ahí el pizzicato
  coincide con él o busca otro hueco.
- **Por encima de Sol5 no toca nadie.** Piano y guitarra comparten la nota de arriba en nueve compases (los que
  dicen *p g*).
- **El pizzicato se apaga enseguida**, así que importa más *cuándo* ataca que en qué registro. Y es de la familia de
  la nylon: en el mismo tiempo y el mismo registro, se confunden.

### C1 · c.27–42

| c. | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 |
|---|---|---|---|---|---|---|---|---|
| Cifrado | Em | G | F♯m7 | Bm | Em | G | A7 | D |
| Arriba | Mi4 p | Sol4 p | Fa♯4 p | **Fa♯5 g** | Mi4 p | Sol4 p | **Mi5 g** | La4 g |

| c. | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 |
|---|---|---|---|---|---|---|---|---|
| Cifrado | Em | G | F♯m7 | Bm | Em | G | A7 | D |
| Arriba | Mi5 p | Si4 p | La4 p | **Fa♯5 g** | Sol4 p | Si4 p | **Mi5 g** | Re5 p |

- **Por encima de Fa♯5 no toca nadie** en todo el C1.
- **En negrita**, la guitarra en el registro del violín: son los voicings de H-13.
- **Por debajo**, en la primera mitad, el piano repite la nota del acorde en el 2 y el 3, entre Mi4 y Sol4. Si la
  línea baja ahí, choca con eso.
- El violín no baja de Sol3.

### Modelos en tu propia pieza

Del *Para resolverlo* de H-11 en el F 08:

- **Una capa canta:** c.85–92. La mano derecha lleva la línea y la guitarra entra debajo, en el 2.
- **Desde el motivo:** c.83–84. El mismo motivo, en Re menor y en sextas.

## V2 y C2: qué se copia y qué no

### V2 · c.51–66

- **11 de sus 16 compases son el V1 nota por nota.** Los cinco que cambian (c.51, 52, 53, 57, 58) solo cambian el
  grave: el bajo y las notas bajas de la guitarra. Arriba, lo único distinto es que el c.51 pierde el Re5 de la
  mano derecha. **El pizzicato del V1 se puede copiar tal cual**: no choca con nada nuevo.
- **Lo que la copia no decide:** si el V2 repite el pizzicato o lo varía. El V2 llega después del B1, que es piano
  solo ([[3. Composiciones/6. louise/2. Decisiones#^d-02|D-02]]): el pizzicato que vuelve es lo primero que dice
  "volvió el verso". Una copia exacta se reconoce. El F 08 notó que las copias no traen nada nuevo (H-11). Es tuyo.
 
### C2 · c.67–82

- **13 de 16 son el C1.** Cambian los tres últimos:

| c. | Cifrado en el C1 | Cifrado en el C2 | Qué cambia arriba |
|---|---|---|---|
| 80 | G | Gmaj13 | la mano derecha toca Fa♯4, Mi4 y Re5 |
| 81 | A7 | A7 | la mano derecha suma Mi5 y Sol4 |
| 82 | D | **E♭7** | la mano derecha toca Re♯5 y Si♭4: el giro hacia el Re menor del B2 |

- **Los c.67–79 se copian tal cual. Los c.80–82, no.** Lo que escribas sobre el D del c.42 va a sonar contra el E♭7
  del c.82: hay que reescribirlo.
- **El C2 tiene que crecer** ([[3. Composiciones/6. louise/2. Decisiones#^d-07|D-07]]). La copia es el punto de
  partida; cómo sube (registro, dinámica, densidad) es otra sesión.
- **El violín sale en el c.82** (D-15), justo donde está el hueco de
  [[3. Composiciones/6. louise/6. Hallazgos#^h-03|H-03]] (los tiempos 2 y 3 del c.82 casi en silencio). Decide si
  se va antes del hueco o lo atraviesa: cambia cómo se siente la entrada al B2.

## Plan

> Es más que una sesión normal. Si se acaba el tiempo, corta después del paso 4 y deja el C1 para la siguiente.

1. En MuseScore, añade el pentagrama de violín (tecla `i` → *Añadir*).
2. Marca el plan de toda la pieza en ese pentagrama, todavía sin notas: `pizz.` al empezar el V1 y el V2, `arco`
   al empezar el C1, el C2 y el C3, y el B2 en silencio. Están en la paleta *Texto*.
3. **V1, primera mitad (c.11–18):** donde el 2 y el 3 están vacíos. Escúchala con todo lo demás sonando, no sola.
4. **V1, segunda mitad (c.19–26).**
5. **C1, primera mitad (c.27–34)**, y luego **la segunda (c.35–42)**.
6. Escucha el paso del c.26 al c.27: se tiene que oír el cambio de pizzicato a arco.
7. Ligaduras de expresión y una dinámica de entrada en el arco del C1, y una dinámica para el pizzicato. Sin eso, el
   violín de MuseScore suena a máquina.
8. *Opcional:* copia el V1 al V2 tal cual, y el C1 al C2 **solo en los c.67–79**.

## Trabajo

### Intento 1

- **Qué hice:**
  - En `Louise.mscz` (la otra versión, no la fuente), el pentagrama de *Voz* pasó a ser *Violin* y quedó escrito
    del c.11 al c.82: el V1 en *pizz.*, el C1 y el B1 con arco, y el V2 y el C2 iguales al V1 y al C1.
  - En `Louise-melancolica.mscz`, la fuente, el mismo violín hasta el c.50, y de ahí **más allá del plan**: el V2
    variado, el c.82 sobre el E♭7, el B2 y el C3 nuevos, y una primera prueba de dinámicas.
  - Del *Plan*: el violín del V1 y del C1 (pasos 1, 3, 4 y 5). El 2 cambió: el B2 tiene violín y el arco
    quedó escrito como *"open"*. El 7, a medias: dinámicas de prueba y ninguna ligadura. El 8 fue más lejos: el V2
    variado en lugar de copiado, y el C2 copiado hasta el c.81.
- **Qué ocurrió:**
  - No te tomó tanto tiempo, y **lo disfrutaste mucho**.
  - Las dinámicas fueron **un intento para probar**. Las de verdad, más específicas, vienen después.
  - Al terminar pediste feedback: el F 10.

### Si falló

- Diagnóstico: `percepción / comprensión / planificación / ejecución / memoria / diseño`
- Qué cambio de estrategia:

## Cierre · 3 min

- **Qué cambié** (diff musical: `eca2c4f` contra el sync del 2026-10-24):
  - **Violín** (antes *Voz*, vacío): 220 ataques en 95 compases, c.11–47 y c.51–108. Calla en la Intro, en los
    c.48–50 y en el Outro.

    | | V1 | C1 | B1 | V2 | C2 | B2 | C3 |
    |---|---|---|---|---|---|---|---|
    | Compases | 11–26 | 27–42 | 43–47 | 51–66 | 67–82 | 83–92 | 93–108 |
    | Técnica | *pizz.* | *"open"* | arco | *pizz.* | *"open"* | arco | arco |
    | Ataques | 25 | 24 | 11 | 39 | 24 | 19 | 39 |
    | Dobles cuerdas | 10 | 0 | 0 | 13 | 1 | 7 | 8 |
    | Rango | Do♯4–Do♯5 | Si3–Si4 | Do♯4–Si4 | Do♯4–Do♯5 | Si♭3–Si4 | Si♭3–Si♭5 | Si3–Mi5 |
    | Dinámica (la prueba) | — | *p* < | *p* < | — | *p* < > | *pp* < | — |

  - **Piano:** el bajo del final entra un tiempo después. La figura que empezaba en el tiempo 3 del c.108
    (Fa♯2 + La2, Sol2, Fa♯2, Re2, Re3) ahora empieza en el 1 del c.109, y el c.108 queda sin mano izquierda.
  - **Guitarra y batería:** sin cambios.
- **Por qué:** el violín en lugar de la voz es D-13, en tus palabras: *"Me gusta la melancolía o brillantez que
  puede llegar a adquirir ____"*. El bajo del final, un tiempo después: ____
- **Commit:** `76af301`,
  `Louise 07: violín de punta a punta, pizz. en los versos y arco en los coros [H-11]`.
  El `.mscz` de hoy (blob `69831a3`, guardado el 2026-10-24 a las 10:42) suena igual al que evaluó el F 10
  (`4cc453b`): esta mañana solo se volvió a guardar.
- **Audio:** no hay.
- **¿Pido feedback?** sí: el F 10, con el alcance `violin`.

## Después de esta

- **08 · `C1.violin.melodia`:** H-15, el *Siguiente* del F 10. La guitarra del C1 (H-13), que estaba planeada como
  08, sigue en cola.
- El V2 quedó contestado: variación, no copia. El C2 sigue siendo copia del C1, y eso es H-16.

---

## Archivo: `3. Composiciones/6. louise/3. Sesiones/08. C1.violin.melodia.md`

```yaml
tipo: sesion
estado: vigente
fecha: 2026-10-24
tipo_sesion: correccion
alcance: C1.violin.melodia
viene_de: "[[3. Composiciones/6. louise/5. Feedback/10. violin|F 10]]"
ataca: "[[3. Composiciones/6. louise/6. Hallazgos#^h-15|H-15]]"
aplica:
commit_inicio: 76af301
commit_fin: 2f1566c
evidencia_audio:
tags:
  - curso-musica/sesion
aliases:
```

# 08 · El coro deja de seguir al bajo

> [!done] Registrada el 2026-10-24
> Fue más allá de su alcance: el plan era el C1 y **cambiaste casi todo el violín**, más dinámicas, también en el
> piano. La registró Claude a pedido tuyo, con el diff musical (el `.musicxml` de `76af301` contra lo guardado a
> las 12:29), la lista de dinámicas de cada parte (el diff musical no las ve) y lo que contaste. Donde dice `____`,
> es tuyo.

> [!info] Preparada por Claude el 2026-10-24, a pedido tuyo
> Esta sesión resuelve el F 10. El feedback abrió seis hallazgos, pero una sesión ataca uno solo
> ([[6. Práctica/0. Flujos]], *Feedback de obra*): esta va por su *Siguiente*, **H-15**. En el coro, la línea del
> violín es el bajo dos octavas arriba. Los otros cinco están en *Triaje*, para que ninguno se quede sin estado.
>
> *Antes de empezar*, *Antes*, *Lo que hay hoy*, *Tu modelo: el C3* y *Plan* son la preparación. *Trabajo* y
> *Cierre* son tuyos.
>
> Las dinámicas quedan fuera a propósito. En la [[3. Composiciones/6. louise/3. Sesiones/07. violin.melodia|S 07]]
> fueron una prueba, y las de verdad son otra sesión.

## Antes de empezar · fuera de la partitura

- [x] **El commit de la S 07:** `76af301`. La versión que evaluó el F 10 ya tiene a dónde volver.
- [x] **D-13:** quita la comilla invertida del final (`` ^d-13` ``). Mientras siga ahí, ningún enlace a D-13 llega.
- [ ] **D-14** sigue sin escribir: la S 07 la marcó ✓, pero no está en Decisiones.
  - `**D-14** · 2026-10-23 · **Violín: pizzicato en los versos, arco en los coros** · por qué: ____ · qué cambió: ____ ^d-14`
- [x] **D-15** no se cumplió: la partitura tiene violín en todo el B2. Si te quedas con eso, escribe la línea que
  propone el F 10: `D-NN · El violín toca en el B2 y llega a Si♭5 en el c.91 · porque ____`.
- [x] Añade `violin` a `instrumentos` en [[3. Composiciones/6. louise/0. Obra|0. Obra]].

### Triaje del F 10

Cada hallazgo nuevo sale con un estado: lo corriges (y en qué sesión), es a propósito (una `D-NN`, y pasa a
`decisión`) o cambia el Mapa.

| Hallazgo                                                        | En corto                                                          | La salida más barata                                   | Tu triaje                                                                              |
| --------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| [[3. Composiciones/6. louise/6. Hallazgos#^h-15\|H-15]] · alto  | el coro es el bajo dos octavas arriba                             | —                                                      | **esta sesión**                                                                        |
| [[3. Composiciones/6. louise/6. Hallazgos#^h-17\|H-17]] · alto  | el violín suena más en los coros que en el B2                     | dinámicas desde la energía del Mapa                    | corregir después, en `violin.energia`: lo dijiste hoy (las de la S 07 eran una prueba) |
| [[3. Composiciones/6. louise/6. Hallazgos#^h-14\|H-14]] · medio | el *pizz.* del verso acompaña y no canta                          | una `D-NN`, si acompaña a propósito                    | ____                                                                                   |
| [[3. Composiciones/6. louise/6. Hallazgos#^h-16\|H-16]] · medio | el C2 es el C1 copiado                                            | ninguna: va después de esta, porque parte del C1 nuevo | ____                                                                                   |
| [[3. Composiciones/6. louise/6. Hallazgos#^h-18\|H-18]] · medio | el B1 ya no es piano solo                                         | una `D-NN`, si el violín se queda                      | ____                                                                                   |
| [[3. Composiciones/6. louise/6. Hallazgos#^h-19\|H-19]] · bajo  | *"open"*, el *p* del c.43, reguladores sin llegada, sin ligaduras | `violin.notacion`: nada cambia una nota                | ____                                                                                   |

## Antes · 2 min

- **Objetivo:** reescribir el violín del C1 (c.27–42) para que deje de ser el bajo y tenga notas, ritmo y un gesto
  propios.
- **Cómo sabré que funcionó** (la vara del F 10, con los números de hoy):
  - en el tiempo 1, la fundamental en **menos de la mitad** de los compases (hoy, 12 de 15);
  - **ninguna octava paralela** con el bajo (hoy, 5, y una quinta);
  - la línea **no cambia solo cuando cambia el acorde** (hoy, en 12 de 15 compases);
  - **un gesto propio que vuelve**, al menos dos veces en el coro;
  - funciona **con todo sonando**, no solo con el violín;
  - hay un `.m4a` en `render/`.

## Lo que hay hoy · C1, c.27–42

| c. | Cifrado | Bajo | Violín (tiempo) | En el 1, contra el bajo | Mano derecha en el 2 y el 3 |
|---|---|---|---|---|---|
| 27 | Em | Mi2 | Mi4 (1, ligada al 28) | **fundamental** | Mi4 · Mi4 |
| 28 | G | Sol2 | — (sigue el Mi4) | 6ª | Sol4 · Sol4 |
| 29 | F♯m7 | Fa♯2 | Fa♯4 (1) | **fundamental** | Fa♯4 · Fa♯4 |
| 30 | Bm | Si2 | Fa♯4 (1) · Re4 (2&) | 5ª | — (la guitarra) |
| 31 | Em | Mi2 | Mi4 (1) · Mi4 (2&) | **fundamental** | Mi4 · Mi4 |
| 32 | G | Sol2 | Sol4 (1) · Si4 (3) | **fundamental** | Sol4 · Sol4 |
| 33 | A7 | La2 | La4 (1) | **fundamental** | La4 (2) · La4 (3&) |
| 34 | D | Re2 | Re4 (1) · La4 (2&) | **fundamental** | — (la guitarra) |
| 35 | Em | Mi2 | Mi4 (1) · Si3 (3) | **fundamental** | Mi4+Mi5 · Mi4+Mi5 |
| 36 | G | Sol2 | Sol4 (1) | **fundamental** | Re4+Si4 · Re4+Si4 |
| 37 | F♯m7 | Fa♯2 | Fa♯4 (1) | **fundamental** | Mi4+La4 · Mi4+La4 |
| 38 | Bm | Si2 | Si4 (1) · Fa♯4 (2&) | **fundamental** | Re4+Fa♯4, desde el 1 |
| 39 | Em | Mi2 | Mi4 (1) · Si3 (3) | **fundamental** | Sol4 · Sol4 |
| 40 | G | Sol2 | Re4 (1) | 5ª | Re4+Si4 · Re4+Si4 |
| 41 | A7 | La2 | Fa♯4 (1) · La4 (2) · La4 (3&) | 13ª | La4+Do♯5 (2) · La4+Do♯5 (3&) |
| 42 | D | Re2 | Re4 (1) | **fundamental** | Re4+Re5, desde el 1 |

- **12 de los 15 tiempos 1 son la fundamental**, la misma nota que el bajo, dos octavas arriba.
- **Donde ataca fuera del 1, muchas veces lo hace con la mano derecha.** En el c.41, el violín toca La4 en el 2 y
  en el 3&, igual que la mano derecha. En el c.33, los dos tienen La4.
- **Vive dentro de la mano derecha.** El violín va de Si3 a Si4. La mano derecha toca entre Mi4 y Sol4 en la primera
  mitad y sube hasta Mi5 en la segunda. Por encima de Fa♯5 no toca nadie en todo el coro.

**El bajo, paso a paso** (para revisar el movimiento contrario):

> Mi ↑ Sol ↓ Fa♯ ↑ Si ↓ Mi ↑ Sol ↑ La ↓ Re ↑ · Mi ↑ Sol ↓ Fa♯ ↑ Si ↓ Mi ↑ Sol ↑ La ↓ Re

**Las notas de cada acorde.** El bajo ya dice la fundamental:

| Acorde | Fundamental | 3ª | 5ª | 7ª |
|---|---|---|---|---|
| Em | Mi | Sol | Si | — |
| G | Sol | Si | Re | — |
| F♯m7 | Fa♯ | La | Do♯ | Mi |
| Bm | Si | Re | Fa♯ | — |
| A7 | La | Do♯ | Mi | Sol |
| D | Re | Fa♯ | La | — |

## Tu modelo: el C3

El C3 tiene **el mismo cifrado y el mismo bajo** que el C1, y piano y guitarra son el C1 nota por nota en los
c.94–107 (H-07). Lo único distinto es el violín, y ese violín ya hace lo que hoy le falta al C1. Lo escribiste tú:

```music-abc
X:1
T:Primera mitad como suena hoy: el C1 (c.27–34) y el C3 (c.93–100) sobre el mismo bajo
M:3/4
L:1/8
K:D
V:1 clef=treble name="Violín C1"
V:2 clef=treble name="Violín C3"
V:3 clef=bass name="Bajo"
[V:1] "^c.27 / 93 Em"E6- | "^28 / 94 G"E6 | "^29 / 95 F#m7"F6 | "^30 / 96 Bm"F3 D3 | "^31 / 97 Em"E3 E3 | "^32 / 98 G"G4 B2 | "^33 / 99 A7"A6 | "^34 / 100 D"D3 A3 |]
[V:2] [B,G]6 | [Gd]2 F2 G2 | A2 C3 D | [DF]3 B3 | [Ge]6 | [Gd]2 F2 G2 | A2 C2 E2 | F E D2 F2 |]
[V:3] E,,6 | G,,6 | F,,6 | B,,6 | E,,6 | G,,6 | A,,6 | D,,6 |]
```

```music-abc
X:2
T:Segunda mitad como suena hoy: el C1 (c.35–42) y el C3 (c.101–108); en el c.108 el C3 no tiene bajo (H-08)
M:3/4
L:1/8
K:D
V:1 clef=treble name="Violín C1"
V:2 clef=treble name="Violín C3"
V:3 clef=bass name="Bajo"
[V:1] "^c.35 / 101 Em"E4 B,2 | "^36 / 102 G"G6 | "^37 / 103 F#m7"F6 | "^38 / 104 Bm"B3 F3 | "^39 / 105 Em"E4 B,2 | "^40 / 106 G"D6 | "^41 / 107 A7"F2 A3 A | "^42 / 108 D"D6 |]
[V:2] [B,G]6 | G2 B2 d2 | F2 G3 A | [DB]6 | B2 A3 E | d2 B2 G2 | E G A2 c2 | [Fd]6 |]
[V:3] E,,6 | G,,6 | F,,6 | B,,6 | E,,6 | G,,6 | A,,6 | D,,6 |]
```

| | C1 hoy | C3 |
|---|---|---|
| La fundamental en el 1 | 12 de 15 | 6 de 16 |
| Ataques fuera del 1 | 9 de 24 | 21 de 39 |
| Paralelas con el bajo | 6 | 1 |
| A octavas exactas del bajo | 65 % del tiempo | 39 % |
| Movimientos por grado conjunto | 5 de 23 | 16 de 38 |

*Las tres últimas filas son del F 10.*

- **En el 1, la 3ª o la 5ª:** Sol sobre Em (c.93, 101), Re sobre G (c.94, 98, 106), La sobre F♯m7 (c.95), Fa♯
  sobre D (c.100).
- **Ataca en el 2 y el 3**, y no espera al acorde siguiente: tres negras en c.94, 98, 99, 102 y 106.
- **Tiene una célula que vuelve:** negra · negra con puntillo · corchea, en c.95, 103 y 105. Es el *gesto propio*
  que pide la vara.
- **Se mueve por grado:** Fa♯–Mi–Re (c.100), Fa♯–Sol–La (c.103).

El C1 no tiene que ser el C3. El Mapa quiere un C1 más plano que deje adónde crecer
([[3. Composiciones/6. louise/2. Decisiones#^d-06|D-06]]), y el C3 es la despedida. Lo que sirve del C3 es la
manera de hacerlo, no sus notas.

## Plan

> **Fuera de esta sesión:** el C2 (H-16, parte de lo que escribas hoy), las dinámicas (H-17), *"open"* y las
> ligaduras (H-19), el *pizz.* del verso (H-14) y el B1 (H-18). Si algo de eso te pide la mano, anótalo en
> *Trabajo* y sigue.

1. **Escucha antes de tocar.** El C1 dos veces: primero el violín solo (en el mezclador, *S* en el violín) y luego
   con todo. Después, el C3 igual. Lo que mide el F 10 se tiene que oír antes de cambiar nada.
2. **C1, primera mitad (c.27–34).** Compás por compás, con la tabla de arriba:
   1. **El tiempo 1.** Donde dice *fundamental*, prueba otra nota del acorde. No hace falta cambiarlas todas: basta
      con que queden menos de la mitad.
   2. **La dirección.** Revisa cada paso contra *El bajo, paso a paso*. Si los dos suben o bajan la misma distancia,
      es una paralela: prueba ir al revés o quedarte quieto
      ([[04. Reglas de voicing]]: *preferir movimiento contrario*).
   3. **El ritmo.** Que en la mitad de los compases ataque en el 2, el 2& o el 3, o que entre antes del 1
      (anacrusa). Ojo con atacar justo donde ataca la mano derecha y en su misma nota: ahí se tapan.
   4. **El gesto.** Elige una célula, rítmica o de intervalos ([[1. Composición melódica]], *Células melódicas*), y
      haz que aparezca al menos dos veces en estos ocho compases. Una opción del F 10 es la cabeza del motivo
      (La–Sol–Fa♯): el violín no la toca en ningún compás de la pieza ([[0. Enlaces 2.0 y motivos]]).
   5. **Escúchala con todo sonando.**
3. **C1, segunda mitad (c.35–42).** Las mismas cuatro revisiones. La célula vuelve, pero variada: tu nota de melodía
   dice qué se mantiene y qué cambia en la segunda vez (*Qué significa componer melódicamente en forma AB*). Aquí la mano derecha ya
   toca dos notas en el 2 y el 3: si el violín va por dentro, se tapa. Pasar por encima de ella es una opción.
4. **Las costuras.** Escucha del c.26 al c.27 (de *pizz.* a arco) y del c.42 al c.43 (entra el B1). Si cambiaste el
   final del c.42, que siga llevando al c.43.
5. **Cuenta contra la vara de *Antes*:** fundamentales en el 1, paralelas, el gesto. Si dudas, el conteo exacto es
   el feedback.
6. **Exporta el audio** a `render/`.

## Trabajo

### Intento 1

- **Qué hice:** cambié casi todo lo del violín, y puse dinámicas con más intención.
  - **C1, primera mitad:** el tiempo 1 deja la fundamental y toma la 3ª (c.27, 29, 31, 32, 33). La segunda mitad
    (c.35–42) no se tocó.
  - **B1:** el violín sale; vuelve a ser piano solo.
  - **V2:** reescrito entero, todavía en *pizz.*, arriba: de La4 a Do♯6.
  - **C2:** los c.67–73 siguen al C1 nuevo, con más movimiento, y los c.79–82 son nuevos, en dobles y triples
    cuerdas.
  - **B2:** los c.85–91, reescritos como acordes de dos y tres notas.
  - **Dinámicas:** en el violín salen el *p* del c.43 y el *pp* del c.83, y entra *mf* < en el C3 (c.94–105). En
    el piano entran *f* < en el B1 (c.43–49), > y *mp* < en el V2 (c.51–66), > y *mp* < en el C2 (c.67–82),
    *f* < en el B2 (c.83–92) y *mp* < → *mf* < en el C3 (c.95–109).
- **Qué ocurrió:**
  - **El V1 lo acompaña el *pizz.***, y **en el V2 ya se siente una melodía**.
  - **El B2 queda en puro piano.**
  - Pediste feedback completo del violín: el F 11.

### Si falló

- Diagnóstico: `percepción / comprensión / planificación / ejecución / memoria / diseño`
- Qué cambio de estrategia:

## Cierre · 3 min

- **Qué cambié** (diff musical: `76af301` contra lo guardado el 2026-10-24 a las 12:29, blob `d6c13e5`):
  - **Violín:** 78 cambios en 44 compases. Pasa de 220 a 247 ataques y de 95 a 90 compases con sonido.

    | | V1 | C1 | B1 | V2 | C2 | B2 | C3 |
    |---|---|---|---|---|---|---|---|
    | Compases que cambiaron | — | 6 de 16 | 5 (sale) | 16 de 16 | 10 de 16 | 7 de 10 | — |
    | Ataques, antes → ahora | 25 | 24 → 25 | 11 → 0 | 39 → 40 | 24 → 32 | 19 | 39 |
    | Rango, ahora | Do♯4–Do♯5 | Si3–Si4 | — | La4–Do♯6 | Si3–Mi5 | Si♭3–Si♭5 | Si3–Mi5 |
    | Dinámica, ahora | — | *p* < | — | — | *p* < … > | — | *mf* < |

  - **Piano:** solo dinámicas (las de *Qué hice*). Ninguna nota cambió.
  - **Guitarra y batería:** sin cambios.
- **Por qué:** ____
- **Commit:** `2f1566c`, `Louise 08: el violín se reescribe casi entero; dinámicas en violín y piano [H-15]`.
  La partitura (`d6c13e5`) entró un minuto antes, en `361985f` (*Louise en Strudel: la partitura entera*); este
  commit lleva las notas.
- **Audio:** no hay.
- **¿Pido feedback?** sí: el F 11, con el alcance `violin`.

## Después de esta

- **09 · `C2.violin.arreglo`:** H-16. El C2 parte del C1 nuevo y tiene que crecer
  ([[3. Composiciones/6. louise/2. Decisiones#^d-07|D-07]]).
- **`violin.energia`:** H-17, las dinámicas de verdad, desde la energía del Mapa.
- **Las baratas:** H-14 y H-18 se cierran con una línea en Decisiones cada una, si los dejas como están.
- **En cola:** `violin.notacion` (H-19) y la guitarra del C1 (`C1.guitarra.voicing`, H-13).

---

## Archivo: `3. Composiciones/6. louise/3. Sesiones/09. Violin.melodia.md`

```yaml
tipo: sesion
estado: vigente
fecha: 2026-10-25
tipo_sesion: correccion
alcance: violin.melodia
viene_de: "[[11. violin]]"
ataca: "[[3. Composiciones/6. louise/6. Hallazgos#^h-15|H-15]]"
aplica:
commit_inicio: 76af301
commit_fin: 2f1566c
evidencia_audio:
tags:
  - curso-musica/sesion
aliases:
```



---

## Archivo: `3. Composiciones/6. louise/3. Sesiones/10. energia.md`

```yaml
tipo: sesion
estado: vigente
fecha: 2026-11-01
tipo_sesion: libre
alcance: energia
viene_de:
ataca:
aplica:
commit_inicio: 45d20fc
commit_fin: bc60d64
evidencia_audio:
tags:
  - curso-musica/sesion
aliases:
```

# 10 · El V1 y el C1 quedan en Strudel

> [!done] Registrada el 2026-11-01
> La registró Claude a pedido tuyo. Todo sale de los Strudel de producción
> (`4. Instrumento/2. Strudel/10. Folk/Louise/9.produccion/`): lo que te dio Claude contra lo que dejaste, evaluado
> compás por compás. La partitura no cambió en esta sesión, así que no hay diff musical. Donde dice `____`, es tuyo.
>
> **El alcance va sin sección.** La sesión es el V1 y el C1, y `sección.instrumento.aspecto` no tiene cómo decir
> dos secciones. Si prefieres otro nombre, cámbialo.

## Antes · 2 min

- **Objetivo:** producir el V1 y el C1 en Strudel, una sección por archivo: dinámicas, batería y efectos. Lo que
  quede se pasa a mano a MuseScore.
- **Cómo sabré que funcionó:** ____

## Trabajo

### Intento 1 · el V1 (c.11–26), en `1.v1`

Del 2026-10-31 al 2026-11-01. Contra la versión que te dio Claude a las 13:09 del 31, que ya traía el final del
Intro como quedó en `0.intro`.

| Qué | Antes | Ahora | Dónde |
|---|---|---|---|
| Violín, velocidad | 80, la de MuseScore | **127** | todo el V1 |
| Violín, paneo | centro (0.5) | **0.8** | desde el c.16 |
| Guitarra, velocidad | 80 | **90** | todo el V1 |
| Piano, paneo | centro (0.5) | **0.1** | todo el V1 |
| Piano, reverb | ninguna | **room 1**, roomsize 0.5 | todo el V1 |
| Bombo | FUERTE (103) | **NORMAL (90)** | todo el V1 |
| Pandereta, velocidad | NORMAL (0.71) | **0.27** · **0.5** | c.11–18 · c.19–26 |
| Pandereta, golpes | en el 3 | **en el 2 y el 3** | c.23–26 |
| Cencerro, velocidad | 0.6 · 1 | **0.27** (como ya estaba en c.19–26) | c.11–14 · c.15–18 |
| Cencerro, golpes | en el 2 | **en el 1 y el 2&** | c.23–26 |

- **Qué ocurrió:** lo diste por listo. ____

### Intento 2 · el C1 (c.27–42), en `2.c1`

El 2026-11-01. Contra la versión del commit `62b82c6`, que ya traía el final del V1 como quedó en `1.v1`.

| Qué | Antes | Ahora | Dónde |
|---|---|---|---|
| Violín, velocidad | 65 | **70** · **85** | c.31–36 · c.37–42 (c.27–30 siguen en 49, 55, 57 y 62) |
| Guitarra, velocidad | 80 | **100** | todo el C1 |
| Piano, reverb | ninguna | **room 1**, roomsize 0.5 | todo el C1 |
| Bombo, caja, pandereta y palmas | FUERTE (103) | **SUAVE (68)** | todo el C1 |
| Toms del fill | MEDIO (80) | **FUERTE (103)** | c.42 |
| Crash de la entrada al B1 | MEDIO (80) | **FUERTE (103)** | c.43 |

- **Qué ocurrió:** lo diste por listo, y el siguiente es el B1. ____

### Si falló

- Diagnóstico: `percepción / comprensión / planificación / ejecución / memoria / diseño`
- Qué cambio de estrategia:

## Cierre · 3 min

- **Qué cambié:** las dos tablas de *Trabajo*. En corto:
  - **El V1** sube al violín y a la guitarra, abre el piano a la izquierda con reverb y le baja el bombo. La
    pandereta y el cencerro pasan a fondo (0.27) y crecen en la segunda mitad: la pandereta sube a 0.5, y en
    los c.23–26 los dos suman golpes.
  - **El C1** sube a la guitarra (100) y al violín en dos escalones (70 y 85), pone reverb al piano y baja la batería
    a SUAVE. Solo el fill del c.42 y el crash del c.43 suben a FUERTE.
- **Al cerrar, Claude pasó el V1 y el C1 a todos los archivos que los tocan**, para que suenen igual en todos:

  | Archivo | Qué recibió |
  |---|---|
  | `0.intro` | el V1 de c.11–18. El piano del Intro sigue sonando igual, pero sus efectos ya no están en la función `piano`: están escritos en `INTRO`, compás por compás |
  | `1.v1` | el C1 de c.27–34. Además, el violín vuelve a leer `dinamica` y `efectos`, con lo que sonaba (127, y paneo 0.5 en c.11–15 y 0.8 en c.16–26) |
  | `2.c1` | la guitarra de c.23–26 a 90, y el violín del V1 a 0.8 |
  | `3.b1` | el C1 de c.35–42 y el crash del c.43; los efectos van por sección, como en los otros |

  Se comprobó evaluando los cuatro archivos: los compases que comparten tienen las mismas notas, velocidades y
  efectos. Solo hay una diferencia: el piano del Intro va por su propio canal de efectos (`orbit` 3), como en
  `1.v1`, y en c.1–10 eso no cambia lo que suena.
- **Por qué:** ____
- **Commit:** `bc60d64`, `Louise 10: el V1 y el C1 quedan en Strudel, y pasan a los archivos que los tocan`. Lleva
  los cuatro Strudel y el `.musicxml` que regeneró el sync (solo cambió la fecha). Esta nota entró en el commit
  siguiente.
- **Audio:** no hay.
- **¿Pido feedback?** ____

## Después de esta

- **El B1, en `3.b1`.** Ya empieza con el final del C1 y el crash del c.43 como quedaron.

---

## Archivo: `3. Composiciones/6. louise/3. Sesiones/12. energia.md`

```yaml
tipo: sesion
estado: vigente
fecha: 2026-11-03
tipo_sesion: correccion
alcance: energia
viene_de: "[[3. Composiciones/6. louise/5. Feedback/15. energia|F 15]]"
ataca: "[[3. Composiciones/6. louise/6. Hallazgos#^h-02|H-02]]"
aplica:
commit_inicio: 90cf647
commit_fin: ce608ea
evidencia_audio: "4. Instrumento/2. Strudel/10. Folk/Louise/9.produccion/render/2026-11-03 Louise - pieza.wav"
tags:
  - curso-musica/sesion
aliases:
```

# 12 · El C3 baja, el violín del B2 ya no cae y el C2 entra más fuerte

> [!done] Registrada el 2026-11-03
> La registró Claude a pedido tuyo, con el `git diff` de los Strudel de producción
> (`4. Instrumento/2. Strudel/10. Folk/Louise/9.produccion/`). Sale del
> [[3. Composiciones/6. louise/5. Feedback/15. energia|F 15]], que recomendaba el C3
> ([[3. Composiciones/6. louise/6. Hallazgos#^h-02|H-02]]). La partitura no cambió en esta sesión. Donde dice `____`,
> es tuyo.
>
> **La S 11 sigue sin nota.** Sus commits (`b78ebb2` a `2fa0e6b`) son el B1, el V2, el C2, el B2 y el C3 en Strudel.

## Antes · 2 min

- **Objetivo:** ____ <!-- el F 15 pedía el C3 (H-02); la sesión tocó el C3, el final del B2 y el principio del C2 -->
- **Cómo sabré que funcionó:** ____

## Trabajo

Contra el commit `90cf647`, el que había al empezar. En el orden en que guardaste.

### Intento 1 · el final del B2 (c.89–92), en `6.b2` · 11:48

| Qué | Antes | Ahora | Dónde |
|---|---|---|---|
| Violín, velocidad | 68 · 54 · 50 · 49 | **77 · 85 · 90 · 77** | c.89–92 |

El regulador de MuseScore (*f* en el c.83, > hasta el c.91) llega hasta el c.88 (77), y desde ahí el violín vuelve
a subir hasta el B♭ del c.91.

- **Qué ocurrió:** ____

### Intento 2 · el C3 (c.93–108), en `7.c3` · 11:58

| Qué | Antes | Ahora | Dónde |
|---|---|---|---|
| Piano, velocidad | 127 · 127-80-83 · 86-89-92 · **96** | **100 · 90 · 80 · 80** | c.93 · c.94 · c.95 · c.96–108 |
| Violín, velocidad | 82 · 96 · 96 · 96 · 96 · 96-95-93 · 91-89-87 · 86→82 · 80 | **96 · 96 · 82 · 82 · 77 · 77 · 77 · 77 · 77** | c.93–101, uno por compás |
| Bombo | NORMAL (90) | **MEDIO (80)** | todo el C3 |
| Crash del c.93 | en el 1 y en el 3& | **solo en el 1** | c.93 |
| Toms | FUERTE (103) | **NORMAL (90)** | c.97, 99 y 107 |

De c.102 a c.108 el violín sigue como estaba (75 → 42).

- **Qué ocurrió:** ____

### Intento 3 · el principio del C2 (c.67–74), en `4.v2` · 12:00

| Qué | Antes | Ahora | Dónde |
|---|---|---|---|
| Violín, velocidad | 71 | **65** | c.72–74 |
| Violín, reverb | room 1, roomsize 0.5 | **ninguna** | c.67–74 |
| Bombo | MEDIO (80) | **FUERTE (103)** | c.67–74 |
| Caja | SUAVE (68) | **FUERTE (103)** | c.67–74 |
| Pandereta | SUAVE (68) | **NORMAL (90)** | c.72–74 |
| Cencerro | GHOST (34) | **SUAVE (68)** | c.67–74 |
| Shaker | GHOST (34) | **SUAVE (68)** | c.68, 70, 72 y 74 |

Además se fueron dos líneas vacías en esos compases (la segunda caja y los segundos toms); no cambian lo que suena.

- **Qué ocurrió:** ____

### Si falló

- Diagnóstico: `percepción / comprensión / planificación / ejecución / memoria / diseño`
- Qué cambio de estrategia:

## Cierre · 3 min

- **Qué cambié:** las tres tablas de *Trabajo*. En corto:
  - **El C3** baja el piano de *f*–*ff* a 100 → 90 → 80, el violín a 82 y 77 desde el c.95, el bombo y los toms un
    escalón, y deja un solo crash en la entrada.
  - **El B2** deja de apagar el violín al final: en vez de 68 → 49, sube de 77 a 90 hacia el B♭ del c.91.
  - **El C2** entra más fuerte: bombo y caja a FUERTE, pandereta, cencerro y shaker un escalón arriba, en c.67–74.
- **Al cerrar, Claude pasó lo que cambiaste a los archivos que comparten esos compases**, para que suenen igual en
  todos:

  | Archivo | Qué recibió |
  |---|---|
  | `5.c2` | el C2 de c.67–74, como quedó en `4.v2`. Las líneas de bombo, caja, pandereta, cencerro y shaker se partieron en dos: c.67–74 con la velocidad nueva y c.75–82 con la de antes |
  | `6.b2` | el C3 de c.93–100, como quedó en `7.c3` |
  | `7.c3` | el violín de c.89–92, como quedó en `6.b2` |

  Se comprobó evaluando los ocho archivos: los compases que comparten tienen las mismas notas, velocidades y efectos.
  Solo hay una diferencia: en `5.c2` el violín de c.67–74 conserva `roomsize: 0.5`, pero con `room` en 0 no suena.

  > [!note] Después del F 16: el C2 entero
  > Al cerrar, la batería de c.75–82 quedó como estaba, y el
  > [[3. Composiciones/6. louise/5. Feedback/16. energia|F 16]] encontró que el C2 ya no crecía
  > ([[3. Composiciones/6. louise/6. Hallazgos#^h-26|H-26]]). Después, a pedido tuyo, Claude subió también c.75–82,
  > igual que c.67–74: bombo y caja a FUERTE, pandereta a NORMAL, cencerro y shaker a SUAVE. Va en `5.c2`, donde cada
  > instrumento vuelve a ser una sola línea, y en `6.b2`. Platillos, toms y el redoble de caja del c.82 no cambian. En
  > el c.82 solo sube el cencerro del 1, así que el respiro de
  > [[3. Composiciones/6. louise/2. Decisiones#^d-20|D-20]] (el 2 y el 3) queda igual. Comprobado evaluando los
  > archivos: `4.v2`, `5.c2` y `6.b2` siguen sonando igual donde comparten compases.
- **Por qué:** ____
- **Commit:** `ce608ea`, `Louise 12: el C3 baja, el violín del B2 ya no cae y el C2 entra más fuerte [H-02]`. Lleva
  los cuatro Strudel que cambiaron (`4.v2`, `5.c2`, `6.b2` y `7.c3`). Esta nota entró en el commit siguiente, con el
  F 16.
- **Audio:** el primero de la producción. Claude lo renderizó en strudel.cc desde `ce608ea`, con los mismos sonidos
  (General MIDI, piano y AkaiLinn), una sección por archivo, y armó la pieza entera. Está en
  `4. Instrumento/2. Strudel/10. Folk/Louise/9.produccion/render/` (git no lo guarda):

  | Archivo | Qué |
  |---|---|
  | `2026-11-03 Louise - pieza.wav` | c.1–111, cada sección con la cola de la anterior encima (2:07) |
  | `2026-11-03 Louise - 0. Intro.wav` … `8. Outro.wav` | cada sección sola, con dos compases de cola |

- **¿Pido feedback?** Sí: el [[3. Composiciones/6. louise/5. Feedback/16. energia|F 16]], sobre estos audios.
