// Exporta las notas de un patrón de Strudel como JSON, evaluado con el mismo
// Strudel que suena. Lo usa _scripts/strudel-a-arp.py; no hace falta llamarlo a mano.
//
//   node .motor/exportar.js <archivo.js> [--parte NOMBRE] [--ciclos N] [--todo]
//
// --parte es el nombre de una variable (`let synth = …`) o `$1`, `$2`… para los
// bloques `$:` en orden. Sin --parte se elige sola la única parte que use `.arp(`.
// Con --todo, si ninguna usa `.arp(`, se exportan las notas de todo lo que toca el
// archivo (sus bloques `$:`, o su última expresión). La percusión no tiene nota y no sale.
//
// Salida: { cpm, parte, candidatas, ciclos, eventos: [{ t, dur, nota, vel }] }
//   t y dur en ciclos; nota MIDI; vel 0–1 como la manda .midi(): gain × velocity,
//   con velocity 0.9 si el patrón no la fija.
import fs from 'node:fs'
import { registerHooks } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// stdout es solo para el JSON: lo que Strudel imprime al cargar va a stderr.
const imprimir = console.log.bind(console)
console.log = console.error

// @kabelsalat/web (lo importa @strudel/core) solo declara `module` para Vite;
// Node tomaría su `main`, que no exporta lo que core pide.
const KABELSALAT = new URL('../node_modules/@kabelsalat/web/dist/index.mjs', import.meta.url).href
registerHooks({
  resolve: (especificador, contexto, siguiente) =>
    especificador === '@kabelsalat/web' ? { url: KABELSALAT, shortCircuit: true } : siguiente(especificador, contexto),
})
const { Pattern, evalScope, evaluate, noteToMidi, silence, stack } = await import('@strudel/core')
const { miniAllStrings } = await import('@strudel/mini')
const { transpiler } = await import('@strudel/transpiler')

const args = process.argv.slice(2)
const opcion = (nombre) => {
  const i = args.indexOf(nombre)
  return i >= 0 ? args.splice(i, 2)[1] : undefined
}
const parteElegida = opcion('--parte')
const ciclos = Number(opcion('--ciclos') ?? 64)
const todo = args.includes('--todo') && Boolean(args.splice(args.indexOf('--todo'), 1))
const [archivo] = args
if (!archivo) {
  console.error('uso: node .motor/exportar.js <archivo.js> [--parte NOMBRE] [--ciclos N]')
  process.exit(1)
}
const fuente = fs.readFileSync(archivo, 'utf8')

// Como el motor: a un acompañamiento se le antepone el vocabulario, en el mismo bloque.
const CARPETA = fileURLToPath(new URL('..', import.meta.url))
const relativa = path.relative(CARPETA, path.resolve(archivo)).split(path.sep).join('/').normalize('NFC')
const VOCABULARIO = path.join(CARPETA, '2. Vocabulario')
const vocabulario = relativa.startsWith('1. Acompañamientos/') && fs.existsSync(VOCABULARIO)
  ? fs.readdirSync(VOCABULARIO)
      .filter((n) => n.endsWith('.js'))
      .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }))
      .map((n) => fs.readFileSync(path.join(VOCABULARIO, n), 'utf8'))
  : []

// ── Lo que pone el navegador y aquí no existe ───────────────
// Visualizaciones, MIDI y audio no cambian las notas: devuelven el patrón tal cual.
const igual = function () {
  return this
}
for (const m of ['pianoroll', 'punchcard', 'scope', 'spiral', 'pitchwheel', 'spectrum', 'wordfall', 'markcss', 'midi', 'osc']) {
  for (const nombre of [m, `_${m}`]) Pattern.prototype[nombre] ??= igual
}
// `$:` se convierte en `.p('$')`: se guardan en orden para poder pedir $1, $2…
const bloques = []
Pattern.prototype.p = function (id) {
  if (typeof id === 'string' && (id.startsWith('_') || id.endsWith('_'))) return silence
  bloques.push(this)
  return this
}
let cpm = 30
const setcpm = (x) => (cpm = Number(x))
const setcps = (x) => (cpm = Number(x) * 60)

miniAllStrings()
await evalScope(
  import('@strudel/core'),
  import('@strudel/mini'),
  import('@strudel/tonal'),
  {
    setcpm, setCpm: setcpm, setcps, setCps: setcps,
    hush: () => silence, all: () => silence, each: () => silence,
    samples: async () => {}, midikeys: async () => () => silence,
    window: globalThis, OUT: 'OUT',
  },
)

// ── Qué parte exportar ──────────────────────────────────────
// Candidatas: variables cuya definición use `.arp(`, y bloques `$:` que lo usen.
const sinComentarios = fuente.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
const trozos = sinComentarios.split(/^(?=\s*(?:let|const|var)\s+\w+\s*=|\s*\$\s*:)/m)
const candidatas = []
let nBloque = 0
for (const t of trozos) {
  const variable = t.match(/^\s*(?:let|const|var)\s+(\w+)\s*=/)
  const esBloque = /^\s*\$\s*:/.test(t)
  if (esBloque) nBloque++
  if (!/\.arp\(/.test(t)) continue
  if (variable) candidatas.push(variable[1])
  else if (esBloque) candidatas.push(`$${nBloque}`)
}
const usarTodo = todo && !parteElegida && !candidatas.length
const pedidas = parteElegida ? [parteElegida] : usarTodo ? ['todo'] : candidatas
const variables = pedidas.filter((p) => !p.startsWith('$') && p !== 'todo')
const fallar = (error) => {
  imprimir(JSON.stringify({ error, candidatas }))
  process.exit(2)
}
// Para leer variables se añade un objeto al final; para «todo» se deja la última expresión.
const codigo = [...vocabulario, fuente].join('\n\n') + (usarTodo ? '' : `\n;({ ${variables.join(', ')} })`)
let valores
try {
  ;({ pattern: valores } = await evaluate(codigo, transpiler))
} catch (err) {
  const noExiste = parteElegida && err instanceof ReferenceError && err.message.startsWith(`${parteElegida} `)
  fallar(noExiste ? `"${parteElegida}" no es una variable de este archivo` : `Strudel no pudo evaluarlo: ${err.message}`)
}

// Con bloques `$:`, el REPL toca todos juntos y no la última expresión.
const patron = (nombre) =>
  nombre === 'todo'
    ? bloques.length ? stack(...bloques) : valores
    : nombre.startsWith('$') ? bloques[Number(nombre.slice(1)) - 1] : valores?.[nombre]
const validas = pedidas.filter((p) => patron(p) instanceof Pattern)

if (validas.length !== 1) {
  const motivo = parteElegida
    ? `"${parteElegida}" no es un patrón de este archivo`
    : validas.length
      ? `hay varias partes con .arp(: ${validas.join(', ')}`
      : usarTodo
        ? 'el archivo no termina en un patrón ni tiene bloques $:'
        : 'ninguna variable ni bloque $: con .arp( es un patrón'
  fallar(`${motivo}. Elige una con --parte.`)
}
const [parte] = validas

// ── Las notas ───────────────────────────────────────────────
const aMidi = (n) => (typeof n === 'number' ? n : noteToMidi(n))
const eventos = patron(parte)
  .queryArc(0, ciclos)
  .filter((h) => h.hasOnset() && h.value?.note !== undefined)
  .map((h) => ({
    t: h.whole.begin.valueOf(),
    dur: h.duration.valueOf(),
    nota: Math.round(aMidi(h.value.note)),
    vel: (h.value.gain ?? 1) * (h.value.velocity ?? 0.9),
  }))
  .sort((a, b) => a.t - b.t || a.nota - b.nota)

imprimir(JSON.stringify({ cpm, parte, candidatas, ciclos, eventos }))
