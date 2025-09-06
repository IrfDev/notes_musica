# Voicing avanzado y reglas clásicas de composición

## 1. Fundamentos de la música clásica y conducción de voces

### ¿Qué es la conducción de voces?

La **conducción de voces** se refiere a cómo las líneas melódicas individuales (voces) se mueven de un acorde a otro en una progresión armónica. Es el conjunto de técnicas que determina el movimiento horizontal de las voces al pasar de un acorde a otro, mientras se mantiene una estructura armónica coherente verticalmente.

La conducción de voces incluye:

- El movimiento de cada voz individual
- La relación entre las diferentes voces
- Las reglas y convenciones que determinan estos movimientos
- La resolución apropiada de notas tendenciales

### Principios básicos

1. **Movimiento por grado conjunto**: Siempre que sea posible, mover las voces por intervalos pequeños (segundas mayores o menores)
2. **Mantener notas comunes**: Conservar las mismas notas entre acordes consecutivos cuando sea posible
3. **Evitar saltos excesivos**: Limitar el movimiento de cada voz a intervalos menores que una octava cuando sea posible
4. **Independencia melódica**: Cada voz debe tener coherencia melódica propia
5. **Balance entre voces**: Mantener una distribución equilibrada entre las voces

## 2. Escritura coral a cuatro voces

### Disposición de las voces

La escritura coral a cuatro voces es la fórmula más habitual en la armonía clásica y emula el estilo de los corales luteranos desarrollados desde el siglo XVI hasta la época de J.S. Bach. Las voces se disponen de la siguiente manera:

1. **Tesitura**: Cada voz debe ceñirse a la tesitura natural de las cuerdas vocales:

   - **Soprano**: Voz más aguda, aproximadamente desde Do4 en adelante
   - **Alto**: Segunda voz más aguda, aproximadamente desde Sol3
   - **Tenor**: Segunda voz más grave, aproximadamente desde Do3
   - **Bajo**: Voz más grave, aproximadamente desde Fa2 o Mi2

2. **Distancia entre voces**:

   - Dos voces adyacentes (soprano-alto, alto-tenor) no deben alejarse más de una octava
   - El bajo es la única voz que puede alejarse más de una octava del tenor
   - Los unísonos entre voces adyacentes están permitidos

3. **Disposición de las plicas**:

   - Soprano y tenor: plicas hacia arriba
   - Alto y bajo: plicas hacia abajo

4. **Prohibición de cruzamientos**:
   - Una voz más aguda no debe situarse por debajo de una voz más grave y viceversa
   - El unísono entre voces adyacentes sí está permitido

```music-abc
X:1
T:Disposición coral a 4 voces
M:4/4
L:1/1
K:C
[C,CEG] |
```

## 3. Reglas de conducción melódica

### Movimientos melódicos permitidos

El estilo coral busca la continuidad de los enlaces y evita los saltos excesivos. Sin embargo, los saltos están permitidos siempre que estén dosificados y cumplan ciertas reglas:

1. **Saltos permitidos**:

   - Intervalos mayores, menores o disminuidos desde la 3ª hasta la 8ª (excepto la 7ª)
   - La 8ª justa

2. **Saltos prohibidos**:
   - Intervalos de 7ª mayor o menor
   - Intervalos de 9ª y superiores
   - Todos los intervalos aumentados (incluyendo la 2ª aumentada)
   - Dos saltos consecutivos en la misma dirección si la suma forma un intervalo prohibido

```music-abc
X:1
T:Saltos permitidos vs. prohibidos
M:4/4
L:1/4
K:C
"Permitido"[G,] [E,] [C,] [G,,] | "Prohibido"[C,] [B,,] [C] [F,] |
```

## 4. Movimientos armónicos entre voces

### Tipos de movimiento

Se distinguen cuatro tipos de movimientos armónicos entre dos voces:

1. **Movimiento directo**: Cuando dos voces se mueven en la misma dirección (ambas ascienden o descienden)
2. **Movimiento paralelo**: Es un tipo de movimiento directo donde las voces mantienen el mismo intervalo
3. **Movimiento oblicuo**: Cuando una voz permanece inmóvil y la otra se mueve
4. **Movimiento contrario**: Cuando una voz asciende y la otra desciende

```music-abc
X:1
T:Tipos de movimiento entre voces
M:4/4
L:1/1
K:C
"Directo"[CE] [DF] | "Paralelo"[CE] [DF] | "Oblicuo"[CE] [CF] | "Contrario"[CE] [BD] |
```

### Reglas para evitar defectos armónicos

1. **Quintas y octavas paralelas**:

   - Estrictamente prohibido que dos voces formen quintas u octavas paralelas entre sí
   - Esta regla aplica a CUALQUIER par de voces

2. **Quintas y octavas directas**:

   - Ocurren cuando dos voces se mueven en la misma dirección y llegan a formar una quinta u octava
   - En la escritura a cuatro voces, esta prohibición se aplica especialmente a las voces extremas (soprano y bajo)
   - Es especialmente grave cuando la soprano se mueve por salto

3. **Superposición**:
   - Cuando una voz, al saltar, rebasa la altura recién abandonada por una voz adyacente
   - Un caso particular: alcanzar o abandonar un unísono por movimiento directo

```music-abc
X:1
T:Quintas paralelas (evitar)
M:4/4
L:1/1
K:C
[CG] [DA] |
```

```music-abc
X:1
T:Octavas paralelas (evitar)
M:4/4
L:1/1
K:C
[C,C] [D,D] |
```

## 5. Notas de resolución obligada

### La sensible

La **sensible** (7º grado de la escala) tiene una fuerte tendencia a resolver hacia la tónica (1er grado) por movimiento ascendente de semitono. Como nota de resolución obligada que es, la sensible no debe duplicarse.

**Excepciones a la resolución de la sensible**:

1. **Resolución indirecta**: Cuando la sensible se encuentra en una voz intermedia (alto o tenor) y no resuelve a la tónica, pero una voz superior sí lo hace
2. **Movimiento descendente**: En el enlace V-VI, se permite que la sensible no resuelva cuando forma parte del movimiento descendente 1-7-6

```music-abc
X:1
T:Resolución de la sensible
M:4/4
L:1/1
K:C
[GBdF] [CEGc] |
```

```music-abc
X:1
T:Resolución indirecta (en tenor)
M:4/4
L:1/1
K:C
[G,BDF] [C,EGC] |
```

### Las disonancias

Las **disonancias** (como la 4ª justa formada con el bajo o la 7ª) deben ser:

- **Preparadas**: La nota debe aparecer como consonancia en el acorde anterior
- **Resueltas**: Deben resolver por movimiento descendente de 2ª a una consonancia

Como notas de resolución obligada, las disonancias no deben duplicarse.

## 6. Enlace de acordes en estado fundamental

### Tipos de enlace según las fundamentales

1. **Enlace por nota común** (fundamentales a distancia de 4ª/5ª):
   - Se mantiene la nota común en la misma voz
   - Las otras dos voces superiores se mueven por grado conjunto
   - Ejemplos: I-IV, I-V, ii-V, V-I

```music-abc
X:1
T:Enlace por nota común (C-G)
M:4/4
L:1/1
K:C
[C,CEG] [G,,GBD] |
```

2. **Enlace por doble nota común** (fundamentales a distancia de 3ª/6ª):
   - Se mantienen dos notas comunes en las mismas voces
   - La tercera voz superior se mueve por grado conjunto o por tercera
   - Ejemplos: I-vi, I-iii, IV-ii, V-iii

```music-abc
X:1
T:Enlace por doble nota común (C-Am)
M:4/4
L:1/1
K:C
[C,CEG] [A,,CEA] |
```

3. **Enlace por movimiento contrario** (fundamentales a distancia de 2ª/7ª):
   - Todas las voces superiores se mueven en dirección contraria al bajo
   - Ejemplos: IV-V, V-IV, I-ii, I-viio

```music-abc
X:1
T:Enlace por movimiento contrario (F-G)
M:4/4
L:1/1
K:C
[F,,FAC] [G,,GBD] |
```

### Consideraciones para enlaces problemáticos

Algunos enlaces requieren especial atención para evitar errores:

1. **Enlace V-IV**:

   - Puede producir falsa relación de tritono
   - Utilizar preferentemente el III grado como intermediario

2. **Enlace IV-V**:

   - Evitar que la 3ª de IV (en soprano) vaya a la 3ª de V
   - Evitar que la 3ª de IV (en soprano) vaya a la 5ª de V

3. **Enlace con acordes disminuidos (viio)**:
   - Duplicar preferentemente la 3ª del acorde
   - Evitar duplicar la fundamental (que es la sensible)

## 7. Tonalidades relativas y cadencias

### Tonalidades relativas

Las **tonalidades relativas** son dos tonalidades (una mayor y otra menor) que comparten la misma armadura. Se relacionan entre sí de la siguiente manera:

- El relativo de una tonalidad mayor es su VI grado (a una 3ª menor descendente)
- El relativo de una tonalidad menor es su III grado (a una 3ª menor ascendente)

Ejemplo: Do mayor y La menor comparten la misma armadura.

Las funciones de **dominante** (V grado) son una excepción a esta regla compartida, ya que debido a la presencia de la sensible, pertenecen solo a su propia tonalidad y no a su relativo.

- Si estamos en tonalidad mayor y usamos el V del relativo menor, se cifra como V/VI
- Si estamos en tonalidad menor y usamos el ♭VII cerca del III, se cifra como V/III

### Cadencias

Las **cadencias** son giros armónicos que se encuentran al final de una frase musical. Las principales son:

1. **Cadencia auténtica perfecta**: Finaliza con V-I (ambos en estado fundamental). Tiene carácter conclusivo.

2. **Semicadencia**: Finaliza en el V grado. Tiene carácter suspensivo.

3. **Cadencia plagal**: Finaliza con IV-I. Tiene carácter conclusivo con aire arcaico o sacro.

4. **Cadencia rota**: Finaliza con V-VI. Tiene carácter de cadencia interrumpida.

```music-abc
X:1
T:Cadencia auténtica perfecta
M:4/4
L:1/1
K:C
[G,,GBD] [C,CEG] |
```

```music-abc
X:1
T:Semicadencia
M:4/4
L:1/1
K:C
[F,,FAC] [G,,GBD] |
```

## 8. Acordes de cuarta

### Tipos de acordes de cuarta

Por **acorde de cuarta** entendemos cualquier acorde o inversión donde una de sus notas forma una 4ª justa con el bajo. Los principales son:

1. **Acorde de cuarta**: Acorde de tríada que en lugar de tener una 3ª, tiene una 4ª justa. Se cifra con un 4. En la armonía clásica, esta cuarta se considera un retardo de la tercera.

2. **Acorde de sexta y cuarta**: Se obtiene mediante la 2ª inversión de un acorde de tríada (la 5ª en el bajo). Se denomina así porque forma los intervalos de sexta y cuarta con el bajo.

Los acordes de cuarta en las cadencias se consideran más como apoyaturas o disonancias que como acordes independientes.

### Preparación y resolución de la cuarta

En la conducción de voces clásica:

- La disonancia (cuarta) debe prepararse manteniéndose desde el acorde anterior
- La disonancia debe resolverse descendiendo un grado para formar una consonancia
- Al ser disonante, la cuarta no debe duplicarse
- La duplicación recomendada es la fundamental (el bajo)

```music-abc
X:1
T:Resolución de la cuarta
M:4/4
L:1/1
K:C
"I"[C,CEG] "V4-3"[G,,CFD] [G,,GBD] |
```

## 9. Voicings avanzados y aplicaciones prácticas

### Voicing abierto vs. cerrado

**Voicing cerrado**: Las notas están dispuestas lo más cerca posible unas de otras.

```music-abc
X:1
T:Voicing Cerrado
M:4/4
L:1/1
K:C
"Cmaj7" [CEGBc] | "G7" [GBDFg] |
```

**Voicing abierto**: Las voces superiores pueden estar separadas por más de una octava.

```music-abc
X:1
T:Voicing Abierto
M:4/4
L:1/1
K:C
"Cmaj7" [C,Ceg] | "G7" [G,,Bdg] |
```

### Voicings con tensiones

Las tensiones (9, 11, 13) pueden enriquecer los voicings:

```music-abc
X:1
T:Voicing con Tensiones
M:4/4
L:1/1
K:C
"Cmaj9" [CEGBd] | "Dm11" [DFAcg] | "G13" [GBDFe] |
```

### Drop 2 Voicings

Una técnica donde la segunda nota más alta del acorde en posición cerrada se baja una octava:

```music-abc
X:1
T:Drop 2 Voicings
M:4/4
L:1/1
K:C
"Cmaj7 (cerrado)" [CEGBc] | "Cmaj7 (Drop 2)" [CGBec] |
"G7 (cerrado)" [GBDFg] | "G7 (Drop 2)" [GDFdg] |
```

## 10. Ejercicios prácticos

### Ejercicio 1: Armonización a cuatro voces

Armoniza la siguiente progresión aplicando las reglas de conducción de voces:
I - IV - V - I en Do Mayor

### Ejercicio 2: Identificación de cadencias

Analiza las siguientes frases musicales e identifica qué tipo de cadencia presentan:

1. C - G - C (I - V - I)
2. Am - E - Am (i - V - i)
3. C - F - C (I - IV - I)
4. G - C - Am (V - I - vi)

### Ejercicio 3: Resolución de la sensible

Escribe tres ejemplos diferentes de resolución de la sensible:

- Resolución directa
- Resolución indirecta
- Movimiento descendente en el enlace V-VI

### Ejercicio 4: Acordes de cuarta

Escribe y resuelve correctamente los siguientes acordes de cuarta:

- Un acorde de cuarta sobre G (G4-3)
- Un acorde de sexta y cuarta cadencial (I6/4 - V - I)

## 11. Aplicaciones en diferentes contextos musicales

### En música clásica

- Corales luteranos: Aplicación rigurosa de todas las reglas
- Música barroca: Mayor libertad en la conducción de voces, especialmente en instrumentos

### En música moderna

- Jazz: Desarrollo de voicings más complejos, uso de tensiones
- Pop/Rock: Simplificación de las reglas, enfoque en la funcionalidad

### Composición contemporánea

- Uso selectivo de las reglas clásicas
- Mayor libertad para experimentar con disonancias
- Aplicación flexible de los principios básicos

## 12. Conclusión

Las reglas de conducción de voces, junto con los principios de enlace de acordes, tonalidades relativas y cadencias constituyen la base de la escritura armónica eficaz. Aunque algunas de estas reglas pueden parecer restrictivas, su propósito es lograr progresiones armónicas fluidas y musicales.

El dominio de estas técnicas permite al compositor:

- Crear texturas musicales claras y equilibradas
- Conseguir transiciones suaves entre acordes
- Generar tensión y resolución de forma efectiva
- Desarrollar líneas melódicas con sentido propio dentro de la estructura armónica

Estas reglas no deben verse como restricciones absolutas sino como directrices que han probado su eficacia a lo largo de siglos de desarrollo musical. Su aplicación puede adaptarse según el contexto y estilo musical, permitiendo tanto respetar la tradición como innovar creativamente.
