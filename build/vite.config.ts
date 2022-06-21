import { defineConfig } from "vite";
import viteDaisyui from "../scripts/vite-daisyui-styles.plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteDaisyui()],
  build: {
    target: "es2015",
    lib: {
      // name: "daisyui-lit",
      // fileName: (format) => `daisyui-lit.${format}.js`,
      formats: ["es", "cjs"],
      entry: "../packages/components",
    },
    rollupOptions: {
      external: /^lit/,
      input: ["../packages/components"],
      // manualChunks: (id) => `${path.parse(id).name}/${path.parse(id).name}`,
      output: [
        {
          format: "es",
          dir: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          // preserveModulesRoot: "",
        },
        {
          format: "commonjs",
          dir: "lib",
          entryFileNames: "[name].js",
          preserveModules: true,
          // preserveModulesRoot: "components",
        },
      ],
    },

    minify: "esbuild",
  },
});
