import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  //publicDir: path.resolve(__dirname, 'public'),
  plugins: [react()],
  server: {
    host: true, // Allow connections from network IPs
    port: 5172, // Optional: specify port
  },
  build: {
    outDir: 'dist', // ensure this matches the directory you are targeting
    assetsDir: 'assets',
  }
})
