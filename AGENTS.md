# Reglas para agentes de IA

Esta bóveda es un sistema para aprender música y **terminar piezas**. No es un
archivo de teoría: es una máquina donde lo que se estudia acaba sonando.

Antes de tocar nada, la documentación viva es:

| Documento | Qué responde |
|---|---|
| [[Inicio]] | el mapa, el estado activo y las reglas duras |
| [[6. Práctica/1. Estructura]] | por qué está organizado así y dónde va cada cosa |
| [[6. Práctica/0. Flujos]] | los siete bucles, con su definición de hecho |
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

## Obras: mapa, contexto, decisiones, sesiones y feedback

Toda obra de `3. Composiciones/` usa los mismos nombres. **El nombre de la pieza no se repite en los
archivos**: está en la carpeta y en `titulo`.

```
3. Composiciones/<n>. <obra>/
├── 0. Obra.md          ← ficha (tú)
├── 1. Mapa.md          ← secciones, intención, energía: la vara de medir (tú)
├── 2. Decisiones.md    ← D-NN (tú)
├── 3. Sesiones/        ← NN. <alcance>.md (tú)
├── 4. Contexto.md      ← R-NN: qué tomas de otras canciones y qué no (tú)
├── 5. Feedback/        ← NN. <alcance>.md (IA)
├── 6. Hallazgos.md     ← H-NN con estado (IA)
└── AI/                 ← guías y análisis de esta obra que no son feedback (IA)
```

Detalle en [[6. Práctica/1. Estructura]], sección *`3. Composiciones/`*.

**Qué escribe la IA y qué no.**

1. La IA escribe **solo** `5. Feedback/`, `6. Hallazgos.md` y `AI/` (guías y análisis que no evalúan una
   versión de la pieza).
2. `0. Obra`, `1. Mapa`, `2. Decisiones`, `3. Sesiones/` y `4. Contexto` los escribe el usuario. La IA
   **propone** cambios al Mapa, decisiones y tomas para Contexto (con `____` en el porqué y
   en lo que el usuario quiere) dentro de la sección *Propuestas* de un feedback, y nunca los aplica.

**Cómo se hace un feedback.**

1. **Es sobre la composición, no sobre las sesiones.** Se evalúa la versión actual dentro del alcance
   pedido. Las sesiones de ese alcance desde el feedback anterior se leen como
   **contexto** (qué quería, por qué cambió algo); nunca se evalúan.
2. **Antes de escribir**, se leen `1. Mapa`, `2. Decisiones`, `4. Contexto` y `6. Hallazgos`. Un
   error es lo que escribió (cifrado, Mapa, Decisiones, Contexto) contra lo que suena. Lo que contradice
   una decisión vigente **no se reporta**. Con Contexto hay dos familias más: una toma ✅ del alcance que
   no se oye, y una ❌ que se coló. Las dos llevan `contra: R-NN`.
3. **Numeración:** la IA toma el siguiente número de `5. Feedback/` (dos dígitos, empieza en `00`, sin
   huecos; lo que ya existe no se renumera nunca: la única excepción fue la migración de una obra a este
   esquema, que se hace una vez y deja una tabla de equivalencias en `0. Obra`) y nombra el archivo con el alcance: `07. B2.energia.md`.
4. **Alcance:** `sección.instrumento.aspecto`, en ese orden, omitiendo lo que no aplica, sin acentos.
   Sección = las del Mapa; instrumento = `instrumentos` de `0. Obra`; aspecto = `forma`, `armonia`,
   `voicing`, `ritmo`, `melodia`, `arreglo`, `energia`, `notacion`. Si el usuario pide feedback sin
   alcance, se usa el de su última sesión.
5. **Solo se muestra lo abierto y lo nuevo** del alcance, más una línea con lo que se cerró.
6. **Un feedback solo toca hallazgos de su alcance.** Que no se haya mirado un hallazgo no lo cierra.
7. **Termina con una sola recomendación** (`siguiente`): el hallazgo abierto de más peso en el alcance.
   El usuario revisa solo el último feedback y hace una cosa a la vez.
8. **Los ejemplos muestran lo que suena hoy**; nunca la corrección.
9. **Cada feedback registra qué evaluó, exactamente** (`evaluado` en el frontmatter y la tabla *Qué se
   evaluó*), para poder volver a esa pieza en ese punto del tiempo. Un renglón por archivo fuente (dos si
   `formato: ambos` y se miraron los dos):

   | Campo | Qué es | Cómo se saca |
   |---|---|---|
   | `archivo` | el `.mscz` o el `.strudel.js` evaluado | `fuente` de `0. Obra` |
   | `commit` | HEAD al evaluar | `git log -1 --format=%h` |
   | `limpio` | `true` si el archivo es igual al del commit | `git status --porcelain -- "<archivo>"` vacío |
   | `blob` | huella del contenido exacto, aun sin commit | `git hash-object "<archivo>"` (7 caracteres) |
   | `guardado` | fecha y hora del archivo en disco | la del archivo, `AAAA-MM-DD HH:MM` |

   Si el archivo **no está limpio**, se dice en el feedback: el blob lo identifica pero no lo guarda, y
   para volver a él hace falta un commit. Se recomienda hacerlo; no se hace sin que el usuario lo pida.
   Si hay un autosave de MuseScore más nuevo que el archivo, también se dice, y se evalúa lo guardado.
10. **Cada feedback trae recursos para entender el problema, no solo texto.** La *Lista* es siempre una
    tabla, y cada hallazgo de *Uno por uno* lleva **al menos uno** de estos:

    | Recurso | Para qué |
    |---|---|
    | bloque ```` ```music-abc ```` | lo que suena hoy, 2–8 compases, con las voces separadas y la altura real de la guitarra |
    | bloque ```` ```strudel ```` | el patrón tal como está, cuando la fuente es Strudel o el problema es de ritmo |
    | tabla | números: volumen por compás o por tiempo, intervalos, registros, antes contra ahora |
    | bloque ```` ```mermaid ```` | estructura y movimiento: la forma (`gantt`), una curva de energía (`xychart-beta`), cadenas armónicas o conducción (`flowchart`) |
    | gráfica `.svg` | cuando nada de lo anterior alcanza; va en una carpeta `5. Feedback/NN. <alcance> - gráficas/` y se incrusta |

    Los ejemplos nunca traen la corrección: muestran lo que suena, o un compás del propio usuario como
    comparación.

**Hallazgos.** Describen la pieza, nunca la sesión. El ID (`H-NN`) no cambia nunca y la línea termina con
su ID de bloque (`^h-07`). Estados: `abierto`, `arreglado` (con el feedback que lo cerró), `decisión`
(con su `D-NN`) y `retirado` (la IA se equivocó, y dice por qué). Nada se borra: baja a *Cerrados*.

**Enlaces.** Cada enlace se escribe una sola vez, en el archivo de quien lo escribe; la vuelta la dan los
backlinks. Hallazgos, decisiones y tomas se enlazan por línea, con su ID de bloque y con ruta desde la obra:
`[[6. Hallazgos#^h-07|H-07]]`, `[[2. Decisiones#^d-12|D-12]]`, `[[4. Contexto#^r-03|R-03]]`. Cada decisión es
una tabla propia con su `^d-NN` debajo: Obsidian solo deja enlazar una tabla entera, no una fila.

**Contexto y referencias.** Dos capas, como Teoría y Cursos:

| | `5. Referencias/` | `4. Contexto` de la obra |
|---|---|---|
| Qué es | la canción ajena, completa | lo que el usuario quiere de ella **para esta obra**, y lo que no |
| Unidad | una nota por canción | una **toma**: `R-NN` |

Una toma es una línea exacta: de dónde (canción y momento: tiempo o compases) · qué (un principio, uno
solo) · aspecto y destino (con el vocabulario del alcance) · cómo se reconoce al oírla · estado
(`propuesta`, `aplicada`, `descartada`). Tiene dos polaridades: ✅ *tomo* y ❌ *no quiero*. El ID no
cambia nunca y la línea termina con `^r-NN`. Descartar una toma es una decisión (`D-NN`). El Mapa asigna
tomas a secciones; una sesión libre dice cuál aplica (`aplica:`).

Material de IA sobre referencias: el análisis de la canción sola va a `5. Referencias/0. Análisis/AI/`;
la comparación obra contra referencia va a `<obra>/AI/`.

**Partitura o Strudel.** `0. Obra` dice cuál con `formato` y la enlaza con `fuente`. El `.mscz` vive en
`7. Partituras/`; un `.strudel.js` **se queda donde está**. El "qué cambió" sale de
`./_scripts/diff-musical.py` / `historial.py` en partituras, y de `git diff` en Strudel.

**Commits de sesión:** `<Obra> NN: qué cambió [H-07]`.

**Scripts:** estos nombres llevan puntos; nada de `with_suffix()` sobre ellos (ver *Trampas conocidas*).

---

## Nomenclatura

- Prefijo numérico **entero** en carpetas y archivos: `1. Armonía/0. Séptimas.md`
- Cero a la izquierda si el grupo pasa de 10: `00.`, `01.`
- **Nunca decimales** (`8.1`, `11.3`): fue el síntoma del colapso anterior. La única excepción son los
  puntos del alcance en `3. Sesiones/` y `5. Feedback/` de una obra (`12. B2.energia.md`): el número es
  entero y los puntos separan ejes
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
        # mapa-obra | decisiones | contexto | hallazgos | feedback
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
`Obra`, `Mapa`, `Decisiones`, `Sesión de obra`, `Contexto`, `Hallazgos`, `Feedback`, `Estudio`,
`Actividad de curso`, `Semana`, `Sesión deliberada`, `Setup`), bloques
reutilizables (`bloque — dónde va cada archivo`, `bloque — prueba de posesión`,
`Rúbrica - Composición`) y snippets de notación.

---

## Las reglas duras del sistema

Vienen de [[Inicio]]. No son negociables sin que el usuario lo decida:

1. **Una obra activa a la vez.**
2. **Semana sin audio es semana en blanco**, por mucho que haya estudiado.
3. **La nota de concepto la escribe él.** La IA escribe en `AI/`. En una obra, también `5. Feedback/` y `6. Hallazgos.md`.
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
