# La bóveda: estructura, flujos y reglas

> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario (Obsidian + git), el 2026-10-18. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.

Cómo está organizada la bóveda, los seis flujos, las reglas duras, las plantillas y lo que una IA no escribe.

Contiene:

- `Inicio.md`
- `CLAUDE.md`
- `6. Práctica/0. Flujos.md`
- `6. Práctica/1. Estructura.md`
- `6. Práctica/3. Diagnóstico.md`
- `7. Partituras/Sistema de partituras.md`
- `7. Partituras/Cómo usar las partituras.md`
- `10. System/2. Plantillas/0. Notas/Actividad de curso.md`
- `10. System/2. Plantillas/0. Notas/Análisis.md`
- `10. System/2. Plantillas/0. Notas/Clase.md`
- `10. System/2. Plantillas/0. Notas/Concepto.md`
- `10. System/2. Plantillas/0. Notas/Curso.md`
- `10. System/2. Plantillas/0. Notas/Estudio.md`
- `10. System/2. Plantillas/0. Notas/Obra.md`
- `10. System/2. Plantillas/0. Notas/Semana.md`
- `10. System/2. Plantillas/0. Notas/Sesión deliberada.md`
- `10. System/2. Plantillas/0. Notas/Setup.md`
- `10. System/2. Plantillas/1. Bloques/Rúbrica - Composición.md`
- `10. System/2. Plantillas/1. Bloques/bloque — decisión.md`
- `10. System/2. Plantillas/1. Bloques/bloque — dónde va cada archivo.md`
- `10. System/2. Plantillas/1. Bloques/bloque — prueba de posesión.md`
- `10. System/2. Plantillas/2. Notación/abc — dos voces.md`
- `10. System/2. Plantillas/2. Notación/abc — fragmento.md`
- `10. System/2. Plantillas/2. Notación/abc — melodía con cifrado.md`
- `10. System/2. Plantillas/2. Notación/partitura — estudio.md`
- `10. System/2. Plantillas/2. Notación/strudel — acordes.md`
- `10. System/2. Plantillas/2. Notación/strudel — capas.md`
- `10. System/2. Plantillas/2. Notación/strudel — melodía.md`
- `10. System/2. Plantillas/2. Notación/strudel — patrón + bajo.md`
- `10. System/2. Plantillas/2. Notación/strudel — ritmo.md`
- `10. System/2. Plantillas/2. Notación/strudel — secciones.md`

---

## Archivo: `Inicio.md`

```yaml
tipo: mapa
estado: vigente
aliases:
```

# Inicio

> [!abstract] Qué es esto
> Una bóveda para aprender música y **terminar piezas**. No es un archivo de teoría: es un sistema donde lo que estudias acaba sonando.

## Estado activo

| | |
|---|---|
| **Obra activa** | [[Intro\|Louise]] |
| **Concepto activo** | |
| **Curso en marcha** | [[2. Cursos/1. Cresciente/00. Curso\|Cresciente]] — módulo 1B Séptimas |
| **Día de revisión semanal** | *(elegir uno fijo)* |
| **Último audio** | |

---

## La regla que lo ordena todo

> **Las carpetas se ordenan por lo que la nota *es*, nunca por el tema del que habla.**

El tema es transversal: séptimas aparecen en una clase, en un ejercicio, en una guía de IA y en una pieza. Si el tema decidiera la carpeta, la misma idea se partiría en cuatro sitios — que es exactamente lo que pasó antes.

Por eso el tema vive en **enlaces**, y la carpeta la decide **una sola pregunta**.

## ¿Dónde va esto?

Bájala hasta el primer sí y detente. *(Esto es para notas. Una partitura de
MuseScore no es una nota: va siempre a `7. Partituras/` — ve
[[7. Partituras/Sistema de partituras|Sistema de partituras]].)*

| | ¿Es…? | Va a |
|---:|---|---|
| 1 | Lo que anoté **durante** una clase, sin editar | `2. Cursos/<fuente>/` |
| 2 | Algo que **escribí o toqué yo** a raíz de una clase | `2. Cursos/<fuente>/<lección>/Estudios/` |
| 3 | Mi explicación consolidada de **un concepto** | `1. Teoría/<área>/` |
| 4 | Material generado por **IA** como apoyo | `1. Teoría/<área>/AI/` |
| 5 | Un ejercicio o rutina con respuesta correcta | `2. Cursos/0. Profesor/1. Rutinas/` |
| 6 | Trabajo sobre **una pieza mía** | `3. Composiciones/<obra>/` |
| 7 | Un registro **fechado** de lo que hice | `6. Práctica/4. Bitácora/` |
| 8 | Sobre música **de otros** | `5. Referencias/` |
| 9 | Sobre técnica de guitarra o piano | `4. Instrumento/` |
| 10 | Instalación o configuración de **equipo o software** | `8. Setup/` |
| 11 | Ninguna de las anteriores | `0. Entrada/` |

> **Todo lo que nace de una lección entra en `Estudios/`** — un estudio, una composición o un análisis, da igual. Mover algo a `3. Composiciones/` o a `5. Referencias/` es una **promoción posterior y explícita**, no el destino por defecto.

Detalle completo en [[6. Práctica/1. Estructura]].

## El mapa

| Carpeta | Qué guarda |
|---|---|
| `0. Entrada/` | Lo que aún no sé dónde va. Se vacía cada semana. |
| `1. Teoría/` | **Lo que sé**, por concepto. Nueve áreas. Se reescribe, no se clona. |
| `2. Cursos/` | **De dónde vino.** Tres fuentes, cada una con su numeración. |
| `3. Composiciones/` | **Lo que hago.** Una carpeta por obra. |
| `4. Instrumento/` | Guitarra y piano: técnica, no teoría. |
| `5. Referencias/` | Música de otros: análisis, inspiración, partituras. |
| `6. Práctica/` | Flujos, plantillas, bitácora y diagnóstico. |
| `7. Partituras/` | **Lo que suena.** Las fuentes de MuseScore, versionadas. |
| `8. Setup/` | **Cómo está montado el equipo.** Hardware y software, Windows y macOS. Ver [[8. Setup/0. Índice]]. |
| `9. Assets/` | Imágenes. |
| `_legacy/` | Archivado. Nunca se borra nada, solo deja de estorbar. |

## El circuito

```
2. Cursos  ──aporta──▶  1. Teoría  ──se aplica en──▶  3. Composiciones
                            ▲                                │
                            └────────evidencia vivida────────┘
```

La flecha de vuelta es la importante: lo que descubres componiendo **sube** a la nota de concepto. Una pieza no es solo un producto, es una fuente.

---

## Los seis flujos

Todo detallado en [[6. Práctica/0. Flujos]].

| | Flujo | Se dispara cuando | Está hecho cuando |
|---:|---|---|---|
| ① | **Clase** | tomas una clase o módulo | una nota de `1. Teoría/` cambió |
| ② | **Composición** | tienes una idea o una restricción | existe un `.m4a` y aplicaste la rúbrica |
| ③ | **Referencia** | escuchas algo que te mueve | un concepto ganó un párrafo con esa evidencia |
| ④ | **Sesión** | te sientas a trabajar | `evidencia_audio` no está vacío |
| ⑤ | **Semana** | tu día fijo | hay al menos un audio nuevo |
| ⑥ | **Curso** | empiezas uno, y al cerrar cada lección | cada lección tiene concepto y veredicto de posesión |

No hay calendario. No hay semanas numeradas. **Nada que recuperar si te atrasas** — un bucle no se atrasa, solo no se dispara.

## Reglas duras

1. **Una obra activa a la vez.**
2. **Semana sin audio es semana en blanco**, por mucho que hayas estudiado.
3. **La nota de concepto la escribes tú.** La IA escribe en `AI/`.
4. **Una dificultad nueva por proyecto.**
5. **Nada se borra.** Lo superado se archiva en `_legacy/`.
6. **Toda teoría termina en una decisión musical.** Si no puedes oírla ni aplicarla, todavía no la aprendiste.
7. **Se evalúa después de descansar.** La escucha inmediata está sesgada por la intención.

## Accesos

- [[6. Práctica/0. Flujos]] — los seis bucles, paso a paso
- [[6. Práctica/1. Estructura]] — por qué está organizado así y dónde va cada cosa
- [[Clase]] · [[Obra]] · [[Semana]] · [[Curso]]
- [[Sesión deliberada]] · [[Rúbrica - Composición]]
- [[6. Práctica/3. Diagnóstico]] — de dónde parte todo esto
- [[6. Práctica/4. Bitácora/00. Índice]]
- [[7. Partituras/Cómo usar las partituras]] — el ciclo diario · [[7. Partituras/Sistema de partituras]] — cómo está montado

## Cursos

- [[2. Cursos/0. Profesor/00. Curso]] — **corrección** · abierto · 3 lecciones sin consolidar
- [[2. Cursos/1. Cresciente/00. Curso]] — **cobertura** · módulo 1B en marcha
- [[2. Cursos/2. Udemy - Lectura rítmica/00. Curso]] — **lectura** · 8 lecciones, finito

---

## Archivo: `CLAUDE.md`

# Reglas para agentes de IA

Esta bóveda es un sistema para aprender música y **terminar piezas**. No es un
archivo de teoría: es una máquina donde lo que se estudia acaba sonando.

Antes de tocar nada, la documentación viva es:

| Documento | Qué responde |
|---|---|
| [[Inicio]] | el mapa, el estado activo y las reglas duras |
| [[6. Práctica/1. Estructura]] | por qué está organizado así y dónde va cada cosa |
| [[6. Práctica/0. Flujos]] | los seis bucles, con su definición de hecho |
| [[7. Partituras/Sistema de partituras]] | cómo se versionan y renderizan las partituras |
| [[7. Partituras/Cómo usar las partituras]] | el ciclo diario con MuseScore |

**Si algo de este archivo contradice a esos, gana el documento y este archivo
está desactualizado: díselo al usuario.**

---

## Quién es el usuario

Ingeniero de software de 29 años, guitarrista y pianista. Compone **dream pop,
folk y música triste**. Influencias: Beach House, Lumineers, Harmless/Twin
Cabins, Andrew Bird, Radiohead/Thom Yorke, Avi Buffalo, Bob Dylan, Bon Iver.

Tiene un profesor humano (Fabs) además de los cursos. **La IA no lo sustituye.**

Escribe en español. Respóndele en español.

---

## La regla de oro

> **Las carpetas se ordenan por lo que la nota *es*, nunca por el tema del que habla.**

El tema es transversal — séptimas aparecen en una clase, en un ejercicio, en una
guía de IA y en una pieza. Si el tema decidiera la carpeta, la misma idea se
partiría en cuatro sitios. Eso ya pasó: 143 notas de teoría sobre 26 lecciones.

Por eso el tema vive en **enlaces**, y la carpeta la decide una sola pregunta.

## Dónde va cada nota

Baja hasta el primer sí y detente. **El tema nunca entra en la decisión.**

| | ¿Es…? | Va a |
|---:|---|---|
| 1 | Apunte tomado **durante** una clase, sin editar | `2. Cursos/<fuente>/` |
| 2 | Algo que el usuario **escribió o tocó** a raíz de una clase | `2. Cursos/<fuente>/<lección>/Estudios/` |
| 3 | Su explicación consolidada de **un concepto** | `1. Teoría/<área>/` |
| 4 | Material generado por **IA** como apoyo | `1. Teoría/<área>/AI/` |
| 5 | Ejercicio o rutina con respuesta correcta | `2. Cursos/0. Profesor/1. Rutinas/` |
| 6 | Trabajo sobre **una pieza suya** | `3. Composiciones/<obra>/` |
| 7 | Registro **fechado** de lo que hizo | `6. Práctica/4. Bitácora/` |
| 8 | Sobre música **de otros** | `5. Referencias/` |
| 9 | Sobre técnica de guitarra o piano | `4. Instrumento/` |
| 10 | Instalación o configuración de **equipo o software** | `8. Setup/` |
| 11 | Ninguna de las anteriores | `0. Entrada/` |

El punto **2 gana al 6**: todo lo que nace de una lección entra en `Estudios/`,
**aunque sea una obra**. Que algo sea obra cambia *cómo se trabaja*
(`definicion_terminado`, rúbrica, audio), no *dónde vive*. Mover algo a
`3. Composiciones/` es una **promoción posterior y explícita** que pide el
usuario; no promover es el estado normal.

### El mapa

| Carpeta | Qué guarda |
|---|---|
| `0. Entrada/` | lo que aún no se sabe dónde va; se vacía cada semana |
| `1. Teoría/` | **lo que sabe**, por concepto. Nueve áreas. Se reescribe, no se clona |
| `2. Cursos/` | **de dónde vino.** Tres fuentes, cada una con su numeración nativa |
| `3. Composiciones/` | **lo que hace.** Una carpeta por obra |
| `4. Instrumento/` | guitarra y piano: técnica, no teoría |
| `5. Referencias/` | música de otros: análisis, inspiración, partituras |
| `6. Práctica/` | el sistema mismo: flujos, estructura, bitácora, diagnóstico |
| `7. Partituras/` | **todas** las partituras de MuseScore |
| `8. Setup/` | cómo está montado el equipo: hardware y software, Windows y macOS |
| `9. Assets/` | imágenes |
| `10. System/` | plantillas y bloques reutilizables |
| `_legacy/` | archivado. Nunca se borra nada |
| `_scripts/` | las herramientas |

Las nueve áreas de `1. Teoría/`: `0. Fundamentos`, `1. Armonía`, `2. Conducción`,
`3. Contrapunto`, `4. Melodía`, `5. Forma`, `6. Ritmo`, `7. Solfeo`,
`8. Textura y arreglo`.

Las tres fuentes de `2. Cursos/`: `0. Profesor` (numeración 1–26, aporta
**corrección**), `1. Cresciente` (1A/1B/2…, aporta **cobertura**),
`2. Udemy - Lectura rítmica` (0–7).

---

## Lo que una IA NO escribe

Esto es lo más importante de este archivo.

1. **Las notas de concepto de `1. Teoría/<área>/*.md` las escribe el usuario.**
   Ahí ocurre la síntesis, y si la escribe una IA desaparece la presión de
   sintetizar — que es el punto entero de la bóveda. Puedes **proponer** una
   edición; no la apliques sin que él la pida explícitamente.
2. **El material generado por IA va a `1. Teoría/<área>/AI/`**, enlazado desde el
   concepto al que sirve. Esa es la carpeta donde sí puedes escribir libremente.
3. **No compongas por él.** Si pide una especificación de ejercicio, escribe
   instrucciones: qué hacer y cómo. No pongas la tonalidad, el tempo, la
   progresión, el motivo ni los compases — eso es el ejercicio.
4. **No borres nada.** Lo superado se mueve a `_legacy/`.
5. **No crees una nota nueva en `1. Teoría/` para un concepto que ya existe.**
   Comprueba primero; si existe, se amplía. Un archivo hermano nuevo es
   exactamente el fallo que produjo las 143 notas.
6. **No renumeres un curso** para encajarlo con otro.
7. **No inventes rutas ni convenciones.** Si no está documentado, dilo y
   pregunta. Media convención inventada cuesta una sesión de confusión.

---

## Archivos de música

### Partituras

**Todas viven en `7. Partituras/`, sin excepción.** No es una preferencia:
`_scripts/sync-partituras.py` solo recorre esa carpeta, así que un `.mscz` en
cualquier otro sitio **nunca genera su `.musicxml` y nunca se renderiza en
Obsidian** — y falla en silencio.

| Subcarpeta | Qué guarda |
|---|---|
| `1. Clases/` | ejercicios de las clases con el profesor |
| `2. Composiciones/` | piezas propias ya promovidas |
| `3. Referencias/` | obras de otros |
| `4. Cursos/<curso>/` | lo escrito para un curso (Cresciente) |

Cada partitura son **dos archivos hermanos**, mismo nombre, misma carpeta:

```
7. Partituras/2. Composiciones/Nocturno primer intento.mscz      ← fuente, se edita en MuseScore
7. Partituras/2. Composiciones/Nocturno primer intento.musicxml  ← derivado, lo lee Obsidian
```

| Extensión | Qué es | ¿A git? |
|---|---|---|
| `.mscz` | fuente de MuseScore, la única verdad | **sí** |
| `.musicxml` | derivado; lo genera el script, permite el diff musical | **sí** |
| `.mxl` | MusicXML comprimido | **no se usa nunca** — es un ZIP y Verovio no lo lee |
| `.m4a` `.mp3` `.pdf` | derivados | **no** — git los ignora en toda la bóveda |

**El audio va donde sea.** No hay convención y no hace falta: `.gitignore`
ignora `*.m4a`, `*.wav`, `*.mp3` y `**/render/` en cualquier ruta.

### El ciclo

```bash
# 1. el usuario edita y guarda en MuseScore
./_scripts/sync-partituras.py                  # 2. regenera el .musicxml
git commit -am "qué cambió y por qué"          # 3. esto es lo que versiona
```

Guardar en MuseScore **sobrescribe**. Solo el commit deja un punto al que volver.
El `.musicxml` **nunca se edita a mano**: el próximo sync lo pisa.

### Configuraciones de equipos

Una carpeta por equipo o programa en `8. Setup/3. Configuraciones/<equipo>/`,
con lo que exporta su editor (MidiSuite → `.spc`, MIDI Control Center → `.keystep2`,
Analog Lab → `.labmidi`). Tres reglas:

1. **Solo va lo que el programa exporta.** Nunca archivos copiados de `AppData`,
   nunca licencias, números de serie ni claves.
2. **Lo que no se puede exportar se escribe en la nota del equipo**, como tabla.
3. **Nombre `<Equipo> - <para qué>.<ext>`**, con `P<n>` si el aparato tiene ranuras
   de preset (`SMC-PAD - P2.spc`). Sin versiones en el nombre: se exporta encima y
   el commit dice qué cambió.

Detalle en [[8. Setup/0. Índice#Configuraciones]].

### Notación dentro de una nota

| | Bloque ` ```abc ` | Bloque ` ```strudel ` | Bloque ` ```verovio ` |
|---|---|---|---|
| Para | 2–8 compases | patrones y ritmo | partitura completa |
| Fuente | texto en la nota | texto en la nota | ruta al `.musicxml` |

La ruta de un bloque `verovio` es **relativa a la raíz de la bóveda**. Una ruta
absoluta existe en disco pero el plugin no la encuentra: consulta el índice de
Obsidian, no el sistema de archivos.

```verovio
7. Partituras/2. Composiciones/Dawn Chorus - arpegios.musicxml
scale: 40
adjustPageHeight: true
```

En corto: **MuseScore para conducción de voces, Strudel para ritmo.** Cada uno es
malo fuera de su terreno.

---

## Nomenclatura

- Prefijo numérico **entero** en carpetas y archivos: `1. Armonía/0. Séptimas.md`
- Cero a la izquierda si el grupo pasa de 10: `00.`, `01.`
- **Nunca decimales** (`8.1`, `11.3`): fue el síntoma del colapso anterior
- Sin guiones largos (`—`) en nombres de **carpeta**
- Sin `:` en ningún nombre — rompe las rutas de Obsidian
- Archivos fechados: `AAAA-MM-DD` delante
- **Sin número de iteración en las partituras.** Las iteraciones son commits;
  las variantes llevan sufijo descriptivo (`Contrapunto - 3a especie`)

## Frontmatter

Todas las notas:

```yaml
tipo:   # captura | concepto | guia-ai | ejercicio | estudio
        # composicion | sesion | semana | mapa | referencia | rubrica | setup
estado: # vigente | borrador | superseded | archivado
```

Material en `AI/` — enlaza al concepto al que sirve:

```yaml
tipo: guia-ai
estado: vigente
area: 1. Armonía
concepto: "[[0. Séptimas]]"
```

Los tipos de propiedad son **globales en la bóveda**: si `leccion` es número en
un sitio, lo es en todos. Eso convierte un error de tecleo en un error visible.

Plantillas listas en `10. System/2. Plantillas/`: notas (`Clase`, `Concepto`,
`Obra`, `Estudio`, `Actividad de curso`, `Semana`, `Sesión deliberada`, `Setup`), bloques
reutilizables (`bloque — dónde va cada archivo`, `bloque — prueba de posesión`,
`Rúbrica - Composición`) y snippets de notación.

---

## Las reglas duras del sistema

Vienen de [[Inicio]]. No son negociables sin que el usuario lo decida:

1. **Una obra activa a la vez.**
2. **Semana sin audio es semana en blanco**, por mucho que haya estudiado.
3. **La nota de concepto la escribe él.** La IA escribe en `AI/`.
4. **Una dificultad nueva por proyecto.**
5. **Nada se borra.** Lo superado se archiva en `_legacy/`.
6. **Toda teoría termina en una decisión musical.** Si no se puede oír ni
   aplicar, todavía no se aprendió.
7. **Se evalúa después de descansar.** La escucha inmediata está sesgada por la
   intención.

## Al escribir contenido

- **Correlaciona con lo que ya existe.** Busca en `1. Teoría/` el concepto que
  toca y enlázalo explícitamente. Una nota suelta no vale.
- Incluye ejemplos, explicación larga y recursos visuales.
- Toda teoría debe terminar en algo aplicable a una pieza.

## Antes de terminar

```bash
./_scripts/verificar-bloques.py    # que todo bloque verovio apunte a un archivo real
```

Y comprueba que los `[[enlaces]]` que escribiste resuelven a notas existentes.
Un enlace roto en Obsidian no avisa: simplemente no lleva a ningún sitio.

---

## Trampas conocidas

- **Normalización Unicode.** Los `.mscz` bajados del navegador traen los acentos
  en NFC y MuseScore escribe NFD. Para APFS son el mismo archivo, como cadena no
  coinciden. Todo script que compare rutas normaliza a NFC.
- **Git escapa los acentos.** `git ls-files` devuelve `Composici\303\263n` salvo
  que se le pase `-c core.quotePath=false`.
- **`with_suffix()` de Python** se come parte del nombre cuando lleva puntos.

Todas las herramientas:

```bash
./_scripts/sync-partituras.py            # regenera el MusicXML que cambió
./_scripts/historial.py [partitura]      # historial con cambios musicales
./_scripts/diff-musical.py a.xml b.xml   # comparar dos archivos
./_scripts/ordenar-downloads.py          # ordena .mscz sueltos en ~/Downloads
./_scripts/verificar-bloques.py          # revisa que los bloques verovio resuelvan
./_scripts/generar-presets.py            # presets de equipos, bancos de Analog Lab y sus notas (catálogo en _scripts/presets/)
./_scripts/strudel-a-arp.py              # strudels de 2. Strudel/6. Arpegiadores/ → .ARP (arpegiador de Sonar) y .mid al lado
./_scripts/generar-chatgpt.py            # fuentes de los proyectos de ChatGPT (8. Setup/6. ChatGPT/<proyecto>/.fuentes/)
./_scripts/configurar-git.sh             # activa el diff musical (una vez por clon)
```

---

## Archivo: `6. Práctica/0. Flujos.md`

```yaml
tipo: mapa
estado: vigente
```

# Flujos

> [!abstract] Qué es un flujo
> Un **bucle**: "cuando pasa X, haz Y". No un temario.
>
> Un temario tiene fechas, y en cuanto te atrasas una semana te deja atrás. Un bucle no se atrasa: si no tomas clase en tres semanas, el flujo de clase simplemente no corre, y no hay nada que recuperar.

Seis bucles. Cada uno tiene **disparador**, **pasos**, **artefactos** y **definición de hecho**.

La definición de hecho es la parte que importa. Sin ella, "estudiar" es un estado difuso que puede durar meses sin producir nada.

---

# ① Clase → concepto

**Disparador:** tomas una clase con Fabs, un módulo de Cresciente o una lección de Udemy.

Este es el bucle que impide que la teoría se acumule sin converger.

## Paso 1 — Captura cruda

Durante la clase, en `2. Cursos/<fuente>/`.

- Sin editar, sin ordenar, sin redactar bonito.
- Es un **registro de lo que pasó**, no un documento de referencia.
- Nunca se reescribe después. Queda como testimonio fechado.

Plantilla: [[Clase]]

## Paso 2 — ¿Ya existe el concepto?

Busca en `1. Teoría/` el concepto que la clase toca.

### Si NO existe

Nace la nota de concepto. **Es la única circunstancia en la que se crea un archivo nuevo en `1. Teoría/`.**

### Si YA existe → prueba de posesión

Aquí es donde se responde a la sensación de "ya vi esto y no avanzo".

> **20 minutos, sin apuntes, sin abrir la bóveda.**
> Produce el concepto como **artefacto sonoro escrito por ti**: 8–16 compases.

### Con qué herramienta

| Área | Herramienta | Por qué |
|---|---|---|
| Armonía · Conducción · Contrapunto | **MuseScore** | necesitas pentagramas para ver conducción de voces |
| **Ritmo** | **Strudel** — bloque ```` ```strudel ```` | es literalmente un lenguaje de patrones |
| Melodía · Forma | cualquiera | |

Cada uno es malo fuera de su terreno: MuseScore no sabe expresar un groove, Strudel no sabe expresar una resolución de séptima. Referencia en [[4. Instrumento/2. Strudel/0. Qué es y cómo se usa]].

Un patrón de Strudel es **texto**, así que vive dentro de la nota del estudio. Una partitura de MuseScore son archivos, y **no viven en `Estudios/`**: van a `7. Partituras/`, porque `_scripts/sync-partituras.py` solo recorre esa carpeta.

```
7. Partituras/4. Cursos/<curso>/2026-09-23 séptimas — 4 especies.mscz       ← fuente editable
7. Partituras/4. Cursos/<curso>/2026-09-23 séptimas — 4 especies.musicxml   ← lo genera el script; es lo que renderiza Verovio
```

En `Estudios/` va **la nota**, que incrusta la partitura con un bloque `verovio`. El
`.m4a` que exporta MuseScore puede quedarse donde sea: git ignora todo el audio.

**Veredicto:**

| | |
|---|---|
| Lo escribiste sin consultar y **suena** | `poseído` → cero apuntes; la clase se usa para aplicarlo |
| Tuviste que consultar | `no poseído` → la repetición estaba justificada, y ahora sí te sirve |

### Por qué partitura y no solo audio

- **Es inspeccionable.** Una grabación tuya tocando séptimas no dice qué elegiste. La partitura sí: se ve el voicing, la duplicación, si evitaste la ♭9 entre bajo y voz contigua.
- **No puedes esconderte.** Rasgueando disimulas; escribiendo decides cada voz.
- **El audio sale gratis.** MuseScore exporta `.m4a` en un paso.
- **Se relee.** En seis meses puedes juzgar tus propias decisiones.
- **No es desechable.** 8 compases de séptimas sobre tu propia melodía son material que puede entrar en una pieza.

### Especificación del estudio

Para que no se convierta en un proyecto:

- **8–16 compases.** No más.
- **Una sola dificultad:** el concepto en cuestión. Nada de estrenar métrica y armonía a la vez.
- **Tiene que sonar**, no solo ser correcto.
- **Sin consultar apuntes.** Eso es lo que lo convierte en prueba.

## Paso 3 — Extracción

Editas la nota de concepto en `1. Teoría/<área>/` con lo que la clase aportó.

**No creas un archivo nuevo. Editas el que existe.**

Ahí es donde ocurre la acumulación: la nota de séptimas ya tenía lo de Fabs, ahora recibe lo de Cresciente, y las dos cosas se sintetizan en un texto tuyo.

## Paso 4 — Enlaces

La nota de concepto declara de dónde viene y qué la prueba:

```yaml
fuentes:
  - "[[Notas 2. 7mas]]"
  - "[[1. Acordes de séptima]]"
estudios:
  - "[[2026-09-23 séptimas — 4 especies.musicxml]]"
```

Y en el cuerpo:

```markdown
## Posesión
2026-09-23 · escrito sin apuntes · veredicto: poseído
```

Y debajo, un bloque `verovio` con la ruta al `.musicxml` — relativa a la raíz de
la bóveda. La sintaxis y las opciones están en
[[7. Partituras/Cómo usar las partituras]].

Verovio lo renderiza y lo reproduce dentro de la nota.

## Definición de hecho

> **Una nota de `1. Teoría/` cambió.**
>
> Si nada cambió en Teoría, la clase no aterrizó — por muy buenos que sean los apuntes.

---

# ② Composición

**Disparador:** una idea, o la decisión de aplicar un concepto bajo restricción.

> **Regla dura: una obra activa a la vez.**

## Paso 1 — Abrir la obra

```
3. Composiciones/<n>. <nombre>/
├── <Nombre>.md          ← la nota
├── render/              ← audio y PDF (derivados, gitignored)
└── ref/                 ← referencias que la inspiraron
```

La partitura **no** va aquí: va a `7. Partituras/2. Composiciones/`, como todas.
Ver [[7. Partituras/Sistema de partituras]].

Plantilla: [[Obra]]

**`definicion_terminado` se escribe el día uno.** No es negociable después. "Que quede bien" no es una definición válida; "90 s, forma AABA, una toma limpia exportada" sí.

## Paso 2 — Trabajar

Cada sesión usa [[Sesión deliberada]].

**Bounce incondicional:** cada vez que dejas de trabajar, exportas audio a `render/`. Aunque esté feo, aunque no esté terminada, aunque no te guste. Grabar no es una recompensa por terminar — es el registro de que pasaste por ahí.

Nombre de los renders, fecha primero:

```
2026-09-23 worktape.m4a
2026-10-02 demo.m4a
```

## Paso 3 — Registrar decisiones

Cada decisión, **una línea** en `## Decisiones`, con enlace al concepto:

```markdown
- Csus2 → D7 en c. 9 — natural pero con tensión retenida. → [[1. Acordes dominantes]]
- 12/8 en vez de 4/4 — el arpegio respira, el tempo queda bajo 70. → [[2. Path completo]]
- Add4 en el cierre de A — rompe la expectativa, da redención al mayor. → [[0. Modos]]
```

Sin esto, tus decisiones quedan dentro de la narración: valiosas, pero irrecuperables y sin enlazar.

## Paso 4 — Cerrar

1. ¿Se cumple `definicion_terminado`? Si no, o la cumples o la cambias conscientemente.
2. Aplicas [[Rúbrica - Composición]].
3. Escuchas **después de descansar** — mínimo 24 h.
4. Exportas la versión final con fecha.
5. Tres líneas de retrospectiva: qué aprendí, qué evitaría, qué me llevo.

## Paso 5 — Extracción de vuelta

Lo que aprendiste componiendo **sube** a `1. Teoría/`.

> *"Me encantan los Add4 porque dan un tono muy esperanzador, que puede servir para romper la expectativa o para darle redención a un acorde mayor."*

Eso es conocimiento real, ganado componiendo. Pertenece a la nota de concepto de armonía, con enlace de vuelta a la pieza que lo probó — no enterrado en un archivo sobre un nocturno.

**Una obra no es solo un producto. Es una fuente.**

## Definición de hecho

> **Existe un `.m4a` y la rúbrica está aplicada.**

---

# ③ Referencia

**Disparador:** escuchas algo que te mueve, o quieres entender cómo funciona una pieza ajena.

## Pasos

1. Nota en `5. Referencias/0. Análisis/`.
2. **Extrae UN principio.** Uno, no cinco: rítmico, formal o textural.
3. Ese principio se escribe en la nota de concepto correspondiente de `1. Teoría/`, citando la referencia como evidencia.
4. *Opcional:* un boceto que use el principio **cambiando** tonalidad, tempo e instrumentación — para que sea transferencia y no copia.

## Por qué solo un principio

Analizar una pieza entera produce un documento que no vuelves a leer. Extraer un principio produce algo que puedes usar el mismo día.

## Definición de hecho

> **Un concepto de `1. Teoría/` ganó un párrafo con esa referencia como evidencia.**

---

# ④ Sesión

**Disparador:** te sientas a trabajar.

Plantilla completa: [[Sesión deliberada]]

| Fase | Duración | Qué |
|---|---|---|
| **Antes** | 2 min | Objetivo observable, punto de partida exacto, cómo sabrás que funcionó |
| **Recuperación** | 5–10 min | Sin consultar apuntes: ¿qué recuerdo de la sesión anterior? |
| **Trabajo** | el resto | Intento → qué ocurrió → cambio de estrategia si no funcionó |
| **Evidencia** | 2 min | Grabar y anotar |

**Los errores se diagnostican, no se repiten sin modificación.** Si un intento falla, cambias la estrategia antes de volver a intentarlo.

## Definición de hecho

> **`evidencia_audio` no está vacío.**

---

# ⑤ Semana

**Disparador:** tu día fijo. Siempre el mismo, o el bucle no ocurre.

Plantilla: [[Semana]]

## Pasos

1. **Vaciar `0. Entrada/`.** Cada nota se rutea con la pregunta de [[Inicio]]. El inbox queda en cero.
2. **Revisar:**
   - ¿Qué audio produje?
   - ¿Qué concepto de `1. Teoría/` cambió?
   - ¿Qué quedó abierto?
   - ¿Dónde repetí sin cambiar de estrategia?
3. **Una línea** en la bitácora: *qué puedo hacer hoy que no podía el lunes.*
4. **Definir** la obra activa y el concepto de la semana. Actualizar [[Inicio]].

## Definición de hecho

> **Hay al menos un audio nuevo.**
>
> Semana sin audio es semana en blanco, por mucho que hayas estudiado.

---

# ⑥ Curso → cobertura

**Disparador:** empiezas un curso nuevo, **y** cada vez que cierras una lección.

Los otros bucles hacen aterrizar una clase. Este responde otra pregunta: **¿qué me dio el curso entero?**

Sin él, un curso que termina simplemente deja de tener lecciones nuevas, su carpeta se queda ahí, y nada dice si sirvió.

## La nota de portada

Cada curso tiene un `00. Curso.md` desde el **primer día**, no al final.

Contiene una **tabla de cobertura** con una fila por lección:

| Lección | Concepto en `1. Teoría/` | Posesión | Estudio |
|---|---|---|---|
| 1B. Séptimas | `1. Armonía/0. Séptimas` *(por crear)* | | |

Se rellena conforme avanzas. **Es un informe de huecos en vivo**: de un vistazo ves qué lecciones no aterrizaron en ningún concepto, y cuáles nunca pasaron la prueba de posesión.

Que exista desde el principio es lo importante. Una tabla que se escribe al final es una autopsia; una que se rellena sobre la marcha es un tablero.

## El rol del curso

La portada declara **qué hace este curso y qué no**. Los tuyos no compiten: hacen cosas distintas.

| Curso | Su trabajo | Lo que no te da |
|---|---|---|
| Profesor | **corregir tu música** | temario sistemático |
| Cresciente | **cubrir el temario** con cadencia externa | opinión sobre tu obra |
| Udemy | lectura rítmica sistemática | aplicación creativa |

Escribirlo evita la trampa de esperar de un curso algo que ese curso no puede dar.

## Al cerrar

1. Completar la tabla: toda lección con su concepto y su veredicto.
2. `estado: cerrado` en el frontmatter, con fecha.
3. **Veredicto** en tres campos:
   - Qué me dio *(conceptos poseídos, estudios escritos, audio producido)*
   - Qué no me dio *(lecciones que nunca aterrizaron)*
   - Qué sigue faltando
4. Una entrada de retrospectiva en `6. Práctica/4. Bitácora/`.
5. La decisión siguiente sale de los huecos, no del catálogo del próximo curso.

## Definición de hecho

> **Cada lección del curso tiene una fila en la tabla con un concepto de `1. Teoría/` y un veredicto de posesión.**
>
> Un curso que no dejó nada en `1. Teoría/` no te dio nada, por muchas horas que le dedicaras.

Plantilla: [[Curso]]

---

# La regla que protege todo

> **La nota de concepto la escribes tú. La IA escribe en `AI/`.**

Si la IA redacta el concepto, desaparece la presión de sintetizar — que es justamente lo que hace que el conocimiento se acumule en vez de dispersarse.

La IA puede generar material de apoyo ilimitado en `1. Teoría/<área>/AI/`. **Tú decides qué de eso sube al concepto**, y lo escribes con tus palabras.

Esto no es purismo. Es la diferencia entre tener 143 notas sobre 26 lecciones y tener 26 conceptos que engordan.

---

# Cadencias

| Bucle | Cuándo |
|---|---|
| Clase | cuando ocurra |
| Sesión | 3–5 por semana |
| Semana | día fijo |
| Composición | una activa, sin fecha límite |
| Retrospectiva | cada 3 meses, o al cerrar la tercera obra |

Sin calendario maestro. Sin semanas numeradas. Nada que recuperar.

# Si hay poco tiempo

El ciclo mínimo, en cinco días de media hora:

| Día | Qué |
|---|---|
| 1 | Escuchar algo y extraer una idea |
| 2 | Tres bocetos de 8 compases |
| 3 | Elegir uno y desarrollarlo |
| 4 | Grabar una toma completa |
| 5 | Escuchar, revisar **una** cosa, exportar |

No intentes recuperar horas perdidas con un maratón. Retomas el ciclo en la siguiente sesión.

---

## Archivo: `6. Práctica/1. Estructura.md`

```yaml
tipo: mapa
estado: vigente
```

# Estructura

> [!abstract] Para qué este documento
> Explica **por qué** la bóveda está organizada así y **dónde va exactamente** cada cosa. Si alguna vez dudas al crear una nota, la respuesta está aquí.

---

# El problema que resuelve

Antes de esta estructura había **143 notas de teoría sobre unas 26 lecciones**. No porque se estudiara demasiado, sino por un fallo de diseño:

Las notas se archivaban en cuatro carpetas paralelas según **la etapa de procesamiento** — `Notas` (apunte de clase), `Tema` (repaso ampliado), `AI` (guía generada), `Ejercicios` (práctica). Todas indexadas por el mismo número de lección.

```
Notas 13. Contrapunto      ┐
Repaso 13. Contrapunto     ├── la misma lección, tres carpetas de distancia
AI/6. AI Contrapunto/      ┘
```

Cada vez que un tema se tocaba de una forma nueva, **nacía un archivo hermano en vez de editarse el que ya existía**. Cinco notas sobre voicing coral. Cuatro sobre tonalidades menores. Dos lecciones 17 distintas.

El efecto, en palabras de Andy Matuschak, es que *"no hay acumulación: tus ideas nuevas no se combinan con las viejas para formar algo más fuerte"*, y tampoco hay *"presión para sintetizar"*.

De ahí la sensación de estudiar mucho y no avanzar. No era falsa: estructuralmente, no se estaba acumulando nada.

# El principio

> **Las carpetas se ordenan por lo que la nota *es*. El tema vive en enlaces.**

Un tema es transversal: séptimas aparecen en una clase, en un ejercicio, en una guía de IA, en un estudio escrito y en una pieza. Si el tema decidiera la carpeta, la misma idea se partiría en cinco sitios.

La función, en cambio, es **estable y excluyente**: una nota tomada durante una clase *siempre* será eso, no cambia con el tiempo. Por eso la pregunta de ruteo es determinista — se puede responder sin criterio, sin contexto y sin memoria.

# Fuente vs. conocimiento

La distinción central:

| | `2. Cursos/` | `1. Teoría/` |
|---|---|---|
| Responde a | ¿de dónde vino? | ¿qué sé? |
| Ordenado por | fuente y su numeración | concepto |
| Fechado | sí | no |
| Se reescribe | nunca | siempre |
| Crece | añadiendo lecciones | engordando conceptos |

Una lección es un **evento**: ocurrió un día, con un profesor, en un orden que decidió otra persona. Un concepto es **durable**: no está atado a nada, y por eso puede recibir lo que diga Cresciente, lo que añada Fabs en la lección 31, y lo que descubras tú componiendo.

Sin esa separación, un segundo curso obliga a elegir entre mezclarlo con el primero o abrir un silo paralelo. Con ella, un tercer y un cuarto curso caben sin tocar nada.

---

# Las carpetas

## `0. Entrada/`

Lo que aún no sabes dónde va. **Existe para que capturar nunca se bloquee**: si dudas, entra aquí y se decide en la revisión semanal.

Debe quedar en cero cada semana. Un inbox que no se vacía es un cajón.

## `1. Teoría/` — lo que sé

Nueve áreas, derivadas de las lecciones realmente cursadas. **La lista crece cuando el temario trae algo que no cabe en ninguna** — no se fuerza un concepto dentro de un área que no es suya.

| Área | Qué cubre |
|---|---|
| `0. Fundamentos` | escalas, intervalos, tonalidades, nomenclatura |
| `1. Armonía` | séptimas, modos, dominantes, tritono, intercambio modal, tensiones, progresiones |
| `2. Conducción` | voicing, inversiones, reglas corales, tonos guía, enlaces |
| `3. Contrapunto` | primera a quinta especie |
| `4. Melodía` | motivo, ornamentación, desarrollo melódico |
| `5. Forma` | cadencias, forma binaria, contraste, intro y puente |
| `6. Ritmo` | pulso, subdivisión, células, motivos rítmicos |
| `7. Solfeo` | lectura y entonación |
| `8. Textura y arreglo` | instrumentación, orquestación, planos sonoros, grooves, líneas de bajo, arpegios |

Cada área contiene:

- **Notas de concepto** (`0. Séptimas.md`) — una por concepto, escritas por ti, **reescritas cuando el concepto reaparece, nunca clonadas**.
- **`AI/`** — material generado como apoyo, enlazado desde el concepto.

### La regla del área

> Una nota nueva en `1. Teoría/` solo nace cuando **no existe** ninguna que cubra ese concepto.
>
> Si existe, se **edita**.

### Numeración

Enteros secuenciales dentro del área (`0.`, `1.`, `2.`…). Si un área pasa de 10 notas, se rellena con cero (`00.`, `01.`) para que el orden alfabético no se rompa — como en `2. Conducción`.

**No se usan decimales.** El `8.1`, `11.3`, `12.2` del sistema anterior fue precisamente el síntoma de que la estructura estaba cediendo.

## `2. Cursos/` — de dónde vino

Tres fuentes, **cada una con su numeración nativa intacta**:

| Fuente | Numeración | Qué aporta |
|---|---|---|
| `0. Profesor` | 1–26 | **Corrección**: feedback sobre tu propia música |
| `1. Cresciente` | 1A, 1B, 2… | **Cobertura**: temario ordenado y cadencia externa |
| `2. Udemy - Lectura rítmica` | 0–7 | Lectura rítmica sistemática |

No se renumera ningún curso para encajarlo con otro. Cresciente conserva `1A/1B`, el profesor conserva `1–26`. **El concepto es lo que los une**, vía enlaces.

Dentro de `0. Profesor`:

- `0. Clases/` — los apuntes de clase (`Notas N. …`), sin tocar
- `1. Rutinas/` — ejercicios y programas de días
- `Estudios/` — lo que escribiste tú a raíz de esas clases

Dentro de cada lección de un curso externo:

- los apuntes de la lección
- `Estudios/` — partituras que escribiste como prueba de posesión

### Todo lo que nace de una lección entra en `Estudios/`

Sin excepciones, y **da igual en qué acabe convirtiéndose**: un estudio de ocho compases, una composición de un minuto o el análisis de una sonata ajena. Si el disparador fue una clase, el destino es `2. Cursos/<fuente>/<lección>/Estudios/`.

Eso evita tener que decidir la naturaleza de algo **antes de haberlo hecho**, que es justo cuando menos se sabe.

#### La promoción es una decisión posterior y explícita

Cuando una pieza demuestra que merece seguir viva, o un análisis que merece consultarse fuera del curso, **entonces** se mueve:

| De `Estudios/` a | Cuándo |
|---|---|
| `3. Composiciones/<obra>/` | la pieza va a seguir trabajándose hasta un `definicion_terminado` |
| `5. Referencias/0. Análisis/` | el análisis vale por sí mismo, fuera del curso |
| `5. Referencias/2. Partituras/` | la partitura ajena que analizaste |

Promover es mover el archivo y actualizar los enlaces. **No promover es el estado normal**: la mayoría de los estudios se quedan donde nacieron, y está bien.

> Por eso la pregunta de ruteo funciona leída de arriba abajo: el punto 2 captura todo lo que sale de una clase, y los puntos 6 y 8 quedan para lo que **no** nació de una lección — o para lo que se promueve después.

### Por qué los estudios van en el curso

Un estudio es un **artefacto fechado**: te sentaste el 23 de septiembre, después de la lección 1B, y escribiste esto. Eso es "lo que pasó", no "lo que sé".

La nota de concepto lo **enlaza y lo incrusta**, pero no lo aloja. Así el concepto permanece limpio y durable, y la evidencia queda pegada a su ocasión.

## `3. Composiciones/` — lo que hago

Una carpeta por obra:

```
3. Composiciones/2. nocturno/
├── Nocturno.md
├── render/              ← .m4a y .pdf (derivados, gitignored)
└── ref/                 ← referencias que la inspiraron
```

**La partitura no vive aquí.** Va a `7. Partituras/2. Composiciones/`, como todas.
No es una preferencia: `_scripts/sync-partituras.py` solo recorre `7. Partituras/`,
así que un `.mscz` en cualquier otro sitio nunca genera su `.musicxml` y nunca se
renderiza en Obsidian — y falla en silencio. Ver [[7. Partituras/Sistema de partituras]].

**Material de IA:** si sirve para cualquier pieza, no vive en la pieza. Una guía sobre qué es un motivo pertenece a `1. Teoría/4. Melodía/AI/`; un análisis de las decisiones estructurales *de esta obra* se queda.

## `4. Instrumento/`

Guitarra y piano: **técnica, no teoría**. Digitaciones, calentamientos, planes de práctica instrumental.

Si la nota habla de qué tocar, es teoría o composición. Si habla de cómo ejecutarlo con las manos, es instrumento.

## `5. Referencias/`

Música **de otros**:

- `0. Análisis/` — piezas que estudias
- `1. Inspiración/` — lo que te mueve
- `2. Partituras/` — partituras externas (PDF, y el `.mscz`/`.musicxml` si se abre en MuseScore)

## `6. Práctica/`

El sistema mismo: flujos, plantillas, bitácora y diagnóstico. No contiene música ni teoría.

## `8. Setup/`

**Cómo está montado el equipo**: instalación y configuración de hardware (teclados, controladores, interfaces) y software (MuseScore, DAW, la propia bóveda), en Windows y macOS.

La frontera con `4. Instrumento/`: si la nota habla de cómo tocar, es instrumento. Si habla de cómo conectar, instalar o configurar, es setup.

**Una nota por equipo o programa, nunca una por sistema operativo.** Windows y macOS son secciones dentro de la misma nota; separarlos crearía archivos hermanos que se desincronizan.

```
8. Setup/
├── 0. Índice.md     ← inventario y mapa de conexiones
├── 0. Bóveda/       ← git, Python, scripts, plugins
├── 1. Software/
├── 2. Hardware/
├── 3. Configuraciones/  ← archivos que se cargan (.spc, .labx, .labmidi, .keystep2), una carpeta por equipo
├── 4. Presets/          ← una nota por preset de cada equipo y por banco de sonidos
└── 5. Áreas/            ← una nota por montaje para crear (Beats, Canción, Atmósferas…)
```

Las notas explican; los archivos de `3. Configuraciones/` son lo que se carga en el
aparato. Cómo se nombran y versionan: [[8. Setup/0. Índice#Configuraciones]]. Los presets
que no exporta un editor, y las notas de `4. Presets/` y `5. Áreas/`, salen de un catálogo con
`_scripts/generar-presets.py`: ver [[8. Setup/0. Índice#Cómo encaja]].

Plantilla: `10. System/2. Plantillas/0. Notas/Setup.md`. Ver [[8. Setup/0. Índice]].

## `9. Assets/`

Todas las imágenes. Va con `9.` para que quede al final y no estorbe la navegación.

## `_legacy/`

Archivado. **Nada se borra nunca**; lo superado deja de estorbar pero sigue en git y sigue siendo buscable.

- `Curso creciente 2026-08/` — el andamiaje de 24 semanas que no llegó a ejecutarse
- `Fuera de tema/` — archivos que no son de música

---

# La pregunta de ruteo

Bájala hasta el primer sí.

| | ¿Es…? | Va a |
|---:|---|---|
| 1 | Lo que anoté **durante** una clase, sin editar | `2. Cursos/<fuente>/` |
| 2 | Algo que **escribí o toqué yo** a raíz de una clase | `2. Cursos/<fuente>/<lección>/Estudios/` |
| 3 | Mi explicación consolidada de **un concepto** | `1. Teoría/<área>/` |
| 4 | Material generado por **IA** como apoyo | `1. Teoría/<área>/AI/` |
| 5 | Un ejercicio o rutina con respuesta correcta | `2. Cursos/0. Profesor/1. Rutinas/` |
| 6 | Trabajo sobre **una pieza mía** | `3. Composiciones/<obra>/` |
| 7 | Un registro **fechado** de lo que hice | `6. Práctica/4. Bitácora/` |
| 8 | Sobre música **de otros** | `5. Referencias/` |
| 9 | Sobre técnica de guitarra o piano | `4. Instrumento/` |
| 10 | Instalación o configuración de **equipo o software** | `8. Setup/` |
| 11 | Ninguna de las anteriores | `0. Entrada/` |

**El tema nunca entra en la decisión.** Por eso funciona.

---

# Convenciones

## Nombres

- Prefijo numérico entero en carpetas y archivos: `1. Armonía/0. Séptimas.md`
- Cero a la izquierda si el grupo pasa de 10: `00.`, `01.`
- Sin decimales
- Sin guiones largos (`—`) en nombres de carpeta
- Archivos fechados: `AAAA-MM-DD` primero, porque su identidad *es* la fecha

## Qué se fecha y qué no

| Tipo | Nombre |
|---|---|
| Nota de concepto | `0. Séptimas.md` — sin fecha, es durable |
| Apunte de clase | numeración del curso — la fecha está en el curso |
| Estudio / partitura | `2026-09-23 séptimas — 4 especies.mscz` |
| Render de audio | `2026-09-23 worktape.m4a` |
| Bitácora | `2026-09-23.md` |

## Archivos de música

| Extensión | Qué es | ¿A git? |
|---|---|---|
| `.mscz` | fuente de MuseScore, la única verdad | **sí** — pesa poco |
| `.musicxml` | derivado que renderiza Verovio; lo genera `sync-partituras.py` | **sí** — es texto, y permite el diff musical |
| `.mxl` | MusicXML comprimido | **no se usa** — es un ZIP y Verovio no lo lee |
| `.m4a` / `.mp3` | audio exportado | no — derivado |
| `.pdf` | partitura exportada | no — derivado |

Los derivados se regeneran desde el `.mscz`. Versionarlos convierte un repo de 15 MB en uno de 2 GB.

## Notación dentro de una nota

Tres herramientas, tres propósitos:

| | Bloque `abc` | Bloque `strudel` | Bloque `verovio` |
|---|---|---|---|
| Para | 2–8 compases de pentagrama | patrones y ritmo | partitura completa |
| Editable | sí, texto plano | sí, texto plano | en MuseScore |
| Suena | sí | sí | sí |
| A git | va en la nota | va en la nota | archivo aparte |
| Plugin | `music-code-blocks` | `strudel-repl` | `verovio-music-renderer` |

Cuál usar para qué está en [[4. Instrumento/2. Strudel/0. Qué es y cómo se usa]]. En corto: MuseScore para conducción de voces, Strudel para ritmo.

La ruta dentro de un bloque `verovio` es **relativa a la raíz de la bóveda**, y apunta al `.musicxml`. Cómo se escribe está en [[7. Partituras/Cómo usar las partituras]].

## Snippets

La carpeta de plantillas es `10. System/2. Plantillas`. Dentro, `2. Notación/` tiene bloques listos para insertar con el comando **Insertar plantilla** (plugin Templates, ya activo):

| Snippet | Qué inserta |
|---|---|
| `abc — fragmento` | bloque abc de una voz |
| `abc — dos voces` | bloque abc con tiple y bajo |
| `strudel — ritmo` | patrón de batería |
| `strudel — acordes` | grados con voicing |
| `strudel — patrón + bajo` | stack de ritmo y bajo |
| `partitura — estudio` | sección de posesión con fecha |

Conviene atar **Insertar plantilla** a un atajo desde Configuración → Atajos de teclado.

---

# Propiedades

Vocabulario en español, extendiendo el que ya existía.

Todas las notas:

```yaml
tipo:      # captura | concepto | guia-ai | ejercicio | estudio
           # composicion | sesion | semana | mapa | referencia | setup
estado:    # vigente | borrador | superseded | archivado
```

Notas de concepto:

```yaml
tipo: concepto
estado: vigente
area: 1. Armonía
conceptos: ["[[Tensiones]]"]      # enlaces a conceptos vecinos
fuentes:   ["[[Notas 2. 7mas]]", "[[1. Acordes de séptima]]"]
estudios:  ["[[2026-09-23 séptimas — 4 especies.musicxml]]"]
```

Apuntes de curso:

```yaml
tipo: captura
curso: profesor | cresciente | udemy
leccion: 9        # numeración nativa del curso
```

Obras:

```yaml
tipo: composicion
estado: boceto | desarrollo | revision | cerrada
inicio: 2026-04-28
definicion_terminado: "90 s, forma AABA, una toma limpia exportada"
ultimo_audio: 2026-09-23
```

> Los tipos de propiedad son **globales en la bóveda**: si `leccion` es número en un sitio, lo es en todos. Eso convierte un error de tecleo en un error visible.

---

# Qué NO hacer

1. **No crear una nota nueva en `1. Teoría/` para un concepto que ya existe.** Editar la que hay.
2. **No dejar que la IA escriba la nota de concepto.** La IA escribe en `AI/`.
3. **No usar decimales** en la numeración. Fue el síntoma del colapso anterior.
4. **No renumerar un curso** para que encaje con otro.
5. **No archivar por tema.** El tema va en enlaces.
6. **No borrar.** Archivar en `_legacy/`.
7. **No versionar audio ni PDF** en git.

---

# Enlaces

- [[Inicio]] — mapa y estado activo
- [[6. Práctica/0. Flujos]] — los cinco bucles
- [[6. Práctica/3. Diagnóstico]] — de dónde partió todo esto

---

## Archivo: `6. Práctica/3. Diagnóstico.md`

# Diagnóstico y prioridades personales

Fecha de diseño del sistema: 2026-08-10.

## Resumen

El nivel no puede describirse con una sola etiqueta. Hay al menos cinco perfiles distintos:

| Dimensión | Evidencia actual | Diagnóstico provisional |
|---|---|---|
| Teoría armónica | Tonalidades, modos, dominantes, intercambio, tensiones, voicing | Intermedio en exposición; necesita consolidación auditiva y corrección |
| Contrapunto | Trabajo hasta quinta especie | Buena exposición académica; falta transferencia libre |
| Ritmo | Apuntes y un path amplio, pero menos producción documentada | Prioridad alta |
| Melodía y motivos | Dos composiciones con transformación consciente | Base funcional; falta desarrollo a escala de sección |
| Forma | Dudas sobre cierre de A, puente y B | Prioridad máxima |
| Oído y solfeo | Intención documentada, pocos entregables visibles | Prioridad alta |
| Instrumento | Guitarra principiante-intermedia; piano en desarrollo | Suficiente para prototipos, requiere continuidad |
| Producción y acabado | Bocetos y partituras; pocas obras cerradas | Prioridad máxima |

## Evidencia dentro de la bóveda

- [[Inicio]] describe una base de guitarra y ukulele con intención de desarrollar piano.
- [[3. Composiciones/3. melódica/1. Desarrollo/0. Desarrollo]] muestra generación de A, A' y B, y un bloqueo específico al evitar que A parezca el final.
- [[3. Composiciones/4. melódica II/0. Desarrollo]] muestra que las ideas nacen tanto en guitarra como desde acordes y ritmos imaginados.
- [[3. Composiciones/2. nocturno/Nocturno]] muestra sensibilidad hacia métrica, textura, cromatismo y color emocional.
- [[3. Composiciones/5. dawn-chorus/Dawn Chorus]] muestra ambición analítica y armónica, pero también riesgo de sobreetiquetar antes de comprobar función y colección sonora.
- [[2. Cursos/0. Profesor/Sesiones con Fabs]] documenta una secuencia amplia de teoría, voicing, contrapunto, ritmo, motivos y composición.

## El problema no es falta de información

Actualmente existen varias capas:

1. `Teoría musical/Notas` — apuntes rápidos de clase.
2. `Teoría musical/Tema` — repasos más estructurados.
3. `Teoría musical/AI` — explicaciones extensas y tablas.
4. `Teoría musical/0. Ejercicios` — recuperación y práctica.
5. `Composiciones` — evidencia real de transferencia.
6. `Teoría musical/1. Curso cresciente` — a partir de ahora, sistema de navegación y progresión.

Leer otra guía sobre un tema ya documentado produce rendimientos decrecientes. La siguiente fase debe transformar las capas 1–3 en resultados dentro de las capas 4–5.

## Riesgos actuales

### 1. Coleccionar teoría por encima del oído

Se conocen nombres y fórmulas sofisticadas, pero algunas notas contienen definiciones imprecisas. Ejemplos:

- En [[1. Teoría/0. Fundamentos/Intro composición]] aparece F–A como tres semitonos; son cuatro.
- En [[3. Composiciones/5. dawn-chorus/Dawn Chorus]] aparece Em como locrio dentro de G mayor; su lectura diatónica ordinaria sería vi o E eólico, salvo que el material alterado justifique explícitamente otra colección.
- Algunos apuntes alternan función, familia tonal, modo y nombre de acorde como si fueran la misma capa de análisis.

Esto no invalida el progreso. Indica que la revisión debe incluir cuatro comprobaciones:

1. ¿Qué notas suenan realmente?
2. ¿Cuál es el bajo?
3. ¿Cuál parece el centro auditivo?
4. ¿La etiqueta explica algo que se oye?

### 2. Añadir material cuando falta desarrollar

En las composiciones aparece la tentación de solucionar una transición introduciendo acordes, motivos o colores nuevos. Con frecuencia basta con:

- fragmentar;
- desplazar;
- reducir densidad;
- cambiar registro;
- prolongar una nota común;
- evitar una resolución completa;
- secuenciar una parte del motivo.

### 3. Confundir sofisticación con calidad

Intercambio modal, sustitutos y tensiones son herramientas. Una pieza sencilla con identidad rítmica, dirección y cierre convincente es compositivamente más avanzada que una progresión compleja sin forma.

### 4. Dejar obras abiertas

Un boceto enseña generación. Una pieza terminada enseña proporción, transición, revisión, interpretación, arreglo y desapego. El sistema debe aumentar deliberadamente la tasa de terminación.

## Prioridades para los próximos seis meses

| Prioridad | Dedicación sugerida | Resultado buscado |
|---|---:|---|
| Composición y revisión | 35% | Una pieza terminada cada 2–4 semanas |
| Ritmo | 15% | Motivos y secciones distinguibles sin armonía compleja |
| Oído y canto | 15% | Imaginar y reproducir grados, bajo y contorno |
| Instrumento | 15% | Ejecutar prototipos con tiempo estable y dinámica |
| Análisis y transcripción | 10% | Extraer principios de referencias |
| Teoría nueva | 10% máximo | Resolver necesidades reales de proyectos |

Estas proporciones son una prescripción personal basada en el material actual, no una regla universal.

## Orden de consolidación

### Núcleo obligatorio

1. Pulso, subdivisión, silencios y células.
2. Grados, contorno, frase y punto culminante.
3. Triadas, inversiones, séptimas y cadencias.
4. Ritmo armónico y línea de bajo.
5. Motivo, variación y desarrollo.
6. Forma binaria, ternaria y canción.
7. Textura, densidad y registro.
8. Grabación, escucha crítica y revisión.

### Segunda capa

1. Tonos guía y conducción de voces.
2. Dominantes secundarios.
3. Intercambio modal.
4. Contrapunto libre a dos voces.
5. Modulación.
6. Tensiones y acordes de color.

### Capa avanzada, solo bajo demanda

- Sustitución de tritono.
- Contrapunto estricto avanzado.
- Cromatismo extensivo.
- Polirritmia y métricas asimétricas.
- Orquestación amplia.
- Mezcla y masterización detallada.

## Criterio para estudiar un tema nuevo

Antes de abrir una nueva materia, responde:

- ¿Qué problema musical concreto intento resolver?
- ¿Puedo formularlo sin usar el nombre del recurso?
- ¿Ya intenté resolverlo con ritmo, registro, densidad o desarrollo del material existente?
- ¿Cuál será el entregable que demuestre la aplicación?
- ¿Cómo comprobaré 48 horas después que lo retuve?

Si no hay una respuesta concreta, anota el tema en “Después” y vuelve al proyecto actual.

## Identidad estilística provisional

Las referencias y comentarios sugieren interés en:

- Melancolía y ambigüedad.
- Radiohead y texturas atmosféricas.
- Arpegios y líneas conectadas.
- Nocturnos, métricas compuestas y movimiento pausado.
- Color mediante acordes `add`, `sus`, séptimas, cromatismo e intercambio modal.

Eso ofrece un territorio fértil, pero conviene evitar que “melancólico” signifique siempre tempo lento, arpegio continuo y acordes extendidos. El portafolio debe explorar también:

- Melancolía con ritmo marcado.
- Tensión con armonía simple.
- Esperanza mediante registro y textura, no solo acordes mayores.
- Contraste por silencio.
- Una pieza sin arpegios.

## Resultado esperado

El objetivo no es completar todas las carpetas existentes. Es construir un ciclo sostenible:

> referencia → extracción → ejercicio → bocetos → selección → desarrollo → forma → arreglo → grabación → feedback → revisión → archivo

Cuando este ciclo sea habitual, cualquier tema avanzado podrá integrarse sin que el sistema vuelva a fragmentarse.

---

## Archivo: `7. Partituras/Sistema de partituras.md`

```yaml
tags: [sistema, partituras, musescore]
```

# Sistema de partituras

Cómo están organizadas, versionadas y renderizadas las partituras de esta
bóveda, y por qué de esta manera. Para el día a día, ve a
[[Cómo usar las partituras]].

Montado el 2026-09-19 sobre 59 partituras que vivían fuera de todo control de
versiones.

---

## El problema que resuelve

Las partituras se editan en MuseScore, que guarda en `.mscz`. Obsidian no sabe
leer ese formato, y ningún plugin lo hace: `.mscz` es un ZIP propietario.
Además, guardar en MuseScore **sobrescribe** — su carpeta `.mscbackup` guarda
exactamente **un** estado anterior por partitura, que es una red contra caídas
del programa, no un historial.

Antes de este sistema, el flujo real era: capturar la pantalla de MuseScore y
pegar el PNG en la nota. Quedaron 76 imágenes así en `9. Assets/`.

## Las tres capas

```
   MuseScore                  el script                   Obsidian
  ┌──────────┐              ┌───────────┐              ┌──────────┐
  │  .mscz   │ ───────────▶ │ .musicxml │ ───────────▶ │ Verovio  │
  └──────────┘              └───────────┘              └──────────┘
   fuente de                 derivado,                  render SVG
   la verdad                 desechable                 + play MIDI
```

Los dos archivos son hermanos, mismo nombre, misma carpeta:

```
7. Partituras/2. Composiciones/Nocturno primer intento.mscz
7. Partituras/2. Composiciones/Nocturno primer intento.musicxml
```

El `.musicxml` **nunca se edita a mano**: el próximo sync lo pisa. Se puede
borrar la colección entera y regenerarla en unos segundos.

## Por qué el `.mscz` manda

MuseScore abre y edita MusicXML sin problema, así que sería tentador trabajar
solo en ese formato y ahorrarse la conversión. Se midió el viaje completo
(`.mscz` → `.musicxml` → `.mscz`) sobre "20 Nocturno", y no conviene.

**La música sobrevive intacta:**

| | Original | Después |
|---|---|---|
| Notas | 378 | 378 |
| Acordes | 309 | 309 |
| Silencios | 1778 | 1778 |
| Compases | 1782 | 1782 |
| Ligaduras | 17 | 17 |

**Lo que se pierde es el entorno.** El mezclador quedó vacío:
`audiosettings.json` pasó de 4.462 a 190 bytes — instrumentos, volúmenes,
cadena de efectos y perfil de sonido, borrados. El archivo de estilo se
reescribió con valores por defecto. Y apareció una articulación que no estaba.

Por eso: `.mscz` fuente, `.musicxml` derivado. Nunca al revés.

## Dónde vive cada cosa

```
7. Partituras/
├── 1. Clases/           27   ejercicios con Fabs
├── 2. Composiciones/     9   piezas propias
├── 3. Referencias/       4   obras de otros
├── 4. Cursos/            3   Cresciente
├── Cómo usar las partituras.md
└── Sistema de partituras.md      ← esta nota

_legacy/partituras/      12   descartes; nada se borra
_scripts/                 6   la herramienta
```

Se eligió **una carpeta central** en vez de repartir cada partitura junto a su
nota, por consistencia con cómo ya funcionaba la bóveda: las 76 imágenes están
en `9. Assets/` y ninguna junto a la nota que la usa.

La carpeta por defecto de MuseScore apunta aquí
(Preferencias · General · Carpetas · Partituras).

## Nomenclatura

El principio: **git guarda las versiones, el nombre identifica la obra.** En
cuanto git versiona, los `19.2`, `21.11` y `3era iteración` sobran.

1. **Sin número de iteración.** Las iteraciones son commits.
2. **Variantes con sufijo descriptivo, no numérico.** `Contrapunto - 3a especie`,
   no `12. Repaso contrapunto 3era`.
3. **Sin `:`** — rompe las rutas de Obsidian. Sin espacios al final.
4. **Todo archivo tiene nombre.** Nada de `Untitled score`.
5. Cuando dos cosas distintas comparten nombre legítimamente, **las separa la
   fecha**: `Voicing - escalas menores - 2025-06-01`.

## El modelo de versionado

Git no versiona archivos por separado: versiona **momentos de la bóveda
entera**. Un commit es una foto con fecha y motivo, y en esa foto entran a la
vez la partitura y la nota que la comenta. Nunca se desincronizan.

```
1. Editas y guardas en MuseScore
2. ./_scripts/sync-partituras.py          regenera el .musicxml
3. git commit -am "qué cambiaste y por qué"    ← esto crea la versión
```

**El paso 3 es el que versiona.** Guardar en MuseScore solo sobrescribe.

### El diff musical

Un `.musicxml` en crudo cambia cientos de líneas cada vez que MuseScore
reacomoda la página. `.gitattributes` registra un filtro `textconv`
(`_scripts/musicxml-limpio.py`) que quita las coordenadas de dibujo antes de
comparar. Medido sobre dos versiones reales de *Enlaces Arpegios*: **137 líneas
de ruido → 5 líneas del único cambio real.**

Encima de eso, `historial.py` traduce ese diff a lenguaje musical:

```
  2026-02-10  f5396f3  [enlaces-v1]
  Enlaces arpegios: el Sol# del c.12 suena forzado, lo subo a La
     c.9    Piano              Sol#4 -> La4
```

Detecta altura, alteración, octava, figura rítmica y puntillos, por compás y
por instrumento. **No** traduce dinámicas, articulaciones, ligaduras ni textos:
git los versiona y los restaura, pero no te los narra.

El filtro vive en `.git/config`, que no se versiona. Una vez por clon:
`./_scripts/configurar-git.sh`.

### Linajes

Cuando una pieza tuvo varias versiones guardadas como archivos distintos, esas
versiones se reprodujeron como **commits fechados sobre el archivo
sobreviviente**, para que el historial sea navegable de verdad. Seis linajes:

| Pieza | Versiones |
|---|---|
| Enlaces - Crystal Silence | 4 |
| Composición binaria | 3 |
| Composición binaria con motivo | 3 |
| Composición binaria - esbozo | 2 |
| Composición binaria - con motivos | 2 |
| Voicing - práctica invertida | 2 |

Para marcar un hito: `git tag -a nocturno-v1 -m "La que le mostré a Fabs"`.

## Qué reveló el inventario

Al comparar las 59 por contenido musical real (no por nombre) aparecieron
cosas que el versionado por nombre de archivo estaba escondiendo.

**Seis partituras eran idénticas nota por nota.** Cuatro de ellas —
`14. Arpegios`, `14.1 … con ritmos`, `14.2 Arpegios con ritmo` y
`16 Enlaces Arpegios` — son **exactamente la misma música**. Lo único distinto
era el título escrito dentro. Los nombres prometían variaciones rítmicas que
no existen. Están en `_legacy/partituras/identicas/`.

**Dos archivos mentían sobre su contenido.** `Untitled score` no estaba sin
nombre: por dentro se titulaba *"10. Ejercicios Contrapunto Variados"*. Y los
dos `ejercico motivos` no eran de motivos — por dentro decían *"16.1 Enlaces
Crystal Silence"*, y pasaron a ese linaje.

**La numeración no correspondía con las clases.** Eran dos contadores
independientes que se separaron: la nota *21. Tonos guías* correspondía a la
partitura *15. Tonos guía*; *23. Motivos* a *20. Motivos random*. El número
parecía un vínculo y no lo era.

**No hay un estilo propio.** Las 42 partituras con estilo incrustado usan 13
variantes, pero al agruparlas por versión de MuseScore (4.10, 4.30, 4.40,
4.50×5, 4.60×5) se ve que es **el mismo estilo de fábrica congelado en cinco
versiones de la aplicación**. Dentro de una misma versión difieren en **un
solo ajuste**. Comparado con el default actual: 13 valores distintos sobre
1.289 en un caso, 4 sobre 1.466 en el otro — y casi todos son cambios que hizo
MuseScore en su propio default, no decisiones.

La excepción es `Contrapunto - 1a especie (Fabs)`, con **38 valores tocados a
mano** (separación de alteraciones, grosor de cejillas, espaciado de trastes,
silencios multicompás). Es el único estilo con criterio de la colección, y es
de Fabs. Si algún día se quiere una identidad visual propia, ese es el punto
de partida, no el default.

El estilo incrustado pesa **616 KB, el 26% del peso total** de los `.mscz`.

## Trampas conocidas

**`.mxl` no funciona.** El plugin Verovio lee los archivos como texto, y el
`.mxl` es un ZIP. Solo `.musicxml` sin comprimir. Los dos `.mxl` que había
están en `_legacy/partituras-mxl/`.

**Las rutas de los bloques `verovio` son relativas a la raíz de la bóveda.**
El plugin resuelve con `getAbstractFileByPath`, que consulta el índice de
Obsidian, no el sistema de archivos: una ruta absoluta (`/Users/…`) existe en
disco pero el plugin no la encuentra y lanza *"file not found"*. Lo mismo al
renombrar o mover una partitura sin actualizar las notas que la citan.
`./_scripts/verificar-bloques.py` revisa los tres casos de golpe.

**Normalización Unicode.** Los `.mscz` bajados del navegador traen los acentos
en NFC y MuseScore escribe la salida en NFD. Para APFS son el mismo archivo,
pero como cadena de texto no coinciden. Todo script que compare rutas normaliza
a NFC antes. Renombrar a NFC en disco no sirve: APFS no cambia la forma
almacenada.

**Git escapa los acentos.** `git ls-files` devuelve `Composici\303\263n` salvo
que se le pase `-c core.quotePath=false`. Sin eso, los scripts se saltan en
silencio la mayoría de estas partituras.

**`with_suffix()` de Python.** Los nombres llevan puntos (`14.1 Arpegios…`), así
que `with_suffix()` se come parte del nombre. Los scripts usan una función
explícita que concatena la extensión.

**El `.mscz` es binario.** Git lo guarda y lo restaura íntegro — verificado byte
a byte — pero no lo compara. El diff musical sale del `.musicxml`; por eso se
versionan los dos.

## Pendiente

- Extraer el estilo de Fabs como `.mss` versionado, si se quiere una identidad
  visual propia.
- El commit del 2026-04-21 en *Composición binaria* dice "tercera iteración"
  pero no cambió ninguna nota: era un par idéntico que entró como versión en
  vez de archivarse. El historial lo dice correctamente ("sin cambios
  musicales"); solo el mensaje promete de más.

---

## Archivo: `7. Partituras/Cómo usar las partituras.md`

# Cómo usar las partituras

Guía del día a día. Para la arquitectura, las decisiones y las trampas
conocidas, ve a [[Sistema de partituras]].

Las partituras viven aquí, dentro de la bóveda, versionadas en git junto a las
notas que las comentan. Cada una son dos archivos hermanos:

```
7. Partituras/2. Composiciones/Nocturno primer intento.mscz      ← editas esto en MuseScore
7. Partituras/2. Composiciones/Nocturno primer intento.musicxml  ← esto lo lee Obsidian
```

El `.mscz` es la **única fuente de verdad**. El `.musicxml` es derivado: se
puede borrar entero y regenerar. Nunca lo edites a mano.

## El ciclo de trabajo

```
1. Editas y guardas en MuseScore
2. ./_scripts/sync-partituras.py        ← regenera el .musicxml
3. git commit -am "qué cambiaste y por qué"   ← guarda la versión
```

El paso 3 es el que crea una versión. Guardar en MuseScore **sobrescribe**;
solo el commit deja un punto al que volver.

## Ver el historial

```
./_scripts/historial.py                 # lo último de todo
./_scripts/historial.py nocturno        # el historial de una partitura
```

Te dice, para cada versión, cuándo fue, qué escribiste como motivo, y **qué
cambió musicalmente**:

```
  2026-02-10  f5396f3  [enlaces-v1]
  Enlaces arpegios: el Sol# del c.12 suena forzado, lo subo a La
     c.9    Piano              Sol#4 -> La4
```

Detecta alturas, alteraciones, octavas, figuras rítmicas y puntillos, por
compás y por instrumento. **No** traduce dinámicas, articulaciones, ligaduras
ni textos — git sí los versiona y los restaura, pero no te los narra.

Para comparar dos archivos sueltos:

```
./_scripts/diff-musical.py vieja.musicxml nueva.musicxml
```

## Marcar un hito

```
git tag -a nocturno-v1 -m "La versión que le mostré a Fabs"
```

La etiqueta aparece luego en el historial junto al commit.

## Recuperar una versión vieja

```
git log --oneline -- "7. Partituras/2. Composiciones/Nocturno primer intento.mscz"
git show <hash>:"7. Partituras/2. Composiciones/Nocturno primer intento.mscz" > /tmp/vieja.mscz
```

Sale byte por byte idéntica al original. Abre en MuseScore tal cual estaba.

## Incrustar una partitura en una nota

Ruta **relativa a la raíz de la bóveda**, dentro de un bloque `verovio`.
No sirve una ruta absoluta (`/Users/...`) ni una relativa a la nota: Verovio
busca en el índice de Obsidian, no en el disco, y devuelve
*"file not found"*.

```verovio
7. Partituras/2. Composiciones/Dawn Chorus - arpegios.musicxml
scale: 40
adjustPageHeight: true
```

Las opciones van **después** de la ruta, una por línea.

| Opción | Qué hace |
|---|---|
| `scale: 40` | Tamaño del grabado (35–45 suele quedar bien dentro de una nota) |
| `measureRange: 12` | Muestra un solo compás |
| `adjustPageHeight: true` | Recorta el alto sobrante |
| `darkMode: true` | Invierte para tema oscuro |

Al hacer clic en el pentagrama se abre el editor de Verovio en el panel
lateral. El botón de play reproduce por MIDI resaltando las notas.

### Un solo compás

```verovio
7. Partituras/2. Composiciones/Nocturno primer intento.musicxml
measureRange: 3
scale: 50
```

### Notación corta, sin MuseScore

Para un ejemplo de dos compases, el mismo bloque acepta ABC directo:

```verovio
X:1
M:4/4
L:1/4
K:G
|: G2 B2 | d4 :|
```

## Tres cosas que se olvidan

- **Solo `.musicxml` sin comprimir.** Los `.mxl` son ZIP y no funcionan.
- **No uses MusicXML como formato de trabajo**, aunque MuseScore lo abra: cada
  ida y vuelta borra el mezclador y reescribe el estilo.
- **Sin `:` en los nombres**, rompe las rutas.

El resto de las trampas —normalización de acentos, cómo git escapa las tildes—
está en [[Sistema de partituras]].

## En otra máquina

El filtro de diff musical vive en `.git/config`, que no se versiona. Una vez
por clon:

```
./_scripts/configurar-git.sh
```

## Todos los comandos

```
./_scripts/sync-partituras.py            # regenera el MusicXML que cambió
./_scripts/sync-partituras.py --dry-run  # qué haría, sin tocar nada
./_scripts/sync-partituras.py --force    # reconvierte todo
./_scripts/historial.py [partitura]      # historial con cambios musicales
./_scripts/diff-musical.py a.xml b.xml   # comparar dos archivos
./_scripts/ordenar-downloads.py          # ordena .mscz sueltos en ~/Downloads
./_scripts/verificar-bloques.py          # revisa que los bloques verovio resuelvan
./_scripts/configurar-git.sh             # activa el diff musical (una vez)
```

---

## Archivo: `10. System/2. Plantillas/0. Notas/Actividad de curso.md`

```yaml
tipo: ejercicio
estado: borrador
curso:
leccion:
area:
conceptos:
partitura:
posesion:
tags:
  - curso-musica/ejercicio
```

# {{title}}

> [!abstract] Qué es
> <!-- Una frase: qué pone a prueba y de qué tamaño es. -->

**<!-- tamaño · duración · restricción principal -->**

## Qué pide exactamente

<!-- Los requisitos literales de la consigna, no tu paráfrasis.
     Los mínimos numéricos, en negrita: "mínimo dos intercambios modales". -->

-

## Procedimiento

1.

## Qué consume

<!-- De qué actividad anterior sale el material. Enlaza. -->

## Qué alimenta

<!-- Qué actividad o proyecto posterior lo usa. -->

## Herramienta

<!-- MuseScore para conducción de voces · Strudel para ritmo y textura · ninguna si es análisis. -->

## Criterio de aprobación

<!-- Verificable, no opinable. "Toca solo el bajo: ¿se sostiene?" sirve.
     "Que quede bien" no sirve. -->

## Dónde va

Esta nota aquí, en `Estudios/`. La promoción a `3. Composiciones/` o `5. Referencias/` se decide después.

## Resultado

- Fecha:
-

---

## Archivo: `10. System/2. Plantillas/0. Notas/Análisis.md`

```yaml
tipo: referencia
estado: borrador
obra:
compositor:
enlace:
conceptos:
tags:
  - curso-musica/referencia
```

# {{title}}

## La pieza

| | |
|---|---|
| **Obra** | |
| **Compositor** | |
| **Grabación** | |
| **Partitura** | |

## Por qué ésta

<!-- Qué te movió a analizarla. Sin una razón concreta, el análisis no se termina. -->

## Forma

<!-- Las secciones grandes con su tamaño. Las proporciones enseñan más que las etiquetas:
     saber que el desarrollo dura la mitad que la exposición dice algo; llamarlo "desarrollo" no. -->

| Sección | Compases | Duración |
|---|---|---|
| | | |

## Materiales

<!-- Etiqueta los motivos (a1, b2…) para poder decir de dónde viene cada cosa.
     Es lo mismo que haces con tus propios motivos, sobre música ajena. -->

## Lo que me llevo

<!-- Una decisión concreta que podrías usar tú, mañana, en tu obra activa.
     Sin esto es una ficha, no un análisis. -->

## Qué sube a Teoría

> Una referencia no es solo una ficha: es evidencia. El concepto gana un párrafo con esta prueba.

- [ ] `[[...]]` ←

---

## Archivo: `10. System/2. Plantillas/0. Notas/Clase.md`

```yaml
tipo: captura
estado: vigente
curso:
leccion:
fecha: "{{date:YYYY-MM-DD}}"
conceptos:
posesion:
tags:
  - curso-musica/clase
```

# {{title}}

> Captura cruda. **No se reescribe después.** Es el registro de lo que pasó, no un documento de referencia.

## Lo que se dio

<!-- Apuntes durante la clase. Sin ordenar, sin redactar bonito. -->

## Dudas

<!-- Lo que no entendiste. Va literal, aunque suene tonto. -->

---

## Prueba de posesión

> Solo si el concepto **ya existe** en `1. Teoría/`.
> 20 minutos, sin apuntes, sin abrir la bóveda.
> Produce 8–16 compases en MuseScore. El `.mscz` va a `7. Partituras/`; la nota, a
> `Estudios/` de esta lección.

- Fecha:
- Qué escribí:
- Veredicto: `poseído` / `no poseído`
- Estudio: bloque ```verovio con la ruta al `.musicxml`

**Si poseído** → cero apuntes; la clase se usa para aplicarlo a la obra activa.
**Si no poseído** → apuntes normales, y el tema entra como restricción del siguiente boceto.

---

## Extracción

> Qué de esto sube a `1. Teoría/`. **Se edita la nota de concepto existente, no se crea una nueva.**

- Concepto tocado: `[[...]]`
- Qué le añadí:
- [ ] La nota de concepto está actualizada

> [!important] Definición de hecho
> Una nota de `1. Teoría/` cambió. Si nada cambió allí, la clase no aterrizó.

---

## Archivo: `10. System/2. Plantillas/0. Notas/Concepto.md`

```yaml
tipo: concepto
estado: vigente
area:
conceptos:
fuentes:
estudios:
tags:
  - curso-musica/concepto
```

# {{title}}

> [!warning] Antes de escribir una línea
> **¿Ya existe una nota en esta área que cubra este concepto?** Si existe, cierra esto y edita aquélla. Una nota nueva solo nace cuando **no hay ninguna**.
>
> Y esta nota **la escribes tú**. La IA escribe en `AI/`.

## Qué es

<!-- Con tus palabras. Si estás copiando, todavía no lo entendiste. -->

## Cómo se usa

<!-- La decisión musical concreta que permite tomar.
     Toda teoría termina en una decisión: si no puedes oírla ni aplicarla, no la aprendiste. -->

## Lo que me costó

<!-- Lo que no era obvio la primera vez, y el error que cometiste.
     Es la parte que vale algo dentro de seis meses. -->

## Posesión

<!-- AAAA-MM-DD · escrito sin apuntes · veredicto -->

![[.musicxml]]

## De dónde vino

<!-- Una fila por fuente. Cuando una clase nueva toca este concepto se añade una fila
     y se reescribe el cuerpo de arriba. NO nace un archivo hermano: eso fue el problema viejo. -->

| Fuente | Qué añadió |
|---|---|
| | |

---

## Archivo: `10. System/2. Plantillas/0. Notas/Curso.md`

```yaml
tipo: curso
estado: activo
curso:
inicio:
cierre:
rol:
tags:
  - curso-musica/curso
```

# {{title}}

## Qué hace este curso

- **Su trabajo:**
- **Lo que no me da:**
- **Numeración nativa:**

> Escribirlo evita esperar de un curso algo que ese curso no puede dar.

## Cobertura

> Una fila por lección, rellenada sobre la marcha. Es un informe de huecos en vivo,
> no una autopsia que se escribe al final.

| Lección | Concepto en `1. Teoría/` | Posesión | Estudio |
|---|---|---|---|
| | | | |

**Posesión:** `poseído` · `no poseído` · *(vacío = aún no probado)*

---

## Cierre

> Solo al terminar el curso.

- [ ] Toda lección tiene concepto y veredicto
- [ ] `estado: cerrado` con fecha
- [ ] Retrospectiva en [[6. Práctica/4. Bitácora/00. Índice]]

### Veredicto

- **Qué me dio:**
- **Qué no me dio:**
- **Qué sigue faltando:**

### Siguiente

> Sale de los huecos de arriba, no del catálogo del próximo curso.

> [!important] Definición de hecho
> Cada lección tiene una fila con un concepto de `1. Teoría/` y un veredicto.
> Un curso que no dejó nada en `1. Teoría/` no te dio nada.

---

## Archivo: `10. System/2. Plantillas/0. Notas/Estudio.md`

```yaml
tipo: estudio
estado: borrador
curso:
leccion:
area:
conceptos:
partitura:
posesion:
tags:
  - curso-musica/estudio
```

# {{title}}

> [!abstract] Objetivo
> <!-- Una frase: qué concepto prueba, y por qué este ejercicio y no otro. -->

**<!-- 8–16 compases · una sola dificultad nueva -->**

## Qué se escribe exactamente

<!-- Tonalidad, métrica, tempo, compases, voces, instrumentos.
     Cuanto más cerrado esté, menos negocias contigo mismo a mitad. -->

## Restricciones

<!-- Se escriben como texto en el compás 1, antes de la primera nota. -->

1.

## Criterio de aprobación

<!-- Tiene que **sonar**, no solo ser correcto. Escúchalo antes de juzgarlo. -->

## Qué lo invalida

<!-- La trampa concreta que haría que esto no probara nada. -->

## De dónde sale

<!-- Lección, tema o clase. -->

## Alimenta

<!-- Qué nota de `1. Teoría/` se edita con esto. **Se edita, no se clona.** -->

## Resultado

- Fecha:
- Qué escribí:
- Veredicto: `poseído` / `no poseído`
- Partitura: `![[.musicxml]]`

---

## Archivo: `10. System/2. Plantillas/0. Notas/Obra.md`

```yaml
tipo: composicion
estado: boceto
inicio: "{{date:YYYY-MM-DD}}"
cierre:
instrumento:
tonalidad:
metrica:
tempo:
definicion_terminado:
referencias:
conceptos:
ultimo_audio:
tags:
  - curso-musica/obra
```

# {{title}}

> [!important] Antes de la primera nota
> `definicion_terminado` se escribe **hoy**, no cuando la pieza esté avanzada.
> "Que quede bien" no es una definición. "90 s, forma AABA, una toma limpia exportada" sí.

## Origen

<!-- De dónde salió. Qué escuchabas, qué acorde, qué ritmo tenías en la cabeza. -->

## Material

<!-- Compases, capturas, partitura. -->
<!-- ![[nombre.musicxml]] para partitura completa, o un bloque ```abc para un fragmento. -->

## Decisiones

> Una línea por decisión: **qué hice · por qué · qué cambió → enlace al concepto**.
> Sin esto, las decisiones quedan dentro de la narración: valiosas pero irrecuperables.

- <!-- Csus2 → D7 en c. 9 — natural pero con tensión retenida. → [[1. Acordes dominantes]] -->

## Problemas abiertos

> Los bloqueos, formulados como problema y no como queja.
> "A suena como final" es un problema abierto. "No me gusta" no lo es.

- [ ]

## Feedback

> Fechado y con fuente. Incluye el tuyo propio después de 24 h.

### AAAA-MM-DD — *fuente*

-

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

---

## Archivo: `10. System/2. Plantillas/0. Notas/Semana.md`

```yaml
tipo: semana
estado: activa
fecha: "{{date:YYYY-MM-DD}}"
obra_activa:
concepto_activo:
audios:
sesiones:
tags:
  - curso-musica/semana
```

# Semana del {{date}}

## 1 · Vaciar la entrada

> Cada nota de `0. Entrada/` se rutea con la pregunta de [[Inicio]]. Queda en cero.

- [ ] `0. Entrada/` vacía

## 2 · Qué produje

| | |
|---|---|
| Audios nuevos | |
| Concepto que cambió | |
| Estudios escritos | |
| Sesiones | |

> [!important] Definición de hecho
> Hay al menos un audio nuevo. Semana sin audio es semana en blanco, por mucho que hayas estudiado.

## 3 · Revisión

- ¿Qué puedo hacer hoy que no podía el lunes?
- ¿Qué recuerdo sin consultar notas?
- ¿Dónde repetí sin cambiar de estrategia?
- ¿Qué quedó abierto?
- ¿Qué debo dejar de estudiar por ahora?

## 4 · La semana que viene

- **Obra activa:** *(una a la vez)*
- **Concepto de la semana:**
- **Siguiente acción de menos de 20 minutos:**
- [ ] [[Inicio]] actualizado

---

## Notas de la semana

<!-- Lo que no cabe arriba. Una línea basta. -->

---

## Archivo: `10. System/2. Plantillas/0. Notas/Sesión deliberada.md`

```yaml
tipo: sesion
estado: planeada
fecha: "{{date:YYYY-MM-DD}}"
proyecto:
habilidad_principal:
duracion_min:
energia_inicio:
dolor_inicio:
objetivo_cumplido:
evidencia_audio:
tags:
  - curso-musica/sesion
```

# Sesión — {{date}}

## Antes — 2 minutos

- Proyecto:
- Duración disponible:
- Energía de 1 a 5:
- Dolor o tensión física:
- Resultado observable de hoy:
- Punto de partida exacto:
- Estrategia que probaré:
- Cómo sabré que funcionó:

## Recuperación — 5 a 10 minutos

Sin consultar apuntes:

- ¿Qué recuerdo de la sesión anterior?
- ¿Puedo cantar, tocar o explicar la idea principal?
- ¿Qué olvidé?

## Trabajo principal

### Intento 1

- Qué hice:
- Qué ocurrió:
- Evidencia:

### Cambio de estrategia

- Diagnóstico: `percepción / comprensión / planificación / ejecución / memoria / diseño`
- Qué modificaré:

### Intento 2

- Resultado:

### Intento 3, solo si aporta información nueva

- Resultado:

## Captura

- [ ] Grabé o exporté una toma completa.
- Nombre del archivo:
- Minuto o compás que debo escuchar con atención:

## Después — 3 minutos

- Algo que conservaré:
- Algo que cambiaré:
- Algo que probaré después:
- ¿Cumplí el objetivo? `sí / parcialmente / no`
- Razón:
- Siguiente acción concreta de menos de 20 minutos:
- Fecha de recuperación: `+1 / +3 / +7 / +14 días`

---

## Archivo: `10. System/2. Plantillas/0. Notas/Setup.md`

```yaml
tipo: setup
estado: vigente
categoria:        # hardware | software | boveda
fabricante:
modelo:
plataforma: [windows, macos]
firmware:
ultima_verificacion: "{{date:YYYY-MM-DD}}"
fuentes: []
tags:
  - curso-musica/setup
```

# {{title}}

> [!abstract] Qué es y para qué lo uso
> Una línea: qué hace este equipo **en este sistema**, no en general.

## Especificaciones

| | |
|---|---|
| **Tipo** | |
| **Año** | |
| **Conexiones** | |
| **Alimentación** | |
| **Dimensiones / peso** | |

## Conexiones

Qué cable va a dónde.

## Windows

1.

## macOS

1.

## Configuraciones

*(solo si el equipo tiene editor)* Archivos en `8. Setup/3. Configuraciones/<equipo>/`.
Convención en [[8. Setup/0. Índice#Configuraciones]].

| Archivo | Para qué | ¿Cargada ahora? |
|---|---|---|
| `<Equipo> - <para qué>.<ext>` (o `- P<n>` si tiene ranuras de preset) | | sí |

Lo que el editor **no exporta** va aquí, como tabla de ajustes.

## Uso en esta bóveda

Con qué programa se usa (MuseScore, Strudel, DAW) y cómo.

## Problemas conocidos

| Síntoma | Causa | Solución |
|---|---|---|
| | | |

## Por verificar

- [ ]

---

## Archivo: `10. System/2. Plantillas/1. Bloques/Rúbrica - Composición.md`

```yaml
tipo: rubrica
estado: plantilla
tags:
  - curso-musica/rubrica
```

# Rúbrica de composición

## Instrucciones

Evaluar después de una escucha completa, preferiblemente al día siguiente. Puntuar de 1 a 5 y escribir evidencia audible. No modificar durante la primera escucha.

Escala:

- 1 — ausente o accidental.
- 2 — aparece, pero es inconsistente.
- 3 — funciona de forma básica.
- 4 — funciona con claridad e intención.
- 5 — es distintivo, controlado y necesario para la obra.

## Evaluación

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

## Preguntas estructurales

- ¿Qué material reconoce el oyente como identidad de la pieza?
- ¿Cada sección tiene una función diferente?
- ¿El contraste parece relacionado o arbitrario?
- ¿El punto culminante está preparado?
- ¿Hay compases que solo prolongan por inseguridad?
- ¿La pieza termina cuando debe o simplemente se detiene?

## Preguntas de economía

- ¿Qué puedo eliminar sin perder la intención?
- ¿Qué capa duplica otra sin propósito?
- ¿Estoy solucionando un problema formal con acordes nuevos?
- ¿La complejidad es audible o solamente visible en la partitura?
- ¿Una variación del material existente funcionaría mejor que una idea nueva?

## Decisión de revisión

Elegir una sola prioridad estructural y, como máximo, dos de detalle.

- Prioridad estructural:
- Detalle 1:
- Detalle 2:
- Elementos que no tocaré:
- Fecha de cierre:

## Criterio de salida

Una pieza puede cerrarse aunque tenga puntuaciones bajas si:

- cumplió el experimento;
- produjo un aprendizaje claro;
- recibió una revisión consciente;
- existe una exportación completa.

La siguiente pieza puede entrenar la dimensión más débil.

---

## Archivo: `10. System/2. Plantillas/1. Bloques/bloque — decisión.md`

- **<!-- qué hice -->** · <!-- por qué --> · <!-- qué cambió --> → [[ ]]

---

## Archivo: `10. System/2. Plantillas/1. Bloques/bloque — dónde va cada archivo.md`

## Dónde va cada archivo

| Archivo | Dónde | Por qué |
|---|---|---|
| Esta nota | aquí, `<lección>/Estudios/` | Punto **2** del ruteo: lo escribí yo a raíz de una clase. |
| La partitura `.mscz` | `7. Partituras/4. Cursos/Cresciente/` | Una partitura no es una nota. Y `sync-partituras.py` solo recorre esa carpeta. |
| El `.musicxml` hermano | junto al `.mscz` | Derivado. Lo genera el script; es lo que renderiza Verovio. |
| El audio | donde sea | git lo ignora. |

Todo lo que nace de una lección entra en `Estudios/`. La promoción a `3. Composiciones/` o a `5. Referencias/` es una decisión **posterior y explícita**.

---

## Archivo: `10. System/2. Plantillas/1. Bloques/bloque — prueba de posesión.md`

## Antes de empezar: prueba de posesión

> El concepto **ya existe** en `1. Teoría/`. Antes de tomar apuntes otra vez, demuéstralo.

> **8–16 compases · 20 minutos cronometrados · sin apuntes, sin abrir la bóveda, de una sentada.**
>
> <!-- Qué se escribe exactamente: tonalidad, voces, qué tiene que aparecer. -->

**Veredicto:** `poseído` / `no poseído` → al frontmatter.

- **Poseído** → cero apuntes; la lección se usa para aplicarlo.
- **No poseído** → la repetición estaba justificada, y ahora sí te sirve.

Si consultaste algo —lo que sea— es `no poseído`. Eso no es un fracaso: es el dato.

---

## Archivo: `10. System/2. Plantillas/2. Notación/abc — dos voces.md`

```abc
X:1
M:4/4
L:1/8
K:C
V:1 clef=treble
V:2 clef=bass
[V:1] | cdef gabc' |
[V:2] | C,2 G,2 C2 E2 |
```

---

## Archivo: `10. System/2. Plantillas/2. Notación/abc — fragmento.md`

```abc
X:1
T:
M:4/4
L:1/8
K:C
| CDEF GABc |
```

---

## Archivo: `10. System/2. Plantillas/2. Notación/abc — melodía con cifrado.md`

```abc
X:1
M:4/4
L:1/8
K:C
"C"c2 e2 "Am"a2 g2 | "F"f2 e2 "G7"d2 c2 | "C"c8 |]
```

---

## Archivo: `10. System/2. Plantillas/2. Notación/partitura — estudio.md`

## Posesión

{{date:YYYY-MM-DD}} · escrito sin apuntes · veredicto: `poseído` / `no poseído`

![[.musicxml]]

---

## Archivo: `10. System/2. Plantillas/2. Notación/strudel — acordes.md`

```strudel
n("<0 3 4 1>")
  .scale("C:minor")
  .voicing()
  .s("piano")
  .slow(2)
```

---

## Archivo: `10. System/2. Plantillas/2. Notación/strudel — capas.md`

```strudel
setcpm(90/4)   // un ciclo = un compás de 4/4

stack(

  // ── 1 · Columna vertebral ── la clave o patrón que elijas
  s(""),

  // ── 2 · Percusión ──
  s("").bank(""),

  // ── 3 · Bajo ── mucho protagonismo rítmico
  note("").s(""),

  // ── 4 · Armonía ── ritmo armónico lento
  n("").scale("").voicing().s(""),

  // ── 5 · Gesto de puntuación ── simultáneo: [bd,sd,oh]
  s(""),

)
```

---

## Archivo: `10. System/2. Plantillas/2. Notación/strudel — melodía.md`

```strudel
n("<0 2 4 [3 2] 1 0>")
  .scale("C:major")
  .s("piano")
  .slow(2)
```

---

## Archivo: `10. System/2. Plantillas/2. Notación/strudel — patrón + bajo.md`

```strudel
stack(
  s("bd*4, hh*8").bank("RolandTR909"),
  note("<c2 as1 f2 g2>").s("sawtooth").lpf(400),
)
```

---

## Archivo: `10. System/2. Plantillas/2. Notación/strudel — ritmo.md`

```strudel
s("bd*4, [~ sd]*2, hh*8")
  .bank("RolandTR909")
```

---

## Archivo: `10. System/2. Plantillas/2. Notación/strudel — secciones.md`

```strudel
setcpm(90/4)   // 1 ciclo = 1 compás

const A = stack(
  // tema
)

const B = stack(
  // contraste
)

const puente = stack(
  // transición
)

arrange(
  [8,  A],
  [8,  B],
  [4,  puente],
  [8,  A],
)
```
