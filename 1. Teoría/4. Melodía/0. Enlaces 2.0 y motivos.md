# The Rhythm–Motif Playbook — **ABC Notation Edition**

_A practical, musician-to-musician guide to building, transforming, and planting rhythmic motifs—with ready‑to‑paste **ABC notation** examples._

> **How to use this:** Every concept below includes a tiny **ABC** snippet. Copy any block into an ABC player (e.g., abcjs in the browser or abcm2ps/abc2midi locally) to **hear** the rhythm. I keep pitches simple (often all “C”) so the **rhythm** is the focus. Swap pitches however you like.

---

## 0) ABC **cheat sheet** for rhythm

- **Headers:**  
    `X:` index · `T:` title · `M:` meter · `L:` default note length · `Q:` tempo · `K:` key
    
- **Notes & rests:** Letters A–G (lowercase = higher octave). `z` = rest. `z2` = a rest twice the **L:** value.
    
- **Durations:** Append numbers (e.g., with `L:1/8`, `C` = 1/8, `C2` = 1/4, `C3` = 3/8, `C/2` = 1/16).
    
- **Bars & ties:** `|` barline. Same‑pitch tie with a hyphen: `C- C`.
    
- **Tuplets:** `(3 CDE` = three notes in the time of two of the next value; `(5 abcde` = five in the time of four.
    
- **Dotted pairs:** `A>B` makes A longer and B shorter (dot‑sixteenth feel with `L:1/8`). `A<B` inverses it.
    
- **Voices (polyphony):**
    
    ```
    V:1 name=Top
    V:2 name=Bottom
    %%score (V1 V2)
    ```
    

> **Tip:** For pure rhythm, set `K:C` and keep a single pitch like `C` for attacks; use `z` for rests.

---

## 1) What is a **rhythmic motif**? (with a first ABC)

A **rhythmic motif** is a short, distinct pattern of **attack times** that you can apply to any notes, chords, or timbral events.

**A 1‑bar 4/4 motif (tresillo 3‑3‑2) as rests+hits, `L:1/8`:**

```abc
X:1
T:Tresillo (3-3-2) as Rhythm
M:4/4
L:1/8
Q:1/4=96
K:C
C z2 C z2 C z |
```

- Reads as: **hit** + two rests, **hit** + two rests, **hit** + rest.
    

---

## 2) Five **seed cells** you can use anywhere

> All examples below use `M:4/4, L:1/8, K:C` unless noted.

### 2.1 Backbeat (snare on 2 & 4)

```abc
X:2
T:Backbeat skeleton
M:4/4   
L:1/8
Q:1/4=100
K:C
z2 C2 z2 C2 |
```

### 2.2 Tresillo (3‑3‑2)

```abc
X:3
T:Tresillo seed
M:4/4
L:1/8
Q:1/4=100
K:C
C z2 C z2 C z |
```

### 2.3 Anticipations (off‑beat 8ths)

```abc
X:4
T:Off-beat 8ths
M:4/4
L:1/8
Q:1/4=108
K:C
z C z C z C z C |
```

### 2.4 Long–Short–Short (q + 2 eighths)

```abc
X:5
T:Long-Short-Short
M:4/4
L:1/8
Q:1/4=88
K:C
C2 C C z2 C2 z |
```

### 2.5 Sync‑pair (two off‑beats grouped)

```abc
X:6
T:Sync-pair
M:4/4
L:1/8
Q:1/4=110
K:C
z C z z z C z z |
```

---

## 3) Core transformations (each with ABC)

### 3.1 **Diminution** / **Augmentation**

- Diminution = faster grid; Augmentation = slower grid.
    

**Base motif (quarters) → diminish to 8ths → augment to half‑notes**

```abc
X:7
T:Diminution & Augmentation
M:4/4
L:1/8
Q:1/4=96
K:C
%%text Base (quarters)
C2 C2 C2 C2 |
%%text Diminution (eighths)
C C C C C C C C |
%%text Augmentation (halves) -- change L to 1/4 for clarity
L:1/4
C2 C2 |
```

### 3.2 **Displacement** (shift start without changing spacing)

```abc
X:8
T:Displacement of Tresillo
M:4/4
L:1/8
Q:1/4=96
K:C
%%text Base
C z2 C z2 C z |
%%text Displaced by one 8th
z C z2 C z2 C |
```

### 3.3 **Rotation** (treat a different hit as “home”)

```abc
X:9
T:Rotation of Tresillo (start on last hit)
M:4/4
L:1/8
Q:1/4=96
K:C
C z C z2 C z2 |
```

### 3.4 **Fragmentation** / **Extension**

```abc
X:10
T:Fragment + Extension
M:4/4
L:1/8
Q:1/4=96
K:C
%%text Full motif
C z2 C z2 C z |
%%text Fragment (first 1/2) as "question"
C z2 C z |
%%text Extension: add a syncopated tail
C z2 C z2 C C |
```

### 3.5 **Retrograde** (reverse the on/off pattern)

```abc
X:11
T:Retrograde (reverse of C z2 C z2 C z)
M:4/4
L:1/8
Q:1/4=96
K:C
z C z2 C z2 C |
```

### 3.6 **Invert accent logic** (strong↔weak)

> In ABC we simulate by **re‑accenting** positions while keeping durations. Use `!accent!` or `!tenuto!` on notes:

```abc
X:12
T:Accent inversion demo
M:4/4
L:1/8
Q:1/4=96
K:C
!accent!C z2 !accent!C z2 !accent!C z |
```

### 3.7 **Additive / Subtractive syncopation**

```abc
X:13
T:Additive pickup (insert 16th before a hit)
M:4/4
L:1/16
Q:1/4=96
K:C
z C C3 z3 C C3 z3 |
```

```abc
X:14
T:Subtractive (remove the downbeat)
M:4/4
L:1/8
Q:1/4=96
K:C
z C z2 C z2 C |
```

### 3.8 **Hemiola / cross‑accents** (3s over 2s)

```abc
X:15
T:Hemiola accents in 4/4 (triplet 8ths)
M:4/4
L:1/8
Q:1/4=90
K:C
(3 CDE (3 CDE (3 CDE (3 CDE |
```

### 3.9 **Phase shifting** (à la Reich)

```abc
X:16
T:Phase (two voices; V2 enters displaced)
M:4/4
L:1/8
Q:1/4=100
K:C
V:1 name=Steady
V:2 name=Shifted
%%score (V1 V2)
V:1 C z2 C z2 C z |
V:2 z2 C z2 C z2 C |
```

### 3.10 **Isorhythm** (talea vs color)

```abc
X:17
T:Isorhythm (talea=5, color=7)
M:4/4
L:1/8
Q:1/4=96
K:C
V:1 name=Talea5
V:2 name=Color7
%%score (V1 V2)
%%text V1 repeats 5-slot rhythm: C z C z z
V:1 C z C z z C z C z z |
%%text V2 loops 7 pitches; rhythm stays plain 8ths
V:2 C D E F G A B C D E F G A B |
```

### 3.11 **Euclidean / maximally even** seeds

- **E(3,8)** = `x..x..x.`
    
- **E(5,8)** = `x.x.x.x x` → positions 1,3,5,7,8
    

```abc
X:18
T:Euclidean E(3,8)
M:4/4
L:1/8
Q:1/4=102
K:C
C z2 C z2 C z |
```

```abc
X:19
T:Euclidean E(5,8)
M:4/4
L:1/8
Q:1/4=102
K:C
C z C z C z C C |
```

### 3.12 **Tihai / Mora** (land the downbeat)

- **Formula (16 sixteenths in 4/4):** choose phrase length **P** in 16ths; compute gap **G** so `3P + 2G = 16`.
    

**Example:** `P=4`, `G=2` ⇒ `4+2+4+2+4=16`.

```abc
X:20
T:Tihai P=4, G=2 (lands on next 1)
M:4/4
L:1/16
Q:1/4=92
K:C
C3 C z2 C3 C z2 C3 C |
```

### 3.13 **Metric modulation** (tempo pivot, rhythm identity preserved)

- Declare a subdivision as the **new beat**. Here, triplet‑eighth (old) = straight 8th (new).
    

```abc
X:21
T:Metric Modulation demo
M:4/4
L:1/8
Q:1/4=100
K:C
%%text Old feel: triplet 8ths implying swing
(3 CDE (3 CDE (3 CDE (3 CDE |
%%text New feel: reinterpret triplet 8th as new straight 8th
Q:1/4=150
C C C C C C C C |
```

---

## 4) **Counting & feel** (how to make it groove)

- **Binary grid:** `1 e & a` → use `L:1/16`.
    
- **Triplet grid:** `(3 ...)`.
    
- **Swing:** not standardized in ABC; emulate with **dotted pairs** `A>B` or **triplet‑feel** `(3 A B z` patterns at medium tempos.
    

**16th grid with a swing‑ish pair (dotted 8th + 16th):**

```abc
X:22
T:Dotted-pair swing emulation
M:4/4
L:1/8
Q:1/4=90
K:C
C>D C>D C>D C>D |
```

---

## 5) Planting a motif across layers (same rhythm, different roles)

**Motivic matrix in two voices:** top plays exact tresillo; bottom plays **augmentation** (quarters).

```abc
X:23
T:Motivic Matrix: Melody vs Bass
M:4/4
L:1/8
Q:1/4=96
K:C
V:1 name=Melody
V:2 name=Bass
%%score (V1 V2)
V:1 C z2 C z2 C z |
V:2 C2 z2 C2 z2 |
```

> Try: put the same tresillo on hats (8ths), map the **first** hit to **kick**, the **second** to **snare**, and leave the **third** for a **bass anticipation**.

---

## 6) **Polyrhythm** & **Polymeter** in ABC

### 6.1 3:2 polyrhythm in one bar of 2/4

- Top: six **triplet 8ths** (3 evenly spaced over 2 beats).
    
- Bottom: four straight 8ths (2 beats).
    

```abc
X:24
T:3 against 2 in 2/4
M:2/4
L:1/8
Q:1/4=92
K:C
V:1 name=3s
V:2 name=2s
%%score (V1 V2)
V:1 (3 CDE (3 CDE |
V:2 C C C C |
```

### 6.2 5:4 over a 1‑bar span (tuplet 5s over 4)

```abc
X:25
T:5:4 polyrhythm
M:4/4
L:1/8
Q:1/4=84
K:C
V:1 name=5s
V:2 name=4s
%%score (V1 V2)
V:1 (5 CDEFG (5 CDEFG |
V:2 C2 C2 C2 C2 |
```

### 6.3 **Polymeter** (3/4 against 4/4; align every 3 bars of 4/4 = 4 bars of 3/4)

> We’ll show just 1 bar of each to illustrate; when you loop, they realign after 12 quarter‑notes.

```abc
X:26
T:Polymeter 3/4 vs 4/4 (loop to feel alignment)
M:4/4
L:1/8
Q:1/4=96
K:C
V:1 name=Part-4-4
V:2 name=Part-3-4
%%score (V1 V2)
V:1 C z2 C z2 C z |
V:2 M:3/4 L:1/8 C z C z C z |
```

---

## 7) **Additive meters** (odd‑time cells you’ll actually use)

### 7.1 7/8 as 3+2+2

```abc
X:27
T:7/8 (3+2+2)
M:7/8
L:1/8
Q:1/8=176
K:C
C C C  C C  C C |
```

### 7.2 7/8 as 2+2+3 (contrast phraseology)

```abc
X:28
T:7/8 (2+2+3)
M:7/8
L:1/8
Q:1/8=176
K:C
C C  C C  C C C |
```

### 7.3 5/4 as 3+2

```abc
X:29
T:5/4 (3+2)
M:5/4
L:1/8
Q:1/4=100
K:C
C C C  C C |
```

---

## 8) **Style frames** (insert motif tastefully)

### 8.1 4/4 pop/rock backbeat + tresillo bass

```abc
X:30
T:Pop: backbeat + tresillo bass
M:4/4
L:1/8
Q:1/4=96
K:C
V:1 name=Snare-ish
V:2 name=Bass-ish
%%score (V1 V2)
V:1 z2 C2 z2 C2 |
V:2 C z2 C z2 C z |
```

### 8.2 12/8 shuffle skeleton

```abc
X:31
T:12/8 shuffle
M:12/8
L:1/8
Q:3/8=50
K:C
C z z  C z  C  z  C  z  C  z  z |
```

### 8.3 Afro‑Cuban **son clave** 3‑2 (two bars)

```abc
X:32
T:Son clave 3-2 (rendered on 8th grid over 2 bars)
M:4/4
L:1/8
Q:1/4=96
K:C
%%text Bar 1: 1, & of 2, 4
C z z C z z C z |
%%text Bar 2: & of 2, 3
z z C z C z z z |
```

> Keep clave **orientation** consistent across the section.

---

## 9) **Worked flows** (paste, then adapt)

### 9.1 _Chorus lift_ from a bland 8th groove

- **Idea:** Use tresillo; displace melody by one 8th; drums keep 2 & 4; bass augments.
    

```abc
X:33
T:Chorus Lift (displaced melody + backbeat + aug bass)
M:4/4
L:1/8
Q:1/4=100
K:C
V:1 name=Melody (displaced)
V:2 name=Snare
V:3 name=Bass (aug)
%%score (V1 V2 V3)
V:1 z C z2 C z2 C z |
V:2 z2 C2 z2 C2 |
V:3 C2 z2 C2 z2 |
```

### 9.2 _7/8 film cue pulse_ with polymeter B‑section

```abc
X:34
T:7/8 Pulse, then polymetric contrast
M:7/8
L:1/8
Q:1/8=168
K:C
%%text A: 3+2+2 ostinato
C C C  C C  C C |
%%text B: overlay 3/4 feel against continued 7/8 (loop the next bar)
V:1 name=Seven
V:2 name=Three
%%score (V1 V2)
V:1 M:7/8 L:1/8 C C C  C C  C C |
V:2 M:3/4 L:1/8 C z C z C z |
```

### 9.3 _12/8 phase shimmer_ (E(7,12) rotated)

```abc
X:35
T:12/8 phase shimmer
M:12/8
L:1/8
Q:3/8=56
K:C
V:1 name=Gtr1
V:2 name=Gtr2 (phases)
%%score (V1 V2)
V:1 C z C z C z z C z C z z |
V:2 z C z C z C z C z C z z |
```

---

## 10) **Harmonizing with rhythm** (land the right notes)

**Align motif hits with harmonic functions** (cadences, V→I, color changes). Example: target the **final hit** on the cadence downbeat.

```abc
X:36
T:Cadential target (motif lands on 1)
M:4/4
L:1/8
Q:1/4=92
K:C
%%text Setup bar (dominant area)
z z z z z z z z |
%%text Landing bar (I) - final hit on beat 1
C z2 C z2 C z |
```

---

## 11) **Production tips** (stamp a feel)

- **Consistent swing ratio** within a section (emulate via `A>B` at slower tempos or triplets).
    
- **Microtiming roles:** bass slightly behind, hats on top—stay **consistent by part**.
    
- **Hocketing:** split a motif across voices; the **composite** is the identity.
    

---

## 12) **Practice plan** (ABC‑ready)

**Day 1:** Extract 3 rhythmic motifs from your piece; transcribe each as an ABC bar (rests+hits).  
**Day 2:** For Motif A, produce **diminution** (set `L:1/16`) and **augmentation** (`L:1/4`).  
**Day 3:** Place the motif in **two voices** (melody exact, bass augmented).  
**Day 4:** Build a **tihai** (Section 3.12) that lands your chorus.  
**Day 5:** Add a **3:2 polyrhythm** (Section 6.1) for 1–2 bars.  
**Day 6:** Try **rotation** and **displacement** to vary phrases.  
**Day 7:** Record a 90‑sec sketch using **one** motif and two transformations.

---

## 13) **Appendix: copy‑paste ABC library**

> Each “tune” is one bar unless noted. Replace pitches as needed.

```abc
X:100
T:Backbeat 2&4
M:4/4
L:1/8
Q:1/4=100
K:C
z2 C2 z2 C2 |
```

```abc
X:101
T:Tresillo (3-3-2)
M:4/4
L:1/8
Q:1/4=100
K:C
C z2 C z2 C z |
```

```abc
X:102
T:Euclidean E(5,8)
M:4/4
L:1/8
Q:1/4=102
K:C
C z C z C z C C |
```

```abc
X:103
T:Displaced Tresillo
M:4/4
L:1/8
Q:1/4=96
K:C
z C z2 C z2 C |
```

```abc
X:104
T:Diminution (set L:1/16)
M:4/4
L:1/16
Q:1/4=96
K:C
C z z C z z C z z C z z C z z C |
```

```abc
X:105
T:Augmentation (set L:1/4)
M:4/4
L:1/4
Q:1/4=96
K:C
C z C z |
```

```abc
X:106
T:3:2 in 2/4
M:2/4
L:1/8
Q:1/4=92
K:C
V:1 name=3s
V:2 name=2s
%%score (V1 V2)
V:1 (3 CDE (3 CDE |
V:2 C C C C |
```

```abc
X:107
T:Tihai P=4, G=2 (L:1/16)
M:4/4
L:1/16
Q:1/4=92
K:C
C3 C z2 C3 C z2 C3 C |
```

```abc
X:108
T:12/8 Bell-ish
M:12/8
L:1/8
Q:3/8=50
K:C
C z z  C z  C  z  C  z  C  z  z |
```

```abc
X:109
T:7/8 (3+2+2)
M:7/8
L:1/8
Q:1/8=176
K:C
C C C  C C  C C |
```

```abc
X:110
T:Phase Pair (two bars)
M:4/4
L:1/8
Q:1/4=100
K:C
V:1 name=Steady
V:2 name=Shift+1
%%score (V1 V2)
V:1 C z2 C z2 C z | C z2 C z2 C z |
V:2 z2 C z2 C z2 C | C z2 C z2 C z |
```

---

## 14) Troubleshooting (quick fixes)

- **Motif drift (too many variants):** Limit to **two** transformations per section.
    
- **Grid‑locked feel:** Use dotted pairs or triplet slur groups to imply groove.
    
- **Everyone plays the motif:** Use **negative space**—let one voice sustain while another carries the pattern.
    
- **Cultural mismatch:** Respect frames like **clave** orientation or swing context; don’t flip them casually.
    

---

## 15) Your next 30 minutes

1. Pick one finished section.
    
2. Extract one **rhythmic motif** (just the hit pattern).
    
3. Paste **X:23** (Motivic Matrix) and replace with your motif in V:1; put **augmentation** in V:2.
    
4. Add a **tihai** (`X:20`) to re‑enter your chorus.
    
5. Try a **phase** bar (`X:16` or `X:110`) once—then return to the main groove.
    

---

### Final thought

Great pieces don’t need many ideas—just **one rhythmic motif** used with intent. The ABC blocks here are meant to be _Lego bricks_: paste, hear, rotate, and plant them across your arrangement.