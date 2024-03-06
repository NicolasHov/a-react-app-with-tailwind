import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tailwind-app',
  // base: "https://nicolashov.github.io/tailwind-app",
  plugins: [
    react()
  ],
})
