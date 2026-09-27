# Setup: resumen hasta ahora (2026-09-27)

> [!warning] Archivo derivado
> Se genera juntando las notas de `8. Setup/`. **No lo edites**: cambia la nota
> correspondiente y vuelve a generarlo.

Todo lo que se hizo en esta sesión: la carpeta nueva `8. Setup/`, los tres equipos,
Cakewalk Sonar ya funcionando con Analog Lab V, las reglas de configuraciones y los
cambios a las convenciones de la bóveda.

## Cambios en la bóveda

| Archivo | Cambio |
|---|---|
| `8. Setup/` | carpeta nueva: cómo está montado el equipo (hardware y software, Windows y macOS) |
| `8. Setup/0. Índice.md` | inventario, estructura, mapa de conexiones y **las tres reglas de configuraciones** |
| `8. Setup/1. Software/` | Cakewalk Sonar (funciona con 3 controladores), Cakewalk Next, Analog Lab V |
| `8. Setup/2. Hardware/` | M-VAVE SMC-PAD, Arturia KeyStep mk2, Casio CTK-551 |
| `8. Setup/3. Configuraciones/` | `SMC-PAD - P2.spc`, `KeyStep mk2.keystep2`, `Analog Lab V - SMC-PAD banco A.labmidi` |
| `_legacy/Setup pruebas 2026-09/` | las dos exportaciones de prueba del SMC-PAD |
| `10. System/2. Plantillas/0. Notas/Setup.md` | plantilla nueva, con sección Configuraciones |
| `.gitattributes` | `*.spc binary`, `*.keystep2 text` |
| `CLAUDE.md`, `Inicio.md`, `6. Práctica/1. Estructura.md` | fila 10 del ruteo (`8. Setup/`), carpeta en el mapa, tipo `setup`, reglas de configuraciones |

**Regla interna:** una nota por equipo o programa, nunca una por sistema operativo.
Windows y macOS son secciones dentro de cada nota.

**Pregunta de ruteo, fila nueva:**

| | ¿Es…? | Va a |
|---:|---|---|
| 10 | Instalación o configuración de **equipo o software** | `8. Setup/` |
| 11 | Ninguna de las anteriores | `0. Entrada/` |

**Configuraciones, en tres reglas:**
1. Solo va lo que el programa exporta.
2. Lo que no se exporta se escribe en la nota del equipo.
3. Nombre `<Equipo> - <para qué>.<ext>`, con `P<n>` si hay ranuras de preset. Se exporta encima y el commit dice qué cambió.

**Editores en Windows:** SMC-PAD: **MidiSuite** (`.spc`, un preset por archivo). KeyStep mk2: **Arturia MIDI Control Center** (`.keystep2`). Analog Lab V: pestaña MIDI (`.labmidi`). Cierra los editores antes de abrir el DAW.

---

## Setup

> [!abstract] Qué guarda esta carpeta
> **Cómo está montado el equipo**: instalación y configuración de hardware y
> software en Windows y macOS. No es técnica (eso va en `4. Instrumento/`) ni
> teoría: es lo que hay que hacer para que el equipo suene.

### La regla interna

> **Una nota por equipo o programa, nunca una por sistema operativo.**

El mismo teclado en Windows y en Mac es **un solo objeto**. Si se separara por
sistema, volverían a nacer archivos hermanos que se desincronizan: el mismo
fallo que produjo las 143 notas de teoría (ver [[6. Práctica/1. Estructura]]).
Windows y macOS son **secciones** dentro de cada nota.

Plantilla: [[Setup]] (en `10. System/2. Plantillas/0. Notas/`).

### Estructura

| Subcarpeta | Qué guarda | Estado |
|---|---|---|
| `0. Bóveda/` | git, Python, scripts, plugins de Obsidian | *pendiente* |
| `1. Software/` | DAW, sintetizadores, editores | en uso |
| `2. Hardware/` | teclados, controladores, interfaces, micrófonos | en uso |
| `3. Configuraciones/` | lo que **exportan** los editores: presets, mapeos, respaldos | en uso |

Las carpetas pendientes se crean cuando llegue su primera nota.

---

### Configuraciones

Una carpeta por equipo o programa, con lo que exporta su editor adentro. **Nada más.**

```
8. Setup/3. Configuraciones/
├── M-VAVE SMC-PAD/
│   └── SMC-PAD - P2.spc                       ← un archivo por preset (P1–P8)
├── Arturia KeyStep mk2/
│   └── KeyStep mk2.keystep2                   ← exportación completa del aparato
└── Analog Lab V/
    └── Analog Lab V - SMC-PAD banco A.labmidi ← mapeo de perillas
```

#### Las tres reglas

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

### Inventario

| Equipo | Tipo | Conexión principal | Editor (Windows) | Papel en el sistema |
|---|---|---|---|---|
| [[2. Hardware/0. M-VAVE SMC-PAD\|M-VAVE SMC-PAD]] | controlador de pads | USB-C / Bluetooth | MidiSuite (`.spc`, un preset por archivo) | ritmo y percusión |
| [[2. Hardware/1. Arturia KeyStep mk2\|Arturia KeyStep mk2]] | teclado controlador y secuenciador | USB-C | Arturia MIDI Control Center (`.keystep2`) | entrada de notas en MuseScore, secuencias |
| [[2. Hardware/2. Casio CTK-551\|Casio CTK-551]] | teclado con sonidos propios | MIDI DIN (5 pines) | no tiene; se configura en el propio teclado | teclado de 61 teclas, módulo de sonido |

> [!warning] Los editores ocupan el puerto MIDI
> Cierra MidiSuite y MIDI Control Center **antes** de abrir el DAW o MuseScore.

#### Software

| Programa | Sistema | Estado |
|---|---|---|
| [[1. Software/0. Cakewalk Sonar\|Cakewalk Sonar]] | Windows | funciona con los 3 controladores (Analog Lab V en cada pista) |
| [[1. Software/1. Cakewalk Next\|Cakewalk Next]] | Windows | funciona con el KeyStep |
| [[1. Software/2. Analog Lab V\|Analog Lab V]] | Windows, macOS | sintetizador de las 3 pistas de Sonar; mapeos `.labmidi` |

### Mapa de conexiones posible

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

## M-VAVE SMC-PAD

> [!abstract] Qué es y para qué lo uso
> Controlador MIDI de **16 pads**, inalámbrico y con batería. En este sistema
> sirve para **ritmo**: tocar patrones de percusión con los dedos en vez de
> escribirlos, que es justo el punto débil que marca [[6. Práctica/3. Diagnóstico]].

> [!warning] Hay varias versiones
> M-VAVE vende el SMC-PAD en versión normal y en versión "Pocket", en negro y
> en blanco, y las especificaciones cambian un poco entre ellas. Las de abajo
> son las del modelo con 8 perillas. Confírmalo con la caja o la etiqueta de abajo.

### Especificaciones

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

### Conexiones

- **USB-C a la computadora**: la opción más fiable y sin latencia. También carga la batería.
- **Bluetooth**: sin cables, pero en Windows da más trabajo (ver abajo).
- **MIDI OUT de 3,5 mm**: para tocar un sintetizador o módulo sin computadora.
  Hace falta un adaptador de minijack a DIN, y hay dos estándares (**TRS tipo A** y
  **tipo B**) que no son compatibles entre sí. Mira en el manual cuál usa antes de comprar el adaptador.

### Windows

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

#### Editor: MidiSuite

- **MidiSuite** es el programa para configurar el SMC-PAD en Windows: qué nota
  manda cada pad, qué CC manda cada perilla, colores, etc.
- No tiene instalador: se descarga como `.zip` y se ejecuta directamente.
  En esta máquina: `~/Downloads/MidiSuite/MidiSuite/MidiSuite.exe`.
- **Ciérralo antes de abrir el DAW**: mientras está abierto ocupa el puerto MIDI
  del SMC-PAD (regla de una aplicación a la vez).

#### Configuraciones

MidiSuite **exporta los presets** como archivos **`.spc`** (binarios: solo los
abre MidiSuite). Viven en `8. Setup/3. Configuraciones/M-VAVE SMC-PAD/`.
Convención completa en [[8. Setup/0. Índice#Configuraciones]].

| Archivo | Para qué | ¿Cargada ahora? |
|---|---|---|
| `SMC-PAD - P2.spc` | preset de uso diario: kit de batería en el banco 3 | sí (incluye la prueba: banco 8 pad 1 = nota 100) |
| *P1, P3–P8* | sin exportar | — |

Para cargarla en otra máquina: MidiSuite → importar el `.spc` → enviarlo al SMC-PAD.

> [!important] Un archivo = un preset
> El SMC-PAD guarda **8 presets**, y MidiSuite exporta **solo el seleccionado** en
> el menú *Presets*. Para respaldar todo hay que exportar los 8, uno por uno, como
> `SMC-PAD - P<n> <para qué>.spc`.
>
> Comprobado el 2026-09-27 con dos pruebas que quedaron en `_legacy/Setup pruebas 2026-09/`:
> - `SMC-PAD - P2 antes de la prueba.spc`: el preset 2 antes de cambiar el banco 8 pad 1 de 52 a 100. Solo cambia ese byte.
> - `SMC-PAD - P1 exportación vacía.spc`: el preset 1 salió **todo en ceros**.

#### Qué guarda el `.spc` (formato descifrado)

Descifrado comparando exportaciones byte a byte con lo que muestra MidiSuite.
**No hay documentación oficial**; lo marcado con *(supuesto)* no está confirmado.

Tamaño fijo: **3539 bytes**, en tres bloques y sin cabecera.

| Bloque | Posición | Registros | Tamaño |
|---|---|---|---|
| Botones | `0x000` | 5 | 23 B |
| *(separador)* | `0x073` | 1 byte en `00` | |
| Perillas | `0x074` | 16 = 8 perillas × 2 bancos (KNOB BANK) | 6 B |
| Pads | `0x0D4` | 128 = 16 pads × **8 bancos** (PAD BANK) | 26 B (al último le falta el byte final) |

**Botón (23 B)**, confirmado con `[ < ]`:

| Byte | Qué es | Ejemplo `[ < ]` |
|---|---|---|
| 0 | modo: `02` = CC Push; `03` = otro modo *(supuesto: toggle)* | `02` |
| 1 | canal − 1 | `0E` → canal 15 |
| 2 | CC | `1D` → 29 |
| 3–4 | Value1, Value2 | 0, 127 |
| 5 | largo del SysEx | `06` |
| 6–11 | SysEx MMC (se usa en otro modo) | `F0 7F 7F 06 01 F7` = Stop |
| 12–21 | relleno | `00` |
| 22 | Led | `FF` → 255 |

Orden de los 5 registros *(supuesto)*: `<`, `>`, `▶`, `||`, `●`.

**Perilla (6 B)**, confirmado con la perilla 7:

| Byte | Qué es | Ejemplo perilla 7 |
|---|---|---|
| 0 | tipo: `02` = CC | `02` |
| 1 | canal − 1 | `0F` → canal 16 |
| 2 | CC | 36 |
| 3–4 | Min, Max | 0, 127 |
| 5 | Speed *(supuesto: `00` = Normal)* | `00` |

**Pad (26 B)**, confirmado con el pad 1:

| Byte | Qué es | Ejemplo pad 1, banco 8 |
|---|---|---|
| 0 | canal − 1 | `09` → canal 10 |
| 1 | nota | 100 (E7 en MidiSuite) |
| 2 | MinVel | 20 |
| 3 | MaxVel | 127 |
| 4–6 | color RGB | `78 78 F0` (lavanda) |
| 7 | Led | 255 |
| 8–25 | relleno *(ahí debería estar el Type = Note)* | `00` |

#### Lo que el `.spc` NO guarda

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

#### Contenido del preset 2

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

El **banco 3** es el que sirve para ritmo con Strudel o con *General MIDI Drums* de Next.

### macOS

**Por USB-C:** conéctalo y listo. Aparece en **Configuración de Audio MIDI**.

**Por Bluetooth:**

1. Abre **Configuración de Audio MIDI** (en `Aplicaciones/Utilidades`).
2. Menú **Ventana → Mostrar Estudio MIDI**.
3. Pulsa el icono de **Bluetooth** en la barra de herramientas.
4. Enciende el SMC-PAD, que aparece en la lista, y pulsa **Conectar**.

**No lo emparejes desde Ajustes → Bluetooth:** en macOS los dispositivos MIDI se conectan desde Audio MIDI.

### Uso en esta bóveda

- **Ritmo con Strudel:** Strudel corre en el navegador y usa Web MIDI. Ver
  [[4. Instrumento/2. Strudel/0. Qué es y cómo se usa]].
- **Grabar un groove en un DAW** para que la semana tenga audio (regla dura 2).
- Las 8 perillas sirven para mover parámetros (filtro, volumen) mientras suena algo.

### Problemas conocidos

| Síntoma | Causa | Solución |
|---|---|---|
| Windows no lo ve por Bluetooth | la API clásica no ve BLE MIDI | usar USB-C, o Windows MIDI Services, o MIDIberry con loopMIDI |
| Un programa lo ve y otro no | Windows solo deja abrirlo a una aplicación | cerrar la otra aplicación |
| Latencia al tocar | Bluetooth | cambiar a USB-C para grabar |

### Por verificar

- [ ] Versión exacta (normal o Pocket, color) y número de serie
- [ ] Firmware instalado y si MidiSuite ofrece actualización
- [ ] Si el preset 1 está vacío de verdad en el aparato o si MidiSuite no lo leyó antes de exportar
- [ ] Exportar los presets 3 a 8
- [ ] Orden de los 5 botones y qué hace el modo `03`
- [ ] Si los pads raros (banco 1 pad 14, banco 2 pad 4, banco 8 pad 13) son intencionales
- [ ] Qué nota MIDI manda cada pad por defecto
- [ ] Tipo de salida MIDI de 3,5 mm (TRS A o B)
- [ ] Si de verdad manda aftertouch (algunos anuncios no lo mencionan)

---

## Arturia KeyStep mk2

> [!abstract] Qué es y para qué lo uso
> Teclado controlador de 32 teclas con **secuenciador, arpegiador y modos de
> acorde y escala**. No tiene sonidos propios: controla la computadora, el Casio
> o cualquier equipo con MIDI o CV. En este sistema es la vía principal para
> **meter notas en MuseScore**.

### Especificaciones

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

### Conexiones

- **USB-C a la computadora**: MIDI y corriente por el mismo cable. Es la conexión normal.
- **MIDI OUT (DIN)**: al **MIDI IN del Casio CTK-551**, para tocar los sonidos
  del Casio (ver [[2. Casio CTK-551]]).
- **CV/Gate y Sync**: para sintetizadores modulares o analógicos. Hoy no se usan.
- **Pedal de sustain**: entrada TRS. Útil si se usa para tocar piano.

### Windows

1. Conéctalo por USB-C. No hace falta driver.
2. **Registra el producto e instala Arturia Software Center** para descargar
   Analog Lab Intro, las licencias y las actualizaciones de firmware.
3. En MuseScore: **Editar → Preferencias → E/S → Entrada MIDI**, y elige el KeyStep.

#### Editor: MIDI Control Center

- **Arturia MIDI Control Center** es el programa para configurar el KeyStep en
  Windows: canales MIDI, curvas de velocidad, CC de las tiras táctiles, respaldo
  de patrones y actualización de firmware.
- Instalado en `C:\Program Files (x86)\Arturia\MIDI Control Center\`. Instala
  también el driver USB de Arturia (`C:\Program Files\Arturia\USBMidiDriver`).
- **Ciérralo antes de abrir el DAW o MuseScore**: mientras está abierto ocupa
  el puerto MIDI del KeyStep.

#### Configuraciones

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

### macOS

1. Conéctalo por USB-C. Aparece en **Configuración de Audio MIDI** sin instalar nada.
2. Instala **Arturia Software Center** y **MIDI Control Center**, igual que en Windows.
3. En MuseScore: **MuseScore → Ajustes → E/S → Entrada MIDI**, y elige el KeyStep.

En macOS varios programas pueden usarlo a la vez.

### Uso en esta bóveda

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

### Problemas conocidos

| Síntoma | Causa | Solución |
|---|---|---|
| MuseScore no recibe notas en Windows | otro programa tiene el puerto MIDI abierto | cerrar el otro programa y reiniciar MuseScore |
| Suena en el Casio pero no en la computadora, o al revés | configuración de canal o de destino MIDI | revisar el canal MIDI de salida en la configuración del KeyStep |

### Por verificar

- [ ] Número de serie y registro en la cuenta de Arturia
- [ ] Versión de firmware y si hay actualización
- [ ] Si `KeyStep mk2.keystep2` incluye los patrones del secuenciador o solo la configuración
- [ ] Si reenvía el MIDI que llega por USB hacia el DIN (para controlar el Casio desde la computadora)

---

## Casio CTK-551

> [!abstract] Qué es y para qué lo uso
> El viejito. Teclado de **61 teclas con sonidos y altavoces propios**. Es el único
> equipo que suena sin computadora y el único con un rango de piano útil para dos
> manos. Con MIDI también sirve como controlador y como módulo de sonido.

### Especificaciones

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

### Conexiones

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

### Windows

1. Conecta la interfaz USB-MIDI. La mayoría son *class compliant* y no necesitan driver.
2. Enciende el Casio **antes** de abrir el programa de música.
3. En MuseScore: **Editar → Preferencias → E/S → Entrada MIDI** → la interfaz USB-MIDI.

Se aplica la misma limitación que con los otros equipos: con la API MIDI clásica,
solo un programa puede abrir la interfaz a la vez.

### macOS

1. Conecta la interfaz. Aparece en **Configuración de Audio MIDI**.
2. En MuseScore: **MuseScore → Ajustes → E/S → Entrada MIDI** → la interfaz.

### Uso en esta bóveda

- **Piano a dos manos** para practicar y para entrada de notas en MuseScore (el
  KeyStep solo tiene 32 teclas).
- **Grabar audio rápido**: sacar la salida de auriculares a una grabadora o
  interfaz de audio es la vía más corta para tener el `.m4a` de la semana (regla dura 2).
- **Módulo de pads** para bocetos, tocado desde el KeyStep.

**No es General MIDI completo.** Tiene 100 tonos, no los 128 del estándar GM, así
que un archivo MIDI de MuseScore o de un DAW probablemente sonará con
instrumentos distintos. Para usar sus sonidos, elígelos a mano en el Casio.

### Problemas conocidos

| Síntoma | Causa | Solución |
|---|---|---|
| Notas que se quedan sonando | cable USB-MIDI barato o mensajes perdidos | cambiar el cable; en MuseScore, "Panic" o apagar y encender el Casio |
| Notas duplicadas al grabar desde el Casio | el Casio suena por sí mismo y además la computadora | bajar el volumen del Casio, o buscar la opción *Local Off* en el manual |
| Acordes cortados | polifonía de 16 notas, 8 en algunos tonos | usar menos sustain o un tono de 16 voces |

### Por verificar

- [ ] Año exacto (en la etiqueta de abajo)
- [ ] Modelo y polaridad del adaptador de corriente
- [ ] Si tiene *Local Off* y dónde se activa (manual, sección MIDI)
- [ ] Qué interfaz USB-MIDI se usa
- [ ] Estado de las teclas y los contactos

---

## Cakewalk Sonar

> [!abstract] Qué es y para qué lo uso
> DAW completo de Cakewalk, en su versión gratuita. Solo existe para **Windows**.
> Es el hermano grande de [[1. Cakewalk Next]]: más control, más complicado de configurar.

> [!success] Resuelto (2026-09-27)
> Los tres controladores **suenan en Sonar**, cada uno en su propia pista de
> instrumento con Analog Lab V. Configuración en
> [[#Configuración que funciona]]; el diagnóstico original queda abajo como historia.

### Instalación

- Se instala desde **Cakewalk Product Center** (el mismo instalador trae Next).
- Rutas en esta máquina:
  - programa: `C:\Program Files\Cakewalk\Sonar\`
  - configuración del usuario: `%APPDATA%\Cakewalk\Sonar\` (`TTSSEQ.INI` para el MIDI, `AUD.INI` para el audio)

### Diagnóstico del problema

Lo que se encontró al revisar la máquina:

| Hallazgo | Evidencia | Por qué importa |
|---|---|---|
| **El KeyStep no está entre las entradas MIDI de Sonar** | `TTSSEQ.INI` → `[MIDI Input Devices]` solo tiene `USB MIDI Interface`, `MIDIIN2 (SMC-PAD)` y `MIDIIN3 (SMC-PAD)` | si el dispositivo no está activado en Preferencias, Sonar no recibe sus notas |
| **Next y Sonar estaban abiertos a la vez** | ambos procesos corriendo | con la API MIDI clásica de Windows, solo un programa puede abrir un dispositivo; el primero que lo abre se lo queda |
| Hay varias salidas de audio | NVIDIA (monitor Sceptre), AMD (Samsung), Realtek, un headset Bluetooth XM-520 | si Sonar usa una salida distinta a la que escuchas, el sonido va a otro lado |
| Windows MIDI Services está instalado | aparecen `MIDI 2.0 Service`, `Loopback A/B` | debería permitir que varios programas compartan un dispositivo, pero Sonar puede seguir usando la API clásica |

#### Lo que muestra la captura de Sonar (2026-09-27)

| Hallazgo | Por qué no suena |
|---|---|
| El título dice **`[Not Activated]`**, con el aviso *Sign-in Required: Please sign in to refresh your license* | la licencia gratuita no está activa; Sonar puede estar limitado hasta que inicies sesión |
| Las pistas 2 a 5 son **pistas de audio** (icono de onda) con entrada `None` | una pista de audio graba sonido, no MIDI: tocar el KeyStep ahí nunca suena |
| La pista 1 es **XSampler 1** | XSampler es un sampler **vacío**: si no se le carga una muestra, recibe las notas y no suena nada |
| Los únicos plugins de Cakewalk instalados son efectos (Boost11, BREVERB, Channel Tools, Vocal Strip) | la versión gratuita no trae sintetizadores con sonidos listos |
| **Analog Lab V** sí está instalado (viene con el KeyStep) | es el sintetizador con sonidos que conviene usar en Sonar |

Versión instalada: **31.12.0.050**.

### Pasos para resolverlo

En este orden: cada paso descarta una causa.

0. **Inicia sesión** con tu cuenta de Cakewalk/BandLab (el aviso de *Sign-in
   Required* arriba, o desde Product Center) hasta que desaparezca `[Not Activated]`.
1. **Cierra Cakewalk Next** (y el navegador si tiene Strudel abierto). Luego abre Sonar.
2. **Activa las entradas MIDI:** `Edit → Preferences → MIDI → Devices`. En *Inputs*
   marca **KeyStep mk2** (y el SMC-PAD si lo usas). Pulsa *Apply*.
3. **Revisa la salida de audio:** `Edit → Preferences → Audio → Devices`.
   - *Driver Mode*: **WASAPI Shared** (el más sencillo sin interfaz de audio; se
     cambia en `Audio → Playback and Recording`).
   - Marca como salida el dispositivo por el que **de verdad** escuchas.
   - Comprueba: ¿suena el metrónomo al darle Play? Si no, el problema es de audio, no de MIDI.
4. **Usa una pista de instrumento con Analog Lab V**, no XSampler vacío ni una
   pista de audio. `Insert → Soft Synth → Analog Lab V` (si no aparece, `Utilities →
   Cakewalk Plug-in Manager` y escanear). En la ventana de Analog Lab, elige un preset.
5. **En la pista:** entrada = *KeyStep mk2* (u *Omni*), y el botón de
   **Input Echo** (monitor de entrada) **encendido**. Sin él, Sonar recibe las notas pero no las toca.
6. Mira el medidor de actividad MIDI en la barra de Sonar mientras tocas:
   - **si se mueve**, el MIDI llega y el problema es de audio o de la pista (pasos 3–5);
   - **si no se mueve**, el MIDI no llega (pasos 1–2).

### Qué funcionó

Lo que cambió entre la captura que no sonaba y la que sí:

1. **Sesión iniciada.** El título pasó de `[Not Activated]` a **Free License**.
2. **Pistas de instrumento con Analog Lab V**, en vez de pistas de audio y XSampler vacío.
3. **Una pista por controlador**, cada una con su entrada MIDI propia.

No se registró cuál de los tres fue el decisivo; probablemente hicieron falta todos.

### Configuración que funciona

Proyecto **Explorer** (2026-09-27), tempo 120. Una **carpeta por controlador**, con
una pista de instrumento dentro:

| Carpeta | Pista | Entrada MIDI | Instrumento (Synth Rack) | Preset de Analog Lab |
|---|---|---|---|---|
| Casio | 1 · Main piano | `USB MIDI` (el Casio por la interfaz USB-MIDI) | Casio 1 | Grand Piano 1 (Piano) |
| SMC Pad | 3 · SMC pad | `SMC-PAD` | PADS 3 | E.P 7070 (Keys) |
| Arturia Keystep | 4 · KeyStep | `KeyStep` | Arturia 2 | The Opera (Strings) |

- Las tres salen a **Master**, y Master sale a **Speakers**. También están los buses **Metronome** y **Preview**.
- Cada instancia de Analog Lab está en el **Synth Rack**, a la derecha, con el nombre del controlador que la toca.
- En Analog Lab, **Settings → MIDI Channel: All** (comprobado en *Casio 1*). Esto importa para el SMC-PAD, que manda por el **canal 10**: si una instancia escuchara solo el canal 1, los pads no sonarían.

#### Mapeo de perillas en Analog Lab (instancia PADS 3)

Pestaña **MIDI** de Analog Lab: *Midi Controller* = **Generic 9 Knobs**, *MIDI Config* =
**Empty\*** (el asterisco indica cambios sin guardar). Las asignaciones corresponden al
**banco B de perillas del SMC-PAD** (canal 1):

| Perilla SMC-PAD (banco B) | Canal | CC | Control de Analog Lab | Rango |
|---|---|---|---|---|
| 3 | 1 | 40 | P1 Time | 0–1 |
| 4 | 1 | 41 | Chorus Mix | 0–1 |
| 5 | 1 | 42 | Delay Volume | 0–1 |
| 7 | 1 | 44 | Master | 0–1 |
| 8 | 1 | 45 | Reverb Volume | 0–1 |

Las perillas 1, 2 y 6 del banco B (CC 38, 39 y 43) siguen sin asignar.

> [!warning] Este mapeo no está guardado
> *MIDI Config: Empty\** es una configuración sin guardar. Vive dentro del proyecto de
> Sonar, pero no en un archivo `.labmidi`. Para reutilizarla: en la pestaña MIDI, guarda la
> config con nombre y expórtala como `8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - SMC-PAD banco B.labmidi`.
>
> `Analog Lab V - SMC-PAD banco A.labmidi` es **otro mapeo**, pensado para el **banco A**
> (canal 16, CC 15, 30, 31, 33–37). Coincide con este solo en el CC 44, que en los
> dos casos es Master. Los dos mapeos están descritos en [[2. Analog Lab V]].

Los nueve controles de *Generic 9 Knobs*: Brightness, Timbre, Time, Movement,
Chorus Mix, Phaser Mix, Delay Volume, Reverb Volume y Master.

### Problemas conocidos

| Síntoma | Causa | Solución |
|---|---|---|
| Un controlador suena en Next pero no en Sonar | Next tiene el puerto MIDI abierto, o el dispositivo no está activado en Sonar | cerrar Next; activar la entrada en Preferences → MIDI → Devices |
| Nada suena, ni el metrónomo | salida de audio equivocada | Preferences → Audio → Devices |
| El MIDI llega pero no suena | pista MIDI sin sinte, o Input Echo apagado | pista de instrumento con Input Echo |
| Se toca en una pista y no suena | es una pista de audio, no de instrumento | crear pista de instrumento |
| XSampler recibe notas y no suena | XSampler sin muestra cargada | usar Analog Lab V, o cargar una muestra |
| Título con `[Not Activated]` | no has iniciado sesión | iniciar sesión con la cuenta de Cakewalk/BandLab |

### Por verificar

- [ ] Dónde está guardado el proyecto *Explorer* (`.cwp`) y si va a la bóveda
- [ ] Que *Arturia 2* y *PADS 3* también tengan MIDI Channel = All
- [ ] Guardar y exportar el mapeo de PADS 3 como `.labmidi`
- [ ] Si Sonar puede compartir el KeyStep con Next gracias a Windows MIDI Services

---

## Cakewalk Next

> [!abstract] Qué es y para qué lo uso
> DAW ligero y gratuito de Cakewalk, pensado para bocetar rápido. Es el camino
> más corto para tener **audio** de una idea (regla dura 2). **Aquí los
> controladores sí suenan** (2026-09-27).

### Instalación

- Se instala desde **Cakewalk Product Center**, junto con [[0. Cakewalk Sonar]].
- Programa: `C:\Program Files\Cakewalk\Next\Next.exe`
- Configuración: `%APPDATA%\Cakewalk\Next\` (`DeviceConfig.xml`, `Next.settings`)

### Configuración que funciona

Proyecto de prueba *Exploratgion*, con cuatro pistas de instrumento:

| Pista | Instrumento |
|---|---|
| 1 | Fat 90's |
| 2 | Dark Grand |
| 3 | Full Strings Short Bows |
| 4 | General MIDI Drums |

En el panel **Inspect** de cada pista, sección **Routing**:

- **Input:** `KeyStep mk2 (All)`, es decir, todos los canales MIDI
- **Output:** `Master`

Para oírla hay que **armar la pista** (botón rojo) o activar su monitor.

### Con Sonar

**No los tengas abiertos a la vez.** El que abre primero el KeyStep puede
quedárselo, y el otro no recibe nada. Ver [[0. Cakewalk Sonar]].

### Por verificar

- [ ] Versión de Next
- [ ] Si el SMC-PAD también funciona como entrada
- [ ] Cómo exportar un `.m4a` o `.wav` para la semana

---

## Analog Lab V

> [!abstract] Qué es y para qué lo uso
> Sintetizador de Arturia con presets listos (pianos, cuerdas, pads…). Viene
> gratis con el [[1. Arturia KeyStep mk2|KeyStep mk2]] en su versión **Analog Lab Intro**.
> Es el que suena en las tres pistas de [[0. Cakewalk Sonar]], porque la
> versión gratuita de Sonar no trae sintetizadores con sonidos.

### Instalación

- Se descarga desde **Arturia Software Center** después de registrar el KeyStep.
- En esta máquina:
  - aplicación: `C:\Program Files\Arturia\Analog Lab V\`
  - plugin VST3: `C:\Program Files\Common Files\VST3\Analog Lab V.vst3`
  - plugin VST2: `C:\Program Files\VSTPlugins\Analog Lab V.dll`
  - recursos: `C:\ProgramData\Arturia\Analog Lab V\`
- En Sonar aparece en el navegador de plugins como **Instruments → Synth → Analog Lab V**.

### Ajustes

| Dónde | Ajuste | Valor | Por qué |
|---|---|---|---|
| Settings | **MIDI Channel** | **All** | el SMC-PAD manda por el canal 10; con "canal 1", los pads no sonarían |
| Settings | MultiCore | activado | |
| MIDI | Midi Controller | **Generic 9 Knobs** | los 9 controles de abajo |

Comprobado en la instancia *Casio 1* de Sonar. **Falta confirmar** *Arturia 2* y *PADS 3*.

**Los 9 controles de *Generic 9 Knobs*:** Brightness, Timbre, Time, Movement,
Chorus Mix, Phaser Mix, Delay Volume, Reverb Volume y Master.

### Configuraciones

Los mapeos de perillas (pestaña **MIDI → MIDI Config**) se exportan como
**`.labmidi`**: un XML donde cada línea asigna un CC a un parámetro. Viven en
`8. Setup/3. Configuraciones/Analog Lab V/`. Reglas en [[8. Setup/0. Índice#Configuraciones]].

| Archivo | Para qué | ¿Cargada ahora? |
|---|---|---|
| `Analog Lab V - SMC-PAD banco A.labmidi` | perillas del **banco A** del SMC-PAD (canal 16) | no se sabe en qué instancia |
| *(sin exportar)* | perillas del **banco B**; en PADS 3 aparece como *Empty\** | sí, en PADS 3 |

#### `Analog Lab V - SMC-PAD banco A.labmidi`

Antes se llamaba `Generic.labmidi`; dentro del XML sigue diciendo `name="Generic"`.
Tiene 24 asignaciones, todas con `channel="0"`.

| Perilla SMC-PAD (banco A) | CC | Parámetro interno |
|---|---|---|
| 1 | 15 | 328 |
| 2 | 31 | 326 |
| 3 | 30 | 325 |
| 4 | 33 | 330 |
| 5 | 34 | 329 |
| 6 | 35 | 327 |
| 7 | 36 | 332 |
| 8 | 37 | 331 |
| *(banco B, perilla 7)* | 44 | 324 = **Master** |

Los parámetros 324–332 son nueve seguidos, es decir, los nueve controles de
*Generic 9 Knobs*. Solo está confirmado que el **324 es Master**, porque en PADS 3 el
CC 44 aparece como Master. Qué control es cada uno de los otros ocho se ve moviendo
cada perilla con Analog Lab abierto.

Otras **15 asignaciones** usan CC que el SMC-PAD no manda: 72, 73, 75, 79, 80–83,
85, 112–115, 117 y 118. No se sabe de dónde vienen.

#### Mapeo de PADS 3 (banco B, sin exportar)

| Perilla SMC-PAD (banco B) | Canal | CC | Control |
|---|---|---|---|
| 3 | 1 | 40 | P1 Time |
| 4 | 1 | 41 | Chorus Mix |
| 5 | 1 | 42 | Delay Volume |
| 7 | 1 | 44 | Master |
| 8 | 1 | 45 | Reverb Volume |

Para guardarlo: pestaña **MIDI → MIDI Config → guardar con nombre → exportar**
como `Analog Lab V - SMC-PAD banco B.labmidi`.

### Uso en esta bóveda

- Una instancia por controlador en el Synth Rack de Sonar. Ver [[0. Cakewalk Sonar#Configuración que funciona]].
- Buenos presets para dream pop: los pads y las cuerdas. Por ejemplo, *The Opera* (Strings) está en *Arturia 2*.

### Problemas conocidos

| Síntoma | Causa | Solución |
|---|---|---|
| Los pads del SMC-PAD no suenan | MIDI Channel en un canal distinto del 10 | Settings → MIDI Channel → All |
| Una perilla no mueve nada | ese CC no está en la MIDI Config cargada | pestaña MIDI → Learn |

### Por verificar

- [ ] Qué significa `channel="0"` en el `.labmidi`: ¿cualquier canal o el canal 1? (el banco A manda por el 16)
- [ ] Qué control es cada parámetro de 325 a 332
- [ ] De dónde vienen las 15 asignaciones extra
- [ ] MIDI Channel de *Arturia 2* y *PADS 3*
- [ ] Exportar el mapeo del banco B

---
