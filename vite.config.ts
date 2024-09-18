import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteImageOptimizer({
    jpg: {
      quality: 80,
    },
    webp: {
      quality: 80,
    }
  })],
  base: 'https://www.samuelmevik.com/'
})
