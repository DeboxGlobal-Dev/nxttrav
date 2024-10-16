import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   exclude: ['js-big-decimal']
  // }
  server:{
    proxy:{
      "/api":"http://20.198.9.47/"
    }
  }
});
