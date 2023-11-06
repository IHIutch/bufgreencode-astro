import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import pandacss from '@pandacss/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://bufgreencode.com',
  integrations: [
    mdx(),
    react({
      include: ['**/react/*'],
    }),
    sitemap(),
    pandacss(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@napi-rs/image'],
    },
  },
  trailingSlash: 'always',
})
