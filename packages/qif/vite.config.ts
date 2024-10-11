import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
      entryRoot: resolve(__dirname, "src"),
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src"),
      formats: ["es"],
      fileName: "qif",
    },

    rollupOptions: {
      external: ["react", "react/jsx-runtime", "qs"],
    },
  },
});
