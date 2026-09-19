#!/usr/bin/env python3
"""
Ordena los .mscz sueltos de ~/Downloads hacia la carpeta de MuseScore.

Clasifica cada archivo comparando el CONTENIDO MUSICAL real (el .mscx dentro
del .mscz, ignorando miniatura y metadatos), no el nombre ni el tamaño:

  NUEVO       no existe en Scores            -> se mueve a Scores/
  MAS NUEVO   misma partitura, versión nueva -> se mueve a Scores/,
                                                la vieja se archiva
  MAS VIEJO   misma partitura, versión vieja -> se archiva
  DUPLICADO   idéntica a una de Scores       -> se archiva

Nada se borra jamás: lo descartado va a ~/Documents/MuseScore4/_legacy/.

Uso:
    ./_scripts/ordenar-downloads.py            # muestra el plan, no toca nada
    ./_scripts/ordenar-downloads.py --apply    # ejecuta el plan
"""

import argparse
import hashlib
import re
import shutil
import sys
import zipfile
from datetime import datetime
from pathlib import Path

DOWNLOADS = Path.home() / "Downloads"
SCORES = Path.home() / "Documents" / "MuseScore4" / "Scores"
LEGACY = Path.home() / "Documents" / "MuseScore4" / "_legacy"

EXCLUIR = {".mscbackup", "_legacy"}


def hash_musical(mscz: Path) -> str:
    """SHA del .mscx interno: el contenido musical, sin metadatos volátiles."""
    try:
        with zipfile.ZipFile(mscz) as z:
            partes = sorted(n for n in z.namelist() if n.endswith(".mscx"))
            if not partes:
                return "ILEGIBLE"
            h = hashlib.sha1()
            for n in partes:
                h.update(z.read(n))
            return h.hexdigest()
    except (zipfile.BadZipFile, OSError):
        return "ILEGIBLE"


def sin_sufijo(nombre: str) -> str:
    """'enlaces (1).mscz' -> 'enlaces.mscz'  (sufijo que agrega el navegador)"""
    return re.sub(r" \(\d+\)\.mscz$", ".mscz", nombre)


def libre(destino: Path) -> Path:
    """Evita pisar un archivo existente añadiendo un sufijo numérico."""
    if not destino.exists():
        return destino
    for i in range(2, 100):
        alt = destino.with_name(f"{destino.stem} ({i}){destino.suffix}")
        if not alt.exists():
            return alt
    raise RuntimeError(f"demasiadas colisiones para {destino.name}")


def fecha(p: Path) -> str:
    return datetime.fromtimestamp(p.stat().st_mtime).strftime("%Y-%m-%d")


def planificar():
    if not SCORES.is_dir():
        sys.exit(f"ERROR: no encuentro {SCORES}")

    scores = [p for p in SCORES.rglob("*.mscz")
              if not EXCLUIR & set(p.relative_to(SCORES).parts)]
    por_hash = {}
    for p in scores:
        por_hash.setdefault(hash_musical(p), []).append(p)
    por_nombre = {p.name: p for p in scores}

    plan = []
    for src in sorted(DOWNLOADS.glob("*.mscz")):
        h = hash_musical(src)
        gemelo = por_nombre.get(sin_sufijo(src.name))

        if h in por_hash:
            otro = por_hash[h][0]
            plan.append((src, "DUPLICADO", LEGACY / "duplicados" / src.name,
                         f"idéntico a {otro.relative_to(SCORES)}", None))
        elif gemelo and src.stat().st_mtime > gemelo.stat().st_mtime:
            plan.append((src, "MAS NUEVO", SCORES / sin_sufijo(src.name),
                         f"reemplaza versión de {fecha(gemelo)}",
                         (gemelo, LEGACY / "reemplazados")))
        elif gemelo:
            plan.append((src, "MAS VIEJO", LEGACY / "versiones-viejas" / src.name,
                         f"Scores tiene una de {fecha(gemelo)}", None))
        else:
            plan.append((src, "NUEVO", libre(SCORES / src.name),
                         "no existe en Scores", None))
    return plan


def main():
    ap = argparse.ArgumentParser(description="Ordena .mscz de Downloads")
    ap.add_argument("--apply", action="store_true", help="ejecuta (por defecto solo muestra)")
    args = ap.parse_args()

    plan = planificar()
    if not plan:
        print("No hay .mscz en ~/Downloads.")
        return

    ancho = max(len(p[0].name) for p in plan)
    print(f"{len(plan)} archivos en ~/Downloads\n")
    for src, veredicto, destino, motivo, archivar in plan:
        flecha = "Scores/" if destino.is_relative_to(SCORES) else "_legacy/"
        print(f"  {veredicto:<10} {src.name:<{ancho}}  -> {flecha}  ({motivo})")
        if archivar:
            print(f"  {'':<10} {'':<{ancho}}     y archiva {archivar[0].name}")

    resumen = {}
    for _, v, *_ in plan:
        resumen[v] = resumen.get(v, 0) + 1
    print("\n" + " · ".join(f"{n} {v.lower()}" for v, n in sorted(resumen.items())))

    if not args.apply:
        print("\n(plan solamente — corre con --apply para ejecutar)")
        return

    print("\nEjecutando...")
    for src, veredicto, destino, _, archivar in plan:
        if archivar:
            viejo, carpeta = archivar
            carpeta.mkdir(parents=True, exist_ok=True)
            shutil.move(str(viejo), str(libre(carpeta / viejo.name)))
        destino.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(src), str(libre(destino)))
        print(f"  ok  {src.name}")
    print(f"\nListo. Archivado en {LEGACY} (nada se borró).")
    print("Siguiente paso:  ./_scripts/sync-partituras.py")


if __name__ == "__main__":
    main()
