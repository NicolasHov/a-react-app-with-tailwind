import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tailwind-app',
  plugins: [
    react()
  ],
  base: "https://nicolashov.github.io/a-react-app-with-tailwind",
})
