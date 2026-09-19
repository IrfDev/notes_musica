# Cómo usar las partituras

Las partituras viven aquí, dentro de la bóveda, versionadas en git junto a las
notas que las comentan. Cada una son dos archivos hermanos:

```
7. Partituras/2. Composiciones/Nocturno primer intento.mscz      ← editas esto en MuseScore
7. Partituras/2. Composiciones/Nocturno primer intento.musicxml  ← esto lo lee Obsidian
```

El `.mscz` es la **única fuente de verdad**. El `.musicxml` es derivado: se
puede borrar entero y regenerar. Nunca lo edites a mano.

## El ciclo de trabajo

```
1. Editas y guardas en MuseScore
2. ./_scripts/sync-partituras.py        ← regenera el .musicxml
3. git commit -am "qué cambiaste y por qué"   ← guarda la versión
```

El paso 3 es el que crea una versión. Guardar en MuseScore **sobrescribe**;
solo el commit deja un punto al que volver.

## Ver el historial

```
./_scripts/historial.py                 # lo último de todo
./_scripts/historial.py nocturno        # el historial de una partitura
```

Te dice, para cada versión, cuándo fue, qué escribiste como motivo, y **qué
cambió musicalmente**:

```
  2026-02-10  f5396f3  [enlaces-v1]
  Enlaces arpegios: el Sol# del c.12 suena forzado, lo subo a La
     c.9    Piano              Sol#4 -> La4
```

Detecta alturas, alteraciones, octavas, figuras rítmicas y puntillos, por
compás y por instrumento. **No** traduce dinámicas, articulaciones, ligaduras
ni textos — git sí los versiona y los restaura, pero no te los narra.

Para comparar dos archivos sueltos:

```
./_scripts/diff-musical.py vieja.musicxml nueva.musicxml
```

## Marcar un hito

```
git tag -a nocturno-v1 -m "La versión que le mostré a Fabs"
```

La etiqueta aparece luego en el historial junto al commit.

## Recuperar una versión vieja

```
git log --oneline -- "7. Partituras/2. Composiciones/Nocturno primer intento.mscz"
git show <hash>:"7. Partituras/2. Composiciones/Nocturno primer intento.mscz" > /tmp/vieja.mscz
```

Sale byte por byte idéntica al original. Abre en MuseScore tal cual estaba.

## Incrustar una partitura en una nota

Ruta relativa a la raíz de la bóveda, dentro de un bloque `verovio`:

```verovio
7. Partituras/2. Composiciones/Dawn Chorus - arpegios.musicxml
scale: 40
adjustPageHeight: true
```

Las opciones van **después** de la ruta, una por línea.

| Opción | Qué hace |
|---|---|
| `scale: 40` | Tamaño del grabado (35–45 suele quedar bien dentro de una nota) |
| `measureRange: 12` | Muestra un solo compás |
| `adjustPageHeight: true` | Recorta el alto sobrante |
| `darkMode: true` | Invierte para tema oscuro |

Al hacer clic en el pentagrama se abre el editor de Verovio en el panel
lateral. El botón de play reproduce por MIDI resaltando las notas.

### Un solo compás

```verovio
7. Partituras/2. Composiciones/Nocturno primer intento.musicxml
measureRange: 3
scale: 50
```

### Notación corta, sin MuseScore

Para un ejemplo de dos compases, el mismo bloque acepta ABC directo:

```verovio
X:1
M:4/4
L:1/4
K:G
|: G2 B2 | d4 :|
```

## Detalles que importan

- **Solo `.musicxml` sin comprimir.** El plugin lee los archivos como texto,
  así que los `.mxl` (que son ZIP) no funcionan.
- **MuseScore puede abrir `.musicxml`, pero no lo uses como formato de
  trabajo.** La música sobrevive intacta, pero cada ida y vuelta borra el
  mezclador (instrumentos, volúmenes, efectos) y reescribe el estilo.
- **Sin `:` en los nombres**, rompe las rutas.

## En otra máquina

El filtro de diff musical vive en `.git/config`, que no se versiona. Una vez
por clon:

```
./_scripts/configurar-git.sh
```

## Todos los comandos

```
./_scripts/sync-partituras.py            # regenera el MusicXML que cambió
./_scripts/sync-partituras.py --dry-run  # qué haría, sin tocar nada
./_scripts/sync-partituras.py --force    # reconvierte todo
./_scripts/historial.py [partitura]      # historial con cambios musicales
./_scripts/diff-musical.py a.xml b.xml   # comparar dos archivos
./_scripts/ordenar-downloads.py          # ordena .mscz sueltos en ~/Downloads
./_scripts/configurar-git.sh             # activa el diff musical (una vez)
```
