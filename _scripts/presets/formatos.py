"""
Los formatos de archivo, descifrados en 2026-09/10 (ver las notas de cada equipo en 8. Setup/).

    .spc      preset del SMC-PAD (MidiSuite): 3539 bytes, sin cabecera
    .labx     preset o banco de Analog Lab: ZIP sin comprimir con los presets y sus samples
    .labmidi  configuración MIDI de Analog Lab: XML; al importar solo acepta `paramid`
    .ARP      preset del arpegiador de Cakewalk Sonar: binario con un patrón de notas y los ajustes
    .mid      MIDI estándar (formato 0): no hay nada que descifrar, se escribe aquí para no depender de librerías
"""

import re
import struct
import time
import zipfile

# ================================================================ .spc
# botones 0x000 (5 x 23) · perillas 0x073 (16 x 6) · pads 0x0D3 (128 x 26) = 3539 bytes

SPC_TAMANO = 3539
BOTONES, PERILLAS, PADS = 0x000, 0x073, 0x0D3


def boton(modo, cc, mmc, canal=0, led=0xFF):
    """modo: 2 = CC Push, 3 = SysEx (MMC), 5 = Mackie."""
    r = bytes([modo, canal, cc, 0, 127, 6, 0xF0, 0x7F, 0x7F, 0x06, mmc, 0xF7]) + bytes(10) + bytes([led])
    assert len(r) == 23
    return r


def perilla(canal, cc):
    return bytes([0, 2, canal, cc, 0, 127])       # [velocidad, tipo CC, canal, CC, min, max]


def pad(canal, nota, rgb, vmin=1, vmax=127, tipo=0, led=0xFF):
    r, g, b = rgb
    return bytes([tipo, canal, nota, vmin, vmax, r, g, b, led]) + bytes(17)


def spc(botones, perillas, pads):
    out = b''.join(botones) + b''.join(perillas) + b''.join(pads)
    assert len(out) == SPC_TAMANO, len(out)
    return out


def leer_spc(data):
    """Devuelve (botones, perillas, pads) como tuplas, para documentar un .spc ya hecho."""
    assert len(data) == SPC_TAMANO
    botones = [data[i * 23:i * 23 + 23] for i in range(5)]
    perillas = [data[PERILLAS + k * 6:PERILLAS + k * 6 + 6] for k in range(16)]
    pads = [data[PADS + i * 26:PADS + i * 26 + 26] for i in range(128)]
    return botones, perillas, pads

# ================================================================ presets de Analog Lab (boost text archive)
# Cabecera: '22 serialization::archive 10 0 7 0 7 <nombre> <banco> <id instrumento> ...'
# Después, dos mapas: valores numéricos ('<len> <clave> <número>') y datos ('<len> <clave> <n> <n bytes>').


def leer_parametros(b):
    """Devuelve (pos_cuenta1, cuenta1, pos_cuenta2, cuenta2, entradas) con entradas = [(clave, tipo, inicio, fin)]."""
    m = re.search(rb' (\d+) 0 0 0 (?=23 AfterTouchControlAmount )', b)
    assert m, 'no encuentro el mapa de parámetros'
    cuenta1 = int(m.group(1)); pos = m.end(); entradas = []

    def clave(p):
        j = b.index(b' ', p); n = int(b[p:j]); k = b[j + 1:j + 1 + n]
        assert b[j + 1 + n:j + 2 + n] == b' ', (p, k)
        return k, j + 2 + n

    for _ in range(cuenta1):
        inicio = pos
        k, pos = clave(pos)
        j = b.index(b' ', pos)
        float(b[pos:j])
        entradas.append((k, 'num', inicio, j))
        pos = j + 1
    m2 = re.match(rb'(\d+) 0 ', b[pos:])
    assert m2, 'no encuentro el mapa de datos'
    pc2 = pos; cuenta2 = int(m2.group(1)); pos += m2.end()
    for i in range(cuenta2):
        inicio = pos
        k, pos = clave(pos)
        j = b.index(b' ', pos); n = int(b[pos:j]); fin = j + 1 + n
        entradas.append((k, 'datos', inicio, fin))
        pos = fin + 1 if i < cuenta2 - 1 else fin
    assert pos == len(b), 'sobran bytes al final del preset'
    return m.start(1), cuenta1, pc2, cuenta2, entradas


def comprobar_orden(entradas):
    for tipo in ('num', 'datos'):
        claves = [e[0] for e in entradas if e[1] == tipo]
        assert claves == sorted(claves) and len(set(claves)) == len(claves), 'mapa desordenado o repetido'


def i32(v):
    return struct.pack('<i', v)


def separar(raw):
    """Separa el preset del archivo de samples que añade la exportación (si lo hay)."""
    sep = raw.find(b'\n22 serialization::archive')
    return (raw[:sep], raw[sep + 1:]) if sep > 0 else (raw.rstrip(b'\r\n'), b'')


def cabecera(raw, nombre=None, banco=None, comentario=None):
    """Cambia nombre, banco y comentario; pone a 0 la bandera de fábrica y añade OriginalFactory,
    como hace la exportación de Analog Lab. Devuelve (nombre_original, banco_original, bytes)."""
    m = re.match(rb'22 serialization::archive 10 0 7 0 7 (\d+) ', raw)
    assert m, 'cabecera desconocida'
    n = int(m.group(1)); nom = raw[m.end():m.end() + n]; pos = m.end() + n
    pm = re.match(rb' (\d+) ', raw[pos:]); L = int(pm.group(1))
    ban = raw[pos + pm.end():pos + pm.end() + L]
    cola = raw[pos + pm.end() + L:]
    assert re.match(rb' (\d+) ', cola), 'no encuentro el id del instrumento'
    nuevo_nom = nombre if nombre is not None else nom
    nuevo_ban = banco if banco is not None else ban
    out = raw[:m.start(1)] + b'%d %s %d %s' % (len(nuevo_nom), nuevo_nom, len(nuevo_ban), nuevo_ban) + cola
    for mc in re.finditer(rb' ([01]) 0 (\d+) ', out[:3000]):
        c = int(mc.group(2)); t = out[mc.end() + c:mc.end() + c + 24]
        if re.match(rb' \d{9,10} \d+ ', t):
            com = out[mc.end():mc.end() + c] if comentario is None else comentario
            out = out[:mc.start()] + b' 0 0 %d %s' % (len(com), com) + out[mc.end() + c:]
            break
    if b' 16 OriginalPackName ' in out[:4000] and b'15 OriginalFactory ' not in out[:4000]:
        mm = re.search(rb' (\d+) 0 0 0 14 ALVersionFirst ', out[:4000])
        if mm:
            out = out[:mm.start(1)] + str(int(mm.group(1)) + 1).encode() + out[mm.end(1):]
            out = out.replace(b' 16 OriginalPackName ', b' 15 OriginalFactory 1 1 16 OriginalPackName ', 1)
    return nom, ban, out


def mapear_controles(a1, mapped, hw_mapped):
    """Fija qué hace cada control (HardwareControl0-19) en el preset y pone HardwareMappingChanged = 1:
    con 0 o sin él, Analog Lab pisa __Mapped__ con mapping.pref.xml al cargar."""
    pc1, c1, pc2, c2, ent = leer_parametros(a1)
    comprobar_orden(ent)
    claves = {e[0]: e for e in ent}
    out = bytearray(a1)
    cambios = {}
    for i in range(20):
        cambios[b'__Mapped__%d' % i] = i32(mapped[i])
        cambios[b'__HW_Mapped__%d' % i] = i32(hw_mapped[i])
    for k in sorted(cambios, key=lambda k: claves[k][2], reverse=True):
        _, tipo, s, e = claves[k]
        assert tipo == 'datos' and out[e - 6:e - 4] == b'4 '
        out[e - 4:e] = cambios[k]
    out = bytes(out)
    pc1, c1, pc2, c2, ent = leer_parametros(out)
    claves = {e[0]: e for e in ent}
    if b'HardwareMappingChanged' in claves:
        _, _, s, e = claves[b'HardwareMappingChanged']
        out = out[:s] + b'22 HardwareMappingChanged 1' + out[e:]
    else:
        sig = min((e for e in ent if e[1] == 'num' and e[0] > b'HardwareMappingChanged'), key=lambda e: e[0])
        out = out[:sig[2]] + b'22 HardwareMappingChanged 1 ' + out[sig[2]:]
        out = out[:pc1] + str(c1 + 1).encode() + out[pc1 + len(str(c1)):]
    pc1, c1b, pc2, c2b, ent = leer_parametros(out)
    comprobar_orden(ent)
    assert c2b == c2
    return out


def nombres_macros(raw):
    """Los nombres de las 4 macros que guarda el preset (si los guarda)."""
    out = []
    for i in range(1, 5):
        m = re.search(rb'\d+ __Macro%d_Name (\d+) ' % i, raw)
        out.append(raw[m.end():m.end() + int(m.group(1))].split(b'\x00')[0].decode('latin-1') if m else '')
    return out


def archivo_samples(rutas, leer):
    """El segundo archivo que añade la exportación: cada sample con su ruta y sus bytes."""
    partes = [b'22 serialization::archive 10 0 0 %d 1 0 1' % len(rutas)]
    for r in rutas:
        d = leer(r)
        partes.append(b'%d %s %d ' % (len(r), r, len(d)) + d)
    return b' '.join(partes) + b'\n'


def rutas_samples(a1):
    rutas = []
    for z in range(1, 9):
        m = re.search(rb'KeyboardZone%d_AudioSampleObject (\d+) ' % z, a1)
        if not m:
            continue
        blob = a1[m.end():m.end() + int(m.group(1))]
        r = re.search(rb'(Factory/[^\x00]+?\.wav)', blob)
        if r:
            rutas.append(r.group(1))
    return rutas

# ================================================================ .labx


def escribir_labx(ruta, entradas, png_nombre, png):
    fecha = time.localtime()[:6]
    with zipfile.ZipFile(ruta, 'w', zipfile.ZIP_STORED) as z:
        for nombre, data in list(entradas) + [(png_nombre, png)]:
            zi = zipfile.ZipInfo(nombre, date_time=fecha)
            zi.compress_type = zipfile.ZIP_STORED
            zi.create_system = 0
            z.writestr(zi, data)


def contenido_labx(ruta):
    """Para comparar: {entrada: bytes}, sin fechas."""
    with zipfile.ZipFile(ruta) as z:
        return {i.filename: z.read(i.filename) for i in z.infolist()}

# ================================================================ .labmidi


def labmidi(nombre, asignaciones):
    x = '<?xml version="1.0" encoding="utf-8"?>\n<rootnode>\n\t<midiconfig name="%s" factory="0">\n' % nombre
    x += ''.join('\t\t<assignment controller="%d" paramid="%d" channel="0"/>\n' % (cc, pid) for cc, pid, _ in sorted(asignaciones))
    return x + '\t</midiconfig>\n</rootnode>\n'

# ================================================================ .ARP
# Descifrado sobre los 521 de fábrica (C:/Cakewalk Content/Sonar/Arpeggiator Patterns); las relaciones
# de tamaño se cumplen en todos. Enteros little-endian, 960 ticks por negra.
#
#   0x00  u32  tamaño del archivo             0x5d  u32  tamaño − 165        0x69  u32  tamaño − 177
#   0x29  u32  pasos de semicorchea del bucle 0x39  f32  forma (ARP_FORMAS)
#   0x75  u32  bloque del patrón: 10 + 4 + nombre + 4 + registros + 8
#   0x83  u32  largo del bucle en ticks (1 si el preset no trae patrón)
#   0x87  u32  largo del nombre con su \0, y el nombre (ANSI)
#   …     u32  cuántos registros, y los registros: [u32 tamaño][u32 0][…]. Las notas miden 61;
#              hay otros de 52, 33, 28 y 51 bytes que no son notas
#   …     8 bytes 10 00 00 00 00 00 00 00 y el resto de ajustes, que se copia de la plantilla
#
# Sin descifrar (se copian de la plantilla): los floats de 0x31 a 0x5c que no son la forma. Por los
# valores de fábrica, 0x45 y 0x49 (100) parecen *Velocity* y *Duration*, y 0x3d (2 o 3) *Octave Range*.

ARP_FORMAS = ['Rhythm', 'Forward', 'Reverse', 'Forward Circle 1', 'Reverse Circle 1', 'Forward Circle 2',
              'Reverse Circle 2', 'Inward', 'Outward', 'Inward Circle', 'Outward Circle', 'As Played',
              'As Played Circle', 'Random']
ARP_TICKS_PASO = 240                       # una semicorchea
_ARP_NOTA_CABEZA = bytes.fromhex('3d00000000000000010004602100000000000000000004600000000000')
_ARP_NOTA_COLA = bytes.fromhex('00000000100000000000000001000460' '00f01200')
_ARP_FIN = bytes.fromhex('1000000000000000')


def _u32(b, o):
    return struct.unpack_from('<I', b, o)[0]


def _registros(data):
    """(inicio de los registros, fin de los registros, [(tamaño, bytes)])."""
    L = _u32(data, 0x87)
    pos = 0x8b + L
    n = _u32(data, pos)
    pos += 4
    inicio, regs = pos, []
    for _ in range(n):
        t = _u32(data, pos)
        assert _u32(data, pos + 4) == 0 and 8 < t < 200, 'registro desconocido en %#x' % pos
        regs.append((t, data[pos:pos + t]))
        pos += t
    assert data[pos:pos + 8] == _ARP_FIN, 'no encuentro el final de los registros'
    return inicio, pos, regs


def leer_arp(data):
    """{nombre, forma, largo, notas: [(tiempo, nota, velocidad, duración)]}, para comprobar uno hecho."""
    _, _, regs = _registros(data)
    L = _u32(data, 0x87)
    notas = [(_u32(r, 37), r[30], r[31], _u32(r, 33)) for t, r in regs if t == 61]
    return dict(nombre=data[0x8b:0x8b + L - 1].decode('cp1252'), forma=ARP_FORMAS[round(struct.unpack_from('<f', data, 0x39)[0])],
                largo=_u32(data, 0x83), notas=notas)


def arp(plantilla, nombre, notas, largo, forma):
    """Un .ARP con estas notas, sobre los ajustes de `plantilla` (los bytes de un .ARP de fábrica).
    notas: [(tiempo, nota, velocidad, duración)] en ticks; largo: el bucle en ticks; forma: de ARP_FORMAS."""
    assert largo % ARP_TICKS_PASO == 0, 'el bucle tiene que medir semicorcheas enteras'
    _, fin, _ = _registros(plantilla)
    nom = nombre.encode('cp1252') + b'\0'
    regs = b''.join(_ARP_NOTA_CABEZA + bytes([0, n, v, 0]) + struct.pack('<II', d, t) + _ARP_NOTA_COLA
                    for t, n, v, d in sorted(notas))
    out = bytearray(plantilla[:0x87] + struct.pack('<I', len(nom)) + nom + struct.pack('<I', len(notas)) + regs + plantilla[fin:])
    for o, v in ((0x00, len(out)), (0x5d, len(out) - 165), (0x69, len(out) - 177), (0x75, len(nom) + len(regs) + 26),
                 (0x83, largo), (0x29, largo // ARP_TICKS_PASO)):
        struct.pack_into('<I', out, o, v)
    struct.pack_into('<f', out, 0x39, float(ARP_FORMAS.index(forma)))
    out = bytes(out)
    hecho = leer_arp(out)
    assert hecho['notas'] == sorted(notas) and hecho['largo'] == largo and hecho['nombre'] == nombre, 'el .ARP no se relee igual'
    return out

# ================================================================ .mid
# Una pista en el canal 1, a 960 ticks por negra como el .ARP, con tempo y compás de 4/4.
# El final de pista cae en el final del bucle, para que al arrastrarlo a un DAW repita bien.

MID_TICKS = 960


def _vlq(n):
    """Número de longitud variable de MIDI: 7 bits por byte, el bit alto dice que sigue otro."""
    out = [n & 0x7F]
    while n > 0x7F:
        n >>= 7
        out.append(0x80 | (n & 0x7F))
    return bytes(reversed(out))


def midi(nombre, notas, largo, bpm):
    """Un .mid con estas notas: [(tiempo, nota, velocidad, duración)] en ticks; largo: el bucle en ticks."""
    nom = nombre.encode('utf-8')
    eventos = [(0, 0, b'\xff\x03' + _vlq(len(nom)) + nom),
               (0, 0, b'\xff\x51\x03' + round(60_000_000 / bpm).to_bytes(3, 'big')),
               (0, 0, b'\xff\x58\x04\x04\x02\x18\x08')]
    for t, n, v, d in notas:                           # a la misma altura y el mismo tick, el apagado va primero
        eventos += [(t, 2, bytes([0x90, n, v])), (t + d, 1, bytes([0x80, n, 0]))]
    eventos.sort(key=lambda e: (e[0], e[1]))
    pista, antes = b'', 0
    for t, _, ev in eventos:
        pista += _vlq(t - antes) + ev
        antes = t
    pista += _vlq(max(largo, antes) - antes) + b'\xff\x2f\x00'
    return (b'MThd' + struct.pack('>IHHH', 6, 0, 1, MID_TICKS)
            + b'MTrk' + struct.pack('>I', len(pista)) + pista)
