import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { globalStylesOptions } from "./global.styles";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: globalStylesOptions,
      },
    },
  },
});
