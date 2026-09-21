## Dónde va cada archivo

| Archivo | Dónde | Por qué |
|---|---|---|
| Esta nota | aquí, `<lección>/Estudios/` | Punto **2** del ruteo: lo escribí yo a raíz de una clase. |
| La partitura `.mscz` | `7. Partituras/4. Cursos/Cresciente/` | Una partitura no es una nota. Y `sync-partituras.py` solo recorre esa carpeta. |
| El `.musicxml` hermano | junto al `.mscz` | Derivado. Lo genera el script; es lo que renderiza Verovio. |
| El audio | donde sea | git lo ignora. |

Todo lo que nace de una lección entra en `Estudios/`. La promoción a `3. Composiciones/` o a `5. Referencias/` es una decisión **posterior y explícita**.
