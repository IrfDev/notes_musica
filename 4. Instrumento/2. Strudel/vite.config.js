import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import patrones from './.motor/patrones.js'

const carpeta = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  // La página del motor vive en .motor/; los patrones, un nivel arriba.
  root: fileURLToPath(new URL('.motor', import.meta.url)),
  plugins: [patrones(carpeta)],
  server: {
    port: 5173,
    strictPort: true,
    open: true,
  },
  // Todos los paquetes en un solo pre-bundle: si Vite los empaquetara por
  // separado, habría dos @strudel/core y .midi() viviría en otra clase Pattern.
  optimizeDeps: {
    include: [
      '@strudel/core',
      '@strudel/mini',
      '@strudel/tonal',
      '@strudel/transpiler',
      '@strudel/webaudio',
      '@strudel/midi',
    ],
  },
  clearScreen: false,
})
