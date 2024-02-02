import { defineConfig } from '@pandacss/dev'
import { proseRecipe } from './panda/recipes/prose.recipe'
import { customProseRecipe } from './panda/recipes/custom-prose.recipe'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx,astro}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    semanticTokens: {
      animations: {
        enter: { value: 'enter' },
        exit: { value: 'exit' },
      },
    },
    extend: {
      recipes: {
        prose: proseRecipe,
        customProse: customProseRecipe,
      },
      tokens: {
        fonts: {
          inter: { value: '\'Inter Variable\', sans-serif' },
        },
        lineHeights: {
          3: { value: '0.75rem' },
          4: { value: '1rem' },
          5: { value: '1.25rem' },
          6: { value: '1.5rem' },
          7: { value: '1.75rem' },
          8: { value: '2rem' },
          9: { value: '2.25rem' },
          10: { value: '2.5rem' },
        },
      },
      keyframes: {
        enter: {
          from: {
            opacity: 'var(--enter-opacity, 1)',
            transform:
              'translate3d(var(--enter-translate-x, 0), var(--enter-translate-y, 0), 0) scale3d(var(--enter-scale, 1), var(--enter-scale, 1), var(--enter-scale, 1)) rotate(var(--enter-rotate, 0))',
          },
        },
        exit: {
          to: {
            opacity: 'var(--exit-opacity, 1)',
            transform:
              'translate3d(var(--exit-translate-x, 0), var(--exit-translate-y, 0), 0) scale3d(var(--exit-scale, 1), var(--exit-scale, 1), var(--exit-scale, 1)) rotate(var(--exit-rotate, 0))',
          },
        },
      },
    },
  },

  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  // The output directory for your css system
  outdir: 'styled-system',
  strictTokens: false,
})
