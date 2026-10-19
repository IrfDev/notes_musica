---
tipo: setup
estado: vigente
ultima_verificacion: 2026-10-18
---

# ChatGPT

> [!abstract] Qué guarda esta carpeta
> La configuración de los **proyectos de ChatGPT** que usan la bóveda: sus instrucciones y las fuentes
> (archivos) que se les suben. Los proyectos viven en la cuenta de ChatGPT (*AlertMedia Enterprise*),
> sección **Projects**. No son GPTs: los GPTs se retiran el 11 de diciembre de 2026.

## Los proyectos

| Proyecto | Para qué | Instrucciones | Fuentes |
|---|---|---|---|
| **Improviser** | el montaje (Strudel por MIDI + improvisar encima) y todo lo que lo rodea: equipo, piano, guitarra, Strudel, bóveda, obras | [[Improviser/Instrucciones]] | 14: el [[Improviser/00. Mapa\|mapa]] y 13 paquetes de notas |
| **Improviser Louise** | solo *Louise*: la partitura compás por compás, el código, las decisiones, el proceso | [[Improviser Louise/Instrucciones]] | 10: la [[Improviser Louise/00. Guía\|guía]], 8 paquetes y `Louise.musicxml` |

## Cómo está hecho

```text
8. Setup/6. ChatGPT/
├── README.md                    ← esta nota
├── Improviser/
│   ├── Instrucciones.md         ← se pega en Project settings → Instructions
│   ├── 00. Mapa.md              ← escrito a mano: el resumen y dónde está cada cosa
│   └── .fuentes/                ← lo genera el script: lo que se sube (Obsidian no lo indexa)
└── Improviser Louise/
    ├── Instrucciones.md
    ├── 00. Guía.md
    └── .fuentes/
```

- Cada archivo de `.fuentes/` junta varias notas **tal cual**, con su ruta delante. La bóveda es la única
  fuente de verdad: para cambiar lo que sabe ChatGPT, se cambia la nota y se regenera.
- Qué nota va en qué paquete lo dice el catálogo, arriba de `_scripts/generar-chatgpt.py`.
- La carpeta `.fuentes/` lleva punto, como `.motor/` en Strudel: son copias, y en Obsidian duplicarían
  cada búsqueda.
- Dos fuentes de Louise no son notas: la **partitura compás por compás** (leída de `Louise.musicxml`) y el
  **historial** (git y `_scripts/historial.py`).
- **Nunca se suben** PDFs de partituras con licencia (*Sleep on the Floor*), ni el material copiado de
  Cresciente (`5. Referencias/3. Cursos/`), ni licencias, números de serie o claves.

## Actualizar

```bash
./_scripts/sync-partituras.py            # que el .musicxml de Louise esté al día
./_scripts/generar-chatgpt.py            # regenera .fuentes/ de los dos proyectos
./_scripts/generar-chatgpt.py Louise     # solo Improviser Louise
./_scripts/generar-chatgpt.py --comprobar
```

En ChatGPT, en cada proyecto:

1. **Sources** → borra las fuentes que cambiaron (mismo nombre) → **Add sources** → sube los archivos de
   `.fuentes/`.
2. Si cambió `Instrucciones.md`: **⋯ → Project settings → Instructions**, pega el texto entero.
3. Anota abajo la fecha.

## Qué está cargado ahora

| Proyecto | Fuentes generadas el | Instrucciones del | Notas |
|---|---|---|---|
| Improviser | 2026-10-18 | 2026-10-18 | las 14 de `.fuentes/`, más 15 fuentes anteriores (abajo) |
| Improviser Louise | 2026-10-18 | 2026-10-18 | creado el 2026-10-18; las 10 de `.fuentes/` |

Las instrucciones anteriores de Improviser están en
[[_legacy/ChatGPT 2026-10/Improviser - Instrucciones hasta 2026-10-18]].

### Fuentes anteriores de Improviser

Antes de esta carpeta, Improviser tenía fuentes sueltas, subidas a mano:

| Fuente | Fecha | Qué era | Dónde está ahora |
|---|---|---|---|
| `gpt.md` | 2026-09-27 | el resumen de `8. Setup/` | `8. Setup/gpt.md`; superado por las fuentes 02–04 |
| `0. M-VAVE SMC-PAD.md`, `1. Arturia KeyStep mk2.md`, `2. Casio CTK-551.md` | 2026-09-27 | las notas de los aparatos | fuente 02 (versión actual) |
| `0. Cakewalk Sonar.md`, `1. Cakewalk Next.md`, `2. Analog Lab V.md` | 2026-09-27 | las notas de los programas | fuente 03 |
| `README.md`, `0. Qué es y cómo se usa.md` | 2026-10-12 / 09-27 | Strudel | fuente 05 |
| `1. Beats desde cero.md` | 2026-09-27 | guía de beats | fuente 06 |
| `Louise - 0. Intro.md`, `Louise - 0. Intro (actualizado 18-oct).md` | 2026-10-12 / 10-18 | la nota de obra de Louise | fuente 12 y proyecto *Improviser Louise* |
| `Bitácora Semana 03 - Louise, forma y cierre.md` | 2026-10-12 | la semana 03 | fuente 13 |
| *Patrones MIDI personalizados en Sonar* | 2026-09-27 | sin extensión: no es un archivo de la bóveda | — |

Todas menos la última tienen versión más nueva en las fuentes generadas, y las instrucciones dicen que
gana la del prefijo `Improviser NN -`. Quitarlas o dejarlas lo decide el usuario.

## Notas propias
