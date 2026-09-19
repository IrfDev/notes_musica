# Cómo incrustar partituras

Las partituras se editan en MuseScore y se leen en Obsidian. Son dos carpetas
distintas y un script las mantiene sincronizadas.

```
~/Documents/MuseScore4/Scores/        ← editas aquí (.mscz)
            │
            │  ./_scripts/sync-partituras.py
            ▼
5. Referencias/2. Partituras/_generado/   ← Obsidian lee aquí (.musicxml)
```

`_generado/` es **derivado y desechable**: se puede borrar entero y regenerar.
Nunca edites un `.musicxml` a mano — el próximo sync lo pisa.

## Flujo de trabajo

1. Editas y guardas en MuseScore, como siempre.
2. En la terminal, desde la raíz de la bóveda:

   ```
   ./_scripts/sync-partituras.py
   ```

   Solo reconvierte lo que cambió. Con todo al día tarda menos de un segundo.
3. Refrescas la nota en Obsidian.

## Incrustar una partitura en una nota

Ruta relativa a la raíz de la bóveda, dentro de un bloque `verovio`:

```verovio
5. Referencias/2. Partituras/_generado/17. Arpegios Down Chorus .musicxml
scale: 40
adjustPageHeight: true
```

Las opciones van **después** de la ruta, una por línea, en formato `clave: valor`.

| Opción | Qué hace |
|---|---|
| `scale: 40` | Tamaño del grabado (el global está en 62; para notas suele quedar mejor 35–45) |
| `measureRange: 12` | Muestra un solo compás — útil para señalar un pasaje concreto |
| `adjustPageHeight: true` | Recorta el alto sobrante |
| `breaks: auto` | Cómo reparte los sistemas |
| `darkMode: true` | Invierte para tema oscuro |

Al hacer clic en el pentagrama se abre el editor de Verovio en el panel lateral.
El botón de play reproduce por MIDI y va resaltando las notas.

### Un solo compás

```verovio
5. Referencias/2. Partituras/_generado/20 Nocturno, primer intento.musicxml
measureRange: 3
scale: 50
```

## Detalles que importan

- **Solo `.musicxml` sin comprimir.** El plugin lee los archivos como texto, así
  que los `.mxl` (que son ZIP) no funcionan aunque Verovio entienda el formato.
- **Sin `:` en los nombres.** El script los convierte a ` -` porque rompen las
  rutas. `14. Arpegios: Crystal Silence` queda como `14. Arpegios - Crystal Silence`.
- **Notación corta inline.** Para un ejemplo de dos compases no hace falta
  MuseScore; el mismo bloque acepta ABC directo:

  ```verovio
  X:1
  M:4/4
  L:1/4
  K:G
  |: G2 B2 | d4 :|
  ```

## Otros comandos

```
./_scripts/sync-partituras.py --dry-run   # qué haría, sin tocar nada
./_scripts/sync-partituras.py --force     # reconvierte todo desde cero
./_scripts/ordenar-downloads.py           # ordena .mscz sueltos en ~/Downloads
```

`ordenar-downloads.py` clasifica por contenido musical real (no por nombre) y
archiva lo descartado en `~/Documents/MuseScore4/_legacy/`. Muestra el plan por
defecto; ejecuta solo con `--apply`.
