import { rmSync } from 'node:fs'

try {
  rmSync('node_modules/.vite', { recursive: true, force: true })
  console.log('Caché de Vite eliminada (node_modules/.vite)')
} catch {
  // sin caché previa
}
