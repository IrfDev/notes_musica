// Motor de Strudel: toca el patrón elegido y lo vuelve a evaluar al guardar.
//
// Arma Strudel igual que @strudel/web, pero desde los paquetes sueltos: el
// bundle de @strudel/web trae su propia copia de @strudel/core y .midi()
// quedaría registrado en otra clase Pattern.
import { evalScope, setTime } from '@strudel/core'
import { miniAllStrings } from '@strudel/mini'
import { transpiler } from '@strudel/transpiler'
import { initAudioOnFirstClick, registerSynthSounds, webaudioRepl } from '@strudel/webaudio'
import { WebMidi, enableWebMidi } from '@strudel/midi'
import { OUT } from './puertos.js'

const $ = (id) => document.getElementById(id)
const nfc = (s) => s.normalize('NFC')
const CLAVE = 'strudel.patron'

// ── Strudel ─────────────────────────────────────────────────
initAudioOnFirstClick()
miniAllStrings()
const repl = webaudioRepl({ transpiler })
setTime(() => repl.scheduler.now())

const listo = Promise.all([
  evalScope(
    evalScope,
    import('@strudel/core'),
    import('@strudel/mini'),
    import('@strudel/tonal'),
    import('@strudel/webaudio'),
    import('@strudel/midi'),
    { OUT },
  ),
  registerSynthSounds(),
])

// ── Estado ──────────────────────────────────────────────────
let lista = { acompanamientos: [], vocabulario: [], pruebas: [] }
let sonando = false

async function cargarLista() {
  lista = await (await fetch('/api/patrones')).json()
  const elegido = nfc(new URLSearchParams(location.search).get('patron') ?? leer() ?? '')
  const select = $('patron')
  select.replaceChildren()
  const grupo = (etiqueta, items) => {
    if (!items.length) return
    const g = document.createElement('optgroup')
    g.label = etiqueta
    for (const { nombre, ruta } of items) g.append(new Option(nombre, ruta, false, ruta === elegido))
    select.append(g)
  }
  grupo('Acompañamientos', lista.acompanamientos)
  grupo('Pruebas', lista.pruebas)
  if (!select.options.length) select.append(new Option('— no hay patrones todavía —', ''))
  $('vocabulario').textContent = lista.vocabulario.length
    ? `Vocabulario cargado antes de cada patrón: ${lista.vocabulario.map((v) => v.nombre).join(', ')}`
    : 'Vocabulario: vacío'
}

async function codigo(ruta) {
  const r = await fetch(`/api/codigo?ruta=${encodeURIComponent(ruta)}`)
  if (!r.ok) throw new Error(await r.text())
  return r.text()
}

// ── Tocar y parar ───────────────────────────────────────────
async function tocar() {
  const ruta = $('patron').value
  if (!ruta) return
  guardar(ruta)
  await listo
  // El vocabulario se evalúa antes que el patrón, en el mismo bloque, para
  // que el patrón pueda usar lo que el vocabulario define.
  const partes = await Promise.all([...lista.vocabulario.map((v) => codigo(v.ruta)), codigo(ruta)])
  sonando = true
  pintar()
  await repl.evaluate(partes.join('\n\n'))
}

function parar() {
  repl.stop()
  sonando = false
  pintar()
}

function pintar() {
  $('estado').textContent = sonando ? '● sonando' : '○ parado'
  $('estado').dataset.sonando = sonando
}

// ── MIDI ────────────────────────────────────────────────────
async function verPuertos() {
  try {
    await enableWebMidi()
  } catch (err) {
    $('puertos').textContent = `Sin Web MIDI (${err.message.replace(/\.$/, '')}). Usa Chrome o Edge y acepta el permiso.`
    return
  }
  const salidas = WebMidi.outputs.map((o) => o.name)
  const encontrado = salidas.find((n) => n.includes(OUT))
  $('puertos').replaceChildren(
    Object.assign(document.createElement('p'), {
      className: encontrado ? 'ok' : 'falta',
      textContent: encontrado
        ? `✓ Puerto encontrado: ${encontrado}`
        : `✗ No encuentro "${OUT}". ¿Está abierto loopMIDI / IAC Driver? Recarga la página después de crearlo.`,
    }),
    Object.assign(document.createElement('p'), {
      className: 'tenue',
      textContent: `Salidas MIDI: ${salidas.length ? salidas.join(' · ') : 'ninguna'}`,
    }),
  )
}

// ── Registro ────────────────────────────────────────────────
document.addEventListener('strudel.log', ({ detail }) => {
  const linea = document.createElement('div')
  linea.className = detail.type ?? ''
  linea.textContent = `${new Date().toLocaleTimeString()}  ${detail.message}`
  $('registro').prepend(linea)
  while ($('registro').childElementCount > 60) $('registro').lastChild.remove()
})

// ── Recordar la última elección ─────────────────────────────
function leer() {
  try {
    return localStorage.getItem(CLAVE)
  } catch {
    return null
  }
}
function guardar(ruta) {
  try {
    localStorage.setItem(CLAVE, ruta)
  } catch {}
}

// ── Controles ───────────────────────────────────────────────
$('tocar').addEventListener('click', tocar)
$('parar').addEventListener('click', parar)
$('patron').addEventListener('change', () => (sonando ? tocar() : guardar($('patron').value)))
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') tocar()
  if ((e.ctrlKey || e.metaKey) && e.key === '.') parar()
})

// Guardar en VS Code → se vuelve a evaluar lo que suena.
if (import.meta.hot) {
  import.meta.hot.on('strudel:cambio', async ({ ruta, tipo }) => {
    if (tipo !== 'change') await cargarLista()
    const afecta = nfc(ruta) === nfc($('patron').value) || ruta.startsWith('2. Vocabulario/')
    if (sonando && afecta) tocar()
  })
}

pintar()
cargarLista()
verPuertos()
