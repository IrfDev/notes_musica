# Renombrado de partituras — para revisar

Esta nota es un formulario. Corrige la columna **Nombre propuesto**, resuelve
los bloques marcados `DECIDIR`, y avísame: ejecuto el renombrado con `git mv`
(el historial se conserva) y borro esta nota.

El principio: **git guarda las versiones, el nombre identifica la obra.** Por
eso desaparecen los `19.2`, `21.11` y `3era iteración`.

Las columnas `c.` y `p` son compases y número de instrumentos: sirven para
distinguir archivos de nombre parecido.

---

## 3. Referencias — obras de otros

| Nombre actual | c. | p | Nombre propuesto |
|---|---|---|---|
| chopin-nocturne-op-9-no-2-e-flat-major | 38 | 1 | `Chopin - Nocturno op. 9 no. 2.mscz` |
| symphony-of-sorrowful-songs-canon-part | 320 | 8 | `Górecki - Sinfonía no. 3 (canon).mscz` |
| External/Radiohead/true-love-waits-radiohead | 62 | 1 | `Radiohead - True Love Waits.mscz` |
| dawn-chorus-trombone-chorale | 34 | 5 | `Thom Yorke - Dawn Chorus (coral de trombones).mscz` |

---

## 2. Composiciones — tus piezas

| Nombre actual | c. | p | Nombre propuesto |
|---|---|---|---|
| 20 Nocturno, primer intento | 891 | 1 | `Nocturno.mscz` |
| 17. Arpegios Down Chorus | 150 | 1 | `Dawn Chorus - arpegios.mscz` |

### DECIDIR 1 · La familia "Composición binaria"

Seis archivos. `19.2 3era iteración` y su `(1)` son **música idéntica**.

| Nombre actual | fecha | c. | p |
|---|---|---|---|
| 19.ComposicionBinaria | 2026-02-11 | 32 | 2 |
| 19.1.ComposicionBinaria | 2026-02-23 | 32 | 2 |
| 19.2 Segunda composición binaria | 2026-02-24 | 82 | 2 |
| 19.2 Segunda composición binaria 3era iteración (1) | 2026-02-25 | 82 | 2 |
| 19.21 (2) Segunda composición binaria | 2026-03-18 | 95 | 2 |
| 19.2 Segunda composición binaria 3era iteración | 2026-04-21 | 82 | 2 |

Los de 32 compases parecen una primera pieza y los de 82–95 otra distinta.
**¿Son dos obras (`Composición binaria I` y `II`) con sus iteraciones, o seis
ejercicios sueltos?** Si son versiones, me quedo con la última de cada una y
las anteriores quedan en el historial de git.

### DECIDIR 2 · La familia "Composición con motivo"

Cuatro archivos, todos de 283 compases y un instrumento: se ven como versiones
de una misma pieza.

| Nombre actual | fecha |
|---|---|
| 21 Composicion binaria motivo | 2026-04-06 |
| 21.2 Composicion motivo | 2026-05-12 |
| 21.1 Composicion motivo | 2026-05-16 |
| 21.11 Composicion motivo - notas de paso | 2026-06-01 |

Propuesta: `Composición con motivo.mscz` (la del 1 de junio, la más reciente),
y las tres anteriores entran como commits fechados del historial.
**¿Correcto, o alguna es una pieza aparte?**

### DECIDIR 3 · "Composición melódica" — la más nueva tiene menos

| Nombre actual | fecha | c. | p |
|---|---|---|---|
| 22.1 Composición melódica con ornamentacion melodica | 2026-06-01 | 182 | 3 |
| 22. Composición melódica | 2026-09-09 | 182 | 3 |

Lo raro: la **más reciente** es la que *no* dice "con ornamentación". Comparé
las dos y la de junio tiene ornamentación en guitarra y piano (c.45-47 y
c.61-64) que la de septiembre no tiene. **¿Volviste atrás a propósito, o la de
septiembre salió de una copia vieja?**

### DECIDIR 4 · "Motivos" — 95 compases, dos instrumentos

`19.23. Composicion con motivos` y `motivos` son **música idéntica**, y
`19.21 (2) Segunda composición binaria` tiene los mismos 95 compases.
**¿Los tres son la misma pieza?**

---

## 1. Clases — ejercicios con Fabs

| Nombre actual | c. | p | Nombre propuesto |
|---|---|---|---|
| contrapunto primera especie | 32 | 2 | `Contrapunto - 1a especie.mscz` |
| contrapunto tercera especie | 36 | 1 | `Contrapunto - 3a especie.mscz` |
| 12. Repaso contrapunto 3era especie | 120 | 2 | `Contrapunto - 3a especie (repaso).mscz` |
| quinta especie | 32 | 1 | `Contrapunto - 5a especie.mscz` |
| 13. Contrapunto 5ta especie | 120 | 1 | `Contrapunto - 5a especie (clase).mscz` |
| 2. Contrapunto | 32 | 1 | **DECIDIR 5** |
| 11. Progresiones cadenciales y contrapunto | 120 | 2 | `Progresiones cadenciales y contrapunto.mscz` |
| Progresiones | 34 | 1 | `Progresiones.mscz` |
| Ejercicio Voicing 2 | 32 | 1 | `Voicing - ejercicio 2.mscz` |
| Ejercicio Voicing 3 | 32 | 2 | `Voicing - ejercicio 3.mscz` |
| Voicing 3. Escalas menores | 32 | 1 | `Voicing - escalas menores.mscz` |
| Voicing 4. Escalas menores | 32 | 1 | **DECIDIR 6** |
| Voicing 5 AI | 32 | 1 | `Voicing - escalas menores (con AI).mscz` |
| Voicing 6. Mejorando | 32 | 1 | `Voicing - mejorando.mscz` |
| Voicing 8. Práctica invertida | 143 | 1 | `Voicing - práctica invertida.mscz` |
| 9. Voicing con contrapunto y progresiones | 159 | 1 | `Voicing con contrapunto y progresiones.mscz` |
| 9.1 Voicing con contrapunto y progresiones 2 | 209 | 1 | `Voicing con contrapunto y progresiones - 2.mscz` |
| 17. Repaso - Voicing | 150 | 1 | `Voicing - repaso.mscz` |
| 15. Tonos guía | 32 | 1 | `Tonos guía.mscz` |
| Fabs/Tonos guía | 63 | 2 | `Tonos guía (de Fabs).mscz` |
| 18. True Love Waits enlaces | 81 | 1 | `Enlaces sobre True Love Waits.mscz` |
| 20. Motivos random | 32 | 2 | `Motivos - exploración.mscz` |
| 23.0 Ejercicios de ornamentación | 121 | 1 | `Ornamentación - ejercicios.mscz` |

### DECIDIR 5 · Dos "primera especie"

`2. Contrapunto` (32 c., 1 instr., jun 2025) y `contrapunto primera especie`
(32 c., 2 instr., jun 2025) son del mismo día pero distinta música.
**¿Uno es el enunciado y otro tu respuesta? ¿Cómo los distingo?**

### DECIDIR 6 · Dos "escalas menores"

`Voicing 3. Escalas menores` y `Voicing 4. Escalas menores`, ambos 32 compases,
música distinta, junio 2025. **¿Son dos intentos del mismo ejercicio (y
entonces uno es versión del otro) o dos ejercicios distintos?**

### DECIDIR 7 · Los grupos de música idéntica

Mismo contenido musical, byte distinto. Me quedo con uno y el resto se archiva
en `_legacy/partituras/`, salvo que digas otra cosa.

| Grupo | Archivos | Me quedo con |
|---|---|---|
| Arpegios Crystal Silence | `14. Arpegios - Crystal Silence`, `14.1 ... con ritmos`, `14.2 Arpegios con ritmo`, `16 Enlaces Arpegios - Crystal Silence` | `Arpegios - Crystal Silence.mscz` |
| Enlaces | `16.1 Enlaces Arpegios Crystal Silence`, `enlaces (1)` | `Enlaces - arpegios.mscz` |
| Voicing invertida | `Voicing 8. Práctica invertida y contrapunto`, `... y contrapuntouno` | `Voicing - práctica invertida y contrapunto.mscz` |

Ojo con el primero: los nombres prometen "con ritmos" y "con ritmo", pero
las cuatro son **exactamente la misma música**. Lo único que cambia es el
título escrito dentro de la partitura.

### DECIDIR 8 · Sin nombre o sin destino claro

| Nombre actual | fecha | c. | p | Qué sé |
|---|---|---|---|---|
| Untitled score | 2025-07-30 | 131 | 1 | Entre los Voicing 8; podría ser otro intento de práctica invertida |
| Voicing 8. Práctica invertida - copy | 2025-07-01 | 93 | 1 | 93 c. contra 143 de la definitiva: es un estado anterior |
| enlaces | 2025-10-28 | 32 | 1 | Música distinta a `enlaces (1)`; ¿primera pasada? |
| ejercico motivos | 2025-11-05 | 32 | 1 | Distinta a su `(1)` |
| ejercico motivos (1) | 2025-11-12 | 32 | 1 | Una semana después; ¿versión siguiente? |

---

## 4. Cursos

| Nombre actual | c. | p | Nombre propuesto |
|---|---|---|---|
| C.1 Módulo 1 | 32 | 1 | `Cresciente/Módulo 1.mscz` |
| C1-cap-1A | 44 | 1 | `Cresciente/Módulo 1 - capítulo A.mscz` |
| C1-cap-1B | 53 | 2 | `Cresciente/Módulo 1 - capítulo B.mscz` |

**DECIDIR 9** · ¿`C.1 Módulo 1` es del mismo curso que los `C1-cap`? La fecha
(sep 2026) es posterior a `C1-cap-1A` (jun 2026) pero anterior a `C1-cap-1B`.
