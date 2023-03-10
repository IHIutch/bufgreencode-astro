// const handlePurge = (ctx) => {
//   return ctx.file.basename !== 'main.scss'
//     ? {
//         '@fullhuman/postcss-purgecss': {
//           content: ['./src/**/*.{js,ts,jsx,tsx}'],
//           defaultExtractor: (content) =>
//             content.match(/[\w-/:[\]]+(?<!:)/g) || [],
//         },
//       }
//     : {}
// }

// module.exports = (ctx) => ({
//   map: ctx.options.map,
//   parser: 'postcss-scss',
//   plugins: {
//     ...handlePurge(ctx),
//     '@csstools/postcss-sass': {},
//     'postcss-import': {},
//     'tailwindcss/nesting': {},
//     tailwindcss: {},
//     autoprefixer: {},
//     cssnano: {
//       preset: 'default',
//     },
//   },
// })

module.exports = {
  parser: 'postcss-scss',
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.{js,ts,jsx,tsx,astro}'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
    '@csstools/postcss-sass': {},
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
  },
}
