const process = require('node:process')

process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  // ...
  extends: ['@antfu'],
  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      extends: [
        'plugin:astro/recommended',
        'prettier',
        'plugin:prettier/recommended',
      ],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error",
        'prettier/prettier': 'warn',
      },
    },
    {
      files: ['*.md', '*.mdx'],
      extends: [
        'plugin:mdx/recommended',
        'prettier',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': 'warn',
      },
    },
  ],
}
