import { splitVendorChunkPlugin , defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],
  server: {
    port: 3000
  },
  build: {
    // https://vitejs.dev/guide/build
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
    },
    watch: {
      // https://rollupjs.org/guide/en/#watch-options
    },
  },
  resolve: {
    alias: []
  },
  define: {}
})