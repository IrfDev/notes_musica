#!/usr/bin/env python3
"""
Muestra el historial de versiones de tus partituras, en lenguaje musical.

    ./_scripts/historial.py                 # últimos cambios de todo
    ./_scripts/historial.py nocturno        # historial de una partitura
    ./_scripts/historial.py nocturno -n 20  # más entradas

Para cada versión te dice cuándo fue, qué escribiste como motivo, y qué
cambió musicalmente respecto de la versión anterior.
"""

import argparse
import subprocess
import sys
import tempfile
from pathlib import Path

AQUI = Path(__file__).resolve().parent
DIFF_MUSICAL = AQUI / "diff-musical.py"


def git(*args):
    # core.quotePath=false: sin esto git escapa los acentos ("Composici\303\263n")
    # y las rutas dejan de coincidir con los archivos reales.
    r = subprocess.run(["git", "-c", "core.quotePath=false", *args],
                       capture_output=True, text=True)
    return r.stdout.rstrip("\n") if r.returncode == 0 else ""


def raiz():
    r = git("rev-parse", "--show-toplevel")
    if not r:
        sys.exit("No estás dentro de un repositorio git.")
    return Path(r)


def buscar(patron):
    """Partituras versionadas cuyo nombre contenga el patrón."""
    todas = [f for f in git("ls-files").splitlines() if f.endswith(".musicxml")]
    if not patron:
        return todas
    p = patron.lower()
    return [f for f in todas if p in Path(f).name.lower()]


def version_en(commit, ruta, destino):
    """Extrae la versión de un archivo tal como estaba en ese commit."""
    r = subprocess.run(["git", "show", f"{commit}:{ruta}"],
                       capture_output=True)
    if r.returncode != 0:
        return False
    destino.write_bytes(r.stdout)
    return True


def historial_de(ruta, limite):
    log = git("log", f"-n{limite}", "--follow", "--date=short",
              "--format=%h\x1f%ad\x1f%s", "--", ruta)
    if not log:
        print(f"  (sin historial todavía para {Path(ruta).name})")
        return

    commits = [l.split("\x1f") for l in log.splitlines()]
    print(f"\n{Path(ruta).name}")
    print("─" * (len(Path(ruta).name)))

    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        for i, (sha, fecha, asunto) in enumerate(commits):
            etiquetas = git("tag", "--points-at", sha).replace("\n", ", ")
            marca = f"  [{etiquetas}]" if etiquetas else ""
            print(f"\n  {fecha}  {sha}{marca}")
            print(f"  {asunto}")

            if i + 1 >= len(commits):
                print("     (primera versión)")
                continue
            previo = commits[i + 1][0]
            a, b = tmp / "a.musicxml", tmp / "b.musicxml"
            if version_en(previo, ruta, a) and version_en(sha, ruta, b):
                r = subprocess.run([sys.executable, str(DIFF_MUSICAL),
                                    str(a), str(b)],
                                   capture_output=True, text=True)
                for linea in r.stdout.splitlines():
                    if linea.strip():
                        print(f"   {linea}")


def main():
    ap = argparse.ArgumentParser(description="Historial musical de tus partituras")
    ap.add_argument("patron", nargs="?", default="",
                    help="parte del nombre de una partitura")
    ap.add_argument("-n", type=int, default=10, help="cuántas versiones (10)")
    args = ap.parse_args()

    import os
    os.chdir(raiz())

    encontradas = buscar(args.patron)
    if not encontradas:
        sys.exit(f"No encontré ninguna partitura versionada que coincida con "
                 f"'{args.patron}'.")
    if len(encontradas) > 6 and args.patron:
        print(f"{len(encontradas)} coinciden con '{args.patron}':")
        for f in encontradas:
            print(f"  {Path(f).name}")
        sys.exit("\nAfina el patrón.")

    for f in encontradas[:6]:
        historial_de(f, args.n)


if __name__ == "__main__":
    main()
