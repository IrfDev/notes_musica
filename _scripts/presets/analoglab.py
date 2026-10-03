"""
Catálogo: los bancos de sonidos de Analog Lab V y su configuración MIDI.

Los bancos van por familia de sonido, no por controlador: sirven para el SMC-PAD, el KeyStep y el Casio.
Cada preset es una copia del de fábrica (Presets/<carpeta>/Factory/Factory/<nombre>) en un banco de usuario.
"""

# Nombre del instrumento en la ruta del .labx (el que el importador ya aceptó) -> carpeta en Arturia/Presets
INSTRUMENTOS = {
    'Emulator II': 'Emulator II V', 'Piano V3': 'Piano V3', 'Wurli V3': 'Wurli V3', 'Stage-73 V2': 'Stage-73 V2',
    'Jup-8 V4': 'Jup-8 V4', 'VOX Continental': 'VOX Continental V2', 'Farfisa': 'Farfisa V', 'DX7': 'DX7 V',
    'OP-Xa': 'OP-Xa V', 'Solina': 'Solina V2', 'Mellotron': 'Mellotron V', 'Jun-6': 'Jun-6 V',
    'Matrix-12': 'Matrix-12 V2', 'CS-80 V3': 'CS-80 V3', 'CS-80 V4': 'CS-80 V4', 'SEM': 'SEM V2',
    'Mini V3': 'Mini V3', 'Mini V4': 'Mini V4', 'Prophet V3': 'Prophet V3', 'MiniBrute': 'MiniBrute V',
    'ARP 2600': 'ARP 2600 V3', 'SQ80': 'SQ80 V', 'CZ': 'CZ V', 'Buchla Easel': 'Buchla Easel V',
    'Modular': 'Modular V3', 'KORG MS-20': 'KORG MS-20 V',
}

# Qué hacen los faders 1-9 con cada instrumento si el preset no trae los suyos (resources/mapping.pref.xml).
# '' = ese fader no hace nada. None = instrumento sin asignación documentada.
FADERS = {
    'Emulator II': ['LFO Rate', 'LFO Delay', 'Vibrato', 'Transpose', 'Attack', 'Decay', 'Sustain', 'Release', ''],
    'Piano V3': ['Soundboard Resonance', 'Sympathetic Resonance', 'Duplex Scale Resonance', 'Release Time', 'Hammer Noise',
                 'Low Shelf Gain', 'Presence Gain', 'High Shelf Gain', 'Unison Detune'],
    'Wurli V3': ['Hammer Noise', 'Reeds Noise', 'Damper Noise', 'Stereo Width', '', 'Pickup Distance', 'Pickup Alignment',
                 'Tonebar Resonance', 'Dynamics'],
    'Stage-73 V2': [''] * 9, 'VOX Continental': [''] * 9, 'Farfisa': [''] * 9, 'Matrix-12': [''] * 9,
    'CS-80 V3': [''] * 9, 'CS-80 V4': [''] * 8 + ['Mix'], 'Prophet V3': [''] * 9, 'Modular': [''] * 9,
    'Jup-8 V4': ['Envelope 1 Attack', 'Envelope 1 Decay', 'Filter Env Sustain', 'Filter Env Release', 'Envelope 2 Attack',
                 'Envelope 2 Decay', 'Sustain', 'Envelope 2 Release', 'Portamento'],
    'DX7': ['Operator 1 Level', 'Operator 2 Level', 'Operator 3 Level', 'Operator 4 Level', 'Operator 5 Level',
            'Operator 6 Level', 'Algorithm', 'Pitch Env Amt', ''],
    'OP-Xa': ['Filter Attack', 'Filter Decay', 'Filter Env Sustain', 'Filter Env Release', 'Loudness Attack',
              'Loudness Decay', 'Sustain', 'Release', 'Portamento Time'],
    'Solina': ['Bass Contrabass', 'Bass Cello', 'Upper Viola', 'Upper Violin', 'Upper Trumpet', 'Upper Horn',
               'Upper Humana', 'Upper Ensemble', ''],
    'Mellotron': ['Macro Attack', 'Macro Decay', 'Sustain', 'Release', 'Tape Saturation', 'Mechanics', 'Noise Floor',
                  'Velocity to Volume', 'AfterTouch to Flutter'],
    'Jun-6': ['VCF Cutoff', 'VCF Resonance', 'VCF Env', 'VCF LFO', 'Envelope 1 Attack', 'Envelope 1 Decay', 'Sustain',
              'Release', ''],
    'SEM': ['', '', '', '', 'Env 1 Attack', 'Env 1 Decay', 'Env 1 Sustain', '', ''],
    'Mini V3': ['Filter Env Attack', 'Filter Env Decay', 'Filter Env Sustain', 'Filter Env Amount', 'Attack', 'Decay',
                'Sustain', 'Release On/Off', 'Legato'],
    'Mini V4': ['VCF Attack', 'VCF Decay', 'VCF Sustain', 'Filter Contour Amount', 'VCA Attack', 'VCA Decay',
                'VCA Sustain', 'Modulation Amount', 'Modulation Mix'],
    'MiniBrute': ['Amp Envelope Attack', 'Amp Envelope Decay', 'Amp Envelope Sustain', 'Amp Envelope Release',
                  'Filter Envelope Attack', 'Filter Envelope Decay', 'Filter Envelope Sustain', 'Filter Envelope Release', ''],
    'ARP 2600': None,
    'SQ80': ['DCA1 Level', 'DCA2 Level', 'DCA3 Level', 'Filter Cutoff Frequency', 'Filter Resonance', 'LFO1 Amplitude',
             '', 'LFO2 Amplitude', 'LFO3 Amplitude'],
    'CZ': ['', '', '', '', '', '', '', 'Unison Detune', 'Portamento Time'],
    'Buchla Easel': ['Attack', 'Decay', 'Sustain', 'Env Mode Select', 'Gate 1 Mod', 'Gate 2 Mod', 'Chan A Level',
                     'Chan B Level', ''],
    'KORG MS-20': ['EG2 Attack Time', 'EG2 Decay Time', 'EG2 Sustain Level', 'EG2 Release Time', 'EG1 Delay Time',
                   'EG1 Attack Time', 'EG1 Release Time', 'HPF Total Modulation Amount', 'LPF Total Modulation Amount'],
}

# ================================================================ el banco Beat Maker (kits de Emulator II con controles propios)
# __Mapped__: destino dentro del instrumento (posición en su Reference_ParamNames.xml).
# __HW_Mapped__: destino en Analog Lab (FX A/B, delay, reverb, master o P1 ParamN).
BM_MAPPED = [0, 768, 14, 769, 526, 770, 527, 771, 528, -1, -1,
             36, 98, 160, 222, 284, 346, 408, 470,       # faders 1-8: VoiceN VCA Level
             30]                                         # fader 9: Voice1 Sample Pitch Transpose
BM_HW_MAPPED = [-1, 2, 102, 4, 163, 6, 224, 8, 233, 0, -1, 12, 13, 14, 15, 16, 17, 18, 19, 20]
BM_COMENTARIO = ('SMC-PAD Beat Maker. Basado en %s. Pads: 36 42 48 54 60 66 72 78. '
                 'Faders 1-8 = volumen de cada voz (%s). Fader 9 = afinacion del bombo.')
BM_KITS = [   # (preset de fábrica, nombre nuevo, voces 1-8, por qué)
    ('707 Airline Kit', 'Beat Maker 707', 'Kick Snare Clap CHat OHat Tamb Crash Cowbell', '707: claro, de los 80'),
    ('606 Subtle Kit', 'Beat Maker 606', 'Kick Snare Clap CHat OHat Cymbal LowTom HighTom', '606: sutil'),
    ('Trap Heaven Kit', 'Beat Maker Trap', 'Kick Snare CHat OHat Ride Rim LowTom MidTom', 'trap y hip hop'),
    ('Synthetic Drum Kit', 'Beat Maker Synthetic', 'Kick Snare Clap CHat OHat Click Hit Bleep', 'sintético, experimental'),
    ('In The Air Today', 'Beat Maker In The Air', 'Kick Snare Snare2 CHat OHat Guiro WoodLow WoodHigh', 'caja de ritmos de los 70, suave: muy dream pop'),
]
BM_EXPORTACION = ('default.labx', 'Emulator II/User/Factory/707 Airline Kit')   # el 707 sale de esta exportación real

# ================================================================ los bancos
BANCOS = [
    dict(orden=1, nombre='Beat Maker', tipo='beatmaker', que='kits de batería de Emulator II',
         uso='Los cinco kits reparten el teclado igual, en 8 zonas que empiezan en 36, 42, 48, 54, 60, 66, 72 y 78 '
             '(**no es General MIDI**). Los faders 1–8 son el volumen de cada voz, como un mezclador, y el 9 afina el bombo. '
             'Las perillas son las de siempre; en el 707, las macros hacen: Brightness = filtro, Timbre = resonancia, '
             'Time = duración de los golpes, Movement = chorus.'),
    dict(orden=2, nombre='Teclas', que='pianos, pianos eléctricos y órganos', presets=[
        ('Cassette Piano', 'Piano V3', 'piano de casete: gastado, triste'),
        ('Cognac', 'Wurli V3', 'Wurlitzer cálido con vibrato'),
        ('Not Love EP', 'Stage-73 V2', 'Rhodes suave y melancólico'),
        ('E.P 7070', 'Jup-8 V4', 'el piano eléctrico que ya usas en Sonar'),
        ('Dirt Road', 'VOX Continental', 'órgano de combo de los 60, un poco sucio'),
        ('Cheap But So Good', 'Farfisa', 'Farfisa con vibrato'),
        ('Summer Sixty Six', 'DX7', 'teclado FM lo-fi, triste'),
        ('Soft Whip', 'OP-Xa', 'teclas analógicas suaves')]),
    dict(orden=3, nombre='Pads', que='cuerdas, pads y coros', presets=[
        ('Air String 1', 'Solina', 'Solina: cuerdas de ensamble con aire'),
        ('Dream Strings', 'Mellotron', 'cuerdas de Mellotron'),
        ('Big Stereo Choir', 'Mellotron', 'coro de Mellotron'),
        ('Kids With Marbles', 'Jun-6', 'pad de Juno, limpio y suave'),
        ('Crying Pad', 'Matrix-12', 'pad triste'),
        ('Soft Saw', 'CS-80 V3', 'pad lo-fi suave'),
        ('Floydian', 'CS-80 V3', 'pad amplio con aire'),
        ('Lush', 'SEM', 'pad envolvente')]),
    dict(orden=4, nombre='Bajo', que='bajos', presets=[
        ('Mello Bass', 'CS-80 V3', 'redondo y profundo'),
        ('Fret Bass', 'Mini V3', 'como un bajo con trastes: para folk'),
        ('Fretless Bass', 'OP-Xa', 'sin trastes, suave'),
        ('Bass Bass', 'Prophet V3', 'grave y oscuro'),
        ('Jazzy Bass', 'Matrix-12', 'clásico, profundo'),
        ('80S Bass', 'Prophet V3', 'de los 80, limpio'),
        ('Club Sub', 'Mini V3', 'subgrave para beats'),
        ('Dusty Sub', 'DX7', 'subgrave lo-fi')]),
    dict(orden=5, nombre='Arpegios', que='plucks, campanas y mallets para que otro haga el arpegio',
         uso='Son sonidos cortos para que el arpegio lo haga **otro**: Strudel en `STR - Arp`, o tus dedos. No arpegian solos: '
             'para eso está el banco *Arpegiadores*.', presets=[
        ('Woody Bells', 'Prophet V3', 'campanas de madera'),
        ('Lofi Bells', 'Mini V4', 'campanas lo-fi, tristes'),
        ('Soft Bells', 'Mini V3', 'campanas suaves'),
        ('Analog Harp', 'CS-80 V4', 'arpa analógica'),
        ('Telephone Harp', 'CS-80 V3', 'arpa con movimiento'),
        ('PW Pluck', 'Jup-8 V4', 'pluck limpio'),
        ('Music Box', 'Matrix-12', 'caja de música'),
        ('Big Crystal Bells', 'CS-80 V4', 'campanas de cristal, cálidas')]),
    dict(orden=6, nombre='Arpegiadores', que='presets que arpegian solos mientras mantienes las notas',
         uso='Mantén una nota o un acorde y el preset arpegia solo, al tempo (el de Sonar, o el de la barra de arriba de Analog '
             'Lab). Los cuatro primeros usan el **arpegiador de Analog Lab**: ahí cambias modo (Up, Down, Ordered, Up & Down, '
             'Random…), velocidad (de 3/2 a 1/96) y número de octavas, y con **Hold** sigue sonando al soltar. Los otros '
             'cuatro traen la secuencia del propio instrumento. Con el SMC-PAD, *Latch* en Glob también lo mantiene.', presets=[
        ('Flying Arpeggio', 'MiniBrute', 'arpegiador de Analog Lab: suave, cinematográfico'),
        ('Bouncing Colors', 'CS-80 V4', 'arpegiador de Analog Lab: limpio, pop'),
        ('Spice Drops', 'CS-80 V4', 'arpegiador de Analog Lab: gotas con delay'),
        ('EVA 237', 'MiniBrute', 'arpegiador de Analog Lab: atmosférico, de los 80'),
        ('Berceuse', 'Matrix-12', 'secuencia propia: canción de cuna, triste'),
        ('BOC Sunrise', 'Matrix-12', 'secuencia propia: amanecer suave'),
        ('Sad Space', 'ARP 2600', 'secuencia propia: triste y espaciosa'),
        ('Ice Of Enceladus', 'SQ80', 'arpegio lo-fi, limpio')]),
    dict(orden=7, nombre='Leads', que='sonidos para melodías', presets=[
        ('Lonely Lead', 'Matrix-12', 'solitario, triste'),
        ('Resonant String', 'CS-80 V3', 'cuerda resonante, suave'),
        ('Kit Lead 2', 'Solina', 'lo-fi, con aire'),
        ('Arcane Organ', 'CS-80 V3', 'órgano que evoluciona'),
        ('Belles Iles', 'CZ', 'campanas con aire'),
        ('Ensemble', 'Mini V3', 'lead de ensamble, cálido'),
        ('Decadance', 'Prophet V3', 'suave, con movimiento'),
        ('Mod Wheel Lead', 'Buchla Easel', 'cambia con la rueda de modulación')]),
    dict(orden=8, nombre='Texturas', que='fondos que evolucionan solos', presets=[
        ('Moon', 'CS-80 V3', 'textura lunar, suave'),
        ('Whistler', 'Farfisa', 'silbidos con aire'),
        ('Last Light', 'Matrix-12', 'fondo cinematográfico'),
        ('Pulsepad', 'Matrix-12', 'pad que late'),
        ('Marchand Sable', 'Modular', 'arena lo-fi'),
        ('Longtemps', 'CZ', 'paisaje triste'),
        ('Morning Circles', 'CZ', 'círculos de mañana'),
        ('I Am a Replicant', 'Mini V4', 'triste, de los 70-80')]),
    dict(orden=9, nombre='FX', que='efectos para transiciones y ambiente', presets=[
        ('Ghost Driver', 'OP-Xa', 'paisaje fantasma'),
        ('In A Dream', 'ARP 2600', 'sueño, suave'),
        ('Sea Sex and Sun', 'ARP 2600', 'mar y aire'),
        ('Caught In Storm', 'SEM', 'tormenta'),
        ('2049 Rain', 'Buchla Easel', 'lluvia'),
        ('Wind Magnetic', 'Matrix-12', 'viento'),
        ('And Away', 'KORG MS-20', 'subida lenta y cálida (riser)'),
        ('Bassement Riser', 'Jup-8 V4', 'subida oscura (riser)')]),
]

# ================================================================ configuración MIDI (.labmidi)
# Solo `paramid`: al importar, Analog Lab rechaza param="nombre". paramid = posición en Reference_ParamNames.xml.
LABMIDI_NOMBRE = 'Beat Maker'
LABMIDI = [
    (74, 324, 'Brightness (HardwareControl1)'), (93, 325, 'FX A (HC2)'), (71, 326, 'Timbre (HC3)'), (18, 327, 'FX B (HC4)'),
    (76, 328, 'Time (HC5)'), (19, 329, 'Delay (HC6)'), (77, 330, 'Movement (HC7)'), (16, 331, 'Reverb (HC8)'),
    (17, 332, 'Master (HC9)'),
    (73, 334, 'fader 1'), (75, 335, 'fader 2'), (79, 336, 'fader 3'), (72, 337, 'fader 4'), (80, 338, 'fader 5'),
    (81, 339, 'fader 6'), (82, 340, 'fader 7'), (83, 341, 'fader 8'), (85, 342, 'fader 9'),
    (22, 321, 'Parte 2'), (23, 322, 'Live'), (24, 320, 'Parte 1'), (27, 365, 'Clear Filters'),
    (28, 370, 'Previous Preset'), (29, 371, 'Next Preset'),
    (112, 362, 'Browse Filter'), (113, 363, 'Validate Filter'), (114, 360, 'Browse Preset'), (115, 361, 'Validate Preset'),
    (117, 366, 'Active Filter Preset'), (118, 367, 'Active Filter Category'),
]
