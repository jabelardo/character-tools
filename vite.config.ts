import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/character-tools',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'llama-tokenizer-js': ['llama-tokenizer-js'],
          'llama3-tokenizer-js': ['llama3-tokenizer-js'],
          'gpt-tokenizer': ['gpt-tokenizer']
        }
      }
    }
  }
})
