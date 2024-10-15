import { css } from '../../styled-system/css'

export const proseCss = css.raw({
  '&:not(:where([class~=not-prose] *))': {
    'lineHeight': '7',
    'fontSize': 'md',

    '& :where(h1)': {
      fontWeight: 'bold',
      fontSize: { base: '4xl', md: '5xl' },
      mb: { base: '4', md: '6' },
    },
    '& :where(h2)': {
      fontWeight: 'bold',
      fontSize: { base: '2xl', md: '3xl' },
      mt: { base: '12', md: '14' },
      mb: { base: '3', md: '4' },
    },
    '& :where(h3)': {
      fontWeight: 'semibold',
      fontSize: { base: 'xl', md: '2xl' },
      mt: { base: '8', md: '10' },
      mb: { base: '2', md: '3' },
    },
    '& :where(h4)': {
      fontWeight: 'semibold',
      fontSize: { base: 'md', md: 'lg' },
      mt: { base: '1', md: '2' },
      mb: '2',
    },
    '& :where(p)': {
      fontWeight: 'normal',
      fontSize: 'md',
      mt: '3',
      mb: '4',
    },
    '& :where(a)': {
      fontWeight: 'medium',
      transitionProperty: 'common',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-out',
      cursor: 'pointer',
      textDecoration: 'none',
      outline: 'none',
      color: 'inherit',
      _hover: {
        textDecoration: 'underline',
      },
      _focus: {
        boxShadow: 'outline',
      },
    },
    '& :where(hr)': {
      my: { base: '12', md: '14' },
      borderColor: 'gray.200',
      _dark: {
        borderColor: 'gray.600',
      },
    },
    '& :where(blockquote)': {
      fontStyle: 'italic',
      fontWeight: 'semibold',
      paddingStart: '4',
      my: { base: '6', md: '8' },
      borderStartWidth: '4px',
      borderStartColor: 'gray.200',
      _dark: {
        borderStartColor: 'gray.600',
      },
    },
    '& :where(pre)': {
      'p': '4',
      'rounded': 'md',
      'bg': 'gray.600',
      'color': 'gray.50',
      'overflow': 'auto',
      '_dark': {
        bg: 'gray.800',
      },
      '& code': {
        'fontWeight': 'normal',
        '&::before, &::after': {
          content: '""',
        },
      },
    },
    '& :where(code)': {
      'fontWeight': 'semibold',
      '&::before, &::after': {
        content: '"`"',
      },
    },
    '& :where(figure)': {
      'my': '8',
      '& figcaption': {
        color: 'gray.400',
        mt: '3',
        _dark: {
          color: 'gray.500',
        },
      },
    },
    '& :where(ul)': {
      paddingStart: '6',
      listStyleType: 'disc',
    },
    '& :where(ol)': {
      paddingStart: '6',
    },
    '& :where(li)': {
      paddingStart: '2',
      my: '2',
    },
    '& :where(ol>li)': {
      '&::marker': {
        color: 'gray.400',
        _dark: {
          color: 'gray.500',
        },
      },
    },
    '& :where(ul>li)': {
      '&::marker': {
        color: 'gray.500',
        _dark: {
          color: 'gray.300',
        },
      },
    },
    '& :where(table)': {
      'width': 'full',
      'my': '8',
      'textAlign': 'start',
      '& thead': {
        borderBottomWidth: '1px',
        borderBottomColor: 'gray.300',
        _dark: {
          borderBottomColor: 'gray.600',
        },
      },
      '& th': {
        textAlign: 'inherit',
        fontWeight: 'semibold',
        p: {
          base: '2',
          md: '3',
        },
      },
      '& td': {
        verticalAlign: 'baseline',
        p: {
          base: '2',
          md: '3',
        },
      },
      '& tbody': {
        '& tr': {
          'borderBottomWidth': '1px',
          'borderBottomColor': 'gray.200',
          '_dark': {
            borderBottomColor: 'gray.600',
          },
          '& :last-of-type': {
            borderBottomWidth: '0px',
            borderBottomColor: 'transparent',
          },
        },
      },
      '& tfoot': {
        '& tr': {
          borderTopWidth: '1px',
          borderTopColor: 'gray.300',
          _dark: {
            borderTopColor: 'gray.600',
          },
        },
      },
    },
    '& :where(h1 + *), & :where(h2 + *), & :where(h3 + *), & :where(h4 + *), & :where(hr + *)':
    {
      mt: '0',
    },
  },
})
