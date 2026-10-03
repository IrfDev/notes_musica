---
tipo: mapa
estado: vigente
area: 4. Instrumento
---

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
