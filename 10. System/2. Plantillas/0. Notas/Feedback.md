---
tipo: feedback
estado: vigente
numero:
fecha:
alcance:
evaluado:
  - archivo:
    commit:
    limpio:
    blob:
    guardado:
contexto: []
anterior:
siguiente:
---

# Feedback NN · <alcance>

> [!info] Fuente
> **IA, AAAA-MM-DD.** Qué cambió desde el feedback anterior de este alcance, y qué sesiones se leyeron como
> contexto. Cómo se midió, en una línea.

> [!abstract] Qué se evaluó, exactamente
> | Archivo | Commit | ¿Limpio? | Blob | Guardado |
> |---|---|---|---|---|
> | `<ruta al .mscz o al .strudel.js>` | `<commit>` | sí / no | `<blob>` | AAAA-MM-DD HH:MM |
>
> - **Limpio** (el archivo es igual al del commit): se recupera con `git show <commit>:"<archivo>"`.
> - **No limpio** (tenía cambios sin commit): el blob identifica el contenido exacto, pero no lo guarda.
>   Para volver a él hace falta un commit.

> [!important] Qué cuenta como error
> Un error es cuando **lo que escribiste dice una cosa y lo que suena dice otra**: el cifrado, el
> [[1. Mapa|Mapa]], las [[2. Decisiones|Decisiones]] o el [[4. Contexto|Contexto]] (una toma ✅ que no se
> oye, o una ❌ que se coló). Lo que contradice una decisión vigente no se reporta. Los ejemplos muestran
> **lo que suena hoy**; no traen correcciones.

## Lista

| ID | Dónde | Qué escribiste | Qué suena | Peso | Contra | Estado |
|---|---|---|---|---|---|---|
| | | | | | Mapa / D-NN / R-NN / cifrado | |

**Cerrados en este feedback:** <!-- una línea, o "ninguno" -->

## Uno por uno

### H-NN · <título>

**Qué escribiste.**

**Qué suena.**

<!-- Al menos un recurso que deje ver o escuchar el problema: music-abc, tabla, mermaid, strudel o gráfica. -->

```music-abc
X:1
T:c.NN como suena hoy
M:3/4
L:1/8
K:C
V:1 clef=treble name="Piano MD"
V:2 clef=bass name="Piano MI"
[V:1] z6 |]
[V:2] z6 |]
```

**Qué pasa.**

**¿Es un error?**

## Siguiente

➡️ **H-NN**: una sola recomendación.

## Propuestas

- **Para Decisiones:** `D-NN · … · porque ____`
- **Para el Mapa:**
- **Para Contexto:** `R-NN · <referencia> · <momento> · ____ · aspecto → destino`

## Cómo se midió

-
