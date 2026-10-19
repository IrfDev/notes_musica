# Strudel: el motor local y cómo se usa

> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario (Obsidian + git), el 2026-10-18. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.

Strudel en la máquina (VS Code → Chrome → MIDI → Sonar), qué es y cuándo usarlo frente a MuseScore, la guía para componer y los arpegiadores que se convierten en presets de Sonar.

Contiene:

- `4. Instrumento/2. Strudel/README.md`
- `4. Instrumento/2. Strudel/0. Qué es y cómo se usa.md`
- `4. Instrumento/2. Strudel/1. Componiendo.md`
- `4. Instrumento/2. Strudel/6. Arpegiadores/README.md`
- `4. Instrumento/2. Strudel/.motor/puertos.js`

---

## Archivo: `4. Instrumento/2. Strudel/README.md`

```yaml
tipo: mapa
estado: vigente
area: 4. Instrumento
```

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

---

## Archivo: `4. Instrumento/2. Strudel/0. Qué es y cómo se usa.md`

```yaml
tipo: concepto
estado: vigente
area: 4. Instrumento
tags:
  - curso-musica/strudel
```

# Strudel

Port oficial de **TidalCycles a JavaScript**: un lenguaje de patrones para hacer música escribiendo texto. REPL web en [strudel.cc](https://strudel.cc/), gratis y open source.

> [!tip] Por qué está aquí
> Tu punto más débil documentado es el **ritmo** — la lección 20 nunca se consolidó, `1. Teoría/6. Ritmo/` es el área más delgada, y el [[6. Práctica/3. Diagnóstico]] lo marca como prioridad alta.
>
> Y tu cuello de botella es **producir audio**. Strudel suena desde texto, sin DAW, sin micrófono, sin setup.

## Cómo se usa aquí

Dentro de cualquier nota, un bloque:

````markdown
```strudel
s("bd*4, hh*8").bank("RolandTR909")
```
````

El plugin añade play/stop/reload encima, más un pianoroll. Es el mismo mecanismo que ya usas con ```` ```abc ````, pero para patrones en vez de pentagrama.

## Cuándo Strudel y cuándo MuseScore

Cada uno es malo fuera de su terreno. No los fuerces.

| Área | Herramienta | Por qué |
|---|---|---|
| Armonía · Conducción · Contrapunto | **MuseScore** | necesitas pentagramas para ver conducción de voces |
| **Ritmo** | **Strudel** | es literalmente un lenguaje de patrones |
| Melodía · Forma | cualquiera | |

MuseScore no sabe expresar un groove. Strudel no sabe expresar una resolución de séptima.

## Dónde van los patrones

Strudel es **una notación, no un silo**. Los patrones viven donde diga la pregunta de ruteo de [[Inicio]]:

| Un patrón que… | Va a |
|---|---|
| es prueba de posesión de una lección | `2. Cursos/<fuente>/<lección>/Estudios/` |
| es boceto de una pieza | `3. Composiciones/<obra>/` |
| demuestra un concepto | dentro de la nota de concepto |

Esta carpeta guarda solo la **referencia**: sintaxis, snippets y tropiezos.

Ventaja sobre MuseScore: los patrones son **texto plano**. Van a git, se diferencian, se buscan. Cero binarios.

---

## Mini-notación

Lo esencial para empezar. Todo dentro de comillas.

| Símbolo | Qué hace | Ejemplo |
|---|---|---|
| espacio | secuencia dentro de un ciclo | `"bd sd bd sd"` |
| `*n` | repite n veces | `"hh*8"` |
| `~` | silencio | `"bd ~ sd ~"` |
| `[ ]` | agrupa (subdivide) | `"bd [sd sd]"` |
| `< >` | uno por ciclo (alterna) | `"<c e g>"` |
| `,` | capas simultáneas | `"bd*4, hh*8"` |
| `/n` | estira n ciclos | `"<0 1>/2"` |
| `!n` | replica | `"bd!3 sd"` |
| `?` | aleatorio | `"hh*8?"` |

## Recetas

### Ritmo básico

```strudel
s("bd*4, [~ sd]*2, hh*8")
  .bank("RolandTR909")
```

### Subdivisión — para la lección 20

```strudel
stack(
  s("bd*4").bank("RolandTR909"),
  s("hh*4"),      // negras
  s("hh*8"),      // corcheas
  s("hh*16"),     // semicorcheas
)
```

### Tresillos

```strudel
s("bd*4, hh*12").bank("RolandTR909")
```

### Métrica compuesta (12/8, como tu nocturno)

```strudel
s("bd ~ ~ sd ~ ~ bd ~ ~ sd ~ ~")
  .bank("RolandTR909")
```

### Acordes por grados

```strudel
n("<0 3 4 1>")
  .scale("C:minor")
  .voicing()
  .s("piano")
  .slow(2)
```

### Patrón con bajo

```strudel
stack(
  s("bd*4, hh*8").bank("RolandTR909"),
  note("<c2 as1 f2 g2>").s("sawtooth").lpf(400),
)
```

## Funciones útiles

| | |
|---|---|
| `.slow(n)` / `.fast(n)` | cambia la velocidad |
| `.rev()` | invierte |
| `.every(n, f)` | aplica `f` cada n ciclos |
| `.off(t, f)` | copia desfasada — eco, contrapunto |
| `.gain()` `.lpf()` `.room()` | volumen, filtro, reverb |
| `.scale("C:minor")` | mapea números a grados |
| `.voicing()` | convierte grados en acordes |
| `setcpm(n)` | tempo, en ciclos por minuto |

---

## Advertencias

1. **Ejecuta JavaScript arbitrario.** El autor del plugin lo avisa explícitamente: no pegues patrones de internet sin leerlos.
2. **No funciona en iOS** — limitación del WebView de Safari. Android sí.
3. **El caché de samples** se descarga a una carpeta local. Ya está en `.gitignore`; no lo saques de ahí.
4. **Es música programada, no tocada.** No desarrolla tu guitarra ni tu piano. Produce y enseña ritmo; no sustituye el instrumento.

## Enlaces

- [REPL](https://strudel.cc/) · [Workshop](https://strudel.cc/workshop/getting-started/) · [Mini-notación](https://strudel.cc/learn/mini-notation/)
- [Plugin de Obsidian](https://github.com/dudaanton/obsidian-strudel-plugin)
- Snippets listos: `6. Práctica/2. Plantillas/Snippets/`
- Beats desde cero: [[1. Beats desde cero]]

---

## Archivo: `4. Instrumento/2. Strudel/1. Componiendo.md`

# Guía avanzada de recursos Strudel para componer con Improviser

## 0. Idea central

Strudel no es solo un “arpegiador”. Es un sistema para separar cuatro cosas que normalmente se mezclan:

| Capa       | Pregunta musical         | Recurso Strudel                                       |
| ---------- | ------------------------ | ----------------------------------------------------- |
| Ritmo      | ¿Cuándo ocurre?          | mini-notación, `.struct()`, `.mask()`, euclidianos    |
| Altura     | ¿Qué nota o grado suena? | `note()`, `n()`, `.scale()`, `.chord()`, `.voicing()` |
| Movimiento | ¿Cómo cambia?            | `.off()`, `.every()`, `.lastOf()`, `.rev()`, `.ply()` |
| Forma      | ¿Cuándo entra o sale?    | `cat()`, `arrange()`, `.firstOf()`, `.lastOf()`       |

En tu sistema, Strudel debe pensarse como **secuenciador MIDI hacia Sonar**. El Strudel de Obsidian puede sonar con samples, pero tu motor local no carga samples: un `s("bd")` no suena ahí; el motor local manda MIDI hacia Sonar.

La regla de tempo que conviene mantener es: **un ciclo = un compás**. En 4/4 usa `setcpm(BPM/4)`; en 3/4, `setcpm(BPM/3)`; en 6/8, `setcpm(BPM/2)`.

---

## 1. Plantilla madre para composición MIDI

Esta plantilla no compone por ti. Tú decides tonalidad, acordes, tempo, ritmo y motivo.

```strudel
setcpm(/* TÚ: BPM */ / 4)

// =====================
// MATERIAL
// =====================

const PROG = "< /* TÚ: acordes, ej. Am F C G */ >"
const SCALE = "/* TÚ: raíz */:/* TÚ: escala */"

const BASS_RHY = "/* TÚ: ritmo de bajo con x y ~ */"
const PAD_RHY  = "/* TÚ: ritmo de pad con x y ~ */"
const ARP_RHY  = "/* TÚ: ritmo de arpegio con x y ~ */"

const ARP_ORDER = "/* TÚ: orden de voces del acorde, ej. 0 2 1 3 2 1 */"

// =====================
// STR - Bass · canal 2
// =====================

$: chord(PROG)
  .rootNotes(2)
  .note()
  .struct(BASS_RHY)
  .velocity(/* TÚ: 0–1 */)
  .midichan(2)
  .midi(OUT)

// =====================
// STR - Pad · canal 3
// =====================

$: chord(PROG)
  .voicing()
  .struct(PAD_RHY)
  .velocity(/* TÚ: 0–1 */)
  .midichan(3)
  .midi(OUT)

// =====================
// STR - Arp · canal 4
// =====================

$: n(ARP_ORDER)
  .chord(PROG)
  .mode("above:c4")
  .voicing()
  .struct(ARP_RHY)
  .velocity(/* TÚ: patrón de acentos */)
  .midichan(4)
  .midi(OUT)
```

`chord()`, `.voicing()`, `.rootNotes()`, `.scale()` y `.mode()` son recursos tonales de Strudel para convertir símbolos de acordes o grados en notas tocables; `.voicing()` puede alinear acordes según un ancla y modo como `above`, `below` o `root`.

---

## 2. Arpeggiator avanzado en Strudel

En Sonar, un patrón de arpegiador guarda **cuándo ocurre cada nota, qué altura relativa usa, duración y velocity**. La distinción importante es: `Rate`, `Swing` y `Octave Range` son configuración; el **pattern** contiene el movimiento musical específico.

En Strudel, construyes ese pattern con piezas explícitas:

```text
arpegiador = acorde + orden de voces + ritmo + rango + acento + variación
```

### 2.1 Arpegio por voces del acorde

```strudel
const PROG = "<G7>"

const ARP_ORDER = "0 2 1 3 2 1" // TÚ: orden dentro del acorde
const ARP_RHY = "[x ~ x ~] [~ x x ~] [x ~ ~ x] [~ x ~ ~]"

$: n(ARP_ORDER)
  .chord(PROG)
  .mode("above:c4")
  .voicing()
  .struct(ARP_RHY)
  .velocity("[.8 .45 .6 .4]*4")
  .midichan(4)
  .midi(OUT)
```

**Decisión:** el arpegio no “sube y baja”; revela el acorde en un orden propio. Eso lo acerca más a un patrón de guitarra/piano que a un preset genérico.

### 2.2 Arpegio lento, dream pop

```strudel
const PROG = "< /* TÚ: acordes */ >"

$: n("0 2 3 1")
  .chord(PROG)
  .mode("above:c4")
  .voicing()
  .struct("x ~ ~ ~ [~ x ~ ~] ~ [~ ~ x ~]")
  .velocity(".55")
  .late(.006)
  .midichan(4)
  .midi(OUT)
```

Usa esto cuando quieras que el arpegio sea **atmósfera**, no motor rítmico.

### 2.3 Arpegio motor

```strudel
const PROG = "< /* TÚ: acordes */ >"

$: n("0 1 2 3 2 1 0 2")
  .chord(PROG)
  .mode("above:c4")
  .voicing()
  .struct("x*8")
  .velocity("[.75 .35]*4")
  .midichan(4)
  .midi(OUT)
```

Usa esto cuando el arpegio sea el reloj de la pieza.

### 2.4 Arpegio que respira

```strudel
const PROG = "< /* TÚ: acordes */ >"

$: n("0 2 1 3 2 1")
  .chord(PROG)
  .mode("above:c4")
  .voicing()
  .struct("x*8")
  .mask("<1 1 0 1>")
  .velocity("[.7 .35]*4")
  .midichan(4)
  .midi(OUT)
```

`.mask("<1 1 0 1>")` apaga un compás de cada cuatro. Sirve para que el arpegio no sature.

---

## 3. Recursos de ritmo para componer

La mini-notación de Strudel está diseñada para escribir patrones rítmicos con poco texto; usa espacios para secuencias, `~` para silencios, `[ ]` para subdividir, `< >` para alternar por ciclo y `,` para capas.

### 3.1 Rejilla de semicorcheas

Escribe un grupo por tiempo:

```strudel
const RHY_16 = "[x ~ ~ ~] [~ ~ x ~] [x ~ ~ x] [~ x ~ ~]"
```

Úsalo con cualquier capa:

```strudel
$: chord(PROG)
  .rootNotes(2)
  .note()
  .struct(RHY_16)
  .midichan(2)
  .midi(OUT)
```

### 3.2 Euclidianos para síncopa

```strudel
const PUSH_3_8 = "x(3,8)"
const PUSH_5_16 = "x(5,16)"

$: chord(PROG)
  .rootNotes(2)
  .note()
  .struct(PUSH_3_8)
  .midichan(2)
  .midi(OUT)
```

Úsalo para generar empuje sin dibujar cada golpe.

### 3.3 Ritmo compartido entre kick imaginario y bajo

Aunque no haya batería MIDI todavía en Sonar, puedes diseñar el bajo como si fuera el kick:

```strudel
const GOLPES = "[x ~ ~ ~] [~ ~ x ~] [x ~ ~ ~] [~ x ~ ~]"

$: chord(PROG)
  .rootNotes(2)
  .note()
  .struct(GOLPES)
  .midichan(2)
  .midi(OUT)
```

**Decisión:** bajo y kick imaginario se abrazan. Si luego agregas batería, el bombo debe caer aquí o dejar huecos deliberados.

---

## 4. Recursos de armonía

### 4.1 Pad por acordes

```strudel
const PROG = "< /* TÚ: acordes */ >"

$: chord(PROG)
  .voicing()
  .struct("x ~ ~ ~")
  .velocity(.45)
  .midichan(3)
  .midi(OUT)
```

### 4.2 Pad con respiración

```strudel
$: chord(PROG)
  .voicing()
  .struct("<x ~ ~ ~ x ~ ~ ~>")
  .velocity("<.35 .5>")
  .midichan(3)
  .midi(OUT)
```

### 4.3 Bajo por raíz

```strudel
$: chord(PROG)
  .rootNotes(2)
  .note()
  .struct("x ~ [~ x] ~")
  .velocity(.75)
  .midichan(2)
  .midi(OUT)
```

### 4.4 Melodía por escala

```strudel
const SCALE = "/* TÚ: raíz */:minor"

$: n("/* TÚ: motivo por grados */")
  .scale(SCALE)
  .struct("/* TÚ: ritmo */")
  .midichan(4)
  .midi(OUT)
```

Usa esto cuando quieras salir del acorde y pensar en línea melódica.

---

## 5. Recursos de variación

### 5.1 `cat()` para comparar compases

```strudel
const BASS_A = "x ~ x ~"
const BASS_B = "x [~ x] ~ [~ x]"

$: chord(PROG)
  .rootNotes(2)
  .note()
  .struct(cat(BASS_A, BASS_B))
  .midichan(2)
  .midi(OUT)
```

### 5.2 `arrange()` para forma

```strudel
const bass_sparse = chord(PROG).rootNotes(2).note().struct("x ~ ~ ~")
const bass_groove = chord(PROG).rootNotes(2).note().struct("x ~ [~ x] ~")

const pad_soft = chord(PROG).voicing().struct("x ~ ~ ~")
const arp_on = n(ARP_ORDER).chord(PROG).mode("above:c4").voicing().struct("x*8")

arrange(
  [4, stack(bass_sparse, pad_soft)],
  [8, stack(bass_groove, pad_soft, arp_on)],
  [4, stack(bass_sparse, pad_soft)],
)
  .midichan(3)
  .midi(OUT)
```

Mejor: separa cada canal en su propio `$:` si quieres controlar Sonar limpio. Usa `arrange()` primero como prototipo.

### 5.3 `.lastOf()` para fill

```strudel
$: n(ARP_ORDER)
  .chord(PROG)
  .mode("above:c4")
  .voicing()
  .struct("x*8")
  .lastOf(4, x => x.ply(2))
  .midichan(4)
  .midi(OUT)
```

El fill debe anunciar un cambio real. Si no cambia nada después, quítalo.

### 5.4 `.off()` para eco contrapuntístico

```strudel
$: n("/* TÚ: motivo */")
  .scale(SCALE)
  .struct("x ~ x ~")
  .off(1/8, x => x.transpose(12).velocity(.35))
  .midichan(4)
  .midi(OUT)
```

Esto crea una segunda voz desfasada. Úsalo como eco, no como relleno automático.

---

## 6. Recursos de tiempo fino

### 6.1 Acentos

```strudel
$: n(ARP_ORDER)
  .chord(PROG)
  .mode("above:c4")
  .voicing()
  .struct("x*8")
  .velocity("[.8 .35]*4")
  .midichan(4)
  .midi(OUT)
```

### 6.2 Swing

```strudel
$: chord(PROG)
  .rootNotes(2)
  .note()
  .struct("x(3,8)")
  .swingBy(/* TÚ: 0 a .33 */, 4)
  .midichan(2)
  .midi(OUT)
```

### 6.3 Tocar atrás del beat

```strudel
$: chord(PROG)
  .voicing()
  .struct("x ~ ~ ~")
  .late(.008)
  .midichan(3)
  .midi(OUT)
```

En tus beats de referencia, `.late()` y `.early()` están planteados como microtiming en fracciones de compás; `.late(.012)` a 90 BPM equivale aproximadamente a 32 ms.

### 6.4 Humanización determinista

```strudel
$: n(ARP_ORDER)
  .chord(PROG)
  .mode("above:c4")
  .voicing()
  .struct("x*8")
  .velocity(rand.range(.35, .8))
  .midichan(4)
  .midi(OUT)
```

El azar de Strudel es determinista: depende de la posición temporal, así que al volver a ejecutar debe repetir el resultado.

---

## 7. Recursos MIDI avanzados

Strudel puede enviar MIDI con `.midi()`, seleccionar canal con `.midichan()` y también enviar control changes con `ccn`/`ccv`.

### 7.1 Automatizar un CC

```strudel
$: ccv(sine.segment(16).slow(4))
  .ccn(/* TÚ: número CC */)
  .midichan(/* TÚ: canal */)
  .midi(OUT)
```

### 7.2 Experimento con Analog Lab

En tu setup, Analog Lab usa `MIDI Channel: All`, importante porque el SMC-PAD manda batería por canal 10 y una instancia en canal 1 no lo escucharía.

El mapeo documentado del banco B del SMC-PAD en Analog Lab incluye:

|  CC | Control       |
| --: | ------------- |
|  40 | P1 Time       |
|  41 | Chorus Mix    |
|  42 | Delay Volume  |
|  44 | Master        |
|  45 | Reverb Volume |

Prueba controlada:

```strudel
// Por verificar en Sonar: si el CC llega a la instancia correcta de Analog Lab.
$: ccv(sine.segment(16).slow(8))
  .ccn(45)       // Reverb Volume en el mapeo documentado
  .midichan(3)   // STR - Pad
  .midi(OUT)
```

Si funciona, puedes convertir Strudel en automatizador de textura.

---

## 8. Batería: tres caminos

### Camino A — Obsidian con samples

Sirve para estudiar ritmo, no para tu ruteo MIDI a Sonar:

```strudel
s("bd*4, [~ sd]*2, hh*8")
  .bank("RolandTR909")
```

### Camino B — SMC-PAD manual

El SMC-PAD tiene el preset 2 con todos los pads en canal 10, y el banco 3 contiene kit GM: 36 bombo, 38 caja, 42/46 hi-hat, 39 palmas, toms, crash, ride y percusión.

Ruta conceptual:

```text
SMC-PAD banco 3 → canal 10 → pista de batería por crear → General MIDI Drums
```

### Camino C — Next para boceto rápido

Next ya tiene un proyecto de prueba con pista `General MIDI Drums`, y para oír una pista hay que armarla o activar monitor.

Úsalo si necesitas audio rápido antes de montar batería en Sonar.

---

## 9. Vocabulario propio

Nada entra al vocabulario hasta pasar cuatro pruebas:

```text
1. tocado
2. escuchado
3. usado en improvisación
4. grabado
```

Ejemplo de `2. Vocabulario/arp.js`:

```strudel
const ARP_DREAM_01 = "0 2 1 3 2 1"
const ARP_PULSE_01 = "0 1 2 1 0 1 2 3"

const RHY_ARP_SPARSE_01 = "[x ~ ~ ~] [~ x ~ ~] [~ ~ x ~] [~ ~ ~ ~]"
const RHY_ARP_PULSE_01 = "x*8"

const VEL_SOFT_8 = "[.65 .35]*4"
const VEL_PUSH_16 = "[.8 .3 .5 .3]*4"
```

Regla: aquí solo van `const`. No pongas `$:` en vocabulario.

---

## 10. Tres estudios para empezar a componer

### Estudio 1 — Bajo + pad + arpegio lento

Objetivo: 30 segundos de audio con armonía clara.

```strudel
setcpm(/* TÚ: BPM */ / 4)

const PROG = "< /* TÚ: 4 acordes */ >"

$: chord(PROG)
  .rootNotes(2)
  .note()
  .struct("/* TÚ: ritmo de bajo */")
  .midichan(2)
  .midi(OUT)

$: chord(PROG)
  .voicing()
  .struct("x ~ ~ ~")
  .velocity(.4)
  .midichan(3)
  .midi(OUT)

$: n("/* TÚ: orden de arpegio */")
  .chord(PROG)
  .mode("above:c4")
  .voicing()
  .struct("/* TÚ: ritmo de arp */")
  .velocity("[.6 .35]*4")
  .midichan(4)
  .midi(OUT)
```

**## Decisiones**

```markdown
- Arpegio por voces del acorde en `STR - Arp` — convierte la armonía en movimiento sin tocar bloques completos. → [[arpegio]]
- Bajo con ritmo propio en `STR - Bass` — define el peso de la sección antes de agregar batería. → [[bajo]]
```

### Estudio 2 — El mismo material, tres densidades

Objetivo: convertir un loop en forma.

```strudel
setcpm(/* TÚ: BPM */ / 4)

const PROG = "< /* TÚ */ >"

const bass_low = chord(PROG).rootNotes(2).note().struct("x ~ ~ ~")
const bass_mid = chord(PROG).rootNotes(2).note().struct("x ~ [~ x] ~")
const pad = chord(PROG).voicing().struct("x ~ ~ ~")
const arp = n("/* TÚ */").chord(PROG).mode("above:c4").voicing().struct("x*8")

$: arrange(
  [4, bass_low.midichan(2)],
  [4, bass_mid.midichan(2)],
  [4, bass_low.midichan(2)],
).midi(OUT)

$: arrange(
  [4, pad.midichan(3)],
  [4, pad.midichan(3)],
  [4, pad.midichan(3)],
).midi(OUT)

$: arrange(
  [4, silence],
  [4, arp.midichan(4)],
  [4, silence],
).midi(OUT)
```

### Estudio 3 — Arpegio como hook

Objetivo: que el arpegio sea recordable sin cambiar acordes.

```strudel
setcpm(/* TÚ: BPM */ / 4)

const PROG = "< /* TÚ */ >"
const MOTIVO = "/* TÚ: 5–8 números, no más */"

$: n(MOTIVO)
  .chord(PROG)
  .mode("above:c4")
  .voicing()
  .struct("x*8")
  .every(4, x => x.rev())
  .velocity("[.8 .35]*4")
  .midichan(4)
  .midi(OUT)
```

**Regla:** si el hook no se puede tararear después de apagarlo, simplifícalo.

---

## 11. Definición de hecho

Una sesión de composición con esta guía termina cuando existen:

```text
3. Composiciones/<obra>/
├── <obra>.md
└── render/
    └── AAAA-MM-DD <obra> strudel-arp-01.m4a
```

O, si todavía no es una obra:

```text
6. Práctica/4. Bitácora/
└── AAAA-MM-DD strudel-recursos-arp-01.m4a
```

Commit:

```bash
git add .
git commit -m "Explora recursos de arpegio en Strudel para composición"
```

No evalúes si “está bueno” el mismo día. Solo verifica que el audio existe.

---

## 12. Fallas probables

| Síntoma                             | Causa probable                                    | Qué mirar                                          |
| ----------------------------------- | ------------------------------------------------- | -------------------------------------------------- |
| Strudel corre pero no suena         | Fase 2 / puente MIDI no verificado                | `npm run prueba` debe hacer sonar `STR - Bass`     |
| `s("bd")` no suena                  | Estás en motor local MIDI, no en Obsidian samples | Usa notas MIDI o SMC-PAD                           |
| Sonar recibe MIDI pero no suena     | Input Echo apagado o pista incorrecta             | Pista de instrumento con Analog Lab V              |
| Los pads no suenan                  | Analog Lab no escucha canal 10                    | `MIDI Channel: All`                                |
| Todo suena lleno pero sin dirección | Muchas capas con la misma función                 | Quita una capa; deja bajo + pad + un recurso nuevo |
| El arpegio suena genérico           | Solo sube y baja                                  | Cambia `ARP_ORDER`, no el preset                   |
| El grave se embarra                 | Bajo demasiado denso o reverb abajo               | Baja densidad; reverb solo arriba                  |

---

## Archivo: `4. Instrumento/2. Strudel/6. Arpegiadores/README.md`

```yaml
tipo: mapa
estado: vigente
area: 4. Instrumento
```

# Arpegiadores

> [!abstract] Qué es esta carpeta
> Lo que pongas aquí **se convierte** en arpegios para tocar fuera de Strudel: un preset del
> arpegiador de Sonar (`.ARP`) y un MIDI (`.mid`). El strudel es la fuente; lo demás se regenera
> con un comando.

## Cómo se organiza

**Una subcarpeta por estilo**, con número delante como el resto de la bóveda: `1. Dream pop/`,
`2. Folk/`… La creas cuando llegue el primer arpegio de ese estilo; el script recorre todas.

Cada strudel tiene al lado sus cuatro salidas, con su mismo nombre (aquí, uno llamado `Brillo`):

```text
6. Arpegiadores/
├── README.md                ← esta nota
└── 1. Dream pop/
    ├── Brillo.strudel.js    ← lo escribes tú: la única fuente
    ├── Brillo frase.ARP     ← generado · Sonar, forma Rhythm
    ├── Brillo ritmo.ARP     ← generado · Sonar, forma Forward
    ├── Brillo frase.mid     ← generado · MIDI con las notas
    └── Brillo ritmo.mid     ← generado · MIDI con solo el ritmo
```

Es la misma idea que `.mscz` y `.musicxml` en `7. Partituras/`: dos archivos hermanos, uno se
escribe y el otro se deriva.

## Qué se convierte

- **La variable que usa `.arp(`** (por ejemplo `let synth = chord(PROG).voicing().arp(ARP_ORDER).struct(ARP_RYTHM)`).
- **Si ninguna usa `.arp(`, todas las notas** que toca el archivo: sus bloques `$:` o lo que devuelve al final.
- **La percusión no sale**: `s("bd")` no tiene nota. Puedes dejar la batería en el archivo para
  escuchar el arpegio en contexto.
- **Un ciclo es un compás de 4/4**: escribe el tempo como `setcpm(BPM / 4)`.
- **El bucle dura lo que tarda el patrón en repetirse**: si `PROG`, `ARP_ORDER` y `ARP_RYTHM`
  alternan 6 elementos, 6 compases. Se busca hasta 32; si tarda más, `--ciclos N`.
- Si hay dos variables con `.arp(`, el script lo dice y no elige por ti.

## Convertir

```bash
./_scripts/strudel-a-arp.py              # esta carpeta, y los .js sueltos de 2. Strudel con .arp(
./_scripts/strudel-a-arp.py --comprobar  # qué cambiaría, sin escribir nada
./_scripts/strudel-a-arp.py "4. Instrumento/2. Strudel/6. Arpegiadores/1. Dream pop/Brillo.strudel.js" --parte bass
```

Solo se reescribe lo que cambia, así que el commit muestra qué arpegios tocaste.

## frase y ritmo

| | `frase` | `ritmo` |
|---|---|---|
| Qué guarda | las notas como suenan en Strudel, con la progresión incluida | cuándo entra cada nota, cuánto dura y qué tan fuerte; todas en C3 |
| `.ARP` en Sonar | forma *Rhythm*: Sonar transpone la frase a la nota más grave que mantienes. El script dice qué nota mantener para oírla en su tono | forma *Forward*: arpegia el acorde que mantienes, con tu ritmo |
| `.mid` | un clip para arrastrar a una pista (o abrir en MuseScore), con el tempo de `setcpm` | un clip de ritmo para otro arpegiador o DAW |

El arpegiador de Sonar **no puede** hacer lo que hace `.arp()` de Strudel, que elige el grado *n*
del acorde que suena: por eso salen estas dos versiones. Explicación en
[[0. Cakewalk Sonar#Arpegiador]].

## En Sonar

- **`.ARP`**: `./_scripts/strudel-a-arp.py --instalar`, una sola vez, enlaza esta carpeta como
  `Arpeggiator Patterns\Arpegiadores`. Desde ahí: Inspector → **Arpeggiator** → presets →
  **Arpegiadores** → estilo → preset. El tempo del proyecto, el de `setcpm`.
- **`.mid`**: en el **Media Browser**, guarda esta carpeta como *Content Location* y arrastra el
  clip a una pista.

## Reglas

1. **El strudel es la única fuente.** Los `.ARP` y `.mid` no se editan a mano: el próximo comando
   los pisa.
2. **Si ajustas un preset en Sonar**, guárdalo con otro nombre (sin ` frase` ni ` ritmo` al
   final), o el comando lo pisa.
3. **Nada se borra.** Si renombras o mueves un strudel, sus salidas viejas se quedan; el comando
   las avisa como *sin strudel* y se mueven a `_legacy/`.

> [!warning] Obsidian no muestra `.js` ni `.mid`
> Los strudels se ven y se editan en VS Code. En Obsidian solo está esta nota.

---

## Archivo: `4. Instrumento/2. Strudel/.motor/puertos.js`

```js
// Puerto MIDI virtual al que Strudel manda las notas.
//
// Strudel elige el primer puerto cuyo nombre CONTIENE este texto, así que el
// mismo nombre sirve en los dos sistemas si el puerto se llama igual:
//   Windows → loopMIDI:  "Improviser - Strudel Out"
//   macOS   → IAC Driver: Chrome lo muestra como "IAC Driver Improviser - Strudel Out"
//
// Los patrones nunca escriben el nombre: usan la constante OUT.
export const OUT = 'Improviser - Strudel Out'
```
