"""
Catálogo: los 8 presets del M-VAVE SMC-PAD.

Cada pad es un dict (canal, nota, color, apagado, etiqueta). Los colores siguen un solo idioma
en todos los presets (ver COLORES y las leyendas de las notas).
"""

# ================================================================ colores
# Paleta limitada a lo que se puede dibujar con emoji en las notas.
COLORES = {
    'rojo': ((0xFF, 0, 0), '🟥'), 'naranja': ((0xFF, 0x55, 0), '🟧'), 'amarillo': ((0xFF, 0xFF, 0), '🟨'),
    'verde': ((0, 0xFF, 0), '🟩'), 'azul': ((0, 0x55, 0xFF), '🟦'), 'morado': ((0xAA, 0, 0xFF), '🟪'),
    'blanco': ((0xF0, 0xF0, 0xF0), '⬜'), 'gris': ((0x50, 0x50, 0x50), '⬛'),
}


def rgb(color, apagado=False):
    c = COLORES[color][0]
    return tuple(v // 3 for v in c) if apagado else c


def emoji(color, apagado=False):
    return '(%s)' % COLORES[color][1] if apagado else COLORES[color][1]

# ================================================================ nombres de notas y de batería
NOTAS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']


def nn(n):
    return '%s%d' % (NOTAS[n % 12], n // 12 - 1)          # C4 = 60, como MuseScore y MidiSuite


GM = {27: 'High Q', 28: 'Slap', 29: 'Scratch ↑', 30: 'Scratch ↓', 31: 'Baquetas', 32: 'Clic cuadrado',
      33: 'Metrónomo', 34: 'Campana metrón.', 35: 'Bombo 2', 36: 'Bombo', 37: 'Aro', 38: 'Caja',
      39: 'Palmas', 40: 'Caja 2', 41: 'Tom piso grave', 42: 'Hi-hat cerrado', 43: 'Tom piso agudo',
      44: 'Hi-hat pedal', 45: 'Tom grave', 46: 'Hi-hat abierto', 47: 'Tom medio', 48: 'Tom medio agudo',
      49: 'Crash', 50: 'Tom agudo', 51: 'Ride', 52: 'China', 53: 'Campana ride', 54: 'Pandereta',
      55: 'Splash', 56: 'Cencerro', 57: 'Crash 2', 58: 'Vibraslap', 59: 'Ride 2', 60: 'Bongó agudo',
      61: 'Bongó grave', 62: 'Conga apagada', 63: 'Conga aguda', 64: 'Conga grave', 65: 'Timbal agudo',
      66: 'Timbal grave', 67: 'Agogó agudo', 68: 'Agogó grave', 69: 'Cabasa', 70: 'Maracas',
      71: 'Silbato corto', 72: 'Silbato largo', 73: 'Güiro corto', 74: 'Güiro largo', 75: 'Claves',
      76: 'Woodblock agudo', 77: 'Woodblock grave', 78: 'Cuíca apagada', 79: 'Cuíca abierta',
      80: 'Triángulo apagado', 81: 'Triángulo', 82: 'Shaker', 83: 'Cascabeles', 84: 'Belltree',
      85: 'Castañuelas', 86: 'Surdo apagado', 87: 'Surdo abierto'}


def color_gm(n):
    if n in (35, 36): return ('rojo', False)
    if n in (37, 38, 39, 40): return ('naranja', False)
    if n in (42, 44): return ('amarillo', False)
    if n == 46: return ('amarillo', True)
    if n in (41, 43, 45, 47, 48, 50): return ('azul', False)
    if n in (49, 51, 52, 53, 55, 57, 59): return ('blanco', False)
    if 60 <= n <= 68: return ('verde', False)
    if n in (54, 56, 58) or 69 <= n <= 82: return ('morado', False)
    return ('gris', False)

# Zonas de los kits de Emulator II (las mismas en los 5 kits del banco Beat Maker)
ZONAS = [(0, 41), (42, 47), (48, 53), (54, 59), (60, 65), (66, 71), (72, 77), (78, 127)]
RAICES = [36, 42, 48, 54, 60, 66, 72, 78]
COLOR_ZONA = ['rojo', 'naranja', 'amarillo', 'verde', 'azul', 'morado', 'blanco', 'gris']


def zona(n):
    return next(i for i, (lo, hi) in enumerate(ZONAS) if lo <= n <= hi)


def etiqueta_zona(n):
    z = zona(n); d = n - RAICES[z]
    return 'Z%d' % (z + 1) if d == 0 else 'Z%d %+d' % (z + 1, d)


def color_tecla(n, blanca='blanco', negra='azul'):
    if n % 12 == 0: return ('verde', False)
    if n % 12 in (1, 3, 6, 8, 10): return (negra, negra == blanca)
    return (blanca, False)

# ================================================================ pads


def P(canal, nota, color, apagado, etiqueta):
    return dict(canal=canal, nota=nota, color=color, apagado=apagado, etiqueta=etiqueta)


def gm(n, canal=9):
    c, d = color_gm(n)
    return P(canal, n, c, d, '%s · %d' % (GM.get(n, '—'), n))


def zn(n, brillante=True, canal=9):
    return P(canal, n, COLOR_ZONA[zona(n)], not brillante, '%s · %d' % (etiqueta_zona(n), n))


def nota(n, canal=0, blanca='blanco', negra='azul'):
    c, d = color_tecla(n, blanca, negra)
    return P(canal, n, c, d, '%s · %d' % (nn(n), n))


def cuartas(base, traste):
    return [base + 5 * fila + traste + col for fila in range(4) for col in range(4)]


def columnas(notas):
    return [notas[i % 4] for i in range(16)]

# ================================================================ botones y perillas comunes
# (botón, modo, canal, cc, mmc, qué hace). modo: 2 CC Push, 3 SysEx (MMC), 5 Mackie.
BOTONES_AL = [
    ('<', 2, 0, 28, 0x05, 'CC 28 → Analog Lab: preset **anterior**'),
    ('>', 2, 0, 29, 0x04, 'CC 29 → Analog Lab: preset **siguiente**'),
    ('▶', 3, 0, 119, 0x02, 'MMC Play → el DAW arranca'),
    ('■', 3, 0, 119, 0x01, 'MMC Stop → el DAW para'),
    ('●', 3, 0, 119, 0x06, 'MMC Record → el DAW graba'),
]
PERILLAS_A = [(0, 74, 'Brightness (macro 1)'), (0, 71, 'Timbre (macro 2)'), (0, 76, 'Time (macro 3)'),
              (0, 77, 'Movement (macro 4)'), (0, 93, 'FX A'), (0, 19, 'Delay'), (0, 16, 'Reverb'),
              (0, 17, 'Master (volumen)')]
PERILLAS_B = [(0, 73, 'fader 1'), (0, 75, 'fader 2'), (0, 79, 'fader 3'), (0, 72, 'fader 4'),
              (0, 80, 'fader 5'), (0, 81, 'fader 6'), (0, 82, 'fader 7'), (0, 83, 'fader 8')]

VEL_MIN, VEL_MAX = 1, 127          # dinámica completa en todos los pads (pedido el 2026-10-02)

# El banco 3 del P2 anterior (archivado en _legacy/Setup SMC-PAD 2026-10/): el kit GM de siempre.
GM_CLASICO = [36, 38, 42, 46, 39, 37, 41, 45, 47, 49, 51, 54, 56, 60, 62, 64]
KIT_DEDOS_GM = [36, 38, 39, 42, 36, 38, 39, 42, 46, 54, 49, 56, 41, 45, 48, 50]
KIT_EMU = [36, 42, 48, 54, 36, 42, 48, 54, 60, 66, 72, 78, 41, 45, 51, 57]

# ================================================================ los 8 presets
PRESETS = []

PRESETS.append(dict(ranura=1, nombre='Batería GM', archivo='SMC-PAD - P1 Batería GM.spc', tipo='bateria',
    para='Tocar batería **General MIDI**: *General MIDI Drums* de Cakewalk Next, la percusión de MuseScore, '
         'Strudel hacia Sonar con un kit GM, o cualquier caja de ritmos que siga el estándar.',
    sonidos='No hay kits General MIDI en tu Analog Lab: los kits de Emulator II reparten el teclado por zonas. '
            'Con este preset suena **General MIDI Drums** de Next (o la percusión de MuseScore). '
            'Para batería en Analog Lab, usa el P3 Beat Maker.',
    bancos=[], botones=BOTONES_AL, perillas_a=PERILLAS_A, perillas_b=PERILLAS_B,
    pads=[
        dict(titulo='Kit para dedos', desc='Filas 1 y 2 iguales (bombo, caja, palmas, hi-hat) para alternar dos dedos; fila 3 hi-hat abierto, pandereta, crash y cencerro; fila 4 los toms.',
             pads=[gm(n) for n in KIT_DEDOS_GM]),
        dict(titulo='Kit GM clásico', desc='El banco 3 del P2 de siempre, con sus mismas notas.', pads=[gm(n) for n in GM_CLASICO]),
        dict(titulo='Toms y platos', desc='Bombo 2, los seis toms, aro y hi-hat de pedal; abajo, todos los platos.',
             pads=[gm(n) for n in [35, 41, 43, 45, 47, 48, 50, 37, 44, 49, 57, 55, 52, 51, 59, 53]]),
        dict(titulo='Percusión', desc='Bongós, congas, timbales y agogó; luego cabasa, maracas, güiro, claves, woodblocks y triángulos.',
             pads=[gm(n) for n in [60, 61, 62, 63, 64, 65, 66, 67, 69, 70, 73, 75, 76, 77, 80, 81]]),
        dict(titulo='Mapa GM 35–50', desc='Todo el mapa General MIDI en orden, para encontrar cualquier sonido.', pads=[gm(n) for n in range(35, 51)]),
        dict(titulo='Mapa GM 51–66', desc='Continuación del mapa.', pads=[gm(n) for n in range(51, 67)]),
        dict(titulo='Mapa GM 67–82', desc='Continuación del mapa.', pads=[gm(n) for n in range(67, 83)]),
        dict(titulo='Extras GM2', desc='Los sonidos que añade General MIDI 2 (metrónomo, baquetas, scratch, castañuelas, surdo…). Si tu sinte es GM1, no suenan.',
             pads=[gm(n) for n in [27, 28, 29, 30, 31, 32, 33, 34, 83, 84, 85, 86, 87, 54, 56, 58]]),
    ]))

PRESETS.append(dict(ranura=2, nombre='Bajo', archivo='SMC-PAD - P2 Bajo.spc', tipo='notas',
    para='Tocar **líneas de bajo** con un sonido de bajo de Analog Lab. Los bancos 1–4 son el mástil de un bajo de '
         'cuatro cuerdas: lo que sabes de la guitarra (las cuatro cuerdas graves) se traslada tal cual, una octava abajo.',
    sonidos='Banco **Bajo** de Analog Lab.', bancos=['Bajo'],
    botones=BOTONES_AL, perillas_a=PERILLAS_A, perillas_b=PERILLAS_B,
    pads=[dict(titulo='Mástil, trastes %d–%d' % (f, f + 3),
               desc='Cada fila es una cuerda: mi (abajo), la, re, sol (arriba). Cada pad sube un semitono.',
               pads=[nota(n) for n in cuartas(28, f)]) for f in (0, 4, 8, 12)] +
         [dict(titulo='Cromático desde %s' % nn(lo), desc='16 semitonos seguidos, cuatro por fila.',
               pads=[nota(n) for n in range(lo, lo + 16)]) for lo in (12, 24, 36, 48)]))

PRESETS.append(dict(ranura=3, nombre='Beat Maker', archivo='SMC-PAD - P3 Beat Maker.spc', tipo='bateria',
    para='Hacer **beats** con los kits de Emulator II del banco **Beat Maker** de Analog Lab: el banco 1 de pads '
         'toca sus 8 zonas, y el banco B de perillas es un mezclador con el volumen de cada sonido.',
    sonidos='Banco **Beat Maker** de Analog Lab: 5 kits.', bancos=['Beat Maker'],
    botones=BOTONES_AL, perillas_a=PERILLAS_A,
    perillas_b=[(0, cc, 'fader %d = volumen de la voz %d' % (i + 1, i + 1)) for i, (_, cc, _) in enumerate(PERILLAS_B)],
    pads=[
        dict(titulo='Kit de Emulator II', desc='Fila 1 las zonas 1–4; fila 2 las mismas (dos dedos); fila 3 las zonas 5–8; fila 4 las zonas 1–4 afinadas hacia arriba (color apagado).',
             pads=[zn(n, i < 12) for i, n in enumerate(KIT_EMU)]),
        dict(titulo='Bombo afinado', desc='La zona 1 cromática: el bombo de −10 a +5 semitonos. La raíz (36) en brillante.',
             pads=[zn(n, n == 36) for n in range(26, 42)]),
        dict(titulo='Kit GM clásico', desc='El banco 3 del P2 de siempre (General MIDI), para Next o MuseScore sin cambiar de preset.',
             pads=[gm(n) for n in GM_CLASICO]),
        dict(titulo='Percusión GM', desc='General MIDI 52–67: platos, pandereta, cencerro, bongós, congas, timbales.',
             pads=[gm(n) for n in range(52, 68)]),
    ] + [dict(titulo='Notas desde %s (canal 1)' % nn(lo), desc='Para tocar otro preset sin cambiar de ranura.',
              pads=[nota(n) for n in range(lo, lo + 16)]) for lo in (36, 52, 68)] + [
        dict(titulo='Zonas afinadas', desc='42–57 seguidos: la zona 2 completa, la 3 completa y la 4 hasta +3. Las raíces en brillante. Para redobles que suben.',
             pads=[zn(n, n in RAICES) for n in range(42, 58)]),
    ]))

PRESETS.append(dict(ranura=4, nombre='Teclas', archivo='SMC-PAD - P4 Teclas.spc', tipo='notas',
    para='Tocar **pianos, pianos eléctricos, órganos, cuerdas y pads** de Analog Lab, como el *E.P 7070* de la pista *SMC pad* '
         'de Sonar. Los bancos 1–4 están en cuartas: tus formas de acordes y escalas de guitarra funcionan igual.',
    sonidos='Bancos **Teclas** y **Pads** para tocar acordes y melodías; **Leads** para melodías; **Arpegiadores** para que '
            'el arpegio lo haga Analog Lab; **Texturas** y **FX** para fondos y transiciones.',
    bancos=['Teclas', 'Pads', 'Leads', 'Arpegiadores', 'Texturas', 'FX'],
    extra='**Con los Arpegiadores:** mantén pulsado un pad (o varios, para arpegiar un acorde) y el arpegio sigue el tempo '
          '(el de Sonar, o el de la barra de arriba de Analog Lab si lo usas solo). Al soltar, para. Para que siga sonando sin '
          'mantener: botón **Hold** del arpegiador de Analog Lab, o **Latch** en Glob del SMC-PAD. Los cuatro primeros usan el '
          'arpegiador de Analog Lab (ahí puedes cambiar modo, velocidad y octavas); los otros cuatro traen su propia secuencia.',
    botones=BOTONES_AL, perillas_a=PERILLAS_A, perillas_b=PERILLAS_B,
    pads=[dict(titulo='Cuartas desde %s, trastes %d–%d' % (nn(base), f, f + 3),
               desc='Cada fila sube una cuarta (5 semitonos), como las cuerdas mi-la-re-sol; cada pad, un semitono.',
               pads=[nota(n) for n in cuartas(base, f)]) for base in (40, 52) for f in (0, 4)] +
         [dict(titulo='Cromático desde %s' % nn(lo), desc='16 semitonos seguidos, cuatro por fila (como un MPC).',
               pads=[nota(n) for n in range(lo, lo + 16)]) for lo in (36, 48, 60, 72)]))

PRESETS.append(dict(ranura=5, nombre='Ritmo', archivo='SMC-PAD - P5 Ritmo.spc', tipo='bateria',
    para='Practicar **lectura rítmica** (el curso [[2. Cursos/2. Udemy - Lectura rítmica/00. Curso|Lectura rítmica]]): '
         'tocar los ejercicios con los dedos, contra el metrónomo, y grabar la toma con `●`. Los bancos 1–4 suenan con los '
         'kits *Beat Maker* de Analog Lab; los 5–8, con General MIDI (Next o MuseScore).',
    sonidos='Bancos 1–4: **Beat Maker 707** del banco *Beat Maker* (su caja es la más clara). Bancos 5–8: **General MIDI Drums** de Next.',
    bancos=['Beat Maker'], botones=BOTONES_AL, perillas_a=PERILLAS_A, perillas_b=PERILLAS_B,
    pads=[
        dict(titulo='Una voz', desc='Los 16 pads suenan igual: el ritmo sin distracciones.', pads=[zn(42) for _ in range(16)]),
        dict(titulo='Pulso y ritmo', desc='Columnas 1–2: el pulso (bombo) con una mano. Columnas 3–4: el ritmo del ejercicio (caja) con la otra.',
             pads=[zn(n) for n in columnas([36, 36, 42, 42])]),
        dict(titulo='Dos manos', desc='Columnas 1–2 caja (mano izquierda), 3–4 zona 4 (mano derecha): para subdivisiones alternando manos y oír si van parejas.',
             pads=[zn(n) for n in columnas([42, 42, 54, 54])]),
        dict(titulo='Kit por columnas', desc='Una columna por sonido: zonas 1, 2, 4 y 5. Para leer ritmos de batería a varias voces.',
             pads=[zn(n) for n in columnas([36, 42, 54, 60])]),
        dict(titulo='Una voz (GM)', desc='Los 16 pads con el aro (side stick).', pads=[gm(37) for _ in range(16)]),
        dict(titulo='Pulso y ritmo (GM)', desc='Columnas 1–2 bombo (pulso), 3–4 hi-hat cerrado (ritmo).', pads=[gm(n) for n in columnas([36, 36, 42, 42])]),
        dict(titulo='Dos manos (GM)', desc='Columnas 1–2 woodblock agudo, 3–4 woodblock grave: el par clásico para practicar.',
             pads=[gm(n) for n in columnas([76, 76, 77, 77])]),
        dict(titulo='Kit por columnas (GM)', desc='Bombo, caja, hi-hat cerrado y abierto, uno por columna.', pads=[gm(n) for n in columnas([36, 38, 42, 46])]),
    ]))

# P6: el preset 2 de fábrica de MidiSuite (bin/SPB.bin), tal cual. Sus pads se leen del archivo al generar.
PRESETS.append(dict(ranura=6, nombre='Mackie', archivo='SMC-PAD - P6 Mackie.spc', tipo='mackie', fabrica=2,
    para='Manejar **Sonar** con el protocolo **Mackie Control**: transporte, bancos de pistas y *rec/solo/mute/select* de '
         '8 pistas. Es el preset 2 de fábrica, byte a byte: lo diseñó M-VAVE.',
    sonidos='Ninguno: este preset no toca sonidos, maneja el DAW.', bancos=[],
    botones=[('<', 5, 0, 46, 0, 'nota MCU 46 → banco de pistas anterior'), ('>', 5, 0, 47, 0, 'nota MCU 47 → banco de pistas siguiente'),
             ('▶', 5, 0, 94, 0, 'nota MCU 94 → Play'), ('■', 5, 0, 93, 0, 'nota MCU 93 → Stop'), ('●', 5, 0, 95, 0, 'nota MCU 95 → Record')],
    perillas_a=[(k, 30 + k, 'de fábrica') for k in range(8)], perillas_b=[(0, 38 + k, 'de fábrica') for k in range(8)],
    titulos_pads={2: ('Pistas 1–4', 'Botones de pista del protocolo Mackie: fila 1 *select*, fila 2 *rec*, fila 3 *solo*, fila 4 *mute*.'),
                  7: ('Pistas 5–8', 'Lo mismo para las pistas 5–8.')},
    pads=None))

APRENDER_A = [102, 103, 104, 105, 106, 107, 108, 109]
APRENDER_B = [3, 9, 14, 20, 21, 89, 90, 110]
COLOR_BANCO = ['rojo', 'naranja', 'amarillo', 'verde', 'azul', 'morado', 'blanco', 'gris']
PRESETS.append(dict(ranura=7, nombre='MIDI Learn', archivo='SMC-PAD - P7 MIDI Learn.spc', tipo='learn',
    para='Asignar cosas con **MIDI Learn** en cualquier programa (Sonar, MuseScore, Strudel…) **sin mover nada de Analog Lab**: '
         'todos sus CC están libres en la configuración *Beat Maker*, y los pads mandan las 128 notas por el canal 16.',
    sonidos='Ninguno: los pads son disparadores, no instrumentos.', bancos=[],
    botones=[('<', 2, 0, 86, 0x05, 'CC 86 (libre)'), ('>', 2, 0, 87, 0x04, 'CC 87 (libre)'),
             ('▶', 3, 0, 119, 0x02, 'MMC Play'), ('■', 3, 0, 119, 0x01, 'MMC Stop'), ('●', 3, 0, 119, 0x06, 'MMC Record')],
    perillas_a=[(0, cc, 'libre') for cc in APRENDER_A], perillas_b=[(0, cc, 'libre') for cc in APRENDER_B],
    pads=[dict(titulo='Notas %d–%d (canal 16)' % (16 * b, 16 * b + 15), desc='Un color por banco, para saber en cuál estás.',
               pads=[P(15, 16 * b + i, COLOR_BANCO[b], False, '%s · %d' % (nn(16 * b + i), 16 * b + i)) for i in range(16)])
          for b in range(8)]))

STR_A = [(1, 17, 'volumen del bajo'), (2, 17, 'volumen del pad'), (3, 17, 'volumen del arpegio'), (9, 17, 'volumen de la batería'),
         (1, 74, 'brillo del bajo'), (2, 74, 'brillo del pad'), (3, 74, 'brillo del arpegio'), (9, 74, 'brillo de la batería')]
STR_B = [(1, 16, 'reverb del bajo'), (2, 16, 'reverb del pad'), (3, 16, 'reverb del arpegio'), (9, 16, 'reverb de la batería'),
         (1, 19, 'delay del bajo'), (2, 19, 'delay del pad'), (3, 19, 'delay del arpegio'), (9, 19, 'delay de la batería')]
PRESETS.append(dict(ranura=8, nombre='Strudel', archivo='SMC-PAD - P8 Strudel.spc', tipo='strudel',
    para='Tocar **con la banda de Strudel** en Sonar ([[4. Instrumento/2. Strudel/2. House y todo|House y todo]]): los pads '
         'mandan por los mismos canales que Strudel (2 bajo, 3 pad, 4 arpegio) y por el 10 la batería, y las perillas son '
         'un mezclador de las cuatro voces.',
    sonidos='`STR - Bass`: banco **Bajo**. `STR - Pad`: banco **Pads** (o **Texturas**). `STR - Arp`: banco **Arpegios**. Batería: banco **Beat Maker**. '
            'En `STR - Arp` no uses los **Arpegiadores**: Strudel ya arpegia, y se pisarían los dos arpegios.',
    bancos=['Bajo', 'Pads', 'Texturas', 'Arpegios', 'Beat Maker'],
    botones=BOTONES_AL, perillas_a=STR_A, perillas_b=STR_B,
    pads=[dict(titulo='Bajo (canal 2), trastes %d–%d' % (f, f + 3), desc='Mástil de bajo, como el P2.',
               pads=[nota(n, 1, 'azul', 'azul') for n in cuartas(28, f)]) for f in (0, 4)] +
         [dict(titulo='Pad (canal 3) desde %s' % nn(lo), desc='Cromático para acordes.',
               pads=[nota(n, 2, 'morado', 'morado') for n in range(lo, lo + 16)]) for lo in (48, 60)] +
         [dict(titulo='Arpegio (canal 4) desde %s' % nn(lo), desc='Cromático para el arpegio o una melodía.',
               pads=[nota(n, 3, 'amarillo', 'amarillo') for n in range(lo, lo + 16)]) for lo in (60, 72)] +
         [dict(titulo='Batería: kit de Emulator II (canal 10)', desc='El banco 1 del P3.', pads=[zn(n, i < 12) for i, n in enumerate(KIT_EMU)]),
          dict(titulo='Batería: kit GM para dedos (canal 10)', desc='El banco 1 del P1.', pads=[gm(n) for n in KIT_DEDOS_GM])]))
