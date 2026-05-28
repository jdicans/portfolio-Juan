import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), robotsTxt(), sitemap()],
  site: 'https://porfolio.dev/',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  redirects: {
    '/home': '/',
  },
  vite: {
    optimizeDeps: {
      // Evita carreras al re-optimizar tras reinicios de config en dev
      holdUntilCrawlEnd: true,
    },
  },
})
