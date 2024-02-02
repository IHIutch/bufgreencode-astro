import { defineRecipe } from '@pandacss/dev'

export const customProseRecipe = defineRecipe({
  className: 'customProse',
  description: 'A custom extension of the prose recipe',
  base: {
    'h1': {
      fontSize: '4xl',
    },
    'h2': {
      fontSize: '3xl',
    },
    'h3': {
      fontSize: '2xl',
    },
    'h4': {
      fontSize: 'xl',
    },
    'h5': {
      fontSize: 'lg',
    },
    'h6': {
      fontSize: 'md',
    },
    'ol': {
      'listStyle': 'upper-alpha',
      'pl': '5',
      'li::marker': {
        fontWeight: 'semibold',
        color: 'inherit',
      },
      '& ol': {
        'listStyle': 'decimal',
        '& ol': {
          'listStyle': 'lower-alpha',
          '& ol': {
            listStyle: 'lower-roman',
          },
        },
      },
    },
    'img': {
      w: 'full',
    },
    'figure p': {
      w: 'full',
    },
    'table': {
      'th, td': {
        p: '1',
        verticalAlign: 'top',
      },
    },
    'strong': {
      fontWeight: 'semibold',
    },
  },
})
