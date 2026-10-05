---
tipo: mapa
estado: vigente
area: 4. Instrumento
---

# Strudel local

> [!abstract] Qué es esta carpeta
> Strudel corriendo **en tu máquina**: escribes el patrón en VS Code, guardas, y
> una pestaña de Chrome lo toca y manda **MIDI** a Sonar. El sonido lo pone
> Analog Lab; Strudel solo decide qué notas y cuándo.
>
> Qué es Strudel y cuándo usarlo frente a MuseScore: [[0. Qué es y cómo se usa]].

```text
VS Code  ──guardar──▶  motor (localhost:5173, Chrome)  ──Web MIDI──▶  loopMIDI / IAC
                                                                          │
                                                   Sonar ◀────────────────┘
                                                     └─▶ Analog Lab ─▶ audio
```

## Estructura

```text
4. Instrumento/2. Strudel/
├── README.md                  ← esta nota
├── 0. Qué es y cómo se usa.md ← el concepto: qué es Strudel y cuándo usarlo
├── 1. Beats desde cero.md     ← cómo se arma un beat, con bloques para tocar
├── package.json               ← dependencias y scripts (npm)
├── package-lock.json          ← versiones exactas            git: sí
├── .nvmrc                     ← Node: lts/*
├── vite.config.js             ← servidor local del motor
├── .gitignore                 ← node_modules
├── node_modules/              ←                               git: no
│
├── 1. Acompañamientos/        ← lo que pones a sonar en una sesión
│   ├── 1. Sparse.js              (Fase 1: los escribes tú)
│   ├── 2. Groove.js
│   └── 3. Open.js
│
├── 2. Vocabulario/            ← solo lo que pasó las 4 pruebas
│   └── …                         cada archivo nace con su primera entrada
│
├── 6. Arpegiadores/           ← lo que se convierte en .ARP (Sonar) y .mid
│   ├── README.md                 cómo se usa
│   └── <n>. <estilo>/            cada strudel con sus frase/ritmo .ARP y .mid al lado
│
├── 7. House/                  ← el género entero, capa por capa
│   ├── 0. House desde cero.md    la guía, con bloques para tocar
│   └── _lessons/                 una sesión por bloque de la guía (0–8)
│
├── 8. Dream pop/              ← al estilo de Beach House: del órgano a la coda
│   ├── 0. Dream pop desde cero.md
│   └── _lessons/                 una sesión por bloque de la guía (0–7)
│
├── .motor/                    ← el motor; no se toca para tocar
│   ├── index.html · main.js      la página que evalúa y toca
│   ├── exportar.js               las notas de un patrón, para el arpegiador de Sonar
│   ├── patrones.js               vigila las carpetas y avisa al guardar
│   ├── puertos.js                nombre del puerto MIDI (OUT)
│   └── prueba-midi.js            la prueba de la Fase 2
│
└── .vscode/                   ← extensiones recomendadas y tareas
```

### Por qué así

- **`.motor/` lleva punto.** Obsidian no indexa carpetas que empiezan con punto,
  y el motor no es algo que leas: es la herramienta.
- **Los patrones nunca escriben el nombre del puerto.** Usan `OUT`, que define
  `.motor/puertos.js`. El mismo `.js` suena en Windows y en Mac.
- **Acompañamientos y vocabulario van separados** porque una idea entra al
  vocabulario solo después de haber sido **tocada, escuchada, usada en una
  improvisación y grabada**. Los acompañamientos son donde se prueba; el
  vocabulario, lo que ya se ganó el sitio.
- **El vocabulario se carga antes de cada patrón**, en el mismo bloque: lo que
  un archivo de `2. Vocabulario/` define, cualquier acompañamiento lo puede usar.
  Por eso el vocabulario **define** cosas (`const`) pero **no toca** (`$:`).

> [!warning] Obsidian no muestra archivos `.js`
> Los patrones se ven y se editan en VS Code. En Obsidian solo están las notas `.md`.

## Arrancar

### Una vez por máquina

**Windows**

1. Node LTS con nvm: `nvm install lts` y `nvm use lts`.
   nvm-windows **no lee** `.nvmrc` solo; el archivo documenta qué versión se usa.
2. En la carpeta: `npm install`.
3. **loopMIDI** (ya instalado, arranca con Windows): crea un puerto llamado
   exactamente `Improviser - Strudel Out`. El `loopMIDI Port` que ya existe
   se puede borrar o dejar; el motor busca por nombre.

**macOS**

1. Node LTS con nvm: `nvm install` y `nvm use` (en Mac sí lee `.nvmrc`).
2. En la carpeta: `npm install`.
3. **IAC Driver**: *Configuración de Audio MIDI → Ventana → Mostrar estudio MIDI →
   IAC Driver* → marca *El dispositivo está conectado* y renombra `Bus 1` a
   `Improviser - Strudel Out`.

### Cada sesión

```bash
code "4. Instrumento/2. Strudel"   # abre la carpeta en VS Code
npm run dev                        # o Ctrl+Shift+B: arranca el motor y abre el navegador
```

1. La pestaña tiene que ser **Chrome o Edge**. Safari no tiene Web MIDI y Firefox
   pide un complemento. Si el navegador por defecto es otro, copia
   `http://localhost:5173` en Chrome, o arranca con `BROWSER=chrome`.
2. Chrome pide permiso para **controlar dispositivos MIDI**: acéptalo.
3. La página dice `✓ Puerto encontrado`. Si dice `✗`, mira *Problemas*.
4. Elige el patrón y pulsa **Tocar** una vez (el navegador exige un clic antes de
   arrancar el reloj de audio).
5. Desde ahí: **editas en VS Code, guardas, y cambia lo que suena**, sin recargar
   y sin cortar. En la página, `Ctrl+Enter` toca y `Ctrl+.` para.

`npm run prueba` abre directo la prueba de la Fase 2.

## Configurar Sonar

Detalle del proyecto en [[0. Cakewalk Sonar]]. Para cada pista de Strudel:

| Pista | Entrada | Canal | Instrumento |
|---|---|---:|---|
| `STR - Bass` | Improviser - Strudel Out | 2 | Analog Lab |
| `STR - Pad` | Improviser - Strudel Out | 3 | Analog Lab |
| `STR - Arp` | Improviser - Strudel Out | 4 | Analog Lab |
| `HUM - Lead` | KeyStep mk2 | — | Analog Lab |

1. `Edit → Preferences → MIDI → Devices` → activa `Improviser - Strudel Out` en *Inputs*.
2. Pista **de instrumento** (no de audio) con Analog Lab.
3. Entrada `Improviser - Strudel Out`, canal según la tabla, **Input Echo** encendido.
4. En Analog Lab, *MIDI Channel* en **All**: Sonar ya filtra por canal.

### Sin el motor: tus arpegios como presets de Sonar y MIDI

Lo que pongas en **`6. Arpegiadores/`** se convierte en un preset del **arpegiador de Sonar**
(`.ARP`) y en un **MIDI** (`.mid`), al lado del strudel, para tocarlo desde el KeyStep sin el
motor corriendo. Cómo se organiza: [[6. Arpegiadores/README|Arpegiadores]].

```bash
./_scripts/strudel-a-arp.py --instalar    # desde la raíz de la bóveda
```

Los `.js` de fuera de esa carpeta que usan `.arp(` también se convierten, pero solo en `.ARP`,
en `8. Setup/3. Configuraciones/Cakewalk Sonar/`. Evalúa cada archivo con este mismo Strudel
(`.motor/exportar.js`), así que las notas son las que suenan aquí, con `voicing()`, swing y
velocidades incluidos. Qué sale y cómo se usa en Sonar: [[0. Cakewalk Sonar#Arpegiador]].

## VS Code

`.vscode/` trae:

| Archivo | Qué hace |
|---|---|
| `extensions.json` | recomienda **Error Lens** (errores de sintaxis en la línea) |
| `tasks.json` | `Ctrl+Shift+B` arranca el motor; otra tarea abre la prueba MIDI |
| `settings.json` | oculta `node_modules` y **apaga el formato al guardar** |

Extensiones marcadas como **no recomendadas**, a propósito:

- **Strudel for VS Code** y **strudel-box**: tocan con su propio motor de audio y
  **no mandan MIDI**, así que nunca llegan a Sonar. Su `Ctrl+Enter` sonaría encima
  del motor local.
- **Prettier**: cambia comillas al formatear, y en Strudel **las comillas dobles son
  mini-notación y las simples no**. `.midi('…')` pasado a `.midi("…")` deja de funcionar.

## Problemas

| Síntoma | Causa probable | Qué hacer |
|---|---|---|
| `✗ No encuentro "Improviser - Strudel Out"` | loopMIDI cerrado o puerto con otro nombre | abre loopMIDI, revisa el nombre, **recarga la página** (el navegador solo ve los puertos que existían al cargar) |
| `Sin Web MIDI` | navegador sin Web MIDI, o permiso denegado | Chrome/Edge; candado de la barra → *Dispositivos MIDI* → Permitir |
| La página toca pero Sonar no recibe | puerto no activado en Sonar, o canal equivocado | *Preferences → MIDI → Devices*; entrada y canal de la pista |
| Sonar recibe pero no suena | pista de audio, sin sinte, o Input Echo apagado | pista de instrumento con Input Echo |
| Guardo y no cambia | el motor no está corriendo, o no le diste a Tocar | mira la terminal de `npm run dev`; pulsa Tocar una vez |
| Error con número de línea raro | el vocabulario se evalúa delante del patrón | resta las líneas de `2. Vocabulario/` |
| Notas dobles | dos rutas al mismo sonido (hardware → Sonar y hardware → Strudel → Sonar) | una sola ruta intencional por evento |

## Pendiente

- [ ] Crear el puerto `Improviser - Strudel Out` en loopMIDI
- [ ] Primera prueba real: `npm run prueba` → `STR - Bass` suena en Sonar
- [ ] Escribir los tres acompañamientos de la Fase 1
- [ ] Notas de setup: `8. Setup/1. Software/3. Strudel.md` y `4. loopMIDI.md` (ver [[8. Setup/0. Índice]])
- [ ] Comprobar que Obsidian no indexa `node_modules/`
