import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [
    react()
  ],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop()
          if (/\.(png|jpe?g|svg|gif|webp)$/i.test(assetInfo.name)) {
            return `assets/images/[name].[ext]`
          }
          return `assets/[name].[ext]`
        },
      },
    },
  },
})
