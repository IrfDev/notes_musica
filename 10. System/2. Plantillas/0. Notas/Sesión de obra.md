---
tipo: sesion
estado: planeada
fecha: "{{date:YYYY-MM-DD}}"
tipo_sesion:
alcance:
viene_de:
ataca:
aplica:
commit_inicio:
commit_fin:
evidencia_audio:
tags:
  - curso-musica/sesion
---

# {{title}}

> [!info] Cómo se llena
> - **Nombre:** `3. Sesiones/NN. <alcance>.md`, con `NN` corrido por obra, por ejemplo `12. B2.guitarra.energia.md`.
> - `tipo_sesion`: `correccion` (viene del último feedback) o `libre` (viene del Mapa).
> - `alcance`: `sección.instrumento.aspecto`, omitiendo lo que no aplica.
> - `viene_de`: el feedback del que sale, por ejemplo `"[[5. Feedback/07. B2.guitarra.energia|F 07]]"`. Vacío si es libre.
> - `ataca`: **un solo** hallazgo, por ejemplo `"[[6. Hallazgos#^h-07|H-07]]"`. Vacío si es libre.
> - `aplica`: en una sesión libre, la toma de Contexto que pones en la pieza, por ejemplo `"[[4. Contexto#^r-03|R-03]]"`.
> - `commit_inicio`: `git log -1 --format=%h` antes de empezar.

## Antes · 2 min

- **Objetivo:**
- **Cómo sabré que funcionó:**

## Trabajo

### Intento 1

- Qué hice:
- Qué ocurrió:

### Si falló

- Diagnóstico: `percepción / comprensión / planificación / ejecución / memoria / diseño`
- Qué cambio de estrategia:

## Cierre · 3 min

- **Qué cambié:** <!-- del diff musical (historial.py) o del git diff del Strudel -->
- **Por qué:**
- **Commit:** `<Obra> NN: qué cambió [H-07]`
- **Audio:** `render/AAAA-MM-DD ….m4a`
- **¿Pido feedback?** sí / no
