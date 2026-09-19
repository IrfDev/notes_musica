#!/usr/bin/env python3
"""
Comprueba que todo bloque ```verovio de la bóveda apunte a un archivo real.

Los errores que caza:
  · ruta absoluta          Verovio solo resuelve rutas relativas a la bóveda
  · .mxl                   el plugin lee texto; el .mxl es un ZIP
  · archivo inexistente    típico tras renombrar o mover una partitura

Uso:  ./_scripts/verificar-bloques.py
Sale con código 1 si hay algo roto, para poder usarlo en un hook.
"""

import re
import sys
import unicodedata as u
from pathlib import Path

BOVEDA = Path(__file__).resolve().parent.parent
BLOQUE = re.compile(r"```verovio\n(.*?)```", re.S)
INLINE = re.compile(r"^(X:|<|abc\b|musicxml\b|mei\b)", re.I)


def revisar(primera: str):
    """Devuelve (ok, motivo)."""
    if primera.startswith(("http://", "https://")):
        return True, "url"
    if primera.startswith("/"):
        return False, "ruta absoluta — debe ser relativa a la raíz de la bóveda"
    if primera.lower().endswith(".mxl"):
        return False, "el .mxl es un ZIP; Verovio aquí solo lee .musicxml"
    if (BOVEDA / primera).exists():
        return True, ""
    objetivo = u.normalize("NFC", primera)
    for f in BOVEDA.rglob("*.musicxml"):
        if u.normalize("NFC", str(f.relative_to(BOVEDA))) == objetivo:
            return True, ""
    return False, "no existe"


def main():
    total = inline = malos = 0
    for md in sorted(BOVEDA.rglob("*.md")):
        if any(p in md.parts for p in (".git", ".obsidian", "_legacy")):
            continue
        texto = md.read_text(encoding="utf-8", errors="replace")
        for bloque in BLOQUE.findall(texto):
            primera = next((l.strip() for l in bloque.splitlines() if l.strip()), "")
            total += 1
            if not primera or INLINE.match(primera):
                inline += 1
                continue
            ok, motivo = revisar(primera)
            if not ok:
                malos += 1
                print(f"  ROTO  {md.relative_to(BOVEDA)}")
                print(f"        {primera}")
                print(f"        -> {motivo}")

    print(f"\n  {total} bloques · {inline} con notación inline · {malos} rotos")
    return 1 if malos else 0


if __name__ == "__main__":
    sys.exit(main())
