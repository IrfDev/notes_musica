#!/usr/bin/env python3
"""
Sincroniza partituras de MuseScore hacia la bóveda de Obsidian.

  ORIGEN   ~/Documents/MuseScore4/Scores/**/*.mscz   (lo que editas)
  DESTINO  <bóveda>/5. Referencias/2. Partituras/_generado/**/*.musicxml

El .mscz es la única fuente de verdad. El .musicxml es derivado: se puede
borrar entero y regenerar. Nunca lo edites a mano.

Uso:
    ./_scripts/sync-partituras.py              # convierte lo que cambió
    ./_scripts/sync-partituras.py --dry-run    # muestra qué haría, sin tocar nada
    ./_scripts/sync-partituras.py --force      # reconvierte todo desde cero
"""

import argparse
import json
import os
import subprocess
import sys
import tempfile
import unicodedata
from pathlib import Path

ORIGEN = Path.home() / "Documents" / "MuseScore4" / "Scores"
BOVEDA = Path(__file__).resolve().parent.parent
DESTINO = BOVEDA / "5. Referencias" / "2. Partituras" / "_generado"
MSCORE = Path("/Applications/MuseScore 4.app/Contents/MacOS/mscore")

# Carpetas dentro de ORIGEN que nunca se convierten
EXCLUIR = {".mscbackup", "_legacy"}

# macOS guarda como ":" lo que Finder muestra como "/". Rompe rutas en notas.
def sanear(nombre: str) -> str:
    return nombre.replace(":", " -")


def clave(p: Path) -> str:
    """Los .mscz bajados del navegador traen acentos en NFC y MuseScore escribe
    la salida en NFD. Son el mismo archivo para APFS pero distinta cadena, así
    que toda comparación de rutas pasa por aquí."""
    return unicodedata.normalize("NFC", str(p))


def destino_de(mscz: Path) -> Path:
    """Mapea un .mscz de ORIGEN a su .musicxml en DESTINO, espejando subcarpetas."""
    rel = mscz.relative_to(ORIGEN)
    partes = [sanear(p) for p in rel.parts[:-1]]
    nombre = sanear(rel.stem) + ".musicxml"
    return DESTINO.joinpath(*partes, nombre)


def recolectar():
    """Devuelve (pendientes, al_dia, huerfanos)."""
    pendientes, al_dia = [], []
    esperados = set()

    for mscz in sorted(ORIGEN.rglob("*.mscz")):
        if EXCLUIR & set(mscz.relative_to(ORIGEN).parts):
            continue
        out = destino_de(mscz)
        esperados.add(clave(out))
        if out.exists() and out.stat().st_mtime >= mscz.stat().st_mtime:
            al_dia.append((mscz, out))
        else:
            pendientes.append((mscz, out))

    huerfanos = []
    if DESTINO.exists():
        huerfanos = sorted(p for p in DESTINO.rglob("*.musicxml")
                           if clave(p) not in esperados)

    return pendientes, al_dia, huerfanos


def convertir(trabajos, verbose):
    """Una sola invocación de MuseScore para todos los archivos (modo batch)."""
    job = [{"in": str(src), "out": str(out)} for src, out in trabajos]
    for _, out in trabajos:
        out.parent.mkdir(parents=True, exist_ok=True)

    with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False,
                                     encoding="utf-8") as fh:
        json.dump(job, fh, ensure_ascii=False)
        job_path = fh.name

    try:
        proc = subprocess.run([str(MSCORE), "-j", job_path],
                              capture_output=True, text=True)
    finally:
        os.unlink(job_path)

    # MuseScore escupe ruido de crashpad en stderr aunque todo salga bien.
    if verbose and proc.stderr:
        ruido = ("WARNING", "crashpad", "directory_reader", "mach_o_image")
        for linea in proc.stderr.splitlines():
            if not any(r in linea for r in ruido):
                print(f"    {linea}")

    return [(src, out) for src, out in trabajos if not out.exists()]


def main():
    ap = argparse.ArgumentParser(description="Sincroniza .mscz -> .musicxml")
    ap.add_argument("--dry-run", action="store_true", help="no convierte nada")
    ap.add_argument("--force", action="store_true", help="reconvierte todo")
    ap.add_argument("--verbose", action="store_true", help="muestra salida de MuseScore")
    args = ap.parse_args()

    for ruta, que in ((MSCORE, "MuseScore 4"), (ORIGEN, "la carpeta de partituras")):
        if not ruta.exists():
            sys.exit(f"ERROR: no encuentro {que} en {ruta}")

    pendientes, al_dia, huerfanos = recolectar()
    if args.force:
        pendientes, al_dia = pendientes + al_dia, []

    print(f"Origen   {ORIGEN}")
    print(f"Destino  {DESTINO.relative_to(BOVEDA)}")
    print(f"\n  {len(al_dia)} al día · {len(pendientes)} por convertir", end="")
    print(f" · {len(huerfanos)} huérfanos" if huerfanos else "")

    if not pendientes:
        print("\nNada que hacer.")
    else:
        print()
        for src, out in pendientes:
            print(f"  → {out.relative_to(DESTINO)}")
        if args.dry_run:
            print("\n(--dry-run: no se convirtió nada)")
        else:
            print(f"\nConvirtiendo {len(pendientes)}...")
            fallidos = convertir(pendientes, args.verbose)
            ok = len(pendientes) - len(fallidos)
            print(f"Listo: {ok} convertidos" + (f", {len(fallidos)} fallaron" if fallidos else ""))
            for src, _ in fallidos:
                print(f"  FALLO  {src.name}")

    if huerfanos:
        print("\nHuérfanos (su .mscz ya no existe; bórralos a mano si quieres):")
        for h in huerfanos:
            print(f"  ?  {h.relative_to(DESTINO)}")


if __name__ == "__main__":
    main()
