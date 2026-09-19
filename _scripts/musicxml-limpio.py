#!/usr/bin/env python3
"""
Filtro textconv para git: imprime un .musicxml sin las coordenadas de dibujo.

MuseScore recalcula la posición de cada nota al reacomodar la página, así que
un diff en crudo muestra cientos de líneas cambiadas aunque la música sea la
misma. Quitando esas coordenadas, `git diff` enseña solo lo que suena.

Git lo invoca solo; no hace falta llamarlo a mano.
"""
import re
import sys

RUIDO = re.compile(r'\s+(default-x|default-y|relative-x|relative-y|width)="[^"]*"')
SALTAR = re.compile(r'<(print|system-layout|staff-layout|page-layout|appearance|'
                    r'defaults|system-distance|staff-distance|top-system-distance)\b')

if len(sys.argv) < 2:
    sys.exit("uso: musicxml-limpio.py <archivo.musicxml>")

with open(sys.argv[1], encoding="utf-8", errors="replace") as fh:
    for linea in fh:
        l = RUIDO.sub("", linea)
        if SALTAR.search(l) or not l.strip():
            continue
        print(l.rstrip())
