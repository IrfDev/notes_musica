#!/usr/bin/env python3
"""
Convierte los arpegios de Strudel en presets del arpegiador de Cakewalk Sonar (.ARP) y en MIDI (.mid).

Cada archivo se evalúa con el mismo Strudel que suena (4. Instrumento/2. Strudel/.motor/exportar.js),
se toma la parte que usa .arp( (o la que digas con --parte) y salen dos versiones:

    frase   forma Rhythm: tus notas tal cual. Sonar mueve la primera nota a la más grave que
            mantengas; si mantienes esa misma nota, suena en su tono.
    ritmo   forma Forward: solo el ritmo, la velocidad y la duración. Las notas salen del acorde
            que mantengas, en el orden de la forma.

Dónde van depende de dónde está el strudel:

    4. Instrumento/2. Strudel/6. Arpegiadores/<estilo>/Brillo.strudel.js
        → al lado: Brillo frase.ARP, Brillo ritmo.ARP, Brillo frase.mid, Brillo ritmo.mid.
          Si el archivo no usa .arp(, se toman todas sus notas (la percusión no tiene nota).
    cualquier otro .js de 2. Strudel/ que use .arp(
        → solo los .ARP, en 8. Setup/3. Configuraciones/Cakewalk Sonar/Sonar - <nombre> frase|ritmo.ARP

El largo del bucle se detecta (cuántos ciclos tarda el patrón en repetirse) y un ciclo es un compás
de 4/4, como en setcpm(BPM / 4). El .ARP no lleva tempo (el arpegiador sigue el del proyecto); el .mid
lleva el de setcpm.

La plantilla es Forward.ARP de fábrica (C:/Cakewalk Content, o la variable CAKEWALK_CONTENT): de ella
salen los ajustes que no están descifrados. Un archivo solo se reescribe si su contenido cambia.

Sonar lee los presets de Arpeggiator Patterns/ (su ArpPresetFolder). --instalar crea ahí, una sola
vez, dos enlaces de carpeta (junctions de Windows), sin copias:

    Arpeggiator Patterns/Strudel       → 8. Setup/3. Configuraciones/Cakewalk Sonar
    Arpeggiator Patterns/Arpegiadores  → 4. Instrumento/2. Strudel/6. Arpegiadores

Uso:
    ./_scripts/strudel-a-arp.py                            # 6. Arpegiadores/ y los .js sueltos que usan .arp(
    ./_scripts/strudel-a-arp.py <archivo.js|carpeta> [...] # los que digas; en una carpeta, las salidas van al lado
    ./_scripts/strudel-a-arp.py <archivo.js> --parte bass  # otra variable; $1, $2… para los bloques $:
    ./_scripts/strudel-a-arp.py --ciclos 8                 # el largo del bucle, a mano
    ./_scripts/strudel-a-arp.py --instalar                 # además, enlaza las carpetas con Sonar (una vez)
    ./_scripts/strudel-a-arp.py --comprobar                # dice qué cambiaría, sin escribir nada
"""

import json
import os
import re
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from presets import formatos as F       # noqa: E402

BOVEDA = Path(__file__).resolve().parent.parent
STRUDEL = BOVEDA / '4. Instrumento' / '2. Strudel'
ARPEGIADORES = STRUDEL / '6. Arpegiadores'
EXPORTAR = STRUDEL / '.motor' / 'exportar.js'
DESTINO = BOVEDA / '8. Setup' / '3. Configuraciones' / 'Cakewalk Sonar'
PATRONES = Path(os.environ.get('CAKEWALK_CONTENT') or 'C:/Cakewalk Content') / 'Sonar' / 'Arpeggiator Patterns'
PLANTILLA = PATRONES / 'Shapes' / 'Forward.ARP'
ENLACES = [(PATRONES / 'Strudel', DESTINO), (PATRONES / 'Arpegiadores', ARPEGIADORES)]

TICKS_CICLO = 3840          # un compás de 4/4 a 960 ticks por negra
CICLOS_CONSULTA = 64        # se busca la repetición en los primeros 64 ciclos
NOTA_RITMO = 48             # la nota de los patrones de solo ritmo, como los 1-Note de fábrica
PASOS_FABRICA = 128         # el patrón de fábrica más largo mide 128 semicorcheas
NOMBRES = 'C C# D D# E F F# G G# A A# B'.split()
SALIDA = re.compile(r' (frase|ritmo)\.(ARP|mid)$')

args = sys.argv[1:]


def opcion(nombre):
    if nombre not in args:
        return None
    i = args.index(nombre)
    if i + 1 >= len(args):
        sys.exit('%s necesita un valor' % nombre)
    valor = args[i + 1]
    del args[i:i + 2]
    return valor


def bandera(nombre):
    if nombre in args:
        args.remove(nombre)
        return True
    return False


PARTE = opcion('--parte')
CICLOS = opcion('--ciclos')
COMPROBAR = bandera('--comprobar')
INSTALAR = bandera('--instalar')
informe = []


class Fallo(Exception):
    pass

# ================================================================ qué archivos


def strudels(carpeta):
    """Los .js de una carpeta, sin las que empiezan con punto ni node_modules."""
    for ruta in sorted(carpeta.rglob('*.js')):
        partes = ruta.relative_to(carpeta).parts
        if not any(p.startswith('.') or p == 'node_modules' for p in partes) and ruta.name != 'vite.config.js':
            yield ruta


def elegir():
    """[(ruta, carpeta)]: carpeta es dónde se agrupan sus salidas al lado, o None si es suelto."""
    if not args:
        enCarpeta = [(r, ARPEGIADORES) for r in strudels(ARPEGIADORES)] if ARPEGIADORES.exists() else []
        sueltos = [(r, None) for r in strudels(STRUDEL)
                   if not r.is_relative_to(ARPEGIADORES) and '.arp(' in r.read_text(encoding='utf-8')]
        return enCarpeta + sueltos
    elegidos = []
    for a in args:
        ruta = Path(a).resolve()
        if ruta.is_dir():
            elegidos += [(r, ruta) for r in strudels(ruta)]
        elif ruta.exists():
            elegidos.append((ruta, ARPEGIADORES if ruta.is_relative_to(ARPEGIADORES) else None))
        else:
            sys.exit('no existe: %s' % a)
    return elegidos

# ================================================================ Strudel


def exportar(ruta, parte, ciclos, todo):
    cmd = ['node', str(EXPORTAR), str(ruta), '--ciclos', str(ciclos)]
    cmd += (['--parte', parte] if parte else []) + (['--todo'] if todo else [])
    try:
        r = subprocess.run(cmd, cwd=STRUDEL, capture_output=True, text=True, encoding='utf-8')
    except FileNotFoundError:
        raise Fallo('no encuentro node: hace falta para evaluar Strudel (ver 4. Instrumento/2. Strudel/README)')
    lineas = r.stdout.strip().splitlines()
    if not lineas:
        error = r.stderr.strip().splitlines()
        raise Fallo('Strudel no pudo evaluarlo: %s' % (error[-1] if error else 'sin salida'))
    datos = json.loads(lineas[-1])
    if 'error' in datos:
        raise Fallo(datos['error'])
    return datos


def a_ticks(eventos):
    """[(tiempo, nota, velocidad, duración)] en ticks y MIDI, desde lo que da exportar.js."""
    return [(round(e['t'] * TICKS_CICLO), e['nota'], min(127, max(1, round(e['vel'] * 127))),
             max(1, round(e['dur'] * TICKS_CICLO))) for e in eventos]


def periodo(notas, consultados):
    """Cuántos ciclos tarda en repetirse (sin contar la velocidad, que puede ser aleatoria)."""
    for p in range(1, consultados // 2 + 1):
        largo = p * TICKS_CICLO

        def tramo(k):
            return sorted((t - k * largo, n, d) for t, n, _, d in notas if k * largo <= t < (k + 1) * largo)
        base = tramo(0)
        if all(tramo(k) == base for k in range(1, consultados // p)):
            return p
    raise Fallo('no se repite en %d ciclos: dale el largo con --ciclos' % (consultados // 2))

# ================================================================ salidas


def tallo(ruta):
    return re.sub(r'(\.strudel)?\.js$', '', ruta.name)


def nombre_suelto(ruta, parte, elegida):
    base = re.sub(r'^\d+\.\s*', '', tallo(ruta))
    return '%s %s' % (base, parte.replace('$', 'bloque ')) if elegida else base


def nota(n):
    return '%s%d (MIDI %d)' % (NOMBRES[n % 12], n // 12 - 1, n)


def relativa(ruta):
    return ruta.relative_to(BOVEDA).as_posix() if ruta.is_relative_to(BOVEDA) else str(ruta)


def guardar(ruta, data):
    etiqueta = relativa(ruta)
    viejo = ruta.read_bytes() if ruta.exists() else None
    if viejo == data:
        informe.append(('igual', etiqueta))
        return
    informe.append(('nuevo' if viejo is None else 'cambia', etiqueta))
    if not COMPROBAR:
        ruta.parent.mkdir(parents=True, exist_ok=True)
        ruta.write_bytes(data)


def convertir(ruta, carpeta, plantilla, escritos):
    ciclos = int(CICLOS) if CICLOS else CICLOS_CONSULTA
    datos = exportar(ruta, PARTE, ciclos, todo=carpeta is not None)
    notas = a_ticks(datos['eventos'])
    if not notas:
        raise Fallo('«%s» no tiene notas (la percusión no cuenta)' % datos['parte'])
    p = int(CICLOS) if CICLOS else periodo(notas, ciclos)
    largo = p * TICKS_CICLO
    frase = [(t, n, v, min(d, largo - t)) for t, n, v, d in notas if t < largo]
    golpes = {}
    for t, _, v, d in frase:
        _, va, da = golpes.get(t, (0, 0, 0))
        golpes[t] = (NOTA_RITMO, max(v, va), max(d, da))
    ritmo = [(t, n, v, d) for t, (n, v, d) in sorted(golpes.items())]

    if carpeta is None:
        nombre = nombre_suelto(ruta, datos['parte'], PARTE is not None)
        salidas = {tipo: DESTINO / ('Sonar - %s %s' % (nombre, tipo)) for tipo in ('frase', 'ritmo')}
        formatos = ('ARP',)
    else:
        nombre = tallo(ruta) + (' %s' % datos['parte'].replace('$', 'bloque ') if PARTE else '')
        salidas = {tipo: ruta.parent / ('%s %s' % (nombre, tipo)) for tipo in ('frase', 'ritmo')}
        formatos = ('ARP', 'mid')
    for tipo, forma, lista in (('frase', 'Rhythm', frase), ('ritmo', 'Forward', ritmo)):
        for ext in formatos:
            destino = salidas[tipo].with_name(salidas[tipo].name + '.' + ext)
            if destino in escritos:
                raise Fallo('otro archivo ya escribe %s' % destino.name)
            escritos.add(destino)
            data = (F.arp(plantilla, '%s %s' % (nombre, tipo), lista, largo, forma) if ext == 'ARP'
                    else F.midi('%s %s' % (nombre, tipo), lista, largo, datos['cpm'] * 4))
            guardar(destino, data)

    print('%s · %s' % (ruta.relative_to(STRUDEL).as_posix() if ruta.is_relative_to(STRUDEL) else ruta.name, datos['parte']))
    print('    %d %s (%d pasos) · %g BPM en Strudel · %d notas en %d golpes'
          % (p, 'compás' if p == 1 else 'compases', largo // F.ARP_TICKS_PASO, datos['cpm'] * 4, len(frase), len(ritmo)))
    print('    frase: mantén %s para oírla en su tono' % nota(frase[0][1]))
    if largo // F.ARP_TICKS_PASO > PASOS_FABRICA:
        print('    ojo: es más largo que cualquier patrón de fábrica (%d pasos); no está comprobado que Sonar lo acepte'
              % PASOS_FABRICA)


def huerfanos(carpetas, escritos):
    """Salidas de una carpeta cuyo strudel ya no está (se renombró o se movió). No se borran."""
    for carpeta in carpetas:
        for ruta in sorted(carpeta.rglob('*')):
            m = SALIDA.search(ruta.name)
            if not m or ruta in escritos:
                continue
            base = ruta.name[:m.start()]
            if not any(tallo(js) == base or base.startswith(tallo(js) + ' ') for js in ruta.parent.glob('*.js')):
                yield ruta

# ================================================================ Sonar


def enlazar(enlace, carpeta):
    """enlace (en Arpeggiator Patterns) → carpeta de la bóveda. Si ya está enlazado, no hace nada."""
    etiqueta = 'Sonar: Arpeggiator Patterns/%s → %s' % (enlace.name, carpeta.relative_to(BOVEDA).as_posix())
    if enlace.is_junction():
        if os.path.normcase(os.path.realpath(enlace)) != os.path.normcase(str(carpeta)):
            sys.exit('%s ya enlaza con otra carpeta: %s' % (enlace, os.path.realpath(enlace)))
        informe.append(('igual', etiqueta))
        return
    if enlace.exists():
        sys.exit('%s ya existe y no es un enlace: muévela y vuelve a correr --instalar' % enlace)
    if os.name != 'nt':
        sys.exit('--instalar es solo para Windows: Sonar no existe en macOS')
    informe.append(('nuevo', etiqueta))
    if not COMPROBAR:
        carpeta.mkdir(parents=True, exist_ok=True)
        subprocess.run(['cmd', '/c', 'mklink', '/J', str(enlace), str(carpeta)], check=True, capture_output=True)

# ================================================================ principal


def main():
    if not PLANTILLA.exists():
        sys.exit('no encuentro la plantilla %s (¿está instalado Sonar? ¿CAKEWALK_CONTENT?)' % PLANTILLA)
    plantilla = PLANTILLA.read_bytes()
    assert F.leer_arp(plantilla)['forma'] == 'Forward', 'Forward.ARP no es la forma Forward'
    archivos = elegir()
    if PARTE and len(archivos) != 1:
        sys.exit('--parte es para un solo archivo')
    escritos, fallos = set(), []
    for ruta, carpeta in archivos:
        try:
            convertir(ruta, carpeta, plantilla, escritos)
        except Fallo as e:
            fallos.append((ruta, e))
    for ruta, e in fallos:
        print('se salta %s: %s' % (ruta.name, e))
    carpetas = {c for _, c in archivos if c is not None} | ({ARPEGIADORES} if not args and ARPEGIADORES.exists() else set())
    for ruta in huerfanos(sorted(carpetas), escritos):
        print('sin strudel (muévelo a _legacy/ si ya no sirve): %s' % relativa(ruta))
    if INSTALAR:
        for enlace, carpeta in ENLACES:
            enlazar(enlace, carpeta)

    for estado in ('nuevo', 'cambia'):
        lista = [e for s, e in informe if s == estado]
        if lista:
            print('%s (%d):' % (estado, len(lista)))
            for e in lista:
                print('   ', e)
    print('sin cambios: %d' % len([1 for s, _ in informe if s == 'igual']))
    if COMPROBAR:
        print('(--comprobar: no se escribió nada)')
    if fallos and len(archivos) == len(fallos):
        sys.exit(1)


if __name__ == '__main__':
    main()
