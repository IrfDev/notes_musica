#!/usr/bin/env python3
"""
Genera el MusicXML que Obsidian lee, a partir de tus partituras de MuseScore.

    7. Partituras/2. Composiciones/Nocturno.mscz      <- editas esto
    7. Partituras/2. Composiciones/Nocturno.musicxml  <- esto lo genera el script

El .mscz es la única fuente de verdad. El .musicxml es derivado: se puede
borrar entero y regenerar. Nunca lo edites a mano — el próximo sync lo pisa.

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

BOVEDA = Path(__file__).resolve().parent.parent
PARTITURAS = BOVEDA / "7. Partituras"
MSCORE = Path("/Applications/MuseScore 4.app/Contents/MacOS/mscore")

# Carpetas que nunca se convierten
EXCLUIR = {".mscbackup", "_legacy"}


def clave(p: Path) -> str:
    """Los .mscz bajados del navegador traen acentos en NFC y MuseScore escribe
    la salida en NFD. Son el mismo archivo para APFS pero distinta cadena, así
    que toda comparación de rutas pasa por aquí."""
    return unicodedata.normalize("NFC", str(p))


def destino_de(mscz: Path) -> Path:
    """El .musicxml vive al lado de su .mscz, con el mismo nombre."""
    return mscz.with_suffix(".musicxml")


def recolectar():
    """Devuelve (pendientes, al_dia, huerfanos)."""
    pendientes, al_dia, esperados = [], [], set()

    for mscz in sorted(PARTITURAS.rglob("*.mscz")):
        if EXCLUIR & set(mscz.relative_to(PARTITURAS).parts):
            continue
        out = destino_de(mscz)
        esperados.add(clave(out))
        if out.exists() and out.stat().st_mtime >= mscz.stat().st_mtime:
            al_dia.append((mscz, out))
        else:
            pendientes.append((mscz, out))

    huerfanos = sorted(p for p in PARTITURAS.rglob("*.musicxml")
                       if clave(p) not in esperados)
    return pendientes, al_dia, huerfanos


def convertir(trabajos, verbose):
    """Una sola invocación de MuseScore para todo (modo batch)."""
    job = [{"in": str(src), "out": str(out)} for src, out in trabajos]
    with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False,
                                     encoding="utf-8") as fh:
        json.dump(job, fh, ensure_ascii=False)
        job_path = fh.name
    try:
        proc = subprocess.run([str(MSCORE), "-j", job_path],
                              capture_output=True, text=True, check=False)
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
    ap = argparse.ArgumentParser(description="Genera el MusicXML de tus partituras")
    ap.add_argument("--dry-run", action="store_true", help="no convierte nada")
    ap.add_argument("--force", action="store_true", help="reconvierte todo")
    ap.add_argument("--verbose", action="store_true", help="salida de MuseScore")
    args = ap.parse_args()

    for ruta, que in ((MSCORE, "MuseScore 4"), (PARTITURAS, "la carpeta de partituras")):
        if not ruta.exists():
            sys.exit(f"ERROR: no encuentro {que} en {ruta}")

    pendientes, al_dia, huerfanos = recolectar()
    if args.force:
        pendientes, al_dia = pendientes + al_dia, []

    print(f"{PARTITURAS.relative_to(BOVEDA)}")
    print(f"  {len(al_dia)} al día · {len(pendientes)} por convertir", end="")
    print(f" · {len(huerfanos)} huérfanos" if huerfanos else "")

    if not pendientes:
        print("\nNada que hacer.")
    else:
        print()
        for _, out in pendientes:
            print(f"  → {out.relative_to(PARTITURAS)}")
        if args.dry_run:
            print("\n(--dry-run: no se convirtió nada)")
        else:
            print(f"\nConvirtiendo {len(pendientes)}...")
            fallidos = convertir(pendientes, args.verbose)
            ok = len(pendientes) - len(fallidos)
            print(f"Listo: {ok} convertidos"
                  + (f", {len(fallidos)} fallaron" if fallidos else ""))
            for src, _ in fallidos:
                print(f"  FALLO  {src.name}")

    if huerfanos:
        print("\nHuérfanos (su .mscz ya no existe; bórralos si quieres):")
        for h in huerfanos:
            print(f"  ?  {h.relative_to(PARTITURAS)}")


if __name__ == "__main__":
    main()
