# Guía Paso a Paso para Composición Coral a 4 Voces

Esta guía te llevará sistemáticamente por el proceso de crear una composición coral a cuatro voces desde cero, siguiendo todas las reglas clásic```mermaid


## Fase 1: Preparación

### Paso 1: Define la tonalidad y el carácter

1. Elige una tonalidad (recomendado para principiantes: Do mayor, La menor, Sol mayor o Re menor)
2. Decide el carácter general (solemne, jubiloso, contemplativo)
3. Elige un compás (recomendado: 4/4 o 3/4)

### Paso 2: Planifica la estructura armónica

1. Decide la longitud aproximada (8-16 compases para empezar)
2. Planifica las cadencias principales:
   - Final: Cadencia perfecta (V-I)
   - Intermedia: Semicadencia (I-V) o cadencia rota (V-VI)

```mermaid
graph LR
    A[Inicio: I] --> B[Desarrollo: Progresión armónica]
    B --> C[Semicadencia: V]
    C --> D[Continuación]
    D --> E[Cadencia Final: V-I]
```

### Paso 3: Decide la progresión armónica básica

Para una pieza corta en Do mayor, puedes usar esta progresión básica:

## Fase 2: Escribir la melodía (soprano)

### Paso 4: Crea una línea de soprano

1. La soprano debe:

   - Tener un contorno melódico interesante
   - Mantenerse dentro del rango adecuado (Do4-Sol5)
   - Seguir movimiento principalmente por grado conjunto
   - Articular claramente las cadencias
   - Comenzar y terminar en notas del acorde de tónica

2. Ejemplo de melodía de soprano para nuestra progresión:

```music-abc
X:1
T:Línea de soprano
M:4/4
L:1/4
K:C
c2 c2 | d2 e2 | e2 d2 | c2 B2 | A2 A2 | A2 F2 | G2 G2 | c4 |]
W: I      IV     V      I      VI     II     V      I
```

### Paso 5: Verifica la melodía

✓ Confirma que:

- No hay saltos prohibidos (7as, intervalos aumentados/disminuidos)
- Los saltos están compensados con movimiento por grado conjunto en dirección opuesta
- La melodía coincide con la armonía planeada
- Los puntos cadenciales están bien definidos

## Fase 3: Escribir el bajo

### Paso 6: Crea una línea de bajo

1. El bajo debe:

   - Definir claramente la progresión armónica
   - Usar principalmente las fundamentales de los acordes
   - Tener un buen contorno melódico propio
   - Moverse mayormente por saltos de 4ª/5ª o por grado conjunto
   - Evitar movimientos cromáticos

2. Ejemplo de línea de bajo para nuestra progresión:

```music-abc
X:1
T:Línea de bajo
M:4/4
L:1/4
K:C bass
C,2 C,2 | F,2 F,2 | G,2 G,2 | C,2 C,2 | A,,2 A,,2 | D,2 D,2 | G,2 G,2 | C,4 |]
W: I       IV       V        I        VI       II       V        I
```

### Paso 7: Verifica la relación soprano-bajo

✓ Confirma que:

- No hay quintas u octavas paralelas entre soprano y bajo
- No hay quintas u octavas directas (especialmente con soprano por salto)
- El movimiento contrario se usa en los puntos cadenciales
- La distancia entre ambas voces no es excesiva

## Fase 4: Completar las voces interiores

### Paso 8: Escribe la línea de tenor

1. El tenor debe:

   - Completar la armonía
   - Mantenerse en su registro (Do3-La4)
   - Tener buena conducción de voces (movimiento mínimo)
   - Mantener distancia adecuada con el bajo y contralto

2. Ejemplo de línea de tenor:

```music-abc
X:1
T:Línea de tenor
M:4/4
L:1/4
K:C bass
E,2 E,2 | F,2 G,2 | G,2 G,2 | E,2 G,2 | E,2 E,2 | F,2 F,2 | D,2 F,2 | E,4 |]
W: I       IV     V        I       VI      II      V       I
```

### Paso 9: Escribe la línea de contralto

1. La contralto debe:

   - Completar cualquier nota faltante del acorde
   - Mantenerse en su registro (Fa3-Do5)
   - Tener la conducción de voces más suave posible
   - No cruzarse con soprano ni tenor

2. Ejemplo de línea de contralto:

```music-abc
X:1
T:Línea de contralto
M:4/4
L:1/4
K:C
G2 A2 | A2 C'2 | B2 B2 | G2 G2 | C'2 C'2 | A2 A2 | B2 B2 | G4 |]
W: I     IV      V      I      VI      II     V      I
```

## Fase 5: Revisión y refinamiento

### Paso 10: Combina todas las voces y verifica

```music-abc
X:1
T:Composición a 4 voces
M:4/4
L:1/4
K:C
V:1 clef=treble
c2 c2 | d2 e2 | e2 d2 | c2 B2 | A2 A2 | A2 F2 | G2 G2 | c4 |]
V:2 clef=treble
G2 A2 | A2 C'2 | B2 B2 | G2 G2 | C'2 C'2 | A2 A2 | B2 B2 | G4 |]
V:3 clef=bass
E,2 E,2 | F,2 G,2 | G,2 G,2 | E,2 G,2 | E,2 E,2 | F,2 F,2 | D,2 F,2 | E,4 |]
V:4 clef=bass
C,2 C,2 | F,2 F,2 | G,2 G,2 | C,2 C,2 | A,,2 A,,2 | D,2 D,2 | G,2 G,2 | C,4 |]
W: I       IV       V        I        VI       II       V        I
```

### Paso 11: Verifica todas las reglas

✓ **Verificación de disposición**:

- Cada voz está en su registro adecuado
- No hay cruzamiento entre voces
- Distancia entre voces adyacentes ≤ octava (excepto tenor-bajo)

✓ **Verificación de conducción de voces**:

- No hay quintas u octavas paralelas entre ningún par de voces
- No hay quintas u octavas directas entre soprano y bajo
- Cada voz tiene un contorno melódico natural
- Las notas comunes se mantienen en la misma voz

✓ **Verificación de resoluciones especiales**:

- La sensible (Si) resuelve a la tónica (Do)
- Las séptimas resuelven descendiendo por grado conjunto
- Los acordes de cuarta y sexta están tratados correctamente

✓ **Verificación de duplicaciones**:

- No se duplica la sensible
- No se duplican notas alteradas cromáticamente
- En acordes en estado fundamental: se duplica preferentemente la fundamental
- En primera inversión: cualquier nota puede duplicarse
- En segunda inversión: se duplica preferentemente la quinta (nota del bajo)

## Fase 6: Método para resolver problemas comunes

### Problema 1: Quintas u octavas paralelas

```music-abc
X:1
T:Problema: quintas paralelas
M:4/4
L:1/2
K:C
V:1 clef=treble
[Gc] [FA] |]
V:2 clef=bass
[G,C] [F,C] |]
W: 5J   5J
```

**Solución**: Usa movimiento contrario u oblicuo

```music-abc
X:1
T:Solución
M:4/4
L:1/2
K:C
V:1 clef=treble
[Gc] [FA] |]
V:2 clef=bass
[G,C] [F,D] |]
W: 5J   3m
```

### Problema 2: Sensible no resuelve correctamente

```music-abc
X:1
T:Problema: sensible sin resolver
M:4/4
L:1/2
K:C
V:1 clef=treble
[GBd] [GCE] |]
V:2 clef=bass
[G,D,] [C,E,] |]
W: V     I
```

**Solución**: Asegura que la sensible resuelva ascendiendo a la tónica

```music-abc
X:1
T:Solución
M:4/4
L:1/2
K:C
V:1 clef=treble
[GBd] [GCE] |]
V:2 clef=bass
[G,D,] [C,C] |]
W: V     I
```

### Problema 3: Duplicación incorrecta

```music-abc
X:1
T:Problema: duplicación de sensible
M:4/4
L:1/2
K:C
V:1 clef=treble
[GBd] |]
V:2 clef=bass
[G,B,] |]
W: V (sensible duplicada)
```

**Solución**: Duplica la fundamental o la quinta en su lugar

```music-abc
X:1
T:Solución
M:4/4
L:1/2
K:C
V:1 clef=treble
[GBd] |]
V:2 clef=bass
[G,D] |]
W: V (quinta duplicada)
```

## Fase 7: Expansión de la composición

### Paso 12: Ampliar con técnicas adicionales

Una vez dominado el proceso básico, puedes:

1. **Añadir notas no armónicas**:

   - Notas de paso
   - Bordaduras
   - Retardos (especialmente 4-3)
   - Anticipaciones

2. **Usar inversiones** para crear:

   - Líneas de bajo más melódicas
   - Mejor conducción de voces
   - Mayor variedad armónica

3. **Incorporar modulaciones** a tonalidades cercanas:
   - Tonalidad de la dominante
   - Tonalidad relativa
   - Tonalidad de la subdominante

## Ejercicio completo: Proceso de composición de un coral breve

### Paso 1: Progresión armónica en Do mayor

```
I - vi - IV - V - I - IV - V - I
```

### Paso 2: Melodía de soprano

```music-abc
X:1
T:Soprano
M:4/4
L:1/4
K:C
e2 c2 | d2 B2 | c2 A2 | B2 G2 | e2 c2 | d2 B2 | G2 G2 | c4 |]
```

### Paso 3: Línea de bajo

```music-abc
X:1
T:Bajo
M:4/4
L:1/4
K:C bass
C,2 A,,2 | F,2 G,2 | C,2 F,2 | G,2 G,,2 | C,2 F,2 | F,2 G,2 | G,2 G,,2 | C,4 |]
```

### Paso 4: Voces interiores

```music-abc
X:1
T:Contralto y Tenor
M:4/4
L:1/4
K:C
V:1 clef=treble
g2 e2 | f2 d2 | e2 c2 | d2 B2 | g2 f2 | f2 f2 | d2 f2 | e4 |]
V:2 clef=bass
C2 A,2 | A,2 G,2 | G,2 F,2 | F,2 D,2 | C2 A,2 | B,2 D2 | B,2 B,2 | C4 |]
```

### Paso 5: Composición final con todas las voces

```music-abc
X:1
T:Coral a 4 voces
M:4/4
L:1/4
K:C
V:1 clef=treble
e2 c2 | d2 B2 | c2 A2 | B2 G2 | e2 c2 | d2 B2 | G2 G2 | c4 |]
V:2 clef=treble
g2 e2 | f2 d2 | e2 c2 | d2 B2 | g2 f2 | f2 f2 | d2 f2 | e4 |]
V:3 clef=bass
C2 A,2 | A,2 G,2 | G,2 F,2 | F,2 D,2 | C2 A,2 | B,2 D2 | B,2 B,2 | C4 |]
V:4 clef=bass
C,2 A,,2 | F,2 G,2 | C,2 F,2 | G,2 G,,2 | C,2 F,2 | F,2 G,2 | G,2 G,,2 | C,4 |]
W: I   vi    IV  V     I   IV    IV  V     I   IV    IV  V     V   V     I
```

## Lista de verificación final

Antes de dar por terminada tu composición, verifica una última vez:

- [ ] Cada voz tiene un contorno melódico adecuado
- [ ] No hay errores de conducción de voces (quintas/octavas paralelas o directas)
- [ ] Las resoluciones especiales (sensible, séptima) son correctas
- [ ] Las duplicaciones son adecuadas
- [ ] Los acordes están correctamente distribuidos
- [ ] Las cadencias son claras y efectivas
- [ ] La composición suena bien en conjunto

> **Consejo práctico**: La mejor manera de mejorar en la composición coral es analizar corales existentes (como los de J.S. Bach) y practicar regularmente. Cada nueva composición será mejor que la anterior a medida que integres naturalmente estas reglas.
