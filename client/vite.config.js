import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createProxyMiddleware } from "http-proxy-middleware";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/countries": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
        ws: true,
        logLevel: "debug",
      },
    },
  },
});
