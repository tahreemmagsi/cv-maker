import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Add this part for including image formats
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg','**/*.PNG'], // You can add other image formats if needed

  // Optionally, you can disable the overlay for HMR errors
  server: {
    hmr: {
      overlay: false
    }
  }
});
