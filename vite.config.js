import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      // A maioria dos imports do projeto usa "@/..." (ex.: @/components/ui/button).
      // No template original do Base44, quem resolvia isso era o @base44/vite-plugin;
      // como ele foi removido, o alias precisa ser declarado aqui manualmente.
      '@': path.resolve(__dirname, './src'),
    },
  },
  ssgOptions: {
    // A rota "*" (PageNotFound) não deve virar um arquivo "*.html" no build —
    // ela só existe pra pegar navegação client-side pra uma URL desconhecida.
    // O 404 real de quem acessa a URL direto é o public/404.html (estático).
    includedRoutes(paths) {
      return paths.filter((p) => p !== '*');
    },
  },
});
