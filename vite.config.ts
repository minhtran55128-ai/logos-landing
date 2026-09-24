import { resolve } from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Multi-page app: each standalone route (landing page, terms) is its own
    // HTML entry. Add new ones here as they're built — otherwise `vite build`
    // only emits index.html and the route 404s in production.
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        terms: resolve(__dirname, 'terms.html'),
        waitlist: resolve(__dirname, 'waitlist.html'),
      },
    },
  },
})
