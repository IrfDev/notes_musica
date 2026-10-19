# La partitura, compás por compás

> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario (Obsidian + git), el 2026-10-18. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.

Reducción de la partitura de MuseScore: cifrado, notas del piano (MD y MI), guitarra en altura real y batería, en cada uno de los compases.

Contiene:

- `7. Partituras/2. Composiciones/Louise.musicxml`

## Cómo leer esto

- Un renglón por compás en el resumen y un bloque por compás en el detalle. Compás de 3/4, ♩ = 160 (un compás dura 1.125 s).
- **Sección** sale de las marcas de ensayo de la partitura. Desde la última marca, las secciones que no tienen marca propia heredan el nombre de la anterior: compruébalo con la guía (00).
- **Grave/Aguda**: la nota más grave y la más aguda del compás entre piano y guitarra, en altura real.
- **Ataques**: cuántos inicios de nota distintos tiene cada instrumento en el compás.
- Notas en cifrado anglosajón con octava científica (C4 = Do central). ♯ y ♭ explícitos.
- La **guitarra** se escribe una octava arriba de como suena; aquí va en **altura real**.
- Posiciones en semicorcheas: `1`, `1e`, `1&`, `1a`, `2`, `2e`… Duraciones: 𝅘𝅥𝅯 semicorchea, ♪ corchea, ♪. corchea con puntillo, ♩ negra, ♩. negra con puntillo, 𝅗𝅥 blanca, 𝅗𝅥. blanca con puntillo (compás entero). `‿` = ligadura. `(arp.)` = acorde arpegiado (el rasgueo).
- **Batería**: en qué posición golpea cada instrumento; entre paréntesis los golpes suaves o ghost; `[x%]` la velocidad de MuseScore cuando no es la normal (100 %).
- La partitura no tiene ninguna marca de dinámica: si aparece alguna, va como *Indicación*.

## Resumen: un renglón por compás

| c. | Sección | Armadura | Cifrado (posición) | Grave | Aguda | Ataques piano | Ataques guitarra | Batería |
|---:|---|---|---|---|---|---:|---:|---|
| 1 | **Intro** | 2♯ (Re mayor) | D (1) | D3 | A4 | 3 | 0 | — |
| 2 | Intro | 2♯ (Re mayor) | D/F♯ (1) | F♯3 | F♯4 | 2 | 0 | sí |
| 3 | Intro | 2♯ (Re mayor) | A (1) | A2 | C♯5 | 3 | 0 | sí |
| 4 | Intro | 2♯ (Re mayor) | Bm (1) | B2 | D5 | 3 | 0 | sí |
| 5 | Intro | 2♯ (Re mayor) | G (1&) | G2 | D5 | 3 | 0 | sí |
| 6 | Intro | 2♯ (Re mayor) | D (1) | D2 | A4 | 3 | 0 | sí |
| 7 | Intro | 2♯ (Re mayor) | D (1) | F♯2 | F♯4 | 2 | 0 | sí |
| 8 | Intro | 2♯ (Re mayor) | A (1) | A2 | C♯5 | 3 | 0 | sí |
| 9 | Intro | 2♯ (Re mayor) | Bm (1) | B2 | D5 | 3 | 0 | sí |
| 10 | Intro | 2♯ (Re mayor) | Gmaj7 (1&) | G2 | E5 | 3 | 0 | sí |
| 11 | **Verso** | 2♯ (Re mayor) | Dmaj7 (1) | D2 | D5 | 1 | 1 | sí |
| 12 | Verso | 2♯ (Re mayor) | F♯m (1) · F♯m (1&) · F♯m (3) · D (3&) | F♯2 | C♯5 | 2 | 1 | sí |
| 13 | Verso | 2♯ (Re mayor) | C♯dim (1) | C♯3 | G4 | 1 | 1 | sí |
| 14 | Verso | 2♯ (Re mayor) | A (1) · A7 (2&) | A2 | G5 | 2 | 1 | sí |
| 15 | Verso | 2♯ (Re mayor) | Bm7 (1) | B2 | F♯5 | 1 | 1 | sí |
| 16 | Verso | 2♯ (Re mayor) | G (1) · G6 (3) | G2 | D5 | 2 | 1 | sí |
| 17 | Verso | 2♯ (Re mayor) | Dmaj7 (1) | D3 | C♯5 | 1 | 1 | sí |
| 18 | Verso | 2♯ (Re mayor) | F♯m (1) · F♯m7 (2&) | F♯2 | E5 | 2 | 1 | sí |
| 19 | Verso | 2♯ (Re mayor) | Dmaj7 (1) | A2 | C♯5 | 1 | 2 | sí |
| 20 | Verso | 2♯ (Re mayor) | F♯m (1&) · F♯m (3) | F♯2 | C♯5 | 2 | 1 | sí |
| 21 | Verso | 2♯ (Re mayor) | C♯dim (1) | C♯3 | G4 | 1 | 2 | sí |
| 22 | Verso | 2♯ (Re mayor) | A (1) · A7 (2&) | A2 | G5 | 2 | 1 | sí |
| 23 | Verso | 2♯ (Re mayor) | Bm7 (1) | B3 | F♯5 | 1 | 2 | sí |
| 24 | Verso | 2♯ (Re mayor) | G (1) · G6 (3) | F♯3 | D5 | 2 | 1 | sí |
| 25 | Verso | 2♯ (Re mayor) | D6 (1) | D3 | A4 | 1 | 2 | sí |
| 26 | Verso | 2♯ (Re mayor) | F♯m (1) · F♯m (2&) | C♯3 | E5 | 2 | 1 | sí |
| 27 | **Coro** | 2♯ (Re mayor) | Em (1) | E2 | E4 | 3 | 1 | sí |
| 28 | Coro | 2♯ (Re mayor) | G (1) | G2 | G4 | 3 | 1 | sí |
| 29 | Coro | 2♯ (Re mayor) | F♯m7 (1) | F♯2 | F♯4 | 3 | 1 | sí |
| 30 | Coro | 2♯ (Re mayor) | Bm (1) | B2 | F♯5 | 1 | 2 | sí |
| 31 | Coro | 2♯ (Re mayor) | Em (1) | E2 | E4 | 3 | 1 | sí |
| 32 | Coro | 2♯ (Re mayor) | G (1) | G2 | G4 | 3 | 1 | sí |
| 33 | Coro | 2♯ (Re mayor) | A7 (1) | A2 | E5 | 3 | 1 | sí |
| 34 | Coro | 2♯ (Re mayor) | D (1) | D2 | A4 | 1 | 2 | sí |
| 35 | Coro | 2♯ (Re mayor) | Em (2) | E2 | E5 | 3 | 1 | sí |
| 36 | Coro | 2♯ (Re mayor) | G (1) | G2 | B4 | 3 | 1 | sí |
| 37 | Coro | 2♯ (Re mayor) | F♯m7 (1) | F♯2 | A4 | 3 | 1 | sí |
| 38 | Coro | 2♯ (Re mayor) | Bm (1) | B2 | F♯5 | 1 | 2 | sí |
| 39 | Coro | 2♯ (Re mayor) | Em (1) | E2 | G4 | 3 | 1 | sí |
| 40 | Coro | 2♯ (Re mayor) | G (1) | G2 | B4 | 3 | 1 | sí |
| 41 | Coro | 2♯ (Re mayor) | A7 (1) | A2 | E5 | 3 | 1 | sí |
| 42 | Coro | 2♯ (Re mayor) | D (1) | D2 | D5 | 3 | 0 | sí |
| 43 | **Bridge** | 2♯ (Re mayor) | Bm (1) | D3 | D5 | 3 | 0 | — |
| 44 | Bridge | 2♯ (Re mayor) | Em (2) | E3 | D5 | 3 | 0 | — |
| 45 | Bridge | 2♯ (Re mayor) | E (1) | A2 | B4 | 4 | 0 | — |
| 46 | Bridge | 2♯ (Re mayor) | D (1) | D2 | A4 | 3 | 0 | — |
| 47 | Bridge | 2♯ (Re mayor) | D (1) | A2 | F♯4 | 2 | 0 | — |
| 48 | Bridge | 2♯ (Re mayor) | A (1) | A2 | C♯5 | 3 | 0 | — |
| 49 | Bridge | 2♯ (Re mayor) | Bm (1) | B2 | D5 | 3 | 0 | — |
| 50 | Bridge | 2♯ (Re mayor) | Gmaj7 (1&) | G2 | D5 | 3 | 0 | — |
| 51 | **Verso** | 2♯ (Re mayor) | Dmaj7 (1) | A2 | F♯4 | 1 | 1 | sí |
| 52 | Verso | 2♯ (Re mayor) | F♯m (1) · F♯m7 (3) | F♯2 | C♯5 | 2 | 1 | sí |
| 53 | Verso | 2♯ (Re mayor) | C♯dim (1) | E2 | G4 | 1 | 1 | sí |
| 54 | Verso | 2♯ (Re mayor) | A (1) · A7 (2&) | A2 | G5 | 2 | 1 | sí |
| 55 | Verso | 2♯ (Re mayor) | Bm7 (1) | B2 | F♯5 | 1 | 1 | sí |
| 56 | Verso | 2♯ (Re mayor) | G (1) · G6 (3) | G2 | D5 | 2 | 1 | sí |
| 57 | Verso | 2♯ (Re mayor) | Dmaj7 (1) | F♯2 | C♯5 | 1 | 1 | sí |
| 58 | Verso | 2♯ (Re mayor) | F♯m (1) · F♯m7 (2&) | F♯2 | E5 | 2 | 1 | sí |
| 59 | Verso | 2♯ (Re mayor) | Dmaj7 (1) | A2 | C♯5 | 1 | 2 | sí |
| 60 | Verso | 2♯ (Re mayor) | F♯m (1&) · F♯m (3) | F♯2 | C♯5 | 2 | 1 | sí |
| 61 | Verso | 2♯ (Re mayor) | C♯dim (1) | C♯3 | G4 | 1 | 2 | sí |
| 62 | Verso | 2♯ (Re mayor) | A (1) · A7 (2&) | A2 | G5 | 2 | 1 | sí |
| 63 | Verso | 2♯ (Re mayor) | Bm7 (1) | B3 | F♯5 | 1 | 2 | sí |
| 64 | Verso | 2♯ (Re mayor) | G (1) · G6 (3) | F♯3 | D5 | 2 | 1 | sí |
| 65 | Verso | 2♯ (Re mayor) | D6 (1) | D3 | A4 | 1 | 2 | sí |
| 66 | Verso | 2♯ (Re mayor) | F♯m (1) · F♯m (2&) | C♯3 | E5 | 2 | 1 | sí |
| 67 | **Coro 2** | 2♯ (Re mayor) | Em (1) | E2 | E4 | 3 | 1 | sí |
| 68 | Coro 2 | 2♯ (Re mayor) | G (1) | G2 | G4 | 3 | 1 | sí |
| 69 | Coro 2 | 2♯ (Re mayor) | F♯m7 (1) | F♯2 | F♯4 | 3 | 1 | sí |
| 70 | Coro 2 | 2♯ (Re mayor) | Bm (1) | B2 | F♯5 | 1 | 2 | sí |
| 71 | Coro 2 | 2♯ (Re mayor) | Em (1) | E2 | E4 | 3 | 1 | sí |
| 72 | Coro 2 | 2♯ (Re mayor) | G (1) | G2 | G4 | 3 | 1 | sí |
| 73 | Coro 2 | 2♯ (Re mayor) | A7 (1) | A2 | E5 | 3 | 1 | sí |
| 74 | Coro 2 | 2♯ (Re mayor) | D (1) | D2 | A4 | 1 | 2 | sí |
| 75 | Coro 2 | 2♯ (Re mayor) | Em (2) | E2 | E5 | 3 | 1 | sí |
| 76 | Coro 2 | 2♯ (Re mayor) | G (1) | G2 | B4 | 3 | 1 | sí |
| 77 | Coro 2 | 2♯ (Re mayor) | F♯m7 (1) | F♯2 | A4 | 3 | 1 | sí |
| 78 | Coro 2 | 2♯ (Re mayor) | Bm (1) | B2 | F♯5 | 1 | 2 | sí |
| 79 | Coro 2 | 2♯ (Re mayor) | Em (1) | E2 | G4 | 3 | 1 | sí |
| 80 | Coro 2 | 2♯ (Re mayor) | Gmaj13 (1) | G2 | D5 | 3 | 1 | sí |
| 81 | Coro 2 | 2♯ (Re mayor) | A7 (1) | A2 | E5 | 3 | 1 | sí |
| 82 | **B2** | 1♭ (Fa mayor / Re menor) | E♭7 (1) | E♭2 | E♭5 | 4 | 0 | sí |
| 83 | B2 | 1♭ (Fa mayor / Re menor) | B♭ (1) | D2 | F6 | 3 | 1 | — |
| 84 | B2 | 1♭ (Fa mayor / Re menor) | Gm (1) | G2 | D6 | 3 | 4 | — |
| 85 | B2 | 1♭ (Fa mayor / Re menor) | Am (1) | A2 | C6 | 5 | 3 | — |
| 86 | B2 | 1♭ (Fa mayor / Re menor) | C4 (1) | C3 | C6 | 3 | 4 | — |
| 87 | B2 | 1♭ (Fa mayor / Re menor) | G7 (1) | G2 | A5 | 4 | 3 | — |
| 88 | B2 | 1♭ (Fa mayor / Re menor) | C7 (1) | C3 | G5 | 3 | 3 | — |
| 89 | B2 | 1♭ (Fa mayor / Re menor) | F (1) · F (2) · F7 (3&) | F2 | C6 | 3 | 1 | — |
| 90 | B2 | 1♭ (Fa mayor / Re menor) | Dm (1) · Dm (2) · D (3&) | D2 | B♭5 | 3 | 0 | — |
| 91 | B2 | 2♯ (Re mayor) | Em (1) | E2 | G5 | 3 | 1 | — |
| 92 | B2 | 2♯ (Re mayor) | G (1) | G2 | G4 | 3 | 1 | — |
| 93 | B2 | 2♯ (Re mayor) | F♯m7 (1) | F♯2 | F♯4 | 3 | 1 | — |
| 94 | B2 | 2♯ (Re mayor) | Bm (1) | B2 | F♯5 | 1 | 2 | — |
| 95 | B2 | 2♯ (Re mayor) | Em (1) | E2 | E4 | 3 | 1 | — |
| 96 | B2 | 2♯ (Re mayor) | G (1) | G2 | G4 | 3 | 1 | — |
| 97 | B2 | 2♯ (Re mayor) | A7 (1) | A2 | E5 | 3 | 1 | — |
| 98 | B2 | 2♯ (Re mayor) | D (1) | D2 | A4 | 1 | 2 | — |
| 99 | B2 | 2♯ (Re mayor) | Em (2) | E2 | E5 | 3 | 1 | — |
| 100 | B2 | 2♯ (Re mayor) | G (1) | G2 | B4 | 3 | 1 | — |
| 101 | B2 | 2♯ (Re mayor) | F♯m7 (1) | F♯2 | A4 | 3 | 1 | — |
| 102 | B2 | 2♯ (Re mayor) | Bm (1) | B2 | F♯5 | 1 | 2 | — |
| 103 | B2 | 2♯ (Re mayor) | Em (1) | E2 | G4 | 3 | 1 | — |
| 104 | B2 | 2♯ (Re mayor) | G (1) | G2 | B4 | 3 | 1 | — |
| 105 | B2 | 2♯ (Re mayor) | A7 (1) | A2 | E5 | 3 | 1 | — |
| 106 | B2 | 2♯ (Re mayor) | D (1) | D2 | D5 | 3 | 0 | — |
| 107 | B2 | 2♯ (Re mayor) | — | — | — | 0 | 0 | — |
| 108 | B2 | 2♯ (Re mayor) | — | — | — | 0 | 0 | — |
| 109 | B2 | 2♯ (Re mayor) | — | — | — | 0 | 0 | — |

## Detalle por compás

### Intro (desde el c.1)

**c.1** — D (1)
- Piano MD: 1: A4 ♪. · 1a: G4 ♩. · 3e: F♯4 ♪.
- Piano MI: 1: D3 𝅗𝅥.
- Guitarra (real): —
- Batería: —

**c.2** — D/F♯ (1)
- Piano MD: 1: D4‿ ♩ · 2: ‿D4 𝅘𝅥𝅯 · 2e: F♯4‿ ♩. · 3a: ‿F♯4 𝅘𝅥𝅯
- Piano MI: 1: F♯3 𝅗𝅥.
- Guitarra (real): —
- Batería: Shaker (1)[38%] (2)[38%] (3)[38%]; Pandereta 1[114%] 2[114%]; Bombo 1[114%]

**c.3** — A (1)
- Piano MD: 1a: C♯5 ♩. · 3e: C♯5 ♪.
- Piano MI: 1: A2 𝅗𝅥. · 1a: A3 ♩. · 3e: A3 ♪.
- Guitarra (real): —
- Batería: Shaker (1)[38%]; Pandereta 2[114%] 3[114%]; Bombo 1[114%]

**c.4** — Bm (1)
- Piano MD: 1a: [F♯4 D5] ♩. · 3e: [F♯4 D5] ♪.
- Piano MI: 1: B2 𝅗𝅥. · 1a: B3 ♩. · 3e: B3 ♪.
- Guitarra (real): —
- Batería: Shaker (2&)[38%]; Pandereta 2[114%] 3[114%]; Bombo 1[114%] 3[114%]

**c.5** — G (1&)
- Piano MD: 1a: [D4 D5] ♩. · 3e: [D4 B4] ♪.
- Piano MI: 1: G2 𝅗𝅥. · 1a: G3 ♩. · 3e: G3 ♪.
- Guitarra (real): —
- Batería: Shaker (2&)[38%]; Pandereta 1[114%]; Tom grave 3[114%]; Tom agudo 3&[114%]

**c.6** — D (1)
- Piano MD: 1: A4 ♪. · 1a: G4 ♩. · 3e: F♯4 ♪.
- Piano MI: 1: [D2 A3] 𝅗𝅥.
- Guitarra (real): —
- Batería: Crash 1[114%]; Bombo 2[114%] 3[114%]

**c.7** — D (1)
- Piano MD: 1: D4‿ ♩ · 2: ‿D4 𝅘𝅥𝅯 · 2e: F♯4‿ ♩. · 3a: ‿F♯4 𝅘𝅥𝅯
- Piano MI: 1: F♯2 𝅗𝅥.
- Guitarra (real): —
- Batería: Shaker (1)[38%] (2)[38%] (3)[38%]; Pandereta 1[114%] 2[114%]; Bombo 1[114%]

**c.8** — A (1)
- Piano MD: 1a: [E4 C♯5] ♩. · 3e: [E4 C♯5] ♪.
- Piano MI: 1: A2 𝅗𝅥. · 1a: A3 ♩. · 3e: A3 ♪.
- Guitarra (real): —
- Batería: Shaker (1)[38%]; Pandereta 2[114%] 3[114%]; Bombo 1[114%]

**c.9** — Bm (1)
- Piano MD: 1a: [D4 D5] ♩. · 3e: [D4 D5] ♪.
- Piano MI: 1: B2 𝅗𝅥. · 1a: [F♯3 B3] ♩. · 3e: [F♯3 B3] ♪.
- Guitarra (real): —
- Batería: Shaker (2&)[38%]; Pandereta 2[114%] 3[114%]; Bombo 1[114%] 3[114%]

**c.10** — Gmaj7 (1&)
- Piano MD: 1a: [F♯4 D5] ♩. · 3e: [E4 E5] ♪.
- Piano MI: 1: G2 𝅗𝅥 · 1a: [G3 C♯4] ♩. · 3e: [G3 C♯4] ♪.
- Guitarra (real): —
- Batería: Shaker (2&)[38%]; Pandereta 1[114%]; Tom grave 3[114%]; Tom agudo 3&[114%]

### Verso (desde el c.11)

**c.11** — Dmaj7 (1)
- Piano MD: 1: [F♯4 D5] 𝅗𝅥.
- Piano MI: 1: [D2 C♯4] 𝅗𝅥.
- Guitarra (real): 1: [E2 A2 D3 A3 C♯4 F♯4] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Hi-hat abierto 1[114%]; Hi-hat cerrado 2[114%]; Bombo 1[114%]

**c.12** — F♯m (1) · F♯m (1&) · F♯m (3) · D (3&)
- Piano MD: 1: [C♯4‿ C♯5‿] 𝅗𝅥 · 3: [‿C♯4 ‿C♯5] 𝅘𝅥𝅯 · 3e: [C♯4 A4] ♪.
- Piano MI: 1: F♯3‿ 𝅗𝅥 · 3: ‿F♯3 𝅘𝅥𝅯 · 3e: G3 ♪.
- Guitarra (real): 1: [F♯2 A2 F♯3 A3 F♯4 C♯5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.13** — C♯dim (1)
- Piano MD: 1: [E4 G4] 𝅗𝅥.
- Piano MI: 1: [C♯3 E3] 𝅗𝅥.
- Guitarra (real): 1: [C♯3 E3 C♯4 G4] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.14** — A (1) · A7 (2&)
- Piano MD: 1: [E4 C♯5] ♩. · 2&: [C♯4 G5] ♩.
- Piano MI: 1: A3 ♩. · 2&: A3 ♩.
- Guitarra (real): 1: [A2 C♯3 A3 C♯4 A4 E5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.15** — Bm7 (1)
- Piano MD: 1: [D4 F♯5] 𝅗𝅥.
- Piano MI: 1: B3 𝅗𝅥.
- Guitarra (real): 1: [B2 D3 F♯4 B4 F♯5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.16** — G (1) · G6 (3)
- Piano MD: 1: [B3‿ D5‿] 𝅗𝅥 · 3: [‿B3 ‿D5] 𝅘𝅥𝅯 · 3e: [E4 B4] ♪.
- Piano MI: 1: G3‿ 𝅗𝅥 · 3: ‿G3 𝅘𝅥𝅯 · 3e: F♯3 ♪.
- Guitarra (real): 1: [G2 B2 D4 G4 D5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.17** — Dmaj7 (1)
- Piano MD: 1: [F♯4 C♯5] 𝅗𝅥.
- Piano MI: 1: A3 𝅗𝅥.
- Guitarra (real): 1: [D3 A3 D4 A4] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.18** — F♯m (1) · F♯m7 (2&)
- Piano MD: 1: [C♯4 A4] ♩. · 2&: [A4 E5] ♩.
- Piano MI: 1: F♯2 ♩. · 2&: F♯2 ♩.
- Guitarra (real): 1: [C♯4 F♯4 A4 C♯5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Tom medio 1[114%]; Tom grave 2[114%]; Tom agudo 3[114%]

**c.19** — Dmaj7 (1)
- Piano MD: 1: [F♯4 C♯5] ♩
- Piano MI: 1: [A2 D3] ♩
- Guitarra (real): 2: [D3 F♯3 D4 A4] ♩ (arp.) · 3: [D3 F♯3 D4 A4] ♩ (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Hi-hat abierto 1[114%]; Hi-hat cerrado 2[114%]; Bombo 1[114%]

**c.20** — F♯m (1&) · F♯m (3)
- Piano MD: 1: [C♯4‿ C♯5‿] 𝅗𝅥 · 3: [‿C♯4 ‿C♯5] 𝅘𝅥𝅯 · 3e: [C♯4 A4] ♪.
- Piano MI: 1: A3‿ 𝅗𝅥 · 3: ‿A3 𝅘𝅥𝅯 · 3e: A3 ♪.
- Guitarra (real): 1: [F♯2 A2 F♯3 A3 F♯4 C♯5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.21** — C♯dim (1)
- Piano MD: 1: [E4 G4] 𝅗𝅥.
- Piano MI: 1: [C♯3 E3] 𝅗𝅥.
- Guitarra (real): 2: [C♯3 E3 C♯4 G4] ♩ (arp.) · 3: [C♯3 E3 C♯4 G4] ♩ (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.22** — A (1) · A7 (2&)
- Piano MD: 1: [E4 C♯5] ♩. · 2&: [C♯4 G5] ♩.
- Piano MI: 1: A3 ♩. · 2&: A3 ♩.
- Guitarra (real): 1: [A2 C♯3 A3 C♯4 A4 E5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.23** — Bm7 (1)
- Piano MD: 1: [D4 F♯5] 𝅗𝅥.
- Piano MI: 1: B3 𝅗𝅥.
- Guitarra (real): 2: [B3 F♯4 B4 F♯5] ♩ (arp.) · 3: [B3 F♯4 B4 F♯5] ♩ (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.24** — G (1) · G6 (3)
- Piano MD: 1: [B3‿ D5‿] 𝅗𝅥 · 3: [‿B3 ‿D5] 𝅘𝅥𝅯 · 3e: [E4 B4] ♪.
- Piano MI: 1: G3‿ 𝅗𝅥 · 3: ‿G3 𝅘𝅥𝅯 · 3e: F♯3 ♪.
- Guitarra (real): 1: [G3 D4 G4 D5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.25** — D6 (1)
- Piano MD: 1: [F♯4 A4] 𝅗𝅥.
- Piano MI: 1: D3 𝅗𝅥.
- Guitarra (real): 2: [F♯3 A3 D4 A4] ♩ (arp.) · 3: [F♯3 A3 D4 A4] ♩ (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.26** — F♯m (1) · F♯m (2&)
- Piano MD: 1: [C♯4 A4] ♩. · 2&: [A4 E5] ♩.
- Piano MI: 1: [F♯3 A3] ♩. · 2&: [F♯3 A3] ♩.
- Guitarra (real): 1: [C♯3 A3 C♯4 F♯4 A4 C♯5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Tom medio 1[114%]; Tom grave 2[114%]; Tom agudo 3[114%]

### Coro (desde el c.27)

**c.27** — Em (1)
- Piano MD: 2: E4 ♩ · 3: E4 ♩
- Piano MI: 1: E3 ♩
- Guitarra (real): 1: [E2 G2 E3 G3] 𝅗𝅥. (arp.)
- Batería: Pandereta 1[114%]; Hi-hat cerrado 1[114%]; Hi-hat abierto 2[114%]; Caja 2[114%] 3[114%]; Bombo 1[114%]

**c.28** — G (1)
- Piano MD: 2: G4 ♩ · 3: G4 ♩
- Piano MI: 1: G3 ♩
- Guitarra (real): 1: [G2 B2 G3 B3] 𝅗𝅥. (arp.)
- Batería: Pandereta 1[114%]; Caja 2[114%] 3[114%]; Bombo 1[114%]

**c.29** — F♯m7 (1)
- Piano MD: 2: F♯4 ♩ · 3: F♯4 ♩
- Piano MI: 1: F♯3 ♩
- Guitarra (real): 1: [F♯2 A2 F♯3 A3] 𝅗𝅥. (arp.)
- Batería: Pandereta 1[114%]; Caja 2[114%] 3[114%]; Bombo 1[114%]

**c.30** — Bm (1)
- Piano MD: —
- Piano MI: 1: [B2 ♩ B3 𝅗𝅥.]
- Guitarra (real): 2: [B3 D4 B4 F♯5] ♩ (arp.) · 3: [B3 D4 B4 F♯5] ♩ (arp.)
- Batería: Pandereta 1[114%]; Palmas 1[114%]; Caja 2[114%] 3[114%]

**c.31** — Em (1)
- Piano MD: 2: E4 ♩ · 3: E4 ♩
- Piano MI: 1: E3 ♩
- Guitarra (real): 1: [E2 G2 E3 G3] 𝅗𝅥. (arp.)
- Batería: Pandereta 1[114%]; Caja 2[114%] 3[114%]; Bombo 1[114%]

**c.32** — G (1)
- Piano MD: 2: G4 ♩ · 3: G4 ♩
- Piano MI: 1: G3 ♩
- Guitarra (real): 1: [G2 B2 G3 B3] 𝅗𝅥. (arp.)
- Batería: Pandereta 1[114%]; Caja 2[114%] 3[114%]; Bombo 1[114%]

**c.33** — A7 (1)
- Piano MD: 2: A4 ♩. · 3&: A4 ♪
- Piano MI: 1: A2 ♩ · 2: E3 ♩. · 3&: E3 ♪
- Guitarra (real): 1: [A2 C♯3 E4 A4 E5] 𝅗𝅥. (arp.)
- Batería: Pandereta 1[114%]; Caja 2[114%] 3[114%]; Bombo 1[114%]

**c.34** — D (1)
- Piano MD: —
- Piano MI: 1: [D2 ♩ D3 𝅗𝅥.]
- Guitarra (real): 2: [A3 D4 F♯4 A4] ♩ (arp.) · 3: [A3 D4 F♯4 A4] ♩ (arp.)
- Batería: Pandereta 1[114%]; Palmas 1[114%]; Caja 2[114%] 3[114%]

**c.35** — Em (2)
- Piano MD: 2: [E4 E5] ♩ · 3: [E4 E5] ♩
- Piano MI: 1: [E2 E3] ♩ · 2: E3 ♩ · 3: E3 ♩
- Guitarra (real): 1: [E2 G2 E3 G3] 𝅗𝅥. (arp.)
- Batería: Pandereta 1[114%]; Caja 2[114%] 3[114%]; Bombo 1[114%]

**c.36** — G (1)
- Piano MD: 2: [D4 B4] ♩ · 3: [D4 B4] ♩
- Piano MI: 1: [G2 G3] ♩ · 2: G3 ♩ · 3: G3 ♩
- Guitarra (real): 1: [G2 B2 G3 B3] 𝅗𝅥. (arp.)
- Batería: Pandereta 1[114%]; Caja 2[114%] 3[114%]; Bombo 1[114%]

**c.37** — F♯m7 (1)
- Piano MD: 2: [E4 A4] ♩ · 3: [E4 A4] ♩
- Piano MI: 1: [F♯2 F♯3] ♩ · 2: F♯3 ♩ · 3: F♯3 ♩
- Guitarra (real): 1: [F♯2 A2 F♯3 A3] 𝅗𝅥. (arp.)
- Batería: Pandereta 1[114%]; Caja 2[114%] 3[114%]; Bombo 1[114%]

**c.38** — Bm (1)
- Piano MD: 1: [D4 F♯4] 𝅗𝅥.
- Piano MI: 1: [B2 ♩ B3 𝅗𝅥. B3 ♩]
- Guitarra (real): 2: [B3 D4 B4 F♯5] ♩ (arp.) · 3: [B3 D4 B4 F♯5] ♩ (arp.)
- Batería: Pandereta 1[114%]; Palmas 1[114%]; Caja 2[114%] 3[114%]

**c.39** — Em (1)
- Piano MD: 2: G4 ♩ · 3: G4 ♩
- Piano MI: 1: [E2 E3] ♩ · 2: [E3 B3] ♩ · 3: [E3 B3] ♩
- Guitarra (real): 1: [E2 G2 E3 G3 E4] 𝅗𝅥. (arp.)
- Batería: Pandereta 1[114%]; Caja 2[114%] 3[114%]; Bombo 1[114%]

**c.40** — G (1)
- Piano MD: 2: [D4 B4] ♩ · 3: [D4 B4] ♩
- Piano MI: 1: [G2 G3] ♩ · 2: G3 ♩ · 3: G3 ♩
- Guitarra (real): 1: [G2 B2 G3 B3] 𝅗𝅥. (arp.)
- Batería: Pandereta 1[114%]; Caja 2[114%] 3[114%]; Bombo 1[114%]

**c.41** — A7 (1)
- Piano MD: 2: [A4 C♯5] ♩. · 3&: [A4 C♯5] ♪
- Piano MI: 1: [A2 G3] ♩ · 2: G3 ♩. · 3&: G3 ♪
- Guitarra (real): 1: [A2 C♯3 E4 A4 E5] 𝅗𝅥. (arp.)
- Batería: Pandereta 1[114%]; Caja 2[114%] 3[114%]; Bombo 1[114%]

**c.42** — D (1)
- Piano MD: 1: [D4 D5] 𝅗𝅥.
- Piano MI: 1: [D2 F♯3] 𝅗𝅥 · 3: D4 ♪ · 3&: C♯4 ♪
- Guitarra (real): —
- Batería: Pandereta 1[114%]; Palmas 1[114%]; Caja 2[114%] 3[114%]

### Bridge (desde el c.43)

**c.43** — Bm (1)
- Piano MD: 1: [F♯4 D5] 𝅗𝅥.
- Piano MI: 1: B3 ♩ · 2: D3 ♩. · 3&: F♯3 ♪
- Guitarra (real): —
- Batería: —

**c.44** — Em (2)
- Piano MD: 2: [G4 D5] ♩ · 3: [G4 D5] ♩
- Piano MI: 1: [E3 B3] ♩ · 2: B3 ♩ · 3: B3 ♩
- Guitarra (real): —
- Batería: —

**c.45** — E (1)
- Piano MD: 2: [E4 B4] ♩. · 3&: G♯4 ♪
- Piano MI: 1: [A2 E3] ♩. · 2&: E3 ♩.
- Guitarra (real): —
- Batería: —

**c.46** — D (1)
- Piano MD: 1: A4 ♪. · 1a: G4 ♩. · 3e: F♯4 ♪.
- Piano MI: 1: [D2 D3] 𝅗𝅥.
- Guitarra (real): —
- Batería: —

**c.47** — D (1)
- Piano MD: 1: D4‿ ♩ · 2: ‿D4 𝅘𝅥𝅯 · 2e: F♯4‿ ♩. · 3a: ‿F♯4 𝅘𝅥𝅯
- Piano MI: 1: A2 𝅗𝅥.
- Guitarra (real): —
- Batería: —

**c.48** — A (1)
- Piano MD: 2: [E4 C♯5] ♩ · 3: [E4 C♯5] ♩
- Piano MI: 1: A2 𝅗𝅥. · 2: A3 ♩ · 3: A3 ♩
- Guitarra (real): —
- Batería: —

**c.49** — Bm (1)
- Piano MD: 2: [F♯4 D5] ♩. · 3&: [F♯4 D5] ♪
- Piano MI: 1: B2 𝅗𝅥. · 2: B3 ♩. · 3&: B3 ♪
- Guitarra (real): —
- Batería: —

**c.50** — Gmaj7 (1&)
- Piano MD: 1: [G4 D5] ♩. · 2&: [G4 D5] ♪ · 3: D4 ♩
- Piano MI: 1: G2 𝅗𝅥 · 3: B3 ♩
- Guitarra (real): —
- Batería: —

### Verso (desde el c.51)

**c.51** — Dmaj7 (1)
- Piano MD: 1: F♯4 𝅗𝅥.
- Piano MI: 1: [D3 C♯4] 𝅗𝅥.
- Guitarra (real): 1: [A2 D3 A3 C♯4 F♯4] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Hi-hat abierto 1[114%]; Hi-hat cerrado 2[114%]; Bombo 1[114%]

**c.52** — F♯m (1) · F♯m7 (3)
- Piano MD: 1: [C♯4‿ C♯5‿] 𝅗𝅥 · 3: [‿C♯4 ‿C♯5] 𝅘𝅥𝅯 · 3e: [C♯4 A4] ♪.
- Piano MI: 1: F♯3‿ 𝅗𝅥 · 3: ‿F♯3 𝅘𝅥𝅯 · 3e: A3 ♪.
- Guitarra (real): 1: [F♯2 A2 F♯3 A3 F♯4 C♯5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.53** — C♯dim (1)
- Piano MD: 1: [E4 G4] 𝅗𝅥.
- Piano MI: 1: [C♯3 E3] 𝅗𝅥.
- Guitarra (real): 1: [E2 G2 C♯3 E3 C♯4 G4] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.54** — A (1) · A7 (2&)
- Piano MD: 1: [E4 C♯5] ♩. · 2&: [C♯4 G5] ♩.
- Piano MI: 1: A3 ♩. · 2&: A3 ♩.
- Guitarra (real): 1: [A2 C♯3 A3 C♯4 A4 E5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.55** — Bm7 (1)
- Piano MD: 1: [D4 F♯5] 𝅗𝅥.
- Piano MI: 1: B3 𝅗𝅥.
- Guitarra (real): 1: [B2 D3 F♯4 B4 F♯5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.56** — G (1) · G6 (3)
- Piano MD: 1: [B3‿ D5‿] 𝅗𝅥 · 3: [‿B3 ‿D5] 𝅘𝅥𝅯 · 3e: [E4 B4] ♪.
- Piano MI: 1: G3‿ 𝅗𝅥 · 3: ‿G3 𝅘𝅥𝅯 · 3e: F♯3 ♪.
- Guitarra (real): 1: [G2 B2 D4 G4 D5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.57** — Dmaj7 (1)
- Piano MD: 1: [F♯4 C♯5] 𝅗𝅥.
- Piano MI: 1: A3 𝅗𝅥.
- Guitarra (real): 1: [F♯2 A2 A3 D4 A4] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.58** — F♯m (1) · F♯m7 (2&)
- Piano MD: 1: [C♯4 A4] ♩. · 2&: [A4 E5] ♩.
- Piano MI: 1: F♯2 ♩. · 2&: F♯2 ♩.
- Guitarra (real): 1: [F♯2 A2 C♯4 F♯4 A4 C♯5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Tom medio 1[114%]; Tom grave 2[114%]; Tom agudo 3[114%]

**c.59** — Dmaj7 (1)
- Piano MD: 1: [F♯4 C♯5] ♩
- Piano MI: 1: [A2 D3] ♩
- Guitarra (real): 2: [D3 F♯3 D4 A4] ♩ (arp.) · 3: [D3 F♯3 D4 A4] ♩ (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Hi-hat abierto 1[114%]; Hi-hat cerrado 2[114%]; Bombo 1[114%]

**c.60** — F♯m (1&) · F♯m (3)
- Piano MD: 1: [C♯4‿ C♯5‿] 𝅗𝅥 · 3: [‿C♯4 ‿C♯5] 𝅘𝅥𝅯 · 3e: [C♯4 A4] ♪.
- Piano MI: 1: A3‿ 𝅗𝅥 · 3: ‿A3 𝅘𝅥𝅯 · 3e: A3 ♪.
- Guitarra (real): 1: [F♯2 A2 F♯3 A3 F♯4 C♯5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.61** — C♯dim (1)
- Piano MD: 1: [E4 G4] 𝅗𝅥.
- Piano MI: 1: [C♯3 E3] 𝅗𝅥.
- Guitarra (real): 2: [C♯3 E3 C♯4 G4] ♩ (arp.) · 3: [C♯3 E3 C♯4 G4] ♩ (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.62** — A (1) · A7 (2&)
- Piano MD: 1: [E4 C♯5] ♩. · 2&: [C♯4 G5] ♩.
- Piano MI: 1: A3 ♩. · 2&: A3 ♩.
- Guitarra (real): 1: [A2 C♯3 A3 C♯4 A4 E5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.63** — Bm7 (1)
- Piano MD: 1: [D4 F♯5] 𝅗𝅥.
- Piano MI: 1: B3 𝅗𝅥.
- Guitarra (real): 2: [B3 F♯4 B4 F♯5] ♩ (arp.) · 3: [B3 F♯4 B4 F♯5] ♩ (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.64** — G (1) · G6 (3)
- Piano MD: 1: [B3‿ D5‿] 𝅗𝅥 · 3: [‿B3 ‿D5] 𝅘𝅥𝅯 · 3e: [E4 B4] ♪.
- Piano MI: 1: G3‿ 𝅗𝅥 · 3: ‿G3 𝅘𝅥𝅯 · 3e: F♯3 ♪.
- Guitarra (real): 1: [G3 D4 G4 D5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.65** — D6 (1)
- Piano MD: 1: [F♯4 A4] 𝅗𝅥.
- Piano MI: 1: D3 𝅗𝅥.
- Guitarra (real): 2: [F♯3 A3 D4 A4] ♩ (arp.) · 3: [F♯3 A3 D4 A4] ♩ (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Bombo 1[114%]

**c.66** — F♯m (1) · F♯m (2&)
- Piano MD: 1: [C♯4 A4] ♩. · 2&: [A4 E5] ♩.
- Piano MI: 1: [F♯3 A3] ♩. · 2&: [F♯3 A3] ♩.
- Guitarra (real): 1: [C♯3 A3 C♯4 F♯4 A4 C♯5] 𝅗𝅥. (arp.)
- Batería: Shaker (2)[38%] (3)[38%]; Pandereta 3; Cencerro (2)[38%]; Tom medio 1[114%]; Tom grave 2[114%]; Tom agudo 3[114%]

### Coro 2 (desde el c.67)

**c.67** — Em (1)
- Piano MD: 2: E4 ♩ · 3: E4 ♩
- Piano MI: 1: E3 ♩
- Guitarra (real): 1: [E2 G2 E3 G3] 𝅗𝅥. (arp.)
- Batería: Cencerro (1)[76%]; Crash 1[114%]; Hi-hat abierto 2[114%]; Hi-hat cerrado 3; Caja 2[114%] 3[114%]; Bombo 1[114%] 3[114%]

**c.68** — G (1)
- Piano MD: 2: G4 ♩ · 3: G4 ♩
- Piano MI: 1: G3 ♩
- Guitarra (real): 1: [G2 B2 G3 B3] 𝅗𝅥. (arp.)
- Batería: Shaker (1)[76%]; Cencerro (1)[76%]; Hi-hat abierto (2)[76%]; Hi-hat cerrado (3)[76%]; Caja 2[114%] 3[114%]; Bombo 1[114%] 3[114%]

**c.69** — F♯m7 (1)
- Piano MD: 2: F♯4 ♩ · 3: F♯4 ♩
- Piano MI: 1: F♯3 ♩
- Guitarra (real): 1: [F♯2 A2 F♯3 A3] 𝅗𝅥. (arp.)
- Batería: Cencerro (1)[76%]; Caja 2[114%] 3[114%]; Bombo 1[114%] 3[114%]

**c.70** — Bm (1)
- Piano MD: —
- Piano MI: 1: [B2 ♩ B3 𝅗𝅥.]
- Guitarra (real): 2: [B3 D4 B4 F♯5] ♩ (arp.) · 3: [B3 D4 B4 F♯5] ♩ (arp.)
- Batería: Shaker (1)[76%]; Cencerro (1)[76%]; Hi-hat abierto (2)[76%]; Hi-hat cerrado (3)[76%]; Caja 2[114%] 3[114%]; Tom grave 1[114%]; Tom medio 2[114%]; Tom agudo 3[114%]

**c.71** — Em (1)
- Piano MD: 2: E4 ♩ · 3: E4 ♩
- Piano MI: 1: E3 ♩
- Guitarra (real): 1: [E2 G2 E3 G3] 𝅗𝅥. (arp.)
- Batería: Cencerro (1)[76%]; Caja 2[114%] 3[114%]; Bombo 1[114%] 3[114%]

**c.72** — G (1)
- Piano MD: 2: G4 ♩ · 3: G4 ♩
- Piano MI: 1: G3 ♩
- Guitarra (real): 1: [G2 B2 G3 B3] 𝅗𝅥. (arp.)
- Batería: Shaker (1)[76%]; Pandereta 1 2; Cencerro (1)[76%]; Hi-hat abierto (2)[76%]; Hi-hat cerrado (3)[76%]; Caja 2[114%] 3[114%]; Bombo 1[114%] 3[114%]

**c.73** — A7 (1)
- Piano MD: 2: A4 ♩. · 3&: A4 ♪
- Piano MI: 1: A2 ♩ · 2: E3 ♩. · 3&: E3 ♪
- Guitarra (real): 1: [A2 C♯3 E4 A4 E5] 𝅗𝅥. (arp.)
- Batería: Pandereta 1 2; Cencerro (1)[76%]; Caja 2[114%] 3[114%]; Tom grave 1[114%]; Tom medio 2[114%]; Tom agudo 3[114%]

**c.74** — D (1)
- Piano MD: —
- Piano MI: 1: [D2 ♩ D3 𝅗𝅥.]
- Guitarra (real): 2: [A3 D4 F♯4 A4] ♩ (arp.) · 3: [A3 D4 F♯4 A4] ♩ (arp.)
- Batería: Shaker (1)[76%]; Pandereta 2 3; Cencerro (1)[76%]; Hi-hat abierto (2)[76%]; Hi-hat cerrado (3)[76%]; Caja 2[114%] 3[114%]; Bombo 1[114%] 3[114%]

**c.75** — Em (2)
- Piano MD: 2: [E4 E5] ♩ · 3: [E4 E5] ♩
- Piano MI: 1: [E2 E3] ♩ · 2: E3 ♩ · 3: E3 ♩
- Guitarra (real): 1: [E2 G2 E3 G3] 𝅗𝅥. (arp.)
- Batería: Pandereta 2 3; Cencerro (1)[76%]; Caja 2[114%] 3[114%]; Bombo 1[114%] 3[114%]

**c.76** — G (1)
- Piano MD: 2: [D4 B4] ♩ · 3: [D4 B4] ♩
- Piano MI: 1: [G2 G3] ♩ · 2: G3 ♩ · 3: G3 ♩
- Guitarra (real): 1: [G2 B2 G3 B3] 𝅗𝅥. (arp.)
- Batería: Shaker (1)[76%]; Pandereta 2 3; Cencerro (1)[76%]; Hi-hat abierto (2)[76%]; Hi-hat cerrado (3)[76%]; Caja 2[114%] 3[114%]; Bombo 1[114%] 2[114%] 3[114%]

**c.77** — F♯m7 (1)
- Piano MD: 2: [E4 A4] ♩ · 3: [E4 A4] ♩
- Piano MI: 1: [F♯2 F♯3] ♩ · 2: F♯3 ♩ · 3: F♯3 ♩
- Guitarra (real): 1: [F♯2 A2 F♯3 A3] 𝅗𝅥. (arp.)
- Batería: Pandereta 2 3; Cencerro (1)[76%]; Caja 2[114%] 3[114%]; Bombo 1[114%] 2[114%] 3[114%]

**c.78** — Bm (1)
- Piano MD: 1: [D4 F♯4] 𝅗𝅥.
- Piano MI: 1: [B2 ♩ B3 𝅗𝅥. B3 ♩]
- Guitarra (real): 2: [B3 D4 B4 F♯5] ♩ (arp.) · 3: [B3 D4 B4 F♯5] ♩ (arp.)
- Batería: Shaker (1)[76%]; Pandereta 2 3; Cencerro (1)[76%]; Hi-hat abierto (2)[76%]; Hi-hat cerrado (3)[76%]; Caja 2[114%] 3[114%]; Bombo 1[114%] 2[114%] 3[114%]

**c.79** — Em (1)
- Piano MD: 2: G4 ♩ · 3: G4 ♩
- Piano MI: 1: [E2 E3] ♩ · 2: [E3 B3] ♩ · 3: [E3 B3] ♩
- Guitarra (real): 1: [E2 G2 E3 G3 E4] 𝅗𝅥. (arp.)
- Batería: Pandereta 2 3; Cencerro (1)[76%]; Hi-hat abierto (2)[76%]; Hi-hat cerrado (3)[76%]; Caja 2[114%] 3[114%]; Bombo 1[114%] 2[114%] 3[114%]

**c.80** — Gmaj13 (1)
- Piano MD: 2: [E4 D5] ♩ · 3: [F♯4 D5] ♩
- Piano MI: 1: [G2 F♯3] ♩ · 2: [E3 G3] ♩ · 3: [F♯3 B3] ♩
- Guitarra (real): 1: [G2 B2 G3 B3] 𝅗𝅥. (arp.)
- Batería: Shaker (1)[76%]; Pandereta 2 3; Cencerro (1)[76%]; Hi-hat abierto (2)[76%]; Hi-hat cerrado (3)[76%]; Caja 2[114%] 3[114%]; Bombo 1[114%] 2[114%] 3[114%]

**c.81** — A7 (1)
- Piano MD: 2: [G4 C♯5] ♩ · 3: [A4 E5] ♩
- Piano MI: 1: [A2 E3] ♩ · 2: [C♯3 E3] ♩ · 3: [C♯3 E3] ♩
- Guitarra (real): 1: [A2 C♯3 E4 A4 E5] 𝅗𝅥. (arp.)
- Batería: Cencerro (1)[76%]; Hi-hat abierto (2)[76%]; Hi-hat cerrado (3)[76%]; Tom grave 1[114%]; Tom medio 2[114%]; Tom agudo 3[114%]

### B2 (desde el c.82)

**c.82** — E♭7 (1)
- Cambio de armadura: 1♭ (Fa mayor / Re menor)
- Piano MD: 1: [B♭4 E♭5] 𝅗𝅥.
- Piano MI: 1: [E♭2 D♭3] ♩. · 2&: E♭3 ♪ · 3: B♭3 ♪ · 3&: G3 ♪
- Guitarra (real): —
- Batería: Shaker (1&)[76%] 2; Pandereta 2 3; Cencerro 2 (3)[76%]; Palmas 2 3 3&; Crash 1[114%]; Hi-hat abierto 2[114%]; Hi-hat cerrado 3; Tom medio 2[114%]; Tom agudo 3[114%]; Bombo 1[114%] 2[114%] 3[114%]

**c.83** — B♭ (1)
- Piano MD: 1: [B♭4 F5 D6] ♩ · 2: [B♭4 F5 D6] ♩. · 3&: [B♭4 F5 F6] ♪
- Piano MI: 1: [D2 D3 D4] 𝅗𝅥.
- Guitarra (real): 1: [E4 B♭4 D5 B♭5] 𝅗𝅥.
- Batería: —

**c.84** — Gm (1)
- Piano MD: 1: [D5 G5 D6] 𝅗𝅥.
- Piano MI: 1: [G2 D3] ♩ · 2: [B♭2 G3] ♩. · 3&: [B♭2 G3] ♪
- Guitarra (real): 1&: D5 ♪ · 2: F5 ♩ · 3: G5 ♪ · 3&: B♭5 ♪
- Batería: —

**c.85** — Am (1)
- Piano MD: 1: A5 ♪ · 1&: C6 ♪ · 2&: [E4 A4 E5] ♩.
- Piano MI: 1: [A2 E3] ♩ · 2: [C3 A3] ♩. · 3&: [C3 A3] ♪
- Guitarra (real): 1: [A4 E5 A5] 𝅗𝅥 · 3: G5 ♪ · 3&: F5‿ ♪
- Batería: —

**c.86** — C4 (1)
- Piano MD: 1: [F5 C6] 𝅗𝅥.
- Piano MI: 1: [C3 F3] ♩ · 2: [C3 G3] ♩. · 3&: [C3 G3] ♪
- Guitarra (real): 1: ‿F5 ♪ · 2: B♭4 ♪ · 2&: D5 ♪ · 3: E5 ♪ · 3&: F5‿ ♪
- Batería: —

**c.87** — G7 (1)
- Piano MD: 1: [B4 A5] 𝅗𝅥 · 3: A4 ♪ · 3&: C5 ♪
- Piano MI: 1: [G2 G3] ♩ · 2: [C3 F3] ♩. · 3&: [C3 F3] ♪
- Guitarra (real): 1: [D4 B4 ‿F5] ♩ · 2: A4 ♪ · 2&: [F4 C5] ♩.
- Batería: —

**c.88** — C7 (1)
- Piano MD: 1: B♭4 ♩ · 2: G5 ♩. · 3&: E5 ♪
- Piano MI: 1: [C3 G3] ♩ · 2: [C3 F3] ♩. · 3&: [C3 E3] ♪
- Guitarra (real): 1: B♭4 ♩ · 2: [E4 C5] ♩ · 3: [G4 E5] ♩
- Batería: —

**c.89** — F (1) · F (2) · F7 (3&)
- Piano MD: 1: [A4 F5 C6] ♩ · 2: [A4 F5 C6] ♩. · 3&: [A4 E♭5 C6] ♪
- Piano MI: 1: [F2 E3 A3] 𝅗𝅥 · 3&: [B♭2 F3 B♭3] ♪
- Guitarra (real): 1: [C4 A4 C5 A5] 𝅗𝅥.
- Batería: —

**c.90** — Dm (1) · Dm (2) · D (3&)
- Piano MD: 1: [F4 D5 B♭5] ♩ · 2: [F4 D5 B♭5] ♩. · 3&: [F♯4 A4 A5] ♪
- Piano MI: 1: [D2‿ A3‿] 𝅗𝅥 · 3: [‿D2 ‿A3] ♪ · 3&: [D2 F♯3] ♪
- Guitarra (real): —
- Batería: —

**c.91** — Em (1)
- Cambio de armadura: 2♯ (Re mayor)
- Piano MD: 1: [G4 B♭4 G5] ♩ · 2: E4 ♩ · 3: E4 ♩
- Piano MI: 1: [F2 E3] ♩
- Guitarra (real): 1: [E2 G2 E3 G3] 𝅗𝅥. (arp.)
- Batería: —

**c.92** — G (1)
- Piano MD: 2: G4 ♩ · 3: G4 ♩
- Piano MI: 1: G3 ♩
- Guitarra (real): 1: [G2 B2 G3 B3] 𝅗𝅥. (arp.)
- Batería: —

**c.93** — F♯m7 (1)
- Piano MD: 2: F♯4 ♩ · 3: F♯4 ♩
- Piano MI: 1: F♯3 ♩
- Guitarra (real): 1: [F♯2 A2 F♯3 A3] 𝅗𝅥. (arp.)
- Batería: —

**c.94** — Bm (1)
- Piano MD: —
- Piano MI: 1: [B2 ♩ B3 𝅗𝅥.]
- Guitarra (real): 2: [B3 D4 B4 F♯5] ♩ (arp.) · 3: [B3 D4 B4 F♯5] ♩ (arp.)
- Batería: —

**c.95** — Em (1)
- Piano MD: 2: E4 ♩ · 3: E4 ♩
- Piano MI: 1: E3 ♩
- Guitarra (real): 1: [E2 G2 E3 G3] 𝅗𝅥. (arp.)
- Batería: —

**c.96** — G (1)
- Piano MD: 2: G4 ♩ · 3: G4 ♩
- Piano MI: 1: G3 ♩
- Guitarra (real): 1: [G2 B2 G3 B3] 𝅗𝅥. (arp.)
- Batería: —

**c.97** — A7 (1)
- Piano MD: 2: A4 ♩. · 3&: A4 ♪
- Piano MI: 1: A2 ♩ · 2: E3 ♩. · 3&: E3 ♪
- Guitarra (real): 1: [A2 C♯3 E4 A4 E5] 𝅗𝅥. (arp.)
- Batería: —

**c.98** — D (1)
- Piano MD: —
- Piano MI: 1: [D2 ♩ D3 𝅗𝅥.]
- Guitarra (real): 2: [A3 D4 F♯4 A4] ♩ (arp.) · 3: [A3 D4 F♯4 A4] ♩ (arp.)
- Batería: —

**c.99** — Em (2)
- Piano MD: 2: [E4 E5] ♩ · 3: [E4 E5] ♩
- Piano MI: 1: [E2 E3] ♩ · 2: E3 ♩ · 3: E3 ♩
- Guitarra (real): 1: [E2 G2 E3 G3] 𝅗𝅥. (arp.)
- Batería: —

**c.100** — G (1)
- Piano MD: 2: [D4 B4] ♩ · 3: [D4 B4] ♩
- Piano MI: 1: [G2 G3] ♩ · 2: G3 ♩ · 3: G3 ♩
- Guitarra (real): 1: [G2 B2 G3 B3] 𝅗𝅥. (arp.)
- Batería: —

**c.101** — F♯m7 (1)
- Piano MD: 2: [E4 A4] ♩ · 3: [E4 A4] ♩
- Piano MI: 1: [F♯2 F♯3] ♩ · 2: F♯3 ♩ · 3: F♯3 ♩
- Guitarra (real): 1: [F♯2 A2 F♯3 A3] 𝅗𝅥. (arp.)
- Batería: —

**c.102** — Bm (1)
- Piano MD: 1: [D4 F♯4] 𝅗𝅥.
- Piano MI: 1: [B2 ♩ B3 𝅗𝅥. B3 ♩]
- Guitarra (real): 2: [B3 D4 B4 F♯5] ♩ (arp.) · 3: [B3 D4 B4 F♯5] ♩ (arp.)
- Batería: —

**c.103** — Em (1)
- Piano MD: 2: G4 ♩ · 3: G4 ♩
- Piano MI: 1: [E2 E3] ♩ · 2: [E3 B3] ♩ · 3: [E3 B3] ♩
- Guitarra (real): 1: [E2 G2 E3 G3 E4] 𝅗𝅥. (arp.)
- Batería: —

**c.104** — G (1)
- Piano MD: 2: [D4 B4] ♩ · 3: [D4 B4] ♩
- Piano MI: 1: [G2 G3] ♩ · 2: G3 ♩ · 3: G3 ♩
- Guitarra (real): 1: [G2 B2 G3 B3] 𝅗𝅥. (arp.)
- Batería: —

**c.105** — A7 (1)
- Piano MD: 2: [A4 C♯5] ♩. · 3&: [A4 C♯5] ♪
- Piano MI: 1: [A2 G3] ♩ · 2: G3 ♩. · 3&: G3 ♪
- Guitarra (real): 1: [A2 C♯3 E4 A4 E5] 𝅗𝅥. (arp.)
- Batería: —

**c.106** — D (1)
- Piano MD: 1: [D4 D5] 𝅗𝅥.
- Piano MI: 1: [D2 F♯3] 𝅗𝅥 · 3: D4 ♪ · 3&: C♯4 ♪
- Guitarra (real): —
- Batería: —

**c.107** — —
- Piano MD: —
- Piano MI: —
- Guitarra (real): —
- Batería: —

**c.108** — —
- Piano MD: —
- Piano MI: —
- Guitarra (real): —
- Batería: —

**c.109** — —
- Piano MD: —
- Piano MI: —
- Guitarra (real): —
- Batería: —

