"""
Escribe las notas de 8. Setup/4. Presets/ y 8. Setup/5. Áreas/ a partir del catálogo.

Al regenerar se conservan el campo `estado` y todo lo que haya desde «## Notas propias».
"""

import re

from . import smcpad as S

HOY = '2026-10-02'
R_SMC = '8. Setup/4. Presets/M-VAVE SMC-PAD'
R_AL = '8. Setup/4. Presets/Analog Lab V'
R_AREAS = '8. Setup/5. Áreas'
PROPIAS = '## Notas propias'
AVISO = ('> [!info] Nota generada por `_scripts/generar-presets.py` desde el catálogo de `_scripts/presets/`.\n'
         '> Para cambiar el preset, cambia el catálogo y regenera. Tus apuntes van en **Notas propias**, que se conserva.')


def enlace(ruta, texto, en_tabla=False):
    return '[[%s%s%s]]' % (ruta, '\\|' if en_tabla else '|', texto)


def nota_smc(p):
    return '%s/%d. %s' % (R_SMC, p['ranura'], p['nombre'])


def nota_banco(b):
    return '%s/%d. %s' % (R_AL, b['orden'], b['nombre'])


def nota_area(a):
    return '%s/%d. %s' % (R_AREAS, a['n'], a['nombre'])


def conservar(ruta, texto):
    """Mantiene `estado` y la sección de notas propias de la versión anterior."""
    if not ruta.exists():
        return texto
    viejo = ruta.read_text(encoding='utf-8')
    m = re.search(r'^estado: *(\S+)', viejo, re.M)
    if m:
        texto = re.sub(r'^estado: *\S+', 'estado: ' + m.group(1), texto, count=1, flags=re.M)
    i = viejo.find('\n' + PROPIAS)
    if i >= 0:
        texto = texto[:texto.find('\n' + PROPIAS)] + viejo[i:]
    return texto


def pie():
    return '\n%s\n\n*Lo que escribas aquí se conserva cuando se regenera la nota.*\n' % PROPIAS

# ================================================================ SMC-PAD


def rejilla(pads):
    filas = []
    for r in (3, 2, 1, 0):
        nombre = {3: 'fila 4 (arriba)', 0: 'fila 1 (abajo)'}.get(r, 'fila %d' % (r + 1))
        celdas = ['%s %s' % (S.emoji(p['color'], p['apagado']), p['etiqueta']) for p in pads[r * 4:r * 4 + 4]]
        filas.append('| %s | %s |' % (nombre, ' | '.join(celdas)))
    return '| | col. 1 | col. 2 | col. 3 | col. 4 |\n|---|---|---|---|---|\n' + '\n'.join(filas)


SIGNIFICADO = {
    'gm': {('rojo', False): 'bombo', ('naranja', False): 'caja, aro y palmas', ('amarillo', False): 'hi-hat cerrado y de pedal',
           ('amarillo', True): 'hi-hat abierto', ('azul', False): 'toms', ('blanco', False): 'platos (crash, ride, china, splash)',
           ('verde', False): 'percusión latina (bongós, congas, timbales, agogó)',
           ('morado', False): 'percusión pequeña (pandereta, cencerro, claves, woodblocks…)', ('gris', False): 'extras de General MIDI 2'},
    'zona': {('rojo', False): 'zona 1 (bombo)', ('naranja', False): 'zona 2 (caja)', ('amarillo', False): 'zona 3',
             ('verde', False): 'zona 4', ('azul', False): 'zona 5', ('morado', False): 'zona 6', ('blanco', False): 'zona 7',
             ('gris', False): 'zona 8'},
    'nota': {('verde', False): 'do (C): para orientarte', ('blanco', False): 'teclas blancas', ('azul', False): 'teclas negras'},
}
TITULO_LEYENDA = {'gm': '**Bancos General MIDI**: el color dice la familia del sonido.',
                  'zona': '**Bancos de Emulator II**: el color dice la zona.', 'nota': '**Bancos de notas**: el color dice qué nota es.'}

TABLA_ZONAS = '''| Zona | Nota raíz | Beat Maker 707 | 606 | Trap | Synthetic | In The Air |
|---|---|---|---|---|---|---|
| 🟥 1 | 36 (0–41) | Kick | Kick | Kick | Kick | Kick |
| 🟧 2 | 42 (42–47) | Snare | Snare | Snare | Snare | Snare |
| 🟨 3 | 48 (48–53) | Clap | Clap | Closed Hat | Clap | Snare 2 |
| 🟩 4 | 54 (54–59) | Closed Hat | Closed Hat | Open Hat | Closed Hat | Closed Hat |
| 🟦 5 | 60 (60–65) | Open Hat | Open Hat | Ride | Open Hat | Open Hat |
| 🟪 6 | 66 (66–71) | Tambourine | Cymbal | Rim | Click | Guiro |
| ⬜ 7 | 72 (72–77) | Crash | Low Tom | Low Tom | Hit | Wood Low |
| ⬛ 8 | 78 (78–127) | Cowbell | High Tom | Mid Tom | Bleep | Wood High |'''

GLOB = {
    'bateria': '- **Transpose = 0.** Tu Glob estaba en −4: con eso cada pad sale 4 semitonos abajo y los kits suenan cruzados.\n'
               '- **PadCurve:** la más lineal que encuentres. Este preset ya usa todo el rango de velocidad (1–127); la curva decide cuánto cuesta llegar a cada punto.\n'
               '- **PadAftertouch: apagado.** En batería, la presión después del golpe solo manda mensajes que nadie usa.\n'
               '- **Note Repeat** (con *Rate* y *Swing*): útil para redobles de hi-hat; queda sincronizado al tempo si *Sync* está activo.',
    'notas': '- **Transpose = 0** (estaba en −4), salvo que quieras transportar a propósito.\n'
             '- **PadCurve:** la más lineal; el rango de velocidad ya es 1–127.\n'
             '- **PadAftertouch:** encendido si el preset de Analog Lab usa la presión (sale como *AfterTouch* en sus ajustes); si no, apagado.\n'
             '- **Latch:** encendido si quieres que un pad siga sonando al soltarlo (texturas, arpegiadores).',
    'otro': '- No dependen de Glob más que la curva de los pads.',
}


def tipo_banco(pads):
    et = [p['etiqueta'] for p in pads]
    if all(e.startswith('Z') for e in et): return 'zona'
    if any(e.split(' · ')[0] in S.GM.values() for e in et): return 'gm'
    return 'nota'


def leyenda(p):
    if p['tipo'] == 'strudel':
        return ('| Color | Qué es |\n|---|---|\n| 🟦 azul | bajo (canal 2); apagado = teclas negras |\n'
                '| 🟪 morado | pad (canal 3); apagado = teclas negras |\n| 🟨 amarillo | arpegio (canal 4); apagado = teclas negras |\n'
                '| 🟩 verde | do (C) en cualquier voz |\n| batería | los de zona del %s y los de familia del %s |\n'
                % (enlace(R_SMC + '/3. Beat Maker', 'P3', True), enlace(R_SMC + '/1. Batería GM', 'P1', True)))
    if p['tipo'] == 'learn':
        return 'Un color por banco: 🟥 1 · 🟧 2 · 🟨 3 · 🟩 4 · 🟦 5 · 🟪 6 · ⬜ 7 · ⬛ 8. Así sabes en qué banco estás.\n'
    if p['tipo'] == 'mackie':
        return 'Son los de fábrica. En los bancos 3 y 8: 🟩 *select*, 🟥 *rec*, 🟦 *solo*, 🟨 *mute*.\n'
    out, tipos = [], []
    for b in p['pads']:
        t = tipo_banco(b['pads'])
        if t not in tipos:
            tipos.append(t)
    for t in tipos:
        usados = {(x['color'], x['apagado']) for b in p['pads'] if tipo_banco(b['pads']) == t for x in b['pads']}
        out.append(TITULO_LEYENDA[t] + '\n\n| Color | Qué es |\n|---|---|')
        for (c, d), que in SIGNIFICADO[t].items():
            if (c, d) in usados:
                out.append('| %s %s%s | %s |' % (S.emoji(c, d), c, ' apagado' if d else '', que))
        if t == 'zona':
            out.append('| (color) | la misma zona, afinada (no en su raíz) |')
        out.append('')
    if 'zona' in tipos:
        out.append('Qué hay en cada zona según el kit:\n\n' + TABLA_ZONAS + '\n')
    return '\n'.join(out)


def texto_smc(p, bancos, areas):
    modos = {2: 'CC Push', 3: 'SysEx', 5: 'Mackie'}
    L = ['---', 'tipo: setup', 'estado: borrador', 'equipo: "[[0. M-VAVE SMC-PAD]]"', 'ranura: %d' % p['ranura'],
         'archivo: "8. Setup/3. Configuraciones/M-VAVE SMC-PAD/%s"' % p['archivo'], 'ultima_verificacion: %s' % HOY,
         'tags:', '  - curso-musica/setup', '---', '', '# P%d · %s' % (p['ranura'], p['nombre']), '', AVISO, '',
         '> [!abstract] Para qué sirve', '> ' + p['para'], '']
    if p['tipo'] == 'mackie':
        L += ['Es copia exacta del preset 2 de fábrica de MidiSuite (`bin/SPB.bin`).', '']
    else:
        L += ['Generado el %s, no exportado: pasa a `estado: vigente` cuando lo cargues, lo pruebes y lo exportes encima desde MidiSuite.' % HOY, '']
    L += ['## Cargarlo', '', '1. MidiSuite → menú *Presets* → **%d**.' % p['ranura'],
          '2. *Import* → `8. Setup/3. Configuraciones/M-VAVE SMC-PAD/%s`.' % p['archivo'],
          '3. **Save** (graba en el aparato todas las ranuras tal como están en MidiSuite).',
          '4. Cierra MidiSuite antes de abrir el DAW o Analog Lab: ocupa el puerto MIDI.', '']
    L += ['## Sonidos', '', p['sonidos'], '']
    if p['bancos']:
        L.append('| Banco de Analog Lab | Qué trae |\n|---|---|')
        for nb in p['bancos']:
            b = bancos[nb]
            L.append('| %s | %s |' % (enlace(nota_banco(b), b['nombre'], True), b['que']))
        L.append('')
    if p.get('extra'):
        L += [p['extra'], '']
    usan = [a for a in areas if p['ranura'] in a['presets_smcpad']]
    if usan:
        L += ['**Se usa en:** ' + ', '.join(enlace(nota_area(a), a['nombre']) for a in usan) + '.', '']
    L += ['## Botones', '', '| Botón | Modo | Qué hace |', '|---|---|---|']
    L += ['| `%s` | %s | %s |' % (b[0], modos[b[1]], b[5]) for b in p['botones']]
    L += ['', '## Perillas', '', '*KNOB BANK* alterna entre el banco A y el B.', '', '| Perilla | Banco A | Banco B |', '|---|---|---|']
    for i in range(8):
        a, b = p['perillas_a'][i], p['perillas_b'][i]
        L.append('| %d | canal %d · CC %d · %s | canal %d · CC %d · %s |' % (i + 1, a[0] + 1, a[1], a[2], b[0] + 1, b[1], b[2]))
    L.append('')
    if p['tipo'] in ('bateria', 'notas'):
        L += ['Las perillas mandan los CC estándar de Arturia: en Analog Lab funcionan con la configuración *Beat Maker* '
              '(%s) y con la *Default* de fábrica. Los faders hacen lo que diga cada preset de Analog Lab: su nota de banco '
              'dice qué hace cada uno.' % enlace('8. Setup/1. Software/2. Analog Lab V#Configuración MIDI Beat Maker', 'ver Analog Lab'), '']
    if p['tipo'] == 'strudel':
        L += ['Para que lleguen, en Sonar la entrada de cada pista tiene que aceptar al SMC-PAD en su canal: '
              '`STR - Bass` → *Omni* o *SMC-PAD*, canal **2**; `STR - Pad` → canal **3**; `STR - Arp` → canal **4**; '
              'la pista de batería → canal **10**. Y *Input Echo* encendido, como ya pide la nota de Strudel.', '']
    if p['tipo'] == 'mackie':
        L += ['Para que funcione, en Sonar: *Edit → Preferences → MIDI → Control Surfaces* → añadir **Mackie Control** con la '
              'entrada y la salida del SMC-PAD. Mientras esa superficie esté activa, las notas por el canal 1 de otros '
              'presets (P2, P4) también le llegan como órdenes: desactívala cuando toques.', '']
    L += ['## Pads', '', '*PAD BANK* cambia de banco. El pad 1 queda **abajo a la izquierda** (supuesto; ver la nota del equipo). '
          'Cada casilla: color, sonido o nota, y número MIDI.', '']
    for i, b in enumerate(p['pads']):
        canales = ', '.join(str(c) for c in sorted({x['canal'] + 1 for x in b['pads']}))
        L += ['### Banco %d · %s' % (i + 1, b['titulo']), '']
        if b['desc']:
            L += ['%s Canal %s.' % (b['desc'], canales), '']
        L += [rejilla(b['pads']), '']
    L += ['## Qué significa cada color', '', 'Un color entre paréntesis, como (🟥), es el mismo color **apagado**.', '', leyenda(p)]
    L += ['## Lo que el archivo no guarda (Glob)', '', 'Se pone a mano en la pestaña **Glob** de MidiSuite. Probablemente es común a todas las ranuras.', '',
          GLOB['bateria' if p['tipo'] == 'bateria' else 'notas' if p['tipo'] in ('notas', 'strudel') else 'otro'],
          '- Si un pad suena más débil que los demás, **Pad Calibration Mode** en MidiSuite.',
          '- Para comprobar qué manda cada pad: la vista *Midi Code* de MidiSuite.', '']
    L += ['## Por verificar', '', '- [ ] Cargarlo, tocar cada banco y comprobar que suena lo que dice esta nota']
    if p['tipo'] not in ('mackie', 'learn'):
        L.append('- [ ] Que el pad 1 quede abajo a la izquierda')
    if any(b[1] == 3 for b in p['botones']):
        L.append('- [ ] Que `▶` `■` `●` manejen el DAW (modo SysEx, MMC)')
    L.append('- [ ] Exportarlo encima desde MidiSuite')
    return '\n'.join(L) + '\n' + pie()

# ================================================================ bancos de Analog Lab


def faders_de(instrumento, faders):
    f = faders.get(instrumento)
    if f is None:
        return 'sin documentar'
    usados = ['%d %s' % (i + 1, n) for i, n in enumerate(f) if n]
    return ' · '.join(usados) if usados else '*ninguno*: usa las perillas A'


def texto_banco(b, filas, presets_smc, areas, faders):
    """filas: [(preset, instrumento, por qué, macros, faders)]."""
    archivo = 'Analog Lab V - %s.labx' % b['nombre']
    L = ['---', 'tipo: setup', 'estado: borrador', 'programa: "[[2. Analog Lab V]]"', 'banco: "%s"' % b['nombre'],
         'archivo: "8. Setup/3. Configuraciones/Analog Lab V/%s"' % archivo, 'ultima_verificacion: %s' % HOY,
         'tags:', '  - curso-musica/setup', '---', '', '# Banco %s' % b['nombre'], '', AVISO, '',
         '> [!abstract] Qué trae', '> %d presets de Analog Lab: %s.' % (len(filas), b['que']), '']
    if b.get('uso'):
        L += [b['uso'], '']
    L += ['## Importarlo', '',
          '1. Analog Lab → importar `8. Setup/3. Configuraciones/Analog Lab V/%s` como preset (el mismo menú donde se exporta, o arrastrarlo a la ventana).' % archivo,
          '2. Aparece como banco de usuario **%s**. Filtra el navegador por él: con `<` `>` del SMC-PAD pasas de un preset a otro.' % b['nombre'],
          '3. **Una sola vez.** Cada importación crea otro banco (`%s_1`, `%s_2`…). Si el banco cambia, borra el viejo antes.' % (b['nombre'], b['nombre']), '']
    L += ['## Presets', '', '| Preset | Instrumento | Por qué | Macros 1–4 | Faders |', '|---|---|---|---|---|']
    for nombre, ins, porque, macros, fad in filas:
        m = ' · '.join(x for x in macros if x) or '—'
        L.append('| %s | %s | %s | %s | %s |' % (nombre, ins, porque, m, fad))
    L += ['', 'Las macros son las perillas A 1–4 del SMC-PAD (Brightness, Timbre, Time, Movement en los CC estándar); los '
          'faders, las perillas B. Sus nombres salen en la barra de controles de Analog Lab con *Generic 9 Knobs + 9 Faders*.', '']
    if presets_smc or areas:
        L += ['## Con qué se usa', '']
        if presets_smc:
            L.append('- **SMC-PAD:** ' + ', '.join(enlace(nota_smc(p), 'P%d %s' % (p['ranura'], p['nombre'])) for p in presets_smc))
        if areas:
            L.append('- **Áreas:** ' + ', '.join(enlace(nota_area(a), a['nombre']) for a in areas))
        L += ['- **KeyStep y Casio:** pendiente.', '']
    if b.get('tipo') != 'beatmaker':
        L += ['Son copias de los presets de fábrica sin tocar el sonido: cambian el banco, la bandera de fábrica y, si el '
              'preset la admite, la marca *OriginalFactory*.', '']
    L += ['## Por verificar', '', '- [ ] Importarlo una vez y comprobar que suena cada preset (con candado = no entra en la licencia Intro)', '']
    return '\n'.join(L) + pie()

# ================================================================ áreas


def texto_area(a, bancos, presets_por_ranura, antes):
    L = ['---', 'tipo: setup', 'estado: borrador', 'ultima_verificacion: %s' % HOY, 'tags:', '  - curso-musica/setup', '---', '',
         '# %s' % a['nombre'], '', AVISO, '', '> [!abstract] Para qué', '> ' + a['para'], '',
         '## Antes de empezar', '']
    L += ['- [ ] ' + x for x in antes]
    L += ['', '## Equipo', '', '| Equipo | Qué preset |', '|---|---|']
    for eq, que in a['equipo']:
        L.append('| %s | %s |' % (eq, que))
    L += ['', 'Presets del SMC-PAD: ' + ', '.join(enlace(nota_smc(presets_por_ranura[r]), 'P%d %s' % (r, presets_por_ranura[r]['nombre']))
                                                for r in a['presets_smcpad']) + '.', '']
    L += ['## Sonidos', '', ', '.join(enlace(nota_banco(bancos[n]), n) for n in a['bancos']) + '.', '']
    L += ['## Pistas', '', '| Pista | Entrada | Sonido | Preset del pad |', '|---|---|---|---|']
    for pista, entrada, sonido, preset in a['pistas']:
        L.append('| %s | %s | %s | %s |' % (pista, entrada, sonido, preset))
    L += ['', '## Pasos', '']
    L += ['%d. %s' % (i + 1, x) for i, x in enumerate(a['pasos'])]
    L += ['', '## Cuándo está hecho', '', a['listo'], '']
    return '\n'.join(L) + pie()
