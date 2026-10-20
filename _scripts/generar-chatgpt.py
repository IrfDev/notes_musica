#!/usr/bin/env python3
"""
Genera las fuentes de los proyectos de ChatGPT a partir de la bóveda.

    8. Setup/6. ChatGPT/<proyecto>/00. *.md        <- escrito a mano: el mapa o la guía del proyecto
    8. Setup/6. ChatGPT/<proyecto>/Instrucciones.md <- se pega en Project settings → Instructions
    8. Setup/6. ChatGPT/<proyecto>/.fuentes/        <- esto lo genera el script: lo que se sube

Cada archivo de .fuentes/ junta varias notas de la bóveda, tal cual, con su ruta delante. La
bóveda es la única fuente de verdad: para cambiar lo que sabe ChatGPT se cambia la nota y se
regenera. La carpeta lleva punto para que Obsidian no la indexe (las notas ya están en su sitio).

Además de juntar notas, el script genera dos fuentes de Louise:
    - la partitura compás por compás, leída del .musicxml (el sync tiene que estar al día);
    - el historial: los commits que tocan Louise y los cambios musicales de la partitura.

Uso:
    ./_scripts/generar-chatgpt.py                 # los dos proyectos
    ./_scripts/generar-chatgpt.py Louise          # solo los proyectos cuyo nombre contiene «Louise»
    ./_scripts/generar-chatgpt.py --comprobar     # dice qué cambiaría, sin escribir nada

Subirlas: Proyecto → Sources → Add sources, con todo lo de .fuentes/. Si un archivo con el mismo
nombre ya estaba, se quita el viejo primero. Ver «8. Setup/6. ChatGPT/README.md».
"""

import datetime
import shutil
import subprocess
import sys
import unicodedata
import xml.etree.ElementTree as ET
from collections import defaultdict
from pathlib import Path

BOVEDA = Path(__file__).resolve().parent.parent
RAIZ = BOVEDA / "8. Setup" / "6. ChatGPT"
COMPROBAR = "--comprobar" in sys.argv
FILTRO = [a for a in sys.argv[1:] if not a.startswith("--")]
HOY = datetime.date.today().isoformat()
informe = []

PIANO_30 = "4. Instrumento/1. Piano/1. Programa de 30 sesiones"
STRUDEL = "4. Instrumento/2. Strudel"
LOUISE = "3. Composiciones/6. louise"
LOUISE_XML = "7. Partituras/2. Composiciones/Louise.musicxml"

# ================================================================ catálogo
#
# Cada fuente: (nombre del archivo que se sube, título, para qué sirve, lista de rutas o patrones).
# Un patrón es relativo a la bóveda; «**» baja por subcarpetas. «!» delante excluye.
# Las entradas especiales empiezan con «@»: @copiar:<ruta>, @reduccion:<musicxml>, @historial-louise.

PROYECTOS = {
    "Improviser": [
        ("Improviser 00 - Mapa.md", None, None, ["@copiar:8. Setup/6. ChatGPT/Improviser/00. Mapa.md"]),
        ("Improviser 01 - Bóveda, flujos y reglas.md", "La bóveda: estructura, flujos y reglas",
         "Cómo está organizada la bóveda, los seis flujos, las reglas duras, las plantillas y lo que una IA "
         "no escribe.",
         ["Inicio.md", "CLAUDE.md", "6. Práctica/0. Flujos.md", "6. Práctica/1. Estructura.md",
          "6. Práctica/3. Diagnóstico.md", "7. Partituras/Sistema de partituras.md",
          "7. Partituras/Cómo usar las partituras.md", "10. System/2. Plantillas/0. Notas/*.md",
          "10. System/2. Plantillas/1. Bloques/*.md", "10. System/2. Plantillas/2. Notación/*.md"]),
        ("Improviser 02 - Equipo, hardware.md", "Equipo: hardware",
         "Inventario, mapa de conexiones y una nota por aparato: M-VAVE SMC-PAD, Arturia KeyStep mk2, "
         "Casio CTK-551.",
         ["8. Setup/0. Índice.md", "8. Setup/2. Hardware/*.md"]),
        ("Improviser 03 - Equipo, software.md", "Equipo: software",
         "Cakewalk Sonar (pistas, arpegiador, Analog Lab en cada pista), Cakewalk Next y Analog Lab V.",
         ["8. Setup/1. Software/*.md"]),
        ("Improviser 04 - Presets y áreas.md", "Presets y áreas de trabajo",
         "Las áreas (qué se junta para Beats, Canción, Atmósferas y Jam con Strudel) y una nota por preset: "
         "los 8 del SMC-PAD y los 9 bancos de Analog Lab.",
         ["8. Setup/5. Áreas/*.md", "8. Setup/4. Presets/M-VAVE SMC-PAD/*.md",
          "8. Setup/4. Presets/Analog Lab V/*.md"]),
        ("Improviser 05 - Strudel, motor y uso.md", "Strudel: el motor local y cómo se usa",
         "Strudel en la máquina (VS Code → Chrome → MIDI → Sonar), qué es y cuándo usarlo frente a "
         "MuseScore, la guía para componer y los arpegiadores que se convierten en presets de Sonar.",
         [f"{STRUDEL}/README.md", f"{STRUDEL}/0. Qué es y cómo se usa.md", f"{STRUDEL}/1. Componiendo.md",
          f"{STRUDEL}/6. Arpegiadores/README.md", f"{STRUDEL}/.motor/puertos.js"]),
        ("Improviser 06 - Strudel, guías de estilo.md", "Strudel: guías de estilo",
         "Beats, folk, house y dream pop desde cero, capa por capa y con bloques para tocar.",
         [f"{STRUDEL}/3. Beats/1. Beats desde cero.md", f"{STRUDEL}/3. Folk.md",
          f"{STRUDEL}/4. Folk desde cero.md", f"{STRUDEL}/2. House y todo.md",
          f"{STRUDEL}/7. House/0. House desde cero.md", f"{STRUDEL}/8. Dream pop/0. Dream pop desde cero.md"]),
        ("Improviser 07 - Strudel, patrones.md", "Strudel: todos los patrones (código)",
         "Cada .strudel.js de la bóveda salvo los de Louise (esos están en su propio proyecto): beats, "
         "lecciones, experimentos y arpegios.",
         [f"{STRUDEL}/**/*.strudel.js", f"!{STRUDEL}/10. Folk/**", f"!{STRUDEL}/**/node_modules/**"]),
        ("Improviser 08 - Piano, programa de 30 sesiones.md", "Piano: el programa de 30 sesiones",
         "El plan (seis semanas, tres carriles: teclado, Hanon y Sleep on the Floor), el progreso y las 30 "
         "sesiones completas. El frontmatter de cada día dice si está hecho y a qué BPM.",
         [f"{PIANO_30}/*.md", "4. Instrumento/1. Piano/1 y2.md"]),
        ("Improviser 09 - Piano, cheat sheet de acordes.md", "Piano: cheat sheet de acordes",
         "La teoría y los ejercicios del programa de piano: tríadas, inversiones, escalas, arpegios, "
         "cadencias, patrones de mano izquierda y la regla del metrónomo.",
         ["4. Instrumento/1. Piano/Cheat sheet - acordes mayores.md"]),
        ("Improviser 10 - Guitarra.md", "Guitarra",
         "El diagnóstico inicial, el plan de dos meses, los calentamientos y el cheat sheet de acordes por "
         "tonalidad.",
         ["4. Instrumento/0. Guitarra/**/*.md"]),
        ("Improviser 11 - Teoría, notas de concepto.md", "Teoría: las notas de concepto",
         "Lo que el usuario sabe, escrito por él, en las nueve áreas. Sirve para enlazar cada decisión a "
         "su `[[concepto]]` con el nombre exacto. Las guías de IA (carpetas AI/) no están.",
         ["1. Teoría/**/*.md", "!1. Teoría/**/AI/**"]),
        ("Improviser 12 - Obras.md", "Obras: todas las composiciones",
         "Una carpeta por obra, de Cyclone a Louise, con sus decisiones y su estado.",
         ["3. Composiciones/**/*.md"]),
        ("Improviser 13 - Cursos y bitácora.md", "Cursos y bitácora",
         "Las tres fuentes de cursos (índices) y el registro fechado de las semanas.",
         ["2. Cursos/*/00. Curso.md", "2. Cursos/0. Profesor/Sesiones con Fabs.md",
          "6. Práctica/4. Bitácora/*.md"]),
    ],
    "Improviser Louise": [
        ("Louise 00 - Guía.md", None, None, ["@copiar:8. Setup/6. ChatGPT/Improviser Louise/00. Guía.md"]),
        ("Louise 01 - Nota de obra y sesiones.md", "La nota de obra y las notas de cada sesión",
         "La nota principal (origen, material, decisiones, por decidir, problemas abiertos) y las notas "
         "1–7 que escribió el usuario al terminar cada sesión.",
         [f"{LOUISE}/*.md"]),
        ("Louise 02 - Guías de IA.md", "Las guías de IA de Louise",
         "Recursos de energía y forma (la curva, el inventario de lo gastado, el catálogo de palancas y qué "
         "implica cada decisión) y el feedback del B2 del 2026-10-18.",
         [f"{LOUISE}/AI/*.md"]),
        ("Louise 03 - Partitura compás por compás.md", "La partitura, compás por compás",
         "Reducción de la partitura de MuseScore: cifrado, notas del piano (MD y MI), guitarra en altura "
         "real y batería, en cada uno de los compases.",
         [f"@reduccion:{LOUISE_XML}"]),
        ("Louise 04 - Código Strudel.md", "El código de Strudel",
         "Del esqueleto del vals al B2: el origen (happy_beats, wddl), el archivo con el que nació la forma "
         "(0.first), el puente, las transcripciones de la partitura y las propuestas de Claude para el B2 (AI/: 4.ai_* y 5.ai_*).",
         [f"{STRUDEL}/5. Experiments/2. House/0.happy_beats.strudel.js",
          f"{STRUDEL}/5. Experiments/1. Happy/3. wddl.strudel.js", f"{STRUDEL}/10. Folk/4. Louise.strudel.js",
          f"{STRUDEL}/10. Folk/Louise/*.strudel.js", f"{STRUDEL}/10. Folk/Louise/AI/*.strudel.js"]),
        ("Louise 05 - Bitácora y piano.md", "La bitácora de Louise y Louise en el piano",
         "Las semanas 02 y 03 (sesión por sesión, con su definición de hecho) y los días del programa de "
         "piano donde se toca Louise.",
         ["6. Práctica/4. Bitácora/2026-10-05 - Semana 02 - Louise, del loop a la forma.md",
          "6. Práctica/4. Bitácora/2026-10-12 - Semana 03 - Louise, forma y cierre.md",
          f"{PIANO_30}/24. Día 24 - Louise en el piano.md",
          f"{PIANO_30}/25. Día 25 - Louise, qué nota va arriba.md",
          f"{PIANO_30}/29. Día 29 - Ensayo general.md", f"{PIANO_30}/30. Día 30 - La toma final.md"]),
        ("Louise 06 - Conceptos enlazados.md", "Los conceptos que usa Louise",
         "Las notas de concepto (escritas por el usuario) a las que enlazan las decisiones de Louise, la "
         "rúbrica de composición, el bloque de decisión y la plantilla de secciones de Strudel.",
         ["1. Teoría/5. Forma/2. Composición binaria — contraste, intro y puente.md",
          "1. Teoría/5. Forma/0. Cadencias, progresiones y líneas melódicas.md",
          "1. Teoría/4. Melodía/0. Enlaces 2.0 y motivos.md",
          "1. Teoría/0. Fundamentos/2. Armonización de tonalidades mayores.md",
          "1. Teoría/2. Conducción/00. Voicing e inversiones.md",
          "1. Teoría/1. Armonía/9. Dominantes en progresiones.md",
          "1. Teoría/1. Armonía/2. Sustitutos de tritono.md",
          "1. Teoría/1. Armonía/3. Intercambios modales.md", "1. Teoría/1. Armonía/8. Tensiones.md",
          "10. System/2. Plantillas/1. Bloques/Rúbrica - Composición.md",
          "10. System/2. Plantillas/1. Bloques/bloque — decisión.md",
          "10. System/2. Plantillas/2. Notación/strudel — secciones.md",
          "10. System/2. Plantillas/0. Notas/Obra.md"]),
        ("Louise 07 - Historial.md", "El historial de Louise",
         "Cada commit que tocó Louise (fecha, mensaje, archivos) y los cambios musicales de la partitura "
         "versión por versión.",
         ["@historial-louise"]),
        ("Louise 08 - Cómo se trabaja.md", "Cómo se trabaja Louise: partituras, Strudel y flujos",
         "El ciclo de MuseScore, el sistema de partituras, Strudel (qué es, el motor, el folk) y los flujos "
         "de la bóveda.",
         ["7. Partituras/Sistema de partituras.md", "7. Partituras/Cómo usar las partituras.md",
          f"{STRUDEL}/0. Qué es y cómo se usa.md", f"{STRUDEL}/README.md", f"{STRUDEL}/3. Folk.md",
          f"{STRUDEL}/4. Folk desde cero.md", "8. Setup/5. Áreas/2. Canción.md", "6. Práctica/0. Flujos.md",
          "Inicio.md"]),
        ("Louise.musicxml", None, None, [f"@copiar:{LOUISE_XML}"]),
    ],
}

# ================================================================ utilidades


def nfc(s):
    return unicodedata.normalize("NFC", str(s))


def rel(p):
    return nfc(p.relative_to(BOVEDA).as_posix())


def expandir(patrones):
    """Rutas en el orden del catálogo, sin repetir, sin las excluidas."""
    incl, excl = [], set()
    for pat in patrones:
        if pat.startswith("!"):
            excl |= {rel(p) for p in BOVEDA.glob(pat[1:]) if p.is_file()}
    for pat in patrones:
        if pat.startswith("!"):
            continue
        if any(c in pat for c in "*?["):
            encontrados = sorted((p for p in BOVEDA.glob(pat) if p.is_file()), key=lambda p: nfc(rel(p)))
        else:
            p = BOVEDA / pat
            if not p.exists():
                sys.exit(f"✗ No existe: {pat}")
            encontrados = [p]
        for p in encontrados:
            r = rel(p)
            if r not in excl and r not in [rel(x) for x in incl]:
                incl.append(p)
    return incl


def bloque(p):
    """Una nota con su ruta delante. El frontmatter pasa a un bloque yaml; el código, a un bloque js."""
    texto = p.read_text(encoding="utf-8").replace("\r\n", "\n").strip("\n")
    if p.suffix == ".js":
        return f"```js\n{texto}\n```"
    if texto.startswith("---\n"):
        fin = texto.find("\n---", 4)
        if fin != -1:
            yaml = texto[4:fin].strip("\n")
            texto = f"```yaml\n{yaml}\n```\n\n" + texto[fin + 4:].lstrip("\n")
    return texto


def cabecera(titulo, para_que, rutas):
    lineas = [f"# {titulo}", "",
              f"> Archivo derivado: lo genera `_scripts/generar-chatgpt.py` desde la bóveda de música del usuario "
              f"(Obsidian + git), el {HOY}. Cada sección es una nota de la bóveda, con su ruta. La bóveda es la "
              f"fuente de verdad: si algo de aquí contradice a una conversación más reciente, pregunta.", "",
              para_que, ""]
    if rutas:
        lineas += ["Contiene:", ""] + [f"- `{r}`" for r in rutas] + [""]
    return "\n".join(lineas)


def guardar(ruta, data):
    if isinstance(data, str):
        data = data.encode("utf-8")
    viejo = ruta.read_bytes() if ruta.exists() else None
    etiqueta = nfc(ruta.relative_to(RAIZ).as_posix())
    if viejo == data:
        informe.append(("igual", etiqueta))
        return
    informe.append(("nuevo" if viejo is None else "cambia", etiqueta))
    if not COMPROBAR:
        ruta.parent.mkdir(parents=True, exist_ok=True)
        ruta.write_bytes(data)


# ================================================================ la partitura, compás por compás

ALT = {-2: "𝄫", -1: "♭", 0: "", 1: "♯", 2: "𝄪"}
KIND = {
    "major": "", "minor": "m", "augmented": "+", "diminished": "°", "dominant": "7", "major-seventh": "maj7",
    "minor-seventh": "m7", "diminished-seventh": "°7", "augmented-seventh": "+7", "half-diminished": "ø7",
    "major-minor": "m(maj7)", "major-sixth": "6", "minor-sixth": "m6", "dominant-ninth": "9",
    "major-ninth": "maj9", "minor-ninth": "m9", "dominant-11th": "11", "major-11th": "maj11",
    "minor-11th": "m11", "dominant-13th": "13", "major-13th": "maj13", "minor-13th": "m13",
    "suspended-second": "sus2", "suspended-fourth": "sus4", "power": "5", "none": "",
}
DUR = {1: "𝅘𝅥𝅯", 2: "♪", 3: "♪.", 4: "♩", 6: "♩.", 8: "𝅗𝅥", 12: "𝅗𝅥."}
PASOS = "CDEFGAB"


def _alt(x):
    return int(float(x or 0))


def _pos(div, pb):
    beat, sub = divmod(div, pb)
    return f"{beat + 1}" + ["", "e", "&", "a"][sub * 4 // pb]


def _dur(d, pb):
    q = d * 4 // pb
    return DUR.get(q, f"{q}/16")


def _acorde(h):
    root = h.find("root")
    if root is None:
        return None
    s = root.findtext("root-step") + ALT.get(_alt(root.findtext("root-alter")), "")
    k = h.find("kind")
    if k is not None:
        s += k.get("text") if k.get("text") is not None else KIND.get(k.text, k.text or "")
    for dg in h.findall("degree"):
        tipo = {"add": "add", "subtract": "no"}.get(dg.findtext("degree-type"), "")
        s += f"({tipo}{ALT.get(_alt(dg.findtext('degree-alter')), '')}{dg.findtext('degree-value')})"
    b = h.find("bass")
    if b is not None:
        s += "/" + b.findtext("bass-step") + ALT.get(_alt(b.findtext("bass-alter")), "")
    return s


def reduccion(xml):
    root = ET.parse(BOVEDA / xml).getroot()
    nombres, instr = {}, {}
    for sp in root.find("part-list").iter("score-part"):
        nombres[sp.get("id")] = sp.findtext("part-name")
        for si in sp.iter("score-instrument"):
            instr[si.get("id")] = si.findtext("instrument-name")
    partes = root.findall("part")
    total = len(partes[0].findall("measure"))
    ev = defaultdict(lambda: defaultdict(list))
    acordes, ensayo, armadura, textos = defaultdict(list), {}, {}, defaultdict(list)
    tempo = {}

    for p in partes:
        pid, pb, octava = p.get("id"), 4, 0
        for m in p.findall("measure"):
            n, cur, ultimo = int(m.get("number")), 0, 0
            for e in m:
                if e.tag == "attributes":
                    pb = int(e.findtext("divisions") or pb)
                    t = e.find("transpose")
                    if t is not None:
                        octava = int(t.findtext("octave-change") or 0)
                    k = e.find("key")
                    if k is not None and pid == partes[0].get("id"):
                        armadura[n] = int(k.findtext("fifths"))
                elif e.tag == "direction":
                    for r in e.iter("rehearsal"):
                        if (r.text or "").strip():
                            ensayo[n] = r.text.strip()
                    for w in e.iter("words"):
                        if (w.text or "").strip():
                            textos[n].append(f"{nombres[pid]}: «{w.text.strip()}» en {_pos(cur, pb)}")
                    for d in e.iter("dynamics"):
                        textos[n].append(f"{nombres[pid]}: *{d[0].tag}* en {_pos(cur, pb)}")
                    for w in e.iter("wedge"):
                        if w.get("type") != "stop":
                            textos[n].append(f"{nombres[pid]}: regulador {w.get('type')} en {_pos(cur, pb)}")
                    for s in e.iter("sound"):
                        if s.get("tempo") and pid == partes[0].get("id"):
                            tempo[n] = s.get("tempo")
                elif e.tag == "harmony":
                    c = _acorde(e)
                    if c:
                        acordes[n].append((cur + int(e.findtext("offset") or 0), c, pb))
                elif e.tag == "backup":
                    cur -= int(e.findtext("duration"))
                elif e.tag == "forward":
                    cur += int(e.findtext("duration"))
                elif e.tag == "note" and e.find("grace") is None:
                    d = int(e.findtext("duration") or 0)
                    es_acorde = e.find("chord") is not None
                    inicio = ultimo if es_acorde else cur
                    if not es_acorde:
                        ultimo, cur = cur, cur + d
                    if e.find("rest") is not None:
                        continue
                    ligs = [t.get("type") for t in e.findall("tie")]
                    pt = e.find("pitch")
                    if pt is not None:
                        paso, alt, octv = pt.findtext("step"), _alt(pt.findtext("alter")), int(pt.findtext("octave")) + octava
                        midi = 12 * (octv + 1) + [0, 2, 4, 5, 7, 9, 11][PASOS.index(paso)] + alt
                        ev[n][(pid, e.findtext("staff") or "1")].append(dict(
                            ini=inicio, d=d, nm=f"{paso}{ALT.get(alt, '?')}{octv}", midi=midi, pb=pb,
                            lig_fin="stop" in ligs, lig_ini="start" in ligs,
                            arp=e.find("notations/arpeggiate") is not None))
                    else:
                        i = e.find("instrument")
                        nh = e.find("notehead")
                        ev[n][(pid, "perc")].append(dict(
                            ini=inicio, pb=pb, nm=instr.get(i.get("id"), nombres[pid]) if i is not None else nombres[pid],
                            vel=e.get("dynamics"), suave=nh is not None and nh.get("parentheses") == "yes"))

    pid_de = {v: k for k, v in nombres.items()}
    piano, guit, voz = pid_de.get("Piano"), pid_de.get("Guitarra nylon"), pid_de.get("Voz")
    percs = [p.get("id") for p in partes if p.get("id") not in (piano, guit, voz)]

    def de_parte(n, pid, staff=None):
        return [x for (q, st), l in ev[n].items() if q == pid and st != "perc" and (staff is None or st == staff) for x in l]

    def linea(evs):
        if not evs:
            return "—"
        grupos = defaultdict(list)
        for x in evs:
            grupos[x["ini"]].append(x)
        out = []
        for ini in sorted(grupos):
            g = sorted(grupos[ini], key=lambda x: x["midi"])
            durs = {x["d"] for x in g}
            notas = []
            for x in g:
                s = ("‿" if x["lig_fin"] else "") + x["nm"] + ("‿" if x["lig_ini"] else "")
                notas.append(s + (" " + _dur(x["d"], x["pb"]) if len(durs) > 1 else ""))
            txt = notas[0] if len(notas) == 1 else "[" + " ".join(notas) + "]"
            if len(durs) == 1:
                txt += " " + _dur(g[0]["d"], g[0]["pb"])
            if any(x["arp"] for x in g):
                txt += " (arp.)"
            out.append(f"{_pos(ini, g[0]['pb'])}: {txt}")
        return " · ".join(out)

    def bateria(n):
        por = defaultdict(list)
        for pid in percs:
            for x in ev[n].get((pid, "perc"), []):
                marca = _pos(x["ini"], x["pb"])
                if x["suave"]:
                    marca = f"({marca})"
                if x["vel"] and abs(float(x["vel"]) - 100) > 1:
                    marca += f"[{float(x['vel']):.0f}%]"
                por[x["nm"]].append((x["ini"], marca))
        return "; ".join(f"{k} {' '.join(m for _, m in sorted(v))}" for k, v in por.items()) or "—"

    def cifrado(n):
        return " · ".join(f"{c} ({_pos(s, pb)})" for s, c, pb in sorted(set(acordes[n]))) or "—"

    arm_txt = {2: "2♯ (Re mayor)", -1: "1♭ (Fa mayor / Re menor)", 0: "sin alteraciones"}
    out = [
        "## Cómo leer esto", "",
        "- Un renglón por compás en el resumen y un bloque por compás en el detalle. Compás de 3/4, "
        "♩ = " + (tempo.get(1) or "?") + " (un compás dura " + (f"{180 / float(tempo[1]):.3f}" if 1 in tempo else "?") + " s).",
        "- **Sección** sale de las marcas de ensayo de la partitura. Desde la última marca, las secciones "
        "que no tienen marca propia heredan el nombre de la anterior: compruébalo con la guía (00).",
        "- **Grave/Aguda**: la nota más grave y la más aguda del compás entre piano y guitarra, en altura real.",
        "- **Ataques**: cuántos inicios de nota distintos tiene cada instrumento en el compás.",
        "- Notas en cifrado anglosajón con octava científica (C4 = Do central). ♯ y ♭ explícitos.",
        "- La **guitarra** se escribe una octava arriba de como suena; aquí va en **altura real**.",
        "- Posiciones en semicorcheas: `1`, `1e`, `1&`, `1a`, `2`, `2e`… Duraciones: 𝅘𝅥𝅯 semicorchea, ♪ corchea, "
        "♪. corchea con puntillo, ♩ negra, ♩. negra con puntillo, 𝅗𝅥 blanca, 𝅗𝅥. blanca con puntillo (compás "
        "entero). `‿` = ligadura. `(arp.)` = acorde arpegiado (el rasgueo).",
        "- **Batería**: en qué posición golpea cada instrumento; entre paréntesis los golpes suaves o ghost; "
        "`[x%]` la velocidad de MuseScore cuando no es la normal (100 %).",
        "- La partitura no tiene ninguna marca de dinámica: si aparece alguna, va como *Indicación*.", "",
        "## Resumen: un renglón por compás", "",
        "| c. | Sección | Armadura | Cifrado (posición) | Grave | Aguda | Ataques piano | Ataques guitarra | Batería |",
        "|---:|---|---|---|---|---|---:|---:|---|",
    ]
    seccion, fifths = "", 0
    for n in range(1, total + 1):
        seccion = ensayo.get(n, seccion)
        fifths = armadura.get(n, fifths)
        todas = [x for (q, st), l in ev[n].items() if st != "perc" for x in l]
        grave = min(todas, key=lambda x: x["midi"])["nm"] if todas else "—"
        aguda = max(todas, key=lambda x: x["midi"])["nm"] if todas else "—"
        ap = len({x["ini"] for x in de_parte(n, piano) if not x["lig_fin"]})
        ag = len({x["ini"] for x in de_parte(n, guit) if not x["lig_fin"]})
        bat = "sí" if any(ev[n].get((pid, "perc")) for pid in percs) else "—"
        sec = f"**{ensayo[n]}**" if n in ensayo else seccion
        out.append(f"| {n} | {sec} | {arm_txt.get(fifths, fifths)} | {cifrado(n)} | {grave} | {aguda} | {ap} | {ag} | {bat} |")

    out += ["", "## Detalle por compás", ""]
    for n in range(1, total + 1):
        if n in ensayo:
            out += [f"### {ensayo[n]} (desde el c.{n})", ""]
        out.append(f"**c.{n}** — {cifrado(n)}")
        if n in armadura and n != 1:
            out.append(f"- Cambio de armadura: {arm_txt.get(armadura[n], armadura[n])}")
        out.append(f"- Piano MD: {linea(de_parte(n, piano, '1'))}")
        out.append(f"- Piano MI: {linea(de_parte(n, piano, '2'))}")
        out.append(f"- Guitarra (real): {linea(de_parte(n, guit))}")
        if de_parte(n, voz):
            out.append(f"- Voz: {linea(de_parte(n, voz))}")
        out.append(f"- Batería: {bateria(n)}")
        out += [f"- Indicación: {t}" for t in textos[n]]
        out.append("")
    return "\n".join(out)


# ================================================================ el historial de Louise


def historial_louise():
    rutas = [LOUISE, "7. Partituras/2. Composiciones/Louise.mscz", f"{STRUDEL}/10. Folk",
             f"{STRUDEL}/5. Experiments/1. Happy", "6. Práctica/4. Bitácora/2026-10-05 - Semana 02 - Louise, del loop a la forma.md",
             "6. Práctica/4. Bitácora/2026-10-12 - Semana 03 - Louise, forma y cierre.md"]
    log = subprocess.run(["git", "-c", "core.quotePath=false", "log", "--reverse", "--date=short",
                          "--pretty=format:@@%h|%ad|%s", "--name-only", "--", *rutas],
                         cwd=BOVEDA, capture_output=True, text=True, encoding="utf-8").stdout
    out = ["## Commits que tocan Louise, del más viejo al más nuevo", "",
           "El *qué* sale de git; el *por qué* está en las notas (`Louise 01`) y en `## Decisiones`.", "",
           "| Commit | Fecha | Mensaje | Archivos |", "|---|---|---|---|"]
    for bloque_log in log.split("@@")[1:]:
        cab, *archivos = [x for x in bloque_log.strip().split("\n") if x.strip()]
        h, fecha, msg = cab.split("|", 2)
        out.append(f"| `{h}` | {fecha} | {msg.replace('|', '/')} | {'<br>'.join(f'`{a}`' for a in archivos)} |")
    pend = subprocess.run(["git", "-c", "core.quotePath=false", "status", "--short", "--", *rutas,
                           "3. Composiciones/6. louise"], cwd=BOVEDA, capture_output=True, text=True,
                          encoding="utf-8").stdout.strip()
    out += ["", "## Cambios sin commit al generar este archivo", "",
            "```text", pend or "(ninguno)", "```", "",
            "`M` = modificado, `??` = nuevo sin seguimiento.", ""]
    musical = subprocess.run([sys.executable, str(BOVEDA / "_scripts" / "historial.py"), "-n", "12", "Louise"],
                             cwd=BOVEDA, capture_output=True, text=True, encoding="utf-8").stdout
    out += ["## Cambios musicales de la partitura, versión por versión", "",
            "Salida de `_scripts/historial.py Louise`: compara el MusicXML de cada commit con el anterior y dice "
            "qué notas cambiaron en qué compás. Las alturas de guitarra están **escritas** (una octava arriba de "
            "lo que suena). «compás nuevo» en todas las partes = se alargó la pieza.", "",
            "```text", musical.strip(), "```", ""]
    return "\n".join(out)


# ================================================================ armar


def armar(proyecto, fuentes):
    destino = RAIZ / proyecto / ".fuentes"
    esperados = set()
    for nombre, titulo, para_que, rutas in fuentes:
        esperados.add(nfc(nombre))
        especial = rutas[0] if rutas and rutas[0].startswith("@") else None
        if especial and especial.startswith("@copiar:"):
            origen = BOVEDA / especial.split(":", 1)[1]
            if origen.suffix == ".md":
                texto = origen.read_text(encoding="utf-8").replace("\r\n", "\n")
                if texto.startswith("---\n"):          # el frontmatter es de Obsidian, no de ChatGPT
                    texto = texto[texto.find("\n---", 4) + 4:].lstrip("\n")
                guardar(destino / nombre, texto)
            else:
                guardar(destino / nombre, origen.read_bytes())
            continue
        if especial and especial.startswith("@reduccion:"):
            xml = especial.split(":", 1)[1]
            guardar(destino / nombre, cabecera(titulo, para_que, [xml]) + "\n" + reduccion(xml) + "\n")
            continue
        if especial == "@historial-louise":
            guardar(destino / nombre, cabecera(titulo, para_que, []) + "\n" + historial_louise() + "\n")
            continue
        archivos = expandir(rutas)
        partes = [cabecera(titulo, para_que, [rel(p) for p in archivos])]
        for p in archivos:
            partes.append(f"---\n\n## Archivo: `{rel(p)}`\n\n{bloque(p)}\n")
        guardar(destino / nombre, "\n".join(partes))
    if destino.exists():
        for viejo in destino.iterdir():
            if nfc(viejo.name) not in esperados:
                informe.append(("sobra", nfc(viejo.relative_to(RAIZ).as_posix()) + "  (no se borra: muévelo a _legacy/ si ya no va)"))


def main():
    for proyecto, fuentes in PROYECTOS.items():
        if FILTRO and not any(f.lower() in proyecto.lower() for f in FILTRO):
            continue
        armar(proyecto, fuentes)
    ancho = max((len(e) for _, e in informe), default=0)
    for estado, etiqueta in informe:
        marca = {"igual": "·", "nuevo": "+", "cambia": "~", "sobra": "!"}[estado]
        tam = ""
        ruta = RAIZ / etiqueta.split("  (")[0]
        if ruta.exists() and estado != "sobra":
            tam = f"{ruta.stat().st_size / 1024:8.0f} KB"
        print(f"  {marca} {etiqueta:<{ancho}} {tam}")
    cambios = sum(1 for e, _ in informe if e in ("nuevo", "cambia"))
    print(f"\n{'Cambiarían' if COMPROBAR else 'Cambiaron'} {cambios} de {len(informe)}.")


if __name__ == "__main__":
    main()
