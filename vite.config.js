// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/tailwind-app',
//   // base: "https://nicolashov.github.io/tailwind-app",
//   plugins: [
//     react()
//   ],
//   // define: {
//   //   'process.env.VITE_KEY': JSON.stringify(process.env.VITE_KEY),
//   // 'process.env.VITE_BIN_ID': JSON.stringify(process.env.VITE_BIN_ID),
//   // 'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
//   // }
// })

import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      'process.env.VITE_KEY': JSON.stringify(process.env.VITE_KEY),
      'process.env.VITE_BIN_ID': JSON.stringify(process.env.VITE_BIN_ID),
      'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
    },
  }
})