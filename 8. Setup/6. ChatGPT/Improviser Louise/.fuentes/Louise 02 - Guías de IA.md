# Las guías de IA de Louise

> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario (Obsidian + git), el 2026-10-18. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.

Recursos de energía y forma (la curva, el inventario de lo gastado, el catálogo de palancas y qué implica cada decisión) y el feedback del B2 del 2026-10-18.

Contiene:

- `3. Composiciones/6. louise/AI/10. Feedback del B2 - Louise.md`
- `3. Composiciones/6. louise/AI/9. Recursos de energía y forma - Louise.md`

---

## Archivo: `3. Composiciones/6. louise/AI/10. Feedback del B2 - Louise.md`

```yaml
tipo: guia-ai
estado: vigente
area: 5. Forma
concepto: "[[2. Composición binaria — contraste, intro y puente]]"
fecha: 2026-10-18
```

# Feedback del B2 de Louise (c.82–91)

> [!info] Fuente
> **Claude, 2026-10-18.** Partitura leída nota por nota y un render de MuseScore medido compás por
> compás. Versión evaluada: la del disco ese día, con **c.89–106 sin commit** (el C3 recién escrito).
> Las alturas de guitarra son **reales**: suena una octava abajo de lo escrito.

> [!important] Esto no decide nada
> Aquí está qué falla, qué se puede mejorar y qué recursos quedan sin usar. **Qué cambias y con qué
> notas lo decides tú.** Lo que decidas va como una línea a
> [[3. Composiciones/6. louise/0. Intro#Decisiones|Decisiones de Louise]].

Contexto: la curva acordada y el catálogo de recursos están en
[[9. Recursos de energía y forma - Louise]] (§0 la curva, §1 el inventario, §3.3 el B2).

---

## 1. Qué funciona (para no romperlo)

- **A7 → E♭7 (c.81→82).** Sustituto tritonal: el Do♯ del A7 se queda como Re♭ y comparten el tritono
  Sol–Do♯/Re♭; La→Si♭ y Mi→Mi♭ se mueven por semitono en movimiento contrario. Además resuelve el
  pendiente *"que el B2 no arranque como el B1"* → [[9. Dominantes en progresiones]].
- **Novedad armónica real.** Hasta el c.81 todas las notas son de Re mayor, salvo el Sol♯ del c.45. El
  B2 estrena Si♭, Fa♮, Do♮ y Mi♭, y por fin suena tu B♭ → [[3. Intercambios modales]].
- **Registro nuevo.** Piano hasta Fa6 (antes el tope era Sol5, c.14). Guitarra hasta Si♭5 (antes Fa♯5, c.15).
- **La guitarra cambia de rol.** Deja el arpegio y hace línea en corcheas: 2.4 ataques por compás contra
  1.2 en el C2.
- **c.88→89.** Fa3→Mi3 en la mano izquierda (suspensión 4–3), y el Mi3 se queda como séptima del F.

---

## 2. Qué está mal

### 2.1 c.91: el piano sigue en el B2 cuando la guitarra ya está en el C3

- [ ] **Mi2 de guitarra + Fa2 del piano a la vez:** semitono en el bajo, el registro donde más embarra.
- [ ] **Si♭4 contra Em:** tritono con el Mi. Lo que suena en el tiempo 1 es Mi–Fa–Sol–Si♭, no Em.
- [ ] **Falsa relación:** el c.90 (3&) tiene Fa♯3 y Fa♯4, y el c.91 abre con Fa♮2.
- [ ] **Deshace las dos resoluciones del c.90:** Si♭→La vuelve a Si♭ (La4→Si♭4) y Fa→Fa♯ vuelve a Fa.

### 2.2 c.90: el Dm que quieres no llega a sonar

- [ ] Durante 2.5 tiempos suena Re2 La3 Fa4 Re5 Si♭5: **B♭maj7/D** (o Dm con ♭6 arriba), con La3 contra
  Si♭5 a semitono de dos octavas.
- [ ] Un Dm limpio (Re–Fa–La sin Si♭) no suena en ningún momento.
- [ ] El D mayor dura **una corchea** (~0.19 s a ♩=160). Es lo único que suena a "casa" desde el c.81, y
  llega como anticipación.

### 2.3 c.89, tiempo 3&: el cifrado y el bajo no coinciden

- [ ] La mano derecha toca F7 (La–Mi♭–Do), pero la izquierda sigue con Si♭2–Fa3–Si♭3: es lo que había en el
  último commit, cuando ese tiempo era B♭. Suena **F7/B♭**.

### 2.4 c.83: tu acorde favorito llega disfrazado

- [ ] **Cuatro Re contra un Si♭ en el piano** (D2, D3, D4, D6 contra Si♭4): primera inversión con la tercera
  cuadruplicada. Como Re es la tónica de toda la pieza, el oído oye "Re con algo", no "B♭" → [[00. Voicing e inversiones]].
- [ ] **La guitarra toca Mi natural** (con un bemol de armadura no lleva alteración). Queda un tritono
  Mi4–Si♭4 en la base de su acorde, y el Mi4 choca contra el Fa5 del piano a novena menor. Suena **B♭(♯11)/D**.
  - Si querías Mi♭ o Fa, es una nota equivocada.
  - Si es lidio a propósito, es tu tercer color ♯11: ya están el Gmaj7♯11 del c.10 y el F con Si del c.87 → [[8. Tensiones]].
- [ ] La nota más aguda de todo el B2 (Fa6) es una corchea en el 3& de este primer compás.

### 2.5 La batería se apaga justo donde empieza el pico

- [ ] El **c.82 es el compás más denso de toda la pieza**: crash, bombo en 1-2-3, toms, palmas, shaker,
  pandereta, cencerro y hi-hat.
- [ ] **c.83–90: cero.** El B2 tiene la misma batería que el B1: ninguna.
- [ ] El redoble anuncia una llegada y lo que sigue es silencio.

### 2.6 En el render, el B2 suena a valle

| Sección | dB medio |
|---|---|
| Intro (c.1–10) | −17.7 |
| V1 (c.11–26) | −13.2 |
| C1 (c.27–42) | −13.4 |
| B1 (c.43–50) | −19.1 |
| V2 (c.51–66) | −12.8 |
| C2 (c.67–81) | −12.6 |
| **B2 (c.83–90)** | **−16.5** |
| ↳ c.84–86 | ≈ −18 |
| C3 (c.91–106) | −14.3 |

- [ ] El B2 queda **4 dB por debajo del C2**. El tramo c.84–86 está casi al nivel del B1.
- [ ] El **C3**, planeado en energía 2, **suena más fuerte que el B2**: la curva está invertida.
- [ ] Como no hay ninguna marca de dinámica en la pieza, este render es lo único que dice cuánto pesa cada sección.

---

## 3. Qué puede mejorar

### 3.1 El B2 empieza arriba y baja

Nota más aguda de cada compás:

| c. | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
|---|---|---|---|---|---|---|---|---|
| tope | **Fa6** | Re6 | Do6 | Do6 | La5 | Sol5 | Do6 | Si♭5 |

El punto más alto está en el primer compás y después todo desciende. Esa es la forma de una descarga, no
de una subida: dentro del B2 no hay ningún tramo que trepe.

### 3.2 El B2 se cierra solo, dos compases antes de terminar

El c.87 dice G7, pero **el G7 dura un tiempo**: en los tiempos 2 y 3 suenan Do3–Fa3, La4–Do5 y Fa4–Do5 en la
guitarra, o sea **F/C**. Entonces c.87–89 forman:

> **V/V → I⁶₄ → V⁷ → I en Fa** (G7 → F/C → C7 → F)

Es la cadencia perfecta más completa de toda la pieza, y cae en el c.89. La tensión se libera dentro del
pico, y el c.90 tiene que arrancar de cero para llegar al C3 → [[0. Cadencias, progresiones y líneas melódicas]].

### 3.3 "B2 en B♭" no es lo que dice la partitura

- La armadura de un bemol y la cadencia dicen **Fa mayor, empezando en su IV**.
- Visto desde Re: B♭ (♭VI), Gm (iv), Am (v), C (♭VII), F (♭III) y Dm (i) son todos de **Re menor
  natural**. Solo el E♭7 y el G7 quedan fuera.
- El B2 es Louise en su menor paralelo, y por eso **Dm es su destino natural**.
- El problema es que la cadencia en Fa convierte a Fa en el centro, y entonces el Dm del c.90 suena a vi de
  Fa, no a "casa en menor".

### 3.4 El camino B♭ → Dm → Em

| Par | Notas en común |
|---|---|
| B♭ – Dm | Re, Fa |
| Dm – Em | **ninguna** |
| D – Em | **ninguna** |
| B♭ – Em | ninguna (raíces a tritono) |

- El c.83 (B♭/D) y el c.90 (B♭maj7/D) son casi el mismo acorde sobre el mismo bajo. El B2 entra y sale
  por el mismo punto, como un círculo.
- Sin notas comunes entre Dm y Em, todo el peso del enlace cae en la conducción de voces y en el bajo, que
  hoy es el Fa2 de §2.1.
- **Em es el ii, no la tónica.** Su fuerza como llegada depende de que es el arranque conocido del coro y
  de cómo se prepara.
- Los coros anteriores entraban desde F♯m (c.26 y c.66), un grado arriba de Em. El C3 entra desde D, un
  grado abajo.
- La vuelta a casa después de 8 compases fuera cabe en poco más de un compás, con tres armonías:
  F7/B♭ → B♭maj7/D → D.

Lo que suena hoy en c.89–91 (reducción, armadura neutra y alteraciones escritas):

```abc
X:1
T:Louise c.89–91, como suena hoy
M:3/4
L:1/8
Q:1/4=160
K:C
V:1 clef=treble name="Piano MD"
V:2 clef=bass name="Piano MI"
V:3 clef=bass name="Guitarra (real)"
[V:1] "^F"[Afc']2 [Afc']3 "^F7"[A_ec']1 | "^Dm (suena Bbmaj7/D)"[Fd_b]2 [Fd_b]3 "^D"[^FAa]1 | "^Em"[G_Bg]2 E2 E2 |
[V:2] [F,,E,A,]4 z1 "^bajo Sib"[_B,,F,_B,]1 | [D,,A,]4-[D,,A,]1 [D,,^F,]1 | "^Fa2"[F,,E,]2 z4 |
[V:3] [CAca]6 | z6 | "^Mi2"[E,,G,,E,G,]6 |
```

### 3.5 Ritmo

- En los 8 compases, al menos una mano toca el mismo patrón: **1 · 2 con puntillo · 3&**. Viene de los A7
  del coro y de los c.45 y c.49 del B1, y es buena fuente. Pero si todos los compases empujan, ninguno empuja.
- El piano casi nunca toca el tiempo 3 (solo una vez, en el c.87). El vals lo sostiene únicamente la guitarra.

### 3.6 Piano y guitarra hablan a la vez y en la misma octava

- La guitarra se mueve casi siempre entre Si♭4 y Si♭5, que es justo la zona de la mano derecha del piano.
- **Unísonos:**

| c. | Unísono guitarra–piano |
|---|---|
| 83 | Si♭4 |
| 84 | Re5, Sol5 |
| 85 | La4, Mi5, La5 |
| 86 | Fa5 (dos veces) |
| 87 | Si4, Do5 |
| 88 | Si♭4, Mi5 |
| 89 | La4 |

- En el c.84, dos de las cuatro notas de la guitarra caen dentro del acorde que el piano sostiene, y la línea
  desaparece.
- **Roces de semitono en la misma octava:** Fa5 guitarra contra Mi5 piano (c.85, 3&), Mi5 guitarra contra
  Fa5 piano (c.86, tiempo 3) y Si4 contra Do5 (c.87, 2&).
- Esto es justo lo que escribiste en [[7. Second bridge]]: querías que uno armonizara y después cambiaran de
  papel. En el B2 los dos llevan melodía y armonía al mismo tiempo, sin turnos.

### 3.7 El motivo aparece, pero enterrado

En los c.85–86 la guitarra toca **La–Sol–Fa♮ … Re … Fa**: el esqueleto del motivo (La–Sol–Fa♯–Re–Fa♯) en
menor → [[0. Enlaces 2.0 y motivos]].

- Si fue a propósito, es la idea más fuerte del B2.
- Hoy va en la guitarra, en unísono con el piano en La5 y Fa5, sin el ritmo del motivo y en los compases más
  bajos de volumen (−18 dB).

### 3.8 Registro grave

La nota más grave del B2 es Re2, la misma que en el resto de la pieza, y en los c.86 y 88 el bajo sube a Do3.
El B2 solo se abre hacia arriba.

### 3.9 Duración

El B2 tiene 9 compases (c.82–90, unos 10 s), casi lo mismo que el B1 (8 compases, 9 s). **El pico dura lo
que dura el valle.**

### 3.10 Si grabas tú la guitarra

- El c.83 (Mi4–Si♭4–Re5–Si♭5, sostenido) cae en los trastes 14–18 (cuerdas 4 a 1). En nylon es casi intocable.
- El Si♭5 del c.84 está en el traste 18.
- Por encima del traste 12 la nylon pierde proyección y sustain: su registro de pico es su timbre más débil.
  El render no lo muestra.

---

## 4. Qué más puedes agregar (recursos que el B2 no usa)

| Recurso | Cómo está hoy | Catálogo |
|---|---|---|
| Batería | nada en los c.83–90 | §2.5 |
| Dinámica | ninguna marca en toda la pieza | §2.1 |
| Coro (aahs) | pentagrama vacío | §2.8 |
| Voz | vacía, y la decisión sigue pendiente | §3.8 |
| Silencio o corte | ninguno en toda la pieza, ni antes del B2 ni antes del C3 | §2.9 |
| Nota pedal | el bajo cambia en cada compás | §2.6 |
| Guitarra rasgueada | no aparece en toda la pieza | §2.4 |
| Dominantes secundarias | solo el E/A del c.45 y el G7 del c.87 | §2.6 |
| Transformaciones del motivo | solo la de c.85–86, escondida | §2.7 |
| Repetir los últimos 2–4 compases | no se usa | §2.10 |

Los números de la última columna son secciones de [[9. Recursos de energía y forma - Louise]].

---

## 5. Detalles aparte

- [ ] c.67: además de "Coro 2" hay una marca de ensayo vacía.
- [ ] c.89–106 sin commit al momento de esta revisión.

---

## Cómo se midió

- La partitura se exportó a MusicXML con MuseScore y se leyó compás por compás: alturas, duraciones y qué
  suena a la vez en cada corchea.
- El audio es un render de MuseScore por línea de comandos (sin marcas de dinámica, porque la partitura no
  tiene ninguna). El volumen es el RMS de cada compás: a ♩=160 en 3/4, un compás dura 1.125 s.
- Ni la partitura ni el repositorio se modificaron. Todo se hizo sobre copias temporales.

---

## Archivo: `3. Composiciones/6. louise/AI/9. Recursos de energía y forma - Louise.md`

```yaml
tipo: guia-ai
estado: vigente
area: 5. Forma
concepto: "[[2. Composición binaria — contraste, intro y puente]]"
```

# Recursos de energía y forma, aplicados a Louise

Para cada decisión de [[3. Composiciones/6. louise/0. Intro#Decisiones|Louise]]: qué implica y con qué
recursos se puede mover. Primero la idea de fondo (§0), después qué se ha gastado ya (§1), luego el
catálogo de recursos (§2) y al final cada decisión con sus implicaciones (§3).

> [!important] Esto no decide nada
> Aquí están las palancas y sus consecuencias. **Qué palanca usas y con qué notas lo decides tú.**
> Lo que elijas va como una línea a `## Decisiones` de Louise.

---

## 0. La idea: la energía es un presupuesto

Cada recurso funciona como una moneda. Si una sección lo gasta, la siguiente solo puede sonar "más"
de dos maneras: gastando un recurso distinto, o gastando más del mismo. Por eso el C1 tiene que
bajar: hoy gasta toda la batería y ya no queda a dónde subir.

La regla de oro de tu nota de concepto vale aquí sección por sección: **cambia de 1 a 3 parámetros,
no 7** → [[2. Composición binaria — contraste, intro y puente#Qué significa “contraste” en binaria (sin perder unidad)|contraste sin perder unidad]].

### La curva acordada (13 oct)

```
            energía      compases          duración
Intro    ██░░░   2       c.1–10            11 s
V1       ███░░   3       c.11–26           18 s
C1       ███░░   3       c.27–42           18 s   ← más plano
B1       █░░░░   1       c.43–50            9 s   ← valle, piano solo
V2       ███░░   3       c.51–66           18 s
C2       ███▓░   3→4     c.67–82           18 s   ← sube, no cierra
B2       █████   5       c.83–             9–18 s ← pico, estrena lo nuevo
C3       ██░░░   2       —                 9–18 s ← despedida, cierra A7→D
Outro    █░░░░   1–2     —                 6–11 s
```

A ♩=160 en 3/4, cada compás dura 1.125 s. 8 compases son 9 s, 16 son 18 s.

---

## 1. Inventario: qué ya gastó Louise

| Recurso              | Dónde suena hoy                                                                                                           | Margen que queda                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **Capas**            | piano solo (c.1, B1); piano + batería (intro); + guitarra (verso y coro)                                                  | Choir (aahs) y Voz: **pentagramas vacíos**           |
| **Batería**          | verso: bombo en 1, shaker, cencerro, pandereta, fill cada 8. Coro: bombo en 1 y 3, hi-hat abierto, crash, toms **cada 4** | hoy **ninguno por arriba**: el coro lo usa todo      |
| **Dinámica**         | **ninguna marca** en piano ni guitarra; solo la batería tiene velocidades                                                 | **todo**                                             |
| **Registro**         | piano: D2 a **G5** (c.14/22). Guitarra: hasta F♯5 real                                                                    | por encima de G5; octavas; el bajo en D2 se usa poco |
| **Densidad rítmica** | guitarra con un acorde por compás entero casi siempre; piano en negras en el coro; anticipaciones en c.48–50              | **guitarra rasgueada o arpegiada**; corcheas         |
| **Ritmo armónico**   | un acorde por compás en toda la pieza (a veces dos: A→A7, G→G6)                                                           | más rápido, más lento, pedal                         |
| **Cromatismo**       | **solo el G♯ del c.45**                                                                                                   | todo lo demás                                        |
| **Cadencias**        | rota V7→vi (verso), abierta en Bm y cerrada en D (coro), plagal G→D (c.10→11, 50→51)                                      | semicadencia, corte sin resolver                     |
| **Silencio**         | ningún corte en toda la pieza                                                                                             | break, corte                                         |
| **Motivo**           | c.1–2, 6–7 y 46–47: **siempre igual y siempre sobre D**                                                                   | cualquier transformación es nueva para el oído       |
| **Tempo**            | ♩=160 fijo                                                                                                                | rit. final                                           |

---

## 2. Catálogo de recursos

Cada recurso con: cómo **sube**, cómo **baja**, cómo se hace en **MuseScore** y qué **cuidar**.

### 2.1 Dinámica

- **Sube:** *mf* → *f* → *ff*. Un regulador `<` de 4 a 8 compases antes de una llegada. Un acento en el
  primer tiempo de la sección.
- **Baja:** *p*, *pp*. Regulador `>`. *Subito p* (bajar de golpe) funciona como un corte sin silencio.
- **MuseScore:** paleta *Dinámicas*, con la nota o el compás seleccionado. Los reguladores se ponen
  seleccionando el rango y pulsando `<` o `>`. **La marca afecta solo a su pentagrama:** ponla en
  piano y en guitarra por separado.
- **Cuidado:** la batería ya tiene velocidades nota por nota. Escucha cómo se combina con una marca
  antes de ponerla en todas las secciones.

Para traducir la curva a dinámicas: energía 1 = *p* · 2 = *mp* · 3 = *mf* · 4 = *f* · 5 = *ff*.

### 2.2 Capas (densidad de textura)

- **Sube:** entra un instrumento; el mismo instrumento duplica en octavas; los voicings ganan notas.
- **Baja:** sale un instrumento, o toca menos notas (dos en lugar del acorde de seis).
- **El orden importa:** lo decorativo (shaker, cencerro, pandereta) es lo primero en irse y lo último
  en volver. Lo que define la armonía (el bajo y el acorde) es lo último en irse.
- **Louise:** la guitarra con acordes de 6 notas en redonda es una capa muy pesada. Quitarle notas
  baja la energía sin sacar el instrumento.
- **MuseScore:** prueba en el *Mezclador* (silenciar) antes de borrar. Los pentagramas que no uses se
  ocultan en el panel *Instrumentos* (el ojo).

### 2.3 Registro

- **Sube:** la voz superior una octava arriba; voicing más abierto (más distancia entre el bajo y la voz
  de arriba); el bajo más grave.
- **Baja:** el voicing cerrado en el registro medio; quitar los extremos.
- **Louise:** el piano nunca pasa de G5. **Lo que suene por encima se oye como novedad.**
- **Cuidado:** las terceras por debajo de C3 se embarran. Y **el bajo real es la nota más grave de todos
  los instrumentos juntos**, no solo la del piano: eso es lo que pasa en el c.51.

### 2.4 Densidad rítmica

- **Sube:** más ataques por compás (redonda → negras → corcheas); la guitarra rasgueada en el vals;
  anticipaciones, como las de c.49–50.
- **Baja:** notas largas, acordes que se sostienen, solo el tiempo 1.
- **Louise:** la guitarra casi siempre toca un acorde por compás entero. **Rasguearla es la palanca
  más grande que tienes sin usar.**
- **Un punto medio:** el vals repartido (piano en el 1, guitarra en el 2 y el 3), que ya usas en los cierres.

### 2.5 Batería

| Elemento | Qué hace | Más energía | Menos energía |
|---|---|---|---|
| Bombo | peso | en 1 y 3 empuja hacia el compás siguiente (como en el coro) | solo en 1 es vals ligero; uno cada dos compases es *half-time* |
| Hi-hat abierto | brillo, aire | más seguido | cerrado o fuera |
| Crash | marca el **inicio** de una sección | uno por sección; más lo gasta | sin crash, la sección entra "de lado" |
| Toms (fill) | marca el **final** de una frase | fill más largo (de 1 tiempo a 1 compás) | cada 8 compases respira; cada 4 da urgencia |
| Shaker, pandereta, cencerro | movimiento continuo | corcheas | lo primero en salir |
| Toda la batería | — | — | **break**: calla un tiempo o un compás antes de una llegada |

- **Diferenciar cierres:** que el fill de los cierres abiertos (en Bm: c.30, 38, 70, 78) sea más corto,
  o no exista, y el de los cerrados (en D: c.34, 42, 74, 82) sea completo. Así la batería dice lo
  mismo que la armonía.

### 2.6 Armonía

**Ritmo armónico.** Más acordes por compás dan urgencia; un acorde cada dos compases da amplitud y
deja respirar.

**Pedal.** El bajo se queda en una nota mientras los acordes cambian arriba.
- Pedal en el V (A): la máxima expectativa de llegada.
- Pedal en el I (D): reposo. Sirve para outros.

**Cadencias** → [[0. Cadencias, progresiones y líneas melódicas]]

| Tipo                           | Cómo suena                               | En Louise              |
| ------------------------------ | ---------------------------------------- | ---------------------- |
| Perfecta, V–I (A7→D)           | fin, cierre                              | coro, c.33–34 y 41–42  |
| Rota, V–vi (A7→Bm)             | llega y se escapa: **tu firma**          | verso, c.14→15 y 22→23 |
| Semicadencia (termina en el V) | pregunta, deja colgado                   | **sin usar**           |
| Plagal, IV–I (G→D)             | suave                                    | c.10→11, 24→25, 50→51  |
| Corte                          | la frase se interrumpe antes de resolver | **sin usar**           |

**Cromatismo, lo que no has gastado:**
- **Dominantes secundarias** → [[9. Dominantes en progresiones]]. En Re: V/ii = B7 (→Em), V/iii = C♯7
  (→F♯m), V/IV = D7 (→G), V/V = E7 (→A), V/vi = F♯7 (→Bm). El E/A del c.45 ya es un V/V suave.
- **Intercambio modal**, acordes prestados de Re menor → [[3. Intercambios modales]]: Gm (iv),
  B♭ (♭VI), C (♭VII), F (♭III).
  - Un dato: **tu acorde favorito, B♭** (lo cuentas en *Origen*), **es el ♭VI de Re**. En toda Louise
    no suena ni una vez.
- **Tensiones** (maj7, 9, ♯11) → [[8. Tensiones]]. Ya tienes una: el Gmaj7♯11 del c.10.

**Cuidado:** un color nuevo solo pega más que tres juntos. El G♯ del c.45 funciona porque está solo.

### 2.7 Melodía y motivo

→ [[0. Enlaces 2.0 y motivos]]

- **Repetirlo igual** lo convierte en ancla: es lo que hacen la intro y el B1.
- **Transformaciones:**
  - transposición (a otra altura)
  - inversión (los intervalos al revés)
  - aumentación (valores al doble: más lento)
  - disminución (valores a la mitad)
  - fragmentación (solo las primeras notas)
  - **otra armonía debajo:** el mismo motivo sobre otro acorde cambia lo que significa
- **Louise:** el motivo solo suena sobre D. Cualquiera de estas transformaciones es nueva para el oído.

### 2.8 Timbre nuevo

- **Choir (aahs):** el pentagrama está vacío. Es una capa larga y sostenida que no compite en ritmo con
  nadie, así que sirve para estrenarla en un pico.
- **Voz:** si la hay, su registro agudo es la palanca más fuerte para un pico.
- **La guitarra con otro rol:** arpegio, rasgueo, notas agudas sueltas.
- **Cuidado:** en MuseScore los aahs suenan sintéticos. Pruébalos en el render antes de decidir.

### 2.9 Silencio y corte

- Un silencio de un tiempo o un compás antes de una llegada hace que la llegada pese el doble.
- Un corte después del pico es la descarga inmediata.
- La fermata detiene el tiempo. En MuseScore alarga la nota también en la reproducción.

### 2.10 Proporción (longitud)

- **Acortar** una sección da urgencia o despedida (un C3 de 8 compases).
- **Repetir los últimos 2 a 4 compases** (un *tag*) da insistencia. Es típico de picos y finales.
- **Alargar un acorde** (dos compases en lugar de uno) suspende.
- **Louise:** todas las secciones miden 8 o 16 compases, salvo la intro (10). Romper eso una sola vez
  se nota.

### 2.11 Tempo

- **rit. al final:** el cierre clásico de un vals. En MuseScore está en la paleta *Tempo* (línea de
  cambio gradual).
- **Cambiar el tempo a mitad de pieza** sería una dificultad nueva, y la regla es una por proyecto.

---

## 3. Qué implica cada decisión

### 3.1 C1 más plano (c.27–42)

**Implica:**
- Se edita **solo la batería** de c.27–42. Piano y guitarra pueden quedar igual.
- **El C2 deja de ser copia del C1.** A partir de aquí c.67–82 se editan por separado: cuidado al
  copiar y pegar después.
- El C1 tiene que seguir por encima del verso: el cambio de patrón respecto al verso se queda.

**Recursos:** §2.5 (crash del c.27, hi-hat abierto, bombo en el 3, toms de c.30/34/38/42 o solo los de
Bm) · §2.1 (el C1 en *mf*).

**Decides tú:** qué sale.

### 3.2 C2 sube y no cierra (c.67–82)

**Implica:**
- **Recupera lo que perdió el C1.** El oído reconoce el mismo recurso que vuelve como "más".
- Un crescendo, y hay que decidir dónde empieza. La segunda mitad del coro empieza en el c.75.
- **No cerrar en D cambia c.81–82**, que hoy son A7→D más el enlace D–C♯–B.
- **El final del C2 decide cómo arranca el B2:** piénsalos juntos.

**Recursos:** §2.5 · §2.1 · §2.3 (el piano más arriba en la segunda mitad) · §2.4 (guitarra más densa) ·
§2.6 (semicadencia, rota o corte).

**Decides tú:** qué tipo de final abierto.

### 3.3 B2: el pico (desde el c.83)

**Implica:**
- **Es lo único que se compone de cero.**
- Tiene que superar al C2 con al menos un recurso que **nunca sonó** (ver la columna *Margen* del §1).
- **No debería aterrizar en el I:** el reposo le toca al C3.
- **No debe arrancar como el B1** (Bm, piano solo, enlace D–C♯–B), o el oído piensa "otra vez el bridge 1".
- Con 8 compases la pieza crece 9 s; con 16, crece 18 s.

**Recursos:** §2.8 · §2.4 · §2.6 (cromatismo, pedal en el V, ritmo armónico) · §2.7 · §2.3 · §2.1
(*f* o *ff*).

**Recuerda:** de 1 a 3 parámetros, no 7.

### 3.4 La descarga (del B2 al C3)

| Corte | Vaciado |
|---|---|
| silencio, o queda una sola capa | las capas salen una por una |
| *subito p* | diminuendo, quizá rit. |
| el C3 entra de golpe en calma | el C3 llega cuando ya bajó todo |

**Implica:** decide cómo empieza el C3.

**Recursos:** §2.9 · §2.1 · §2.2 · §2.11.

### 3.5 C3 de despedida

**Implica:**
- **Copiar la mitad (8) o el coro entero (16).** Las dos mitades cierran en A7→D, pero solo la segunda
  (c.35–42) tiene el Sol del A7 (c.41), así que su resolución es más fuerte.
- **Quitar capas** hasta lo mínimo que todavía se reconoce como el coro.
- **El último compás no lleva el enlace D4–C♯4**, salvo que lleve hacia el outro.
- La dinámica en *p* o *mp*.

**Recursos:** §2.2 · §2.1 · §2.10 · §2.6 (cadencia perfecta).

### 3.6 Outro

**Implica:**
- **El material:** el motivo (su frase de 5 compases, como en c.1–5) u otra cosa.
- **El último acorde:** D (cerrado) o Gmaj7♯11 (suspendido, como el c.10).
- **La duración:** 5 compases son unos 6 s; 10 compases, unos 11 s, lo mismo que la intro.
- **La batería:** fuera, mínima, o un último golpe.

**Recursos:** §2.7 · §2.6 (pedal en D) · §2.11 (rit.) · §2.9 (fermata).

### 3.7 c.51: ¿el bajo es Mi o Re?

**Implica:** en el c.51 hay D3 en el piano y E2 en la guitarra (la sexta cuerda al aire). Manda la nota
más grave, así que hoy suena a Dmaj9/E y no a D.

**Opciones:**
- D2 en el piano, como en el c.11.
- La guitarra sin el Mi grave en ese compás.
- Dejarlo así, pero escrito como decisión.

**Recursos:** §2.3.

### 3.8 ¿Voz o instrumental?

| Si hay voz | Si es instrumental |
|---|---|
| melodía de verso y coro: 32 compases como mínimo, más la letra | ocultar Voz, y Choir si no se usa |
| abrir espacio en D4–A4, que hoy ocupan la mano derecha y la guitarra | la voz superior del piano es la melodía |
| la voz se vuelve la palanca principal del pico | el motivo es la identidad de la pieza |
| difícil de cerrar el sábado 17 | cabe en la semana |

Hay un punto medio: instrumental ahora, y la voz en una segunda versión.

**Implica:** la respuesta va en `definicion_terminado`.

### 3.9 Mapa de dinámicas

**Implica:**
- Una marca en piano y en guitarra al inicio de cada sección.
- Reguladores en las subidas (C2) y en las bajadas (la descarga).
- Usa la equivalencia del §2.1 (energía 1–5 → *p*…*ff*) sobre la curva del §0.

### 3.10 Guitarra: ¿la grabas tú?

**Si la grabas:** hay que revoicear lo que no se puede tocar:
- c.13/53
- el Em del coro (c.27, 31, 35, 39 y copias)
- las aperturas de c.12, 14, 15, 16 y 18 (y copias)

**El modelo es tu primer voicing,** el del c.11 (0‑0‑0‑2‑2‑2): cuerdas al aire con una forma pequeña.
Además: posiciones abiertas, cejillas, 4 voces en lugar de 6.

**Si no la grabas:** se queda como está. MuseScore la reproduce igual.

---

## 4. Orden de trabajo

0. Commit antes de empezar.
1. C1 (§3.1)
2. C2 (§3.2)
3. **B2 (§3.3)**: lo único que se compone de cero
4. La descarga (§3.4)
5. C3 (§3.5)
6. El outro (§3.6)
7. Dinámicas (§3.9)
8. Exportar el audio y hacer commit.

## 5. Qué podría subir a Teoría

La idea del **presupuesto de energía** (§0 y §1) no tiene nota de concepto en `8. Textura y arreglo/`.
Si después de cerrar Louise la puedes explicar con tus palabras, ahí va. La nota la escribes tú.
