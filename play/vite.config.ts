import { defineConfig } from "vite";
import viteDaisyui from "../scripts/vite-daisyui-styles.plugin";

export default defineConfig({
  plugins: [viteDaisyui()],
});
