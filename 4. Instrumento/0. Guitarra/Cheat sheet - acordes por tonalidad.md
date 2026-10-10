---
tipo: guia-ai
estado: vigente
area: 4. Instrumento
concepto: "[[2. Armonización de tonalidades mayores]]"
---

# Cheat sheet: acordes, tonalidades y escalas en guitarra

> [!info] Para qué sirve
> Una sola hoja para responder tres preguntas:
> 1. **¿Qué acordes tiene cada tonalidad mayor y cuál es la forma más fácil de tocarlos?**
> 2. **¿Qué posiciones del mástil tengo que aprender sí o sí?**
> 3. **¿Cómo se relacionan las tonalidades entre sí?** (lo más importante)
>
> Teoría relacionada: [[1. Tonalidades mayores]] · [[2. Armonización de tonalidades mayores]] ·
> [[3. Tonalidades menores]] · [[7. Familias tonales]] · [[0. Modos]] · [[3. Intercambios modales]] ·
> [[6. Crear progresiones tonales]] · [[00. Voicing e inversiones]]
> Strudel relacionado: [[4. Folk desde cero]] · [[0. Dream pop desde cero]]

## Índice

0. [[#0. Cómo leer esta hoja]]
1. [[#1. La fórmula que lo ordena todo]]
2. [[#2. Los acordes abiertos]]
3. [[#3. Las 12 tonalidades mayores]]
4. [[#4. Las cinco tonalidades de guitarra, una por una]]
5. [[#5. El capo]]
6. [[#6. Cejillas, el mapa y los bloques]]
7. [[#7. CAGED]]
8. [[#8. Tríadas en las tres cuerdas agudas]]
9. [[#9. Escalas en el mástil]]
10. [[#10. Entre escalas, cómo funcionan las relaciones]]
11. [[#11. Mano derecha]]
12. [[#12. Familias de cuerdas al aire]]
13. [[#13. Ruta de estudio]]
14. [[#14. Retos]]
15. [[#15. Errores comunes]]
16. [[#16. Decisión musical]]

---

## 0. Cómo leer esta hoja

| Notación | Significa | Ejemplo |
|---|---|---|
| `x32010` | forma de acorde, **6ª cuerda (Mi grave) → 1ª (Mi aguda)**. `x` = no suena, `0` = al aire, número = traste | C |
| `(10)` | traste de dos cifras dentro de una forma | `x(10)9787` |
| Tablatura | 6 líneas; **la de arriba es la 1ª cuerda (e aguda)**, la de abajo la 6ª (E grave) | ver §2 |
| Diagrama de mástil | `R` = tónica; `2`…`7` = grado de la escala; columnas = trastes | ver §9 |
| Dedos mano izq. | `1` índice · `2` medio · `3` anular · `4` meñique | |
| Dedos mano der. | `p` pulgar · `i` índice · `m` medio · `a` anular | |
| `↓` `↑` | rasgueo hacia abajo / hacia arriba | ver §11 |
| ° / ø | disminuido / semidisminuido (m7♭5) | B°, Bø |

Los bloques ` ```abc ` se ven como partitura (plugin music-abc) y los ` ```strudel ` suenan
(cópialos a strudel.cc si el plugin no está activo). En los bloques abc de guitarra se usa
`clef=treble-8`: la guitarra **suena una octava más grave** de lo que se escribe.

---

## 1. La fórmula que lo ordena todo

### 1.1 La escala mayor: T T S T T T S

En una sola cuerda se ve la fórmula sin trucos: tono = 2 trastes, semitono = 1 traste.
C mayor en la 5ª cuerda:

```
A|-3---5---7---8---10---12---14---15-|
   C   D   E   F   G    A    B    C
     T   T   S   T    T    T    S
```

Cualquier tonalidad mayor es **ese mismo dibujo empezando en otro traste**. Mueve el 3 al 5 y
tienes D mayor; al 0 y tienes A mayor.

### 1.2 Los siete acordes de toda tonalidad mayor

Se apilan terceras usando solo las notas de la escala. Siempre sale lo mismo:

| Grado | I | ii | iii | IV | V | vi | vii° |
|---|---|---|---|---|---|---|---|
| Calidad | Mayor | menor | menor | Mayor | Mayor | menor | disminuido |
| Con séptima | Imaj7 | ii7 | iii7 | IVmaj7 | **V7** | vi7 | viiø7 |
| Función | tónica | subdominante | tónica (débil) | subdominante | dominante | tónica relativa | dominante |
| Qué se siente | casa, llegada | movimiento suave | ambiguo, nostálgico | abrir, elevar | tensión que pide volver | casa triste | inestable, casi no se usa |

Regla de bolsillo: **mayores en I, IV, V · menores en ii, iii, vi · disminuido en vii**.

> [!tip] Por qué importa en guitarra
> No hay que memorizar 84 acordes (7 × 12 tonalidades). Hay que memorizar **la fórmula**,
> unas **15 formas** y saber **moverlas**. Todo lo demás en esta hoja es aplicar eso.

### 1.3 Oírlo y verlo

```abc
X:1
T:G mayor: la escala y sus 7 tríadas
M:4/4
L:1/4
K:G
"^1"G "^2"A "^3"B "^4"c | "^5"d "^6"e "^7"f "^8"g |
"G""_I"[GBd] "Am""_ii"[Ace] "Bm""_iii"[Bdf] "C""_IV"[ceg] | "D""_V"[dfa] "Em""_vi"[egb] "F#°""_vii°"[fac'] "G""_I"[gbd'] |]
```

```strudel
// La misma fórmula desde cinco puntos de partida: un ciclo por tonalidad
n("0 1 2 3 4 5 6 7")
  .scale("<C:major G:major D:major A:major E:major>")
  .s("gm_acoustic_guitar_nylon")
  .room(.3)
```

```strudel
setcpm(60/4)
let tono = "G:major"   // ← cambia la tonalidad aquí
// I ii iii IV V vi vii° I, un acorde por compás
n("<0 1 2 3 4 5 6 7>".add("[0,2,4]"))
  .scale(tono)
  .s("gm_acoustic_guitar_steel")
  .room(.3)
```

---

## 2. Los acordes abiertos

### 2.1 Los ocho de base (lo primero que se aprende)

```
    C    G    D    A    E    Am   Em   Dm   
e |-0----3----2----0----0----0----0----1----|
B |-1----0----3----2----0----1----0----3----|
G |-0----0----2----2----1----2----0----2----|
D |-2----0----0----2----2----2----2----0----|
A |-3----2----x----0----2----0----2----x----|
E |-x----3----x----x----0----x----0----x----|
```

| Acorde | Forma | Dedos (6ª → 1ª) | Truco |
|---|---|---|---|
| C | `x32010` | x 3 2 0 1 0 | el anular en la 5ª cuerda es la raíz: el bajo va ahí |
| G | `320003` | 2 1 0 0 0 3 | o `3 2 0 0 0 4`, que deja libre el índice para ir a C |
| D | `xx0232` | x x 0 1 3 2 | **no** toques la 5ª ni la 6ª |
| A | `x02220` | x 0 1 2 3 0 | o 2 1 3; o un solo dedo en cejilla |
| E | `022100` | 0 2 3 1 0 0 | la misma forma que Am, una cuerda más grave |
| Am | `x02210` | x 0 2 3 1 0 | la misma forma que E, una cuerda más aguda |
| Em | `022000` | 0 2 3 0 0 0 | el acorde más fácil de la guitarra |
| Dm | `xx0231` | x x 0 2 3 1 | |

**Pares que comparten dedos** (cambios gratis):
- `C ↔ Am`: solo se mueve el anular (5ª cuerda → 3ª).
- `E ↔ Am`: la misma forma, una cuerda abajo.
- `G (dedos 3 2 0 0 0 4) ↔ C`: los dedos 3 y 2 bajan una cuerda cada uno, en el mismo traste; el 1 entra en la 2ª cuerda.
- `Em → E`: añade el dedo 1 en la 3ª cuerda, traste 1.
- `D ↔ Dm ↔ Dsus4 ↔ Dsus2`: solo cambia la 1ª y la 2ª cuerda.

Cómo suenan, tal como los toca la guitarra:

```abc
X:1
T:Los 8 acordes abiertos (escritura de guitarra)
M:4/4
L:1/2
K:C clef=treble-8
"C"[CEGce] "G"[G,B,DGBg] | "D"[DAd^f] "A"[A,EA^ce] | "E"[E,B,E^GBe] "Am"[A,EAce] | "Em"[E,B,EGBe] "Dm"[DAdf] |]
```

```strudel
setcpm(60/4)
// Voicings reales de guitarra: cada note() es una forma, un compás cada una
cat(
  note("c3,e3,g3,c4,e4"),        // C   x32010
  note("g2,b2,d3,g3,b3,g4"),     // G   320003
  note("d3,a3,d4,f#4"),          // D   xx0232
  note("a2,e3,a3,c#4,e4"),       // A   x02220
  note("e2,b2,e3,g#3,b3,e4"),    // E   022100
  note("a2,e3,a3,c4,e4"),        // Am  x02210
  note("e2,b2,e3,g3,b3,e4"),     // Em  022000
  note("d3,a3,d4,f4"),           // Dm  xx0231
).s("gm_acoustic_guitar_steel").room(.3)
```

### 2.2 Los "difíciles", con su versión fácil

```
    F    F    Bm   Bm   F#m  F#m  C#m  G#m  B    B°   
e |-1----1----2----2----2----2----x----4----x----x----|
B |-1----1----3----3----2----2----5----4----4----3----|
G |-2----2----4----4----2----2----6----4----4----4----|
D |-3----3----4----4----4----4----6----6----4----3----|
A |-x----3----x----2----x----4----4----6----2----2----|
E |-x----1----x----x----x----2----x----4----x----x----|
```

| Acorde | Versión fácil | Versión completa | Cuándo usar cuál |
|---|---|---|---|
| F | `xx3211` (4 cuerdas) | `133211` (cejilla forma E) | la fácil en folk suave; la completa cuando el bajo importa |
| Bm | `xx4432` | `x24432` (cejilla forma Am) | la fácil casi siempre |
| F#m | `xx4222` | `244222` (cejilla forma Em) | |
| C#m | `x4665x` | `x46654` (cejilla forma Am) | |
| G#m | — | `466444` (cejilla forma Em) | en E mayor; o capo |
| B | `x2444x` | `x24442` (cejilla forma A) | en E mayor; o usa **B7 `x21202`**, que es abierto |
| B° | `x2343x` | — | casi nunca se toca: se sustituye por **G7** (en C) o por V7 en general |

> [!tip] Regla de los acordes con cejilla
> Primero la versión de 4 cuerdas (sin bajo). Cuando suene limpia 4 de 4 veces, pasa a la
> cejilla completa. Una cejilla que zumba es peor que un acorde de 4 cuerdas limpio.

### 2.3 Séptimas abiertas

**Dominantes (V7)**: el acorde que *pide* resolver. Ver [[1. Acordes dominantes]].

```
    E7   A7   D7   G7   C7   B7   
e |-0----0----2----1----0----2----|
B |-0----2----1----0----1----0----|
G |-1----0----2----0----3----2----|
D |-0----2----0----0----2----1----|
A |-2----0----x----2----3----2----|
E |-0----x----x----3----x----x----|
```

**Mayores con séptima (Imaj7, IVmaj7)**: el sonido dream pop por excelencia.

```
    Cmaj7  Fmaj7  Gmaj7  Dmaj7  Amaj7  Emaj7  
e |-0------0------2------2------0------0------|
B |-0------1------0------2------2------0------|
G |-0------2------0------2------1------1------|
D |-2------3------0------0------2------1------|
A |-3------x------2------x------0------2------|
E |-x------x------3------x------x------0------|
```

**Menores con séptima (ii7, iii7, vi7)**:

```
    Am7    Em7    Dm7    Bm7    F#m7   C#m7   G#m7   
e |-0------0------1------2------x------4------x------|
B |-1------0------1------0------2------5------4------|
G |-0------0------2------2------2------4------4------|
D |-2------0------0------0------2------6------4------|
A |-0------2------x------2------x------4------x------|
E |-x------0------x------x------2------x------4------|
```

**Semidisminuidos (viiø7)**: el vii° con séptima. Raros en folk, útiles en jazz/Radiohead.

```
    Bø    F#ø   C#ø   G#ø   D#ø   
e |-x-----x-----x-----x-----x-----|
B |-3-----1-----5-----3-----7-----|
G |-2-----2-----4-----4-----6-----|
D |-3-----2-----5-----4-----7-----|
A |-2-----x-----4-----x-----6-----|
E |-x-----2-----x-----4-----x-----|
```

### 2.4 Acordes con bajo (inversiones y slash chords)

`G/B` = acorde de G con **B en el bajo**. Sirven para que el bajo camine por grados conjuntos
en vez de saltar. Más en [[00. Voicing e inversiones]].

```
    G/B   C/E   D/F#  Am/G  C/G   E/G#  
e |-3-----0-----2-----0-----0-----0-----|
B |-0-----1-----3-----1-----1-----0-----|
G |-0-----0-----2-----2-----0-----1-----|
D |-0-----2-----0-----2-----2-----2-----|
A |-2-----3-----0-----x-----3-----x-----|
E |-x-----0-----2-----3-----3-----4-----|
```

La bajada folk clásica (el bajo desciende G → F# → E → D → C):

```
   G             D/F#          Em            Em/D          C
e|-------------|-------------|-------------|-------0-----|-------------|
B|-------0-----|-------3-----|-------0-----|-------------|-------1-----|
G|----0-----0--|----2-----2--|----0-----0--|----0-----0--|----0-----0--|
D|-------------|-------------|-------------|-0-----------|-------------|
A|-------------|-------------|-------------|-------------|-3-----------|
E|-3-----------|-2-----------|-0-----------|-------------|-------------|
```

---

## 3. Las 12 tonalidades mayores

### 3.1 Tabla maestra

Ordenadas por el círculo de quintas: **cada fila añade un sostenido** (o quita un bemol).

| Tonalidad | Armadura | Notas | Relativa menor | Cómo tocarla en guitarra | Dificultad |
|---|---|---|---|---|---|
| **C** | — | C D E F G A B | Am | abierta (F en versión `xx3211`) | ★★ |
| **G** | 1♯ F | G A B C D E F♯ | Em | abierta; la más cómoda | ★ |
| **D** | 2♯ F C | D E F♯ G A B C♯ | Bm | abierta (Bm y F♯m en versión fácil) | ★ |
| **A** | 3♯ F C G | A B C♯ D E F♯ G♯ | F♯m | abierta + C♯m | ★★ |
| **E** | 4♯ F C G D | E F♯ G♯ A B C♯ D♯ | C♯m | abierta + 3 cejillas, o capo | ★★★ |
| **B** | 5♯ F C G D A | B C♯ D♯ E F♯ G♯ A♯ | G♯m | capo 2 formas A · capo 4 formas G | ★★★★ |
| **F♯ / G♭** | 6♯ / 6♭ | F♯ G♯ A♯ B C♯ D♯ E♯ | D♯m / E♭m | capo 2 formas E · capo 4 formas D | ★★★★ |
| **D♭** | 5♭ B E A D G | D♭ E♭ F G♭ A♭ B♭ C | B♭m | capo 1 formas C · capo 4 formas A | ★★★★ |
| **A♭** | 4♭ B E A D | A♭ B♭ C D♭ E♭ F G | Fm | capo 1 formas G · capo 4 formas E | ★★★ |
| **E♭** | 3♭ B E A | E♭ F G A♭ B♭ C D | Cm | capo 1 formas D · capo 3 formas C | ★★★ |
| **B♭** | 2♭ B E | B♭ C D E♭ F G A | Gm | capo 1 formas A · capo 3 formas G | ★★★ |
| **F** | 1♭ B | F G A B♭ C D E | Dm | capo 3 formas D · capo 5 formas C · o cejilla | ★★ |

> [!tip] Leer una armadura sin contar
> - **Sostenidos** (orden F C G D A E B): el último sostenido está **un semitono debajo de la
>   tónica**. Último = G♯ → la tonalidad es A.
> - **Bemoles** (orden B E A D G C F): el **penúltimo bemol es la tónica**. B♭ E♭ A♭ → E♭.
> - F mayor (un bemol) es la única que hay que memorizar.
>
> Por qué van de quinta en quinta: ver [[#10.1 Por qué los sostenidos van de quinta en quinta]].

### 3.2 Las tríadas de las 12 tonalidades

| Tonalidad | I | ii | iii | IV | V | vi | vii° |
|---|---|---|---|---|---|---|---|
| **C** | C | Dm | Em | F | G | Am | B° |
| **G** | G | Am | Bm | C | D | Em | F♯° |
| **D** | D | Em | F♯m | G | A | Bm | C♯° |
| **A** | A | Bm | C♯m | D | E | F♯m | G♯° |
| **E** | E | F♯m | G♯m | A | B | C♯m | D♯° |
| **B** | B | C♯m | D♯m | E | F♯ | G♯m | A♯° |
| **F♯** | F♯ | G♯m | A♯m | B | C♯ | D♯m | E♯° |
| **D♭** | D♭ | E♭m | Fm | G♭ | A♭ | B♭m | C° |
| **A♭** | A♭ | B♭m | Cm | D♭ | E♭ | Fm | G° |
| **E♭** | E♭ | Fm | Gm | A♭ | B♭ | Cm | D° |
| **B♭** | B♭ | Cm | Dm | E♭ | F | Gm | A° |
| **F** | F | Gm | Am | B♭ | C | Dm | E° |

Fíjate en las columnas: **la columna V de una fila es la columna I de la fila siguiente**.
Eso es el círculo de quintas leído en una tabla.

### 3.3 Las séptimas de las 12 tonalidades

| Tonalidad | Imaj7 | ii7 | iii7 | IVmaj7 | V7 | vi7 | viiø7 |
|---|---|---|---|---|---|---|---|
| **C** | Cmaj7 | Dm7 | Em7 | Fmaj7 | G7 | Am7 | Bø7 |
| **G** | Gmaj7 | Am7 | Bm7 | Cmaj7 | D7 | Em7 | F♯ø7 |
| **D** | Dmaj7 | Em7 | F♯m7 | Gmaj7 | A7 | Bm7 | C♯ø7 |
| **A** | Amaj7 | Bm7 | C♯m7 | Dmaj7 | E7 | F♯m7 | G♯ø7 |
| **E** | Emaj7 | F♯m7 | G♯m7 | Amaj7 | B7 | C♯m7 | D♯ø7 |
| **B** | Bmaj7 | C♯m7 | D♯m7 | Emaj7 | F♯7 | G♯m7 | A♯ø7 |
| **F♯** | F♯maj7 | G♯m7 | A♯m7 | Bmaj7 | C♯7 | D♯m7 | E♯ø7 |
| **D♭** | D♭maj7 | E♭m7 | Fm7 | G♭maj7 | A♭7 | B♭m7 | Cø7 |
| **A♭** | A♭maj7 | B♭m7 | Cm7 | D♭maj7 | E♭7 | Fm7 | Gø7 |
| **E♭** | E♭maj7 | Fm7 | Gm7 | A♭maj7 | B♭7 | Cm7 | Dø7 |
| **B♭** | B♭maj7 | Cm7 | Dm7 | E♭maj7 | F7 | Gm7 | Aø7 |
| **F** | Fmaj7 | Gm7 | Am7 | B♭maj7 | C7 | Dm7 | Eø7 |

### 3.4 Las 12 en partitura

Mira cómo la armadura crece un accidente por línea:

```abc
X:1
T:Las tríadas de las 12 tonalidades, por el círculo de quintas
M:4/4
L:1/4
K:C
"C"[CEG] "Dm"[DFA] "Em"[EGB] "F"[FAc] | "G"[GBd] "Am"[Ace] "B°"[Bdf] "C"[ceg] |]
K:G
"G"[G,B,D] "Am"[A,CE] "Bm"[B,DF] "C"[CEG] | "D"[DFA] "Em"[EGB] "F#°"[FAc] "G"[GBd] |]
K:D
"D"[DFA] "Em"[EGB] "F#m"[FAc] "G"[GBd] | "A"[Ace] "Bm"[Bdf] "C#°"[ceg] "D"[dfa] |]
K:A
"A"[A,CE] "Bm"[B,DF] "C#m"[CEG] "D"[DFA] | "E"[EGB] "F#m"[FAc] "G#°"[GBd] "A"[Ace] |]
K:E
"E"[EGB] "F#m"[FAc] "G#m"[GBd] "A"[Ace] | "B"[Bdf] "C#m"[ceg] "D#°"[dfa] "E"[egb] |]
K:B
"B"[B,DF] "C#m"[CEG] "D#m"[DFA] "E"[EGB] | "F#"[FAc] "G#m"[GBd] "A#°"[Ace] "B"[Bdf] |]
K:F#
"F#"[FAc] "G#m"[GBd] "A#m"[Ace] "B"[Bdf] | "C#"[ceg] "D#m"[dfa] "E#°"[egb] "F#"[fac'] |]
K:Db
"Db"[DFA] "Ebm"[EGB] "Fm"[FAc] "Gb"[GBd] | "Ab"[Ace] "Bbm"[Bdf] "C°"[ceg] "Db"[dfa] |]
K:Ab
"Ab"[A,CE] "Bbm"[B,DF] "Cm"[CEG] "Db"[DFA] | "Eb"[EGB] "Fm"[FAc] "G°"[GBd] "Ab"[Ace] |]
K:Eb
"Eb"[EGB] "Fm"[FAc] "Gm"[GBd] "Ab"[Ace] | "Bb"[Bdf] "Cm"[ceg] "D°"[dfa] "Eb"[egb] |]
K:Bb
"Bb"[B,DF] "Cm"[CEG] "Dm"[DFA] "Eb"[EGB] | "F"[FAc] "Gm"[GBd] "A°"[Ace] "Bb"[Bdf] |]
K:F
"F"[FAc] "Gm"[GBd] "Am"[Ace] "Bb"[Bdf] | "C"[ceg] "Dm"[dfa] "E°"[egb] "F"[fac'] |]
```

---

## 4. Las cinco tonalidades de guitarra, una por una

Son las que el instrumento regala: casi todo en posición abierta, con cuerdas al aire que
resuenan. El 90 % del folk vive aquí. Para cada una: sus acordes, el V7 que la cierra y la
escala en posición abierta.

### 4.1 C mayor

```
    C    Dm   Em   F    G    Am   G7   
e |-0----1----0----1----3----0----1----|
B |-1----3----0----1----0----1----0----|
G |-0----2----0----2----0----2----0----|
D |-2----0----2----3----0----2----0----|
A |-3----x----2----x----2----0----2----|
E |-x----x----0----x----3----x----3----|
```

- La única dificultad es **F**: usa `xx3211` o `Fmaj7 xx3210` (más fácil y más bonito).
- Cadencia: `G7 → C`.
- Escala abierta (C3 → G4):

```
e|----------------------------0--1--3--|
B|-------------------0--1--3-----------|
G|-------------0--2--------------------|
D|----0--2--3--------------------------|
A|-3-----------------------------------|
E|-------------------------------------|
```

### 4.2 G mayor

```
    G    Am   Bm   C    D    Em   D7   
e |-3----0----2----0----2----0----2----|
B |-0----1----3----1----3----0----1----|
G |-0----2----4----0----2----0----2----|
D |-0----2----4----2----0----2----0----|
A |-2----0----x----3----x----2----x----|
E |-3----x----x----x----x----0----x----|
```

- La tonalidad más cómoda: **las seis cuerdas al aire pertenecen a la escala**.
- Bm: `xx4432`, o sustitúyelo por `G/B x20003` cuando funciona como iii de paso.
- Cadencia: `D7 → G`.
- Escala abierta (G2 → G4, dos octavas completas):

```
e|-------------------------------------0--2--3--|
B|----------------------------0--1--3-----------|
G|----------------------0--2--------------------|
D|-------------0--2--4--------------------------|
A|----0--2--3-----------------------------------|
E|-3--------------------------------------------|
```

### 4.3 D mayor

```
    D    Em   F#m  G    A    Bm   A7   
e |-2----0----2----3----0----2----0----|
B |-3----0----2----0----2----3----2----|
G |-2----0----2----0----2----4----0----|
D |-0----2----4----0----2----4----2----|
A |-x----2----x----2----0----x----0----|
E |-x----0----x----3----x----x----x----|
```

- La 4ª cuerda al aire (D) es un **pedal de tónica** que puede sonar debajo de todo.
- Bm y F♯m en versión de 4 cuerdas. `A7 x02020` es más fácil que A.
- Cadencia: `A7 → D`.
- Escala abierta (D3 → A4):
/

```
e|-------------------------0--2--3--5--|
B|----------------0--2--3--------------|
G|----------0--2-----------------------|
D|-0--2--4-----------------------------|
A|-------------------------------------|
E|-------------------------------------|
```

### 4.4 A mayor

```
    A    Bm   C#m  D    E    F#m  E7   
e |-0----2----x----2----0----2----0----|
B |-2----3----5----3----0----2----0----|
G |-2----4----6----2----1----2----1----|
D |-2----4----6----0----2----4----0----|
A |-0----x----4----x----2----x----2----|
E |-x----x----x----x----0----x----0----|
```

- C♯m es el único difícil: `x4665x`. Si estorba, sáltalo: el iii es el grado que menos falta hace.
- Cadencia: `E7 → A`, con el E7 más fácil de la guitarra (`020100`).
- Escala abierta (A2 → A4):

```
e|----------------------------------0--2--4--5--|
B|-------------------------0--2--3--------------|
G|-------------------1--2-----------------------|
D|----------0--2--4-----------------------------|
A|-0--2--4--------------------------------------|
E|----------------------------------------------|
```

### 4.5 E mayor

```
    E    F#m  G#m  A    B    C#m  B7   
e |-0----2----4----0----x----4----2----|
B |-0----2----4----2----4----5----0----|
G |-1----2----4----2----4----6----2----|
D |-2----4----6----2----4----6----1----|
A |-2----4----6----0----2----4----2----|
E |-0----2----4----x----x----x----x----|
```

- Tonalidad de rock y blues: la 6ª cuerda al aire es la tónica.
- Tres cejillas (F♯m, G♯m, C♯m) y B. Alternativa: **B7 `x21202`** abierto en lugar de B.
- Si se hace pesado: **capo 2 + formas de D** suena en E y todo es abierto.
- Escala abierta (E2 → E4):

```
e|-------------------------------------------0--|
B|----------------------------------0--2--4-----|
G|----------------------------1--2--------------|
D|-------------------1--2--4--------------------|
A|----------0--2--4-----------------------------|
E|-0--2--4--------------------------------------|
```

---

## 5. El capo

El capo **sube todo** el número de trastes en que lo pongas. Tú sigues tocando las formas
de siempre; lo que cambia es cómo se llaman.

> **Tonalidad real = forma + traste del capo (en semitonos)**

### 5.1 Matriz del capo

| Forma ↓ · Capo → | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| **C** | C | C♯/D♭ | D | E♭ | E | F | F♯/G♭ | G |
| **A** | A | B♭ | B | C | C♯/D♭ | D | E♭ | E |
| **G** | G | A♭ | A | B♭ | B | C | C♯/D♭ | D |
| **E** | E | F | F♯/G♭ | G | A♭ | A | B♭ | B |
| **D** | D | E♭ | E | F | F♯/G♭ | G | A♭ | A |
| **Am** | Am | B♭m | Bm | Cm | C♯m | Dm | E♭m | Em |
| **Em** | Em | Fm | F♯m | Gm | G♯m | Am | B♭m | Bm |

(Las filas forman la palabra **CAGED**: no es casualidad, ver §7.)

### 5.2 La pregunta inversa: "la canción está en X, ¿qué hago?"

| Quiero tocar en | Opción 1 | Opción 2 | Opción 3 |
|---|---|---|---|
| F | capo 3, formas D | capo 5, formas C | capo 1, formas E |
| B♭ | capo 1, formas A | capo 3, formas G | capo 6, formas E |
| E♭ | capo 1, formas D | capo 3, formas C | capo 6, formas A |
| A♭ | capo 1, formas G | capo 4, formas E | capo 6, formas D |
| D♭ | capo 1, formas C | capo 4, formas A | capo 6, formas G |
| F♯ | capo 2, formas E | capo 4, formas D | capo 6, formas C |
| B | capo 2, formas A | capo 4, formas G | capo 7, formas E |

### 5.3 Para qué sirve además de cambiar de tonalidad

- **Voz**: encuentra la forma que te gusta tocar y mueve el capo hasta que la melodía te
  quede cómoda.
- **Timbre**: capo 5–7 con formas de G o D suena a mandolina/arpa. Muy Andrew Bird, muy
  Bon Iver.
- **Dos guitarras**: una en formas de G sin capo, la otra en formas de D con capo 5.
  Mismos acordes, voicings distintos: la mezcla se abre sola.

```strudel
setcpm(80/4)
// Las mismas formas (G C D Em) con capo en 0, 2, 3 y 5: cuatro compases cada una
cat(
  note("g2,b2,d3,g3,b3,g4"),     // G
  note("c3,e3,g3,c4,e4"),        // C
  note("d3,a3,d4,f#4"),          // D
  note("e2,b2,e3,g3,b3,e4"),     // Em
)
  .transpose("<0!4 2!4 3!4 5!4>")
  .s("gm_acoustic_guitar_steel")
  .room(.3)
```

---

## 6. Cejillas, el mapa y los bloques

### 6.1 Las dos formas que desbloquean las 12 tonalidades

**Forma E** (raíz en la 6ª cuerda), mostrada en el traste 1 (= F):

```
    F      Fm     F7     Fm7    Fmaj7  
e |-1------1------1------1------x------|
B |-1------1------1------1------1------|
G |-2------1------2------1------2------|
D |-3------3------1------1------2------|
A |-3------3------3------3------x------|
E |-1------1------1------1------1------|
```

**Forma A** (raíz en la 5ª cuerda), mostrada en el traste 1 (= B♭):

```
    Bb     Bbm    Bb7    Bbm7   Bbmaj7 
e |-1------1------1------1------1------|
B |-3------2------3------2------3------|
G |-3------3------1------1------2------|
D |-3------3------3------3------3------|
A |-1------1------1------1------1------|
E |-x------x------x------x------x------|
```

Todo acorde con cejilla = **elegir cuerda de la raíz + deslizar al traste de esa nota**.

### 6.2 El mapa: las notas de la 6ª y la 5ª cuerda

Es lo único que hay que memorizar del mástil al principio. Las notas naturales en negrita.

| Traste | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **6ª (E)** | **E** | **F** | F♯ | **G** | G♯ | **A** | A♯ | **B** | **C** | C♯ | **D** | D♯ | **E** |
| **5ª (A)** | **A** | A♯ | **B** | **C** | C♯ | **D** | D♯ | **E** | **F** | F♯ | **G** | G♯ | **A** |

Puntos de referencia: los **puntitos del mástil** en 3, 5, 7, 9 y 12. En la 6ª cuerda caen
G, A, B, C♯, E; en la 5ª, C, D, E, F♯, A.

Mástil completo (hasta el 12, todo se repite después):

```
     0   1   2   3   4   5   6   7   8   9   10  11  12 
e  |-E-|-F-|-F#|-G-|-G#|-A-|-A#|-B-|-C-|-C#|-D-|-D#|-E-|
B  |-B-|-C-|-C#|-D-|-D#|-E-|-F-|-F#|-G-|-G#|-A-|-A#|-B-|
G  |-G-|-G#|-A-|-A#|-B-|-C-|-C#|-D-|-D#|-E-|-F-|-F#|-G-|
D  |-D-|-D#|-E-|-F-|-F#|-G-|-G#|-A-|-A#|-B-|-C-|-C#|-D-|
A  |-A-|-A#|-B-|-C-|-C#|-D-|-D#|-E-|-F-|-F#|-G-|-G#|-A-|
E  |-E-|-F-|-F#|-G-|-G#|-A-|-A#|-B-|-C-|-C#|-D-|-D#|-E-|
```

### 6.3 Dónde cae la tónica de cada tonalidad

| Tonalidad | I en la 6ª (forma E) | I en la 5ª (forma A) |
|---|---|---|
| C | 8 | 3 |
| C♯/D♭ | 9 | 4 |
| D | 10 | 5 |
| E♭ | 11 | 6 |
| E | 0 / 12 | 7 |
| F | 1 | 8 |
| F♯/G♭ | 2 | 9 |
| G | 3 | 10 |
| A♭ | 4 | 11 |
| A | 5 | 0 / 12 |
| B♭ | 6 | 1 |
| B | 7 | 2 |

### 6.4 El bloque con raíz en la 6ª: una tonalidad entera en 5 trastes

Si el **I** está en la 6ª cuerda en el traste `n`:

| Grado | Forma | Cuerda de la raíz | Traste |
|---|---|---|---|
| I | E (mayor) | 6ª | n |
| ii | Em | 6ª | n + 2 |
| iii | Am | 5ª | n − 1 |
| IV | A (mayor) | 5ª | n |
| V | A (mayor) | 5ª | n + 2 |
| vi | Am | 5ª | n + 4 · o Em en la 6ª, n − 3 |
| vii° | — | usa el V7 | |

Dónde caen las raíces (ejemplo en G, `n = 3`):

```
       2      3      4      5      6      7   
A  | iii  |  IV  |      |  V   |      |  vi  |
E  |      |  I   |      |  ii  |      |      |
```

| Grado | En G (n = 3) | En A (n = 5) | En C (n = 8) |
|---|---|---|---|
| I | G · 6ª/3 | A · 6ª/5 | C · 6ª/8 |
| ii | Am · 6ª/5 | Bm · 6ª/7 | Dm · 6ª/10 |
| iii | Bm · 5ª/2 | C♯m · 5ª/4 | Em · 5ª/7 |
| IV | C · 5ª/3 | D · 5ª/5 | F · 5ª/8 |
| V | D · 5ª/5 | E · 5ª/7 | G · 5ª/10 |
| vi | Em · 5ª/7 | F♯m · 5ª/9 | Am · 5ª/12 |

**Mueve todo el bloque y cambias de tonalidad.** La geometría no cambia nunca.

### 6.5 El bloque con raíz en la 5ª

Si el **I** está en la 5ª cuerda en el traste `m`:

| Grado | Forma | Cuerda de la raíz | Traste |
|---|---|---|---|
| I | A (mayor) | 5ª | m |
| ii | Am | 5ª | m + 2 |
| iii | Am | 5ª | m + 4 |
| IV | E (mayor) | 6ª | m − 2 |
| V | E (mayor) | 6ª | m |
| vi | Em | 6ª | m + 2 |

Ejemplo en C (`m = 3`):

```
       1      2      3      4      5      6      7   
A  |      |      |  I   |      |  ii  |      | iii  |
E  |  IV  |      |  V   |      |  vi  |      |      |
```

> [!tip] La regla que esconden los dos bloques
> **Mismo traste, una cuerda más aguda = una cuarta arriba.** Por eso el IV está "encima"
> del I en el mismo traste, y el V dos trastes más allá. Desarrollado en
> [[#10.8 La geometría de las relaciones en el mástil]].

---

## 7. CAGED

Todo acorde mayor se puede tocar con las cinco formas abiertas **C – A – G – E – D**, y
siempre aparecen **en ese orden** subiendo por el mástil. Al terminar la D vuelve a empezar
la C, una octava arriba.

### 7.1 C en las cinco formas

```
    C·forma C  C·forma A  C·forma G  C·forma E  C·forma D  
e |-0----------3----------8----------8----------12---------|
B |-1----------5----------5----------8----------13---------|
G |-0----------5----------5----------9----------12---------|
D |-2----------5----------5----------10---------10---------|
A |-3----------3----------7----------10---------x----------|
E |-x----------x----------8----------8----------x----------|
```

| Forma | Trastes aprox. | Raíz en |
|---|---|---|
| C | 0–3 | 5ª y 2ª |
| A | 3–5 | 5ª y 3ª |
| G | 5–8 | 6ª, 3ª y 1ª |
| E | 8–10 | 6ª, 4ª y 1ª |
| D | 10–13 | 4ª y 2ª |

### 7.2 G en las cinco formas (el ciclo arranca en otra letra)

```
    G·forma G  G·forma E  G·forma D  G·forma C  G·forma A  
e |-3----------3----------7----------7----------10---------|
B |-0----------3----------8----------8----------12---------|
G |-0----------4----------7----------7----------12---------|
D |-0----------5----------5----------9----------12---------|
A |-2----------5----------x----------10---------10---------|
E |-3----------3----------x----------x----------x----------|
```

Orden en G: **G → E → D → C → A** (la misma cadena C-A-G-E-D, empezando en G).

> [!info] Para qué sirve CAGED
> - Cada forma marca **una zona del mástil**. Sobre cada zona vive una **posición de la
>   escala** (§9.2). Acorde y escala se aprenden juntos.
> - Las formas G y D completas son incómodas; en la práctica se usan **trozos** (las 3–4
>   cuerdas agudas). Por eso existe §8.

---

## 8. Tríadas en las tres cuerdas agudas

Tres notas, tres cuerdas (G, B, e). Suenan ligeras, dejan sitio al bajo y a la voz y son
la base de las guitarras de Beach House y del dream pop en general.

Cada tríada tiene **tres inversiones**: según qué nota quede abajo.

**G mayor** (fundamental = G abajo; 1ª inversión = B abajo; 2ª inversión = D abajo):

```
    1ª inv 2ª inv fund.
    G      G      G      
e |-3------7------10-----|
B |-3------8------12-----|
G |-4------7------12-----|
D |-x------x------x------|
A |-x------x------x------|
E |-x------x------x------|
```

**E menor**:

```
    1ª inv 2ª inv fund.
    Em     Em     Em     
e |-0------3------7------|
B |-0------5------8------|
G |-0------4------9------|
D |-x------x------x------|
A |-x------x------x------|
E |-x------x------x------|
```

Las formas se mueven igual que las cejillas: cualquier tríada mayor o menor es una de
estas tres formas en otro traste.

**Una tonalidad entera sin mover la mano** (I–IV–V–vi de G entre los trastes 5 y 9):

```
    G    C    D    Em   
e |-7----8----5----7----|
B |-8----8----7----8----|
G |-7----9----7----9----|
D |-x----x----x----x----|
A |-x----x----x----x----|
E |-x----x----x----x----|
```

Ese es el truco: en lugar de saltar por el mástil, eliges **la inversión más cercana**
del siguiente acorde. Es conducción de voces aplicada a la guitarra: ver
[[00. Voicing e inversiones]] y [[09. Tonos guía]].

---

## 9. Escalas en el mástil

### 9.1 La escala en posición abierta

Ya está en §4, una por tonalidad. Esas cinco cubren el 80 % de las melodías folk.

### 9.2 Las cinco posiciones de la escala mayor (en G)

Cada posición vive encima de una forma CAGED del acorde. `R` = tónica (G), los números son
grados. **Aprende la 1 primero; las demás se conectan con ella.**

**Posición 1 · forma E** (raíz en la 6ª, dedo 2 en la tónica):

```
     2   3   4   5  
e  |-7-|-R-|---|-2-|
B  |---|-5-|---|-6-|
G  |-2-|---|-3-|-4-|
D  |-6-|---|-7-|-R-|
A  |-3-|-4-|---|-5-|
E  |-7-|-R-|---|-2-|
```

**Posición 2 · forma D**:

```
     4   5   6   7   8  
e  |---|-2-|---|-3-|-4-|
B  |---|-6-|---|-7-|-R-|
G  |-3-|-4-|---|-5-|---|
D  |-7-|-R-|---|-2-|---|
A  |---|-5-|---|-6-|---|
E  |---|-2-|---|-3-|-4-|
```

**Posición 3 · forma C**:

```
     7   8   9   10 
e  |-3-|-4-|---|-5-|
B  |-7-|-R-|---|-2-|
G  |-5-|---|-6-|---|
D  |-2-|---|-3-|-4-|
A  |-6-|---|-7-|-R-|
E  |-3-|-4-|---|-5-|
```

**Posición 4 · forma A** (raíz en la 5ª):

```
     9   10  11  12  13 
e  |---|-5-|---|-6-|---|
B  |---|-2-|---|-3-|-4-|
G  |-6-|---|-7-|-R-|---|
D  |-3-|-4-|---|-5-|---|
A  |-7-|-R-|---|-2-|---|
E  |---|-5-|---|-6-|---|
```

**Posición 5 · forma G** (es la posición abierta, una octava arriba):

```
     11  12  13  14  15 
e  |---|-6-|---|-7-|-R-|
B  |---|-3-|-4-|---|-5-|
G  |-7-|-R-|---|-2-|---|
D  |---|-5-|---|-6-|---|
A  |---|-2-|---|-3-|-4-|
E  |---|-6-|---|-7-|-R-|
```

> [!tip] Para cualquier otra tonalidad
> Las cinco posiciones son **dibujos**: no cambian. Pon la `R` en la tónica que quieras
> (tabla de §6.3) y el dibujo entero se mueve con ella. A mayor = todo 2 trastes arriba.
> F mayor = todo 2 trastes abajo.

### 9.3 El mapa de grados: el mástil entero en G

Esto es lo que de verdad hay que ver. Los números son **grados**, no notas: por eso el mapa
vale para **cualquier tonalidad** con solo deslizarlo.

```
     0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15 
e  |-6-|---|-7-|-R-|---|-2-|---|-3-|-4-|---|-5-|---|-6-|---|-7-|-R-|
B  |-3-|-4-|---|-5-|---|-6-|---|-7-|-R-|---|-2-|---|-3-|-4-|---|-5-|
G  |-R-|---|-2-|---|-3-|-4-|---|-5-|---|-6-|---|-7-|-R-|---|-2-|---|
D  |-5-|---|-6-|---|-7-|-R-|---|-2-|---|-3-|-4-|---|-5-|---|-6-|---|
A  |-2-|---|-3-|-4-|---|-5-|---|-6-|---|-7-|-R-|---|-2-|---|-3-|-4-|
E  |-6-|---|-7-|-R-|---|-2-|---|-3-|-4-|---|-5-|---|-6-|---|-7-|-R-|
```

Ejercicio de lectura: busca todas las `R` (tónicas). Luego todas las `5` (dominantes). Luego
las `3` (las que dicen si es mayor o menor). En cualquier sitio del mástil, el acorde de la
tonalidad está hecho de `R-3-5`, el IV de `4-6-R`, el V de `5-7-2`.

### 9.4 Pentatónica: la escala de 5 notas

Quita los grados 4 y 7 de la mayor (los que forman semitonos) y queda la pentatónica:
**no tiene notas "malas"**. Es la escala de las melodías folk y de casi todo solo de guitarra.

`R` = G (tónica mayor) · `m` = E (tónica de la relativa menor) · `o` = resto.

**Caja 1** (posición abierta / traste 12):

```
     0   1   2   3  
e  |-m-|---|---|-R-|
B  |-o-|---|---|-o-|
G  |-R-|---|-o-|---|
D  |-o-|---|-m-|---|
A  |-o-|---|-o-|---|
E  |-m-|---|---|-R-|
```

**La misma caja en el 12**:

```
     12  13  14  15 
e  |-m-|---|---|-R-|
B  |-o-|---|---|-o-|
G  |-R-|---|-o-|---|
D  |-o-|---|-m-|---|
A  |-o-|---|-o-|---|
E  |-m-|---|---|-R-|
```

**Caja 2** (trastes 2–5):

```
     2   3   4   5  
e  |---|-R-|---|-o-|
B  |---|-o-|---|-m-|
G  |-o-|---|-o-|---|
D  |-m-|---|---|-R-|
A  |-o-|---|---|-o-|
E  |---|-R-|---|-o-|
```

> [!info] G pentatónica mayor = E pentatónica menor
> Son **las mismas cinco notas**. Si tocas la caja pensando en `R`, suena mayor; si
> descansas en `m`, suena menor (triste). Es la relativa (§10.5) en miniatura.
> Regla: **la menor relativa está 3 trastes debajo de la mayor**.

```abc
X:1
T:Pentatónica: mismas notas, dos casas
M:4/4
L:1/4
K:G
"^G pentatónica mayor"G A B d | e g2 z |
"^E pentatónica menor"E G A B | d e2 z |]
```

```strudel
// Mismas cinco notas: primero con casa en G, luego con casa en E
n("0 1 2 3 4 5 4 3 2 1 0 ~")
  .scale("<G:major:pentatonic E:minor:pentatonic>")
  .s("gm_acoustic_guitar_nylon")
  .room(.3)
```

---

## 10. Entre escalas, cómo funcionan las relaciones

Esto es lo más importante de la hoja. Una tonalidad no es una caja cerrada: comparte notas,
acordes y formas con sus vecinas. Saber **cuánto** comparte con cada una es saber a dónde
puedes ir y cómo va a sonar.

### 10.1 Por qué los sostenidos van de quinta en quinta

Una escala mayor son **dos tetracordos iguales** (4 notas con la fórmula T T S), separados
por un tono:

```
C mayor:   [C D E F]  T  [G A B C]
            T T S         T T S
```

El segundo tetracordo de C (`G A B C`) **ya es** el primer tetracordo de una escala que
empieza en G. Para completar G mayor solo falta un segundo tetracordo desde D:
`D E F G`, que con la fórmula T T S necesita **F♯**.

```
G mayor:   [G A B C]  T  [D E F♯ G]
```

Y otra vez: el segundo tetracordo de G (`D E F♯ G`) es el primero de D mayor, que necesita
`A B C♯ D` → aparece **C♯**. Cada vez que subes una quinta, **la mitad de la escala se
recicla y solo cambia una nota: el nuevo 7º grado sube un semitono**. Por eso los sostenidos
aparecen en orden de quintas (F♯, C♯, G♯, D♯…).

Con los bemoles pasa lo mismo al revés: bajar una quinta (C → F) recicla el *primer*
tetracordo como segundo, y la nota que cambia es **el nuevo 4º grado, que baja** (B → B♭).

```abc
X:1
T:Tetracordos: cada escala presta su mitad alta a la siguiente
M:4/4
L:1/4
K:C
"^C mayor"C D E F | "^mitad alta de C"G A B c |
"^G mayor = mitad alta de C..."G A B c | "^...+ tetracordo nuevo"d e ^f g |
"^D mayor = mitad alta de G..."D E ^F G | "^...+ tetracordo nuevo"A B ^c d |]
```

### 10.2 El círculo de quintas completo

```
                         C
                       (Am)
              F         0         G
            (Dm)                 (Em)
             1♭                   1♯
      B♭                                    D
     (Gm)                                  (Bm)
      2♭                                    2♯

  E♭                                            A
 (Cm)                                         (F♯m)
  3♭                                            3♯

      A♭                                    E
     (Fm)                                  (C♯m)
      4♭                                    4♯
              D♭                  B
            (B♭m)              (G♯m)
              5♭                  5♯
                       F♯ / G♭
                     (D♯m / E♭m)
                       6♯ / 6♭
```

- **En sentido horario** (C → G → D…) se sube una quinta y se **añade un sostenido**.
- **En sentido antihorario** (C → F → B♭…) se baja una quinta y se **añade un bemol**.
- Entre paréntesis, la **relativa menor**: mismas notas, misma armadura.
- **Distancia en el círculo = distancia de sonido.** Vecinos = 1 nota de diferencia;
  opuestos (C ↔ F♯) = casi nada en común.

### 10.3 Vecinos: comparten 6 de 7 notas y 4 de 7 acordes

| Tonalidad | Notas | Acordes |
|---|---|---|
| **F** | F G A **B♭** C D E | F · Gm · Am · B♭ · C · Dm · E° |
| **C** | C D E F G A B | C · Dm · Em · F · G · Am · B° |
| **G** | G A B C D E **F♯** | G · Am · Bm · C · D · Em · F♯° |

Acordes comunes entre **C y G**: `C`, `Em`, `G`, `Am`.
Acordes comunes entre **C y F**: `C`, `Dm`, `F`, `Am`.

**La traducción de grados es siempre la misma**, en cualquier tonalidad:

| Subir una quinta (C → G) | | Bajar una quinta (C → F) | |
|---|---|---|---|
| I se vuelve | **IV** | I se vuelve | **V** |
| iii se vuelve | **vi** | ii se vuelve | **vi** |
| V se vuelve | **I** | IV se vuelve | **I** |
| vi se vuelve | **ii** | vi se vuelve | **iii** |

**Tonalidades vecinas de una tonalidad mayor** (las "familiares"): las que tienen como
tónica uno de sus acordes mayores o menores. Para C: **G, F, Am, Em, Dm**. Ver
[[7. Familias tonales]].

#### Modular con un acorde pivote

Un acorde común a las dos tonalidades sirve de **puente**: el oído lo escucha en la
tonalidad vieja y lo reinterpreta en la nueva. Después, el **V de la nueva tonalidad**
confirma el cambio (la nota nueva, F♯, aparece en el D).

```abc
X:1
T:Modulación por acorde pivote: C → G
M:4/4
L:1/2
K:C
"C""_I"[CEG] "F""_IV"[FAc] | "G""_V"[GBd] "C""_I"[ceg] | "Am""_vi en C = ii en G"[Ace]2 | "D""_V en G"[D^FA] "D7""_V7"[D^FAc] | "G""_I en G"[GBd]2 |]
```

```strudel
setcpm(70/4)
// Grados con su escala: cinco compases en C (el 5º es Am, el pivote) y tres en G
n("<0 3 4 0 5 4 0 0>".add("[0,2,4]"))
  .scale("<C:major!5 G:major!3>")
  .s("gm_acoustic_guitar_steel")
  .room(.3)
```

| Tipo de modulación | Cómo | Cómo suena |
|---|---|---|
| **Por pivote** | acorde común → V de la nueva → I | suave, casi no se nota |
| **Por dominante secundaria** | toca el V7 de la nueva tónica directamente (en C, `D7 → G`) | clara, con dirección. Ver [[9. Dominantes en progresiones]] |
| **Directa** | la frase siguiente simplemente empieza en otra tonalidad | brusca; típica del último estribillo un tono arriba |
| **A la relativa** | mismos acordes, cambia la casa | cambio de color sin cambio de notas (§10.5) |

Recorrido completo del círculo, V → I en cada tonalidad:

```strudel
setcpm(90/4)
n("<4 0>".add("[0,2,4]"))
  .scale("<C:major!2 G:major!2 D:major!2 A:major!2 E:major!2 B:major!2 F#:major!2 Db:major!2 Ab:major!2 Eb:major!2 Bb:major!2 F:major!2>")
  .s("gm_acoustic_guitar_steel")
```

### 10.4 Un acorde, tres casas

Todo acorde mayor pertenece a **tres** tonalidades mayores, y todo menor también. Saberlo
te dice a dónde puede llevarte cada acorde.

| Acorde mayor | es I en | es IV en | es V en |
|---|---|---|---|
| C | C | G | F |
| G | G | D | C |
| D | D | A | G |
| A | A | E | D |
| E | E | B | A |
| F | F | C | B♭ |

| Acorde menor | es ii en | es iii en | es vi en |
|---|---|---|---|
| Am | G | F | C |
| Em | D | C | G |
| Bm | A | G | D |
| F♯m | E | D | A |
| C♯m | B | A | E |
| Dm | C | B♭ | F |

### 10.5 Relativa menor: mismas notas, otra casa

| Mayor | C | G | D | A | E | B | F♯ | D♭ | A♭ | E♭ | B♭ | F |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Relativa menor** | Am | Em | Bm | F♯m | C♯m | G♯m | D♯m | B♭m | Fm | Cm | Gm | Dm |

- La relativa es el **vi** de la mayor. En el mástil: **3 trastes abajo** en la misma cuerda.
- Mismos 7 acordes, pero la tónica pasa a ser el vi:

| Grado en G mayor | I | ii | iii | IV | V | vi | vii° |
|---|---|---|---|---|---|---|---|
| Acorde | G | Am | Bm | C | D | Em | F♯° |
| **Grado en E menor** | III | iv | v | VI | VII | **i** | ii° |

- En menor el v es **menor** (Bm) y no empuja hacia casa. Por eso casi siempre se pide
  prestado el **V mayor** de la menor armónica: `B7 → Em`. Ver [[3. Tonalidades menores]]
  y [[5. Armonización de menores armónicas]].

Las mismas formas de guitarra sirven para las dos: una canción en G que **termina en Em**
cambia de mayor a triste sin cambiar un solo acorde.

```abc
X:1
T:Los mismos acordes, dos casas: G mayor y E menor
M:4/4
L:1/2
K:G
"G""_I"[GBd] "D""_V"[FAd] | "Em""_vi"[EGB] "C""_IV"[EGc] | "Am""_ii"[EAc] "D""_V"[FAd] | "G""_casa: I"[GBd]2 |
"Em""_i"[EGB] "C""_VI"[EGc] | "G""_III"[DGB] "D""_VII"[DFA] | "Am""_iv"[EAc] "B7""_V7 prestado"[B,^DFA] | "Em""_casa: i"[EGB]2 |]
```

```strudel
setcpm(70/4)
// Mismos acordes de G: la primera frase cae en G (I), la segunda en Em (vi)
n("<0 4 5 3 3 4 0 0 5 3 0 4 3 4 5 5>".add("[0,2,4]"))
  .scale("G:major")
  .s("gm_acoustic_guitar_steel")
  .room(.3)
```

### 10.6 Paralela menor: misma tónica, otra escala (intercambio modal)

C mayor y C menor tienen la **misma tónica** y escalas distintas. Tomar prestados acordes
de la paralela menor es el color más usado en la música triste: el acorde "se oscurece"
sin salir de la tonalidad. Ver [[3. Intercambios modales]] y
[[4. Armonización de intercambios modales]].

| Prestado | Qué es | Cómo suena |
|---|---|---|
| **iv** | el IV vuelto menor | nostalgia inmediata; el sonido Radiohead/Bon Iver |
| **♭VI** | mayor, un semitono sobre el V | épico, cinematográfico |
| **♭VII** | mayor, un tono bajo la tónica | folk, rock, mixolidio, Dylan |
| **♭III** | mayor, sobre el ii | oscuro y luminoso a la vez |

| Tonalidad | iv | ♭VI | ♭VII | ♭III | ¿Abiertos? |
|---|---|---|---|---|---|
| **A** | Dm | F | G | C | **todos** |
| **E** | Am | C | D | G | **todos** |
| **D** | Gm | B♭ | C | F | C abierto, F fácil |
| **G** | Cm | E♭ | F | B♭ | F fácil, el resto cejilla |
| **C** | Fm | A♭ | B♭ | E♭ | todos con cejilla |

> [!tip] La razón para escribir en A o en E
> En **A** y en **E**, los cuatro acordes prestados son **acordes abiertos**. Si quieres
> intercambio modal en guitarra acústica, esas dos tonalidades (más capo) son el camino.

Prestados en **A** (todos abiertos):

```
    Dm   F    G    C    
e |-1----1----3----0----|
B |-3----1----0----1----|
G |-2----2----0----0----|
D |-0----3----0----2----|
A |-x----x----2----3----|
E |-x----x----3----x----|
```

Prestados en **E** (todos abiertos):

```
    Am   C    D    G    
e |-0----0----2----3----|
B |-1----1----3----0----|
G |-2----0----2----0----|
D |-2----2----0----0----|
A |-0----3----x----2----|
E |-x----x----x----3----|
```

Prestados en **D**:

```
    Gm   Bb   C    F    
e |-3----1----0----1----|
B |-3----3----1----1----|
G |-3----3----0----2----|
D |-5----3----2----3----|
A |-x----1----3----x----|
E |-x----x----x----x----|
```

Prestados en **G**:

```
    Cm   Eb   F    Bb   
e |-x----3----1----1----|
B |-4----4----1----3----|
G |-5----3----2----3----|
D |-5----1----3----3----|
A |-3----x----x----1----|
E |-x----x----x----x----|
```

Prestados en **C**:

```
    Fm   Ab   Bb   Eb   
e |-1----4----1----3----|
B |-1----4----3----4----|
G |-1----5----3----3----|
D |-3----6----3----1----|
A |-x----6----1----x----|
E |-x----4----x----x----|
```

```abc
X:1
T:El iv menor: IV → iv → I en C
M:4/4
L:1/2
K:C
"C""_I"[CEG]2 | "F""_IV"[CFA]2 | "Fm""_iv prestado"[CF_A]2 | "C""_I"[CEG]2 |]
```

```strudel
setcpm(60/4)
// F → Fm: solo baja un dedo (xx3211 → xx3111)
cat(
  note("c3,e3,g3,c4,e4"),   // C   x32010
  note("f3,a3,c4,f4"),      // F   xx3211
  note("f3,ab3,c4,f4"),     // Fm  xx3111
  note("c3,e3,g3,c4,e4"),   // C
).s("gm_acoustic_guitar_steel").room(.4)
```

### 10.7 Modos: mismas notas, otra casa (versión corta)

La relativa menor es solo un caso. Cada una de las siete notas puede ser la casa. Con las
notas de **G mayor** (sin cambiar una sola forma de la guitarra):

| Casa en | Modo | Grado | Color | Para |
|---|---|---|---|---|
| G | jónico (mayor) | I | luminoso, resuelto | folk alegre |
| A | dórico | ii | menor con una sexta clara | melancolía con esperanza |
| B | frigio | iii | oscuro, español | tensión |
| C | **lidio** | IV | flotante, irreal (♯4) | **dream pop** |
| D | **mixolidio** | V | mayor sin urgencia (♭7) | **folk, Dylan, Lumineers** |
| E | eólico (menor natural) | vi | triste | música triste |
| F♯ | locrio | vii | inestable | casi nunca |

Más en [[0. Modos]] y [[5. Crear progresiones modales]].

```strudel
// Las mismas 7 notas de G mayor; cambia solo dónde empieza y acaba
n("0 1 2 3 4 5 6 7")
  .scale("<G:major A:dorian B:phrygian C:lydian D:mixolydian E:minor F#:locrian>")
  .s("gm_acoustic_guitar_nylon")
  .room(.3)
```

El lidio en un acorde: de `Cmaj7` a `Cmaj7#11` solo cambia la 1ª cuerda.

```
    Cmaj7    Cmaj7#11 Fmaj7#11 Am7      Em9      
e |-0--------2--------0--------0--------0--------|
B |-0--------0--------0--------1--------0--------|
G |-0--------0--------2--------0--------0--------|
D |-2--------2--------3--------2--------4--------|
A |-3--------3--------x--------0--------2--------|
E |-x--------x--------x--------x--------0--------|
```

```strudel
setcpm(50/4)
cat(
  note("c3,e3,g3,b3,e4"),    // Cmaj7     x32000
  note("c3,e3,g3,b3,f#4"),   // Cmaj7#11  x32002
).s("gm_acoustic_guitar_steel").room(.6)
```

### 10.8 La geometría de las relaciones en el mástil

Los intervalos en la guitarra **son formas**. Estas son las que hacen que cambiar de
tonalidad sea mover la mano, no recalcular:

| Movimiento | En el mástil | Ejemplo |
|---|---|---|
| **Octava** | 2 cuerdas más agudas, 2 trastes más arriba (desde la 6ª o la 5ª) | G: 6ª/3 → 4ª/5 |
| **Cuarta arriba** (I → IV) | mismo traste, 1 cuerda más aguda | G 6ª/3 → C 5ª/3 |
| **Quinta arriba** (I → V) | 2 trastes arriba, 1 cuerda más aguda · o mismo traste, 1 cuerda más grave | C 5ª/3 → G 4ª/5 · C 5ª/3 → G 6ª/3 |
| **Tono** (C → D) | 2 trastes | todo el bloque +2 |
| **Relativa menor** (I → vi) | 3 trastes abajo, misma cuerda | G 6ª/3 → Em 6ª/0 |
| **Tercera mayor** | 4 trastes, o 1 cuerda más aguda y 1 traste abajo | |

⚠ Excepción: entre la **3ª y la 2ª cuerda** (G → B) hay una tercera mayor, no una cuarta.
Todo lo que cruza esa frontera se corre **un traste hacia arriba**.

Consecuencia: **I–IV–V es un triángulo**. Raíz del I en la 6ª, raíz del IV justo encima
(5ª, mismo traste), raíz del V dos trastes a la derecha. Ese triángulo es idéntico en las
12 tonalidades.

### 10.9 Transportar: piensa en números, no en nombres

Las cuatro progresiones más usadas del pop/folk, en las 12 tonalidades:

| Tonalidad | I–V–vi–IV | I–vi–IV–V | vi–IV–I–V | ii–V–I | Capo amable |
|---|---|---|---|---|---|
| **C** | C G Am F | C Am F G | Am F C G | Dm G C | — |
| **G** | G D Em C | G Em C D | Em C G D | Am D G | — |
| **D** | D A Bm G | D Bm G A | Bm G D A | Em A D | — |
| **A** | A E F♯m D | A F♯m D E | F♯m D A E | Bm E A | capo 2 + formas G |
| **E** | E B C♯m A | E C♯m A B | C♯m A E B | F♯m B E | capo 2 + formas D |
| **B** | B F♯ G♯m E | B G♯m E F♯ | G♯m E B F♯ | C♯m F♯ B | capo 4 + formas G |
| **F♯** | F♯ C♯ D♯m B | F♯ D♯m B C♯ | D♯m B F♯ C♯ | G♯m C♯ F♯ | capo 4 + formas D |
| **D♭** | D♭ A♭ B♭m G♭ | D♭ B♭m G♭ A♭ | B♭m G♭ D♭ A♭ | E♭m A♭ D♭ | capo 1 + formas C |
| **A♭** | A♭ E♭ Fm D♭ | A♭ Fm D♭ E♭ | Fm D♭ A♭ E♭ | B♭m E♭ A♭ | capo 1 + formas G |
| **E♭** | E♭ B♭ Cm A♭ | E♭ Cm A♭ B♭ | Cm A♭ E♭ B♭ | Fm B♭ E♭ | capo 1 + formas D |
| **B♭** | B♭ F Gm E♭ | B♭ Gm E♭ F | Gm E♭ B♭ F | Cm F B♭ | capo 3 + formas G |
| **F** | F C Dm B♭ | F Dm B♭ C | Dm B♭ F C | Gm C F | capo 3 + formas D |

```strudel
setcpm(80/4)
// I–V–vi–IV en C, G, D y A: el mismo patrón de números, cuatro compases por tonalidad
n("<0 4 5 3>".add("[0,2,4]"))
  .scale("<C:major!4 G:major!4 D:major!4 A:major!4>")
  .s("gm_acoustic_guitar_steel")
  .room(.3)
```

### 10.10 Cuerdas al aire por tonalidad: por qué hay "tonalidades de guitarra"

Una cuerda al aire que pertenece a la escala puede sonar libre durante toda la canción
(drone). Cuantas más, más resuena la guitarra.

| Tonalidad | Cuerdas al aire dentro de la escala (E A D G B E) | Cuántas |
|---|---|---|
| **C** | E A D G B E | **6** |
| **G** | E A D G B E | **6** |
| **D** | E A D G B E | **6** |
| **A** | E A D · B E (la G choca) | 5 |
| **F** | E A D G · E (la B choca) | 5 |
| **E** | E A · · B E (D y G chocan) | 4 |
| **B♭** | · A D G · · | 3 |
| **E♭** | · · D G · · | 2 |
| **B** | E · · · B E | 3 |
| **A♭** | · · · G · · | 1 |
| **F♯** | · · · · B · | 1 |
| **D♭** | ninguna | 0 |

Por eso C, G y D son "las tonalidades de la guitarra", y por eso el capo existe: llevar
esas resonancias a cualquier otra tonalidad.

---

## 11. Mano derecha

### 11.1 Rasgueos

```
Tiempo:            1   &   2   &   3   &   4   &
A · folk universal ↓       ↓   ↑       ↑   ↓   ↑
B · balada         ↓       ↓       ↓       ↓
C · vals 3/4       B       ↓   ↑   ↓   ↑            (B = solo el bajo)
D · 6/8 lento      ↓       ↑   ↓       ↑            (en 6 corcheas: 1 · 3 4 · 6)
```

La mano **nunca para**: sube y baja todo el tiempo; los huecos son golpes en el aire.

```strudel
setcpm(80/4)
// Patrón A sobre la familia de G (los dedos 3 y 4 no se mueven, §12)
cat(
  note("g2,b2,d3,g3,d4,g4"),     // G       320033
  note("c3,e3,g3,d4,g4"),        // Cadd9   x32033
  note("e2,b2,e3,g3,d4,g4"),     // Em7     022033
  note("d3,a3,d4,g4"),           // Dsus4   xx0233
)
  .struct("x ~ x x ~ x x x")
  .velocity("1 0 .8 .5 0 .5 .9 .5")
  .s("gm_acoustic_guitar_steel")
  .room(.3)
```

### 11.2 Arpegio p-i-m-a-m-i (6/8, el de la música triste)

```
   G                   C                   Em                  D
e|----------3--------|----------0--------|----------0--------|----------2--------|
B|-------0-----0-----|-------1-----1-----|-------0-----0-----|-------3-----3-----|
G|----0-----------0--|----0-----------0--|----0-----------0--|----2-----------2--|
D|-------------------|-------------------|-------------------|-0-----------------|
A|-------------------|-3-----------------|-------------------|-------------------|
E|-3-----------------|-------------------|-0-----------------|-------------------|
```

```strudel
setcpm(66/2)   // 6/8: dos pulsos de negra con puntillo por compás
cat(
  note("g2 g3 b3 g4 b3 g3"),     // G
  note("c3 g3 c4 e4 c4 g3"),     // C
  note("e2 g3 b3 e4 b3 g3"),     // Em
  note("d3 a3 d4 f#4 d4 a3"),    // D
).s("gm_acoustic_guitar_nylon").room(.4)
```

### 11.3 Travis picking (bajo alterno, el de Dylan y el folk americano)

El pulgar alterna dos bajos en cada negra; los dedos tocan en las corcheas de en medio.

```
   G                         C                         Em                        D
e|-------------------------|-------------------------|-------------------------|-------------------------|
B|----0-----------0--------|----1-----------1--------|----0-----------0--------|----3-----------3--------|
G|----------0-----------0--|----------0-----------0--|----------0-----------0--|----------2-----------2--|
D|-------0-----------0-----|-------2-----------2-----|-------2-----------2-----|-0-----------0-----------|
A|-------------------------|-3-----------3-----------|-------------------------|-------0-----------0-----|
E|-3-----------3-----------|-------------------------|-0-----------0-----------|-------------------------|
```

```strudel
setcpm(80/4)
cat(
  note("g2 b3 d3 g3 g2 b3 d3 g3"),     // G : bajos en 6ª y 4ª
  note("c3 c4 e3 g3 c3 c4 e3 g3"),     // C : bajos en 5ª y 4ª
  note("e2 b3 e3 g3 e2 b3 e3 g3"),     // Em: bajos en 6ª y 4ª
  note("d3 d4 a2 a3 d3 d4 a2 a3"),     // D : bajos en 4ª y 5ª
).s("gm_acoustic_guitar_steel").room(.3)
```

**Qué cuerda hace de bajo** en cada acorde abierto:

| Acorde | Bajo 1 (raíz) | Bajo 2 (alterno) |
|---|---|---|
| G | 6ª traste 3 | 4ª al aire |
| C | 5ª traste 3 | 4ª traste 2 (o 6ª traste 3) |
| D | 4ª al aire | 5ª al aire |
| A | 5ª al aire | 4ª traste 2 |
| E / Em | 6ª al aire | 4ª traste 2 |
| Am | 5ª al aire | 4ª traste 2 |

---

## 12. Familias de cuerdas al aire

Grupos de acordes que **dejan uno o dos dedos fijos** o **cuerdas al aire comunes**. Al
cambiar de acorde, esas notas siguen sonando como un pedal: es la textura de Bon Iver,
Beach House en acústica, Lumineers.

### 12.1 Familia G (dedos 3 y 4 fijos en la 2ª y 1ª cuerda, traste 3)

```
    G      Cadd9  Dsus4  Em7    
e |-3------3------3------3------|
B |-3------3------3------3------|
G |-0------0------2------0------|
D |-0------2------0------2------|
A |-2------3------x------2------|
E |-3------x------x------0------|
```

Las notas D y G suenan **siempre**. Arpegio:

```
   G                         Cadd9                     Em7                       Dsus4
e|----------3-----------3--|----------3-----------3--|----------3-----------3--|----------3-----------3--|
B|-------3-----------3-----|-------3-----------3-----|-------3-----------3-----|-------3-----------3-----|
G|-------------------------|-------------------------|-------------------------|----2-----------2--------|
D|----0-----------0--------|----2-----------2--------|----2-----------2--------|-0-----------0-----------|
A|-------------------------|-3-----------3-----------|-------------------------|-------------------------|
E|-3-----------3-----------|-------------------------|-0-----------0-----------|-------------------------|
```

```strudel
setcpm(70/4)
cat(
  note("g2 d3 d4 g4 g2 d3 d4 g4"),   // G      320033
  note("c3 e3 d4 g4 c3 e3 d4 g4"),   // Cadd9  x32033
  note("e2 e3 d4 g4 e2 e3 d4 g4"),   // Em7    022033
  note("d3 a3 d4 g4 d3 a3 d4 g4"),   // Dsus4  xx0233
).s("gm_acoustic_guitar_steel").room(.5)
```

### 12.2 Familia D (4ª cuerda al aire de pedal, dedos 2-3 en la 3ª y 2ª)

```
    D       Dsus2   Dsus4   Bm7     Gmaj7   A7sus4  
e |-2-------0-------3-------2-------2-------3-------|
B |-3-------3-------3-------3-------3-------3-------|
G |-2-------2-------2-------2-------2-------2-------|
D |-0-------0-------0-------0-------0-------0-------|
A |-x-------x-------x-------2-------x-------0-------|
E |-x-------x-------x-------x-------3-------x-------|
```

### 12.3 Familia E (2ª y 1ª cuerda al aire siempre)

```
    E      Bsus4  C#m7   Asus2  F#m11  
e |-0------0------0------0------0------|
B |-0------0------0------0------0------|
G |-1------4------4------2------2------|
D |-2------4------6------2------4------|
A |-2------2------4------0------4------|
E |-0------x------x------x------2------|
```

```strudel
setcpm(50/4)
cat(
  note("e2,b2,e3,g#3,b3,e4"),   // E      022100
  note("b2,f#3,b3,b3,e4"),      // Bsus4  x24400
  note("c#3,g#3,b3,b3,e4"),     // C#m7   x46400
  note("a2,e3,a3,b3,e4"),       // Asus2  x02200
).s("gm_acoustic_guitar_steel").room(.5)
```

### 12.4 Familia C (color lidio y séptimas)

```
    Cmaj7    Cmaj7#11 Fmaj7#11 Am7      Em9      
e |-0--------2--------0--------0--------0--------|
B |-0--------0--------0--------1--------0--------|
G |-0--------0--------2--------0--------0--------|
D |-2--------2--------3--------2--------4--------|
A |-3--------3--------x--------0--------2--------|
E |-x--------x--------x--------x--------0--------|
```

> [!tip] Cómo encontrar tus propias familias
> 1. Elige la tonalidad (de las que tienen 5–6 cuerdas al aire, §10.10).
> 2. Fija uno o dos dedos en las cuerdas agudas sobre una nota de la escala.
> 3. Mueve solo los bajos por los grados. Ponle nombre a lo que salga después, no antes.

---

## 13. Ruta de estudio

En este orden. No pases al siguiente hasta que el anterior salga **sin mirar**.

- [ ] Los 8 acordes abiertos de base (§2.1), cambiando cada uno en 1 pulso.
- [ ] Los pares de cambio gratis: C↔Am, E↔Am, G↔C, D↔Dsus4.
- [ ] F y Bm en versión de 4 cuerdas.
- [ ] Las cinco tonalidades abiertas (§4): los 6 acordes (sin el vii°) y su V7.
- [ ] El capo: tocar una progresión de G en A, B♭ y C sin cambiar formas.
- [ ] Notas de la 6ª y 5ª cuerda hasta el 12 (§6.2).
- [ ] Cejilla forma E y forma A, mayor y menor.
- [ ] El bloque raíz-en-6ª (§6.4) en 3 tonalidades.
- [ ] El bloque raíz-en-5ª (§6.5) en 3 tonalidades.
- [ ] Escala mayor en posición abierta en G, C y D (§4).
- [ ] Posición 1 de la escala (forma E) en 3 tonalidades.
- [ ] Pentatónica caja 1 y caja 2; tocarla con casa mayor y con casa menor.
- [ ] Tríadas en las 3 cuerdas agudas: las 3 inversiones de un acorde mayor y uno menor.
- [ ] I–IV–V–vi en tríadas sin mover la mano (§8).
- [ ] CAGED: un acorde mayor en las 5 formas.
- [ ] Las 5 posiciones de la escala conectadas.
- [ ] Modulación por pivote entre vecinos del círculo (§10.3).
- [ ] Intercambio modal en A o en E (§10.6).

---

## 14. Retos

> [!question] Reto 1 · El mapa de una tonalidad
> Elige una tonalidad que no sea G. Sin mirar esta hoja, escribe sus 7 acordes, sus formas
> más fáciles y dónde caería el bloque con cejillas. Después compara con §3 y §6.

> [!question] Reto 2 · Transporte con tres herramientas
> Toma una progresión tuya o de una canción que te guste. Tócala en su tonalidad, luego en
> otra **con capo**, y luego en una tercera **con el bloque de cejillas**. Anota qué versión
> resuena más y por qué (pista: cuenta las cuerdas al aire, §10.10).

> [!question] Reto 3 · El pivote
> Encuentra en tu progresión un acorde que pertenezca también a una tonalidad vecina (§10.4).
> Úsalo de puente para modular y confirma la nueva tonalidad con su V. Grábalo.

> [!question] Reto 4 · La misma progresión, dos casas
> Haz que una progresión termine una vez en el I y otra en el vi sin cambiar los acordes
> intermedios. Escucha la diferencia al día siguiente, no el mismo día.

> [!question] Reto 5 · Un préstamo
> Toma una pieza en marcha y cambia **un solo** acorde por uno prestado de la paralela menor
> (§10.6). Decide si se queda.

> [!question] Reto 6 · Tu familia de cuerdas al aire
> Construye una familia propia como las de §12, con al menos un dedo fijo, en la tonalidad
> que elijas.

---

## 15. Errores comunes

| Error | Qué pasa | Arreglo |
|---|---|---|
| Rasguear las 6 cuerdas en D, C o Am | el bajo equivocado: suena a inversión rara | mira la `x` de la forma; el bajo es la raíz |
| Pensar en nombres al transportar | te pierdes en cuanto cambias de tonalidad | piensa en grados (§10.9) |
| Evitar las tonalidades con cejilla | te limitas a 5 tonalidades | capo (§5) o bloques (§6) |
| Tocar el vii° tal cual | suena raro fuera del jazz | usa el V7 |
| Aprender las 5 posiciones de golpe | ninguna se queda | posición 1 y la abierta; las demás de una en una |
| Memorizar escalas como dibujos sin grados | no sabes qué nota es casa | aprende el mapa de grados (§9.3) |
| Confundir relativa y paralela | | **relativa** = mismas notas, otra tónica (G ↔ Em); **paralela** = misma tónica, otras notas (G ↔ Gm) |
| La cejilla zumba | dedo plano en mal sitio | pega el índice al traste y gíralo un poco sobre su borde |

---

## 16. Decisión musical

Antes de escribir una pieza, decide **la tonalidad por la forma, no por el nombre**:

1. ¿Qué **resonancia** quiero? Cuenta las cuerdas al aire que necesitas (§10.10).
2. ¿Qué **familia** de acordes me da ese color? (§12).
3. ¿Va a haber **préstamos**? Si sí, considera A o E (§10.6).
4. ¿Va a **modular**? Mira los vecinos en el círculo (§10.2) y busca el pivote (§10.4).
5. Pon el **capo** para la voz al final, no al principio.

> La pregunta de fondo: **¿qué cuerdas al aire quiero que suenen durante toda la canción?**
