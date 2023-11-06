import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV
    ? 'http://localhost:4321'
    : 'https://bufgreencode.com',
  integrations: [
    mdx(),
    tailwind(),
    react({
      include: ['**/react/*'],
    }),
    sitemap(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@napi-rs/image'],
    },
  },
  trailingSlash: 'always',
})
