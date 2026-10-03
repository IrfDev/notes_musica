#!/usr/bin/env python3
"""
Genera los presets de los equipos y sus notas, a partir del catálogo de _scripts/presets/.

    _scripts/presets/smcpad.py      <- los 8 presets del SMC-PAD
    _scripts/presets/analoglab.py   <- los bancos de sonidos de Analog Lab y su configuración MIDI
    _scripts/presets/areas.py       <- las áreas: montajes para crear (Beats, Canción…)

Escribe:
    8. Setup/3. Configuraciones/    lo que se carga en cada programa (.spc, .labx, .labmidi)
    8. Setup/4. Presets/            una nota por preset del SMC-PAD y por banco de Analog Lab
    8. Setup/5. Áreas/              una nota por área

El catálogo es la única fuente de verdad: para cambiar un preset, se cambia el catálogo y se
regenera. De las notas generadas se conservan el campo `estado` y la sección «## Notas propias».
Un archivo solo se reescribe si su contenido cambia (los .labx se comparan sin las fechas del ZIP).

Para los .labx hacen falta los presets y samples de fábrica de Arturia (Windows: C:/ProgramData/Arturia,
macOS: /Library/Arturia; o la variable ARTURIA_DIR) y la exportación real
8. Setup/3. Configuraciones/Analog Lab V/default.labx. El P6 sale de MidiSuite (bin/SPB.bin; o MIDISUITE_BIN).
Si algo de eso falta, ese archivo se deja como está.

Uso:
    ./_scripts/generar-presets.py               # archivos y notas
    ./_scripts/generar-presets.py --notas       # solo las notas
    ./_scripts/generar-presets.py --comprobar   # dice qué cambiaría, sin escribir nada
"""

import os
import sys
import zipfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from presets import analoglab as AL      # noqa: E402
from presets import areas as AR          # noqa: E402
from presets import formatos as F        # noqa: E402
from presets import notas as N           # noqa: E402
from presets import smcpad as S          # noqa: E402

BOVEDA = Path(__file__).resolve().parent.parent
CONF = BOVEDA / '8. Setup' / '3. Configuraciones'
DIR_SMC = CONF / 'M-VAVE SMC-PAD'
DIR_AL = CONF / 'Analog Lab V'
ARTURIA = Path(os.environ.get('ARTURIA_DIR') or ('C:/ProgramData/Arturia' if os.name == 'nt' else '/Library/Arturia'))
SPB = Path(os.environ.get('MIDISUITE_BIN') or Path.home() / 'Downloads/MidiSuite/MidiSuite/bin/SPB.bin')

COMPROBAR = '--comprobar' in sys.argv
SOLO_NOTAS = '--notas' in sys.argv
informe = []

# ================================================================ escribir solo si cambia


def guardar(ruta, data, etiqueta=None):
    etiqueta = etiqueta or ruta.relative_to(BOVEDA).as_posix()
    viejo = ruta.read_bytes() if ruta.exists() else None
    if viejo == data:
        informe.append(('igual', etiqueta)); return
    informe.append(('nuevo' if viejo is None else 'cambia', etiqueta))
    if not COMPROBAR:
        ruta.parent.mkdir(parents=True, exist_ok=True)
        ruta.write_bytes(data)


def guardar_labx(ruta, entradas, png):
    etiqueta = ruta.relative_to(BOVEDA).as_posix()
    nuevo = dict(entradas); nuevo[png[0]] = png[1]
    if ruta.exists() and F.contenido_labx(ruta) == nuevo:
        informe.append(('igual', etiqueta)); return
    informe.append(('nuevo' if not ruta.exists() else 'cambia', etiqueta))
    if not COMPROBAR:
        F.escribir_labx(ruta, entradas, png[0], png[1])


def guardar_nota(rel, texto):
    ruta = BOVEDA / (rel + '.md')
    guardar(ruta, N.conservar(ruta, texto).encode('utf-8'), rel + '.md')

# ================================================================ SMC-PAD


def cercano(rgbv):
    mejor = None
    for nombre, (c, _) in S.COLORES.items():
        for apagado in (False, True):
            cc = tuple(v // 3 for v in c) if apagado else c
            d = sum((a - b) ** 2 for a, b in zip(cc, rgbv))
            if mejor is None or d < mejor[0]:
                mejor = (d, nombre, apagado)
    return mejor[1], mejor[2]


MCU = {**{i: 'Rec %d' % (i + 1) for i in range(8)}, **{8 + i: 'Solo %d' % (i + 1) for i in range(8)},
       **{16 + i: 'Mute %d' % (i + 1) for i in range(8)}, **{24 + i: 'Select %d' % (i + 1) for i in range(8)}}


def preset_de_fabrica(p):
    """El P6 se copia de SPB.bin; sus pads se leen del archivo para documentarlo."""
    destino = DIR_SMC / p['archivo']
    if SPB.exists():
        spb = SPB.read_bytes(); n = p['fabrica'] - 1
        data = spb[n * F.SPC_TAMANO:(n + 1) * F.SPC_TAMANO]
    elif destino.exists():
        data = destino.read_bytes()
    else:
        return None
    _, _, pads = F.leer_spc(data)
    bancos = []
    for b in range(8):
        lista = []
        for r in pads[b * 16:(b + 1) * 16]:
            c, d = cercano(tuple(r[5:8]))
            etq = ('%s · %d' % (MCU[r[2]], r[2])) if r[0] == 4 and r[2] in MCU else '%s · %d' % (S.nn(r[2]), r[2])
            lista.append(S.P(r[1], r[2], c, d, etq))
        titulo, desc = p['titulos_pads'].get(b, ('Notas de fábrica', 'Notas normales por el canal 10 (las de fábrica).'))
        bancos.append(dict(titulo=titulo, desc=desc, pads=lista))
    p['pads'] = bancos
    return data


def construir_spc(p):
    botones = [F.boton(m, cc, x, ch) for _, m, ch, cc, x, _ in p['botones']]
    perillas = [F.perilla(ch, cc) for ch, cc, _ in p['perillas_a'] + p['perillas_b']]
    pads = [F.pad(x['canal'], x['nota'], S.rgb(x['color'], x['apagado']), S.VEL_MIN, S.VEL_MAX)
            for b in p['pads'] for x in b['pads']]
    assert len(p['pads']) == 8 and all(len(b['pads']) == 16 for b in p['pads']), p['nombre']
    return F.spc(botones, perillas, pads)

# ================================================================ Analog Lab


def leer_fabrica(instrumento, nombre):
    return (ARTURIA / 'Presets' / AL.INSTRUMENTOS[instrumento] / 'Factory' / 'Factory' / nombre).read_bytes()


def banco_beatmaker(b):
    exp = zipfile.ZipFile(DIR_AL / AL.BM_EXPORTACION[0])
    png = ('%s.png' % b['nombre'], exp.read('Factory.png'))
    entradas, filas = [], []
    for fuente, nuevo, voces, porque in AL.BM_KITS:
        raw = exp.read(AL.BM_EXPORTACION[1]) if fuente == '707 Airline Kit' else leer_fabrica('Emulator II', fuente)
        a1, _ = F.separar(raw)
        nom, _, a1 = F.cabecera(a1, nuevo.encode(), b['nombre'].encode(), (AL.BM_COMENTARIO % (fuente, voces)).encode())
        assert nom == fuente.encode(), (nom, fuente)
        a1 = F.mapear_controles(a1, AL.BM_MAPPED, AL.BM_HW_MAPPED)
        sam = F.archivo_samples(F.rutas_samples(a1), lambda r: (ARTURIA / 'Samples' / 'Emulator II V' / r.decode()).read_bytes())
        entradas.append(('Emulator II/User/%s/%s' % (b['nombre'], nuevo), a1 + b'\n' + sam))
        filas.append((nuevo, 'Emulator II', porque, F.nombres_macros(a1),
                      '1–8 volumen de cada voz (%s) · 9 afinación del bombo' % voces.replace(' ', ', ')))
    return entradas, png, filas


def banco_copias(b):
    png = ('%s.png' % b['nombre'], zipfile.ZipFile(DIR_AL / AL.BM_EXPORTACION[0]).read('Factory.png'))
    entradas, filas = [], []
    for nombre, ins, porque in b['presets']:
        raw = leer_fabrica(ins, nombre)
        assert b'AudioSampleObject' not in raw and b'.wav' not in raw, ('depende de samples', nombre)
        nom, _, data = F.cabecera(raw, banco=b['nombre'].encode())
        assert nom.decode() == nombre, (nom, nombre)
        entradas.append(('%s/User/%s/%s' % (ins, b['nombre'], nombre), data))
        filas.append((nombre, ins, porque, F.nombres_macros(raw), N.faders_de(ins, AL.FADERS)))
    return entradas, png, filas


def filas_sin_arturia(b):
    """Si no están los archivos de fábrica, la nota se escribe igual, sin macros."""
    if b.get('tipo') == 'beatmaker':
        return [(nuevo, 'Emulator II', porque, [], '1–8 volumen de cada voz (%s) · 9 afinación del bombo' % voces.replace(' ', ', '))
                for _, nuevo, voces, porque in AL.BM_KITS]
    return [(n, i, q, [], N.faders_de(i, AL.FADERS)) for n, i, q in b['presets']]

# ================================================================ principal


def main():
    hay_arturia = (ARTURIA / 'Presets').exists() and (DIR_AL / AL.BM_EXPORTACION[0]).exists()
    por_ranura = {p['ranura']: p for p in S.PRESETS}
    bancos = {b['nombre']: b for b in AL.BANCOS}

    # --- SMC-PAD
    for p in S.PRESETS:
        data = preset_de_fabrica(p) if p.get('fabrica') else construir_spc(p)
        if data is not None and not SOLO_NOTAS:
            guardar(DIR_SMC / p['archivo'], data)

    # --- Analog Lab
    filas_banco = {}
    for b in AL.BANCOS:
        if hay_arturia:
            entradas, png, filas = banco_beatmaker(b) if b.get('tipo') == 'beatmaker' else banco_copias(b)
            if not SOLO_NOTAS:
                guardar_labx(DIR_AL / ('Analog Lab V - %s.labx' % b['nombre']), entradas, png)
        else:
            filas = filas_sin_arturia(b)
            informe.append(('sin Arturia', 'Analog Lab V - %s.labx' % b['nombre']))
        filas_banco[b['nombre']] = filas
    if not SOLO_NOTAS:
        guardar(DIR_AL / ('Analog Lab V - %s.labmidi' % AL.LABMIDI_NOMBRE), F.labmidi(AL.LABMIDI_NOMBRE, AL.LABMIDI).encode('utf-8'))

    # --- notas
    for p in S.PRESETS:
        if p['pads'] is not None:
            guardar_nota(N.nota_smc(p), N.texto_smc(p, bancos, AR.AREAS))
    for b in AL.BANCOS:
        smc = [p for p in S.PRESETS if b['nombre'] in p['bancos']]
        areas = [a for a in AR.AREAS if b['nombre'] in a['bancos']]
        guardar_nota(N.nota_banco(b), N.texto_banco(b, filas_banco[b['nombre']], smc, areas, AL.FADERS))
    for a in AR.AREAS:
        guardar_nota(N.nota_area(a), N.texto_area(a, bancos, por_ranura, AR.ANTES))

    # --- informe
    for estado in ('nuevo', 'cambia', 'sin Arturia', 'igual'):
        lista = [e for s, e in informe if s == estado]
        if lista and estado != 'igual':
            print('%s (%d):' % (estado, len(lista)))
            for e in lista:
                print('   ', e)
    print('sin cambios: %d' % len([1 for s, _ in informe if s == 'igual']))
    if COMPROBAR:
        print('(--comprobar: no se escribió nada)')


if __name__ == '__main__':
    main()
