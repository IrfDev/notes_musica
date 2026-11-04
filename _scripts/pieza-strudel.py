#!/usr/bin/env python3
"""
Une los Strudel de producción de una obra en un solo archivo que toca la pieza entera.

    4. Instrumento/2. Strudel/10. Folk/Louise/9.produccion/
        0.intro.strudel.js … 7.c3.strudel.js   <- editas esto: cada uno trae su sección
        pieza.strudel.js                       <- esto lo genera el script

Cada archivo de producción trae su sección entera y, para oír cómo entra y cómo sale, un pedazo de
la anterior y de la siguiente ("V1, primera mitad"). De cada archivo se toma solo la sección que es
suya, la que no dice "mitad" en su título, y se ponen en orden de compás. Una sección que todavía no
tiene archivo propio (hoy, el Outro) entra con el pedazo más largo que haya, y el encabezado lo dice.

Se detiene, sin escribir nada, si:
  - las partes 1 a 3 (sonido, batería, herramientas) no son idénticas en todos los archivos;
  - dos archivos traen la misma sección entera;
  - entre una sección y la siguiente sobran o faltan compases.

pieza.strudel.js es derivado: nunca lo edites a mano, la próxima vez que corra el script lo pisa.
Se reescribe solo si su contenido cambia.

Uso:
    ./_scripts/pieza-strudel.py              # la producción de Louise
    ./_scripts/pieza-strudel.py <carpeta>    # otra carpeta armada igual
    ./_scripts/pieza-strudel.py --comprobar  # dice si pieza.strudel.js está al día, sin escribir
"""

import argparse
import re
import sys
from pathlib import Path

BOVEDA = Path(__file__).resolve().parent.parent
LOUISE = BOVEDA / "4. Instrumento" / "2. Strudel" / "10. Folk" / "Louise" / "9.produccion"
SALIDA = "pieza.strudel.js"

PARTE = re.compile(r"^// ═+ (\d)\. .*$", re.M)
BLOQUE = re.compile(r"^// ─+ (?P<titulo>.+?) \(c\.(?P<a>\d+)–(?P<b>\d+)\) ─*$", re.M)
CONST = re.compile(r"^const (?P<nombre>[A-Z][A-Z0-9_]*) = \{$", re.M)
TRAMO_FN = re.compile(r"^let tramo = \(desde, hasta\) => \{\n.*?^\};\n", re.M | re.S)


def fallar(mensaje):
    sys.exit(f"pieza-strudel: {mensaje}")


def leer(p: Path):
    datos = p.read_bytes().decode("utf8")
    return datos.replace("\r\n", "\n"), "\r\n" in datos


def partes(texto, nombre):
    """{número de parte: texto desde su marcador hasta el siguiente}, y lo que va antes de la 1."""
    marcas = list(PARTE.finditer(texto))
    numeros = [int(m.group(1)) for m in marcas]
    if numeros != [1, 2, 3, 4, 5]:
        fallar(f"{nombre}: esperaba las partes 1 a 5, una vez cada una; tiene {numeros}")
    trozos = {}
    for m, sig in zip(marcas, marcas[1:] + [None]):
        trozos[int(m.group(1))] = texto[m.start():sig.start() if sig else len(texto)]
    return texto[:marcas[0].start()], trozos


def secciones(parte4, nombre):
    """Los bloques de la parte 4: título, compases, nombre de la constante y texto."""
    bloques = list(BLOQUE.finditer(parte4))
    if not bloques:
        fallar(f"{nombre}: la parte 4 no tiene secciones")
    suelto = parte4[parte4.index("\n") + 1:bloques[0].start()]
    if suelto.strip():
        fallar(f"{nombre}: hay código en la parte 4 antes de la primera sección")
    out = []
    for m, sig in zip(bloques, bloques[1:] + [None]):
        texto = parte4[m.start():sig.start() if sig else len(parte4)].rstrip("\n") + "\n"
        consts = CONST.findall(texto)
        if len(consts) != 1:
            fallar(f"{nombre}: la sección «{m.group('titulo')}» define {len(consts)} constantes")
        out.append(dict(titulo=m.group("titulo"), a=int(m.group("a")), b=int(m.group("b")),
                        const=consts[0], texto=texto, archivo=nombre,
                        entera="mitad" not in m.group("titulo")))
    return out


def armar(carpeta: Path):
    fuentes = sorted((p for p in carpeta.glob("*.strudel.js") if re.match(r"\d+\.", p.name)),
                     key=lambda p: int(p.name.split(".")[0]))
    if not fuentes:
        fallar(f"no hay archivos <n>.<sección>.strudel.js en {carpeta}")

    comun, primera, crlf, todas = None, None, False, []
    for p in fuentes:
        texto, es_crlf = leer(p)
        crlf |= es_crlf
        antes, trozos = partes(texto, p.name)
        cpm = antes.splitlines()[0]
        if not cpm.startswith("setcpm("):
            fallar(f"{p.name}: la primera línea no es setcpm(…)")
        base = (cpm, trozos[1] + trozos[2] + trozos[3])
        if comun is None:
            comun, primera = base, p.name
        elif base != comun:
            que = "el tempo (setcpm)" if base[0] != comun[0] else "las partes 1 a 3"
            fallar(f"{p.name} y {primera} no tienen igual {que}: pásalo a todos antes de unir")
        forma, marca4 = trozos[5], trozos[4].split("\n")[0]
        todas += secciones(trozos[4], p.name)

    # Por sección: la entera, o si no hay, el pedazo más largo
    elegidas = {}
    for s in todas:
        actual = elegidas.get(s["const"])
        if actual and actual["entera"] and s["entera"]:
            fallar(f"{s['const']} está entera en {actual['archivo']} y en {s['archivo']}")
        if (actual is None or (s["entera"] and not actual["entera"])
                or (not actual["entera"] and not s["entera"] and s["b"] - s["a"] > actual["b"] - actual["a"])):
            elegidas[s["const"]] = s
    orden = sorted(elegidas.values(), key=lambda s: s["a"])
    for x, y in zip(orden, orden[1:]):
        if y["a"] != x["b"] + 1:
            fallar(f"{x['const']} termina en el c.{x['b']} y {y['const']} empieza en el c.{y['a']}")

    tramo = TRAMO_FN.search(forma)
    if not tramo:
        fallar(f"{fuentes[-1].name}: no encontré la función tramo en la parte 5")
    marcas = (marca4, forma.split("\n")[0])
    return comun, orden, tramo.group(0), marcas, crlf


def escribir(carpeta: Path, comun, orden, tramo, marcas, crlf):
    obra = carpeta.parent.name
    a, b = orden[0]["a"], orden[-1]["b"]
    ancho = max(len(s["titulo"].split(",")[0]) for s in orden)
    filas = []
    for s in orden:
        corto = s["titulo"].split(",")[0]
        nota = "" if s["entera"] else f"   solo «{s['titulo']}»: todavía no tiene archivo propio"
        compases = "c.%d–%d" % (s["a"], s["b"])
        filas.append(f"  {corto:<{ancho}}  {compases:<10} {s['archivo']}{nota}")
    ejemplo = orden[len(orden) // 2]
    ea, eb, ec = ejemplo["a"], ejemplo["b"], ejemplo["const"]
    uno, otro = f"tramo({ea}, {eb})", f"tocar({ec})"
    col = max(len(uno), len(otro)) + 3
    cabecera = f"""{comun[0]}

/*
{obra}, la pieza entera: c.{a}–{b}.

NO SE EDITA. Lo genera ./_scripts/pieza-strudel.py con los archivos de producción de esta carpeta, y
lo pisa cada vez que corre. Para cambiar algo, cámbialo en el archivo de su sección, pásalo a los
vecinos que comparten esos compases y vuelve a correr el script.

De dónde sale cada sección
{chr(10).join(filas)}

  Las partes 1 a 3 (sonido, batería, herramientas) son iguales en todos los archivos; el script lo
  comprueba antes de unir.

Cómo se escucha
  forma(...TRAMO) al final toca la pieza entera, en bucle; {uno} repite solo
  esos compases, y {otro} una sección sola.
*/

"""
    cuerpo = comun[1] + marcas[0] + "\n\n" + "\n".join(s["texto"] for s in orden)
    lista = ", ".join(s["const"] for s in orden)
    pie = f"""
{marcas[1]}

const TRAMO = [{lista}];

// Unos compases sueltos, en bucle: {uno} va del c.{ea} al c.{eb}
{tramo}
forma(...TRAMO);

// Para oír un pedazo, cambia la línea de arriba. Todo suena en bucle:
//   {uno:<{col}}del c.{ea} al c.{eb}
//   {otro:<{col}}una sección sola
"""
    texto = cabecera + cuerpo + pie
    return texto.replace("\n", "\r\n") if crlf else texto


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("carpeta", nargs="?", type=Path, default=LOUISE)
    ap.add_argument("--comprobar", action="store_true", help="solo dice si está al día")
    args = ap.parse_args()
    carpeta = args.carpeta.resolve()
    texto = escribir(carpeta, *armar(carpeta))
    salida = carpeta / SALIDA
    previo = salida.read_bytes().decode("utf8") if salida.exists() else None
    rel = salida.relative_to(BOVEDA) if salida.is_relative_to(BOVEDA) else salida
    if previo == texto:
        print(f"{rel}: al día")
        return
    if args.comprobar:
        print(f"{rel}: {'desactualizado' if previo else 'no existe'}")
        sys.exit(1)
    salida.write_bytes(texto.encode("utf8"))
    print(f"{rel}: {'actualizado' if previo else 'creado'}")


if __name__ == "__main__":
    main()
