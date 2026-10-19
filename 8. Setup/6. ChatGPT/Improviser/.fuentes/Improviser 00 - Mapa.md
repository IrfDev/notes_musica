# Improviser · mapa

> [!info] Para qué es este archivo
> Es la **primera fuente** del proyecto *Improviser* de ChatGPT: dice qué hay en cada una de las demás,
> resume el equipo, la bóveda y el estado del trabajo, y marca lo que **no está documentado**.
> Lo escribió Claude el 2026-10-18 a partir de la bóveda; se sube tal cual con
> `_scripts/generar-chatgpt.py` (ver [[8. Setup/6. ChatGPT/README|ChatGPT]]).

---

## 1. Qué es Improviser

*Improviser* es el nombre del montaje: **Strudel toca un acompañamiento por MIDI y el usuario improvisa
encima** con sus instrumentos, y todo termina en audio, con o sin partitura. Por eso el puerto MIDI
virtual se llama `Improviser - Strudel Out`.

El proyecto de ChatGPT cubre todo lo que rodea ese montaje: el equipo (hardware y software), los
instrumentos (piano, guitarra, controladores), Strudel, el sistema de la bóveda y las obras.
**Louise**, la obra activa, tiene además su propio proyecto: *Improviser Louise*.

## 2. Qué hay en cada fuente

| Fuente | Responde |
|---|---|
| **00 - Mapa** | este archivo: el resumen y dónde está cada cosa |
| **01 - Bóveda, flujos y reglas** | cómo se organiza la bóveda, los seis flujos, las reglas duras, las plantillas, el sistema de partituras y lo que una IA no escribe (`CLAUDE.md`) |
| **02 - Equipo, hardware** | el inventario, el mapa de conexiones y una nota por aparato: SMC-PAD, KeyStep mk2, Casio CTK-551 |
| **03 - Equipo, software** | Cakewalk Sonar (pistas, arpegiador, problemas), Cakewalk Next y Analog Lab V (bancos, mapeos MIDI) |
| **04 - Presets y áreas** | las 4 áreas de trabajo y una nota por preset: los 8 del SMC-PAD y los 9 bancos de Analog Lab |
| **05 - Strudel, motor y uso** | el motor local (VS Code → Chrome → MIDI → Sonar), qué es Strudel y cuándo usarlo, cómo componer, los arpegiadores `.ARP` |
| **06 - Strudel, guías de estilo** | beats, folk, house y dream pop desde cero |
| **07 - Strudel, patrones** | el código de todos los `.strudel.js` (menos Louise) |
| **08 - Piano, programa de 30 sesiones** | el plan de seis semanas, el progreso y las 30 sesiones completas |
| **09 - Piano, cheat sheet de acordes** | la teoría y los ejercicios del programa de piano |
| **10 - Guitarra** | el diagnóstico, el plan de dos meses, los calentamientos, el cheat sheet por tonalidad |
| **11 - Teoría, notas de concepto** | lo que el usuario sabe, **escrito por él**, en nueve áreas: el nombre exacto de cada `[[concepto]]` |
| **12 - Obras** | todas las composiciones, de Cyclone a Louise |
| **13 - Cursos y bitácora** | los índices de los tres cursos y el registro semanal |

Cada fuente (salvo esta) junta notas de la bóveda **tal cual**, cada una precedida de su ruta. Para
citar algo, cita la ruta.

## 3. Quién es el usuario

- Ingeniero de software, 29 años, **guitarrista y pianista**. Escribe en español.
- Compone **dream pop, folk y música triste**. Influencias: Beach House, The Lumineers,
  Harmless/Twin Cabins, Andrew Bird, Radiohead/Thom Yorke, Avi Buffalo, Bob Dylan, Bon Iver.
- Tiene un **profesor humano, Fabs**. La IA no lo sustituye.
- Su punto débil es el **ritmo**; su cuello de botella, **producir audio**. Quiere procesos
  **deterministas y simples**: si se puede con menos pasos, con menos.
- Trabaja en **Windows y macOS**: el DAW (Sonar) y los editores de los aparatos son de Windows;
  MuseScore, Analog Lab, Strudel y la bóveda están en los dos.

## 4. Estado al 2026-10-18

| | |
|---|---|
| **Obra activa** | *Louise*: vals en Re mayor, 3/4, ♩=160, piano + guitarra nylon + batería. 106 compases escritos en MuseScore (Intro · V1 · C1 · B1 · V2 · C2 · B2 · C3), falta el outro y cerrarla. Detalle en su proyecto |
| **Piano** | programa de 30 sesiones empezado: **día 1 hecho** (2026-10-13, teclado y Hanon a 60) |
| **Curso en marcha** | Cresciente, módulo 1B *Séptimas* |
| **Strudel por MIDI** | el motor está montado; la **Fase 2** (`npm run prueba` → suena `STR - Bass` en Sonar) figura como pendiente en el README de Strudel. Louise se trabajó con los samples del navegador, no por MIDI |
| **Sonar** | funciona con los 3 controladores (Analog Lab V en cada pista), proyecto *Explorer* |

Si algo de esta tabla parece viejo, pregunta: la bóveda cambia más rápido que estas fuentes.

## 5. El equipo

### Aparatos

| Equipo | Qué es | Conexión | Papel |
|---|---|---|---|
| **Arturia KeyStep mk2** | 32 teclas, secuenciador, arpegiador, modos Chord y Scale, MIDI DIN de salida | USB-C | la voz que improvisa (`HUM - Lead`); entrada de notas en MuseScore; toca el Casio sin computadora |
| **Casio CTK-551** | 61 teclas, 100 tonos propios (no es GM completo), altavoces, polifonía 16 (8 en algunos tonos) | solo MIDI DIN (con interfaz USB-MIDI) | **piano a dos manos**; audio rápido por la salida de auriculares; módulo de sonido |
| **M-VAVE SMC-PAD** | 16 pads con velocidad, 8 perillas, botones de transporte, 8 ranuras de preset | USB-C o Bluetooth | ritmo y percusión; bajo, teclas y la banda de Strudel según el preset |
| **Guitarra** | nylon/acústica | — | **sin vía de grabación documentada** |

Mapa de conexiones:

```
                 USB-C                     USB-C / BT
KeyStep mk2  ─────────────▶  computadora  ◀──────────── SMC-PAD
     │                            ▲
     │ MIDI OUT (DIN)             │ USB-MIDI (cable aparte)
     ▼                            │
Casio CTK-551 ── MIDI OUT ────────┘
```

> [!warning] Los editores ocupan el puerto MIDI
> MidiSuite (SMC-PAD) y MIDI Control Center (KeyStep) tienen que estar **cerrados** antes de abrir el
> DAW o MuseScore.

### Programas

| Programa | Sistema | Para qué |
|---|---|---|
| **Cakewalk Sonar** | Windows | DAW principal: pistas de instrumento con Analog Lab V, Input Echo encendido; arpegiador con presets `.ARP` generados desde Strudel |
| **Cakewalk Next** | Windows | bocetos; trae *General MIDI Drums* |
| **Analog Lab V** | Windows, macOS | el sintetizador de cada pista; 9 bancos de usuario por familia |
| **MuseScore 4** | Windows, macOS | partituras: **conducción de voces** |
| **Strudel** | navegador (Chrome/Edge) | patrones: **ritmo**; local con MIDI, o dentro de Obsidian con samples |
| **VS Code** | los dos | se escriben los `.strudel.js` |
| **Obsidian + git** | los dos | la bóveda; plugins: Verovio (partituras), Strudel REPL, bloques ABC, Mermaid |

### Las cuatro capas de `8. Setup/`

| Capa | Qué responde |
|---|---|
| Equipo (`1. Software/`, `2. Hardware/`) | cómo se instala, se conecta y se configura |
| Archivo (`3. Configuraciones/`) | lo que se carga en el aparato o el programa (`.spc`, `.keystep2`, `.labx`, `.labmidi`, `.ARP`) |
| Preset (`4. Presets/`) | qué hace cada pad, perilla y botón, y qué sonidos usar |
| Área (`5. Áreas/`) | qué se junta para cada tipo de trabajo, y en qué orden |

**Para crear algo se empieza por el área; para entender un control, por el preset.**

| Área | Para qué | SMC-PAD | Sonidos de Analog Lab |
|---|---|---|---|
| **Beats** | batería, bajo y acordes con los pads | P3 Beat Maker, P2 Bajo, P4 Teclas | Beat Maker, Bajo, Teclas, Pads, Arpegiadores, FX |
| **Canción** | la obra activa: acordes, melodía y arreglo | P4 Teclas, P3 Beat Maker, P2 Bajo | Teclas, Pads, Leads, Texturas, Beat Maker, Bajo |
| **Atmósferas** | fondos y texturas sostenidas | P4 Teclas, con *Latch* o *Hold* | Texturas, Pads, Arpegiadores, FX |
| **Jam con Strudel** | tocar sobre la banda de Strudel | P8 Strudel | Bajo, Pads/Texturas, Arpegios, Beat Maker, Leads |

En las cuatro, el KeyStep y el Casio figuran como *pendiente* o *no hace falta*.

Presets del SMC-PAD: P1 Batería GM · P2 Bajo · P3 Beat Maker · P4 Teclas (en cuartas o cromático) ·
P5 Ritmo (lectura rítmica) · P6 Mackie (manejar Sonar) · P7 MIDI Learn · P8 Strudel. En todos, **Glob →
Transpose = 0** (con −4 todo sale cruzado).

Bancos de Analog Lab: Beat Maker · Teclas · Pads · Bajo · Arpegios (sonidos cortos para que *otro*
arpegie) · Arpegiadores (presets que arpegian *solos*) · Leads · Texturas · FX.

### Rutas de señal

**Improvisar sobre Strudel (Windows):**

```text
VS Code ─guardar─▶ motor Strudel (localhost:5173, Chrome) ─Web MIDI─▶ loopMIDI «Improviser - Strudel Out»
                                                                         │
KeyStep ──USB──▶ Sonar: HUM - Lead ◀─────────────────────────────────────┤
                 Sonar: STR - Bass (canal 2) · STR - Pad (3) · STR - Arp (4) ◀┘
                        └─▶ Analog Lab V en cada pista ─▶ audio ─▶ grabación
```

En macOS el puerto es el **IAC Driver** renombrado a `Improviser - Strudel Out` (Chrome lo muestra como
`IAC Driver Improviser - Strudel Out`).

| Pista de Sonar | Entrada | Canal | Sonido |
|---|---|---:|---|
| `STR - Bass` | Improviser - Strudel Out | 2 | banco Bajo |
| `STR - Pad` | Improviser - Strudel Out | 3 | Pads o Texturas |
| `STR - Arp` | Improviser - Strudel Out | 4 | Arpegios |
| `HUM - Lead` | KeyStep mk2 | — | Leads (*pendiente*) |
| Batería | SMC-PAD | 10 | Beat Maker |

**Sin computadora:** secuenciador o arpegiador del KeyStep → MIDI DIN → Casio; se graba la salida de
auriculares.

**Proyecto *Explorer* de Sonar** (el que funciona desde el 2026-09-27): una carpeta por controlador,
cada una con una pista de instrumento y su Analog Lab: Casio → *Grand Piano 1*, SMC-PAD → *E.P 7070*,
KeyStep → *The Opera*. Analog Lab siempre con **MIDI Channel = All** (el SMC-PAD manda por el canal 10).

## 6. Los instrumentos

### Piano

- Se toca en el **Casio** (61 teclas) para dos manos; el KeyStep (32) no llega a dos voces separadas.
- **Programa de 30 sesiones** (fuente 08): seis semanas de cinco sesiones de **40 minutos**, tres
  carriles en paralelo:
  - **Teclado**: las 12 tríadas e inversiones, escalas, arpegios, armonización, cadencias
    (I – IV⁶₄ – V⁶ – I) y los ocho patrones de mano izquierda.
  - **Técnica**: Hanon 1–20.
  - **Repertorio**: *Sleep on the Floor* (The Lumineers) y, en la semana 5, *Louise*.
- Una sesión: Hanon 6' · Recuperación 3' · Principal 14' · Aplicación 4' · Sleep on the Floor 11' ·
  Registro 2'.
- **Regla del metrónomo**: 3 limpias, +4 bpm; 3 fallos, −8. «A 60» en Hanon = cuatro notas por click.
- Si no llega al *hecho cuando*, la sesión se repite al día siguiente. Si algo duele, para.
- Punto de partida: las escalas de C, D, E y F ya salen a dos manos; no se reenseñan, se miden.
- La teoría y los ejercicios: fuente 09.

### Guitarra

- Más de un año tocando; folk, rock, blues y country. Toca *Dust in the Wind*, *Stairway to Heaven*,
  canciones de The Lumineers, fingerstyle.
- Fuente 10: diagnóstico inicial, plan de dos meses, calentamientos y el cheat sheet de acordes por
  tonalidad.
- **No hay vía de grabación documentada.** Si la necesita, márcalo *por verificar* y pregunta.

### KeyStep mk2

- Entrada de notas en MuseScore: `N`, duración con el teclado numérico, se toca la nota o el acorde.
- **Chord y Scale apagados** cuando se estudian voicings: decide cada voz él.
- Puede tocar el Casio por DIN sin computadora.

### SMC-PAD

- Ocho presets, cada uno con su nota (rejilla de 8 bancos de pads, colores, perillas, botones y sonidos).
- Lenguaje de colores común: en batería GM el color es la familia (🟥 bombo, 🟧 caja, 🟨 hi-hat, 🟦 toms,
  ⬜ platos…); en los bancos de notas, 🟩 do, ⬜ blancas, 🟦 negras.
- Los kits de Emulator II (Beat Maker) **no son General MIDI**: reparten el teclado en 8 zonas.

## 7. Strudel

- **Strudel para ritmo, MuseScore para conducción de voces.** Cada uno es malo fuera de su terreno.
- Dos formas de usarlo:
  1. **Motor local** (`4. Instrumento/2. Strudel/`): VS Code → guardar → Chrome (`npm run dev`,
     `localhost:5173`) reevalúa sin cortar → MIDI a Sonar. Cada voz es un bloque `$:` que termina en
     `.midichan(n).midi(OUT)`. **Nunca se escribe el nombre del puerto: se usa `OUT`.**
  2. **Bloque ` ```strudel ` en una nota de Obsidian**: trae samples, pero **no manda MIDI**.
- El motor solo ve `1. Acompañamientos/` (`1. Sparse`, `2. Groove`, `3. Open`, **vacíos todavía**: los
  escribe él) y `2. Vocabulario/` (vacío), que se carga antes de cada patrón: define `const`, nunca toca
  con `$:`.
- Algo entra al vocabulario solo tras **4 pruebas**: tocado, escuchado, usado en una improvisación y
  grabado.
- **Comillas**: en Strudel las dobles son mini-notación y las simples no. Por eso Prettier está apagado.
- `6. Arpegiadores/`: cada strudel ahí se convierte en un preset `.ARP` del arpegiador de Sonar y en un
  `.mid` (`./_scripts/strudel-a-arp.py`).
- Guías de estilo (fuente 06): beats, folk (el vals de Louise viene de aquí), house y dream pop.

## 8. La bóveda

### La regla que lo ordena todo

> **Las carpetas se ordenan por lo que la nota *es*, nunca por el tema del que habla.**

| | ¿Es…? | Va a |
|---:|---|---|
| 1 | apunte tomado **durante** una clase | `2. Cursos/<fuente>/` |
| 2 | algo que **escribió o tocó** a raíz de una clase | `2. Cursos/<fuente>/<lección>/Estudios/` |
| 3 | su explicación consolidada de **un concepto** | `1. Teoría/<área>/` |
| 4 | material generado por **IA** como apoyo | `1. Teoría/<área>/AI/` |
| 5 | ejercicio o rutina con respuesta correcta | `2. Cursos/0. Profesor/1. Rutinas/` |
| 6 | trabajo sobre **una pieza suya** | `3. Composiciones/<obra>/` |
| 7 | registro **fechado** de lo que hizo | `6. Práctica/4. Bitácora/` |
| 8 | sobre música **de otros** | `5. Referencias/` |
| 9 | técnica de guitarra o piano (y Strudel) | `4. Instrumento/` |
| 10 | instalación o configuración de **equipo o software** | `8. Setup/` |
| 11 | ninguna de las anteriores | `0. Entrada/` |

Partituras: **siempre** en `7. Partituras/` (`1. Clases`, `2. Composiciones`, `3. Referencias`,
`4. Cursos/<curso>`), dos archivos hermanos: `.mscz` (fuente) y `.musicxml` (lo genera
`./_scripts/sync-partituras.py`). Nunca `.mxl`. Sin número de iteración: las versiones son commits.
Audio (`.m4a`, `.wav`, `.mp3`): donde sea, git lo ignora; se nombra `AAAA-MM-DD <qué>.m4a`.

### Las reglas duras

1. **Una obra activa a la vez.** Una dificultad nueva por proyecto.
2. **Semana sin audio es semana en blanco**, por mucho que haya estudiado.
3. **La nota de concepto la escribe él.** La IA escribe en `AI/`.
4. **Nada se borra.** Lo superado va a `_legacy/`.
5. **Toda teoría termina en una decisión musical** que se oye.
6. **Se evalúa después de descansar** (24 h). La escucha inmediata está sesgada por la intención.

### Los seis flujos (fuente 01)

| | Flujo | Se dispara cuando | Está hecho cuando |
|---:|---|---|---|
| ① | Clase | toma una clase o módulo | una nota de `1. Teoría/` cambió |
| ② | Composición | tiene una idea o una restricción | existe un `.m4a` y aplicó la rúbrica |
| ③ | Referencia | escucha algo que le mueve | un concepto ganó un párrafo con esa evidencia |
| ④ | Sesión | se sienta a trabajar | `evidencia_audio` no está vacío |
| ⑤ | Semana | su día fijo | hay al menos un audio nuevo |
| ⑥ | Curso | empieza uno, y al cerrar cada lección | cada lección tiene concepto y veredicto de posesión |

### Cursos

| Fuente | Aporta | Numeración |
|---|---|---|
| `0. Profesor` (Fabs) | **corrección** | 1–26 |
| `1. Cresciente` | **cobertura** | 1A, 1B, 1C, 2A… (no se renumera) |
| `2. Udemy - Lectura rítmica` | lectura | 0–7 |

## 9. Los flujos de Improviser

Combinables. Cuando pida un flujo, se arma con el formato de las instrucciones.

| | Flujo | Qué es |
|---|---|---|
| **A** | Improvisar sobre Strudel | acompañamiento en `STR -`, improvisa en `HUM - Lead`, graba en Sonar |
| **B** | Groove con los dedos | bajo y pad en Strudel, batería en el SMC-PAD |
| **C** | De la improvisación a la partitura | la mejor frase de A, a MuseScore (MIDI grabado en Sonar → `.mid` → MuseScore → limpiar; **no documentado**: *por verificar* la primera vez) |
| **D** | De la partitura al groove | la armonía de una pieza suya pasa a Strudel y toca encima |
| **E** | Sin computadora | secuenciador o arpegiador del KeyStep → Casio por DIN; graba los auriculares |
| **F** | Fase 2 | la prueba del puente MIDI. Si no está hecha y el flujo necesita MIDI, es lo primero |

El piano no tiene flujo propio aquí: cada día del programa de 30 sesiones ya dice qué tocar, cuánto
tiempo y cuándo está hecho (fuente 08).

## 10. Lo que no está documentado (no lo inventes)

- La vía para **grabar la guitarra**.
- Los presets del **KeyStep** y del **Casio** en las áreas (marcados *pendiente*).
- Si el Casio tiene *Local Off* y qué interfaz USB-MIDI se usa.
- La **Fase 2** del motor de Strudel (si ya sonó `STR - Bass` en Sonar).
- Las notas de setup de Strudel y loopMIDI (`8. Setup/1. Software/3. Strudel.md`, `4. loopMIDI.md`):
  pendientes.
- El flujo C (de Sonar a MuseScore por `.mid`).
- Qué audio cuenta como final de Louise: su `definicion_terminado` está vacío.

Si una respuesta depende de algo de esta lista, **dilo y pregunta** en vez de suponer puertos, canales,
presets o menús.

## 11. Glosario

| Término | Qué es |
|---|---|
| `STR -` / `HUM -` | pistas de Sonar que toca Strudel / que toca un humano |
| `OUT` | la constante con el nombre del puerto MIDI (`.motor/puertos.js`) |
| P1–P8 | las ranuras de preset del SMC-PAD |
| banco | en el SMC-PAD, una página de 16 pads; en Analog Lab, un grupo de presets |
| área | un montaje para crear (Beats, Canción, Atmósferas, Jam con Strudel) |
| obra activa | la única pieza en la que se trabaja |
| prueba de posesión | 20 minutos sin apuntes: el concepto como 8–16 compases escritos por él |
| `render/` | carpeta del audio de una obra; git la ignora |
| sync | `./_scripts/sync-partituras.py`: regenera el `.musicxml` desde el `.mscz` |
| c. | compás |
| MD / MI | mano derecha / mano izquierda |
| *por verificar* | algo que no se ha comprobado; se marca así la primera vez |
