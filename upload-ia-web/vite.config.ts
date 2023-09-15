import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/* 
  optimizeDeps: exclude => Por padrão, o Vite tenta otimizar as dependências instaladas na aplicação, reduzindo o tamanho do código delas,
  remover código desnecessário etc. Porém no caso do ffmpeg o Vite exclui código que não deveria excluir, 
  logo a configuração de optimizeDeps deve ser adicionada para não retornar erro ao converter o video para audio
*/
export default defineConfig({
  plugins: [react()],
  optimizeDeps:{
    exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util']
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
