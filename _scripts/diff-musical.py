#!/usr/bin/env python3
"""
Traduce la diferencia entre dos versiones de un .musicxml a lenguaje musical.

En vez de mostrarte XML, te dice:  "Compás 12, Piano: Sol#4 -> La4"

Uso directo:
    ./_scripts/diff-musical.py vieja.musicxml nueva.musicxml

Como filtro de git (lo usa `git difftool`):
    se invoca con las dos rutas que git le pasa.
"""

import sys
import xml.etree.ElementTree as ET

NOTA = {"C": "Do", "D": "Re", "E": "Mi", "F": "Fa",
        "G": "Sol", "A": "La", "B": "Si"}

FIGURA = {"whole": "redonda", "half": "blanca", "quarter": "negra",
          "eighth": "corchea", "16th": "semicorchea", "32nd": "fusa",
          "64th": "semifusa", "breve": "cuadrada"}


def nombre(nota):
    """Un <note> de MusicXML como (altura, figura): ('Sol#4', 'negra')."""
    figura = FIGURA.get(nota.findtext("type", ""), nota.findtext("type", "") or "?")
    if nota.find("dot") is not None:
        figura += " con puntillo"
    p = nota.find("pitch")
    if nota.find("rest") is not None:
        return ("silencio", figura)
    if p is None:
        return ("?", figura)
    paso = NOTA.get(p.findtext("step", ""), p.findtext("step", "?"))
    alter = int(float(p.findtext("alter", "0") or 0))
    octava = p.findtext("octave", "")
    signo = "#" * alter if alter > 0 else "b" * -alter
    return (f"{paso}{signo}{octava}", figura)


def describir(antes, despues):
    """Solo menciona la figura cuando es lo que cambió."""
    (pa, fa), (pd, fd) = antes, despues
    if pa != pd and fa != fd:
        return f"{pa} ({fa})", f"{pd} ({fd})"
    if fa != fd:
        return f"{pa} {fa}", f"{pd} {fd}"
    return pa, pd


def leer(ruta):
    """{(parte, compás): [notas]} — acordes incluidos, en orden de aparición."""
    raiz = ET.parse(ruta).getroot()
    nombres = {p.get("id"): (p.findtext("part-name") or p.get("id"))
               for p in raiz.findall("./part-list/score-part")}
    out = {}
    for parte in raiz.findall("part"):
        pid = parte.get("id")
        # La clave lleva el id, no el nombre: dos partes pueden llamarse
        # igual ("Piano" y "Piano") y se pisarían entre sí.
        etiqueta = nombres.get(pid, pid)
        for compas in parte.findall("measure"):
            n = compas.get("number")
            out[(pid, etiqueta, n)] = [nombre(x) for x in compas.findall("note")]
    return out


def comparar(a, b):
    cambios = []
    orden = lambda k: (k[0], int(k[2]) if k[2].isdigit() else 0)
    for clave in sorted(set(a) | set(b), key=orden):
        _, parte, compas = clave
        va, vb = a.get(clave), b.get(clave)
        if va == vb:
            continue
        if va is None:
            cambios.append((parte, compas, "compás nuevo", ""))
        elif vb is None:
            cambios.append((parte, compas, "compás eliminado", ""))
        elif len(va) == len(vb):
            for x, y in zip(va, vb):
                if x != y:
                    a_, d_ = describir(x, y)
                    cambios.append((parte, compas, a_, d_))
        else:
            plural = lambda n: f"{n} nota" + ("s" if n != 1 else "")
            cambios.append((parte, compas, plural(len(va)), plural(len(vb))))
    return cambios


def main():
    if len(sys.argv) < 3:
        sys.exit("uso: diff-musical.py <vieja.musicxml> <nueva.musicxml>")
    try:
        cambios = comparar(leer(sys.argv[1]), leer(sys.argv[2]))
    except ET.ParseError as e:
        sys.exit(f"no pude leer el MusicXML: {e}")

    if not cambios:
        print("  sin cambios musicales (solo maquetación)")
        return
    for parte, compas, antes, despues in cambios:
        flecha = f"{antes} -> {despues}" if despues else antes
        print(f"  c.{compas:<4} {parte:<18} {flecha}")
    print(f"\n  {len(cambios)} cambio(s)")


if __name__ == "__main__":
    main()
