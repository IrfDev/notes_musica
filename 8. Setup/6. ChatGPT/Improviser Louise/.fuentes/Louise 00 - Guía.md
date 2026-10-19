# Louise · guía del proyecto

> [!info] Para qué es este archivo
> Es la **primera fuente** del proyecto *Improviser Louise* de ChatGPT: qué es Louise, cómo se ha
> trabajado, cómo está hoy compás por compás, qué está decidido y qué falta, y dónde está cada detalle.
> Lo escribió Claude el 2026-10-18 a partir de la bóveda; se sube con `_scripts/generar-chatgpt.py`
> (ver [[8. Setup/6. ChatGPT/README|ChatGPT]]).

---

## 1. Qué es Louise

| | |
|---|---|
| **Qué** | un vals instrumental (la voz está por decidir), la obra activa del usuario |
| **Tonalidad** | Re mayor (el B2 pasa a una armadura de un bemol: Re menor / Fa mayor) |
| **Compás y tempo** | 3/4, ♩ = 160. Un compás dura **1.125 s**; 8 compases son 9 s, 16 son 18 s |
| **Instrumentos** | piano, guitarra nylon y batería (bombo, caja, toms, platillos, shaker, pandereta, cencerro, palmas). La partitura tiene además un pentagrama de **Voz, vacío** |
| **Largo hoy** | 106 compases escritos (≈ 2:00); faltan el outro y cerrar el final |
| **Origen** | replicar un vals tipo *Elouise* de The Lumineers, con una progresión que le gustó y una melodía que sacó en el piano a partir de su acorde favorito, **B♭** |
| **Estilo** | folk, en la línea de The Lumineers (de ahí el vals) |
| **Inicio** | 2026-10-02 |
| **Estado** | `boceto` en el frontmatter; en la práctica, en revisión del B2 y del C3 |

**La firma de la pieza:** la cadencia que llega y se escapa. El verso nunca cierra en el I (V7→vi, c.14→15
y c.22→23) y el coro sí (A7→D, c.33–34 y c.41–42). En sus palabras: *cada vez que llega a D se escapa*.

**El motivo:** La–Sol–Fa♯–Re–Fa♯ (A4 G4 F♯4 D4 F♯4), en 2 compases, con los pesos 0.5 · 0.75 · 0.5 · 0.75 · 1.
Ya existía en 4/4 en `happy_beats` (house) antes de Louise. Suena en los c.1–2, 6–7 y 46–47, siempre
igual y siempre sobre D.

## 2. Qué hay en cada fuente

| Fuente | Responde |
|---|---|
| **00 - Guía** | este archivo |
| **01 - Nota de obra y sesiones** | la nota principal (origen, material del 5 oct, **Decisiones**, **Por decidir**, **Problemas abiertos**, cronograma, cierre) y las notas 1–7 que el usuario escribió al terminar cada sesión |
| **02 - Guías de IA** | *Recursos de energía y forma* (la curva de energía, el inventario de lo gastado, el catálogo de palancas, qué implica cada decisión, el orden de trabajo) y el *Feedback del B2* (2026-10-18) |
| **03 - Partitura compás por compás** | la partitura actual de MuseScore, reducida: cifrado, piano MD y MI, guitarra en altura real y batería, compás por compás. **Es la referencia para cualquier pregunta concreta** |
| **04 - Código Strudel** | el código: el origen (`happy_beats`, `wddl`), `0.first` (con el que nació la forma), el puente, las transcripciones de la partitura y las propuestas de Claude para el B2 (`4.ai_1` a `4.ai_4`) |
| **05 - Bitácora y piano** | las semanas 02 y 03 (sesión por sesión) y los días del programa de piano donde se toca Louise |
| **06 - Conceptos enlazados** | las notas de concepto (escritas por el usuario) a las que enlazan las decisiones, la rúbrica, el bloque de decisión y la plantilla de secciones de Strudel |
| **07 - Historial** | cada commit que tocó Louise y los cambios musicales de la partitura versión por versión |
| **08 - Cómo se trabaja** | el sistema de partituras, el ciclo de MuseScore, Strudel (qué es, el motor, el folk), el área *Canción* y los flujos |
| **Louise.musicxml** | la partitura entera en MusicXML (sin comprimir). Para análisis con código: alturas, duraciones, voces |

## 3. Cómo se ha trabajado: el proceso

Louise ha pasado por dos herramientas, y **la fuente de verdad cambió a mitad de camino**.

```text
2–9 oct   Strudel es la fuente   ──9 oct: se transcribe──▶   MuseScore es la fuente   (desde el 9 oct)
          (loop → forma en código)                           (voicings, puentes, B2, C3)
                                                                  │
                                         Strudel vuelve como ◀────┘
                                         transcripción para oírla y probar propuestas (16 y 18 oct)
```

| Fecha | Qué pasó | Dónde |
|---|---|---|
| 2 oct | nace el esqueleto del vals en Strudel (`wddl`): bajo en el 1, acorde en el 2 y el 3, armado con grados (`RAIZ.add(voicing)`). *Louise* nace el mismo día sobre ese esqueleto, con melodía y batería | Strudel |
| 3 oct | entra la guitarra nylon; el voicing `nor` pierde la octava; la armonía gana el balanceo `x@1.2` | Strudel |
| 5 oct | tempo 180 → 160. Se escribe la nota de obra y el plan de dos semanas (8 sesiones). Claude evalúa el código nota por nota | Strudel + nota |
| 6 oct | verso y coro: cadencias sencillas con dirección y cadencia rota; puente automático; acordes diatónicos; el vals se queda | Strudel |
| 7 oct | batería (*Drums v1*) y separar las capas para oírlas por separado | Strudel |
| 8 oct | verso y coro con su melodía y estructura; aprende a dar **un rol a cada parte** y a hacer crecer el coro | Strudel |
| 9 oct | fills de batería. **Claude convierte `0.first` a partitura** (`Louise.mscz`): 42 compases de 3/4, guitarra en clave de sol 8vb, piano partido, batería en 8 partes | Strudel → MuseScore |
| 12 oct | voicings del piano en verso y coro (vals de tres notas); doble rasgueo al final; **bridge c.43–52** a partir de la intro | MuseScore |
| 13 oct | puentes; se arregla el bajo del puente. Con Claude: las decisiones redactadas y **la forma acordada** (Intro · V1 · C1 · B1 · V2 · C2 · B2 · C3 · Outro, con el pico en el B2) | MuseScore + nota |
| 14 oct | 26 compases nuevos tras el C2, guitarra aligerada, decisiones escritas; la guía *Recursos de energía y forma*; baterías nuevas en Strudel | MuseScore + AI |
| 16 oct | **el C2 no cierra** y el **B2 arranca en B♭** (c.83–88); el A7 sube y el **E♭7** (sustituto tritonal) se llena. Claude transcribe la partitura entera a Strudel (`3.full_score`, c.1–88) | MuseScore + Strudel |
| 18 oct | c.82–90: **la guitarra se reescribe y el piano se llena**. Se escribe el **C3** (c.91–106). Claude hace el *Feedback del B2* y cuatro propuestas del B2 en Strudel, **sin tocar la partitura**: `4.ai_1.b2_waltz` (vals, armonía en Re menor), `4.ai_2.b2_respiro` (c.82–83 respiran como en la partitura), `4.ai_3.b2_bb_score` (el B♭ de la partitura y pico en Sol6 en el c.88) y `4.ai_4.b2_resuelto` (todo el feedback resuelto: B2 de 11 compases, crescendo de *mp* a *ff*, pedal de La en el pico) | MuseScore + AI + Strudel |

**Hoy, la partitura (`Louise.mscz`) es la única fuente de verdad.** Los `.strudel.js` de `Louise/` son
transcripciones o propuestas para oír; ninguno se ha pasado de vuelta a la partitura. Al generar estas
fuentes, los c.89–106 (el final del B2 y el C3), el feedback y las cuatro propuestas estaban **sin
commit**. Ninguna propuesta está elegida: **cuál se queda (o ninguna) lo decide él**.

### Lo que el usuario fue aprendiendo (sus palabras, resumidas)

- 6 oct: le gustan más las cadencias **sencillas pero con dirección**. El motivo todavía no le convence;
  quiere analizar las distancias entre sus notas. Si se bloquea, pasarla a partitura antes.
- 7 oct: es posible y mejor **ver cada capa por su cuenta**.
- 8 oct: es mejor **arreglar bien los voicings y darle un rol a cada parte**, y hacer crecer el coro.
- 9 oct: con los voicings en la partitura entiende los movimientos y se siente **más cerca de la melodía**.
  Siguiente: voicings del piano en el verso, luego el coro, luego la guitarra, y dejar espacio a la voz.
- 13 oct: el bridge 1 hace que el verso 2 entre solo.
- 14–18 oct: busca una **conversación entre piano y guitarra**: que uno armonice al otro y después
  intercambien el rol. *«Me gusta cómo va, pero no siento que realmente esté generando mucho.»*

## 4. La forma hoy

Lo que dice la partitura (marcas de ensayo: Intro, Verso, Coro, Bridge, Verso, Coro 2, B2; **el C3 no tiene
marca propia**, empieza en el c.91, donde vuelve la armadura de Re).

| Sección | Compases | Dur. | Energía planeada | Qué suena |
|---|---|---|---|---|
| **Intro** | c.1–10 | 11 s | 2 | el motivo en el piano (c.1–2 y 6–7), piano y batería; frase de 5 compases dos veces |
| **V1** | c.11–26 | 18 s | 3 | entra la guitarra (arpegio de acorde completo); piano en vals; batería de verso |
| **C1** | c.27–42 | 18 s | 3 (más plano) | cambio de patrón respecto al verso; batería de coro (bombo en 1 y 3, hi-hat abierto, crash, toms) |
| **B1** | c.43–50 | 9 s | 1 (valle) | **piano solo**; tres compases nuevos (Bm · Em · E) y la frase de 5 de la intro; el único cromatismo hasta el B2: el **G♯ del c.45** |
| **V2** | c.51–66 | 18 s | 3 | como el V1 |
| **C2** | c.67–81 | 17 s | 3→4 | sube y **no cierra**: termina en A7 |
| **B2** | c.82–90 | 10 s | 5 (pico) | **E♭7** de entrada y armonía de Re menor (B♭, Gm, Am, C, G7, C7, F, Dm); registro nuevo (piano hasta F6); la guitarra pasa a línea en corcheas; **sin batería** |
| **C3** | c.91–106 | 18 s | 2 (despedida) | el coro entero otra vez, cierra A7→D; **sin batería** |
| **Outro** | — | — | 1–2 | **por escribir** (los c.107–109 existen pero están vacíos) |

La curva acordada el 13 oct, con su presupuesto de energía, está en la fuente 02 (§0).

### Armonía, sección por sección

Cifrado de la partitura, un acorde por compás salvo donde se indica:

| Sección | Progresión |
|---|---|
| Intro | D · D/F♯ · A · Bm · G · D · D · A · Bm · Gmaj7 |
| V1 (y V2) | Dmaj7 · F♯m (→D) · C♯dim · A→A7 · Bm7 · G→G6 · Dmaj7 · F♯m7 · Dmaj7 · F♯m · C♯dim · A→A7 · Bm7 · G→G6 · D6 · F♯m |
| C1 (y C3) | Em · G · F♯m7 · Bm · Em · G · A7 · D · Em · G · F♯m7 · Bm · Em · G · A7 · D |
| B1 | Bm · Em · E · D · D · A · Bm · Gmaj7 |
| C2 | como el C1, pero c.80 = **Gmaj13** y termina en **A7** (c.81) sin resolver |
| B2 | **E♭7** · B♭ · Gm · Am · C4 · G7 · C7 · F (→F7) · Dm (→D) |

Funciones en Re: I = D · ii = Em · iii = F♯m · IV = G · V = A · vi = Bm · vii° = C♯dim. En el B2, visto
desde Re: B♭ = ♭VI, Gm = iv, C = ♭VII, F = ♭III, Dm = i (todos de Re menor); E♭7 = sustituto tritonal del
A7. El feedback del B2 (fuente 02) explica por qué la cadencia G7 → F/C → C7 → F de los c.87–89 suena a
**Fa mayor** y no a Re menor.

## 5. Qué está decidido

Resumen; las líneas completas, con fecha y enlace al concepto, en la fuente 01 (`## Decisiones`).

- **Forma:** Intro · V1 · C1 · B1 · V2 · C2 · B2 · C3 · Outro, con el pico en el B2. De 82 a ~100–115
  compases (1:50–2:10).
- **B1 (c.43–50):** contraste después del coro; el bajo baja por quintas B–E–A–D; piano solo.
- **C3 de despedida:** el coro con capas quitadas, que sí cierra en A7→D.
- **Energía:** un rol por parte; en las cadencias el vals se reparte (piano en el 1, guitarra en el 2 y
  el 3). C1 más plano (sin fills cada 4 ni brillo). C2 recupera lo que perdió el C1, hace crescendo y no
  cierra en D. El B2 estrena lo que nunca sonó.
- **Armonía:** cadencias sencillas con dirección y cadencia rota; mayormente diatónica; c.12 y c.52 con
  bajo de F♯m (F♯3).
- **Ritmo:** el vals se queda. 3/4 en toda la pieza, bajo en el 1 y acorde en el 2 y el 3.

## 6. Qué falta

### Por decidir (de la nota de obra)

- [ ] **¿Voz o instrumental?** Define `definicion_terminado`.
- [ ] **c.51: ¿el bajo es Mi o Re?** Hoy el E2 de la guitarra queda debajo del D3 del piano: suena Dmaj9/E.
- [ ] **Qué le quita al C1:** crash, hi-hat abierto, fills cada 4.
- [ ] **Qué capa estrena el B2:** coro (aahs), guitarra rasgueada, *ff*, cromatismo.
- [ ] **Que el B2 no arranque como el B1** (el E♭7 ya lo resuelve, según el feedback).
- [ ] **La descarga después del B2:** corte o vaciado.
- [ ] **C3 de 8 o de 16 compases** (hoy son 16).
- [ ] **Outro:** ¿qué riff? ¿Termina en D (cerrado) o en Gmaj7♯11 (suspendido, como el c.10)?
- [ ] **Mapa de dinámicas:** no hay ninguna marca en toda la partitura.
- [ ] **¿Graba él la guitarra?** Si sí, hay que revoicear lo intocable (c.13/53, el Em del coro, aperturas
  de c.12, 14, 15, 16 y 18; en el B2, el c.83 y el B♭5 del c.84 caen en los trastes 14–18).

### Lo que el feedback del B2 marca como mal (fuente 02, 2026-10-18)

- c.91: el piano sigue en el B2 (Fa2, Si♭4) cuando la guitarra ya está en el C3 (Mi2): semitono en el bajo.
- c.90: el Dm limpio no llega a sonar (suena B♭maj7/D) y el D dura una corchea.
- c.89 (3&): la MD toca F7 pero la MI sigue en B♭: suena F7/B♭.
- c.83: el B♭ llega disfrazado (cuatro Re contra un Si♭) y la guitarra toca Mi natural: suena B♭(♯11)/D.
- La batería se apaga justo donde empieza el pico (c.82 es el compás más denso de la pieza; c.83–90, cero).
- En el render, el B2 suena **4 dB por debajo del C2** y el C3 más fuerte que el B2: la curva está invertida.
- El B2 empieza arriba (F6) y baja; se cierra solo en Fa dos compases antes de terminar; dura lo mismo que
  el B1; piano y guitarra hablan a la vez y en la misma octava (unísonos en casi todos los compases).

### El plan de las semanas 02 y 03

El cronograma de 8 sesiones (5–18 oct) solo tiene marcada la sesión 0, y `definicion_terminado` sigue
**vacío**. El trabajo real avanzó por otro camino (la partitura). Lo que la semana 03 pedía y no existe
todavía: el audio de la pieza entera exportado, la rúbrica llena tras 24 h, la revisión y el cierre. El
orden de trabajo de la guía de recursos (fuente 02, §4): C1 → C2 → **B2** → descarga → C3 → outro →
dinámicas → exportar y commit.

## 7. Cómo ayudar con Louise

- **No compongas por él.** Da palancas, opciones y consecuencias; las notas las decide él. Si pide
  «escríbelo tú» o «dame un ejemplo», escríbelo marcado como **propuesta** y en un archivo aparte (como
  los `4.ai_*`), nunca como la versión de la pieza.
- **Cita compases** (`c.83`) y usa la fuente 03 para comprobar qué suena antes de afirmar nada. La
  guitarra suena una octava abajo de lo escrito.
- **Una decisión, una línea**, lista para pegar en `## Decisiones`:
  `- AAAA-MM-DD · **qué** · por qué · qué cambió → [[concepto]]`, con el nombre exacto de una nota de la
  fuente 06 (o de la 11 de Improviser).
- **De 1 a 3 parámetros por sección, no 7.** Un color nuevo solo pega más que tres juntos.
- **No juzgues una toma recién grabada**: la evaluación va después de 24 h, con la rúbrica.
- **Una dificultad nueva por proyecto**: no le propongas cambiar el tempo, la métrica o la tonalidad
  general a mitad de pieza.
- **Sin audio no hay sesión.** Toda sesión termina en un `.m4a` en `render/`, con la fecha delante.
- El ciclo de cada cambio: guardar en MuseScore → `./_scripts/sync-partituras.py` → `git commit -am "qué
  cambió y por qué"`.
- Si algo no está en las fuentes (cómo graba la guitarra, qué audio cuenta como final), **dilo y pregunta**.

## 8. Glosario

| Término | Qué es |
|---|---|
| V1, C1, B1, V2, C2, B2, C3 | verso, coro, bridge, con su número de aparición |
| c. | compás |
| MD / MI | mano derecha / izquierda del piano |
| energía 1–5 | la curva acordada; en dinámicas: 1 = *p*, 2 = *mp*, 3 = *mf*, 4 = *f*, 5 = *ff* |
| `nor`, `sus`, `add9`… | los tipos de acorde de `CHORD_TYPES` en el código de Strudel (grados sobre la raíz) |
| `RAIZ` | la secuencia de grados de la armonía en el código original: `<0@2 4 5 3>` = D · D · A · Bm · G |
| `x@1.2` | el balanceo del vals: el tiempo 2 entra antes y el 3 después |
| rasgueo | en Strudel, `late()` por nota; en la partitura, acorde arpegiado |
| `render/` | carpeta del audio de la obra; git la ignora |
| sync | `./_scripts/sync-partituras.py`: regenera el `.musicxml` desde el `.mscz` |
