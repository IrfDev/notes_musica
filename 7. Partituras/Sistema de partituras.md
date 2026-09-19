---
tags: [sistema, partituras, musescore]
---

# Sistema de partituras

Cómo están organizadas, versionadas y renderizadas las partituras de esta
bóveda, y por qué de esta manera. Para el día a día, ve a
[[Cómo usar las partituras]].

Montado el 2026-09-19 sobre 59 partituras que vivían fuera de todo control de
versiones.

---

## El problema que resuelve

Las partituras se editan en MuseScore, que guarda en `.mscz`. Obsidian no sabe
leer ese formato, y ningún plugin lo hace: `.mscz` es un ZIP propietario.
Además, guardar en MuseScore **sobrescribe** — su carpeta `.mscbackup` guarda
exactamente **un** estado anterior por partitura, que es una red contra caídas
del programa, no un historial.

Antes de este sistema, el flujo real era: capturar la pantalla de MuseScore y
pegar el PNG en la nota. Quedaron 76 imágenes así en `9. Assets/`.

## Las tres capas

```
   MuseScore                  el script                   Obsidian
  ┌──────────┐              ┌───────────┐              ┌──────────┐
  │  .mscz   │ ───────────▶ │ .musicxml │ ───────────▶ │ Verovio  │
  └──────────┘              └───────────┘              └──────────┘
   fuente de                 derivado,                  render SVG
   la verdad                 desechable                 + play MIDI
```

Los dos archivos son hermanos, mismo nombre, misma carpeta:

```
7. Partituras/2. Composiciones/Nocturno primer intento.mscz
7. Partituras/2. Composiciones/Nocturno primer intento.musicxml
```

El `.musicxml` **nunca se edita a mano**: el próximo sync lo pisa. Se puede
borrar la colección entera y regenerarla en unos segundos.

## Por qué el `.mscz` manda

MuseScore abre y edita MusicXML sin problema, así que sería tentador trabajar
solo en ese formato y ahorrarse la conversión. Se midió el viaje completo
(`.mscz` → `.musicxml` → `.mscz`) sobre "20 Nocturno", y no conviene.

**La música sobrevive intacta:**

| | Original | Después |
|---|---|---|
| Notas | 378 | 378 |
| Acordes | 309 | 309 |
| Silencios | 1778 | 1778 |
| Compases | 1782 | 1782 |
| Ligaduras | 17 | 17 |

**Lo que se pierde es el entorno.** El mezclador quedó vacío:
`audiosettings.json` pasó de 4.462 a 190 bytes — instrumentos, volúmenes,
cadena de efectos y perfil de sonido, borrados. El archivo de estilo se
reescribió con valores por defecto. Y apareció una articulación que no estaba.

Por eso: `.mscz` fuente, `.musicxml` derivado. Nunca al revés.

## Dónde vive cada cosa

```
7. Partituras/
├── 1. Clases/           27   ejercicios con Fabs
├── 2. Composiciones/     9   piezas propias
├── 3. Referencias/       4   obras de otros
├── 4. Cursos/            3   Cresciente
├── Cómo usar las partituras.md
└── Sistema de partituras.md      ← esta nota

_legacy/partituras/      12   descartes; nada se borra
_scripts/                 6   la herramienta
```

Se eligió **una carpeta central** en vez de repartir cada partitura junto a su
nota, por consistencia con cómo ya funcionaba la bóveda: las 76 imágenes están
en `9. Assets/` y ninguna junto a la nota que la usa.

La carpeta por defecto de MuseScore apunta aquí
(Preferencias · General · Carpetas · Partituras).

## Nomenclatura

El principio: **git guarda las versiones, el nombre identifica la obra.** En
cuanto git versiona, los `19.2`, `21.11` y `3era iteración` sobran.

1. **Sin número de iteración.** Las iteraciones son commits.
2. **Variantes con sufijo descriptivo, no numérico.** `Contrapunto - 3a especie`,
   no `12. Repaso contrapunto 3era`.
3. **Sin `:`** — rompe las rutas de Obsidian. Sin espacios al final.
4. **Todo archivo tiene nombre.** Nada de `Untitled score`.
5. Cuando dos cosas distintas comparten nombre legítimamente, **las separa la
   fecha**: `Voicing - escalas menores - 2025-06-01`.

## El modelo de versionado

Git no versiona archivos por separado: versiona **momentos de la bóveda
entera**. Un commit es una foto con fecha y motivo, y en esa foto entran a la
vez la partitura y la nota que la comenta. Nunca se desincronizan.

```
1. Editas y guardas en MuseScore
2. ./_scripts/sync-partituras.py          regenera el .musicxml
3. git commit -am "qué cambiaste y por qué"    ← esto crea la versión
```

**El paso 3 es el que versiona.** Guardar en MuseScore solo sobrescribe.

### El diff musical

Un `.musicxml` en crudo cambia cientos de líneas cada vez que MuseScore
reacomoda la página. `.gitattributes` registra un filtro `textconv`
(`_scripts/musicxml-limpio.py`) que quita las coordenadas de dibujo antes de
comparar. Medido sobre dos versiones reales de *Enlaces Arpegios*: **137 líneas
de ruido → 5 líneas del único cambio real.**

Encima de eso, `historial.py` traduce ese diff a lenguaje musical:

```
  2026-02-10  f5396f3  [enlaces-v1]
  Enlaces arpegios: el Sol# del c.12 suena forzado, lo subo a La
     c.9    Piano              Sol#4 -> La4
```

Detecta altura, alteración, octava, figura rítmica y puntillos, por compás y
por instrumento. **No** traduce dinámicas, articulaciones, ligaduras ni textos:
git los versiona y los restaura, pero no te los narra.

El filtro vive en `.git/config`, que no se versiona. Una vez por clon:
`./_scripts/configurar-git.sh`.

### Linajes

Cuando una pieza tuvo varias versiones guardadas como archivos distintos, esas
versiones se reprodujeron como **commits fechados sobre el archivo
sobreviviente**, para que el historial sea navegable de verdad. Seis linajes:

| Pieza | Versiones |
|---|---|
| Enlaces - Crystal Silence | 4 |
| Composición binaria | 3 |
| Composición binaria con motivo | 3 |
| Composición binaria - esbozo | 2 |
| Composición binaria - con motivos | 2 |
| Voicing - práctica invertida | 2 |

Para marcar un hito: `git tag -a nocturno-v1 -m "La que le mostré a Fabs"`.

## Qué reveló el inventario

Al comparar las 59 por contenido musical real (no por nombre) aparecieron
cosas que el versionado por nombre de archivo estaba escondiendo.

**Seis partituras eran idénticas nota por nota.** Cuatro de ellas —
`14. Arpegios`, `14.1 … con ritmos`, `14.2 Arpegios con ritmo` y
`16 Enlaces Arpegios` — son **exactamente la misma música**. Lo único distinto
era el título escrito dentro. Los nombres prometían variaciones rítmicas que
no existen. Están en `_legacy/partituras/identicas/`.

**Dos archivos mentían sobre su contenido.** `Untitled score` no estaba sin
nombre: por dentro se titulaba *"10. Ejercicios Contrapunto Variados"*. Y los
dos `ejercico motivos` no eran de motivos — por dentro decían *"16.1 Enlaces
Crystal Silence"*, y pasaron a ese linaje.

**La numeración no correspondía con las clases.** Eran dos contadores
independientes que se separaron: la nota *21. Tonos guías* correspondía a la
partitura *15. Tonos guía*; *23. Motivos* a *20. Motivos random*. El número
parecía un vínculo y no lo era.

**No hay un estilo propio.** Las 42 partituras con estilo incrustado usan 13
variantes, pero al agruparlas por versión de MuseScore (4.10, 4.30, 4.40,
4.50×5, 4.60×5) se ve que es **el mismo estilo de fábrica congelado en cinco
versiones de la aplicación**. Dentro de una misma versión difieren en **un
solo ajuste**. Comparado con el default actual: 13 valores distintos sobre
1.289 en un caso, 4 sobre 1.466 en el otro — y casi todos son cambios que hizo
MuseScore en su propio default, no decisiones.

La excepción es `Contrapunto - 1a especie (Fabs)`, con **38 valores tocados a
mano** (separación de alteraciones, grosor de cejillas, espaciado de trastes,
silencios multicompás). Es el único estilo con criterio de la colección, y es
de Fabs. Si algún día se quiere una identidad visual propia, ese es el punto
de partida, no el default.

El estilo incrustado pesa **616 KB, el 26% del peso total** de los `.mscz`.

## Trampas conocidas

**`.mxl` no funciona.** El plugin Verovio lee los archivos como texto, y el
`.mxl` es un ZIP. Solo `.musicxml` sin comprimir. Los dos `.mxl` que había
están en `_legacy/partituras-mxl/`.

**Normalización Unicode.** Los `.mscz` bajados del navegador traen los acentos
en NFC y MuseScore escribe la salida en NFD. Para APFS son el mismo archivo,
pero como cadena de texto no coinciden. Todo script que compare rutas normaliza
a NFC antes. Renombrar a NFC en disco no sirve: APFS no cambia la forma
almacenada.

**Git escapa los acentos.** `git ls-files` devuelve `Composici\303\263n` salvo
que se le pase `-c core.quotePath=false`. Sin eso, los scripts se saltan en
silencio la mayoría de estas partituras.

**`with_suffix()` de Python.** Los nombres llevan puntos (`14.1 Arpegios…`), así
que `with_suffix()` se come parte del nombre. Los scripts usan una función
explícita que concatena la extensión.

**El `.mscz` es binario.** Git lo guarda y lo restaura íntegro — verificado byte
a byte — pero no lo compara. El diff musical sale del `.musicxml`; por eso se
versionan los dos.

## Pendiente

- Extraer el estilo de Fabs como `.mss` versionado, si se quiere una identidad
  visual propia.
- El commit del 2026-04-21 en *Composición binaria* dice "tercera iteración"
  pero no cambió ninguna nota: era un par idéntico que entró como versión en
  vez de archivarse. El historial lo dice correctamente ("sin cambios
  musicales"); solo el mensaje promete de más.
