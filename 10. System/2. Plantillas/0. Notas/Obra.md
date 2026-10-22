---
tipo: composicion
estado: boceto
titulo:
inicio: "{{date:YYYY-MM-DD}}"
cierre:
formato:
fuente:
instrumentos: []
tonalidad:
metrica:
tempo:
definicion_terminado:
referencias:
conceptos:
ultimo_audio:
tags:
  - curso-musica/obra
---

# {{title}}

> [!important] Antes de la primera nota
> `definicion_terminado` se escribe **hoy**, no cuando la pieza esté avanzada.
> "Que quede bien" no es una definición. "90 s, forma AABA, una toma limpia exportada" sí.

> [!info] Cómo se llena la ficha
> - **Se guarda como `0. Obra.md`** dentro de `3. Composiciones/<n>. <obra>/`. El nombre de la pieza va en `titulo`, no en el archivo.
> - `formato`: `musescore`, `strudel` o `ambos`.
> - `fuente`: la ruta al archivo que se edita. El `.mscz` vive en `7. Partituras/2. Composiciones/`; un `.strudel.js` se queda donde esté.
> - `instrumentos`: el vocabulario de instrumento de los alcances (`piano`, `guitarra`, `bateria`), sin acentos.

- 🗺️ [[1. Mapa|Mapa]] · 📜 [[2. Decisiones|Decisiones]] · 🎧 [[4. Contexto|Contexto]] · 🎯 [[6. Hallazgos|Hallazgos]]

## Origen

<!-- De dónde salió. Qué escuchabas, qué acorde, qué ritmo tenías en la cabeza. -->

## Sesiones

```base
filters:
  and:
    - file.path.startsWith(this.file.folder)
    - file.folder.endsWith("3. Sesiones")
views:
  - type: table
    name: Sesiones
    order:
      - file.name
      - fecha
      - tipo_sesion
      - ataca
```

## Feedback

```base
filters:
  and:
    - file.path.startsWith(this.file.folder)
    - file.folder.endsWith("5. Feedback")
views:
  - type: table
    name: Feedback
    order:
      - file.name
      - fecha
      - alcance
      - siguiente
```

## Grabaciones

> Bounce incondicional: cada vez que dejas de trabajar, exportas. Aunque esté feo.
> Van a `render/` con la fecha delante.

| Fecha | Archivo | Qué cambió respecto a la anterior |
|---|---|---|
| | | |

---

## Cierre

- [ ] Cada sección del [[1. Mapa|Mapa]] cumple lo que quería
- [ ] Se cumple `definicion_terminado`
- [ ] Rúbrica aplicada → [[Rúbrica - Composición]]
- [ ] Escuchada tras 24 h de descanso
- [ ] Exportada con fecha
- [ ] Retrospectiva de tres líneas

### Retrospectiva

- Qué aprendí:
- Qué evitaría la próxima:
- Qué me llevo a la siguiente pieza:

### Qué sube a Teoría

> Una obra no es solo un producto: es una fuente.
> Lo que descubriste aquí pertenece a una nota de concepto, con enlace de vuelta a esta pieza.

- [ ] `[[...]]` ←
