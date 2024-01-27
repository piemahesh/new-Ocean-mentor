import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: "192.168.137.1",
  //   port: 3112,
  // },
  // build: {
  //   outDir: "dist", // Specify the output directory for the production build
  //   manifest: true, // Generate manifest file
  // },
});
