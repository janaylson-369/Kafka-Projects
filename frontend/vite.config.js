import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Libera o acesso para o navegador do Windows enxergar o WSL 2
    port: 3001, // Já deixa alinhado com a porta 3001 que você definiu
    watch: {
      usePolling: true // Mantém o Hot Reload ativo e rápido dentro do WSL 2
    }
  }
})