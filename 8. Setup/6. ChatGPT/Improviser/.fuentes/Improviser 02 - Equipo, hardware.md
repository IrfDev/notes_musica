# Equipo: hardware

> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario (Obsidian + git), el 2026-10-18. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.

Inventario, mapa de conexiones y una nota por aparato: M-VAVE SMC-PAD, Arturia KeyStep mk2, Casio CTK-551.

Contiene:

- `8. Setup/0. Índice.md`
- `8. Setup/2. Hardware/0. M-VAVE SMC-PAD.md`
- `8. Setup/2. Hardware/1. Arturia KeyStep mk2.md`
- `8. Setup/2. Hardware/2. Casio CTK-551.md`

---

## Archivo: `8. Setup/0. Índice.md`

```yaml
tipo: mapa
estado: vigente
```

# Setup

> [!abstract] Qué guarda esta carpeta
> **Cómo está montado el equipo**: instalación y configuración de hardware y
> software en Windows y macOS. No es técnica (eso va en `4. Instrumento/`) ni
> teoría: es lo que hay que hacer para que el equipo suene.

## La regla interna

> **Una nota por equipo o programa, nunca una por sistema operativo.**

El mismo teclado en Windows y en Mac es **un solo objeto**. Si se separara por
sistema, volverían a nacer archivos hermanos que se desincronizan: el mismo
fallo que produjo las 143 notas de teoría (ver [[6. Práctica/1. Estructura]]).
Windows y macOS son **secciones** dentro de cada nota.

Plantilla: [[Setup]] (en `10. System/2. Plantillas/0. Notas/`).

## Estructura

| Subcarpeta | Qué guarda | Estado |
|---|---|---|
| `0. Bóveda/` | git, Python, scripts, plugins de Obsidian | *pendiente* |
| `1. Software/` | DAW, sintetizadores, editores | en uso |
| `2. Hardware/` | teclados, controladores, interfaces, micrófonos | en uso |
| `3. Configuraciones/` | lo que **exportan** los editores: presets, mapeos, respaldos | en uso |
| `4. Presets/` | una nota por preset de cada equipo (qué hace cada pad, perilla, botón y color, y qué sonidos usar) y una por banco de sonidos de Analog Lab. Una subcarpeta por equipo o programa, con el nombre de su nota sin el número; las notas llevan delante el número de ranura (o el orden del banco) | en uso |
| `5. Áreas/` | una nota por **montaje para crear** (Beats, Canción, Atmósferas, Jam con Strudel): qué preset de cada equipo, qué bancos y qué pistas del DAW se usan juntos, y cuándo está hecho | en uso |
| `6. ChatGPT/` | los proyectos de ChatGPT que usan la bóveda (*Improviser*, *Improviser Louise*): sus instrucciones y las fuentes que se suben, generadas con `_scripts/generar-chatgpt.py`. Ver [[6. ChatGPT/README\|ChatGPT]] | en uso |

Las carpetas pendientes se crean cuando llegue su primera nota.

### Cómo encaja

Cuatro capas, de lo concreto a lo que se usa:

| Capa | Dónde | Qué responde |
|---|---|---|
| Equipo | `1. Software/`, `2. Hardware/` | cómo se instala, se conecta y se configura |
| Archivo | `3. Configuraciones/` | lo que se carga en el aparato o el programa |
| Preset | `4. Presets/` | qué hace cada control y qué sonidos usar |
| Área | `5. Áreas/` | qué se junta para cada tipo de trabajo, y en qué orden |

Para crear algo, se empieza por el **área**; para entender un control, por el **preset**.

Los archivos de `3. Configuraciones/` que no exporta un editor (P1–P8 del SMC-PAD, los bancos
`.labx`, la configuración `.labmidi`) y las notas de `4. Presets/` y `5. Áreas/` se generan con
`_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`. Para cambiar o añadir un
preset se toca el catálogo y se regenera; de cada nota generada se conservan `estado` y la
sección «Notas propias».

Los presets del arpegiador de Sonar (`.ARP`) no tienen catálogo: su fuente son los patrones de
Strudel, y los genera `_scripts/strudel-a-arp.py`. Para cambiar uno se cambia el patrón y se
regenera. Los arpegios nuevos viven en `4. Instrumento/2. Strudel/6. Arpegiadores/`, con sus `.ARP`
y `.mid` al lado; aquí, en `3. Configuraciones/Cakewalk Sonar/`, solo caen los de los strudels
sueltos. Sonar lee las dos carpetas **directamente**, por enlaces de carpeta que crea `--instalar`
una vez. Ver [[1. Software/0. Cakewalk Sonar#Arpegiador]].

---

## Configuraciones

Una carpeta por equipo o programa, con lo que exporta su editor adentro. **Nada más.**

```
8. Setup/3. Configuraciones/
├── M-VAVE SMC-PAD/
│   ├── SMC-PAD - P1 Batería GM.spc            ← un archivo por preset (P1–P8)
│   ├── SMC-PAD - P2 Bajo.spc
│   ├── …                                      ← P3 a P8
│   └── default.spc                            ← el preset 1 de fábrica, de referencia
├── Arturia KeyStep mk2/
│   └── KeyStep mk2.keystep2                   ← exportación completa del aparato
├── Analog Lab V/
│   ├── Analog Lab V - SMC-PAD banco A.labmidi ← configuración MIDI (Settings → MIDI)
│   ├── Analog Lab V - Beat Maker.labmidi
│   ├── Analog Lab V - Beat Maker.labx         ← banco de presets (importación de presets)
│   └── …                                      ← Teclas, Pads, Bajo, Arpegios, Arpegiadores, Leads, Texturas, FX
└── Cakewalk Sonar/
    ├── Sonar - Brillo frase.ARP               ← arpegiador: tus notas, transpuestas a la que mantienes
    ├── Sonar - Brillo ritmo.ARP               ← arpegiador: solo tu ritmo, sobre el acorde que mantienes
    └── …                                      ← un par por patrón de Strudel con .arp(

8. Setup/4. Presets/
├── M-VAVE SMC-PAD/
│   ├── 1. Batería GM.md                       ← una nota por ranura
│   └── …                                      ← 2. Bajo … 8. Strudel
└── Analog Lab V/
    ├── 1. Beat Maker.md                       ← una nota por banco de sonidos
    └── …                                      ← 2. Teclas … 9. FX

8. Setup/5. Áreas/
├── 1. Beats.md                                ← una nota por montaje
└── …                                          ← 2. Canción, 3. Atmósferas, 4. Jam con Strudel
```

### Las tres reglas

1. **Solo va lo que el programa exporta.** Si el editor tiene *Export* o *Save as*,
   el archivo va aquí. Nunca archivos copiados a mano de `AppData`, y **nunca**
   licencias, números de serie ni claves.
2. **Lo que no se puede exportar se escribe en la nota del equipo**, como tabla.
   Ejemplos: la sección Glob del SMC-PAD, los ajustes del Casio, las preferencias MIDI de Sonar.
3. **Nombre: `<Equipo> - <para qué>.<ext>`.**
   - Si el aparato tiene ranuras de preset, `P<n>` dice la ranura: `SMC-PAD - P3 batería.spc`.
   - Si el editor exporta el aparato entero, basta el nombre: `KeyStep mk2.keystep2`.
   - Se conserva la extensión del editor; si se cambia, no lo reconoce.
   - **Sin versiones en el nombre.** Cuando cambias algo, exportas **encima** del
     mismo archivo y haces commit diciendo qué cambió. El historial lo guarda git.

La carpeta se llama como la nota del equipo, sin el número.

En la nota de cada equipo, una tabla **Configuraciones** dice qué archivo hay y
**qué está cargado ahora en el aparato**.

## Inventario

| Equipo | Tipo | Conexión principal | Editor (Windows) | Papel en el sistema |
|---|---|---|---|---|
| [[2. Hardware/0. M-VAVE SMC-PAD\|M-VAVE SMC-PAD]] | controlador de pads | USB-C / Bluetooth | MidiSuite (`.spc`, un preset por archivo) | ritmo y percusión |
| [[2. Hardware/1. Arturia KeyStep mk2\|Arturia KeyStep mk2]] | teclado controlador y secuenciador | USB-C | Arturia MIDI Control Center (`.keystep2`) | entrada de notas en MuseScore, secuencias |
| [[2. Hardware/2. Casio CTK-551\|Casio CTK-551]] | teclado con sonidos propios | MIDI DIN (5 pines) | no tiene; se configura en el propio teclado | teclado de 61 teclas, módulo de sonido |

> [!warning] Los editores ocupan el puerto MIDI
> Cierra MidiSuite y MIDI Control Center **antes** de abrir el DAW o MuseScore.

### Software

| Programa | Sistema | Estado |
|---|---|---|
| [[1. Software/0. Cakewalk Sonar\|Cakewalk Sonar]] | Windows | funciona con los 3 controladores (Analog Lab V en cada pista); presets `.ARP` del arpegiador desde Strudel |
| [[1. Software/1. Cakewalk Next\|Cakewalk Next]] | Windows | funciona con el KeyStep |
| [[1. Software/2. Analog Lab V\|Analog Lab V]] | Windows, macOS | sintetizador de las 3 pistas de Sonar; mapeos `.labmidi`, presets `.labx` |

## Mapa de conexiones posible

```
                 USB-C                     USB-C / BT
KeyStep mk2  ─────────────▶  computadora  ◀──────────── SMC-PAD
     │                            ▲
     │ MIDI OUT (DIN)             │ USB-MIDI (cable aparte)
     ▼                            │
Casio CTK-551 ── MIDI OUT ────────┘
```

El KeyStep tiene MIDI DIN de tamaño completo, así que puede tocar los sonidos
del Casio **sin computadora**. Ver la nota del Casio.

---

## Archivo: `8. Setup/2. Hardware/0. M-VAVE SMC-PAD.md`

```yaml
tipo: setup
estado: vigente
categoria: hardware
fabricante: M-VAVE
modelo: SMC-PAD
plataforma: [windows, macos]
firmware:
ultima_verificacion: 2026-09-27
fuentes:
  - https://www.amazon.com/Wireless-Bluetooth-Controller-Assignable-Compatible/dp/B0DXC3N1RW
  - https://grokipedia.com/page/M-VAVE_SMC-PAD
tags:
  - curso-musica/setup
```

# M-VAVE SMC-PAD

> [!abstract] Qué es y para qué lo uso
> Controlador MIDI de **16 pads**, inalámbrico y con batería. En este sistema
> sirve para **ritmo**: tocar patrones de percusión con los dedos en vez de
> escribirlos, que es justo el punto débil que marca [[6. Práctica/3. Diagnóstico]].

> [!warning] Hay varias versiones
> M-VAVE vende el SMC-PAD en versión normal y en versión "Pocket", en negro y
> en blanco, y las especificaciones cambian un poco entre ellas. Las de abajo
> son las del modelo con 8 perillas. Confírmalo con la caja o la etiqueta de abajo.

## Especificaciones

| | |
|---|---|
| **Tipo** | controlador MIDI de pads, sin sonidos propios |
| **Pads** | 16 (rejilla de 4×4), de silicona, sensibles a la velocidad, con retroiluminación RGB; el fabricante dice que tienen aftertouch |
| **Perillas** | 8 encoders sin fin (360°), asignables, con botón KNOB BANK para cambiar de banco |
| **Botones** | transporte (Play, Stop, Record), Note Repeat, Full Level, Shift, izquierda/derecha |
| **Conexión** | USB-C (MIDI y carga), Bluetooth MIDI (BLE, 5.0 según el anuncio), salida MIDI por minijack de 3,5 mm |
| **Batería** | integrada, recargable, unas 16 h de uso (2000 mAh según el anuncio) |
| **Software** | **MidiSuite**: el editor de M-VAVE (Windows, macOS, iOS y Android). En Windows es el que se usa |
| **Compatibilidad** | *class compliant*: funciona sin driver en Windows, macOS, iOS y Android |

## Conexiones

- **USB-C a la computadora**: la opción más fiable y sin latencia. También carga la batería.
- **Bluetooth**: sin cables, pero en Windows da más trabajo (ver abajo).
- **MIDI OUT de 3,5 mm**: para tocar un sintetizador o módulo sin computadora.
  Hace falta un adaptador de minijack a DIN, y hay dos estándares (**TRS tipo A** y
  **tipo B**) que no son compatibles entre sí. Mira en el manual cuál usa antes de comprar el adaptador.

## Windows

**Por USB-C (recomendado):**

1. Conéctalo. Windows lo reconoce solo, sin instalar driver.
2. Comprueba que aparece en el programa (MuseScore, DAW) como dispositivo de entrada MIDI.

**Por Bluetooth:**

Casi todos los programas en Windows usan la API MIDI clásica, que **no ve
dispositivos Bluetooth MIDI**. Emparejarlo en Configuración → Bluetooth no basta.
Hay dos salidas:

1. **Windows MIDI Services**, si tu versión de Windows 11 ya lo trae: expone el
   dispositivo BLE a las aplicaciones clásicas.
2. Si no lo trae, hacer un puente: **MIDIberry** (lee el BLE) + **loopMIDI**
   (crea un puerto virtual). El programa escucha el puerto de loopMIDI.

**Una aplicación a la vez.** Con la API clásica de Windows, un dispositivo MIDI
solo puede abrirlo **un programa**. Si MuseScore no lo ve, cierra el navegador,
el DAW o cualquier otro programa que pueda tenerlo abierto.

### Editor: MidiSuite

- **MidiSuite** es el programa para configurar el SMC-PAD en Windows: qué nota
  manda cada pad, qué CC manda cada perilla, colores, etc.
- No tiene instalador: se descarga como `.zip` y se ejecuta directamente.
  En esta máquina: `~/Downloads/MidiSuite/MidiSuite/MidiSuite.exe`.
- **Ciérralo antes de abrir el DAW**: mientras está abierto ocupa el puerto MIDI
  del SMC-PAD (regla de una aplicación a la vez).

### Configuraciones

MidiSuite **exporta los presets** como archivos **`.spc`** (binarios: solo los
abre MidiSuite). Viven en `8. Setup/3. Configuraciones/M-VAVE SMC-PAD/`.
Convención completa en [[8. Setup/0. Índice#Configuraciones]].

| Archivo | Para qué | ¿Cargada ahora? |
|---|---|---|
| `SMC-PAD - P1 Batería GM.spc` | batería General MIDI | no |
| `SMC-PAD - P2 Bajo.spc` | líneas de bajo | no |
| `SMC-PAD - P3 Beat Maker.spc` | beats con los kits *Beat Maker* de [[2. Analog Lab V#Bancos de sonidos\|Analog Lab]] | no |
| `SMC-PAD - P4 Teclas.spc` | pianos, órganos, cuerdas y pads de Analog Lab | no |
| `SMC-PAD - P5 Ritmo.spc` | práctica de lectura rítmica | no |
| `SMC-PAD - P6 Mackie.spc` | manejar el DAW: es **el preset 2 de fábrica, byte a byte** | no |
| `SMC-PAD - P7 MIDI Learn.spc` | asignar con MIDI Learn en cualquier programa | no |
| `SMC-PAD - P8 Strudel.spc` | tocar con la banda de Strudel en Sonar | no |
| `default.spc` | idéntico byte a byte al **preset 1 de fábrica** (ver *Presets de fábrica*) | referencia |

Qué hace cada uno: [[#Los 8 presets]]. Están **generados a mano** el 2026-10-02 (el P6
sale de `SPB.bin`), y el aparato todavía tiene el P2 anterior en la ranura 2. Para
cada uno: MidiSuite → elegir la ranura en *Presets* → importar el `.spc` → *Save* →
y, cuando funcione, exportar encima.

Para cargarla en otra máquina: MidiSuite → importar el `.spc` → enviarlo al SMC-PAD.

> [!important] Un archivo = un preset
> El SMC-PAD guarda **8 presets**, y MidiSuite exporta **solo el seleccionado** en
> el menú *Presets*. Para respaldar todo hay que exportar los 8, uno por uno, como
> `SMC-PAD - P<n> <para qué>.spc`.
>
> Comprobado el 2026-09-27 con dos pruebas que quedaron en `_legacy/Setup pruebas 2026-09/`:
> - `SMC-PAD - P2 antes de la prueba.spc`: el preset 2 antes de cambiar el banco 8 pad 1 de 52 a 100. Solo cambia ese byte.
> - `SMC-PAD - P1 exportación vacía.spc`: el preset 1 salió **todo en ceros**.

### Qué guarda el `.spc` (formato descifrado)

Descifrado comparando exportaciones byte a byte con lo que muestra MidiSuite, y con
los **8 presets de fábrica** que MidiSuite trae en `MidiSuite/bin/SPB.bin`
(28 312 bytes = 8 × 3539: el mismo formato, uno detrás de otro).
**No hay documentación oficial**; lo marcado con *(supuesto)* no está confirmado.

Tamaño fijo: **3539 bytes**, en tres bloques seguidos, sin cabecera ni separador.
5 × 23 + 16 × 6 + 128 × 26 = 3539: cuadra exacto.

| Bloque | Posición | Registros | Tamaño |
|---|---|---|---|
| Botones | `0x000` | 5 | 23 B |
| Perillas | `0x073` | 16 = 8 perillas × 2 bancos (KNOB BANK) | 6 B |
| Pads | `0x0D3` | 128 = 16 pads × **8 bancos** (PAD BANK) | 26 B |

> [!warning] Corregido el 2026-10-02
> Antes se leía un "separador" en `0x073` y los pads desde `0x0D4`, con un pad
> final al que le faltaba un byte. Era un corrimiento de un byte: el preset 2 de
> fábrica tiene valores en `0x073` y en el **primer** byte de cada pad (el tipo).
> Las tablas de abajo ya están corregidas; los ejemplos del P2 siguen valiendo.

**Botón (23 B)**:

| Byte | Qué es | Valores |
|---|---|---|
| 0 | modo | `02` = **CC Push** (confirmado con `[ < ]`) · `03` = **SysEx** *(supuesto: es el orden de la lista de MidiSuite, CC Single → CC Push → SysEx, y el P2 lo tiene en `▶` con SysEx de MMC)* · `05` = **Mackie** (preset 2 de fábrica) |
| 1 | canal − 1 | `0E` → canal 15 |
| 2 | CC; en modo Mackie, la nota MCU | `1D` → 29 |
| 3–4 | Value1, Value2 | 0, 127 |
| 5 | largo del SysEx | `06` |
| 6–11 | SysEx | MMC `F0 7F 7F 06 <orden> F7`: 01 Stop, 02 Play, 03 Deferred Play, 04 Fast Forward, 05 Rewind, 06 Record |
| 12–21 | relleno | `00` |
| 22 | Led | `FF` = normal; en modo Mackie, la nota que enciende el LED |

Orden de los 5 registros: `<`, `>`, `▶`, `■`, `●`. **Confirmado** por el preset 2
de fábrica, que en modo Mackie les da las notas MCU 46 (banco ←), 47 (banco →),
94 (Play), 93 (Stop) y 95 (Record). El cuarto es **Stop**, no pausa.

**Perilla (6 B)**:

| Byte | Qué es | Ejemplo perilla 7 del P2 |
|---|---|---|
| 0 | *(supuesto: Speed; MidiSuite ofrece Lowest, Low, Normal, Fast, Fastest)*: `00` en todos los presets CC, `02` en el perfil Mackie | `00` |
| 1 | tipo: `02` = CC | `02` |
| 2 | canal − 1 | `0F` → canal 16 |
| 3 | CC | 36 |
| 4–5 | Min, Max | 0, 127 |

**Pad (26 B)**:

| Byte | Qué es | Ejemplo pad 1, banco 8 del P2 |
|---|---|---|
| 0 | tipo: `00` = nota; `04` en los pads del perfil Mackie *(MidiSuite lista CC Toggle, Momentary, Program, Custom; cuál es el 4, sin confirmar)* | `00` |
| 1 | canal − 1 | `09` → canal 10 |
| 2 | nota | 100 (E7 en MidiSuite) |
| 3 | MinVel | 20 |
| 4 | MaxVel | 127 |
| 5–7 | color RGB | `78 78 F0` (lavanda) |
| 8 | Led: `FF` = normal; en el perfil Mackie, la nota que lo enciende | 255 |
| 9–25 | relleno | `00` |

### Presets de fábrica

Salen de `SPB.bin`. Los presets **1 y 3–8 son iguales**: botones CC 25–29 en modo
CC Push; perillas CC 30–45 por el canal 1; pads por el canal 10 con las notas
4–115, 16 por banco (el banco 3 es 36–51 y el 8 repite 52–67). El **2 es un perfil
Mackie** para manejar el DAW: botones y pads mandan notas MCU (pista, solo, mute,
rec) y las perillas del banco A van por los canales 1–8.

`default.spc` es idéntico byte a byte al preset 1 de fábrica (comprobado el 2026-10-02).

### Lo que el `.spc` NO guarda

La sección **Glob** de MidiSuite **no se exporta**: no está en ningún byte del
archivo. Si se resetea el aparato hay que volver a ponerla a mano. Valores del
preset 2 (2026-09-27):

| Parámetro | Valor |
|---|---|
| Time | 1/4 |
| Tempo | 120 |
| Transpose | −4 |
| PadCurve | 3 |
| Sync | activado |
| Swing | 70 |
| PadAftertouch | activado |
| Octave | 6 |
| Latch | desactivado |

> [!warning] Transpose −4 descuadra todos los presets nuevos
> Con −4, cada pad sale 4 semitonos abajo: los kits suenan cruzados y las notas no
> coinciden con las notas de los presets. Ponlo en **0**. Si Glob es común a todas
> las ranuras (lo más probable), basta una vez.

### Los 8 presets

Cada uno tiene su nota en `8. Setup/4. Presets/M-VAVE SMC-PAD/`, con la rejilla de los 8 bancos de pads, qué
significa cada color, qué hace cada perilla y botón, y qué sonidos usar.

| Ranura | Preset | Para qué | Sonidos |
|---|---|---|---|
| 1 | [[8. Setup/4. Presets/M-VAVE SMC-PAD/1. Batería GM\|Batería GM]] | batería General MIDI | *General MIDI Drums* de Next, MuseScore |
| 2 | [[8. Setup/4. Presets/M-VAVE SMC-PAD/2. Bajo\|Bajo]] | líneas de bajo, en el mástil de un bajo de 4 cuerdas | banco *Bajo* de Analog Lab |
| 3 | [[8. Setup/4. Presets/M-VAVE SMC-PAD/3. Beat Maker\|Beat Maker]] | beats con los kits de Emulator II | banco *Beat Maker* |
| 4 | [[8. Setup/4. Presets/M-VAVE SMC-PAD/4. Teclas\|Teclas]] | pianos, órganos, cuerdas y pads, en cuartas o cromático | bancos *Teclas* y *Pads* |
| 5 | [[8. Setup/4. Presets/M-VAVE SMC-PAD/5. Ritmo\|Ritmo]] | práctica de lectura rítmica | *Beat Maker 707* o *General MIDI Drums* |
| 6 | [[8. Setup/4. Presets/M-VAVE SMC-PAD/6. Mackie\|Mackie]] | manejar Sonar (preset 2 de fábrica) | — |
| 7 | [[8. Setup/4. Presets/M-VAVE SMC-PAD/7. MIDI Learn\|MIDI Learn]] | asignar con MIDI Learn sin tocar Analog Lab | — |
| 8 | [[8. Setup/4. Presets/M-VAVE SMC-PAD/8. Strudel\|Strudel]] | tocar con la banda de Strudel en Sonar | bancos *Bajo*, *Pads*, *Arpegios* y *Beat Maker* |

Comunes a todos (salvo el P6, que es de fábrica):

- **Velocidad 1–127 en todos los pads**: toda la dinámica. Cuánto cuesta llegar a cada
  punto lo decide *PadCurve* (Glob).
- **El mismo lenguaje de colores**: en batería General MIDI, el color es la familia
  (🟥 bombo, 🟧 caja, 🟨 hi-hat, 🟦 toms, ⬜ platos…); en los kits de Emulator II, la
  zona; en los bancos de notas, 🟩 do, ⬜ blancas, 🟦 negras. Un color apagado es una
  variante (afinada, o el hi-hat abierto).
- P1–P5 y P8 comparten los botones: `<` `>` cambian de preset en Analog Lab y `▶` `■` `●`
  mandan MMC al DAW. En esos tres, el campo CC vale 119 (sin uso): si el modo `03`
  no fuera SysEx, mandarían un CC inofensivo.
- P1–P5 comparten las perillas: CC estándar de Arturia (banco A macros y efectos,
  banco B los faders), que funcionan con la configuración *Beat Maker* de
  [[2. Analog Lab V#Configuración MIDI Beat Maker|Analog Lab]] y con su *Default*.

> [!warning] Los kits de Emulator II no son General MIDI
> Reparten el teclado en 8 zonas que empiezan en 36, 42, 48, 54, 60, 66, 72 y 78.
> Con un banco General MIDI, la nota 38 toca el bombo afinado y la 42 la caja. Para
> esos kits, los bancos de zonas (P3 banco 1, P5 bancos 1–4, P8 banco 7).

> [!question] Supuesto: pad 1 = abajo a la izquierda
> Es lo que sugiere MidiSuite: define sus pads de arriba abajo empezando por el
> 13–16 y terminando por el 1–4, y la fábrica pone la nota 36 en el pad 1. Si al
> probarlo sale de cabeza, se invierte el orden de las filas en el catálogo
> (`_scripts/presets/smcpad.py`) y se regenera con `_scripts/generar-presets.py`.

### El preset 2 anterior (archivado)

Hasta el 2026-10-02, la ranura 2 tenía el preset de uso diario. Quedó en
`_legacy/Setup SMC-PAD 2026-10/SMC-PAD - P2.spc`. Su banco 3 (el kit General MIDI)
sigue vivo como banco 2 del P1 y banco 3 del P3, con las mismas notas.

- **Todos los pads por el canal 10** (batería).
- Perillas: banco A canal 16, CC 15, 31, 30, 33–37; banco B canal 1, CC 38–45.
- Bancos de pads:

| Banco | Notas | Color |
|---|---|---|
| 1 | 4–19 (pad 14 → 36, bombo) | azul claro |
| 2 | 20–35 (pad 4 → 30) | amarillo (pad 4 rojo) |
| **3** | **kit de batería GM**: 36 bombo, 38 caja, 42/46 hi-hat, 39 palmas, 37 aro, 41/45/47 toms, 49 crash, 51 ride, 54 pandereta, 56 cencerro, 60/62/64 bongós y congas | por familia |
| 4 | 52–67 | azul |
| 5 | 68–83 | verde |
| 6 | 84–99 | rojo |
| 7 | 100–115 | cian |
| 8 | 52–67 (pad 13 → 60; pad 1 → 100 desde la prueba) | lavanda |

## macOS

**Por USB-C:** conéctalo y listo. Aparece en **Configuración de Audio MIDI**.

**Por Bluetooth:**

1. Abre **Configuración de Audio MIDI** (en `Aplicaciones/Utilidades`).
2. Menú **Ventana → Mostrar Estudio MIDI**.
3. Pulsa el icono de **Bluetooth** en la barra de herramientas.
4. Enciende el SMC-PAD, que aparece en la lista, y pulsa **Conectar**.

**No lo emparejes desde Ajustes → Bluetooth:** en macOS los dispositivos MIDI se conectan desde Audio MIDI.

## Uso en esta bóveda

- **Ritmo con Strudel:** Strudel corre en el navegador y usa Web MIDI. Ver
  [[4. Instrumento/2. Strudel/0. Qué es y cómo se usa]].
- **Grabar un groove en un DAW** para que la semana tenga audio (regla dura 2).
- Las 8 perillas sirven para mover parámetros (filtro, volumen) mientras suena algo.

## Problemas conocidos

| Síntoma | Causa | Solución |
|---|---|---|
| Windows no lo ve por Bluetooth | la API clásica no ve BLE MIDI | usar USB-C, o Windows MIDI Services, o MIDIberry con loopMIDI |
| Un programa lo ve y otro no | Windows solo deja abrirlo a una aplicación | cerrar la otra aplicación |
| Latencia al tocar | Bluetooth | cambiar a USB-C para grabar |

## Por verificar

- [ ] Versión exacta (normal o Pocket, color) y número de serie
- [ ] Firmware instalado y si MidiSuite ofrece actualización
- [ ] Si el preset 1 está vacío de verdad en el aparato o si MidiSuite no lo leyó antes de exportar
- [ ] Exportar los presets 3 a 8
- [x] Orden de los 5 botones: `<` `>` `▶` `■` `●` (por el preset 2 de fábrica, 2026-10-02)
- [ ] Confirmar en MidiSuite que el modo `03` es *SysEx* (el P3 lo usa en `▶` `■` `●`)
- [ ] Si el DAW obedece el MMC de esos tres botones
- [ ] Poner Glob → *Transpose* en 0 (está en −4)
- [ ] Cargar P1–P8 en sus ranuras, probarlos y exportarlos encima
- [ ] Dónde queda físicamente el pad 1 (abajo a la izquierda o arriba)
- [ ] Qué es el byte 0 de cada perilla (`00` en CC, `02` en el perfil Mackie)
- [ ] Si los pads raros (banco 1 pad 14, banco 2 pad 4, banco 8 pad 13) son intencionales
- [x] Qué nota MIDI manda cada pad por defecto: ver *Presets de fábrica*
- [ ] Tipo de salida MIDI de 3,5 mm (TRS A o B)
- [ ] Si de verdad manda aftertouch (algunos anuncios no lo mencionan)

---

## Archivo: `8. Setup/2. Hardware/1. Arturia KeyStep mk2.md`

```yaml
tipo: setup
estado: vigente
categoria: hardware
fabricante: Arturia
modelo: KeyStep mk2
plataforma: [windows, macos]
firmware:
ultima_verificacion: 2026-09-27
fuentes:
  - https://www.arturia.com/products/hybrid-synths/keystep-mk2/keystep-32-mk2
  - https://support.arturia.com/hc/en-us/articles/23309705010716-KeyStep-mk2-Control-Modes
  - https://musictech.com/reviews/arturia-keystep-mk2-review/
tags:
  - curso-musica/setup
```

# Arturia KeyStep mk2

> [!abstract] Qué es y para qué lo uso
> Teclado controlador de 32 teclas con **secuenciador, arpegiador y modos de
> acorde y escala**. No tiene sonidos propios: controla la computadora, el Casio
> o cualquier equipo con MIDI o CV. En este sistema es la vía principal para
> **meter notas en MuseScore**.

## Especificaciones

| | |
|---|---|
| **Tipo** | teclado controlador y secuenciador, sin sonidos propios |
| **Salida al mercado** | 2025 |
| **Teclado** | 32 teclas *slimkey* (más angostas que las de piano), con velocidad y aftertouch |
| **Controles** | 2 tiras táctiles (pitch bend y modulación), pantalla OLED con encoder que se puede pulsar, retroiluminación RGB, deslizadores de Gate, Spice y Dice |
| **Secuenciador** | por pasos y polifónico: hasta 64 pasos, 8 notas por paso, 64 patrones (4 bancos de 16) encadenables |
| **Arpegiador** | 16 modos, hasta 5 octavas |
| **Modos** | Chord (un dedo dispara un acorde), Scale (bloquea las notas a una escala), Mutate / Spice / Dice (variaciones aleatorias controladas) |
| **Conexiones** | USB-C (*class compliant*, alimentado por el bus), MIDI DIN de 5 pines In/Out, 4 salidas CV/Gate (Pitch, Gate, Mod 1, Mod 2), Sync In/Out de 3,5 mm, entrada TRS para pedal de sustain o expresión |
| **Alimentación** | por USB; tiene interruptor de encendido |
| **Dimensiones** | 484 × 145 × 50 mm |
| **Peso** | 1,1 kg |
| **Software incluido** | Analog Lab Intro, Ableton Live Lite |

## Conexiones

- **USB-C a la computadora**: MIDI y corriente por el mismo cable. Es la conexión normal.
- **MIDI OUT (DIN)**: al **MIDI IN del Casio CTK-551**, para tocar los sonidos
  del Casio (ver [[2. Casio CTK-551]]).
- **CV/Gate y Sync**: para sintetizadores modulares o analógicos. Hoy no se usan.
- **Pedal de sustain**: entrada TRS. Útil si se usa para tocar piano.

## Windows

1. Conéctalo por USB-C. No hace falta driver.
2. **Registra el producto e instala Arturia Software Center** para descargar
   Analog Lab Intro, las licencias y las actualizaciones de firmware.
3. En MuseScore: **Editar → Preferencias → E/S → Entrada MIDI**, y elige el KeyStep.

### Editor: MIDI Control Center

- **Arturia MIDI Control Center** es el programa para configurar el KeyStep en
  Windows: canales MIDI, curvas de velocidad, CC de las tiras táctiles, respaldo
  de patrones y actualización de firmware.
- Instalado en `C:\Program Files (x86)\Arturia\MIDI Control Center\`. Instala
  también el driver USB de Arturia (`C:\Program Files\Arturia\USBMidiDriver`).
- **Ciérralo antes de abrir el DAW o MuseScore**: mientras está abierto ocupa
  el puerto MIDI del KeyStep.

### Configuraciones

MIDI Control Center exporta como archivos **`.keystep2`**. Viven en
`8. Setup/3. Configuraciones/Arturia KeyStep mk2/`. Convención completa en
[[8. Setup/0. Índice#Configuraciones]].

| Archivo | Para qué | ¿Cargada ahora? |
|---|---|---|
| `KeyStep mk2.keystep2` | exportación completa del aparato (2026-09-27; MIDI Control Center la llamó `Main.keystep2`) | sí |

- Es **JSON en texto plano** (unos 280 KB): empieza con `"device": "KeyStep mk2"`
  y `"version": "1.0.1"`, seguido de miles de parámetros con claves numéricas
  (`"1_10_16384": 1`…). No se edita a mano.
- `git diff` muestra qué parámetros cambiaron, pero no qué significan: el mensaje del commit tiene que decirlo.
- Para restaurar: MIDI Control Center → importar el `.keystep2` → enviarlo al KeyStep.

**Una aplicación a la vez.** Con la API MIDI clásica de Windows, si otro programa
(DAW, navegador con Strudel, Analog Lab) tiene el KeyStep abierto, MuseScore no
lo recibe. Cierra el otro programa.

## macOS

1. Conéctalo por USB-C. Aparece en **Configuración de Audio MIDI** sin instalar nada.
2. Instala **Arturia Software Center** y **MIDI Control Center**, igual que en Windows.
3. En MuseScore: **MuseScore → Ajustes → E/S → Entrada MIDI**, y elige el KeyStep.

En macOS varios programas pueden usarlo a la vez.

## Uso en esta bóveda

**Entrada de notas en MuseScore** (ver [[7. Partituras/Cómo usar las partituras]]):

1. Selecciona un compás y pulsa `N` para entrar en modo de entrada.
2. Elige la duración con el teclado numérico de la computadora.
3. Toca la nota o el acorde en el KeyStep: MuseScore escribe la altura.

Así, para **conducción de voces** tocas el acorde en vez de escribir las notas
una a una.

**Modos Chord y Scale: úsalos con cuidado.** Hacen la armonía por ti. Para
estudiar voicings déjalos **apagados**: la síntesis es que decidas tú cada voz.
Para esbozar una idea rápida sí pueden ayudar.

**Las 32 teclas no llegan a dos voces separadas.** Para piano a dos manos,
el Casio tiene 61.

## Problemas conocidos

| Síntoma | Causa | Solución |
|---|---|---|
| MuseScore no recibe notas en Windows | otro programa tiene el puerto MIDI abierto | cerrar el otro programa y reiniciar MuseScore |
| Suena en el Casio pero no en la computadora, o al revés | configuración de canal o de destino MIDI | revisar el canal MIDI de salida en la configuración del KeyStep |

## Por verificar

- [ ] Número de serie y registro en la cuenta de Arturia
- [ ] Versión de firmware y si hay actualización
- [ ] Si `KeyStep mk2.keystep2` incluye los patrones del secuenciador o solo la configuración
- [ ] Si reenvía el MIDI que llega por USB hacia el DIN (para controlar el Casio desde la computadora)

---

## Archivo: `8. Setup/2. Hardware/2. Casio CTK-551.md`

```yaml
tipo: setup
estado: vigente
categoria: hardware
fabricante: Casio
modelo: CTK-551
plataforma: [windows, macos]
firmware:
ultima_verificacion: 2026-09-27
fuentes:
  - https://soundprogramming.net/keyboards/casio/casio-ctk-551/
  - https://sonicstate.com/synth/casio_ctk551/
  - https://www.manualslib.com/manual/358025/Casio-Ctk-551.html
  - https://equipboard.com/items/casio-ctk-551-keyboard
tags:
  - curso-musica/setup
```

# Casio CTK-551

> [!abstract] Qué es y para qué lo uso
> El viejito. Teclado de **61 teclas con sonidos y altavoces propios**. Es el único
> equipo que suena sin computadora y el único con un rango de piano útil para dos
> manos. Con MIDI también sirve como controlador y como módulo de sonido.

## Especificaciones

| | |
|---|---|
| **Tipo** | teclado con sonidos propios (sintetizador de gama doméstica) |
| **Año** | hacia 2000 (las fuentes no coinciden: Sonicstate dice 2000, Sound Programming 2005) |
| **Teclado** | 61 teclas de tamaño completo, con sensibilidad al toque (se puede apagar) |
| **Polifonía** | 16 notas como máximo; algunos tonos solo 8 (según el manual) |
| **Sonidos** | 100 tonos, 1 kit de batería |
| **Ritmos** | 100 |
| **Multitímbrico** | 5 partes por MIDI |
| **Controles** | pitch bend, sustain |
| **Efectos** | ninguno integrado |
| **MIDI** | IN y OUT DIN de 5 pines, **sin USB** |
| **Audio** | 1 salida (auriculares/línea), sin entradas |
| **Altavoces** | integrados, estéreo, 2 W |
| **Alimentación** | 6 pilas D, o adaptador de corriente externo (7,7 W de consumo) |
| **Dimensiones** | 961 × 376 × 143 mm |
| **Peso** | 5,3 kg sin pilas |

Sonidos que vale la pena probar, según los usuarios de Sonicstate: `64` (pad),
`73` (space pad) y `76` (synth FX). Para el dream pop, los pads son lo más aprovechable.

## Conexiones

**No tiene USB.** Para hablar con la computadora hace falta una **interfaz USB-MIDI**
(un cable con dos conectores DIN y uno USB):

- **MIDI OUT del Casio → IN de la interfaz**: el Casio toca la computadora.
- **OUT de la interfaz → MIDI IN del Casio**: la computadora hace sonar el Casio.

> [!tip] Sin computadora
> **KeyStep mk2 MIDI OUT → Casio MIDI IN.** El KeyStep dispara los sonidos del
> Casio, y su secuenciador y arpegiador tocan con esos sonidos. Solo hace falta un
> cable MIDI DIN normal. Ver [[1. Arturia KeyStep mk2]].

> [!warning] Cables USB-MIDI baratos
> Los cables genéricos de muy bajo precio suelen perder mensajes o colgarse. Para
> notas simples funcionan; si falla, el problema suele ser el cable, no el Casio.

**Adaptador de corriente:** es de Casio. Antes de conectar uno de reemplazo,
comprueba **voltaje y polaridad** en la etiqueta junto a la entrada DC IN. Un
adaptador con la polaridad invertida puede dañarlo.

## Windows

1. Conecta la interfaz USB-MIDI. La mayoría son *class compliant* y no necesitan driver.
2. Enciende el Casio **antes** de abrir el programa de música.
3. En MuseScore: **Editar → Preferencias → E/S → Entrada MIDI** → la interfaz USB-MIDI.

Se aplica la misma limitación que con los otros equipos: con la API MIDI clásica,
solo un programa puede abrir la interfaz a la vez.

## macOS

1. Conecta la interfaz. Aparece en **Configuración de Audio MIDI**.
2. En MuseScore: **MuseScore → Ajustes → E/S → Entrada MIDI** → la interfaz.

## Uso en esta bóveda

- **Piano a dos manos** para practicar y para entrada de notas en MuseScore (el
  KeyStep solo tiene 32 teclas).
- **Grabar audio rápido**: sacar la salida de auriculares a una grabadora o
  interfaz de audio es la vía más corta para tener el `.m4a` de la semana (regla dura 2).
- **Módulo de pads** para bocetos, tocado desde el KeyStep.

**No es General MIDI completo.** Tiene 100 tonos, no los 128 del estándar GM, así
que un archivo MIDI de MuseScore o de un DAW probablemente sonará con
instrumentos distintos. Para usar sus sonidos, elígelos a mano en el Casio.

## Problemas conocidos

| Síntoma | Causa | Solución |
|---|---|---|
| Notas que se quedan sonando | cable USB-MIDI barato o mensajes perdidos | cambiar el cable; en MuseScore, "Panic" o apagar y encender el Casio |
| Notas duplicadas al grabar desde el Casio | el Casio suena por sí mismo y además la computadora | bajar el volumen del Casio, o buscar la opción *Local Off* en el manual |
| Acordes cortados | polifonía de 16 notas, 8 en algunos tonos | usar menos sustain o un tono de 16 voces |

## Por verificar

- [ ] Año exacto (en la etiqueta de abajo)
- [ ] Modelo y polaridad del adaptador de corriente
- [ ] Si tiene *Local Off* y dónde se activa (manual, sección MIDI)
- [ ] Qué interfaz USB-MIDI se usa
- [ ] Estado de las teclas y los contactos
