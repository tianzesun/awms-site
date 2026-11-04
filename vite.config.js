import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  // GitHub Pages serves the project site at /awms-site/
  base: "/awms-site/",
  plugins: [tailwindcss()],
})
