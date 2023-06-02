import { defineConfig } from 'vite'
import { CompileOptions, svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions:{
        customElement:true,
        css:'injected'
      }
    })
  ],
  server: {
    cors: {
      origin:"*",
      methods: "GET,PUT,POST,DELETE",
    }
    	},
})
