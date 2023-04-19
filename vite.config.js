import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/clock-app/",
  plugins: [react()],
  resolve: {
    mainFields: [],
  }
})
