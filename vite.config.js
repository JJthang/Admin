import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import * as path from "node:path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Layouts({
      defaultLayout: "myDefault",
    }),
    Pages(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  // root: {
  //   buildCommand: "yarn build-vercel",
  //   rewrites: [
  //     {
  //       source: "/:path*",
  //       destination: "/index.html",
  //     },
  //   ],
  // },
});
