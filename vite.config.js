import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import talwincludes from '@talwincludes/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), talwincludes()],
})
