# Guía Completa de Composición Coral a 4 Voces

## Introducción

La composición coral a cuatro voces constituye uno de los pilares fundamentales de la armonía tonal occidental. Esta técnica, desarrollada desde el Renacimiento, alcanzó su mayor refinamiento con los corales luteranos y la obra de compositores como J.S. Bach. Dominar la escritura coral no solo permite crear música para conjuntos vocales, sino que proporciona una base sólida para comprender la armonía y conducción de voces aplicable a cualquier género musical.

Esta guía ofrece una aproximación práctica y completa a la composición coral, abordando desde los aspectos más básicos hasta las técnicas avanzadas de conducción de voces y armonización.

## 1. Fundamentos de la escritura coral

### 1.1 Las cuatro voces y sus características

El coro mixto a cuatro voces está compuesto por:

| Voz       | Registro aproximado | Características                                              |
| --------- | ------------------- | ------------------------------------------------------------ |
| Soprano   | Do4 - La5           | Voz femenina aguda, generalmente lleva la melodía principal  |
| Contralto | Sol3 - Re5          | Voz femenina grave, aporta riqueza armónica                  |
| Tenor     | Do3 - Sol4          | Voz masculina aguda, frecuentemente dobla motivos de soprano |
| Bajo      | Mi2 - Do4           | Voz masculina grave, proporciona el fundamento armónico      |

```music-abc
X:1
T:Rangos vocales del coro mixto
M:C
L:1/4
K:C
V:1 clef=treble name="Soprano"
[C5e5] | z | z | z |]
V:2 clef=treble name="Contralto"
[G4d5] | z | z | z |]
V:3 clef=bass name="Tenor"
[C4G4] | z | z | z |]
V:4 clef=bass name="Bajo"
[E3C4] | z | z | z |]
```

### 1.2 Reglas básicas de notación coral

La escritura coral tradicional sigue estas convenciones:

1. **Pentagrama doble**: Las voces femeninas (soprano y contralto) se escriben en el pentagrama superior con clave de Sol, y las masculinas (tenor y bajo) en el inferior con clave de Fa.

2. **Dirección de plicas**:

   - Soprano y tenor: plicas hacia arriba
   - Contralto y bajo: plicas hacia abajo

3. **Disposición de las voces**: Las voces nunca se cruzan en la escritura clásica. Siempre mantienen su posición relativa (soprano más aguda, seguida de contralto, tenor y bajo).

## 2. Morfología de los acordes en la escritura coral

### 2.1 Acordes tríada y sus inversiones

Los acordes básicos en la escritura coral son las tríadas, compuestas por tres notas: fundamental, tercera y quinta.

#### 2.1.1 Tipos de tríadas

| Tipo de tríada | Estructura                             | Ejemplo en Do | Símbolo   |
| -------------- | -------------------------------------- | ------------- | --------- |
| Mayor          | Fundamental + 3ª mayor + 5ª justa      | Do-Mi-Sol     | C o CM    |
| Menor          | Fundamental + 3ª menor + 5ª justa      | Do-Mib-Sol    | Cm o C-   |
| Disminuida     | Fundamental + 3ª menor + 5ª disminuida | Do-Mib-Solb   | Cdim o C° |
| Aumentada      | Fundamental + 3ª mayor + 5ª aumentada  | Do-Mi-Sol#    | Caug o C+ |

#### 2.1.2 Estados de los acordes

En la escritura coral a cuatro voces, los acordes tríada (tres notas) deben distribuirse entre cuatro voces, lo que implica duplicar una de las notas:

1. **Estado fundamental**: El bajo lleva la fundamental del acorde
2. **Primera inversión**: El bajo lleva la tercera del acorde (acorde de sexta)
3. **Segunda inversión**: El bajo lleva la quinta del acorde (acorde de cuarta y sexta)

### 2.2 Disposición de las voces en los acordes

#### 2.2.1 Disposición cerrada

Las tres voces superiores están dentro del intervalo de una octava:

```music-abc
X:1
T:Disposición cerrada
M:C
L:1/1
K:C
V:1 clef=treble
[CEG]|]
V:2 clef=bass
[C,]|]
```

#### 2.2.2 Disposición abierta

Las tres voces superiores abarcan más de una octava:

```music-abc
X:1
T:Disposición abierta
M:C
L:1/1
K:C
V:1 clef=treble
[CEc]|]
V:2 clef=bass
[C,]|]
```

#### 2.2.3 Reglas de espaciado

1. La distancia entre soprano y contralto, y entre contralto y tenor, no debe exceder una octava
2. Entre tenor y bajo puede haber más de una octava
3. Se permite el unísono entre voces adyacentes, pero nunca el cruce de voces

## 3. Reglas de conducción de voces

La conducción de voces es el arte de mover las líneas melódicas individuales de forma que creen una progresión armónica coherente.

### 3.1 Principios fundamentales

1. **Economía de movimiento**: Cada voz debe moverse a la nota más cercana del siguiente acorde
2. **Independencia melódica**: Cada voz debe formar una línea melódica con sentido propio
3. **Equilibrio armónico**: Mantener una distribución equilibrada de las notas del acorde

### 3.2 Tipos de movimiento entre voces

| Tipo de movimiento   | Descripción                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| Movimiento directo   | Dos voces se mueven en la misma dirección                                |
| Movimiento paralelo  | Caso especial del directo donde ambas voces mantienen el mismo intervalo |
| Movimiento oblicuo   | Una voz permanece estática mientras la otra se mueve                     |
| Movimiento contrario | Las voces se mueven en direcciones opuestas                              |
|                      |                                                                          |

```music-abc
X:1
T:Tipos de movimiento
M:C
L:1/4
K:C
V:1 clef=treble
[C4E4] [D4F4] | [G4B4] [G4B4] | [E4G4] [D4G4] | [C4E4] [D4D4] |]
V:2 clef=bass
[C3C3] [A,3A,3] | [E3E3] [D3D3] | [C3C3] [B,3B,3] | [G,2G,2] [F,2F,2] |]
W: Directo     Paralelo      Oblicuo     Contrario
```

### 3.3 Movimientos prohibidos

#### 3.3.1 Quintas y octavas paralelas

Está prohibido que dos voces formen quintas justas u octavas justas consecutivas entre sí:

```music-abc
X:1
T:Quintas paralelas (prohibido)
M:C
L:1/4
K:C
V:1 clef=treble
[C4G4] [D4A4] |]
V:2 clef=bass
[C3] [D3] |]
```

```music-abc
X:1
T:Octavas paralelas (prohibido)
M:C
L:1/4
K:C
V:1 clef=treble
[C4] [D4] |]
V:2 clef=bass
[C3] [D3] |]
```

#### 3.3.2 Quintas y octavas directas

Las quintas y octavas directas (alcanzar una quinta u octava por movimiento directo) están prohibidas entre las voces extremas (soprano y bajo), especialmente cuando la soprano se mueve por salto.

#### 3.3.3 Superposición y cruzamiento

La superposición (cuando una voz salta más allá de la posición que ocupaba otra voz en el acorde anterior) y el cruzamiento de voces (cuando una voz invade el registro de otra) deben evitarse.

### 3.4 Movimientos melódicos permitidos

1. Se permiten los movimientos por grado conjunto (segundas mayores y menores)
2. Se permiten saltos de terceras, cuartas, quintas y sextas
3. Se permiten saltos de octava con moderación
4. Se deben evitar:
   - Saltos de séptimas
   - Saltos mayores que una octava
   - Intervalos aumentados y disminuidos (excepto la cuarta aumentada en casos específicos)
   - Dos saltos consecutivos en la misma dirección cuya suma forme un intervalo prohibido

## 4. Enlace de acordes y progresiones armónicas

### 4.1 Técnicas de enlace de acordes en estado fundamental

#### 4.1.1 Enlace por nota común

Cuando las fundamentales de los acordes están a distancia de 4ª o 5ª:

1. Mantener la nota común en la misma voz
2. Las otras dos voces superiores se mueven a las notas más cercanas del nuevo acorde

```music-abc
X:1
T:Enlace por nota común (I-V)
M:C
L:1/2
K:C
V:1 clef=treble
[CEG] [DGB] |]
V:2 clef=bass
[C,] [G,,] |]
```

#### 4.1.2 Enlace por doble nota común

Cuando las fundamentales de los acordes están a distancia de 3ª o 6ª:

1. Mantener las dos notas comunes en las mismas voces
2. La otra voz superior se mueve a la nota más cercana del nuevo acorde

```music-abc
X:1
T:Enlace por doble nota común (I-VI)
M:C
L:1/2
K:C
V:1 clef=treble
[CEG] [CEA] |]
V:2 clef=bass
[C,] [A,,] |]
```

#### 4.1.3 Enlace por movimiento contrario

Cuando las fundamentales de los acordes están a distancia de 2ª:

1. No hay notas comunes
2. Las tres voces superiores se mueven en dirección contraria al bajo
3. Cada voz se mueve a la nota más cercana del nuevo acorde

```music-abc
X:1
T:Enlace por movimiento contrario (I-II)
M:C
L:1/2
K:C
V:1 clef=treble
[CEG] [DFA] |]
V:2 clef=bass
[C,] [D,] |]
```

### 4.2 Tratamiento de las notas de resolución obligada

#### 4.2.1 La sensible

La sensible (7º grado de la escala) debe resolver ascendiendo a la tónica, con dos excepciones:

1. **Resolución indirecta**: Cuando la sensible está en una voz interior y otra voz superior proporciona la tónica
2. **Movimiento 1-7-6**: Cuando la sensible forma parte de un movimiento descendente de la tónica al sexto grado

```music-abc
X:1
T:Resolución de la sensible
M:C
L:1/2
K:C
V:1 clef=treble
[GBd] [GcE] |]
V:2 clef=bass
[G,] [C,] |]
W: V     I
```

#### 4.2.2 Duplicaciones prohibidas

No se deben duplicar:

1. La sensible
2. Notas alteradas cromáticamente
3. La tercera del acorde en segunda inversión
4. Cualquier nota de resolución obligada

### 4.3 Armonización en las escalas mayor y menor

#### 4.3.1 Funciones tonales en modo mayor

| Grado | Función        | Tipo de acorde | Ejemplo en Do mayor |
| ----- | -------------- | -------------- | ------------------- |
| I     | Tónica         | Mayor          | Do-Mi-Sol (C)       |
| II    | Supertónica    | Menor          | Re-Fa-La (Dm)       |
| III   | Mediante       | Menor          | Mi-Sol-Si (Em)      |
| IV    | Subdominante   | Mayor          | Fa-La-Do (F)        |
| V     | Dominante      | Mayor          | Sol-Si-Re (G)       |
| VI    | Superdominante | Menor          | La-Do-Mi (Am)       |
| VII   | Sensible       | Disminuido     | Si-Re-Fa (B°)       |

#### 4.3.2 Funciones tonales en modo menor

| Grado | Función            | Tipo de acorde     | Ejemplo en La menor              |
| ----- | ------------------ | ------------------ | -------------------------------- |
| I     | Tónica             | Menor              | La-Do-Mi (Am)                    |
| II    | Supertónica        | Disminuido         | Si-Re-Fa (B°)                    |
| III   | Mediante           | Mayor              | Do-Mi-Sol (C)                    |
| IV    | Subdominante       | Menor              | Re-Fa-La (Dm)                    |
| V     | Dominante          | Mayor\*            | Mi-Sol#-Si (E)                   |
| VI    | Superdominante     | Mayor              | Fa-La-Do (F)                     |
| VII   | Subtónica/Sensible | Mayor/Disminuido\* | Sol-Si-Re (G) / Sol#-Si-Re (G#°) |

\*En la escala menor armónica

## 5. Técnicas avanzadas de composición coral

### 5.1 Cadencias principales

Las cadencias son fórmulas armónicas que proporcionan puntuación musical y definen secciones.

#### 5.1.1 Cadencia perfecta (V-I)

La más conclusiva, generalmente al final de una frase o pieza:

```music-abc
X:1
T:Cadencia perfecta
M:C
L:1/2
K:C
V:1 clef=treble
[GBd] [GcE] |]
V:2 clef=bass
[G,] [C,] |]
```

#### 5.1.2 Cadencia plagal (IV-I)

Menos conclusiva, a menudo usada como cadencia final tras una perfecta ("Amén"):

```music-abc
X:1
T:Cadencia plagal
M:C
L:1/2
K:C
V:1 clef=treble
[FAc] [GcE] |]
V:2 clef=bass
[F,] [C,] |]
```

#### 5.1.3 Cadencia rota (V-VI)

Crea una interrupción o sorpresa, evitando la resolución esperada:

```music-abc
X:1
T:Cadencia rota
M:C
L:1/2
K:C
V:1 clef=treble
[GBd] [AcE] |]
V:2 clef=bass
[G,] [A,] |]
```

#### 5.1.4 Semicadencia (cualquier acorde-V)

Crea tensión y expectativa, típica a mitad de una frase:

```music-abc
X:1
T:Semicadencia
M:C
L:1/2
K:C
V:1 clef=treble
[FAc] [GBd] |]
V:2 clef=bass
[F,] [G,] |]
```

### 5.2 Progresiones armónicas comunes

#### 5.2.1 Progresión cadencial (I-IV-V-I)

La progresión fundamental de la música tonal:

```music-abc
X:1
T:Progresión cadencial
M:C
L:1/2
K:C
V:1 clef=treble
[CEG] [FAc] [GBd] [CEG] |]
V:2 clef=bass
[C,] [F,] [G,] [C,] |]
```

#### 5.2.2 Marcha armónica por quintas (VI-II-V-I)

Progresión por círculo de quintas descendentes:

```music-abc
X:1
T:Marcha armónica por quintas
M:C
L:1/2
K:C
V:1 clef=treble
[CEA] [DFA] [GBd] [CEG] |]
V:2 clef=bass
[A,,] [D,] [G,] [C,] |]
```

#### 5.2.3 Progresión II-V-I

Fundamento de la armonía del jazz y muy común en música clásica:

```music-abc
X:1
T:Progresión II-V-I
M:C
L:1/2
K:C
V:1 clef=treble
[DFA] [GBd] [CEG] |]
V:2 clef=bass
[D,] [G,] [C,] |]
```

### 5.3 Notas no armónicas

Las notas no armónicas o extrañas al acorde enriquecen las líneas melódicas:

| Tipo         | Descripción                                    | Abordaje           | Resolución                     |
| ------------ | ---------------------------------------------- | ------------------ | ------------------------------ |
| Nota de paso | Conecta dos notas armónicas por grado conjunto | Por grado conjunto | Por grado conjunto             |
| Bordadura    | Rodea una nota armónica                        | Por grado conjunto | Vuelve a la misma nota         |
| Apoyatura    | Enfatiza una nota armónica                     | Por salto          | Por grado conjunto             |
| Retardo      | Prolonga una nota del acorde anterior          | Ya presente        | Por grado conjunto descendente |
| Anticipación | Adelanta una nota del siguiente acorde         | Cualquiera         | Ya está en el acorde siguiente |

## 6. Armonización coral práctica

### 6.1 Armonización de una melodía dada (soprano)

1. **Identificar las cadencias**: Determinar los puntos de reposo y sus armonizaciones
2. **Analizar el contorno melódico**: Identificar notas que sugieran acordes específicos
3. **Establecer el bajo**: Crear una línea de bajo con buen movimiento contrapuntístico
4. **Completar las voces interiores**: Añadir tenor y contralto respetando las reglas de conducción
5. **Revisar**: Comprobar que no hay quintas u octavas paralelas, y que cada voz tiene un buen contorno melódico

### 6.2 Armonización de un bajo dado

1. **Identificar las implicaciones armónicas**: Determinar qué acordes sugiere el bajo
2. **Determinar el estado de los acordes**: Decidir si son acordes en estado fundamental o inversiones
3. **Establecer la soprano**: Crear una línea melódica interesante
4. **Completar las voces interiores**: Añadir tenor y contralto respetando las reglas de conducción
5. **Revisar**: Comprobar la conducción de voces y el equilibrio general

### 6.3 Armonización a partir del cifrado armónico

1. **Disposición del primer acorde**: Elegir una buena disposición inicial (cerrada o abierta)
2. **Aplicar las técnicas de enlace adecuadas**: Nota común, doble nota común o movimiento contrario
3. **Cuidar las líneas melódicas**: Cada voz debe tener un contorno melódico natural
4. **Atender a las notas de resolución obligada**: Especialmente la sensible
5. **Revisar**: Verificar que se cumplen todas las reglas de conducción de voces

## 7. Ejemplos prácticos de composición coral

### 7.1 Ejemplo 1: Coral simple en Do mayor

```music-abc
X:1
T:Coral simple en Do mayor
M:4/4
L:1/4
K:C
V:1 clef=treble
[C4E4G4] [D4F4A4] | [E4G4c4] [D4F4B4] | [C4E4A4] [D4F4A4] | [G4B4d4] [G4C4E4] |]
V:2 clef=bass
[C,4] [D,4] | [C,4] [G,,4] | [A,,4] [D,4] | [G,,4] [C,4] |]
W: I    ii     I     V     vi    ii    V     I
```

### 7.2 Ejemplo 2: Coral con cadencia rota en La menor

```music-abc
X:1
T:Coral con cadencia rota en La menor
M:4/4
L:1/4
K:Am
V:1 clef=treble
[A4c4e4] [^G4B4e4] | [A4c4e4] [A4d4f4] | [^G4B4e4] [A4c4f4] | [E4^G4d4] [A4c4e4] |]
V:2 clef=bass
[A,4] [E,4] | [A,4] [D,4] | [E,4] [F,4] | [E,4] [A,,4] |]
W: i    V     i    iv     V    VI     V     i
```

## 8. Consejos para la composición coral

1. **Escucha corales**: Familiarízate con el sonido y estructura de los corales tradicionales
2. **Empieza simple**: Compón primero con progresiones básicas y cadencias claras
3. **Piensa horizontalmente**: Concibe cada voz como una línea melódica independiente
4. **Busca el equilibrio**: Entre movimiento y estabilidad, tensión y resolución
5. **Analiza tus composiciones**: Identifica y corrige problemas de conducción de voces
6. **Canta las partes**: Si es posible, canta cada línea para verificar su naturalidad
7. **Considera el texto**: Si compones para un texto, respeta su acentuación y significado

## Conclusión

La composición coral a cuatro voces no es solo un ejercicio académico, sino una valiosa herramienta para comprender los fundamentos de la armonía y conducción de voces. Las técnicas aprendidas en este contexto son transferibles a muchos otros géneros y estilos musicales.

La práctica constante, el análisis crítico y la familiaridad con el repertorio coral son elementos esenciales para desarrollar habilidad en esta forma de composición. Con dedicación y estudio, cualquier compositor puede dominar estas técnicas y aplicarlas creativamente en su música.

## Bibliografía recomendada

1. "Tratado de Armonía" - Walter Piston
2. "Armonía" - Arnold Schoenberg
3. "Coral Writing: A Guide to Melody, Harmony, and Counterpoint" - Thomas Benjamin
4. "The Study of Counterpoint" - Johann Joseph Fux
5. "The Study of Fugue" - Alfred Mann
6. "Analysis of J.S. Bach's Chorales" - Charles Sanford Terry
7. "El oído armónico" - Rafael Fernández (bustena.com)

## Anexo: Glosario de términos

- **Acorde**: Conjunto de tres o más notas que suenan simultáneamente
- **Cadencia**: Fórmula armónica que proporciona puntuación musical
- **Conducción de voces**: Arte de mover las líneas melódicas individuales
- **Disposición**: Organización vertical de las notas de un acorde
- **Estado fundamental**: Acorde con su fundamental en el bajo
- **Inversión**: Acorde con una nota distinta a la fundamental en el bajo
- **Resolución**: Movimiento de una nota inestable a una estable
- **Sensible**: Séptimo grado de la escala, tiende a resolver en la tónica
- **Tríada**: Acorde formado por tres notas (fundamental, tercera y quinta)
