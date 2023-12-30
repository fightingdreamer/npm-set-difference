import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/set/difference.ts"),
      name: "@fightingdreamer/set-difference",
      formats: ["es", "cjs"],
      fileName: "set-difference",
    },
    rollupOptions: {
      external: /@fightingdreamer[/].*/,
    },
  },
});
