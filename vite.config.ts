import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      // Duas páginas estáticas: a landing e /skills/. Nenhuma depende de
      // fallback de SPA no servidor.
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        skills: resolve(import.meta.dirname, 'skills/index.html'),
      },
    },
  },
})
