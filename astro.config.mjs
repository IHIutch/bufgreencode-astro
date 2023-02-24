import { defineConfig } from 'astro/config'

// https://astro.build/config
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'

export default defineConfig({
  output: 'static',
  integrations: [react(), sitemap(), mdx()],
  site: 'https://bufgreencode.com',
})
