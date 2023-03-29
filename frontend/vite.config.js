import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { name: 'vite:import-analysis'},
    react(), tsconfigPaths(),
    ],
  esbuild: {
    target: 'es2020'
  },
  
})
