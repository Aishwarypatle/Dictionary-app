import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Include your CSS file here
    // You can specify additional CSS files if needed
    // Example: ['./path/to/your/index.css', './path/to/another/style.css']
    include: ['./src/index,css' , ""]
  }
})
