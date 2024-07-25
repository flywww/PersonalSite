import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: true, // Allow connections from network IPs
    port: 5173, // Optional: specify port
  },
  build: {
    outDir: 'dist' // ensure this matches the directory you are targeting
  }
})
