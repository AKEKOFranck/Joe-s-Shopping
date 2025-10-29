import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,ttf}'],
        navigateFallback: '/maintenance.html',
        navigateFallbackAllowlist: [/^(?!\/__).*/],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 }
            }
          }
        ]
      },
      includeAssets: ['favicon.ico','apple-touch-icon.png','robots.txt','safari-pinned-tab.svg', 'LoadingApp.gif'],
      manifest: {
        name: "Joe's Shop",
        short_name: "JoeShop",
        description: "Boutique de cosmétiques - Vos produits beauté préférés",
        theme_color: "#f5c16c",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/", // ✅ Splash d'abord
        scope: "/",
        orientation: "portrait",
        icons: [
          { src: "pwa-64x64.png", sizes: "64x64", type: "image/png" },
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "pwa-512x512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable any" },
          { src: "apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" }
        ]
      },
      devOptions: {
        enabled: false // ❌ désactive le SW en dev pour éviter les warnings
      }
    })
  ]
});
