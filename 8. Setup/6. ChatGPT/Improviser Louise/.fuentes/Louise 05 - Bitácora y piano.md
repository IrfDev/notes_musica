# La bitácora de Louise y Louise en el piano

> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario (Obsidian + git), el 2026-10-18. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.

Las semanas 02 y 03 (sesión por sesión, con su definición de hecho) y los días del programa de piano donde se toca Louise.

Contiene:

- `6. Práctica/4. Bitácora/2026-10-05 - Semana 02 - Louise, del loop a la forma.md`
- `6. Práctica/4. Bitácora/2026-10-12 - Semana 03 - Louise, forma y cierre.md`
- `4. Instrumento/1. Piano/1. Programa de 30 sesiones/24. Día 24 - Louise en el piano.md`
- `4. Instrumento/1. Piano/1. Programa de 30 sesiones/25. Día 25 - Louise, qué nota va arriba.md`
- `4. Instrumento/1. Piano/1. Programa de 30 sesiones/29. Día 29 - Ensayo general.md`
- `4. Instrumento/1. Piano/1. Programa de 30 sesiones/30. Día 30 - La toma final.md`

---

## Archivo: `6. Práctica/4. Bitácora/2026-10-05 - Semana 02 - Louise, del loop a la forma.md`

```yaml
tipo: semana
estado: activa
fecha: 2026-10-05
fecha_cierre: 2026-10-11
obra_activa: "[[Intro]]"
concepto_activo:
audios:
sesiones:
tags:
  - curso-musica/semana
```

# Semana 02 — Louise, del loop a la forma

Fechas: 2026-10-05 a 2026-10-11. Cronograma completo en [[Intro#Cronograma]].

## Enfoque

- **Obra:** [[Intro]]
- **Habilidad principal:** convertir un loop de 5 compases en material con forma.
- **Entregable:** `definicion_terminado` escrito, cuatro dudas decididas, el motivo en los compases
  de respuesta y la tabla de forma en papel. Un audio por cada sesión en la que cambie el sonido.
- **Qué no haré:** capas ni timbres nuevos, otra pieza ni guías nuevas de Strudel.

> [!info] En cada sesión
> Lee solo la sesión del día → marca los pasos → llena *Registro* → graba en `render/` →
> pasa la decisión a `## Decisiones` de [[Intro]] → marca ✓ en el cronograma.

## Preparación — 10 minutos, una sola vez

- [ ] Crear la carpeta `3. Composiciones/6. louise/render/`.
- [ ] Decidir cómo grabar (Sonar, el navegador o el teléfono) y probarlo con 10 segundos.
- [ ] Commit del `.js` tal como está hoy: es el punto de partida.

---

## Sesión 0 — Definición · lun 5 oct · 10 min

- [ ] Escucha el loop cinco veces seguidas sin tocar el código.
- [ ] Escribe `definicion_terminado` en el frontmatter de [[Intro]]: duración, forma y qué audio
  cuenta como final.
- [ ] Graba esas cinco vueltas: `2026-10-05 partida.m4a`.

**Hecho cuando:** el campo está lleno y existe el audio de partida.

### Registro

- Fecha y duración reales:
- `definicion_terminado`:
- Audio:
- Siguiente acción de menos de 20 min:

---

## Sesión 1 — Limpiar · mar 6 oct · 40 min

Una duda a la vez: haz commit, prueba, escucha las dos versiones, decide y escribe una línea en
`## Decisiones` de [[Intro]].

- [ ] **Guitarra.** Prueba dos cambios por separado y juntos:
  - subirla una octava: quitar el `.sub(7)` de `guitarBass` y `guitarMid`;
  - que siga la armonía: sumarle `RAIZ` a cada grupo de grados.

  Escucha sobre todo el c. 3 (A): ¿suena a dominante? Si te quedas con el drone, anota por qué.
- [ ] **Melodía.** ¿Flotando o en rejilla? Para que cada peso valga un tiempo, los pesos tienen que
  sumar los tiempos que ocupa la frase (2 compases de 3/4 = 6). Qué duración lleva cada nota lo
  decides tú.
- [ ] **Kick.** Para que dure lo mismo que la frase, su `< >` tiene que sumar 5 (cuenta los `@`).
  Lo que va en el compás que falta es tuyo. O decide que el desfase es un recurso.
- [ ] **Frase de 5.** Alarga o acorta *un* compás de `RAIZ` (y los `< >` de las capas que lo
  siguen) y compáralo con el de 5.
- [ ] Graba la versión con las cuatro decisiones: `2026-10-06 limpio.m4a`.
- [ ] En [[Intro]]: `estado: desarrollo`.

**Hecho cuando:** hay cuatro líneas en `## Decisiones` y un audio.

### Registro

- Fecha y duración reales:
- Guitarra:
- Melodía:
- Kick:
- Frase:
- Lo que más me sorprendió al escuchar:
- Audio:
- Siguiente acción de menos de 20 min:

---

## Sesión 2 — El motivo en la respuesta · jue 8 oct · 40 min

- [ ] Escribe cuatro versiones del motivo, cada una con **una** transformación: transposición,
  inversión, aumentación o desplazamiento. Están en [[0. Enlaces 2.0 y motivos]].
- [ ] Ponlas una por una en los cc. 3–5, sobre A–Bm–G. Haz commit de cada una antes de pasar a la siguiente.
- [ ] Criterio: la última nota de cada versión cae en la 3ª o la 7ª del acorde que suena.
- [ ] Quédate con una o dos y escribe la decisión.
- [ ] Graba: `2026-10-08 motivo.m4a`.

**Hecho cuando:** hay una o dos versiones elegidas y un audio.

### Registro

- Fecha y duración reales:

| Versión | Transformación | Nota final sobre qué acorde | Cómo sonó |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |

- Elegida y por qué:
- Audio:
- Siguiente acción de menos de 20 min:

---

## Sesión 3 — La forma, en papel · sáb 10 oct · 30 min, sin código

- [ ] Relee tu [[2. Composición binaria — contraste, intro y puente]]: contraste sin perder la
  unidad, tipos de intro y de puente.
- [ ] Llena la tabla de abajo. Cada fila cambia **una** cosa respecto a la anterior.
- [ ] Pregunta: si en la sesión 1 quitaste el drone, ¿te sirve como intro de *pedal + color*, que es tu Intro 2?

| Sección | Compases | Capas que suenan | Qué cambia |
|---|---|---|---|
| intro | | | — |
| A | | | |
| B | | | |
| | | | |
| final | | | |

**Hecho cuando:** la tabla está llena. Hoy no hay audio porque no cambia el sonido; la tabla pasa a
código en la sesión 4.

### Registro

- Fecha y duración reales:
- Tipo de intro:
- Qué cambia en la B:
- Duda que queda abierta:

---

## Revisión semanal · dom 11 oct · 15 min

### 1 · Vaciar la entrada

- [ ] `0. Entrada/` vacía

### 2 · Qué produje

| | |
|---|---|
| Audios nuevos | |
| Decisiones en [[Intro]] | |
| Sesiones hechas | de 4 |
| Sesiones que se corrieron, y por qué | |

> [!important] Definición de hecho
> Hay al menos un audio nuevo. Semana sin audio es semana en blanco, por mucho que hayas estudiado.

### 3 · Revisión

- ¿Qué puedo hacer hoy que no podía el lunes?
- ¿Dónde repetí sin cambiar de estrategia?
- ¿Qué quedó abierto?
- ¿Hay que mover fechas de la semana 03?

### 4 · La semana que viene

- **Obra activa:** [[Intro]]
- **Semana:** [[2026-10-12 - Semana 03 - Louise, forma y cierre]]
- **Siguiente acción de menos de 20 minutos:**
- [ ] `audios` y `sesiones` llenos en el frontmatter de esta nota
- [ ] Cronograma de [[Intro]] marcado
- [ ] *Último audio* actualizado en [[Inicio]]

---

## Archivo: `6. Práctica/4. Bitácora/2026-10-12 - Semana 03 - Louise, forma y cierre.md`

```yaml
tipo: semana
estado: planeada
fecha: 2026-10-12
fecha_cierre: 2026-10-18
obra_activa: "[[Intro]]"
concepto_activo:
audios:
sesiones:
tags:
  - curso-musica/semana
```

# Semana 03 — Louise, forma y cierre

Fechas: 2026-10-12 a 2026-10-18. Cronograma completo en [[Intro#Cronograma]].
Viene de [[2026-10-05 - Semana 02 - Louise, del loop a la forma]].

## Enfoque

- **Obra:** [[Intro]]
- **Habilidad principal:** pasar de la tabla de forma a la pieza entera, y cerrarla.
- **Entregable:** la pieza completa exportada, la rúbrica llena y la retrospectiva.
- **Qué no haré:** meter material nuevo para tapar un problema formal. Si una sección no
  funciona, primero se prueba una variación de lo que ya existe.

> [!info] En cada sesión
> Lee solo la sesión del día → marca los pasos → llena *Registro* → graba en `render/` →
> pasa la decisión a `## Decisiones` de [[Intro]] → marca ✓ en el cronograma.

---

## Sesión 4 — La forma, en código · lun 12 oct · 60 min

- [ ] Commit antes de empezar.
- [ ] Pasa la tabla de la sesión 3 a `arrange()` con la plantilla [[strudel — secciones]]:
  `const A = stack(…)` con lo que suena hoy, `const B = …`, y una fila de `arrange` por fila de la tabla.
- [ ] Ojo: `arrange` reinicia cada sección desde su compás 1. Si mantuviste el kick de 4 contra 5,
  dentro de una sección de 5 compases el desfase se pierde.
- [ ] Exporta la pieza entera, aunque sea a escala: `2026-10-12 forma.m4a`.
- [ ] No la juzgues hoy.

**Hecho cuando:** existe el primer audio de la pieza entera.

### Registro

- Fecha y duración reales:
- Duración del audio:
- Secciones que entraron:
- Lo que no cupo o quedó pendiente:
- Audio:

---

## Sesión 5 — Escucha en frío · mar 13 oct · 30 min

Por lo menos 24 h después de la sesión 4. Escucha completa **sin abrir el código** y sin cambiar nada
durante la primera escucha.

- [ ] Escucha `2026-10-12 forma.m4a` de principio a fin.
- [ ] Llena la rúbrica de abajo: 1–5 y evidencia **audible** (minuto o compás).
- [ ] Contesta las preguntas de [[Rúbrica - Composición]]: estructurales y de economía.
- [ ] Elige una prioridad estructural y, como máximo, dos detalles.
- [ ] En [[Intro]]: `estado: revision`.

Escala: 1 ausente o accidental · 2 aparece pero inconsistente · 3 funciona de forma básica ·
4 funciona con claridad e intención · 5 distintivo, controlado y necesario.

| Dimensión | Puntuación | Evidencia audible | Revisión posible |
|---|---:|---|---|
| Intención | | | |
| Identidad o memorabilidad | | | |
| Ritmo y fraseo | | | |
| Coherencia | | | |
| Contraste | | | |
| Trayectoria y clímax | | | |
| Armonía y bajo | | | |
| Conducción de voces | | | |
| Textura y registro | | | |
| Proporción formal | | | |
| Interpretación o realización | | | |
| Calidad de cierre | | | |

### Decisión de revisión

- Prioridad estructural:
- Detalle 1:
- Detalle 2:
- Elementos que no tocaré:

**Hecho cuando:** la rúbrica está llena y hay una prioridad elegida.

---

## Sesión 6 — Revisión · jue 15 oct · 45 min

- [ ] Commit antes de empezar.
- [ ] Trabaja **solo** la prioridad estructural. Después, los dos detalles. Nada de la lista
  *Elementos que no tocaré*.
- [ ] Cada cambio, una línea en `## Decisiones` de [[Intro]].
- [ ] Exporta: `2026-10-15 revision.m4a`.

**Hecho cuando:** existe el audio revisado.

### Registro

- Fecha y duración reales:
- Qué cambié para la prioridad:
- Detalles:
- Audio:

---

## Sesión 7 — Cierre · sáb 17 oct · 30 min

- [ ] Escucha `2026-10-15 revision.m4a` (han pasado 48 h).
- [ ] ¿Se cumple `definicion_terminado`? Si no, o lo cumples hoy, o lo cambias conscientemente y
  escribes por qué.
- [ ] Exporta la versión final: `2026-10-17 final.m4a`.
- [ ] Llena *Cierre* en [[Intro]]: retrospectiva de tres líneas y qué sube a Teoría.
- [ ] En [[Intro]]: `estado: cerrada`, `cierre: 2026-10-17` y `ultimo_audio`.

> [!note] Criterio de salida (de la rúbrica)
> Una pieza puede cerrarse con puntuaciones bajas si cumplió el experimento, dejó un aprendizaje
> claro, recibió una revisión consciente y existe una exportación completa.

**Hecho cuando:** se cumple `definicion_terminado`.

### Registro

- Fecha y duración reales:
- ¿Se cumplió la definición? ¿Cambió?:
- Audio final:

---

## Revisión semanal · dom 18 oct · 15 min

### 1 · Vaciar la entrada

- [ ] `0. Entrada/` vacía

### 2 · Qué produje

| | |
|---|---|
| Audios nuevos | |
| Decisiones en [[Intro]] | |
| Sesiones hechas | de 4 |
| Sesiones que se corrieron, y por qué | |

> [!important] Definición de hecho
> Hay al menos un audio nuevo. Semana sin audio es semana en blanco, por mucho que hayas estudiado.

### 3 · Revisión

- ¿Qué puedo hacer hoy que no podía hace dos semanas?
- ¿Qué dimensión de la rúbrica salió más baja? Esa es la que entrena la siguiente pieza.
- ¿Qué quedó abierto?

### 4 · Lo que sigue

- **Siguiente obra activa (una sola, la decides tú):**
- **Siguiente acción de menos de 20 minutos:**
- [ ] `audios` y `sesiones` llenos en el frontmatter de esta nota
- [ ] Cronograma de [[Intro]] marcado
- [ ] *Obra activa* y *Último audio* actualizados en [[Inicio]]

---

## Archivo: `4. Instrumento/1. Piano/1. Programa de 30 sesiones/24. Día 24 - Louise en el piano.md`

```yaml
tipo: ejercicio
estado: planeada
dia: 24
semana: 5
fecha:
hecho: false
teclado_bpm:
hanon: "20"
hanon_bpm:
sotf: "cc. 64–76"
sotf_bpm:
audio:
```

# Día 24 · Louise en el piano

> [!info] Semana 5 · Mano izquierda y Louise · día 24 de 30
> [[00. Plan y progreso|↑ Plan y progreso]] · [[23. Día 23 - Patrones transportados|← Día 23]] · [[25. Día 25 - Louise, qué nota va arriba|Día 25 →]]
> Todo lo que tocas hoy está en esta nota, de arriba abajo. No hace falta abrir nada más.

| Carril | Hoy |
|---|---|
| Teclado | Los acordes de Louise: intro y coro |
| Hanon | 20 |
| Sleep on the Floor | cc. 64–76 |

> [!tip] La clave de hoy
> Aquí la geografía de cinco semanas se vuelve tu música: los mismos dibujos, con tus acordes.

## Antes de empezar · 1 minuto

- Energía (1–5):
- Dolor o tensión:
- Metrónomo de partida: teclado ___ · Hanon ___ · Sleep on the Floor ___

El metrónomo de toda la sesión (cambia el número y dale play):

```strudel
let bpm = 60   // ← sube de 4 en 4
setcpm(bpm/4)
s("hh*4").bank("RolandTR909").gain("1 .4 .4 .4")
```

## 1 · Hanon 20 · 6 minutos

- [ ] **(1')** Busca el **nº 20** en la partitura de abajo. Lee la celda de subida (clave de Fa, antes de la doble barra) y la de bajada (clave de Sol), con sus dedos: números de arriba = MD, de abajo = MI.
- [ ] **(1')** MD sola, una pasada completa (sube dos octavas y baja), en tu escalón de la escalera de abajo.
- [ ] **(1')** MI sola, igual.
- [ ] **(1')** Las dos manos, que caigan como una sola. Si sale limpia, sube un escalón.
- [ ] **(2')** Rotación: Hanon 18 y Hanon 19 a dos manos, al BPM de la última vez (+4 si salen limpios).

> [!warning] Hanon sin tensión
> Dedos curvos y cerca de las teclas, muñeca quieta y suelta, las 8 notas iguales (el 4 y el 5 son los que se caen). Si algo duele, para.

> [!info] «A 60» son cuatro notas por click
> Hanon va en semicorcheas: con el metrónomo a 60 caben **cuatro notas en cada click**. La escalera es: una nota por click (solo para leer) → dos por click → cuatro por click. Sube un escalón cuando salga limpio 3 veces; con cuatro por click, sigue la regla de siempre (+4 bpm). Anota en el registro en qué escalón vas.

![[Hanon - Ejercicios 1-30.pdf#page=1]]

## 2 · Recuperación · 3 minutos

- [ ] El vals en G y en F, sin mirar.

## 3 · Principal · 14 minutos

- [ ] **(7')** Intro (cc. 1–10) en vals: la MI toca el bajo en el 1 y el acorde en el 2 y el 3; la MD, la tríada a la inversión más cercana. Los menores bajan el 3; en las séptimas toca la tríada y añade la 7ª si la mano llega.
- [ ] **(7')** Coro (cc. 27–34), igual. La solución de la MD está plegada.

**Intro**

| c. | Acorde | Notas de la tríada | 7ª (opcional) | Bajo de la MI (tiempo 1) |
|:-:|---|---|:-:|:-:|
| 1 | **D** | D – F♯ – A |  | D |
| 2 | **D/F♯** | D – F♯ – A |  | F♯ |
| 3 | **A** | A – C♯ – E |  | A |
| 4 | **Bm** | B – D – F♯ |  | B |
| 5 | **G** | G – B – D |  | G |
| 6 | **D** | D – F♯ – A |  | D |
| 7 | **D** | D – F♯ – A |  | D |
| 8 | **A** | A – C♯ – E |  | A |
| 9 | **Bm** | B – D – F♯ |  | B |
| 10 | **Gmaj7** | G – B – D | F♯ | G |

**Coro**

| c. | Acorde | Notas de la tríada | 7ª (opcional) | Bajo de la MI (tiempo 1) |
|:-:|---|---|:-:|:-:|
| 27 | **Em** | E – G – B |  | E |
| 28 | **G** | G – B – D |  | G |
| 29 | **F♯m7** | F♯ – A – C♯ | E | F♯ |
| 30 | **Bm** | B – D – F♯ |  | B |
| 31 | **Em** | E – G – B |  | E |
| 32 | **G** | G – B – D |  | G |
| 33 | **A7** | A – C♯ – E | G | A |
| 34 | **D** | D – F♯ – A |  | D |

> [!example]- Solución: la MD a la inversión más cercana
> **Intro**
>
> | c. | Acorde | Posición | MD |
> |:-:|---|---|---|
> | 1 | D | fund. | D4 – F♯4 – A4 |
> | 2 | D/F♯ | fund. | D4 – F♯4 – A4 |
> | 3 | A | 1ª inv. | C♯4 – E4 – A4 |
> | 4 | Bm | 1ª inv. | D4 – F♯4 – B4 |
> | 5 | G | 2ª inv. | D4 – G4 – B4 |
> | 6 | D | fund. | D4 – F♯4 – A4 |
> | 7 | D | fund. | D4 – F♯4 – A4 |
> | 8 | A | 1ª inv. | C♯4 – E4 – A4 |
> | 9 | Bm | 1ª inv. | D4 – F♯4 – B4 |
> | 10 | Gmaj7 | 2ª inv. | D4 – G4 – B4 |
>
> **Coro**
>
> | c. | Acorde | Posición | MD |
> |:-:|---|---|---|
> | 27 | Em | fund. | E4 – G4 – B4 |
> | 28 | G | 2ª inv. | D4 – G4 – B4 |
> | 29 | F♯m7 | 2ª inv. | C♯4 – F♯4 – A4 |
> | 30 | Bm | 1ª inv. | D4 – F♯4 – B4 |
> | 31 | Em | fund. | E4 – G4 – B4 |
> | 32 | G | 2ª inv. | D4 – G4 – B4 |
> | 33 | A7 | 1ª inv. | C♯4 – E4 – A4 |
> | 34 | D | fund. | D4 – F♯4 – A4 |

## 4 · Aplicación · 4 minutos

- [ ] Compara la nota de arriba de tu MD con la de los voicings de tu partitura (abajo). Marca en las tablas dónde coinciden y dónde no.

```verovio
7. Partituras/2. Composiciones/Louise.musicxml
scale: 35
adjustPageHeight: true
```

## 5 · Sleep on the Floor · 11 minutos

- [ ] **(4')** Clímax a dos manos, cc. 64–67.
- [ ] **(7')** Final, cc. 68–76, manos separadas: es la textura del verso y debería salir rápido.

**Metrónomo para la pieza** (cambia el número a tu tempo de trabajo):

```strudel
let bpm = 40   // tu tempo de trabajo
setcpm(bpm/4)
s("hh*4").bank("RolandTR909").gain("1 .4 .4 .4")
```

![[The Lumineers - Sleep on the Floor.pdf#page=3]]

## 6 · Registro · 2 minutos

- **Teclado** · BPM: · qué falló:
- **Hanon** · BPM: · qué falló:
- **Sleep on the Floor** · BPM: · compases que fallan:
- **Qué cambio para la próxima sesión:**

> [!check] Hecho cuando
> la intro y el coro de Louise en vals, sin parar, al tempo que salga limpio (anótalo: la pieza va a 160).
> Si no sale, mañana repites este día: no se pasa al siguiente.

> [!tip] Al terminar
> Llena las propiedades de arriba: `hecho`, `fecha`, los tres BPM y `audio` si grabaste.
> Así la sesión aparece al día en [[00. Plan y progreso]].

---

## Archivo: `4. Instrumento/1. Piano/1. Programa de 30 sesiones/25. Día 25 - Louise, qué nota va arriba.md`

```yaml
tipo: ejercicio
estado: planeada
dia: 25
semana: 5
fecha:
hecho: false
teclado_bpm:
hanon: "17–20"
hanon_bpm:
sotf: "cc. 40–76"
sotf_bpm:
audio:
```

# Día 25 · Louise, qué nota va arriba · 🎙 grabación

> [!info] Semana 5 · Mano izquierda y Louise · día 25 de 30
> [[00. Plan y progreso|↑ Plan y progreso]] · [[24. Día 24 - Louise en el piano|← Día 24]] · [[26. Día 26 - Rotación, lado de sostenidos|Día 26 →]]
> Todo lo que tocas hoy está en esta nota, de arriba abajo. No hace falta abrir nada más.

| Carril | Hoy |
|---|---|
| Teclado | Louise: decidir la nota de arriba |
| Hanon | 17–20 |
| Sleep on the Floor | cc. 40–76 |

> [!important] Hoy se graba
> Última sesión de la semana 5. Ten el celular listo antes de empezar y pon el nombre del archivo en la propiedad `audio`. *Semana sin audio es semana en blanco.*

> [!tip] La clave de hoy
> La pregunta de fondo: **¿qué nota quiero que suene arriba en cada acorde?**

## Antes de empezar · 1 minuto

- Energía (1–5):
- Dolor o tensión:
- Metrónomo de partida: teclado ___ · Hanon ___ · Sleep on the Floor ___

El metrónomo de toda la sesión (cambia el número y dale play):

```strudel
let bpm = 60   // ← sube de 4 en 4
setcpm(bpm/4)
s("hh*4").bank("RolandTR909").gain("1 .4 .4 .4")
```

## 1 · Hanon 17–20 seguidos · 6 minutos

- [ ] Hanon 17 a 20 seguidos, a dos manos, sin parar entre uno y otro, al BPM del más lento.
- [ ] Si alguno se cae, termina la vuelta y al final repite solo ese.

> [!warning] Hanon sin tensión
> Dedos curvos y cerca de las teclas, muñeca quieta y suelta, las 8 notas iguales (el 4 y el 5 son los que se caen). Si algo duele, para.

> [!info] «A 60» son cuatro notas por click
> Hanon va en semicorcheas: con el metrónomo a 60 caben **cuatro notas en cada click**. La escalera es: una nota por click (solo para leer) → dos por click → cuatro por click. Sube un escalón cuando salga limpio 3 veces; con cuatro por click, sigue la regla de siempre (+4 bpm). Anota en el registro en qué escalón vas.

![[Hanon - Ejercicios 1-30.pdf#page=1]]

## 2 · Recuperación · 3 minutos

- [ ] La intro de Louise de memoria, en vals.

## 3 · Principal · 14 minutos

- [ ] **(14')** Para cada acorde del coro, dos versiones de la MD: **A** con la inversión más cercana (la de ayer) y **B** buscando que la nota de arriba se mueva por grado, como una melodía. Toca las dos y elige. Llena la tabla.

| c. | Acorde | A · inversión más cercana | B · línea arriba | Elegida |
|:-:|---|---|---|:-:|
| 27 | Em | | | |
| 28 | G | | | |
| 29 | F♯m7 | | | |
| 30 | Bm | | | |
| 31 | Em | | | |
| 32 | G | | | |
| 33 | A7 | | | |
| 34 | D | | | |

![[Cheat sheet - acordes mayores#14. Decisión musical]]

## 4 · Aplicación · 4 minutos

- [ ] Si una elección tuya suena mejor que lo que hay en la partitura, apúntala con fecha en `## Decisiones` de [[3. Composiciones/6. louise/0. Intro|Louise]].
- [ ] **Graba** la intro y el coro con tus voicings.

## 5 · Sleep on the Floor · 11 minutos

- [ ] **(4')** Final a dos manos (cc. 68–76).
- [ ] **(7')** **Graba** de los cc. 40 a 76 sin parar, a tempo de trabajo.

**Metrónomo para la pieza** (cambia el número a tu tempo de trabajo):

```strudel
let bpm = 44   // tu tempo de trabajo
setcpm(bpm/4)
s("hh*4").bank("RolandTR909").gain("1 .4 .4 .4")
```

![[The Lumineers - Sleep on the Floor.pdf#page=2]]

![[The Lumineers - Sleep on the Floor.pdf#page=3]]

## 6 · Registro · 2 minutos

- **Teclado** · BPM: · qué falló:
- **Hanon** · BPM: · qué falló:
- **Sleep on the Floor** · BPM: · compases que fallan:
- **Qué cambio para la próxima sesión:**

**Grabación de hoy:** Louise (intro + coro) + cc. 40–76 → `AAAA-MM-DD piano semana 5.m4a`.

> [!check] Hecho cuando
> existe la toma de Louise en piano con voicings elegidos por ti, y la de los cc. 40–76.
> Si no sale, mañana repites este día: no se pasa al siguiente.

> [!tip] Al terminar
> Llena las propiedades de arriba: `hecho`, `fecha`, los tres BPM y `audio` si grabaste.
> Así la sesión aparece al día en [[00. Plan y progreso]].

---

## Archivo: `4. Instrumento/1. Piano/1. Programa de 30 sesiones/29. Día 29 - Ensayo general.md`

```yaml
tipo: ejercicio
estado: planeada
dia: 29
semana: 6
fecha:
hecho: false
teclado_bpm:
hanon: "1 en G y F · 16–20"
hanon_bpm:
sotf: "completa · compases débiles"
sotf_bpm:
audio:
```

# Día 29 · Ensayo general

> [!info] Semana 6 · Integración · día 29 de 30
> [[00. Plan y progreso|↑ Plan y progreso]] · [[28. Día 28 - Examen de teclado|← Día 28]] · [[30. Día 30 - La toma final|Día 30 →]]
> Todo lo que tocas hoy está en esta nota, de arriba abajo. No hace falta abrir nada más.

| Carril | Hoy |
|---|---|
| Teclado | Los ✗ del examen · las otras seis |
| Hanon | 1 en G y F · 16–20 |
| Sleep on the Floor | completa · compases débiles |

> [!tip] La clave de hoy
> En un ensayo general no se para: si te equivocas, sigues desde el siguiente pulso. Eso es lo que se ensaya.

## Antes de empezar · 1 minuto

- Energía (1–5):
- Dolor o tensión:
- Metrónomo de partida: teclado ___ · Hanon ___ · Sleep on the Floor ___

El metrónomo de toda la sesión (cambia el número y dale play):

```strudel
let bpm = 60   // ← sube de 4 en 4
setcpm(bpm/4)
s("hh*4").bank("RolandTR909").gain("1 .4 .4 .4")
```

## 1 · Hanon 1 en G y en F · 6 minutos

- [ ] **(4')** Hanon 1 con las notas de G mayor (A) y de F mayor (B): la misma celda, otra escala. Las dos manos.
- [ ] **(2')** Hanon 20 y Hanon 16 a dos manos.

```abc
X:1
T:A · Hanon 1 en G
M:2/4
L:1/16
K:G
V:1 clef=treble name="MD"
V:2 clef=bass name="MI"
[V:1] "^1"G "^2"B "^3"c "^4"d "^5"e "^4"d "^3"c "^2"B | A c d e f e d c | B d e f g f e d | "^5"d' "^4"b "^3"a "^2"g "^1"f "^2"g "^3"a "^4"b | c' a g f e f g a |]
[V:2] "_5"G, "_4"B, "_3"C "_2"D "_1"E "_2"D "_3"C "_4"B, | A, C D E F E D C | B, D E F G F E D | "_1"d "_2"B "_3"A "_4"G "_5"F "_4"G "_3"A "_2"B | c A G F E F G A |]
```

```abc
X:1
T:B · Hanon 1 en F
M:2/4
L:1/16
K:F
V:1 clef=treble name="MD"
V:2 clef=bass name="MI"
[V:1] "^1"F "^2"A "^3"B "^4"c "^5"d "^4"c "^3"B "^2"A | G B c d e d c B | A c d e f e d c | "^5"c' "^4"a "^3"g "^2"f "^1"e "^2"f "^3"g "^4"a | b g f e d e f g |]
[V:2] "_5"F, "_4"A, "_3"B, "_2"C "_1"D "_2"C "_3"B, "_4"A, | G, B, C D E D C B, | A, C D E F E D C | "_1"c "_2"A "_3"G "_4"F "_5"E "_4"F "_3"G "_2"A | B G F E D E F G |]
```

![[Hanon - Ejercicios 1-30.pdf#page=1]]

## 2 · Recuperación · 3 minutos

- [ ] La intro y el coro de Louise.

## 3 · Principal · 14 minutos

- [ ] **(8')** Los ✗ del examen de ayer, hasta 3 limpios cada uno.
- [ ] **(6')** Las seis que ayer no salieron en el sorteo, una pasada cada una (tríada, escala, arpegio, cadencia): **C** · **G** · **D** · **B** · **A♭** · **E♭**.

| Tonalidad | Tríada, 3 posiciones, MJ | Escala 2 oct. MJ | Arpegio 2 oct. | Cadencia con V⁶₅ |
|---|:-:|:-:|:-:|:-:|
| **C** |   |   |   |   |
| **G** |   |   |   |   |
| **D** |   |   |   |   |
| **B** |   |   |   |   |
| **A♭** |   |   |   |   |
| **E♭** |   |   |   |   |

## 4 · Aplicación · 4 minutos

- [ ] La cadena del círculo (§8.2) en vals (3/4): la MI toca la raíz en el 1 y la MD su acorde de la cadena en el 2 y el 3.

## 5 · Sleep on the Floor · 11 minutos

- [ ] **(6')** Los compases que marcaste ayer: 3 limpios cada uno, luego con un compás antes y uno después.
- [ ] **(5')** Una toma completa de ensayo: si te equivocas, sigues.

**Metrónomo para la pieza** (cambia el número a tu tempo de trabajo):

```strudel
let bpm = 52   // tu tempo de trabajo
setcpm(bpm/4)
s("hh*4").bank("RolandTR909").gain("1 .4 .4 .4")
```

![[The Lumineers - Sleep on the Floor.pdf#page=1]]

![[The Lumineers - Sleep on the Floor.pdf#page=2]]

![[The Lumineers - Sleep on the Floor.pdf#page=3]]

## 6 · Registro · 2 minutos

- **Teclado** · BPM: · qué falló:
- **Hanon** · BPM: · qué falló:
- **Sleep on the Floor** · BPM: · compases que fallan:
- **Qué cambio para la próxima sesión:**

> [!check] Hecho cuando
> una toma completa de Sleep on the Floor sin parar.
> Si no sale, mañana repites este día: no se pasa al siguiente.

> [!tip] Al terminar
> Llena las propiedades de arriba: `hecho`, `fecha`, los tres BPM y `audio` si grabaste.
> Así la sesión aparece al día en [[00. Plan y progreso]].

---

## Archivo: `4. Instrumento/1. Piano/1. Programa de 30 sesiones/30. Día 30 - La toma final.md`

```yaml
tipo: ejercicio
estado: planeada
dia: 30
semana: 6
fecha:
hecho: false
teclado_bpm:
hanon: "tres al azar"
hanon_bpm:
sotf: "completa"
sotf_bpm:
audio:
```

# Día 30 · La toma final · 🎙 grabación

> [!info] Semana 6 · Integración · día 30 de 30
> [[00. Plan y progreso|↑ Plan y progreso]] · [[29. Día 29 - Ensayo general|← Día 29]]
> Todo lo que tocas hoy está en esta nota, de arriba abajo. No hace falta abrir nada más.

| Carril | Hoy |
|---|---|
| Teclado | Toma: las 12 escalas y las 12 cadencias |
| Hanon | tres al azar |
| Sleep on the Floor | completa |

> [!important] Hoy se graba
> Última sesión de la semana 6. Ten el celular listo antes de empezar y pon el nombre del archivo en la propiedad `audio`. *Semana sin audio es semana en blanco.*

> [!tip] La clave de hoy
> Una toma, no la mejor de diez. Si algo falla, se anota y se sigue: el audio registra dónde estás.

## Antes de empezar · 1 minuto

- Energía (1–5):
- Dolor o tensión:
- Metrónomo de partida: teclado ___ · Hanon ___ · Sleep on the Floor ___

El metrónomo de toda la sesión (cambia el número y dale play):

```strudel
let bpm = 60   // ← sube de 4 en 4
setcpm(bpm/4)
s("hh*4").bank("RolandTR909").gain("1 .4 .4 .4")
```

## 1 · Hanon 3, 17 y 5 · 6 minutos

- [ ] Hanon 3, 17 y 5 (sorteados), a dos manos, cada uno al BPM más alto que tengas.

![[Hanon - Ejercicios 1-30.pdf#page=1]]

## 2 · Recuperación · 3 minutos

- [ ] Las 12 tríadas por el círculo en 2ª inversión, con la MI.

## 3 · Principal · 14 minutos

- [ ] **(14')** **Graba:** las 12 escalas a dos manos por el círculo (dos octavas, corcheas) y las 12 cadencias con V⁶₅.

> [!example]- Partituras para comprobar
> ```abc
> X:1
> T:Escalas, dos octavas
> M:4/4
> L:1/8
> K:C
> V:1 clef=treble name="MD"
> V:2 clef=bass name="MI"
> [V:1] "C""^1"C "^2"D "^3"E "^1"F "^2"G "^3"A "^4"B "^1"c | "^2"d "^3"e "^1"f "^2"g "^3"a "^4"b "^5"c' "^4"b | "^3"a "^2"g "^1"f "^3"e "^2"d "^1"c "^4"B "^3"A | "^2"G "^1"F "^3"E "^2"D "^1"C2 z2 |
> [V:2] "_5"C, "_4"D, "_3"E, "_2"F, "_1"G, "_3"A, "_2"B, "_1"C | "_4"D "_3"E "_2"F "_1"G "_3"A "_2"B "_1"c "_2"B | "_3"A "_1"G "_2"F "_3"E "_4"D "_1"C "_2"B, "_3"A, | "_1"G, "_2"F, "_3"E, "_4"D, "_5"C,2 z2 |
> [V:1] [K:G clef=treble] "G""^1"G "^2"A "^3"B "^1"c "^2"d "^3"e "^4"f "^1"g | "^2"a "^3"b "^1"c' "^2"d' "^3"e' "^4"f' "^5"g' "^4"f' | "^3"e' "^2"d' "^1"c' "^3"b "^2"a "^1"g "^4"f "^3"e | "^2"d "^1"c "^3"B "^2"A "^1"G2 z2 |]
> [V:2] [K:G clef=bass] "_5"G, "_4"A, "_3"B, "_2"C "_1"D "_3"E "_2"F "_1"G | "_4"A "_3"B "_2"c "_1"d "_3"e "_2"f "_1"g "_2"f | "_3"e "_1"d "_2"c "_3"B "_4"A "_1"G "_2"F "_3"E | "_1"D "_2"C "_3"B, "_4"A, "_5"G,2 z2 |]
> ```
>
> ```abc
> X:1
> T:Escalas, dos octavas
> M:4/4
> L:1/8
> K:D
> V:1 clef=treble name="MD"
> V:2 clef=bass name="MI"
> [V:1] "D""^1"D "^2"E "^3"F "^1"G "^2"A "^3"B "^4"c "^1"d | "^2"e "^3"f "^1"g "^2"a "^3"b "^4"c' "^5"d' "^4"c' | "^3"b "^2"a "^1"g "^3"f "^2"e "^1"d "^4"c "^3"B | "^2"A "^1"G "^3"F "^2"E "^1"D2 z2 |
> [V:2] "_5"D, "_4"E, "_3"F, "_2"G, "_1"A, "_3"B, "_2"C "_1"D | "_4"E "_3"F "_2"G "_1"A "_3"B "_2"c "_1"d "_2"c | "_3"B "_1"A "_2"G "_3"F "_4"E "_1"D "_2"C "_3"B, | "_1"A, "_2"G, "_3"F, "_4"E, "_5"D,2 z2 |
> [V:1] [K:A clef=treble] "A""^1"A, "^2"B, "^3"C "^1"D "^2"E "^3"F "^4"G "^1"A | "^2"B "^3"c "^1"d "^2"e "^3"f "^4"g "^5"a "^4"g | "^3"f "^2"e "^1"d "^3"c "^2"B "^1"A "^4"G "^3"F | "^2"E "^1"D "^3"C "^2"B, "^1"A,2 z2 |]
> [V:2] [K:A clef=bass] "_5"A,, "_4"B,, "_3"C, "_2"D, "_1"E, "_3"F, "_2"G, "_1"A, | "_4"B, "_3"C "_2"D "_1"E "_3"F "_2"G "_1"A "_2"G | "_3"F "_1"E "_2"D "_3"C "_4"B, "_1"A, "_2"G, "_3"F, | "_1"E, "_2"D, "_3"C, "_4"B,, "_5"A,,2 z2 |]
> ```
>
> ```abc
> X:1
> T:Escalas, dos octavas
> M:4/4
> L:1/8
> K:E
> V:1 clef=treble name="MD"
> V:2 clef=bass name="MI"
> [V:1] "E""^1"E "^2"F "^3"G "^1"A "^2"B "^3"c "^4"d "^1"e | "^2"f "^3"g "^1"a "^2"b "^3"c' "^4"d' "^5"e' "^4"d' | "^3"c' "^2"b "^1"a "^3"g "^2"f "^1"e "^4"d "^3"c | "^2"B "^1"A "^3"G "^2"F "^1"E2 z2 |
> [V:2] "_5"E, "_4"F, "_3"G, "_2"A, "_1"B, "_3"C "_2"D "_1"E | "_4"F "_3"G "_2"A "_1"B "_3"c "_2"d "_1"e "_2"d | "_3"c "_1"B "_2"A "_3"G "_4"F "_1"E "_2"D "_3"C | "_1"B, "_2"A, "_3"G, "_4"F, "_5"E,2 z2 |
> [V:1] [K:B clef=treble] "B""^1"B, "^2"C "^3"D "^1"E "^2"F "^3"G "^4"A "^1"B | "^2"c "^3"d "^1"e "^2"f "^3"g "^4"a "^5"b "^4"a | "^3"g "^2"f "^1"e "^3"d "^2"c "^1"B "^4"A "^3"G | "^2"F "^1"E "^3"D "^2"C "^1"B,2 z2 |]
> [V:2] [K:B clef=bass] "_4"B,, "_3"C, "_2"D, "_1"E, "_4"F, "_3"G, "_2"A, "_1"B, | "_3"C "_2"D "_1"E "_4"F "_3"G "_2"A "_1"B "_2"A | "_3"G "_4"F "_1"E "_2"D "_3"C "_1"B, "_2"A, "_3"G, | "_4"F, "_1"E, "_2"D, "_3"C, "_4"B,,2 z2 |]
> ```
>
> ```abc
> X:1
> T:Escalas, dos octavas
> M:4/4
> L:1/8
> K:F#
> V:1 clef=treble name="MD"
> V:2 clef=bass name="MI"
> [V:1] "F#""^2"F "^3"G "^4"A "^1"B "^2"c "^3"d "^1"e "^2"f | "^3"g "^4"a "^1"b "^2"c' "^3"d' "^1"e' "^2"f' "^1"e' | "^3"d' "^2"c' "^1"b "^4"a "^3"g "^2"f "^1"e "^3"d | "^2"c "^1"B "^4"A "^3"G "^2"F2 z2 |
> [V:2] "_4"F, "_3"G, "_2"A, "_1"B, "_3"C "_2"D "_1"E "_4"F | "_3"G "_2"A "_1"B "_3"c "_2"d "_1"e "_4"f "_1"e | "_2"d "_3"c "_1"B "_2"A "_3"G "_4"F "_1"E "_2"D | "_3"C "_1"B, "_2"A, "_3"G, "_4"F,2 z2 |
> [V:1] [K:Db clef=treble] "Db""^2"D "^3"E "^1"F "^2"G "^3"A "^4"B "^1"c "^2"d | "^3"e "^1"f "^2"g "^3"a "^4"b "^1"c' "^2"d' "^1"c' | "^4"b "^3"a "^2"g "^1"f "^3"e "^2"d "^1"c "^4"B | "^3"A "^2"G "^1"F "^3"E "^2"D2 z2 |]
> [V:2] [K:Db clef=bass] "_3"D, "_2"E, "_1"F, "_4"G, "_3"A, "_2"B, "_1"C "_3"D | "_2"E "_1"F "_4"G "_3"A "_2"B "_1"c "_3"d "_1"c | "_2"B "_3"A "_4"G "_1"F "_2"E "_3"D "_1"C "_2"B, | "_3"A, "_4"G, "_1"F, "_2"E, "_3"D,2 z2 |]
> ```
>
> ```abc
> X:1
> T:Escalas, dos octavas
> M:4/4
> L:1/8
> K:Ab
> V:1 clef=treble name="MD"
> V:2 clef=bass name="MI"
> [V:1] "Ab""^3"A, "^4"B, "^1"C "^2"D "^3"E "^1"F "^2"G "^3"A | "^4"B "^1"c "^2"d "^3"e "^1"f "^2"g "^3"a "^2"g | "^1"f "^3"e "^2"d "^1"c "^4"B "^3"A "^2"G "^1"F | "^3"E "^2"D "^1"C "^4"B, "^3"A,2 z2 |
> [V:2] "_3"A,, "_2"B,, "_1"C, "_4"D, "_3"E, "_2"F, "_1"G, "_3"A, | "_2"B, "_1"C "_4"D "_3"E "_2"F "_1"G "_3"A "_1"G | "_2"F "_3"E "_4"D "_1"C "_2"B, "_3"A, "_1"G, "_2"F, | "_3"E, "_4"D, "_1"C, "_2"B,, "_3"A,,2 z2 |
> [V:1] [K:Eb clef=treble] "Eb""^3"E "^1"F "^2"G "^3"A "^4"B "^1"c "^2"d "^3"e | "^1"f "^2"g "^3"a "^4"b "^1"c' "^2"d' "^3"e' "^2"d' | "^1"c' "^4"b "^3"a "^2"g "^1"f "^3"e "^2"d "^1"c | "^4"B "^3"A "^2"G "^1"F "^3"E2 z2 |]
> [V:2] [K:Eb clef=bass] "_3"E, "_2"F, "_1"G, "_4"A, "_3"B, "_2"C "_1"D "_3"E | "_2"F "_1"G "_4"A "_3"B "_2"c "_1"d "_3"e "_1"d | "_2"c "_3"B "_4"A "_1"G "_2"F "_3"E "_1"D "_2"C | "_3"B, "_4"A, "_1"G, "_2"F, "_3"E,2 z2 |]
> ```
>
> ```abc
> X:1
> T:Escalas, dos octavas
> M:4/4
> L:1/8
> K:Bb
> V:1 clef=treble name="MD"
> V:2 clef=bass name="MI"
> [V:1] "Bb""^4"B, "^1"C "^2"D "^3"E "^1"F "^2"G "^3"A "^4"B | "^1"c "^2"d "^3"e "^1"f "^2"g "^3"a "^4"b "^3"a | "^2"g "^1"f "^3"e "^2"d "^1"c "^4"B "^3"A "^2"G | "^1"F "^3"E "^2"D "^1"C "^4"B,2 z2 |
> [V:2] "_3"B,, "_2"C, "_1"D, "_4"E, "_3"F, "_2"G, "_1"A, "_3"B, | "_2"C "_1"D "_4"E "_3"F "_2"G "_1"A "_3"B "_1"A | "_2"G "_3"F "_4"E "_1"D "_2"C "_3"B, "_1"A, "_2"G, | "_3"F, "_4"E, "_1"D, "_2"C, "_3"B,,2 z2 |
> [V:1] [K:F clef=treble] "F""^1"F "^2"G "^3"A "^4"B "^1"c "^2"d "^3"e "^1"f | "^2"g "^3"a "^4"b "^1"c' "^2"d' "^3"e' "^4"f' "^3"e' | "^2"d' "^1"c' "^4"b "^3"a "^2"g "^1"f "^3"e "^2"d | "^1"c "^4"B "^3"A "^2"G "^1"F2 z2 |]
> [V:2] [K:F clef=bass] "_5"F, "_4"G, "_3"A, "_2"B, "_1"C "_3"D "_2"E "_1"F | "_4"G "_3"A "_2"B "_1"c "_3"d "_2"e "_1"f "_2"e | "_3"d "_1"c "_2"B "_3"A "_4"G "_1"F "_2"E "_3"D | "_1"C "_2"B, "_3"A, "_4"G, "_5"F,2 z2 |]
> ```
>
> ```abc
> X:1
> T:Las 12 cadencias con V⁶₅
> M:4/4
> L:1/4
> K:C
> V:1 clef=treble name="MD"
> V:2 clef=bass name="MI"
> [V:1] "C""^1-3-5"[CEG] "F/C""^1-3-5"[CFA] "G7/B""^1-2-4-5"[B,DFG] "C""^1-3-5"[CEG] | [K:G clef=treble] "G""^1-3-5"[GBd] "C/G""^1-3-5"[Gce] "D7/F#""^1-2-4-5"[FAcd] "G""^1-3-5"[GBd] | [K:D clef=treble] "D""^1-3-5"[DFA] "G/D""^1-3-5"[DGB] "A7/C#""^1-2-4-5"[CEGA] "D""^1-3-5"[DFA] | [K:A clef=treble] "A""^1-3-5"[A,CE] "D/A""^1-3-5"[A,DF] "E7/G#""^1-2-4-5"[G,B,DE] "A""^1-3-5"[A,CE] |
> [V:2] "_5-1"[C,,C,] "_5-1"[F,,F,] "_5-1"[G,,G,] "_5-1"[C,,C,] | [K:G clef=bass] "_5-1"[G,,G,] "_5-1"[C,,C,] "_5-1"[D,,D,] "_5-1"[G,,G,] | [K:D clef=bass] "_5-1"[D,,D,] "_5-1"[G,,G,] "_5-1"[A,,A,] "_5-1"[D,,D,] | [K:A clef=bass] "_5-1"[A,,A,] "_5-1"[D,,D,] "_5-1"[E,,E,] "_5-1"[A,,A,] |
> [V:1] [K:E clef=treble] "E""^1-3-5"[EGB] "A/E""^1-3-5"[EAc] "B7/D#""^1-2-4-5"[DFAB] "E""^1-3-5"[EGB] | [K:B clef=treble] "B""^1-3-5"[B,DF] "E/B""^1-3-5"[B,EG] "F#7/A#""^1-2-4-5"[A,CEF] "B""^1-3-5"[B,DF] | [K:F# clef=treble] "F#""^1-3-5"[FAc] "B/F#""^1-3-5"[FBd] "C#7/E#""^1-2-4-5"[EGBc] "F#""^1-3-5"[FAc] | [K:Db clef=treble] "Db""^1-3-5"[DFA] "Gb/Db""^1-3-5"[DGB] "Ab7/C""^1-2-4-5"[CEGA] "Db""^1-3-5"[DFA] |
> [V:2] [K:E clef=bass] "_5-1"[E,,E,] "_5-1"[A,,A,] "_5-1"[B,,B,] "_5-1"[E,,E,] | [K:B clef=bass] "_5-1"[B,,B,] "_5-1"[E,,E,] "_5-1"[F,,F,] "_5-1"[B,,B,] | [K:F# clef=bass] "_5-1"[F,,F,] "_5-1"[B,,B,] "_5-1"[C,C] "_5-1"[F,,F,] | [K:Db clef=bass] "_5-1"[D,,D,] "_5-1"[G,,G,] "_5-1"[A,,A,] "_5-1"[D,,D,] |
> [V:1] [K:Ab clef=treble] "Ab""^1-3-5"[A,CE] "Db/Ab""^1-3-5"[A,DF] "Eb7/G""^1-2-4-5"[G,B,DE] "Ab""^1-3-5"[A,CE] | [K:Eb clef=treble] "Eb""^1-3-5"[EGB] "Ab/Eb""^1-3-5"[EAc] "Bb7/D""^1-2-4-5"[DFAB] "Eb""^1-3-5"[EGB] | [K:Bb clef=treble] "Bb""^1-3-5"[B,DF] "Eb/Bb""^1-3-5"[B,EG] "F7/A""^1-2-4-5"[A,CEF] "Bb""^1-3-5"[B,DF] | [K:F clef=treble] "F""^1-3-5"[FAc] "Bb/F""^1-3-5"[FBd] "C7/E""^1-2-4-5"[EGBc] "F""^1-3-5"[FAc] |]
> [V:2] [K:Ab clef=bass] "_5-1"[A,,A,] "_5-1"[D,,D,] "_5-1"[E,,E,] "_5-1"[A,,A,] | [K:Eb clef=bass] "_5-1"[E,,E,] "_5-1"[A,,A,] "_5-1"[B,,B,] "_5-1"[E,,E,] | [K:Bb clef=bass] "_5-1"[B,,B,] "_5-1"[E,,E,] "_5-1"[F,,F,] "_5-1"[B,,B,] | [K:F clef=bass] "_5-1"[F,,F,] "_5-1"[B,,B,] "_5-1"[C,C] "_5-1"[F,,F,] |]
> ```

## 4 · Aplicación · 4 minutos

- [ ] **Graba** la intro y el coro de Louise con tus voicings.

## 5 · Sleep on the Floor · 11 minutos

- [ ] **(11')** **Graba** la toma completa, sin parar: la intro a 50 o más y el resto a 56 o más.

**Metrónomo para la pieza** (cambia el número a tu tempo de trabajo):

```strudel
let bpm = 56   // tu tempo de trabajo
setcpm(bpm/4)
s("hh*4").bank("RolandTR909").gain("1 .4 .4 .4")
```

![[The Lumineers - Sleep on the Floor.pdf#page=1]]

![[The Lumineers - Sleep on the Floor.pdf#page=2]]

![[The Lumineers - Sleep on the Floor.pdf#page=3]]

## 6 · Registro · 2 minutos

- **Teclado** · BPM: · qué falló:
- **Hanon** · BPM: · qué falló:
- **Sleep on the Floor** · BPM: · compases que fallan:
- **Qué cambio para la próxima sesión:**

**Grabación de hoy:** todo → `AAAA-MM-DD piano semana 6.m4a`. Llena también el registro semanal y los hitos del [[00. Plan y progreso|Plan]].

> [!check] Hecho cuando
> existe la toma completa de Sleep on the Floor (sin parar, al 80 % del tempo o más) y la de teclado.
> Si no sale, mañana repites este día: no se pasa al siguiente.

> [!tip] Al terminar
> Llena las propiedades de arriba: `hecho`, `fecha`, los tres BPM y `audio` si grabaste.
> Así la sesión aparece al día en [[00. Plan y progreso]].
