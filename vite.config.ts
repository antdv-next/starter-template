import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from "unocss/vite"
import dayjs from 'vite-plugin-dayjs'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dayjs(),
    vue(),
    unocss(),  
  ],
})
