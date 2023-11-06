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
    extend: {
      recipes: {
        prose: proseRecipe,
        customProse: customProseRecipe,
      },
      tokens: {
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
        tooltipFadeIn: {
          '0%': { opacity: '0', scale: '0.9' },
          '100%': { opacity: '1', scale: '1' },
        },
        tooltipFadeOut: {
          '0%': { opacity: '1', scale: '1' },
          '100%': { opacity: '0', scale: '0.9' },
        },
        tooltipSlideIn: {
          '0%': { transform: 'translateY(4px)' },
          '100%': { transform: 'translateY(0)' },
        },
        tooltipSlideOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(4px)' },
        },
      },
    },
  },

  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  // The output directory for your css system
  outdir: 'styled-system',
  strictTokens: false,
})
