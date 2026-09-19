#!/bin/bash
# Activa el diff musical en este clon del repositorio.
# La configuración vive en .git/config, que no se versiona: hay que correr
# esto una vez por máquina.
set -e
RAIZ="$(git rev-parse --show-toplevel)"
git config diff.musicxml.textconv "$RAIZ/_scripts/musicxml-limpio.py"
git config diff.musicxml.cachetextconv true
echo "Listo. Ahora 'git diff' sobre un .musicxml muestra la música, no la maquetación."
echo "Para verlo en lenguaje musical:  ./_scripts/historial.py <partitura>"
