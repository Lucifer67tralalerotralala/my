import { defineConfig } from "vite";
export default defineConfig({ base: "./", server: { strictPort: true, port: 1420 }, build: { target: "es2022", sourcemap: false, minify: "esbuild" } });
