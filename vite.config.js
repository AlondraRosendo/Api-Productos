import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwinds from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwinds()
  ]
  
})