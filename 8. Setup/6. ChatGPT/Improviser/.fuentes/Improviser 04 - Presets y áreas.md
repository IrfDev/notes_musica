# Presets y áreas de trabajo

> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario (Obsidian + git), el 2026-10-18. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.

Las áreas (qué se junta para Beats, Canción, Atmósferas y Jam con Strudel) y una nota por preset: los 8 del SMC-PAD y los 9 bancos de Analog Lab.

Contiene:

- `8. Setup/5. Áreas/1. Beats.md`
- `8. Setup/5. Áreas/2. Canción.md`
- `8. Setup/5. Áreas/3. Atmósferas.md`
- `8. Setup/5. Áreas/4. Jam con Strudel.md`
- `8. Setup/4. Presets/M-VAVE SMC-PAD/1. Batería GM.md`
- `8. Setup/4. Presets/M-VAVE SMC-PAD/2. Bajo.md`
- `8. Setup/4. Presets/M-VAVE SMC-PAD/3. Beat Maker.md`
- `8. Setup/4. Presets/M-VAVE SMC-PAD/4. Teclas.md`
- `8. Setup/4. Presets/M-VAVE SMC-PAD/5. Ritmo.md`
- `8. Setup/4. Presets/M-VAVE SMC-PAD/6. Mackie.md`
- `8. Setup/4. Presets/M-VAVE SMC-PAD/7. MIDI Learn.md`
- `8. Setup/4. Presets/M-VAVE SMC-PAD/8. Strudel.md`
- `8. Setup/4. Presets/Analog Lab V/1. Beat Maker.md`
- `8. Setup/4. Presets/Analog Lab V/2. Teclas.md`
- `8. Setup/4. Presets/Analog Lab V/3. Pads.md`
- `8. Setup/4. Presets/Analog Lab V/4. Bajo.md`
- `8. Setup/4. Presets/Analog Lab V/5. Arpegios.md`
- `8. Setup/4. Presets/Analog Lab V/6. Arpegiadores.md`
- `8. Setup/4. Presets/Analog Lab V/7. Leads.md`
- `8. Setup/4. Presets/Analog Lab V/8. Texturas.md`
- `8. Setup/4. Presets/Analog Lab V/9. FX.md`

---

## Archivo: `8. Setup/5. Áreas/1. Beats.md`

```yaml
tipo: setup
estado: borrador
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Beats

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Para qué
> Armar un **beat por capas** (batería, bajo, acordes o arpegio, efectos) y grabarlo.

## Antes de empezar

- [ ] Cierra MidiSuite y MIDI Control Center: ocupan el puerto MIDI de sus aparatos.
- [ ] SMC-PAD: Glob → **Transpose = 0**.
- [ ] Analog Lab, Settings → MIDI: *MIDI Controller* = **Generic 9 Knobs + 9 Faders**, *MIDI Channel* = **All**, *MIDI Config* = **Beat Maker**.
- [ ] En el DAW: pistas de instrumento con Analog Lab, y *Input Echo* encendido solo en la pista que vas a tocar.

## Equipo

| Equipo | Qué preset |
|---|---|
| SMC-PAD | P3 Beat Maker (batería), P2 Bajo, P4 Teclas (acordes, arpegiadores y FX) |
| KeyStep | pendiente |
| Casio | no hace falta |

Presets del SMC-PAD: [[8. Setup/4. Presets/M-VAVE SMC-PAD/3. Beat Maker|P3 Beat Maker]], [[8. Setup/4. Presets/M-VAVE SMC-PAD/2. Bajo|P2 Bajo]], [[8. Setup/4. Presets/M-VAVE SMC-PAD/4. Teclas|P4 Teclas]].

## Sonidos

[[8. Setup/4. Presets/Analog Lab V/1. Beat Maker|Beat Maker]], [[8. Setup/4. Presets/Analog Lab V/4. Bajo|Bajo]], [[8. Setup/4. Presets/Analog Lab V/2. Teclas|Teclas]], [[8. Setup/4. Presets/Analog Lab V/3. Pads|Pads]], [[8. Setup/4. Presets/Analog Lab V/6. Arpegiadores|Arpegiadores]], [[8. Setup/4. Presets/Analog Lab V/9. FX|FX]].

## Pistas

| Pista | Entrada | Sonido | Preset del pad |
|---|---|---|---|
| Batería | SMC-PAD · canal 10 | un kit de *Beat Maker* | P3 |
| Bajo | SMC-PAD · canal 1 | un preset de *Bajo* | P2 |
| Acordes | SMC-PAD · canal 1 | *Teclas* o *Pads* | P4 |
| Arpegio | SMC-PAD · canal 1 | *Arpegiadores* | P4 (mantén el pad, o Hold) |
| FX | SMC-PAD · canal 1 | *FX* | P4 |

## Pasos

1. Fija el tempo del proyecto y enciende el metrónomo.
2. **Batería:** P3, banco 1 de pads. Graba un patrón corto en bucle. Con las perillas B (KNOB BANK) equilibras el kit.
3. **Bajo:** cambia el pad a P2, selecciona la pista *Bajo* y graba.
4. **Acordes o arpegio:** P4, en su pista. Los *Arpegiadores* siguen el tempo del proyecto.
5. **FX:** las subidas (*And Away*, *Bassement Riser*) justo antes de un cambio de sección.
6. Exporta el audio y anótalo en la bitácora.

## Cuándo está hecho

Un audio exportado del beat, aunque sea un bucle corto. Cuenta como el audio de la semana (bucle ⑤ de [[6. Práctica/0. Flujos|Flujos]]).

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/5. Áreas/2. Canción.md`

```yaml
tipo: setup
estado: borrador
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Canción

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Para qué
> Trabajar la **obra activa**: probar acordes, melodía y arreglo con sonidos que encajan con dream pop y folk.

## Antes de empezar

- [ ] Cierra MidiSuite y MIDI Control Center: ocupan el puerto MIDI de sus aparatos.
- [ ] SMC-PAD: Glob → **Transpose = 0**.
- [ ] Analog Lab, Settings → MIDI: *MIDI Controller* = **Generic 9 Knobs + 9 Faders**, *MIDI Channel* = **All**, *MIDI Config* = **Beat Maker**.
- [ ] En el DAW: pistas de instrumento con Analog Lab, y *Input Echo* encendido solo en la pista que vas a tocar.

## Equipo

| Equipo | Qué preset |
|---|---|
| Casio | piano (pendiente) |
| KeyStep | acordes y melodía (pendiente) |
| SMC-PAD | P4 Teclas (acordes en cuartas, como en la guitarra), P3 Beat Maker (batería sencilla), P2 Bajo |

Presets del SMC-PAD: [[8. Setup/4. Presets/M-VAVE SMC-PAD/4. Teclas|P4 Teclas]], [[8. Setup/4. Presets/M-VAVE SMC-PAD/3. Beat Maker|P3 Beat Maker]], [[8. Setup/4. Presets/M-VAVE SMC-PAD/2. Bajo|P2 Bajo]].

## Sonidos

[[8. Setup/4. Presets/Analog Lab V/2. Teclas|Teclas]], [[8. Setup/4. Presets/Analog Lab V/3. Pads|Pads]], [[8. Setup/4. Presets/Analog Lab V/7. Leads|Leads]], [[8. Setup/4. Presets/Analog Lab V/8. Texturas|Texturas]], [[8. Setup/4. Presets/Analog Lab V/1. Beat Maker|Beat Maker]], [[8. Setup/4. Presets/Analog Lab V/4. Bajo|Bajo]].

## Pistas

| Pista | Entrada | Sonido | Preset del pad |
|---|---|---|---|
| Piano | Casio · USB MIDI | *Teclas* (o el sonido del propio Casio) | — |
| Acordes | KeyStep o SMC-PAD · canal 1 | *Teclas* o *Pads* | P4 |
| Melodía | KeyStep | *Leads* | — |
| Fondo | SMC-PAD · canal 1 | *Texturas* | P4 |
| Batería | SMC-PAD · canal 10 | *Beat Maker In The Air* o *606* | P3 |
| Bajo | SMC-PAD · canal 1 | *Fret Bass* o *Fretless Bass* | P2 |

## Pasos

1. Abre la nota de la obra activa y escribe qué vas a probar hoy.
2. Monta solo las pistas que necesites para eso.
3. Graba cada idea como una toma corta, sin pulirla.
4. Registra en la nota de la obra qué decidiste y por qué (bucle ②).

## Cuándo está hecho

Lo que pide el bucle ② de [[6. Práctica/0. Flujos|Flujos]] para la obra: decisión registrada y su audio.

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/5. Áreas/3. Atmósferas.md`

```yaml
tipo: setup
estado: borrador
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Atmósferas

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Para qué
> Hacer **fondos, intros e interludios**: texturas que evolucionan, arpegios sostenidos y efectos.

## Antes de empezar

- [ ] Cierra MidiSuite y MIDI Control Center: ocupan el puerto MIDI de sus aparatos.
- [ ] SMC-PAD: Glob → **Transpose = 0**.
- [ ] Analog Lab, Settings → MIDI: *MIDI Controller* = **Generic 9 Knobs + 9 Faders**, *MIDI Channel* = **All**, *MIDI Config* = **Beat Maker**.
- [ ] En el DAW: pistas de instrumento con Analog Lab, y *Input Echo* encendido solo en la pista que vas a tocar.

## Equipo

| Equipo | Qué preset |
|---|---|
| SMC-PAD | P4 Teclas, con *Latch* en Glob o *Hold* en Analog Lab |
| KeyStep | sostener notas (pendiente) |
| Casio | no hace falta |

Presets del SMC-PAD: [[8. Setup/4. Presets/M-VAVE SMC-PAD/4. Teclas|P4 Teclas]].

## Sonidos

[[8. Setup/4. Presets/Analog Lab V/8. Texturas|Texturas]], [[8. Setup/4. Presets/Analog Lab V/3. Pads|Pads]], [[8. Setup/4. Presets/Analog Lab V/6. Arpegiadores|Arpegiadores]], [[8. Setup/4. Presets/Analog Lab V/9. FX|FX]].

## Pistas

| Pista | Entrada | Sonido | Preset del pad |
|---|---|---|---|
| Textura | SMC-PAD · canal 1 | *Texturas* | P4 |
| Pad | SMC-PAD · canal 1 | *Pads* | P4 |
| Arpegiador | SMC-PAD · canal 1 | *Arpegiadores* (con Hold) | P4 |
| FX | SMC-PAD · canal 1 | *FX* | P4 |

## Pasos

1. Elige una textura y sostenla: *Latch* en el SMC-PAD o *Hold* en Analog Lab.
2. Ajusta *Reverb* y *Delay* con las perillas A (7 y 6) hasta que el fondo respire.
3. Suma un arpegiador en otra pista.
4. Usa un *FX* para entrar o salir.
5. Graba una toma larga sin cortar y recorta después.

## Cuándo está hecho

Una toma de audio que sirva como intro, puente o final de una pieza.

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/5. Áreas/4. Jam con Strudel.md`

```yaml
tipo: setup
estado: borrador
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Jam con Strudel

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Para qué
> Tocar **sobre la banda de Strudel** (bajo, pad y arpegio) con el SMC-PAD y el KeyStep.

## Antes de empezar

- [ ] Cierra MidiSuite y MIDI Control Center: ocupan el puerto MIDI de sus aparatos.
- [ ] SMC-PAD: Glob → **Transpose = 0**.
- [ ] Analog Lab, Settings → MIDI: *MIDI Controller* = **Generic 9 Knobs + 9 Faders**, *MIDI Channel* = **All**, *MIDI Config* = **Beat Maker**.
- [ ] En el DAW: pistas de instrumento con Analog Lab, y *Input Echo* encendido solo en la pista que vas a tocar.

## Equipo

| Equipo | Qué preset |
|---|---|
| SMC-PAD | P8 Strudel |
| KeyStep | `HUM - Lead` (pendiente) |
| Casio | no hace falta |

Presets del SMC-PAD: [[8. Setup/4. Presets/M-VAVE SMC-PAD/8. Strudel|P8 Strudel]].

## Sonidos

[[8. Setup/4. Presets/Analog Lab V/4. Bajo|Bajo]], [[8. Setup/4. Presets/Analog Lab V/3. Pads|Pads]], [[8. Setup/4. Presets/Analog Lab V/8. Texturas|Texturas]], [[8. Setup/4. Presets/Analog Lab V/5. Arpegios|Arpegios]], [[8. Setup/4. Presets/Analog Lab V/1. Beat Maker|Beat Maker]], [[8. Setup/4. Presets/Analog Lab V/7. Leads|Leads]].

## Pistas

| Pista | Entrada | Sonido | Preset del pad |
|---|---|---|---|
| STR - Bass | Strudel y SMC-PAD · canal 2 | *Bajo* | P8 bancos 1–2 |
| STR - Pad | Strudel y SMC-PAD · canal 3 | *Pads* o *Texturas* | P8 bancos 3–4 |
| STR - Arp | Strudel y SMC-PAD · canal 4 | *Arpegios* (no *Arpegiadores*) | P8 bancos 5–6 |
| Batería | SMC-PAD · canal 10 | *Beat Maker* | P8 bancos 7–8 |
| HUM - Lead | KeyStep | *Leads* | — |

## Pasos

1. Arranca Strudel como dice [[4. Instrumento/2. Strudel/2. House y todo|House y todo]].
2. Pon la entrada de cada pista `STR` en *Omni* (o SMC-PAD) con su canal, e *Input Echo* encendido.
3. P8: perillas A = volumen y brillo de cada voz; perillas B = reverb y delay.
4. Toca encima y graba la toma.

## Cuándo está hecho

Una toma grabada de la jam.

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/M-VAVE SMC-PAD/1. Batería GM.md`

```yaml
tipo: setup
estado: borrador
equipo: "[[0. M-VAVE SMC-PAD]]"
ranura: 1
archivo: "8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P1 Batería GM.spc"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# P1 · Batería GM

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Para qué sirve
> Tocar batería **General MIDI**: *General MIDI Drums* de Cakewalk Next, la percusión de MuseScore, Strudel hacia Sonar con un kit GM, o cualquier caja de ritmos que siga el estándar.

Generado el 2026-10-02, no exportado: pasa a `estado: vigente` cuando lo cargues, lo pruebes y lo exportes encima desde MidiSuite.

## Cargarlo

1. MidiSuite → menú *Presets* → **1**.
2. *Import* → `8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P1 Batería GM.spc`.
3. **Save** (graba en el aparato todas las ranuras tal como están en MidiSuite).
4. Cierra MidiSuite antes de abrir el DAW o Analog Lab: ocupa el puerto MIDI.

## Sonidos

No hay kits General MIDI en tu Analog Lab: los kits de Emulator II reparten el teclado por zonas. Con este preset suena **General MIDI Drums** de Next (o la percusión de MuseScore). Para batería en Analog Lab, usa el P3 Beat Maker.

## Botones

| Botón | Modo | Qué hace |
|---|---|---|
| `<` | CC Push | CC 28 → Analog Lab: preset **anterior** |
| `>` | CC Push | CC 29 → Analog Lab: preset **siguiente** |
| `▶` | SysEx | MMC Play → el DAW arranca |
| `■` | SysEx | MMC Stop → el DAW para |
| `●` | SysEx | MMC Record → el DAW graba |

## Perillas

*KNOB BANK* alterna entre el banco A y el B.

| Perilla | Banco A | Banco B |
|---|---|---|
| 1 | canal 1 · CC 74 · Brightness (macro 1) | canal 1 · CC 73 · fader 1 |
| 2 | canal 1 · CC 71 · Timbre (macro 2) | canal 1 · CC 75 · fader 2 |
| 3 | canal 1 · CC 76 · Time (macro 3) | canal 1 · CC 79 · fader 3 |
| 4 | canal 1 · CC 77 · Movement (macro 4) | canal 1 · CC 72 · fader 4 |
| 5 | canal 1 · CC 93 · FX A | canal 1 · CC 80 · fader 5 |
| 6 | canal 1 · CC 19 · Delay | canal 1 · CC 81 · fader 6 |
| 7 | canal 1 · CC 16 · Reverb | canal 1 · CC 82 · fader 7 |
| 8 | canal 1 · CC 17 · Master (volumen) | canal 1 · CC 83 · fader 8 |

Las perillas mandan los CC estándar de Arturia: en Analog Lab funcionan con la configuración *Beat Maker* ([[8. Setup/1. Software/2. Analog Lab V#Configuración MIDI Beat Maker|ver Analog Lab]]) y con la *Default* de fábrica. Los faders hacen lo que diga cada preset de Analog Lab: su nota de banco dice qué hace cada uno.

## Pads

*PAD BANK* cambia de banco. El pad 1 queda **abajo a la izquierda** (supuesto; ver la nota del equipo). Cada casilla: color, sonido o nota, y número MIDI.

### Banco 1 · Kit para dedos

Filas 1 y 2 iguales (bombo, caja, palmas, hi-hat) para alternar dos dedos; fila 3 hi-hat abierto, pandereta, crash y cencerro; fila 4 los toms. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟦 Tom piso grave · 41 | 🟦 Tom grave · 45 | 🟦 Tom medio agudo · 48 | 🟦 Tom agudo · 50 |
| fila 3 | (🟨) Hi-hat abierto · 46 | 🟪 Pandereta · 54 | ⬜ Crash · 49 | 🟪 Cencerro · 56 |
| fila 2 | 🟥 Bombo · 36 | 🟧 Caja · 38 | 🟧 Palmas · 39 | 🟨 Hi-hat cerrado · 42 |
| fila 1 (abajo) | 🟥 Bombo · 36 | 🟧 Caja · 38 | 🟧 Palmas · 39 | 🟨 Hi-hat cerrado · 42 |

### Banco 2 · Kit GM clásico

El banco 3 del P2 de siempre, con sus mismas notas. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟪 Cencerro · 56 | 🟩 Bongó agudo · 60 | 🟩 Conga apagada · 62 | 🟩 Conga grave · 64 |
| fila 3 | 🟦 Tom medio · 47 | ⬜ Crash · 49 | ⬜ Ride · 51 | 🟪 Pandereta · 54 |
| fila 2 | 🟧 Palmas · 39 | 🟧 Aro · 37 | 🟦 Tom piso grave · 41 | 🟦 Tom grave · 45 |
| fila 1 (abajo) | 🟥 Bombo · 36 | 🟧 Caja · 38 | 🟨 Hi-hat cerrado · 42 | (🟨) Hi-hat abierto · 46 |

### Banco 3 · Toms y platos

Bombo 2, los seis toms, aro y hi-hat de pedal; abajo, todos los platos. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬜ China · 52 | ⬜ Ride · 51 | ⬜ Ride 2 · 59 | ⬜ Campana ride · 53 |
| fila 3 | 🟨 Hi-hat pedal · 44 | ⬜ Crash · 49 | ⬜ Crash 2 · 57 | ⬜ Splash · 55 |
| fila 2 | 🟦 Tom medio · 47 | 🟦 Tom medio agudo · 48 | 🟦 Tom agudo · 50 | 🟧 Aro · 37 |
| fila 1 (abajo) | 🟥 Bombo 2 · 35 | 🟦 Tom piso grave · 41 | 🟦 Tom piso agudo · 43 | 🟦 Tom grave · 45 |

### Banco 4 · Percusión

Bongós, congas, timbales y agogó; luego cabasa, maracas, güiro, claves, woodblocks y triángulos. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟪 Woodblock agudo · 76 | 🟪 Woodblock grave · 77 | 🟪 Triángulo apagado · 80 | 🟪 Triángulo · 81 |
| fila 3 | 🟪 Cabasa · 69 | 🟪 Maracas · 70 | 🟪 Güiro corto · 73 | 🟪 Claves · 75 |
| fila 2 | 🟩 Conga grave · 64 | 🟩 Timbal agudo · 65 | 🟩 Timbal grave · 66 | 🟩 Agogó agudo · 67 |
| fila 1 (abajo) | 🟩 Bongó agudo · 60 | 🟩 Bongó grave · 61 | 🟩 Conga apagada · 62 | 🟩 Conga aguda · 63 |

### Banco 5 · Mapa GM 35–50

Todo el mapa General MIDI en orden, para encontrar cualquier sonido. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟦 Tom medio · 47 | 🟦 Tom medio agudo · 48 | ⬜ Crash · 49 | 🟦 Tom agudo · 50 |
| fila 3 | 🟦 Tom piso agudo · 43 | 🟨 Hi-hat pedal · 44 | 🟦 Tom grave · 45 | (🟨) Hi-hat abierto · 46 |
| fila 2 | 🟧 Palmas · 39 | 🟧 Caja 2 · 40 | 🟦 Tom piso grave · 41 | 🟨 Hi-hat cerrado · 42 |
| fila 1 (abajo) | 🟥 Bombo 2 · 35 | 🟥 Bombo · 36 | 🟧 Aro · 37 | 🟧 Caja · 38 |

### Banco 6 · Mapa GM 51–66

Continuación del mapa. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 Conga aguda · 63 | 🟩 Conga grave · 64 | 🟩 Timbal agudo · 65 | 🟩 Timbal grave · 66 |
| fila 3 | ⬜ Ride 2 · 59 | 🟩 Bongó agudo · 60 | 🟩 Bongó grave · 61 | 🟩 Conga apagada · 62 |
| fila 2 | ⬜ Splash · 55 | 🟪 Cencerro · 56 | ⬜ Crash 2 · 57 | 🟪 Vibraslap · 58 |
| fila 1 (abajo) | ⬜ Ride · 51 | ⬜ China · 52 | ⬜ Campana ride · 53 | 🟪 Pandereta · 54 |

### Banco 7 · Mapa GM 67–82

Continuación del mapa. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟪 Cuíca abierta · 79 | 🟪 Triángulo apagado · 80 | 🟪 Triángulo · 81 | 🟪 Shaker · 82 |
| fila 3 | 🟪 Claves · 75 | 🟪 Woodblock agudo · 76 | 🟪 Woodblock grave · 77 | 🟪 Cuíca apagada · 78 |
| fila 2 | 🟪 Silbato corto · 71 | 🟪 Silbato largo · 72 | 🟪 Güiro corto · 73 | 🟪 Güiro largo · 74 |
| fila 1 (abajo) | 🟩 Agogó agudo · 67 | 🟩 Agogó grave · 68 | 🟪 Cabasa · 69 | 🟪 Maracas · 70 |

### Banco 8 · Extras GM2

Los sonidos que añade General MIDI 2 (metrónomo, baquetas, scratch, castañuelas, surdo…). Si tu sinte es GM1, no suenan. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬛ Surdo abierto · 87 | 🟪 Pandereta · 54 | 🟪 Cencerro · 56 | 🟪 Vibraslap · 58 |
| fila 3 | ⬛ Cascabeles · 83 | ⬛ Belltree · 84 | ⬛ Castañuelas · 85 | ⬛ Surdo apagado · 86 |
| fila 2 | ⬛ Baquetas · 31 | ⬛ Clic cuadrado · 32 | ⬛ Metrónomo · 33 | ⬛ Campana metrón. · 34 |
| fila 1 (abajo) | ⬛ High Q · 27 | ⬛ Slap · 28 | ⬛ Scratch ↑ · 29 | ⬛ Scratch ↓ · 30 |

## Qué significa cada color

Un color entre paréntesis, como (🟥), es el mismo color **apagado**.

**Bancos General MIDI**: el color dice la familia del sonido.

| Color | Qué es |
|---|---|
| 🟥 rojo | bombo |
| 🟧 naranja | caja, aro y palmas |
| 🟨 amarillo | hi-hat cerrado y de pedal |
| (🟨) amarillo apagado | hi-hat abierto |
| 🟦 azul | toms |
| ⬜ blanco | platos (crash, ride, china, splash) |
| 🟩 verde | percusión latina (bongós, congas, timbales, agogó) |
| 🟪 morado | percusión pequeña (pandereta, cencerro, claves, woodblocks…) |
| ⬛ gris | extras de General MIDI 2 |

## Lo que el archivo no guarda (Glob)

Se pone a mano en la pestaña **Glob** de MidiSuite. Probablemente es común a todas las ranuras.

- **Transpose = 0.** Tu Glob estaba en −4: con eso cada pad sale 4 semitonos abajo y los kits suenan cruzados.
- **PadCurve:** la más lineal que encuentres. Este preset ya usa todo el rango de velocidad (1–127); la curva decide cuánto cuesta llegar a cada punto.
- **PadAftertouch: apagado.** En batería, la presión después del golpe solo manda mensajes que nadie usa.
- **Note Repeat** (con *Rate* y *Swing*): útil para redobles de hi-hat; queda sincronizado al tempo si *Sync* está activo.
- Si un pad suena más débil que los demás, **Pad Calibration Mode** en MidiSuite.
- Para comprobar qué manda cada pad: la vista *Midi Code* de MidiSuite.

## Por verificar

- [ ] Cargarlo, tocar cada banco y comprobar que suena lo que dice esta nota
- [ ] Que el pad 1 quede abajo a la izquierda
- [ ] Que `▶` `■` `●` manejen el DAW (modo SysEx, MMC)
- [ ] Exportarlo encima desde MidiSuite

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/M-VAVE SMC-PAD/2. Bajo.md`

```yaml
tipo: setup
estado: borrador
equipo: "[[0. M-VAVE SMC-PAD]]"
ranura: 2
archivo: "8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P2 Bajo.spc"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# P2 · Bajo

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Para qué sirve
> Tocar **líneas de bajo** con un sonido de bajo de Analog Lab. Los bancos 1–4 son el mástil de un bajo de cuatro cuerdas: lo que sabes de la guitarra (las cuatro cuerdas graves) se traslada tal cual, una octava abajo.

Generado el 2026-10-02, no exportado: pasa a `estado: vigente` cuando lo cargues, lo pruebes y lo exportes encima desde MidiSuite.

## Cargarlo

1. MidiSuite → menú *Presets* → **2**.
2. *Import* → `8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P2 Bajo.spc`.
3. **Save** (graba en el aparato todas las ranuras tal como están en MidiSuite).
4. Cierra MidiSuite antes de abrir el DAW o Analog Lab: ocupa el puerto MIDI.

## Sonidos

Banco **Bajo** de Analog Lab.

| Banco de Analog Lab | Qué trae |
|---|---|
| [[8. Setup/4. Presets/Analog Lab V/4. Bajo\|Bajo]] | bajos |

**Se usa en:** [[8. Setup/5. Áreas/1. Beats|Beats]], [[8. Setup/5. Áreas/2. Canción|Canción]].

## Botones

| Botón | Modo | Qué hace |
|---|---|---|
| `<` | CC Push | CC 28 → Analog Lab: preset **anterior** |
| `>` | CC Push | CC 29 → Analog Lab: preset **siguiente** |
| `▶` | SysEx | MMC Play → el DAW arranca |
| `■` | SysEx | MMC Stop → el DAW para |
| `●` | SysEx | MMC Record → el DAW graba |

## Perillas

*KNOB BANK* alterna entre el banco A y el B.

| Perilla | Banco A | Banco B |
|---|---|---|
| 1 | canal 1 · CC 74 · Brightness (macro 1) | canal 1 · CC 73 · fader 1 |
| 2 | canal 1 · CC 71 · Timbre (macro 2) | canal 1 · CC 75 · fader 2 |
| 3 | canal 1 · CC 76 · Time (macro 3) | canal 1 · CC 79 · fader 3 |
| 4 | canal 1 · CC 77 · Movement (macro 4) | canal 1 · CC 72 · fader 4 |
| 5 | canal 1 · CC 93 · FX A | canal 1 · CC 80 · fader 5 |
| 6 | canal 1 · CC 19 · Delay | canal 1 · CC 81 · fader 6 |
| 7 | canal 1 · CC 16 · Reverb | canal 1 · CC 82 · fader 7 |
| 8 | canal 1 · CC 17 · Master (volumen) | canal 1 · CC 83 · fader 8 |

Las perillas mandan los CC estándar de Arturia: en Analog Lab funcionan con la configuración *Beat Maker* ([[8. Setup/1. Software/2. Analog Lab V#Configuración MIDI Beat Maker|ver Analog Lab]]) y con la *Default* de fábrica. Los faders hacen lo que diga cada preset de Analog Lab: su nota de banco dice qué hace cada uno.

## Pads

*PAD BANK* cambia de banco. El pad 1 queda **abajo a la izquierda** (supuesto; ver la nota del equipo). Cada casilla: color, sonido o nota, y número MIDI.

### Banco 1 · Mástil, trastes 0–3

Cada fila es una cuerda: mi (abajo), la, re, sol (arriba). Cada pad sube un semitono. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬜ G2 · 43 | 🟦 G#2 · 44 | ⬜ A2 · 45 | 🟦 A#2 · 46 |
| fila 3 | ⬜ D2 · 38 | 🟦 D#2 · 39 | ⬜ E2 · 40 | ⬜ F2 · 41 |
| fila 2 | ⬜ A1 · 33 | 🟦 A#1 · 34 | ⬜ B1 · 35 | 🟩 C2 · 36 |
| fila 1 (abajo) | ⬜ E1 · 28 | ⬜ F1 · 29 | 🟦 F#1 · 30 | ⬜ G1 · 31 |

### Banco 2 · Mástil, trastes 4–7

Cada fila es una cuerda: mi (abajo), la, re, sol (arriba). Cada pad sube un semitono. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬜ B2 · 47 | 🟩 C3 · 48 | 🟦 C#3 · 49 | ⬜ D3 · 50 |
| fila 3 | 🟦 F#2 · 42 | ⬜ G2 · 43 | 🟦 G#2 · 44 | ⬜ A2 · 45 |
| fila 2 | 🟦 C#2 · 37 | ⬜ D2 · 38 | 🟦 D#2 · 39 | ⬜ E2 · 40 |
| fila 1 (abajo) | 🟦 G#1 · 32 | ⬜ A1 · 33 | 🟦 A#1 · 34 | ⬜ B1 · 35 |

### Banco 3 · Mástil, trastes 8–11

Cada fila es una cuerda: mi (abajo), la, re, sol (arriba). Cada pad sube un semitono. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟦 D#3 · 51 | ⬜ E3 · 52 | ⬜ F3 · 53 | 🟦 F#3 · 54 |
| fila 3 | 🟦 A#2 · 46 | ⬜ B2 · 47 | 🟩 C3 · 48 | 🟦 C#3 · 49 |
| fila 2 | ⬜ F2 · 41 | 🟦 F#2 · 42 | ⬜ G2 · 43 | 🟦 G#2 · 44 |
| fila 1 (abajo) | 🟩 C2 · 36 | 🟦 C#2 · 37 | ⬜ D2 · 38 | 🟦 D#2 · 39 |

### Banco 4 · Mástil, trastes 12–15

Cada fila es una cuerda: mi (abajo), la, re, sol (arriba). Cada pad sube un semitono. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬜ G3 · 55 | 🟦 G#3 · 56 | ⬜ A3 · 57 | 🟦 A#3 · 58 |
| fila 3 | ⬜ D3 · 50 | 🟦 D#3 · 51 | ⬜ E3 · 52 | ⬜ F3 · 53 |
| fila 2 | ⬜ A2 · 45 | 🟦 A#2 · 46 | ⬜ B2 · 47 | 🟩 C3 · 48 |
| fila 1 (abajo) | ⬜ E2 · 40 | ⬜ F2 · 41 | 🟦 F#2 · 42 | ⬜ G2 · 43 |

### Banco 5 · Cromático desde C0

16 semitonos seguidos, cuatro por fila. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C1 · 24 | 🟦 C#1 · 25 | ⬜ D1 · 26 | 🟦 D#1 · 27 |
| fila 3 | 🟦 G#0 · 20 | ⬜ A0 · 21 | 🟦 A#0 · 22 | ⬜ B0 · 23 |
| fila 2 | ⬜ E0 · 16 | ⬜ F0 · 17 | 🟦 F#0 · 18 | ⬜ G0 · 19 |
| fila 1 (abajo) | 🟩 C0 · 12 | 🟦 C#0 · 13 | ⬜ D0 · 14 | 🟦 D#0 · 15 |

### Banco 6 · Cromático desde C1

16 semitonos seguidos, cuatro por fila. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C2 · 36 | 🟦 C#2 · 37 | ⬜ D2 · 38 | 🟦 D#2 · 39 |
| fila 3 | 🟦 G#1 · 32 | ⬜ A1 · 33 | 🟦 A#1 · 34 | ⬜ B1 · 35 |
| fila 2 | ⬜ E1 · 28 | ⬜ F1 · 29 | 🟦 F#1 · 30 | ⬜ G1 · 31 |
| fila 1 (abajo) | 🟩 C1 · 24 | 🟦 C#1 · 25 | ⬜ D1 · 26 | 🟦 D#1 · 27 |

### Banco 7 · Cromático desde C2

16 semitonos seguidos, cuatro por fila. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C3 · 48 | 🟦 C#3 · 49 | ⬜ D3 · 50 | 🟦 D#3 · 51 |
| fila 3 | 🟦 G#2 · 44 | ⬜ A2 · 45 | 🟦 A#2 · 46 | ⬜ B2 · 47 |
| fila 2 | ⬜ E2 · 40 | ⬜ F2 · 41 | 🟦 F#2 · 42 | ⬜ G2 · 43 |
| fila 1 (abajo) | 🟩 C2 · 36 | 🟦 C#2 · 37 | ⬜ D2 · 38 | 🟦 D#2 · 39 |

### Banco 8 · Cromático desde C3

16 semitonos seguidos, cuatro por fila. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C4 · 60 | 🟦 C#4 · 61 | ⬜ D4 · 62 | 🟦 D#4 · 63 |
| fila 3 | 🟦 G#3 · 56 | ⬜ A3 · 57 | 🟦 A#3 · 58 | ⬜ B3 · 59 |
| fila 2 | ⬜ E3 · 52 | ⬜ F3 · 53 | 🟦 F#3 · 54 | ⬜ G3 · 55 |
| fila 1 (abajo) | 🟩 C3 · 48 | 🟦 C#3 · 49 | ⬜ D3 · 50 | 🟦 D#3 · 51 |

## Qué significa cada color

Un color entre paréntesis, como (🟥), es el mismo color **apagado**.

**Bancos de notas**: el color dice qué nota es.

| Color | Qué es |
|---|---|
| 🟩 verde | do (C): para orientarte |
| ⬜ blanco | teclas blancas |
| 🟦 azul | teclas negras |

## Lo que el archivo no guarda (Glob)

Se pone a mano en la pestaña **Glob** de MidiSuite. Probablemente es común a todas las ranuras.

- **Transpose = 0** (estaba en −4), salvo que quieras transportar a propósito.
- **PadCurve:** la más lineal; el rango de velocidad ya es 1–127.
- **PadAftertouch:** encendido si el preset de Analog Lab usa la presión (sale como *AfterTouch* en sus ajustes); si no, apagado.
- **Latch:** encendido si quieres que un pad siga sonando al soltarlo (texturas, arpegiadores).
- Si un pad suena más débil que los demás, **Pad Calibration Mode** en MidiSuite.
- Para comprobar qué manda cada pad: la vista *Midi Code* de MidiSuite.

## Por verificar

- [ ] Cargarlo, tocar cada banco y comprobar que suena lo que dice esta nota
- [ ] Que el pad 1 quede abajo a la izquierda
- [ ] Que `▶` `■` `●` manejen el DAW (modo SysEx, MMC)
- [ ] Exportarlo encima desde MidiSuite

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/M-VAVE SMC-PAD/3. Beat Maker.md`

```yaml
tipo: setup
estado: borrador
equipo: "[[0. M-VAVE SMC-PAD]]"
ranura: 3
archivo: "8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P3 Beat Maker.spc"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

		
# P3 · Beat Maker

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Para qué sirve
> Hacer **beats** con los kits de Emulator II del banco **Beat Maker** de Analog Lab: el banco 1 de pads toca sus 8 zonas, y el banco B de perillas es un mezclador con el volumen de cada sonido.

Generado el 2026-10-02, no exportado: pasa a `estado: vigente` cuando lo cargues, lo pruebes y lo exportes encima desde MidiSuite.

## Cargarlo

1. MidiSuite → menú *Presets* → **3**.
2. *Import* → `8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P3 Beat Maker.spc`.
3. **Save** (graba en el aparato todas las ranuras tal como están en MidiSuite).
4. Cierra MidiSuite antes de abrir el DAW o Analog Lab: ocupa el puerto MIDI.

## Sonidos

Banco **Beat Maker** de Analog Lab: 5 kits.

| Banco de Analog Lab | Qué trae |
|---|---|
| [[8. Setup/4. Presets/Analog Lab V/1. Beat Maker\|Beat Maker]] | kits de batería de Emulator II |

**Se usa en:** [[8. Setup/5. Áreas/1. Beats|Beats]], [[8. Setup/5. Áreas/2. Canción|Canción]].

## Botones

| Botón | Modo | Qué hace |
|---|---|---|
| `<` | CC Push | CC 28 → Analog Lab: preset **anterior** |
| `>` | CC Push | CC 29 → Analog Lab: preset **siguiente** |
| `▶` | SysEx | MMC Play → el DAW arranca |
| `■` | SysEx | MMC Stop → el DAW para |
| `●` | SysEx | MMC Record → el DAW graba |

## Perillas

*KNOB BANK* alterna entre el banco A y el B.

| Perilla | Banco A | Banco B |
|---|---|---|
| 1 | canal 1 · CC 74 · Brightness (macro 1) | canal 1 · CC 73 · fader 1 = volumen de la voz 1 |
| 2 | canal 1 · CC 71 · Timbre (macro 2) | canal 1 · CC 75 · fader 2 = volumen de la voz 2 |
| 3 | canal 1 · CC 76 · Time (macro 3) | canal 1 · CC 79 · fader 3 = volumen de la voz 3 |
| 4 | canal 1 · CC 77 · Movement (macro 4) | canal 1 · CC 72 · fader 4 = volumen de la voz 4 |
| 5 | canal 1 · CC 93 · FX A | canal 1 · CC 80 · fader 5 = volumen de la voz 5 |
| 6 | canal 1 · CC 19 · Delay | canal 1 · CC 81 · fader 6 = volumen de la voz 6 |
| 7 | canal 1 · CC 16 · Reverb | canal 1 · CC 82 · fader 7 = volumen de la voz 7 |
| 8 | canal 1 · CC 17 · Master (volumen) | canal 1 · CC 83 · fader 8 = volumen de la voz 8 |

Las perillas mandan los CC estándar de Arturia: en Analog Lab funcionan con la configuración *Beat Maker* ([[8. Setup/1. Software/2. Analog Lab V#Configuración MIDI Beat Maker|ver Analog Lab]]) y con la *Default* de fábrica. Los faders hacen lo que diga cada preset de Analog Lab: su nota de banco dice qué hace cada uno.

## Pads

*PAD BANK* cambia de banco. El pad 1 queda **abajo a la izquierda** (supuesto; ver la nota del equipo). Cada casilla: color, sonido o nota, y número MIDI.

### Banco 1 · Kit de Emulator II

Fila 1 las zonas 1–4; fila 2 las mismas (dos dedos); fila 3 las zonas 5–8; fila 4 las zonas 1–4 afinadas hacia arriba (color apagado). Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | (🟥) Z1 +5 · 41 | (🟧) Z2 +3 · 45 | (🟨) Z3 +3 · 51 | (🟩) Z4 +3 · 57 |
| fila 3 | 🟦 Z5 · 60 | 🟪 Z6 · 66 | ⬜ Z7 · 72 | ⬛ Z8 · 78 |
| fila 2 | 🟥 Z1 · 36 | 🟧 Z2 · 42 | 🟨 Z3 · 48 | 🟩 Z4 · 54 |
| fila 1 (abajo) | 🟥 Z1 · 36 | 🟧 Z2 · 42 | 🟨 Z3 · 48 | 🟩 Z4 · 54 |

### Banco 2 · Bombo afinado

La zona 1 cromática: el bombo de −10 a +5 semitonos. La raíz (36) en brillante. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | (🟥) Z1 +2 · 38 | (🟥) Z1 +3 · 39 | (🟥) Z1 +4 · 40 | (🟥) Z1 +5 · 41 |
| fila 3 | (🟥) Z1 -2 · 34 | (🟥) Z1 -1 · 35 | 🟥 Z1 · 36 | (🟥) Z1 +1 · 37 |
| fila 2 | (🟥) Z1 -6 · 30 | (🟥) Z1 -5 · 31 | (🟥) Z1 -4 · 32 | (🟥) Z1 -3 · 33 |
| fila 1 (abajo) | (🟥) Z1 -10 · 26 | (🟥) Z1 -9 · 27 | (🟥) Z1 -8 · 28 | (🟥) Z1 -7 · 29 |

### Banco 3 · Kit GM clásico

El banco 3 del P2 de siempre (General MIDI), para Next o MuseScore sin cambiar de preset. Canal 10.

|                 | col. 1            | col. 2              | col. 3                 | col. 4                   |
| --------------- | ----------------- | ------------------- | ---------------------- | ------------------------ |
| fila 4 (arriba) | 🟪 Cencerro · 56  | 🟩 Bongó agudo · 60 | 🟩 Conga apagada · 62  | 🟩 Conga grave · 64      |
| fila 3          | 🟦 Tom medio · 47 | ⬜ Crash · 49        | ⬜ Ride · 51            | 🟪 Pandereta · 54        |
| fila 2          | 🟧 Palmas · 39    | 🟧 Aro · 37         | 🟦 Tom piso grave · 41 | 🟦 Tom grave · 45        |
| fila 1 (abajo)  | 🟥 Bombo · 36     | 🟧 Caja · 38        | 🟨 Hi-hat cerrado · 42 | (🟨) Hi-hat abierto · 46 |

### Banco 4 · Percusión GM

General MIDI 52–67: platos, pandereta, cencerro, bongós, congas, timbales. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 Conga grave · 64 | 🟩 Timbal agudo · 65 | 🟩 Timbal grave · 66 | 🟩 Agogó agudo · 67 |
| fila 3 | 🟩 Bongó agudo · 60 | 🟩 Bongó grave · 61 | 🟩 Conga apagada · 62 | 🟩 Conga aguda · 63 |
| fila 2 | 🟪 Cencerro · 56 | ⬜ Crash 2 · 57 | 🟪 Vibraslap · 58 | ⬜ Ride 2 · 59 |
| fila 1 (abajo) | ⬜ China · 52 | ⬜ Campana ride · 53 | 🟪 Pandereta · 54 | ⬜ Splash · 55 |

### Banco 5 · Notas desde C2 (canal 1)

Para tocar otro preset sin cambiar de ranura. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C3 · 48 | 🟦 C#3 · 49 | ⬜ D3 · 50 | 🟦 D#3 · 51 |
| fila 3 | 🟦 G#2 · 44 | ⬜ A2 · 45 | 🟦 A#2 · 46 | ⬜ B2 · 47 |
| fila 2 | ⬜ E2 · 40 | ⬜ F2 · 41 | 🟦 F#2 · 42 | ⬜ G2 · 43 |
| fila 1 (abajo) | 🟩 C2 · 36 | 🟦 C#2 · 37 | ⬜ D2 · 38 | 🟦 D#2 · 39 |

### Banco 6 · Notas desde E3 (canal 1)

Para tocar otro preset sin cambiar de ranura. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬜ E4 · 64 | ⬜ F4 · 65 | 🟦 F#4 · 66 | ⬜ G4 · 67 |
| fila 3 | 🟩 C4 · 60 | 🟦 C#4 · 61 | ⬜ D4 · 62 | 🟦 D#4 · 63 |
| fila 2 | 🟦 G#3 · 56 | ⬜ A3 · 57 | 🟦 A#3 · 58 | ⬜ B3 · 59 |
| fila 1 (abajo) | ⬜ E3 · 52 | ⬜ F3 · 53 | 🟦 F#3 · 54 | ⬜ G3 · 55 |

### Banco 7 · Notas desde G#4 (canal 1)

Para tocar otro preset sin cambiar de ranura. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟦 G#5 · 80 | ⬜ A5 · 81 | 🟦 A#5 · 82 | ⬜ B5 · 83 |
| fila 3 | ⬜ E5 · 76 | ⬜ F5 · 77 | 🟦 F#5 · 78 | ⬜ G5 · 79 |
| fila 2 | 🟩 C5 · 72 | 🟦 C#5 · 73 | ⬜ D5 · 74 | 🟦 D#5 · 75 |
| fila 1 (abajo) | 🟦 G#4 · 68 | ⬜ A4 · 69 | 🟦 A#4 · 70 | ⬜ B4 · 71 |

### Banco 8 · Zonas afinadas

42–57 seguidos: la zona 2 completa, la 3 completa y la 4 hasta +3. Las raíces en brillante. Para redobles que suben. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 Z4 · 54 | (🟩) Z4 +1 · 55 | (🟩) Z4 +2 · 56 | (🟩) Z4 +3 · 57 |
| fila 3 | (🟨) Z3 +2 · 50 | (🟨) Z3 +3 · 51 | (🟨) Z3 +4 · 52 | (🟨) Z3 +5 · 53 |
| fila 2 | (🟧) Z2 +4 · 46 | (🟧) Z2 +5 · 47 | 🟨 Z3 · 48 | (🟨) Z3 +1 · 49 |
| fila 1 (abajo) | 🟧 Z2 · 42 | (🟧) Z2 +1 · 43 | (🟧) Z2 +2 · 44 | (🟧) Z2 +3 · 45 |

## Qué significa cada color

Un color entre paréntesis, como (🟥), es el mismo color **apagado**.

**Bancos de Emulator II**: el color dice la zona.

| Color | Qué es |
|---|---|
| 🟥 rojo | zona 1 (bombo) |
| 🟧 naranja | zona 2 (caja) |
| 🟨 amarillo | zona 3 |
| 🟩 verde | zona 4 |
| 🟦 azul | zona 5 |
| 🟪 morado | zona 6 |
| ⬜ blanco | zona 7 |
| ⬛ gris | zona 8 |
| (color) | la misma zona, afinada (no en su raíz) |

**Bancos General MIDI**: el color dice la familia del sonido.

| Color | Qué es |
|---|---|
| 🟥 rojo | bombo |
| 🟧 naranja | caja, aro y palmas |
| 🟨 amarillo | hi-hat cerrado y de pedal |
| (🟨) amarillo apagado | hi-hat abierto |
| 🟦 azul | toms |
| ⬜ blanco | platos (crash, ride, china, splash) |
| 🟩 verde | percusión latina (bongós, congas, timbales, agogó) |
| 🟪 morado | percusión pequeña (pandereta, cencerro, claves, woodblocks…) |

**Bancos de notas**: el color dice qué nota es.

| Color | Qué es |
|---|---|
| 🟩 verde | do (C): para orientarte |
| ⬜ blanco | teclas blancas |
| 🟦 azul | teclas negras |

Qué hay en cada zona según el kit:

| Zona | Nota raíz | Beat Maker 707 | 606 | Trap | Synthetic | In The Air |
|---|---|---|---|---|---|---|
| 🟥 1 | 36 (0–41) | Kick | Kick | Kick | Kick | Kick |
| 🟧 2 | 42 (42–47) | Snare | Snare | Snare | Snare | Snare |
| 🟨 3 | 48 (48–53) | Clap | Clap | Closed Hat | Clap | Snare 2 |
| 🟩 4 | 54 (54–59) | Closed Hat | Closed Hat | Open Hat | Closed Hat | Closed Hat |
| 🟦 5 | 60 (60–65) | Open Hat | Open Hat | Ride | Open Hat | Open Hat |
| 🟪 6 | 66 (66–71) | Tambourine | Cymbal | Rim | Click | Guiro |
| ⬜ 7 | 72 (72–77) | Crash | Low Tom | Low Tom | Hit | Wood Low |
| ⬛ 8 | 78 (78–127) | Cowbell | High Tom | Mid Tom | Bleep | Wood High |

## Lo que el archivo no guarda (Glob)

Se pone a mano en la pestaña **Glob** de MidiSuite. Probablemente es común a todas las ranuras.

- **Transpose = 0.** Tu Glob estaba en −4: con eso cada pad sale 4 semitonos abajo y los kits suenan cruzados.
- **PadCurve:** la más lineal que encuentres. Este preset ya usa todo el rango de velocidad (1–127); la curva decide cuánto cuesta llegar a cada punto.
- **PadAftertouch: apagado.** En batería, la presión después del golpe solo manda mensajes que nadie usa.
- **Note Repeat** (con *Rate* y *Swing*): útil para redobles de hi-hat; queda sincronizado al tempo si *Sync* está activo.
- Si un pad suena más débil que los demás, **Pad Calibration Mode** en MidiSuite.
- Para comprobar qué manda cada pad: la vista *Midi Code* de MidiSuite.

## Por verificar

- [ ] Cargarlo, tocar cada banco y comprobar que suena lo que dice esta nota
- [ ] Que el pad 1 quede abajo a la izquierda
- [ ] Que `▶` `■` `●` manejen el DAW (modo SysEx, MMC)
- [ ] Exportarlo encima desde MidiSuite

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/M-VAVE SMC-PAD/4. Teclas.md`

```yaml
tipo: setup
estado: borrador
equipo: "[[0. M-VAVE SMC-PAD]]"
ranura: 4
archivo: "8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P4 Teclas.spc"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# P4 · Teclas

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Para qué sirve
> Tocar **pianos, pianos eléctricos, órganos, cuerdas y pads** de Analog Lab, como el *E.P 7070* de la pista *SMC pad* de Sonar. Los bancos 1–4 están en cuartas: tus formas de acordes y escalas de guitarra funcionan igual.

Generado el 2026-10-02, no exportado: pasa a `estado: vigente` cuando lo cargues, lo pruebes y lo exportes encima desde MidiSuite.

## Cargarlo

1. MidiSuite → menú *Presets* → **4**.
2. *Import* → `8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P4 Teclas.spc`.
3. **Save** (graba en el aparato todas las ranuras tal como están en MidiSuite).
4. Cierra MidiSuite antes de abrir el DAW o Analog Lab: ocupa el puerto MIDI.

## Sonidos

Bancos **Teclas** y **Pads** para tocar acordes y melodías; **Leads** para melodías; **Arpegiadores** para que el arpegio lo haga Analog Lab; **Texturas** y **FX** para fondos y transiciones.

| Banco de Analog Lab | Qué trae |
|---|---|
| [[8. Setup/4. Presets/Analog Lab V/2. Teclas\|Teclas]] | pianos, pianos eléctricos y órganos |
| [[8. Setup/4. Presets/Analog Lab V/3. Pads\|Pads]] | cuerdas, pads y coros |
| [[8. Setup/4. Presets/Analog Lab V/7. Leads\|Leads]] | sonidos para melodías |
| [[8. Setup/4. Presets/Analog Lab V/6. Arpegiadores\|Arpegiadores]] | presets que arpegian solos mientras mantienes las notas |
| [[8. Setup/4. Presets/Analog Lab V/8. Texturas\|Texturas]] | fondos que evolucionan solos |
| [[8. Setup/4. Presets/Analog Lab V/9. FX\|FX]] | efectos para transiciones y ambiente |

**Con los Arpegiadores:** mantén pulsado un pad (o varios, para arpegiar un acorde) y el arpegio sigue el tempo (el de Sonar, o el de la barra de arriba de Analog Lab si lo usas solo). Al soltar, para. Para que siga sonando sin mantener: botón **Hold** del arpegiador de Analog Lab, o **Latch** en Glob del SMC-PAD. Los cuatro primeros usan el arpegiador de Analog Lab (ahí puedes cambiar modo, velocidad y octavas); los otros cuatro traen su propia secuencia.

**Se usa en:** [[8. Setup/5. Áreas/1. Beats|Beats]], [[8. Setup/5. Áreas/2. Canción|Canción]], [[8. Setup/5. Áreas/3. Atmósferas|Atmósferas]].

## Botones

| Botón | Modo | Qué hace |
|---|---|---|
| `<` | CC Push | CC 28 → Analog Lab: preset **anterior** |
| `>` | CC Push | CC 29 → Analog Lab: preset **siguiente** |
| `▶` | SysEx | MMC Play → el DAW arranca |
| `■` | SysEx | MMC Stop → el DAW para |
| `●` | SysEx | MMC Record → el DAW graba |

## Perillas

*KNOB BANK* alterna entre el banco A y el B.

| Perilla | Banco A | Banco B |
|---|---|---|
| 1 | canal 1 · CC 74 · Brightness (macro 1) | canal 1 · CC 73 · fader 1 |
| 2 | canal 1 · CC 71 · Timbre (macro 2) | canal 1 · CC 75 · fader 2 |
| 3 | canal 1 · CC 76 · Time (macro 3) | canal 1 · CC 79 · fader 3 |
| 4 | canal 1 · CC 77 · Movement (macro 4) | canal 1 · CC 72 · fader 4 |
| 5 | canal 1 · CC 93 · FX A | canal 1 · CC 80 · fader 5 |
| 6 | canal 1 · CC 19 · Delay | canal 1 · CC 81 · fader 6 |
| 7 | canal 1 · CC 16 · Reverb | canal 1 · CC 82 · fader 7 |
| 8 | canal 1 · CC 17 · Master (volumen) | canal 1 · CC 83 · fader 8 |

Las perillas mandan los CC estándar de Arturia: en Analog Lab funcionan con la configuración *Beat Maker* ([[8. Setup/1. Software/2. Analog Lab V#Configuración MIDI Beat Maker|ver Analog Lab]]) y con la *Default* de fábrica. Los faders hacen lo que diga cada preset de Analog Lab: su nota de banco dice qué hace cada uno.

## Pads

*PAD BANK* cambia de banco. El pad 1 queda **abajo a la izquierda** (supuesto; ver la nota del equipo). Cada casilla: color, sonido o nota, y número MIDI.

### Banco 1 · Cuartas desde E2, trastes 0–3

Cada fila sube una cuarta (5 semitonos), como las cuerdas mi-la-re-sol; cada pad, un semitono. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬜ G3 · 55 | 🟦 G#3 · 56 | ⬜ A3 · 57 | 🟦 A#3 · 58 |
| fila 3 | ⬜ D3 · 50 | 🟦 D#3 · 51 | ⬜ E3 · 52 | ⬜ F3 · 53 |
| fila 2 | ⬜ A2 · 45 | 🟦 A#2 · 46 | ⬜ B2 · 47 | 🟩 C3 · 48 |
| fila 1 (abajo) | ⬜ E2 · 40 | ⬜ F2 · 41 | 🟦 F#2 · 42 | ⬜ G2 · 43 |

### Banco 2 · Cuartas desde E2, trastes 4–7

Cada fila sube una cuarta (5 semitonos), como las cuerdas mi-la-re-sol; cada pad, un semitono. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬜ B3 · 59 | 🟩 C4 · 60 | 🟦 C#4 · 61 | ⬜ D4 · 62 |
| fila 3 | 🟦 F#3 · 54 | ⬜ G3 · 55 | 🟦 G#3 · 56 | ⬜ A3 · 57 |
| fila 2 | 🟦 C#3 · 49 | ⬜ D3 · 50 | 🟦 D#3 · 51 | ⬜ E3 · 52 |
| fila 1 (abajo) | 🟦 G#2 · 44 | ⬜ A2 · 45 | 🟦 A#2 · 46 | ⬜ B2 · 47 |

### Banco 3 · Cuartas desde E3, trastes 0–3

Cada fila sube una cuarta (5 semitonos), como las cuerdas mi-la-re-sol; cada pad, un semitono. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬜ G4 · 67 | 🟦 G#4 · 68 | ⬜ A4 · 69 | 🟦 A#4 · 70 |
| fila 3 | ⬜ D4 · 62 | 🟦 D#4 · 63 | ⬜ E4 · 64 | ⬜ F4 · 65 |
| fila 2 | ⬜ A3 · 57 | 🟦 A#3 · 58 | ⬜ B3 · 59 | 🟩 C4 · 60 |
| fila 1 (abajo) | ⬜ E3 · 52 | ⬜ F3 · 53 | 🟦 F#3 · 54 | ⬜ G3 · 55 |

### Banco 4 · Cuartas desde E3, trastes 4–7

Cada fila sube una cuarta (5 semitonos), como las cuerdas mi-la-re-sol; cada pad, un semitono. Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬜ B4 · 71 | 🟩 C5 · 72 | 🟦 C#5 · 73 | ⬜ D5 · 74 |
| fila 3 | 🟦 F#4 · 66 | ⬜ G4 · 67 | 🟦 G#4 · 68 | ⬜ A4 · 69 |
| fila 2 | 🟦 C#4 · 61 | ⬜ D4 · 62 | 🟦 D#4 · 63 | ⬜ E4 · 64 |
| fila 1 (abajo) | 🟦 G#3 · 56 | ⬜ A3 · 57 | 🟦 A#3 · 58 | ⬜ B3 · 59 |

### Banco 5 · Cromático desde C2

16 semitonos seguidos, cuatro por fila (como un MPC). Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C3 · 48 | 🟦 C#3 · 49 | ⬜ D3 · 50 | 🟦 D#3 · 51 |
| fila 3 | 🟦 G#2 · 44 | ⬜ A2 · 45 | 🟦 A#2 · 46 | ⬜ B2 · 47 |
| fila 2 | ⬜ E2 · 40 | ⬜ F2 · 41 | 🟦 F#2 · 42 | ⬜ G2 · 43 |
| fila 1 (abajo) | 🟩 C2 · 36 | 🟦 C#2 · 37 | ⬜ D2 · 38 | 🟦 D#2 · 39 |

### Banco 6 · Cromático desde C3

16 semitonos seguidos, cuatro por fila (como un MPC). Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C4 · 60 | 🟦 C#4 · 61 | ⬜ D4 · 62 | 🟦 D#4 · 63 |
| fila 3 | 🟦 G#3 · 56 | ⬜ A3 · 57 | 🟦 A#3 · 58 | ⬜ B3 · 59 |
| fila 2 | ⬜ E3 · 52 | ⬜ F3 · 53 | 🟦 F#3 · 54 | ⬜ G3 · 55 |
| fila 1 (abajo) | 🟩 C3 · 48 | 🟦 C#3 · 49 | ⬜ D3 · 50 | 🟦 D#3 · 51 |

### Banco 7 · Cromático desde C4

16 semitonos seguidos, cuatro por fila (como un MPC). Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C5 · 72 | 🟦 C#5 · 73 | ⬜ D5 · 74 | 🟦 D#5 · 75 |
| fila 3 | 🟦 G#4 · 68 | ⬜ A4 · 69 | 🟦 A#4 · 70 | ⬜ B4 · 71 |
| fila 2 | ⬜ E4 · 64 | ⬜ F4 · 65 | 🟦 F#4 · 66 | ⬜ G4 · 67 |
| fila 1 (abajo) | 🟩 C4 · 60 | 🟦 C#4 · 61 | ⬜ D4 · 62 | 🟦 D#4 · 63 |

### Banco 8 · Cromático desde C5

16 semitonos seguidos, cuatro por fila (como un MPC). Canal 1.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C6 · 84 | 🟦 C#6 · 85 | ⬜ D6 · 86 | 🟦 D#6 · 87 |
| fila 3 | 🟦 G#5 · 80 | ⬜ A5 · 81 | 🟦 A#5 · 82 | ⬜ B5 · 83 |
| fila 2 | ⬜ E5 · 76 | ⬜ F5 · 77 | 🟦 F#5 · 78 | ⬜ G5 · 79 |
| fila 1 (abajo) | 🟩 C5 · 72 | 🟦 C#5 · 73 | ⬜ D5 · 74 | 🟦 D#5 · 75 |

## Qué significa cada color

Un color entre paréntesis, como (🟥), es el mismo color **apagado**.

**Bancos de notas**: el color dice qué nota es.

| Color | Qué es |
|---|---|
| 🟩 verde | do (C): para orientarte |
| ⬜ blanco | teclas blancas |
| 🟦 azul | teclas negras |

## Lo que el archivo no guarda (Glob)

Se pone a mano en la pestaña **Glob** de MidiSuite. Probablemente es común a todas las ranuras.

- **Transpose = 0** (estaba en −4), salvo que quieras transportar a propósito.
- **PadCurve:** la más lineal; el rango de velocidad ya es 1–127.
- **PadAftertouch:** encendido si el preset de Analog Lab usa la presión (sale como *AfterTouch* en sus ajustes); si no, apagado.
- **Latch:** encendido si quieres que un pad siga sonando al soltarlo (texturas, arpegiadores).
- Si un pad suena más débil que los demás, **Pad Calibration Mode** en MidiSuite.
- Para comprobar qué manda cada pad: la vista *Midi Code* de MidiSuite.

## Por verificar

- [ ] Cargarlo, tocar cada banco y comprobar que suena lo que dice esta nota
- [ ] Que el pad 1 quede abajo a la izquierda
- [ ] Que `▶` `■` `●` manejen el DAW (modo SysEx, MMC)
- [ ] Exportarlo encima desde MidiSuite

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/M-VAVE SMC-PAD/5. Ritmo.md`

```yaml
tipo: setup
estado: borrador
equipo: "[[0. M-VAVE SMC-PAD]]"
ranura: 5
archivo: "8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P5 Ritmo.spc"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# P5 · Ritmo

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Para qué sirve
> Practicar **lectura rítmica** (el curso [[2. Cursos/2. Udemy - Lectura rítmica/00. Curso|Lectura rítmica]]): tocar los ejercicios con los dedos, contra el metrónomo, y grabar la toma con `●`. Los bancos 1–4 suenan con los kits *Beat Maker* de Analog Lab; los 5–8, con General MIDI (Next o MuseScore).

Generado el 2026-10-02, no exportado: pasa a `estado: vigente` cuando lo cargues, lo pruebes y lo exportes encima desde MidiSuite.

## Cargarlo

1. MidiSuite → menú *Presets* → **5**.
2. *Import* → `8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P5 Ritmo.spc`.
3. **Save** (graba en el aparato todas las ranuras tal como están en MidiSuite).
4. Cierra MidiSuite antes de abrir el DAW o Analog Lab: ocupa el puerto MIDI.

## Sonidos

Bancos 1–4: **Beat Maker 707** del banco *Beat Maker* (su caja es la más clara). Bancos 5–8: **General MIDI Drums** de Next.

| Banco de Analog Lab | Qué trae |
|---|---|
| [[8. Setup/4. Presets/Analog Lab V/1. Beat Maker\|Beat Maker]] | kits de batería de Emulator II |

## Botones

| Botón | Modo | Qué hace |
|---|---|---|
| `<` | CC Push | CC 28 → Analog Lab: preset **anterior** |
| `>` | CC Push | CC 29 → Analog Lab: preset **siguiente** |
| `▶` | SysEx | MMC Play → el DAW arranca |
| `■` | SysEx | MMC Stop → el DAW para |
| `●` | SysEx | MMC Record → el DAW graba |

## Perillas

*KNOB BANK* alterna entre el banco A y el B.

| Perilla | Banco A | Banco B |
|---|---|---|
| 1 | canal 1 · CC 74 · Brightness (macro 1) | canal 1 · CC 73 · fader 1 |
| 2 | canal 1 · CC 71 · Timbre (macro 2) | canal 1 · CC 75 · fader 2 |
| 3 | canal 1 · CC 76 · Time (macro 3) | canal 1 · CC 79 · fader 3 |
| 4 | canal 1 · CC 77 · Movement (macro 4) | canal 1 · CC 72 · fader 4 |
| 5 | canal 1 · CC 93 · FX A | canal 1 · CC 80 · fader 5 |
| 6 | canal 1 · CC 19 · Delay | canal 1 · CC 81 · fader 6 |
| 7 | canal 1 · CC 16 · Reverb | canal 1 · CC 82 · fader 7 |
| 8 | canal 1 · CC 17 · Master (volumen) | canal 1 · CC 83 · fader 8 |

Las perillas mandan los CC estándar de Arturia: en Analog Lab funcionan con la configuración *Beat Maker* ([[8. Setup/1. Software/2. Analog Lab V#Configuración MIDI Beat Maker|ver Analog Lab]]) y con la *Default* de fábrica. Los faders hacen lo que diga cada preset de Analog Lab: su nota de banco dice qué hace cada uno.

## Pads

*PAD BANK* cambia de banco. El pad 1 queda **abajo a la izquierda** (supuesto; ver la nota del equipo). Cada casilla: color, sonido o nota, y número MIDI.

### Banco 1 · Una voz

Los 16 pads suenan igual: el ritmo sin distracciones. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟧 Z2 · 42 | 🟧 Z2 · 42 | 🟧 Z2 · 42 | 🟧 Z2 · 42 |
| fila 3 | 🟧 Z2 · 42 | 🟧 Z2 · 42 | 🟧 Z2 · 42 | 🟧 Z2 · 42 |
| fila 2 | 🟧 Z2 · 42 | 🟧 Z2 · 42 | 🟧 Z2 · 42 | 🟧 Z2 · 42 |
| fila 1 (abajo) | 🟧 Z2 · 42 | 🟧 Z2 · 42 | 🟧 Z2 · 42 | 🟧 Z2 · 42 |

### Banco 2 · Pulso y ritmo

Columnas 1–2: el pulso (bombo) con una mano. Columnas 3–4: el ritmo del ejercicio (caja) con la otra. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟥 Z1 · 36 | 🟥 Z1 · 36 | 🟧 Z2 · 42 | 🟧 Z2 · 42 |
| fila 3 | 🟥 Z1 · 36 | 🟥 Z1 · 36 | 🟧 Z2 · 42 | 🟧 Z2 · 42 |
| fila 2 | 🟥 Z1 · 36 | 🟥 Z1 · 36 | 🟧 Z2 · 42 | 🟧 Z2 · 42 |
| fila 1 (abajo) | 🟥 Z1 · 36 | 🟥 Z1 · 36 | 🟧 Z2 · 42 | 🟧 Z2 · 42 |

### Banco 3 · Dos manos

Columnas 1–2 caja (mano izquierda), 3–4 zona 4 (mano derecha): para subdivisiones alternando manos y oír si van parejas. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟧 Z2 · 42 | 🟧 Z2 · 42 | 🟩 Z4 · 54 | 🟩 Z4 · 54 |
| fila 3 | 🟧 Z2 · 42 | 🟧 Z2 · 42 | 🟩 Z4 · 54 | 🟩 Z4 · 54 |
| fila 2 | 🟧 Z2 · 42 | 🟧 Z2 · 42 | 🟩 Z4 · 54 | 🟩 Z4 · 54 |
| fila 1 (abajo) | 🟧 Z2 · 42 | 🟧 Z2 · 42 | 🟩 Z4 · 54 | 🟩 Z4 · 54 |

### Banco 4 · Kit por columnas

Una columna por sonido: zonas 1, 2, 4 y 5. Para leer ritmos de batería a varias voces. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟥 Z1 · 36 | 🟧 Z2 · 42 | 🟩 Z4 · 54 | 🟦 Z5 · 60 |
| fila 3 | 🟥 Z1 · 36 | 🟧 Z2 · 42 | 🟩 Z4 · 54 | 🟦 Z5 · 60 |
| fila 2 | 🟥 Z1 · 36 | 🟧 Z2 · 42 | 🟩 Z4 · 54 | 🟦 Z5 · 60 |
| fila 1 (abajo) | 🟥 Z1 · 36 | 🟧 Z2 · 42 | 🟩 Z4 · 54 | 🟦 Z5 · 60 |

### Banco 5 · Una voz (GM)

Los 16 pads con el aro (side stick). Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟧 Aro · 37 | 🟧 Aro · 37 | 🟧 Aro · 37 | 🟧 Aro · 37 |
| fila 3 | 🟧 Aro · 37 | 🟧 Aro · 37 | 🟧 Aro · 37 | 🟧 Aro · 37 |
| fila 2 | 🟧 Aro · 37 | 🟧 Aro · 37 | 🟧 Aro · 37 | 🟧 Aro · 37 |
| fila 1 (abajo) | 🟧 Aro · 37 | 🟧 Aro · 37 | 🟧 Aro · 37 | 🟧 Aro · 37 |

### Banco 6 · Pulso y ritmo (GM)

Columnas 1–2 bombo (pulso), 3–4 hi-hat cerrado (ritmo). Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟥 Bombo · 36 | 🟥 Bombo · 36 | 🟨 Hi-hat cerrado · 42 | 🟨 Hi-hat cerrado · 42 |
| fila 3 | 🟥 Bombo · 36 | 🟥 Bombo · 36 | 🟨 Hi-hat cerrado · 42 | 🟨 Hi-hat cerrado · 42 |
| fila 2 | 🟥 Bombo · 36 | 🟥 Bombo · 36 | 🟨 Hi-hat cerrado · 42 | 🟨 Hi-hat cerrado · 42 |
| fila 1 (abajo) | 🟥 Bombo · 36 | 🟥 Bombo · 36 | 🟨 Hi-hat cerrado · 42 | 🟨 Hi-hat cerrado · 42 |

### Banco 7 · Dos manos (GM)

Columnas 1–2 woodblock agudo, 3–4 woodblock grave: el par clásico para practicar. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟪 Woodblock agudo · 76 | 🟪 Woodblock agudo · 76 | 🟪 Woodblock grave · 77 | 🟪 Woodblock grave · 77 |
| fila 3 | 🟪 Woodblock agudo · 76 | 🟪 Woodblock agudo · 76 | 🟪 Woodblock grave · 77 | 🟪 Woodblock grave · 77 |
| fila 2 | 🟪 Woodblock agudo · 76 | 🟪 Woodblock agudo · 76 | 🟪 Woodblock grave · 77 | 🟪 Woodblock grave · 77 |
| fila 1 (abajo) | 🟪 Woodblock agudo · 76 | 🟪 Woodblock agudo · 76 | 🟪 Woodblock grave · 77 | 🟪 Woodblock grave · 77 |

### Banco 8 · Kit por columnas (GM)

Bombo, caja, hi-hat cerrado y abierto, uno por columna. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟥 Bombo · 36 | 🟧 Caja · 38 | 🟨 Hi-hat cerrado · 42 | (🟨) Hi-hat abierto · 46 |
| fila 3 | 🟥 Bombo · 36 | 🟧 Caja · 38 | 🟨 Hi-hat cerrado · 42 | (🟨) Hi-hat abierto · 46 |
| fila 2 | 🟥 Bombo · 36 | 🟧 Caja · 38 | 🟨 Hi-hat cerrado · 42 | (🟨) Hi-hat abierto · 46 |
| fila 1 (abajo) | 🟥 Bombo · 36 | 🟧 Caja · 38 | 🟨 Hi-hat cerrado · 42 | (🟨) Hi-hat abierto · 46 |

## Qué significa cada color

Un color entre paréntesis, como (🟥), es el mismo color **apagado**.

**Bancos de Emulator II**: el color dice la zona.

| Color | Qué es |
|---|---|
| 🟥 rojo | zona 1 (bombo) |
| 🟧 naranja | zona 2 (caja) |
| 🟩 verde | zona 4 |
| 🟦 azul | zona 5 |
| (color) | la misma zona, afinada (no en su raíz) |

**Bancos General MIDI**: el color dice la familia del sonido.

| Color | Qué es |
|---|---|
| 🟥 rojo | bombo |
| 🟧 naranja | caja, aro y palmas |
| 🟨 amarillo | hi-hat cerrado y de pedal |
| (🟨) amarillo apagado | hi-hat abierto |
| 🟪 morado | percusión pequeña (pandereta, cencerro, claves, woodblocks…) |

Qué hay en cada zona según el kit:

| Zona | Nota raíz | Beat Maker 707 | 606 | Trap | Synthetic | In The Air |
|---|---|---|---|---|---|---|
| 🟥 1 | 36 (0–41) | Kick | Kick | Kick | Kick | Kick |
| 🟧 2 | 42 (42–47) | Snare | Snare | Snare | Snare | Snare |
| 🟨 3 | 48 (48–53) | Clap | Clap | Closed Hat | Clap | Snare 2 |
| 🟩 4 | 54 (54–59) | Closed Hat | Closed Hat | Open Hat | Closed Hat | Closed Hat |
| 🟦 5 | 60 (60–65) | Open Hat | Open Hat | Ride | Open Hat | Open Hat |
| 🟪 6 | 66 (66–71) | Tambourine | Cymbal | Rim | Click | Guiro |
| ⬜ 7 | 72 (72–77) | Crash | Low Tom | Low Tom | Hit | Wood Low |
| ⬛ 8 | 78 (78–127) | Cowbell | High Tom | Mid Tom | Bleep | Wood High |

## Lo que el archivo no guarda (Glob)

Se pone a mano en la pestaña **Glob** de MidiSuite. Probablemente es común a todas las ranuras.

- **Transpose = 0.** Tu Glob estaba en −4: con eso cada pad sale 4 semitonos abajo y los kits suenan cruzados.
- **PadCurve:** la más lineal que encuentres. Este preset ya usa todo el rango de velocidad (1–127); la curva decide cuánto cuesta llegar a cada punto.
- **PadAftertouch: apagado.** En batería, la presión después del golpe solo manda mensajes que nadie usa.
- **Note Repeat** (con *Rate* y *Swing*): útil para redobles de hi-hat; queda sincronizado al tempo si *Sync* está activo.
- Si un pad suena más débil que los demás, **Pad Calibration Mode** en MidiSuite.
- Para comprobar qué manda cada pad: la vista *Midi Code* de MidiSuite.

## Por verificar

- [ ] Cargarlo, tocar cada banco y comprobar que suena lo que dice esta nota
- [ ] Que el pad 1 quede abajo a la izquierda
- [ ] Que `▶` `■` `●` manejen el DAW (modo SysEx, MMC)
- [ ] Exportarlo encima desde MidiSuite

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/M-VAVE SMC-PAD/6. Mackie.md`

```yaml
tipo: setup
estado: borrador
equipo: "[[0. M-VAVE SMC-PAD]]"
ranura: 6
archivo: "8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P6 Mackie.spc"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# P6 · Mackie

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Para qué sirve
> Manejar **Sonar** con el protocolo **Mackie Control**: transporte, bancos de pistas y *rec/solo/mute/select* de 8 pistas. Es el preset 2 de fábrica, byte a byte: lo diseñó M-VAVE.

Es copia exacta del preset 2 de fábrica de MidiSuite (`bin/SPB.bin`).

## Cargarlo

1. MidiSuite → menú *Presets* → **6**.
2. *Import* → `8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P6 Mackie.spc`.
3. **Save** (graba en el aparato todas las ranuras tal como están en MidiSuite).
4. Cierra MidiSuite antes de abrir el DAW o Analog Lab: ocupa el puerto MIDI.

## Sonidos

Ninguno: este preset no toca sonidos, maneja el DAW.

## Botones

| Botón | Modo | Qué hace |
|---|---|---|
| `<` | Mackie | nota MCU 46 → banco de pistas anterior |
| `>` | Mackie | nota MCU 47 → banco de pistas siguiente |
| `▶` | Mackie | nota MCU 94 → Play |
| `■` | Mackie | nota MCU 93 → Stop |
| `●` | Mackie | nota MCU 95 → Record |

## Perillas

*KNOB BANK* alterna entre el banco A y el B.

| Perilla | Banco A | Banco B |
|---|---|---|
| 1 | canal 1 · CC 30 · de fábrica | canal 1 · CC 38 · de fábrica |
| 2 | canal 2 · CC 31 · de fábrica | canal 1 · CC 39 · de fábrica |
| 3 | canal 3 · CC 32 · de fábrica | canal 1 · CC 40 · de fábrica |
| 4 | canal 4 · CC 33 · de fábrica | canal 1 · CC 41 · de fábrica |
| 5 | canal 5 · CC 34 · de fábrica | canal 1 · CC 42 · de fábrica |
| 6 | canal 6 · CC 35 · de fábrica | canal 1 · CC 43 · de fábrica |
| 7 | canal 7 · CC 36 · de fábrica | canal 1 · CC 44 · de fábrica |
| 8 | canal 8 · CC 37 · de fábrica | canal 1 · CC 45 · de fábrica |

Para que funcione, en Sonar: *Edit → Preferences → MIDI → Control Surfaces* → añadir **Mackie Control** con la entrada y la salida del SMC-PAD. Mientras esa superficie esté activa, las notas por el canal 1 de otros presets (P2, P4) también le llegan como órdenes: desactívala cuando toques.

## Pads

*PAD BANK* cambia de banco. El pad 1 queda **abajo a la izquierda** (supuesto; ver la nota del equipo). Cada casilla: color, sonido o nota, y número MIDI.

### Banco 1 · Notas de fábrica

Notas normales por el canal 10 (las de fábrica). Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬜ E0 · 16 | ⬜ F0 · 17 | ⬜ F#0 · 18 | ⬜ G0 · 19 |
| fila 3 | ⬜ C0 · 12 | ⬜ C#0 · 13 | ⬜ D0 · 14 | ⬜ D#0 · 15 |
| fila 2 | ⬜ G#-1 · 8 | ⬜ A-1 · 9 | ⬜ A#-1 · 10 | ⬜ B-1 · 11 |
| fila 1 (abajo) | ⬜ E-1 · 4 | ⬜ F-1 · 5 | ⬜ F#-1 · 6 | ⬜ G-1 · 7 |

### Banco 2 · Notas de fábrica

Notas normales por el canal 10 (las de fábrica). Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟨 G#1 · 32 | 🟨 A1 · 33 | 🟨 A#1 · 34 | 🟨 B1 · 35 |
| fila 3 | 🟨 E1 · 28 | 🟨 F1 · 29 | 🟨 F#1 · 30 | 🟨 G1 · 31 |
| fila 2 | 🟨 C1 · 24 | 🟨 C#1 · 25 | 🟨 D1 · 26 | 🟨 D#1 · 27 |
| fila 1 (abajo) | 🟨 G#0 · 20 | 🟨 A0 · 21 | 🟨 A#0 · 22 | 🟨 B0 · 23 |

### Banco 3 · Pistas 1–4

Botones de pista del protocolo Mackie: fila 1 *select*, fila 2 *rec*, fila 3 *solo*, fila 4 *mute*. Canal 1, 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟨 Mute 1 · 16 | 🟨 Mute 2 · 17 | 🟨 Mute 3 · 18 | 🟨 Mute 4 · 19 |
| fila 3 | 🟦 Solo 1 · 8 | 🟦 Solo 2 · 9 | 🟦 Solo 3 · 10 | 🟦 Solo 4 · 11 |
| fila 2 | 🟥 Rec 1 · 0 | 🟥 Rec 2 · 1 | 🟥 Rec 3 · 2 | 🟥 Rec 4 · 3 |
| fila 1 (abajo) | 🟩 Select 1 · 24 | 🟩 Select 2 · 25 | 🟩 Select 3 · 26 | 🟩 Select 4 · 27 |

### Banco 4 · Notas de fábrica

Notas normales por el canal 10 (las de fábrica). Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟦 E4 · 64 | 🟦 F4 · 65 | 🟦 F#4 · 66 | 🟦 G4 · 67 |
| fila 3 | 🟦 C4 · 60 | 🟦 C#4 · 61 | 🟦 D4 · 62 | 🟦 D#4 · 63 |
| fila 2 | 🟦 G#3 · 56 | 🟦 A3 · 57 | 🟦 A#3 · 58 | 🟦 B3 · 59 |
| fila 1 (abajo) | 🟦 E3 · 52 | 🟦 F3 · 53 | 🟦 F#3 · 54 | 🟦 G3 · 55 |

### Banco 5 · Notas de fábrica

Notas normales por el canal 10 (las de fábrica). Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 G#5 · 80 | 🟩 A5 · 81 | 🟩 A#5 · 82 | 🟩 B5 · 83 |
| fila 3 | 🟩 E5 · 76 | 🟩 F5 · 77 | 🟩 F#5 · 78 | 🟩 G5 · 79 |
| fila 2 | 🟩 C5 · 72 | 🟩 C#5 · 73 | 🟩 D5 · 74 | 🟩 D#5 · 75 |
| fila 1 (abajo) | 🟩 G#4 · 68 | 🟩 A4 · 69 | 🟩 A#4 · 70 | 🟩 B4 · 71 |

### Banco 6 · Notas de fábrica

Notas normales por el canal 10 (las de fábrica). Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟥 C7 · 96 | 🟥 C#7 · 97 | 🟥 D7 · 98 | 🟥 D#7 · 99 |
| fila 3 | 🟥 G#6 · 92 | 🟥 A6 · 93 | 🟥 A#6 · 94 | 🟥 B6 · 95 |
| fila 2 | 🟥 E6 · 88 | 🟥 F6 · 89 | 🟥 F#6 · 90 | 🟥 G6 · 91 |
| fila 1 (abajo) | 🟥 C6 · 84 | 🟥 C#6 · 85 | 🟥 D6 · 86 | 🟥 D#6 · 87 |

### Banco 7 · Notas de fábrica

Notas normales por el canal 10 (las de fábrica). Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟦 E8 · 112 | 🟦 F8 · 113 | 🟦 F#8 · 114 | 🟦 G8 · 115 |
| fila 3 | 🟦 C8 · 108 | 🟦 C#8 · 109 | 🟦 D8 · 110 | 🟦 D#8 · 111 |
| fila 2 | 🟦 G#7 · 104 | 🟦 A7 · 105 | 🟦 A#7 · 106 | 🟦 B7 · 107 |
| fila 1 (abajo) | 🟦 E7 · 100 | 🟦 F7 · 101 | 🟦 F#7 · 102 | 🟦 G7 · 103 |

### Banco 8 · Pistas 5–8

Lo mismo para las pistas 5–8. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟨 Mute 5 · 20 | 🟨 Mute 6 · 21 | 🟨 Mute 7 · 22 | 🟨 Mute 8 · 23 |
| fila 3 | 🟦 Solo 5 · 12 | 🟦 Solo 6 · 13 | 🟦 Solo 7 · 14 | 🟦 Solo 8 · 15 |
| fila 2 | 🟥 Rec 5 · 4 | 🟥 Rec 6 · 5 | 🟥 Rec 7 · 6 | 🟥 Rec 8 · 7 |
| fila 1 (abajo) | 🟩 Select 5 · 28 | 🟩 Select 6 · 29 | 🟩 Select 7 · 30 | 🟩 Select 8 · 31 |

## Qué significa cada color

Un color entre paréntesis, como (🟥), es el mismo color **apagado**.

Son los de fábrica. En los bancos 3 y 8: 🟩 *select*, 🟥 *rec*, 🟦 *solo*, 🟨 *mute*.

## Lo que el archivo no guarda (Glob)

Se pone a mano en la pestaña **Glob** de MidiSuite. Probablemente es común a todas las ranuras.

- No dependen de Glob más que la curva de los pads.
- Si un pad suena más débil que los demás, **Pad Calibration Mode** en MidiSuite.
- Para comprobar qué manda cada pad: la vista *Midi Code* de MidiSuite.

## Por verificar

- [ ] Cargarlo, tocar cada banco y comprobar que suena lo que dice esta nota
- [ ] Exportarlo encima desde MidiSuite

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/M-VAVE SMC-PAD/7. MIDI Learn.md`

```yaml
tipo: setup
estado: borrador
equipo: "[[0. M-VAVE SMC-PAD]]"
ranura: 7
archivo: "8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P7 MIDI Learn.spc"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# P7 · MIDI Learn

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Para qué sirve
> Asignar cosas con **MIDI Learn** en cualquier programa (Sonar, MuseScore, Strudel…) **sin mover nada de Analog Lab**: todos sus CC están libres en la configuración *Beat Maker*, y los pads mandan las 128 notas por el canal 16.

Generado el 2026-10-02, no exportado: pasa a `estado: vigente` cuando lo cargues, lo pruebes y lo exportes encima desde MidiSuite.

## Cargarlo

1. MidiSuite → menú *Presets* → **7**.
2. *Import* → `8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P7 MIDI Learn.spc`.
3. **Save** (graba en el aparato todas las ranuras tal como están en MidiSuite).
4. Cierra MidiSuite antes de abrir el DAW o Analog Lab: ocupa el puerto MIDI.

## Sonidos

Ninguno: los pads son disparadores, no instrumentos.

## Botones

| Botón | Modo | Qué hace |
|---|---|---|
| `<` | CC Push | CC 86 (libre) |
| `>` | CC Push | CC 87 (libre) |
| `▶` | SysEx | MMC Play |
| `■` | SysEx | MMC Stop |
| `●` | SysEx | MMC Record |

## Perillas

*KNOB BANK* alterna entre el banco A y el B.

| Perilla | Banco A | Banco B |
|---|---|---|
| 1 | canal 1 · CC 102 · libre | canal 1 · CC 3 · libre |
| 2 | canal 1 · CC 103 · libre | canal 1 · CC 9 · libre |
| 3 | canal 1 · CC 104 · libre | canal 1 · CC 14 · libre |
| 4 | canal 1 · CC 105 · libre | canal 1 · CC 20 · libre |
| 5 | canal 1 · CC 106 · libre | canal 1 · CC 21 · libre |
| 6 | canal 1 · CC 107 · libre | canal 1 · CC 89 · libre |
| 7 | canal 1 · CC 108 · libre | canal 1 · CC 90 · libre |
| 8 | canal 1 · CC 109 · libre | canal 1 · CC 110 · libre |

## Pads

*PAD BANK* cambia de banco. El pad 1 queda **abajo a la izquierda** (supuesto; ver la nota del equipo). Cada casilla: color, sonido o nota, y número MIDI.

### Banco 1 · Notas 0–15 (canal 16)

Un color por banco, para saber en cuál estás. Canal 16.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟥 C0 · 12 | 🟥 C#0 · 13 | 🟥 D0 · 14 | 🟥 D#0 · 15 |
| fila 3 | 🟥 G#-1 · 8 | 🟥 A-1 · 9 | 🟥 A#-1 · 10 | 🟥 B-1 · 11 |
| fila 2 | 🟥 E-1 · 4 | 🟥 F-1 · 5 | 🟥 F#-1 · 6 | 🟥 G-1 · 7 |
| fila 1 (abajo) | 🟥 C-1 · 0 | 🟥 C#-1 · 1 | 🟥 D-1 · 2 | 🟥 D#-1 · 3 |

### Banco 2 · Notas 16–31 (canal 16)

Un color por banco, para saber en cuál estás. Canal 16.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟧 E1 · 28 | 🟧 F1 · 29 | 🟧 F#1 · 30 | 🟧 G1 · 31 |
| fila 3 | 🟧 C1 · 24 | 🟧 C#1 · 25 | 🟧 D1 · 26 | 🟧 D#1 · 27 |
| fila 2 | 🟧 G#0 · 20 | 🟧 A0 · 21 | 🟧 A#0 · 22 | 🟧 B0 · 23 |
| fila 1 (abajo) | 🟧 E0 · 16 | 🟧 F0 · 17 | 🟧 F#0 · 18 | 🟧 G0 · 19 |

### Banco 3 · Notas 32–47 (canal 16)

Un color por banco, para saber en cuál estás. Canal 16.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟨 G#2 · 44 | 🟨 A2 · 45 | 🟨 A#2 · 46 | 🟨 B2 · 47 |
| fila 3 | 🟨 E2 · 40 | 🟨 F2 · 41 | 🟨 F#2 · 42 | 🟨 G2 · 43 |
| fila 2 | 🟨 C2 · 36 | 🟨 C#2 · 37 | 🟨 D2 · 38 | 🟨 D#2 · 39 |
| fila 1 (abajo) | 🟨 G#1 · 32 | 🟨 A1 · 33 | 🟨 A#1 · 34 | 🟨 B1 · 35 |

### Banco 4 · Notas 48–63 (canal 16)

Un color por banco, para saber en cuál estás. Canal 16.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C4 · 60 | 🟩 C#4 · 61 | 🟩 D4 · 62 | 🟩 D#4 · 63 |
| fila 3 | 🟩 G#3 · 56 | 🟩 A3 · 57 | 🟩 A#3 · 58 | 🟩 B3 · 59 |
| fila 2 | 🟩 E3 · 52 | 🟩 F3 · 53 | 🟩 F#3 · 54 | 🟩 G3 · 55 |
| fila 1 (abajo) | 🟩 C3 · 48 | 🟩 C#3 · 49 | 🟩 D3 · 50 | 🟩 D#3 · 51 |

### Banco 5 · Notas 64–79 (canal 16)

Un color por banco, para saber en cuál estás. Canal 16.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟦 E5 · 76 | 🟦 F5 · 77 | 🟦 F#5 · 78 | 🟦 G5 · 79 |
| fila 3 | 🟦 C5 · 72 | 🟦 C#5 · 73 | 🟦 D5 · 74 | 🟦 D#5 · 75 |
| fila 2 | 🟦 G#4 · 68 | 🟦 A4 · 69 | 🟦 A#4 · 70 | 🟦 B4 · 71 |
| fila 1 (abajo) | 🟦 E4 · 64 | 🟦 F4 · 65 | 🟦 F#4 · 66 | 🟦 G4 · 67 |

### Banco 6 · Notas 80–95 (canal 16)

Un color por banco, para saber en cuál estás. Canal 16.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟪 G#6 · 92 | 🟪 A6 · 93 | 🟪 A#6 · 94 | 🟪 B6 · 95 |
| fila 3 | 🟪 E6 · 88 | 🟪 F6 · 89 | 🟪 F#6 · 90 | 🟪 G6 · 91 |
| fila 2 | 🟪 C6 · 84 | 🟪 C#6 · 85 | 🟪 D6 · 86 | 🟪 D#6 · 87 |
| fila 1 (abajo) | 🟪 G#5 · 80 | 🟪 A5 · 81 | 🟪 A#5 · 82 | 🟪 B5 · 83 |

### Banco 7 · Notas 96–111 (canal 16)

Un color por banco, para saber en cuál estás. Canal 16.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬜ C8 · 108 | ⬜ C#8 · 109 | ⬜ D8 · 110 | ⬜ D#8 · 111 |
| fila 3 | ⬜ G#7 · 104 | ⬜ A7 · 105 | ⬜ A#7 · 106 | ⬜ B7 · 107 |
| fila 2 | ⬜ E7 · 100 | ⬜ F7 · 101 | ⬜ F#7 · 102 | ⬜ G7 · 103 |
| fila 1 (abajo) | ⬜ C7 · 96 | ⬜ C#7 · 97 | ⬜ D7 · 98 | ⬜ D#7 · 99 |

### Banco 8 · Notas 112–127 (canal 16)

Un color por banco, para saber en cuál estás. Canal 16.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | ⬛ E9 · 124 | ⬛ F9 · 125 | ⬛ F#9 · 126 | ⬛ G9 · 127 |
| fila 3 | ⬛ C9 · 120 | ⬛ C#9 · 121 | ⬛ D9 · 122 | ⬛ D#9 · 123 |
| fila 2 | ⬛ G#8 · 116 | ⬛ A8 · 117 | ⬛ A#8 · 118 | ⬛ B8 · 119 |
| fila 1 (abajo) | ⬛ E8 · 112 | ⬛ F8 · 113 | ⬛ F#8 · 114 | ⬛ G8 · 115 |

## Qué significa cada color

Un color entre paréntesis, como (🟥), es el mismo color **apagado**.

Un color por banco: 🟥 1 · 🟧 2 · 🟨 3 · 🟩 4 · 🟦 5 · 🟪 6 · ⬜ 7 · ⬛ 8. Así sabes en qué banco estás.

## Lo que el archivo no guarda (Glob)

Se pone a mano en la pestaña **Glob** de MidiSuite. Probablemente es común a todas las ranuras.

- No dependen de Glob más que la curva de los pads.
- Si un pad suena más débil que los demás, **Pad Calibration Mode** en MidiSuite.
- Para comprobar qué manda cada pad: la vista *Midi Code* de MidiSuite.

## Por verificar

- [ ] Cargarlo, tocar cada banco y comprobar que suena lo que dice esta nota
- [ ] Que `▶` `■` `●` manejen el DAW (modo SysEx, MMC)
- [ ] Exportarlo encima desde MidiSuite

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/M-VAVE SMC-PAD/8. Strudel.md`

```yaml
tipo: setup
estado: borrador
equipo: "[[0. M-VAVE SMC-PAD]]"
ranura: 8
archivo: "8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P8 Strudel.spc"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# P8 · Strudel

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Para qué sirve
> Tocar **con la banda de Strudel** en Sonar ([[4. Instrumento/2. Strudel/2. House y todo|House y todo]]): los pads mandan por los mismos canales que Strudel (2 bajo, 3 pad, 4 arpegio) y por el 10 la batería, y las perillas son un mezclador de las cuatro voces.

Generado el 2026-10-02, no exportado: pasa a `estado: vigente` cuando lo cargues, lo pruebes y lo exportes encima desde MidiSuite.

## Cargarlo

1. MidiSuite → menú *Presets* → **8**.
2. *Import* → `8. Setup/3. Configuraciones/M-VAVE SMC-PAD/SMC-PAD - P8 Strudel.spc`.
3. **Save** (graba en el aparato todas las ranuras tal como están en MidiSuite).
4. Cierra MidiSuite antes de abrir el DAW o Analog Lab: ocupa el puerto MIDI.

## Sonidos

`STR - Bass`: banco **Bajo**. `STR - Pad`: banco **Pads** (o **Texturas**). `STR - Arp`: banco **Arpegios**. Batería: banco **Beat Maker**. En `STR - Arp` no uses los **Arpegiadores**: Strudel ya arpegia, y se pisarían los dos arpegios.

| Banco de Analog Lab | Qué trae |
|---|---|
| [[8. Setup/4. Presets/Analog Lab V/4. Bajo\|Bajo]] | bajos |
| [[8. Setup/4. Presets/Analog Lab V/3. Pads\|Pads]] | cuerdas, pads y coros |
| [[8. Setup/4. Presets/Analog Lab V/8. Texturas\|Texturas]] | fondos que evolucionan solos |
| [[8. Setup/4. Presets/Analog Lab V/5. Arpegios\|Arpegios]] | plucks, campanas y mallets para que otro haga el arpegio |
| [[8. Setup/4. Presets/Analog Lab V/1. Beat Maker\|Beat Maker]] | kits de batería de Emulator II |

**Se usa en:** [[8. Setup/5. Áreas/4. Jam con Strudel|Jam con Strudel]].

## Botones

| Botón | Modo | Qué hace |
|---|---|---|
| `<` | CC Push | CC 28 → Analog Lab: preset **anterior** |
| `>` | CC Push | CC 29 → Analog Lab: preset **siguiente** |
| `▶` | SysEx | MMC Play → el DAW arranca |
| `■` | SysEx | MMC Stop → el DAW para |
| `●` | SysEx | MMC Record → el DAW graba |

## Perillas

*KNOB BANK* alterna entre el banco A y el B.

| Perilla | Banco A | Banco B |
|---|---|---|
| 1 | canal 2 · CC 17 · volumen del bajo | canal 2 · CC 16 · reverb del bajo |
| 2 | canal 3 · CC 17 · volumen del pad | canal 3 · CC 16 · reverb del pad |
| 3 | canal 4 · CC 17 · volumen del arpegio | canal 4 · CC 16 · reverb del arpegio |
| 4 | canal 10 · CC 17 · volumen de la batería | canal 10 · CC 16 · reverb de la batería |
| 5 | canal 2 · CC 74 · brillo del bajo | canal 2 · CC 19 · delay del bajo |
| 6 | canal 3 · CC 74 · brillo del pad | canal 3 · CC 19 · delay del pad |
| 7 | canal 4 · CC 74 · brillo del arpegio | canal 4 · CC 19 · delay del arpegio |
| 8 | canal 10 · CC 74 · brillo de la batería | canal 10 · CC 19 · delay de la batería |

Para que lleguen, en Sonar la entrada de cada pista tiene que aceptar al SMC-PAD en su canal: `STR - Bass` → *Omni* o *SMC-PAD*, canal **2**; `STR - Pad` → canal **3**; `STR - Arp` → canal **4**; la pista de batería → canal **10**. Y *Input Echo* encendido, como ya pide la nota de Strudel.

## Pads

*PAD BANK* cambia de banco. El pad 1 queda **abajo a la izquierda** (supuesto; ver la nota del equipo). Cada casilla: color, sonido o nota, y número MIDI.

### Banco 1 · Bajo (canal 2), trastes 0–3

Mástil de bajo, como el P2. Canal 2.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟦 G2 · 43 | (🟦) G#2 · 44 | 🟦 A2 · 45 | (🟦) A#2 · 46 |
| fila 3 | 🟦 D2 · 38 | (🟦) D#2 · 39 | 🟦 E2 · 40 | 🟦 F2 · 41 |
| fila 2 | 🟦 A1 · 33 | (🟦) A#1 · 34 | 🟦 B1 · 35 | 🟩 C2 · 36 |
| fila 1 (abajo) | 🟦 E1 · 28 | 🟦 F1 · 29 | (🟦) F#1 · 30 | 🟦 G1 · 31 |

### Banco 2 · Bajo (canal 2), trastes 4–7

Mástil de bajo, como el P2. Canal 2.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟦 B2 · 47 | 🟩 C3 · 48 | (🟦) C#3 · 49 | 🟦 D3 · 50 |
| fila 3 | (🟦) F#2 · 42 | 🟦 G2 · 43 | (🟦) G#2 · 44 | 🟦 A2 · 45 |
| fila 2 | (🟦) C#2 · 37 | 🟦 D2 · 38 | (🟦) D#2 · 39 | 🟦 E2 · 40 |
| fila 1 (abajo) | (🟦) G#1 · 32 | 🟦 A1 · 33 | (🟦) A#1 · 34 | 🟦 B1 · 35 |

### Banco 3 · Pad (canal 3) desde C3

Cromático para acordes. Canal 3.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C4 · 60 | (🟪) C#4 · 61 | 🟪 D4 · 62 | (🟪) D#4 · 63 |
| fila 3 | (🟪) G#3 · 56 | 🟪 A3 · 57 | (🟪) A#3 · 58 | 🟪 B3 · 59 |
| fila 2 | 🟪 E3 · 52 | 🟪 F3 · 53 | (🟪) F#3 · 54 | 🟪 G3 · 55 |
| fila 1 (abajo) | 🟩 C3 · 48 | (🟪) C#3 · 49 | 🟪 D3 · 50 | (🟪) D#3 · 51 |

### Banco 4 · Pad (canal 3) desde C4

Cromático para acordes. Canal 3.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C5 · 72 | (🟪) C#5 · 73 | 🟪 D5 · 74 | (🟪) D#5 · 75 |
| fila 3 | (🟪) G#4 · 68 | 🟪 A4 · 69 | (🟪) A#4 · 70 | 🟪 B4 · 71 |
| fila 2 | 🟪 E4 · 64 | 🟪 F4 · 65 | (🟪) F#4 · 66 | 🟪 G4 · 67 |
| fila 1 (abajo) | 🟩 C4 · 60 | (🟪) C#4 · 61 | 🟪 D4 · 62 | (🟪) D#4 · 63 |

### Banco 5 · Arpegio (canal 4) desde C4

Cromático para el arpegio o una melodía. Canal 4.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C5 · 72 | (🟨) C#5 · 73 | 🟨 D5 · 74 | (🟨) D#5 · 75 |
| fila 3 | (🟨) G#4 · 68 | 🟨 A4 · 69 | (🟨) A#4 · 70 | 🟨 B4 · 71 |
| fila 2 | 🟨 E4 · 64 | 🟨 F4 · 65 | (🟨) F#4 · 66 | 🟨 G4 · 67 |
| fila 1 (abajo) | 🟩 C4 · 60 | (🟨) C#4 · 61 | 🟨 D4 · 62 | (🟨) D#4 · 63 |

### Banco 6 · Arpegio (canal 4) desde C5

Cromático para el arpegio o una melodía. Canal 4.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟩 C6 · 84 | (🟨) C#6 · 85 | 🟨 D6 · 86 | (🟨) D#6 · 87 |
| fila 3 | (🟨) G#5 · 80 | 🟨 A5 · 81 | (🟨) A#5 · 82 | 🟨 B5 · 83 |
| fila 2 | 🟨 E5 · 76 | 🟨 F5 · 77 | (🟨) F#5 · 78 | 🟨 G5 · 79 |
| fila 1 (abajo) | 🟩 C5 · 72 | (🟨) C#5 · 73 | 🟨 D5 · 74 | (🟨) D#5 · 75 |

### Banco 7 · Batería: kit de Emulator II (canal 10)

El banco 1 del P3. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | (🟥) Z1 +5 · 41 | (🟧) Z2 +3 · 45 | (🟨) Z3 +3 · 51 | (🟩) Z4 +3 · 57 |
| fila 3 | 🟦 Z5 · 60 | 🟪 Z6 · 66 | ⬜ Z7 · 72 | ⬛ Z8 · 78 |
| fila 2 | 🟥 Z1 · 36 | 🟧 Z2 · 42 | 🟨 Z3 · 48 | 🟩 Z4 · 54 |
| fila 1 (abajo) | 🟥 Z1 · 36 | 🟧 Z2 · 42 | 🟨 Z3 · 48 | 🟩 Z4 · 54 |

### Banco 8 · Batería: kit GM para dedos (canal 10)

El banco 1 del P1. Canal 10.

| | col. 1 | col. 2 | col. 3 | col. 4 |
|---|---|---|---|---|
| fila 4 (arriba) | 🟦 Tom piso grave · 41 | 🟦 Tom grave · 45 | 🟦 Tom medio agudo · 48 | 🟦 Tom agudo · 50 |
| fila 3 | (🟨) Hi-hat abierto · 46 | 🟪 Pandereta · 54 | ⬜ Crash · 49 | 🟪 Cencerro · 56 |
| fila 2 | 🟥 Bombo · 36 | 🟧 Caja · 38 | 🟧 Palmas · 39 | 🟨 Hi-hat cerrado · 42 |
| fila 1 (abajo) | 🟥 Bombo · 36 | 🟧 Caja · 38 | 🟧 Palmas · 39 | 🟨 Hi-hat cerrado · 42 |

## Qué significa cada color

Un color entre paréntesis, como (🟥), es el mismo color **apagado**.

| Color | Qué es |
|---|---|
| 🟦 azul | bajo (canal 2); apagado = teclas negras |
| 🟪 morado | pad (canal 3); apagado = teclas negras |
| 🟨 amarillo | arpegio (canal 4); apagado = teclas negras |
| 🟩 verde | do (C) en cualquier voz |
| batería | los de zona del [[8. Setup/4. Presets/M-VAVE SMC-PAD/3. Beat Maker\|P3]] y los de familia del [[8. Setup/4. Presets/M-VAVE SMC-PAD/1. Batería GM\|P1]] |

## Lo que el archivo no guarda (Glob)

Se pone a mano en la pestaña **Glob** de MidiSuite. Probablemente es común a todas las ranuras.

- **Transpose = 0** (estaba en −4), salvo que quieras transportar a propósito.
- **PadCurve:** la más lineal; el rango de velocidad ya es 1–127.
- **PadAftertouch:** encendido si el preset de Analog Lab usa la presión (sale como *AfterTouch* en sus ajustes); si no, apagado.
- **Latch:** encendido si quieres que un pad siga sonando al soltarlo (texturas, arpegiadores).
- Si un pad suena más débil que los demás, **Pad Calibration Mode** en MidiSuite.
- Para comprobar qué manda cada pad: la vista *Midi Code* de MidiSuite.

## Por verificar

- [ ] Cargarlo, tocar cada banco y comprobar que suena lo que dice esta nota
- [ ] Que el pad 1 quede abajo a la izquierda
- [ ] Que `▶` `■` `●` manejen el DAW (modo SysEx, MMC)
- [ ] Exportarlo encima desde MidiSuite

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/Analog Lab V/1. Beat Maker.md`

```yaml
tipo: setup
estado: borrador
programa: "[[2. Analog Lab V]]"
banco: "Beat Maker"
archivo: "8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Beat Maker.labx"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Banco Beat Maker

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Qué trae
> 5 presets de Analog Lab: kits de batería de Emulator II.

Los cinco kits reparten el teclado igual, en 8 zonas que empiezan en 36, 42, 48, 54, 60, 66, 72 y 78 (**no es General MIDI**). Los faders 1–8 son el volumen de cada voz, como un mezclador, y el 9 afina el bombo. Las perillas son las de siempre; en el 707, las macros hacen: Brightness = filtro, Timbre = resonancia, Time = duración de los golpes, Movement = chorus.

## Importarlo

1. Analog Lab → importar `8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Beat Maker.labx` como preset (el mismo menú donde se exporta, o arrastrarlo a la ventana).
2. Aparece como banco de usuario **Beat Maker**. Filtra el navegador por él: con `<` `>` del SMC-PAD pasas de un preset a otro.
3. **Una sola vez.** Cada importación crea otro banco (`Beat Maker_1`, `Beat Maker_2`…). Si el banco cambia, borra el viejo antes.

## Presets

| Preset | Instrumento | Por qué | Macros 1–4 | Faders |
|---|---|---|---|---|
| Beat Maker 707 | Emulator II | 707: claro, de los 80 | Brightness · Timbre · Time · Movement | 1–8 volumen de cada voz (Kick, Snare, Clap, CHat, OHat, Tamb, Crash, Cowbell) · 9 afinación del bombo |
| Beat Maker 606 | Emulator II | 606: sutil | Brightness · Timbre · Time · Movement | 1–8 volumen de cada voz (Kick, Snare, Clap, CHat, OHat, Cymbal, LowTom, HighTom) · 9 afinación del bombo |
| Beat Maker Trap | Emulator II | trap y hip hop | Brightness · Timbre · Time · Movement | 1–8 volumen de cada voz (Kick, Snare, CHat, OHat, Ride, Rim, LowTom, MidTom) · 9 afinación del bombo |
| Beat Maker Synthetic | Emulator II | sintético, experimental | Brightness · Timbre · Time · Movement | 1–8 volumen de cada voz (Kick, Snare, Clap, CHat, OHat, Click, Hit, Bleep) · 9 afinación del bombo |
| Beat Maker In The Air | Emulator II | caja de ritmos de los 70, suave: muy dream pop | Brightness · Timbre · Time · Movement | 1–8 volumen de cada voz (Kick, Snare, Snare2, CHat, OHat, Guiro, WoodLow, WoodHigh) · 9 afinación del bombo |

Las macros son las perillas A 1–4 del SMC-PAD (Brightness, Timbre, Time, Movement en los CC estándar); los faders, las perillas B. Sus nombres salen en la barra de controles de Analog Lab con *Generic 9 Knobs + 9 Faders*.

## Con qué se usa

- **SMC-PAD:** [[8. Setup/4. Presets/M-VAVE SMC-PAD/3. Beat Maker|P3 Beat Maker]], [[8. Setup/4. Presets/M-VAVE SMC-PAD/5. Ritmo|P5 Ritmo]], [[8. Setup/4. Presets/M-VAVE SMC-PAD/8. Strudel|P8 Strudel]]
- **Áreas:** [[8. Setup/5. Áreas/1. Beats|Beats]], [[8. Setup/5. Áreas/2. Canción|Canción]], [[8. Setup/5. Áreas/4. Jam con Strudel|Jam con Strudel]]
- **KeyStep y Casio:** pendiente.

## Por verificar

- [ ] Importarlo una vez y comprobar que suena cada preset (con candado = no entra en la licencia Intro)

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/Analog Lab V/2. Teclas.md`

```yaml
tipo: setup
estado: borrador
programa: "[[2. Analog Lab V]]"
banco: "Teclas"
archivo: "8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Teclas.labx"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Banco Teclas

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Qué trae
> 8 presets de Analog Lab: pianos, pianos eléctricos y órganos.

## Importarlo

1. Analog Lab → importar `8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Teclas.labx` como preset (el mismo menú donde se exporta, o arrastrarlo a la ventana).
2. Aparece como banco de usuario **Teclas**. Filtra el navegador por él: con `<` `>` del SMC-PAD pasas de un preset a otro.
3. **Una sola vez.** Cada importación crea otro banco (`Teclas_1`, `Teclas_2`…). Si el banco cambia, borra el viejo antes.

## Presets

| Preset | Instrumento | Por qué | Macros 1–4 | Faders |
|---|---|---|---|---|
| Cassette Piano | Piano V3 | piano de casete: gastado, triste | Brightness · Age · Dynamics · Saturation | 1 Soundboard Resonance · 2 Sympathetic Resonance · 3 Duplex Scale Resonance · 4 Release Time · 5 Hammer Noise · 6 Low Shelf Gain · 7 Presence Gain · 8 High Shelf Gain · 9 Unison Detune |
| Cognac | Wurli V3 | Wurlitzer cálido con vibrato | Brightness · Sharpness · Crunch · Movement | 1 Hammer Noise · 2 Reeds Noise · 3 Damper Noise · 4 Stereo Width · 6 Pickup Distance · 7 Pickup Alignment · 8 Tonebar Resonance · 9 Dynamics |
| Not Love EP | Stage-73 V2 | Rhodes suave y melancólico | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| E.P 7070 | Jup-8 V4 | el piano eléctrico que ya usas en Sonar | Brightness · Timbre · Time · Movement | 1 Envelope 1 Attack · 2 Envelope 1 Decay · 3 Filter Env Sustain · 4 Filter Env Release · 5 Envelope 2 Attack · 6 Envelope 2 Decay · 7 Sustain · 8 Envelope 2 Release · 9 Portamento |
| Dirt Road | VOX Continental | órgano de combo de los 60, un poco sucio | Timbre · Drive/Reed · Noise · Vibrato | *ninguno*: usa las perillas A |
| Cheap But So Good | Farfisa | Farfisa con vibrato | — | *ninguno*: usa las perillas A |
| Summer Sixty Six | DX7 | teclado FM lo-fi, triste | Brightness · Timbre · Time · Movement | 1 Operator 1 Level · 2 Operator 2 Level · 3 Operator 3 Level · 4 Operator 4 Level · 5 Operator 5 Level · 6 Operator 6 Level · 7 Algorithm · 8 Pitch Env Amt |
| Soft Whip | OP-Xa | teclas analógicas suaves | Brightness · Timbre · Time · Movement | 1 Filter Attack · 2 Filter Decay · 3 Filter Env Sustain · 4 Filter Env Release · 5 Loudness Attack · 6 Loudness Decay · 7 Sustain · 8 Release · 9 Portamento Time |

Las macros son las perillas A 1–4 del SMC-PAD (Brightness, Timbre, Time, Movement en los CC estándar); los faders, las perillas B. Sus nombres salen en la barra de controles de Analog Lab con *Generic 9 Knobs + 9 Faders*.

## Con qué se usa

- **SMC-PAD:** [[8. Setup/4. Presets/M-VAVE SMC-PAD/4. Teclas|P4 Teclas]]
- **Áreas:** [[8. Setup/5. Áreas/1. Beats|Beats]], [[8. Setup/5. Áreas/2. Canción|Canción]]
- **KeyStep y Casio:** pendiente.

Son copias de los presets de fábrica sin tocar el sonido: cambian el banco, la bandera de fábrica y, si el preset la admite, la marca *OriginalFactory*.

## Por verificar

- [ ] Importarlo una vez y comprobar que suena cada preset (con candado = no entra en la licencia Intro)

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/Analog Lab V/3. Pads.md`

```yaml
tipo: setup
estado: borrador
programa: "[[2. Analog Lab V]]"
banco: "Pads"
archivo: "8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Pads.labx"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Banco Pads

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Qué trae
> 8 presets de Analog Lab: cuerdas, pads y coros.

## Importarlo

1. Analog Lab → importar `8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Pads.labx` como preset (el mismo menú donde se exporta, o arrastrarlo a la ventana).
2. Aparece como banco de usuario **Pads**. Filtra el navegador por él: con `<` `>` del SMC-PAD pasas de un preset a otro.
3. **Una sola vez.** Cada importación crea otro banco (`Pads_1`, `Pads_2`…). Si el banco cambia, borra el viejo antes.

## Presets

| Preset | Instrumento | Por qué | Macros 1–4 | Faders |
|---|---|---|---|---|
| Air String 1 | Solina | Solina: cuerdas de ensamble con aire | Brightness · Timbre · Time · Movement | 1 Bass Contrabass · 2 Bass Cello · 3 Upper Viola · 4 Upper Violin · 5 Upper Trumpet · 6 Upper Horn · 7 Upper Humana · 8 Upper Ensemble |
| Dream Strings | Mellotron | cuerdas de Mellotron | Brightness · Timbre · Time · Movement | 1 Macro Attack · 2 Macro Decay · 3 Sustain · 4 Release · 5 Tape Saturation · 6 Mechanics · 7 Noise Floor · 8 Velocity to Volume · 9 AfterTouch to Flutter |
| Big Stereo Choir | Mellotron | coro de Mellotron | Brightness · Timbre · Time · Movement | 1 Macro Attack · 2 Macro Decay · 3 Sustain · 4 Release · 5 Tape Saturation · 6 Mechanics · 7 Noise Floor · 8 Velocity to Volume · 9 AfterTouch to Flutter |
| Kids With Marbles | Jun-6 | pad de Juno, limpio y suave | Brightness · Timbre · Time · Movement | 1 VCF Cutoff · 2 VCF Resonance · 3 VCF Env · 4 VCF LFO · 5 Envelope 1 Attack · 6 Envelope 1 Decay · 7 Sustain · 8 Release |
| Crying Pad | Matrix-12 | pad triste | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Soft Saw | CS-80 V3 | pad lo-fi suave | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Floydian | CS-80 V3 | pad amplio con aire | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Lush | SEM | pad envolvente | Brightness · Timbre · Time · Movement | 5 Env 1 Attack · 6 Env 1 Decay · 7 Env 1 Sustain |

Las macros son las perillas A 1–4 del SMC-PAD (Brightness, Timbre, Time, Movement en los CC estándar); los faders, las perillas B. Sus nombres salen en la barra de controles de Analog Lab con *Generic 9 Knobs + 9 Faders*.

## Con qué se usa

- **SMC-PAD:** [[8. Setup/4. Presets/M-VAVE SMC-PAD/4. Teclas|P4 Teclas]], [[8. Setup/4. Presets/M-VAVE SMC-PAD/8. Strudel|P8 Strudel]]
- **Áreas:** [[8. Setup/5. Áreas/1. Beats|Beats]], [[8. Setup/5. Áreas/2. Canción|Canción]], [[8. Setup/5. Áreas/3. Atmósferas|Atmósferas]], [[8. Setup/5. Áreas/4. Jam con Strudel|Jam con Strudel]]
- **KeyStep y Casio:** pendiente.

Son copias de los presets de fábrica sin tocar el sonido: cambian el banco, la bandera de fábrica y, si el preset la admite, la marca *OriginalFactory*.

## Por verificar

- [ ] Importarlo una vez y comprobar que suena cada preset (con candado = no entra en la licencia Intro)

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/Analog Lab V/4. Bajo.md`

```yaml
tipo: setup
estado: borrador
programa: "[[2. Analog Lab V]]"
banco: "Bajo"
archivo: "8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Bajo.labx"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Banco Bajo

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Qué trae
> 8 presets de Analog Lab: bajos.

## Importarlo

1. Analog Lab → importar `8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Bajo.labx` como preset (el mismo menú donde se exporta, o arrastrarlo a la ventana).
2. Aparece como banco de usuario **Bajo**. Filtra el navegador por él: con `<` `>` del SMC-PAD pasas de un preset a otro.
3. **Una sola vez.** Cada importación crea otro banco (`Bajo_1`, `Bajo_2`…). Si el banco cambia, borra el viejo antes.

## Presets

| Preset | Instrumento | Por qué | Macros 1–4 | Faders |
|---|---|---|---|---|
| Mello Bass | CS-80 V3 | redondo y profundo | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Fret Bass | Mini V3 | como un bajo con trastes: para folk | Brightness · Timbre · Time · Movement | 1 Filter Env Attack · 2 Filter Env Decay · 3 Filter Env Sustain · 4 Filter Env Amount · 5 Attack · 6 Decay · 7 Sustain · 8 Release On/Off · 9 Legato |
| Fretless Bass | OP-Xa | sin trastes, suave | — | 1 Filter Attack · 2 Filter Decay · 3 Filter Env Sustain · 4 Filter Env Release · 5 Loudness Attack · 6 Loudness Decay · 7 Sustain · 8 Release · 9 Portamento Time |
| Bass Bass | Prophet V3 | grave y oscuro | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Jazzy Bass | Matrix-12 | clásico, profundo | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| 80S Bass | Prophet V3 | de los 80, limpio | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Club Sub | Mini V3 | subgrave para beats | Brightness · Timbre · Time · Movement | 1 Filter Env Attack · 2 Filter Env Decay · 3 Filter Env Sustain · 4 Filter Env Amount · 5 Attack · 6 Decay · 7 Sustain · 8 Release On/Off · 9 Legato |
| Dusty Sub | DX7 | subgrave lo-fi | Brightness · Timbre · Time · Movement | 1 Operator 1 Level · 2 Operator 2 Level · 3 Operator 3 Level · 4 Operator 4 Level · 5 Operator 5 Level · 6 Operator 6 Level · 7 Algorithm · 8 Pitch Env Amt |

Las macros son las perillas A 1–4 del SMC-PAD (Brightness, Timbre, Time, Movement en los CC estándar); los faders, las perillas B. Sus nombres salen en la barra de controles de Analog Lab con *Generic 9 Knobs + 9 Faders*.

## Con qué se usa

- **SMC-PAD:** [[8. Setup/4. Presets/M-VAVE SMC-PAD/2. Bajo|P2 Bajo]], [[8. Setup/4. Presets/M-VAVE SMC-PAD/8. Strudel|P8 Strudel]]
- **Áreas:** [[8. Setup/5. Áreas/1. Beats|Beats]], [[8. Setup/5. Áreas/2. Canción|Canción]], [[8. Setup/5. Áreas/4. Jam con Strudel|Jam con Strudel]]
- **KeyStep y Casio:** pendiente.

Son copias de los presets de fábrica sin tocar el sonido: cambian el banco, la bandera de fábrica y, si el preset la admite, la marca *OriginalFactory*.

## Por verificar

- [ ] Importarlo una vez y comprobar que suena cada preset (con candado = no entra en la licencia Intro)

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/Analog Lab V/5. Arpegios.md`

```yaml
tipo: setup
estado: borrador
programa: "[[2. Analog Lab V]]"
banco: "Arpegios"
archivo: "8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Arpegios.labx"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Banco Arpegios

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Qué trae
> 8 presets de Analog Lab: plucks, campanas y mallets para que otro haga el arpegio.

Son sonidos cortos para que el arpegio lo haga **otro**: Strudel en `STR - Arp`, o tus dedos. No arpegian solos: para eso está el banco *Arpegiadores*.

## Importarlo

1. Analog Lab → importar `8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Arpegios.labx` como preset (el mismo menú donde se exporta, o arrastrarlo a la ventana).
2. Aparece como banco de usuario **Arpegios**. Filtra el navegador por él: con `<` `>` del SMC-PAD pasas de un preset a otro.
3. **Una sola vez.** Cada importación crea otro banco (`Arpegios_1`, `Arpegios_2`…). Si el banco cambia, borra el viejo antes.

## Presets

| Preset | Instrumento | Por qué | Macros 1–4 | Faders |
|---|---|---|---|---|
| Woody Bells | Prophet V3 | campanas de madera | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Lofi Bells | Mini V4 | campanas lo-fi, tristes | Brightness · Timbre · Time · Movement | 1 VCF Attack · 2 VCF Decay · 3 VCF Sustain · 4 Filter Contour Amount · 5 VCA Attack · 6 VCA Decay · 7 VCA Sustain · 8 Modulation Amount · 9 Modulation Mix |
| Soft Bells | Mini V3 | campanas suaves | Brightness · Timbre · Time · Movement | 1 Filter Env Attack · 2 Filter Env Decay · 3 Filter Env Sustain · 4 Filter Env Amount · 5 Attack · 6 Decay · 7 Sustain · 8 Release On/Off · 9 Legato |
| Analog Harp | CS-80 V4 | arpa analógica | Brightness · Timbre · Time · Movement | 9 Mix |
| Telephone Harp | CS-80 V3 | arpa con movimiento | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| PW Pluck | Jup-8 V4 | pluck limpio | Brightness · Timbre · Time · Movement | 1 Envelope 1 Attack · 2 Envelope 1 Decay · 3 Filter Env Sustain · 4 Filter Env Release · 5 Envelope 2 Attack · 6 Envelope 2 Decay · 7 Sustain · 8 Envelope 2 Release · 9 Portamento |
| Music Box | Matrix-12 | caja de música | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Big Crystal Bells | CS-80 V4 | campanas de cristal, cálidas | Brightness · Timbre · Time · Movement | 9 Mix |

Las macros son las perillas A 1–4 del SMC-PAD (Brightness, Timbre, Time, Movement en los CC estándar); los faders, las perillas B. Sus nombres salen en la barra de controles de Analog Lab con *Generic 9 Knobs + 9 Faders*.

## Con qué se usa

- **SMC-PAD:** [[8. Setup/4. Presets/M-VAVE SMC-PAD/8. Strudel|P8 Strudel]]
- **Áreas:** [[8. Setup/5. Áreas/4. Jam con Strudel|Jam con Strudel]]
- **KeyStep y Casio:** pendiente.

Son copias de los presets de fábrica sin tocar el sonido: cambian el banco, la bandera de fábrica y, si el preset la admite, la marca *OriginalFactory*.

## Por verificar

- [ ] Importarlo una vez y comprobar que suena cada preset (con candado = no entra en la licencia Intro)

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/Analog Lab V/6. Arpegiadores.md`

```yaml
tipo: setup
estado: borrador
programa: "[[2. Analog Lab V]]"
banco: "Arpegiadores"
archivo: "8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Arpegiadores.labx"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Banco Arpegiadores

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Qué trae
> 8 presets de Analog Lab: presets que arpegian solos mientras mantienes las notas.

Mantén una nota o un acorde y el preset arpegia solo, al tempo (el de Sonar, o el de la barra de arriba de Analog Lab). Los cuatro primeros usan el **arpegiador de Analog Lab**: ahí cambias modo (Up, Down, Ordered, Up & Down, Random…), velocidad (de 3/2 a 1/96) y número de octavas, y con **Hold** sigue sonando al soltar. Los otros cuatro traen la secuencia del propio instrumento. Con el SMC-PAD, *Latch* en Glob también lo mantiene.

## Importarlo

1. Analog Lab → importar `8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Arpegiadores.labx` como preset (el mismo menú donde se exporta, o arrastrarlo a la ventana).
2. Aparece como banco de usuario **Arpegiadores**. Filtra el navegador por él: con `<` `>` del SMC-PAD pasas de un preset a otro.
3. **Una sola vez.** Cada importación crea otro banco (`Arpegiadores_1`, `Arpegiadores_2`…). Si el banco cambia, borra el viejo antes.

## Presets

| Preset | Instrumento | Por qué | Macros 1–4 | Faders |
|---|---|---|---|---|
| Flying Arpeggio | MiniBrute | arpegiador de Analog Lab: suave, cinematográfico | Brightness · Timbre · Time · Movement | 1 Amp Envelope Attack · 2 Amp Envelope Decay · 3 Amp Envelope Sustain · 4 Amp Envelope Release · 5 Filter Envelope Attack · 6 Filter Envelope Decay · 7 Filter Envelope Sustain · 8 Filter Envelope Release |
| Bouncing Colors | CS-80 V4 | arpegiador de Analog Lab: limpio, pop | Brightness · Timbre · Time · Movement | 9 Mix |
| Spice Drops | CS-80 V4 | arpegiador de Analog Lab: gotas con delay | Brightness · Timbre · Time · Movement | 9 Mix |
| EVA 237 | MiniBrute | arpegiador de Analog Lab: atmosférico, de los 80 | Brightness · Timbre · Time · Movement | 1 Amp Envelope Attack · 2 Amp Envelope Decay · 3 Amp Envelope Sustain · 4 Amp Envelope Release · 5 Filter Envelope Attack · 6 Filter Envelope Decay · 7 Filter Envelope Sustain · 8 Filter Envelope Release |
| Berceuse | Matrix-12 | secuencia propia: canción de cuna, triste | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| BOC Sunrise | Matrix-12 | secuencia propia: amanecer suave | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Sad Space | ARP 2600 | secuencia propia: triste y espaciosa | Brightness · Timbre · Time · Movement | sin documentar |
| Ice Of Enceladus | SQ80 | arpegio lo-fi, limpio | Brightness · Timbre · Time · Movement | 1 DCA1 Level · 2 DCA2 Level · 3 DCA3 Level · 4 Filter Cutoff Frequency · 5 Filter Resonance · 6 LFO1 Amplitude · 8 LFO2 Amplitude · 9 LFO3 Amplitude |

Las macros son las perillas A 1–4 del SMC-PAD (Brightness, Timbre, Time, Movement en los CC estándar); los faders, las perillas B. Sus nombres salen en la barra de controles de Analog Lab con *Generic 9 Knobs + 9 Faders*.

## Con qué se usa

- **SMC-PAD:** [[8. Setup/4. Presets/M-VAVE SMC-PAD/4. Teclas|P4 Teclas]]
- **Áreas:** [[8. Setup/5. Áreas/1. Beats|Beats]], [[8. Setup/5. Áreas/3. Atmósferas|Atmósferas]]
- **KeyStep y Casio:** pendiente.

Son copias de los presets de fábrica sin tocar el sonido: cambian el banco, la bandera de fábrica y, si el preset la admite, la marca *OriginalFactory*.

## Por verificar

- [ ] Importarlo una vez y comprobar que suena cada preset (con candado = no entra en la licencia Intro)

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/Analog Lab V/7. Leads.md`

```yaml
tipo: setup
estado: borrador
programa: "[[2. Analog Lab V]]"
banco: "Leads"
archivo: "8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Leads.labx"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Banco Leads

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Qué trae
> 8 presets de Analog Lab: sonidos para melodías.

## Importarlo

1. Analog Lab → importar `8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Leads.labx` como preset (el mismo menú donde se exporta, o arrastrarlo a la ventana).
2. Aparece como banco de usuario **Leads**. Filtra el navegador por él: con `<` `>` del SMC-PAD pasas de un preset a otro.
3. **Una sola vez.** Cada importación crea otro banco (`Leads_1`, `Leads_2`…). Si el banco cambia, borra el viejo antes.

## Presets

| Preset | Instrumento | Por qué | Macros 1–4 | Faders |
|---|---|---|---|---|
| Lonely Lead | Matrix-12 | solitario, triste | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Resonant String | CS-80 V3 | cuerda resonante, suave | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Kit Lead 2 | Solina | lo-fi, con aire | Brightness · Timbre · Time · Movement | 1 Bass Contrabass · 2 Bass Cello · 3 Upper Viola · 4 Upper Violin · 5 Upper Trumpet · 6 Upper Horn · 7 Upper Humana · 8 Upper Ensemble |
| Arcane Organ | CS-80 V3 | órgano que evoluciona | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Belles Iles | CZ | campanas con aire | Brightness · Timbre · Time · Movement | 8 Unison Detune · 9 Portamento Time |
| Ensemble | Mini V3 | lead de ensamble, cálido | Brightness · Timbre · Time · Movement | 1 Filter Env Attack · 2 Filter Env Decay · 3 Filter Env Sustain · 4 Filter Env Amount · 5 Attack · 6 Decay · 7 Sustain · 8 Release On/Off · 9 Legato |
| Decadance | Prophet V3 | suave, con movimiento | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Mod Wheel Lead | Buchla Easel | cambia con la rueda de modulación | Brightness · Timbre · Time · Movement | 1 Attack · 2 Decay · 3 Sustain · 4 Env Mode Select · 5 Gate 1 Mod · 6 Gate 2 Mod · 7 Chan A Level · 8 Chan B Level |

Las macros son las perillas A 1–4 del SMC-PAD (Brightness, Timbre, Time, Movement en los CC estándar); los faders, las perillas B. Sus nombres salen en la barra de controles de Analog Lab con *Generic 9 Knobs + 9 Faders*.

## Con qué se usa

- **SMC-PAD:** [[8. Setup/4. Presets/M-VAVE SMC-PAD/4. Teclas|P4 Teclas]]
- **Áreas:** [[8. Setup/5. Áreas/2. Canción|Canción]], [[8. Setup/5. Áreas/4. Jam con Strudel|Jam con Strudel]]
- **KeyStep y Casio:** pendiente.

Son copias de los presets de fábrica sin tocar el sonido: cambian el banco, la bandera de fábrica y, si el preset la admite, la marca *OriginalFactory*.

## Por verificar

- [ ] Importarlo una vez y comprobar que suena cada preset (con candado = no entra en la licencia Intro)

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/Analog Lab V/8. Texturas.md`

```yaml
tipo: setup
estado: borrador
programa: "[[2. Analog Lab V]]"
banco: "Texturas"
archivo: "8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Texturas.labx"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Banco Texturas

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Qué trae
> 8 presets de Analog Lab: fondos que evolucionan solos.

## Importarlo

1. Analog Lab → importar `8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - Texturas.labx` como preset (el mismo menú donde se exporta, o arrastrarlo a la ventana).
2. Aparece como banco de usuario **Texturas**. Filtra el navegador por él: con `<` `>` del SMC-PAD pasas de un preset a otro.
3. **Una sola vez.** Cada importación crea otro banco (`Texturas_1`, `Texturas_2`…). Si el banco cambia, borra el viejo antes.

## Presets

| Preset | Instrumento | Por qué | Macros 1–4 | Faders |
|---|---|---|---|---|
| Moon | CS-80 V3 | textura lunar, suave | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Whistler | Farfisa | silbidos con aire | — | *ninguno*: usa las perillas A |
| Last Light | Matrix-12 | fondo cinematográfico | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Pulsepad | Matrix-12 | pad que late | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Marchand Sable | Modular | arena lo-fi | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| Longtemps | CZ | paisaje triste | Brightness · Timbre · Time · Movement | 8 Unison Detune · 9 Portamento Time |
| Morning Circles | CZ | círculos de mañana | Brightness · Timbre · Time · Movement | 8 Unison Detune · 9 Portamento Time |
| I Am a Replicant | Mini V4 | triste, de los 70-80 | Brightness · Timbre · Time · Movement | 1 VCF Attack · 2 VCF Decay · 3 VCF Sustain · 4 Filter Contour Amount · 5 VCA Attack · 6 VCA Decay · 7 VCA Sustain · 8 Modulation Amount · 9 Modulation Mix |

Las macros son las perillas A 1–4 del SMC-PAD (Brightness, Timbre, Time, Movement en los CC estándar); los faders, las perillas B. Sus nombres salen en la barra de controles de Analog Lab con *Generic 9 Knobs + 9 Faders*.

## Con qué se usa

- **SMC-PAD:** [[8. Setup/4. Presets/M-VAVE SMC-PAD/4. Teclas|P4 Teclas]], [[8. Setup/4. Presets/M-VAVE SMC-PAD/8. Strudel|P8 Strudel]]
- **Áreas:** [[8. Setup/5. Áreas/2. Canción|Canción]], [[8. Setup/5. Áreas/3. Atmósferas|Atmósferas]], [[8. Setup/5. Áreas/4. Jam con Strudel|Jam con Strudel]]
- **KeyStep y Casio:** pendiente.

Son copias de los presets de fábrica sin tocar el sonido: cambian el banco, la bandera de fábrica y, si el preset la admite, la marca *OriginalFactory*.

## Por verificar

- [ ] Importarlo una vez y comprobar que suena cada preset (con candado = no entra en la licencia Intro)

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*

---

## Archivo: `8. Setup/4. Presets/Analog Lab V/9. FX.md`

```yaml
tipo: setup
estado: borrador
programa: "[[2. Analog Lab V]]"
banco: "FX"
archivo: "8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - FX.labx"
ultima_verificacion: 2026-10-02
tags:
  - curso-musica/setup
```

# Banco FX

> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.
> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.

> [!abstract] Qué trae
> 8 presets de Analog Lab: efectos para transiciones y ambiente.

## Importarlo

1. Analog Lab → importar `8. Setup/3. Configuraciones/Analog Lab V/Analog Lab V - FX.labx` como preset (el mismo menú donde se exporta, o arrastrarlo a la ventana).
2. Aparece como banco de usuario **FX**. Filtra el navegador por él: con `<` `>` del SMC-PAD pasas de un preset a otro.
3. **Una sola vez.** Cada importación crea otro banco (`FX_1`, `FX_2`…). Si el banco cambia, borra el viejo antes.

## Presets

| Preset | Instrumento | Por qué | Macros 1–4 | Faders |
|---|---|---|---|---|
| Ghost Driver | OP-Xa | paisaje fantasma | — | 1 Filter Attack · 2 Filter Decay · 3 Filter Env Sustain · 4 Filter Env Release · 5 Loudness Attack · 6 Loudness Decay · 7 Sustain · 8 Release · 9 Portamento Time |
| In A Dream | ARP 2600 | sueño, suave | Brightness · Timbre · Time · Movement | sin documentar |
| Sea Sex and Sun | ARP 2600 | mar y aire | Brightness · Timbre · Time · Movement | sin documentar |
| Caught In Storm | SEM | tormenta | Brightness · Timbre · Time · Movement | 5 Env 1 Attack · 6 Env 1 Decay · 7 Env 1 Sustain |
| 2049 Rain | Buchla Easel | lluvia | Brightness · Timbre · Time · Movement | 1 Attack · 2 Decay · 3 Sustain · 4 Env Mode Select · 5 Gate 1 Mod · 6 Gate 2 Mod · 7 Chan A Level · 8 Chan B Level |
| Wind Magnetic | Matrix-12 | viento | Brightness · Timbre · Time · Movement | *ninguno*: usa las perillas A |
| And Away | KORG MS-20 | subida lenta y cálida (riser) | Brightness · Timbre · Time · Movement | 1 EG2 Attack Time · 2 EG2 Decay Time · 3 EG2 Sustain Level · 4 EG2 Release Time · 5 EG1 Delay Time · 6 EG1 Attack Time · 7 EG1 Release Time · 8 HPF Total Modulation Amount · 9 LPF Total Modulation Amount |
| Bassement Riser | Jup-8 V4 | subida oscura (riser) | Brightness · Timbre · Time · Movement | 1 Envelope 1 Attack · 2 Envelope 1 Decay · 3 Filter Env Sustain · 4 Filter Env Release · 5 Envelope 2 Attack · 6 Envelope 2 Decay · 7 Sustain · 8 Envelope 2 Release · 9 Portamento |

Las macros son las perillas A 1–4 del SMC-PAD (Brightness, Timbre, Time, Movement en los CC estándar); los faders, las perillas B. Sus nombres salen en la barra de controles de Analog Lab con *Generic 9 Knobs + 9 Faders*.

## Con qué se usa

- **SMC-PAD:** [[8. Setup/4. Presets/M-VAVE SMC-PAD/4. Teclas|P4 Teclas]]
- **Áreas:** [[8. Setup/5. Áreas/1. Beats|Beats]], [[8. Setup/5. Áreas/3. Atmósferas|Atmósferas]]
- **KeyStep y Casio:** pendiente.

Son copias de los presets de fábrica sin tocar el sonido: cambian el banco, la bandera de fábrica y, si el preset la admite, la marca *OriginalFactory*.

## Por verificar

- [ ] Importarlo una vez y comprobar que suena cada preset (con candado = no entra en la licencia Intro)

## Notas propias

*Lo que escribas aquí se conserva cuando se regenera la nota.*
