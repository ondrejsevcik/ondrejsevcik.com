import { vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [remix()],
})
