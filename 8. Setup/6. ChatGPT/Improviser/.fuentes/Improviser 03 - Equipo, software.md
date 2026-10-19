# Equipo: software

> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario (Obsidian + git), el 2026-10-18. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.

Cakewalk Sonar (pistas, arpegiador, Analog Lab en cada pista), Cakewalk Next y Analog Lab V.

Contiene:

- `8. Setup/1. Software/0. Cakewalk Sonar.md`
- `8. Setup/1. Software/1. Cakewalk Next.md`
- `8. Setup/1. Software/2. Analog Lab V.md`

---

## Archivo: `8. Setup/1. Software/0. Cakewalk Sonar.md`

```yaml
tipo: setup
estado: vigente
categoria: software
fabricante: Cakewalk (BandLab)
modelo: Sonar (versión gratuita)
plataforma: [windows]
ultima_verificacion: 2026-09-27
fuentes: []
tags:
  - curso-musica/setup
```

# Cakewalk Sonar

> [!abstract] Qué es y para qué lo uso
> DAW completo de Cakewalk, en su versión gratuita. Solo existe para **Windows**.
> Es el hermano grande de [[1. Cakewalk Next]]: más control, más complicado de configurar.

> [!success] Resuelto (2026-09-27)
> Los tres controladores **suenan en Sonar**, cada uno en su propia pista de
> instrumento con Analog Lab V. Configuración en
> [[#Configuración que funciona]]; el diagnóstico original queda abajo como historia.

## Instalación

- Se instala desde **Cakewalk Product Center** (el mismo instalador trae Next).
- Rutas en esta máquina:
  - programa: `C:\Program Files\Cakewalk\Sonar\`
  - configuración del usuario: `%APPDATA%\Cakewalk\Sonar\` (`TTSSEQ.INI` para el MIDI, `AUD.INI` para el audio)

## Diagnóstico del problema

Lo que se encontró al revisar la máquina:

| Hallazgo | Evidencia | Por qué importa |
|---|---|---|
| **El KeyStep no está entre las entradas MIDI de Sonar** | `TTSSEQ.INI` → `[MIDI Input Devices]` solo tiene `USB MIDI Interface`, `MIDIIN2 (SMC-PAD)` y `MIDIIN3 (SMC-PAD)` | si el dispositivo no está activado en Preferencias, Sonar no recibe sus notas |
| **Next y Sonar estaban abiertos a la vez** | ambos procesos corriendo | con la API MIDI clásica de Windows, solo un programa puede abrir un dispositivo; el primero que lo abre se lo queda |
| Hay varias salidas de audio | NVIDIA (monitor Sceptre), AMD (Samsung), Realtek, un headset Bluetooth XM-520 | si Sonar usa una salida distinta a la que escuchas, el sonido va a otro lado |
| Windows MIDI Services está instalado | aparecen `MIDI 2.0 Service`, `Loopback A/B` | debería permitir que varios programas compartan un dispositivo, pero Sonar puede seguir usando la API clásica |

### Lo que muestra la captura de Sonar (2026-09-27)

| Hallazgo | Por qué no suena |
|---|---|
| El título dice **`[Not Activated]`**, con el aviso *Sign-in Required: Please sign in to refresh your license* | la licencia gratuita no está activa; Sonar puede estar limitado hasta que inicies sesión |
| Las pistas 2 a 5 son **pistas de audio** (icono de onda) con entrada `None` | una pista de audio graba sonido, no MIDI: tocar el KeyStep ahí nunca suena |
| La pista 1 es **XSampler 1** | XSampler es un sampler **vacío**: si no se le carga una muestra, recibe las notas y no suena nada |
| Los únicos plugins de Cakewalk instalados son efectos (Boost11, BREVERB, Channel Tools, Vocal Strip) | la versión gratuita no trae sintetizadores con sonidos listos |
| **Analog Lab V** sí está instalado (viene con el KeyStep) | es el sintetizador con sonidos que conviene usar en Sonar |

Versión instalada: **31.12.0.050**.

## Pasos para resolverlo

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

## Qué funcionó

Lo que cambió entre la captura que no sonaba y la que sí:

1. **Sesión iniciada.** El título pasó de `[Not Activated]` a **Free License**.
2. **Pistas de instrumento con Analog Lab V**, en vez de pistas de audio y XSampler vacío.
3. **Una pista por controlador**, cada una con su entrada MIDI propia.

No se registró cuál de los tres fue el decisivo; probablemente hicieron falta todos.

## Configuración que funciona

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

### Mapeo de perillas en Analog Lab (instancia PADS 3)

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

## Arpegiador

Cada pista MIDI o de instrumento trae un arpegiador en el **Inspector**. Sus presets son archivos
**`.ARP`**: un patrón de notas más los ajustes (forma, octavas, swing, velocidad, duración…).
Sonar los lee de `C:\Cakewalk Content\Sonar\Arpeggiator Patterns\`, donde vienen 521 de fábrica.

La **forma** (*Shape*) decide qué se hace con el patrón:

| Forma | Qué toca | Para qué |
|---|---|---|
| **Rhythm** | las notas del patrón tal cual. *"La primera nota del patrón se mueve a la nota más grave que tocas"* (documentación de SONAR), así que el patrón se transpone entero | una frase hecha: la mantienes con una nota |
| Forward, Reverse, Inward, Outward, *Circle*, As Played, Random | las notas **que mantienes**, en ese orden; del patrón solo toma ritmo, velocidad y duración | tu ritmo sobre cualquier acorde |

Por eso los de fábrica guardan **notas reales**, casi siempre en Do (los *Lush Chords* traen
el acorde entero, `A7Aug5th`), y no grados del acorde. El arpegiador de Sonar **no puede**
hacer lo que hace `.arp()` de Strudel, que elige el grado *n* del acorde que suena. Lo más
cercano son las dos versiones de abajo.

### De Strudel a `.ARP` y `.mid`

```bash
./_scripts/strudel-a-arp.py --instalar
```

Evalúa cada strudel con el Strudel local (el mismo que suena: `voicing()`, swing y velocidades
incluidos) y saca **dos versiones** de su arpegio, *frase* y *ritmo*:

| Versión | Forma | Qué es |
|---|---|---|
| `frase` | Rhythm | lo que toca Strudel, nota por nota, con la progresión incluida. Mantén la nota que dice el script (la primera de la frase) y suena en su tono; con otra nota, transpuesta |
| `ritmo` | Forward | solo el ritmo de la parte (cuándo, cuánto dura, qué tan fuerte). Las notas salen del acorde que mantengas; la forma se cambia en el Inspector |

Dónde caen depende de dónde está el strudel:

| Strudel en | Qué se convierte | Salidas | En Sonar |
|---|---|---|---|
| `4. Instrumento/2. Strudel/6. Arpegiadores/<estilo>/` | la parte con `.arp(`, o todas sus notas si no hay | `<nombre> frase` y `ritmo`, en `.ARP` **y** `.mid`, al lado del strudel | submenú *Arpegiadores* → estilo |
| cualquier otro sitio de `2. Strudel/` | solo si usa `.arp(` | `Sonar - <nombre> frase` y `ritmo`, solo `.ARP`, en `8. Setup/3. Configuraciones/Cakewalk Sonar/` | submenú *Strudel* |

La carpeta `6. Arpegiadores/` es la casa de los arpegios nuevos: [[6. Arpegiadores/README|cómo se organiza]].

- **El bucle dura lo que tarda el patrón en repetirse**: 6 compases si `PROG`, `ARP_ORDER` y
  `ARP_RYTHM` alternan 6 elementos. Un ciclo de Strudel es un compás de 4/4, como en `setcpm(BPM / 4)`.
- **El tempo no va en el preset.** El arpegiador sigue el del proyecto: pon el de `setcpm`.
- **Qué parte:** la variable que usa `.arp(`. Si hay otra que te interesa: `--parte bass`
  (o `$1`, `$2`… para bloques `$:`). `--ciclos N` fija el largo a mano.
- **Sonar los toma de aquí, sin copias.** Sonar lee los presets de su `ArpPresetFolder`
  (*Preferences → File → Folder Locations*; en el registro, `HKCU\Software\Cakewalk Music Software\Cakewalk\Sonar\UserPaths`),
  que es `C:\Cakewalk Content\Sonar\Arpeggiator Patterns`. `--instalar` crea ahí, **una sola vez**,
  dos enlaces de carpeta (*junctions*): `Arpeggiator Patterns\Strudel` → `8. Setup\3. Configuraciones\Cakewalk Sonar`
  y `Arpeggiator Patterns\Arpegiadores` → `4. Instrumento\2. Strudel\6. Arpegiadores` (creado el 2026-10-02).
  Desde entonces, lo que el script escribe en la bóveda es lo que Sonar ve en los submenús *Strudel*
  y *Arpegiadores*, y los 521 de fábrica siguen ahí. Si un enlace ya existe, `--instalar` no hace
  nada; si en su lugar hay una carpeta normal, se niega a pisarla.
- **Los `.mid`** no necesitan enlace: en el **Media Browser**, guarda `6. Arpegiadores` como
  *Content Location* y arrastra el clip a una pista. Llevan el tempo de `setcpm` y un compás de 4/4.
- El formato está descifrado en `_scripts/presets/formatos.py`: los tamaños se comprobaron
  reconstruyendo los 326 presets de fábrica que solo traen notas, y salen idénticos.
- **Sonar nombra las octavas una más alta** que Strudel: el MIDI 60 es `C5` en Sonar y `c4`
  en Strudel. El script da el número MIDI para que no haya duda.

### Configuraciones

| Archivo | De dónde sale | Para oírlo en su tono | ¿Probado en Sonar? |
|---|---|---|---|
| `Sonar - Brillo frase.ARP` · `ritmo` | `5. Experiments/1. Happy/0. Brillo` · `synth` (6 compases, 120 BPM) | D3 (MIDI 50) | no |
| `Sonar - BrilloArp frase.ARP` · `ritmo` | `5. Experiments/1. Happy/1. BrilloArp` · `synth` (8 compases, 120 BPM) | A#3 (MIDI 58) | no |
| `Sonar - Hypnotic frase.ARP` · `ritmo` | `5. Experiments/1. Happy/2. Hypnotic` · `synth` (8 compases, 130 BPM) | D3 (MIDI 50) | no |
| `Sonar - second frase.ARP` · `ritmo` | `4. Arpeggios/second` · `$3` (5 compases, 72 BPM) | E3 (MIDI 52) | no |

`0.with_arp` no sale: su `.arp(` está dentro de la función `strum`. Con `--parte guitar` sí.

### Usarlo

1. Tempo del proyecto = el de Strudel.
2. Pista de instrumento con Analog Lab (un sonido corto del banco *Arpegios* funciona bien).
3. Inspector → **Arpeggiator** → enciéndelo → menú de presets → **Arpegiadores** → estilo → el
   que quieras (o **Strudel** para los sueltos, que aparecen como `Sonar - Brillo frase`).
4. *frase*: mantén la nota de la tabla. *ritmo*: mantén un acorde.

Cuando cambias un patrón de Strudel: corre el script y vuelve a elegir el preset en la pista. Lo
probable es que la pista guarde **su copia** del patrón dentro del proyecto (la documentación dice
que los ajustes del arpegiador van en las plantillas de pista), así que no se actualiza sola.

Los ajustes que no están descifrados (octavas, swing, *Duration*…) salen de `Shapes\Forward.ARP`
de fábrica. Si cambias alguno en Sonar y lo guardas desde el arpegiador en *Strudel*, el archivo
cae en la bóveda (por el enlace) y se versiona con git. Guárdalo **con otro nombre**: el script
reescribe los `Sonar - <nombre> frase/ritmo` cada vez que cambia el patrón de Strudel.

## Problemas conocidos

| Síntoma | Causa | Solución |
|---|---|---|
| Un controlador suena en Next pero no en Sonar | Next tiene el puerto MIDI abierto, o el dispositivo no está activado en Sonar | cerrar Next; activar la entrada en Preferences → MIDI → Devices |
| Nada suena, ni el metrónomo | salida de audio equivocada | Preferences → Audio → Devices |
| El MIDI llega pero no suena | pista MIDI sin sinte, o Input Echo apagado | pista de instrumento con Input Echo |
| Se toca en una pista y no suena | es una pista de audio, no de instrumento | crear pista de instrumento |
| XSampler recibe notas y no suena | XSampler sin muestra cargada | usar Analog Lab V, o cargar una muestra |
| Título con `[Not Activated]` | no has iniciado sesión | iniciar sesión con la cuenta de Cakewalk/BandLab |

## Por verificar

- [ ] Dónde está guardado el proyecto *Explorer* (`.cwp`) y si va a la bóveda
- [ ] Que *Arturia 2* y *PADS 3* también tengan MIDI Channel = All
- [ ] Guardar y exportar el mapeo de PADS 3 como `.labmidi`
- [ ] Si Sonar puede compartir el KeyStep con Next gracias a Windows MIDI Services
- [ ] Que Sonar abre los `.ARP` generados (Inspector → Arpeggiator → presets → *Strudel*)
- [ ] Si Sonar ve un preset nuevo en *Strudel* sin reiniciarse, o si lee la carpeta solo al arrancar
- [ ] Que en *Arpegiadores* las subcarpetas de estilo salen como submenús, y que el menú ignora los
      `.js`, `.mid` y `README.md` que viven junto a los `.ARP`
- [ ] Si una pista con un preset ya elegido se queda con su copia al regenerarlo (lo esperado)
- [ ] Que *Brillo frase*, con D3 (MIDI 50) mantenido, suena igual que en Strudel. Si sale transpuesta,
      la nota de referencia no es la primera del patrón (¿la más grave? ¿Do?) y hay que ajustar el script
- [ ] Si *Octave Range* (2 en la plantilla) repite la frase una octava arriba
- [ ] Si Sonar acepta patrones de más de 128 pasos (8 compases); ninguno de fábrica pasa de ahí
- [ ] Qué son los ajustes sin descifrar de la cabecera (floats de `0x31` a `0x5c`)

---

## Archivo: `8. Setup/1. Software/1. Cakewalk Next.md`

```yaml
tipo: setup
estado: vigente
categoria: software
fabricante: Cakewalk (BandLab)
modelo: Next (versión gratuita)
plataforma: [windows]
ultima_verificacion: 2026-09-27
fuentes: []
tags:
  - curso-musica/setup
```

# Cakewalk Next

> [!abstract] Qué es y para qué lo uso
> DAW ligero y gratuito de Cakewalk, pensado para bocetar rápido. Es el camino
> más corto para tener **audio** de una idea (regla dura 2). **Aquí los
> controladores sí suenan** (2026-09-27).

## Instalación

- Se instala desde **Cakewalk Product Center**, junto con [[0. Cakewalk Sonar]].
- Programa: `C:\Program Files\Cakewalk\Next\Next.exe`
- Configuración: `%APPDATA%\Cakewalk\Next\` (`DeviceConfig.xml`, `Next.settings`)

## Configuración que funciona

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

## Con Sonar

**No los tengas abiertos a la vez.** El que abre primero el KeyStep puede
quedárselo, y el otro no recibe nada. Ver [[0. Cakewalk Sonar]].

## Por verificar

- [ ] Versión de Next
- [ ] Si el SMC-PAD también funciona como entrada
- [ ] Cómo exportar un `.m4a` o `.wav` para la semana

---

## Archivo: `8. Setup/1. Software/2. Analog Lab V.md`

```yaml
tipo: setup
estado: vigente
categoria: software
fabricante: Arturia
modelo: Analog Lab V (Analog Lab Intro)
plataforma: [windows, macos]
ultima_verificacion: 2026-09-27
fuentes: []
tags:
  - curso-musica/setup
```

# Analog Lab V

> [!abstract] Qué es y para qué lo uso
> Sintetizador de Arturia con presets listos (pianos, cuerdas, pads…). Viene
> gratis con el [[1. Arturia KeyStep mk2|KeyStep mk2]] en su versión **Analog Lab Intro**.
> Es el que suena en las tres pistas de [[0. Cakewalk Sonar]], porque la
> versión gratuita de Sonar no trae sintetizadores con sonidos.

## Instalación

- Se descarga desde **Arturia Software Center** después de registrar el KeyStep.
- En esta máquina:
  - aplicación: `C:\Program Files\Arturia\Analog Lab V\`
  - plugin VST3: `C:\Program Files\Common Files\VST3\Analog Lab V.vst3`
  - plugin VST2: `C:\Program Files\VSTPlugins\Analog Lab V.dll`
  - recursos: `C:\ProgramData\Arturia\Analog Lab V\`
- En Sonar aparece en el navegador de plugins como **Instruments → Synth → Analog Lab V**.

## Ajustes

| Dónde | Ajuste | Valor | Por qué |
|---|---|---|---|
| Settings | **MIDI Channel** | **All** | el SMC-PAD manda por el canal 10; con "canal 1", los pads no sonarían |
| Settings | MultiCore | activado | |
| MIDI | Midi Controller | **Generic 9 Knobs** | los 9 controles de abajo |

Comprobado en la instancia *Casio 1* de Sonar. **Falta confirmar** *Arturia 2* y *PADS 3*.

Para los bancos con faders, *MIDI Controller* = **Generic 9 Knobs + 9 Faders**: con
*Generic 9 Knobs* los faders no salen en pantalla.

**Los 9 controles de *Generic 9 Knobs*:** Brightness, Timbre, Time, Movement,
Chorus Mix, Phaser Mix, Delay Volume, Reverb Volume y Master. *Chorus Mix* y
*Phaser Mix* son FX A y FX B: el nombre cambia con el efecto cargado.

## Configuraciones

Analog Lab maneja **dos formatos distintos, cada uno con su importador**. Lo dice su
propio `resources\gui_xml\gui-constants-specific.xml`: `BROWSER_EXTENSION = labx`,
`BROWSER_MIDI_EXTENSION = labmidi`. Viven en `8. Setup/3. Configuraciones/Analog Lab V/`;
reglas en [[8. Setup/0. Índice#Configuraciones]].

| Extensión | Qué es | Se importa en |
|---|---|---|
| **`.labmidi`** | configuración MIDI: qué CC mueve qué control. XML | Settings → pestaña **MIDI** → menú de *MIDI Config* → **Import Config** (ahí mismo: *Export Current Config*) |
| **`.labx`** | presets o bancos: el sonido, sus macros y qué hace cada control en ese preset. ZIP con el preset y sus samples | la importación de presets: el mismo menú donde se exportó `default.labx`, o arrastrar el archivo a la ventana |

> [!bug] Por qué no aceptaba el archivo (2026-10-02)
> Cualquiera de estas dos da "formato no aceptado":
> 1. **Importador equivocado.** Un `.labmidi` en la importación de presets (o un
>    `.labx` en la de MIDI) se rechaza.
> 2. **El archivo de ChatGPT usaba nombres** (`param="Previous Preset"`). Esa forma
>    solo vale en las configuraciones de fábrica: al importar, Analog Lab exige el
>    número. Su mensaje interno es *"Can't use a param name in that context. Please
>    use paramid instead."* Todos los `.labmidi` de esta carpeta usan `paramid`.

| Archivo | Qué es | ¿Cargada ahora? |
|---|---|---|
| `Analog Lab V - SMC-PAD banco A.labmidi` | perillas del banco A del P2 del SMC-PAD (canal 16). Exportación real | no se sabe en qué instancia |
| `Analog Lab V - Beat Maker.labmidi` | MIDI del SMC-PAD (y de los teclados de Arturia): 30 asignaciones. **Generado a mano** el 2026-10-02 | no |
| `Analog Lab V - Beat Maker.labx` | banco *Beat Maker*: 5 kits de Emulator II con los faders como mezclador. **Generado a mano** el 2026-10-02 | sí: importado el 2026-10-02 |
| `Analog Lab V - Teclas.labx` | banco *Teclas*: 8 pianos, pianos eléctricos y órganos. **Generado a mano** | no |
| `Analog Lab V - Pads.labx` | banco *Pads*: 8 cuerdas, pads y coros. **Generado a mano** | no |
| `Analog Lab V - Bajo.labx` | banco *Bajo*: 8 bajos. **Generado a mano** | no |
| `Analog Lab V - Arpegios.labx` | banco *Arpegios*: 8 plucks, campanas y mallets. **Generado a mano** | sí: importado (dos veces) |
| `Analog Lab V - Arpegiadores.labx` | banco *Arpegiadores*: 8 presets que arpegian solos. **Generado a mano** | no |
| `Analog Lab V - Leads.labx` | banco *Leads*: 8 sonidos para melodías. **Generado a mano** | no |
| `Analog Lab V - Texturas.labx` | banco *Texturas*: 8 fondos que evolucionan. **Generado a mano** | no |
| `Analog Lab V - FX.labx` | banco *FX*: 8 efectos y subidas para transiciones. **Generado a mano** | no |
| `default.labx` | exportación real del preset de fábrica *707 Airline Kit* (2026-10-02); fue la plantilla del banco | referencia |
| *(sin exportar)* | perillas del **banco B**; en PADS 3 aparece como *Empty\** | sí, en PADS 3 |

### Qué número es cada parámetro

El `paramid` es la posición del parámetro en
`C:\ProgramData\Arturia\Analog Lab V\resources\Reference_ParamNames.xml`, contando
desde 0. Los útiles para un controlador:

| paramid | Parámetro | Qué es |
|---|---|---|
| 0 | MASTER | volumen general |
| 320 · 321 · 322 | ControllerTabSelect1 · 2 · 3 | Parte 1 · Parte 2 · Live |
| 323–342 | HardwareControl0–19 | **los controles de abajo** (tabla siguiente) |
| 360 · 361 | Browse Preset · Validate Preset | recorrer y elegir preset |
| 362 · 363 | Browse Filter · Validate Filter | recorrer y elegir filtro |
| 365 | Clear Filters | quitar filtros del navegador |
| 366 · 367 | Active Filter Preset · Active Filter Category | |
| 368 | Browse Back | |
| 369 | SendValuesToMIDIController | |
| 370 · 371 | Previous Preset · Next Preset | preset anterior · siguiente |
| 374 · 375 | Oct Minus · Oct Plus | octava |
| 376 · 377 · 378 | HardwareSaveControl · Undo · Redo | guardar, deshacer, rehacer |

Los controles de abajo, en el orden en que salen en pantalla:

| En pantalla | HardwareControl | paramid | CC estándar de Arturia | A qué va en casi todos los presets |
|---|---|---|---|---|
| Brightness | 1 | 324 | 74 | Macro 1 |
| Timbre | 3 | 326 | 71 | Macro 2 |
| Time | 5 | 328 | 76 | Macro 3 |
| Movement | 7 | 330 | 77 | Macro 4 |
| FX A (*Chorus Mix*…) | 2 | 325 | 93 | FX A Dry/Wet de Analog Lab |
| FX B (*Phaser Mix*…) | 4 | 327 | 18 | FX B Dry/Wet |
| Delay Volume | 6 | 329 | 19 | volumen del delay |
| Reverb Volume | 8 | 331 | 16 | volumen de la reverb |
| Master | 9 | 332 | 17 | volumen general |
| faders 1–9 | 11–19 | 334–342 | 73 75 79 72 80 81 82 83 85 | lo que diga el preset |
| *(no salen en Generic)* | 0 y 10 | 323 y 333 | — | — |

### Qué hace cada control dentro de un preset

Cada preset guarda dos tablas de 20 entradas, una por HardwareControl:

- `__HW_Mapped__N`: a qué parámetro **de Analog Lab** va el control (FX A, Delay,
  Master… o *P1 ParamN*).
- `__Mapped__N`: a qué parámetro **del instrumento** va *P1 ParamN* (una macro, el
  volumen de una voz…). Es la posición en el `Reference_ParamNames.xml` del instrumento.

Y una bandera: **`HardwareMappingChanged`**. Con 0, al cargar el preset Analog Lab
pisa `__Mapped__` con lo que dice `resources\mapping.pref.xml` para ese instrumento.
Se ve comparando el *707 Airline Kit* de fábrica con su exportación: los faders 1–4
cambiaron solos. Un preset con controles propios necesita `HardwareMappingChanged 1`.

### `Analog Lab V - SMC-PAD banco A.labmidi`

Antes se llamaba `Generic.labmidi`; dentro del XML sigue diciendo `name="Generic"`.
Tiene 24 asignaciones, todas con `channel="0"`.

| Perilla SMC-PAD | CC | paramid | Control |
|---|---|---|---|
| A1 | 15 | 328 | Time |
| A2 | 31 | 326 | Timbre |
| A3 | 30 | 325 | FX A |
| A4 | 33 | 330 | Movement |
| A5 | 34 | 329 | Delay Volume |
| A6 | 35 | 327 | FX B |
| A7 | 36 | 332 | Master |
| A8 | 37 | 331 | Reverb Volume |
| B7 | 44 | 324 | Brightness |

El 324 es **Brightness**, no Master: lo dice `Reference_ParamNames.xml`. En PADS 3
el CC 44 sale como Master porque esa instancia usa otra configuración, la del banco B.

Las otras **15 asignaciones** son la configuración *Default* de fábrica
(`resources\plugin.prefmidi.xml`): faders con CC 72–85 y navegación con 112–118. El
banco A se aprendió encima de ella, y cada CC aprendido sustituyó al de fábrica de
ese control.

### Mapeo de PADS 3 (banco B, sin exportar)

| Perilla SMC-PAD (banco B) | Canal | CC | Control |
|---|---|---|---|
| 3 | 1 | 40 | P1 Time |
| 4 | 1 | 41 | Chorus Mix |
| 5 | 1 | 42 | Delay Volume |
| 7 | 1 | 44 | Master |
| 8 | 1 | 45 | Reverb Volume |

Para guardarlo: pestaña **MIDI → MIDI Config → guardar con nombre → exportar**
como `Analog Lab V - SMC-PAD banco B.labmidi`.

## Bancos de sonidos

Nueve bancos de usuario agrupan los sonidos **por familia**, no por controlador: sirven
para el SMC-PAD y servirán para el KeyStep y el Casio. Cada uno tiene su nota en
`8. Setup/4. Presets/Analog Lab V/`, con qué presets trae, por qué cada uno, qué hacen sus macros y faders, y con qué
presets de equipo y [[8. Setup/5. Áreas/1. Beats|áreas]] se usa.

| Banco | Qué trae |
|---|---|
| [[8. Setup/4. Presets/Analog Lab V/1. Beat Maker\|Beat Maker]] | 5 kits de Emulator II con los faders como mezclador |
| [[8. Setup/4. Presets/Analog Lab V/2. Teclas\|Teclas]] | pianos, pianos eléctricos y órganos |
| [[8. Setup/4. Presets/Analog Lab V/3. Pads\|Pads]] | cuerdas, pads y coros |
| [[8. Setup/4. Presets/Analog Lab V/4. Bajo\|Bajo]] | bajos |
| [[8. Setup/4. Presets/Analog Lab V/5. Arpegios\|Arpegios]] | plucks y campanas para que otro arpegie |
| [[8. Setup/4. Presets/Analog Lab V/6. Arpegiadores\|Arpegiadores]] | presets que arpegian solos |
| [[8. Setup/4. Presets/Analog Lab V/7. Leads\|Leads]] | sonidos para melodías |
| [[8. Setup/4. Presets/Analog Lab V/8. Texturas\|Texturas]] | fondos que evolucionan |
| [[8. Setup/4. Presets/Analog Lab V/9. FX\|FX]] | efectos y subidas para transiciones |

Todos se generan con `_scripts/generar-presets.py` desde el catálogo de
`_scripts/presets/analoglab.py`. Salvo los *Beat Maker*, son copias de presets de la
biblioteca de Analog Lab sin tocar el sonido, elegidos por sus etiquetas (*Sad*, *Mellow*,
*Warm*, *Soft*, *Lofi*, *Airy*, *Atmospheric*) y descartando los que dependen de samples sueltos.

> [!note] *Arpegios* no es lo mismo que *Arpegiadores*
> - ***Arpegios***: sonidos cortos (plucks, campanas) para que **otro** haga el arpegio: Strudel en `STR - Arp`, o tus dedos.
> - ***Arpegiadores***: presets que arpegian **solos** mientras mantienes una nota o un acorde. Cuatro usan el
>   **arpegiador de Analog Lab** (`Arp_OffOn`, `Arp_Pattern`, `Arp_AllRateSynced`, `Arp_OctaveRange`, `Arp_Hold`),
>   que se guarda dentro del preset en los instrumentos nuevos (CS-80 V4, Mini V4, MiniBrute, Prophet-5…). Los
>   otros cuatro traen la secuencia del propio instrumento.

> [!warning] Cada importación crea un banco nuevo
> Analog Lab no sobrescribe: si importas otra vez un `.labx`, crea `Beat Maker_1`, `Beat Maker_2`… El
> 2026-10-02 ya había `Beat Maker_1`, `Beat Maker_2` y `Arpegios_1`. Bórralos desde el navegador de Analog
> Lab y **importa cada banco una sola vez**. Si un banco cambia, borra el viejo antes de importar el nuevo.

### Configuración MIDI Beat Maker

La configuración MIDI que traduce las perillas del SMC-PAD (y de cualquier teclado de Arturia)
a los controles de Analog Lab. 30 asignaciones, todas con `channel="0"` y un solo CC por control.

| CC | Control | En el SMC-PAD (P1–P5) |
|---|---|---|
| 74 · 71 · 76 · 77 | Brightness · Timbre · Time · Movement | perillas A1–A4 |
| 93 · 19 · 16 · 17 | FX A · Delay · Reverb · Master | perillas A5–A8 |
| 18 | FX B | — |
| 73 · 75 · 79 · 72 · 80 · 81 · 82 · 83 | faders 1–8 | perillas B1–B8 |
| 85 | fader 9 | — |
| 28 · 29 | preset anterior · siguiente | botones `<` `>` |
| 24 · 22 · 23 | Parte 1 · Parte 2 · Live | — |
| 27 | Clear Filters | — |
| 112 · 113 · 114 · 115 · 117 · 118 | Browse Filter · Validate Filter · Browse Preset · Validate Preset · Active Filter Preset · Active Filter Category | — (como en el *Default* de fábrica) |

Cómo se monta todo para cada tipo de trabajo (qué preset del pad, qué banco, qué pistas):
las notas de `8. Setup/5. Áreas/`.

## Uso en esta bóveda

- Una instancia por controlador en el Synth Rack de Sonar. Ver [[0. Cakewalk Sonar#Configuración que funciona]].
- Buenos presets para dream pop: los pads y las cuerdas. Por ejemplo, *The Opera* (Strings) está en *Arturia 2*.

## Problemas conocidos

| Síntoma | Causa | Solución |
|---|---|---|
| Los pads del SMC-PAD no suenan | MIDI Channel en un canal distinto del 10 | Settings → MIDI Channel → All |
| Una perilla no mueve nada | ese CC no está en la MIDI Config cargada | pestaña MIDI → Learn |
| "Formato no aceptado" al importar | importador equivocado, o un `.labmidi` con `param="nombre"` | ver [[#Configuraciones]] |
| Un kit de Emulator II suena cruzado (la caja donde iría el hi-hat) | el kit va por zonas, no es General MIDI | banco 1 del P3 del SMC-PAD |
| Los faders no aparecen o no mueven las voces | controlador *Generic 9 Knobs*, o un preset que no es *Beat Maker* | *Generic 9 Knobs + 9 Faders*; el mezclador solo existe en los presets *Beat Maker* |

## Por verificar

- [ ] Qué significa `channel="0"` en el `.labmidi`. Casi seguro "cualquier canal": el banco A manda por el 16 y se guardó como 0
- [x] Qué control es cada parámetro de 324 a 342: ver [[#Qué número es cada parámetro]] (2026-10-02)
- [x] De dónde vienen las 15 asignaciones extra: la configuración *Default* de fábrica (2026-10-02)
- [ ] MIDI Channel de *Arturia 2* y *PADS 3*
- [ ] Exportar el mapeo del banco B
- [x] Importar el `.labx`: los cinco presets quedaron en `C:\ProgramData\Arturia\Presets\Emulator II V\User\Beat Maker\`, idénticos byte a byte a los generados (2026-10-02)
- [ ] Importar el `.labmidi` y poner *MIDI Controller* = *Generic 9 Knobs + 9 Faders* (el 2026-10-02 seguía en *Generic 9 Knobs*)
- [ ] Abrir cada kit y comprobar que los faders son el volumen de cada voz; después, exportar encima
- [ ] Importar los bancos *Teclas*, *Pads*, *Bajo* y *Arpegios*, y comprobar que suenan (si alguno sale con candado, no entra en la licencia Intro)
