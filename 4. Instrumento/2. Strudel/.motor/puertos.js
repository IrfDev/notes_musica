// Puerto MIDI virtual al que Strudel manda las notas.
//
// Strudel elige el primer puerto cuyo nombre CONTIENE este texto, así que el
// mismo nombre sirve en los dos sistemas si el puerto se llama igual:
//   Windows → loopMIDI:  "Improviser - Strudel Out"
//   macOS   → IAC Driver: Chrome lo muestra como "IAC Driver Improviser - Strudel Out"
//
// Los patrones nunca escriben el nombre: usan la constante OUT.
export const OUT = 'Improviser - Strudel Out'
