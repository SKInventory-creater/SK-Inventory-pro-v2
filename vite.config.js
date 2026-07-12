import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",

  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "public/pages/login.html"),
        dashboard: resolve(__dirname, "public/pages/dashboard.html"),
        bundles: resolve(__dirname, "public/pages/bundles.html"),
        items: resolve(__dirname, "public/pages/items.html"),
        reports: resolve(__dirname, "public/pages/reports.html"),
        settings: resolve(__dirname, "public/pages/settings.html"),
      }
    }
  }
});
