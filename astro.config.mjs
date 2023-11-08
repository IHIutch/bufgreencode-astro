import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import pandacss from '@pandacss/astro'
import prefetch from '@astrojs/prefetch'

// import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
  site: 'https://bufgreencode.com',
  integrations: [mdx(), react(), sitemap(), pandacss(), prefetch()],
  vite: {
    optimizeDeps: {
      exclude: ['@napi-rs/image'],
    },
  },
  trailingSlash: 'always',
  // output: 'server',
  // adapter: vercel({
  //   speedInsights: {
  //     enabled: true,
  //   },
  //   imageService: true,
  // }),
})
