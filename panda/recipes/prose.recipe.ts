import { defineRecipe } from '@pandacss/dev'

export const proseRecipe = defineRecipe({
  className: 'prose',
  description:
    'A system for making sure your typography looks great when your content in uncontrolled',
  base: {
    '&': {
      'lineHeight': '7',
      'fontSize': 'md',
  
      '& :where(h1):not(:where([class~=not-prose],[class~=not-prose] *))': {
        fontWeight: 'bold',
        fontSize: { base: '4xl', md: '5xl' },
        mb: { base: '4', md: '6' },
      },
      '& :where(h2):not(:where([class~=not-prose],[class~=not-prose] *))': {
        fontWeight: 'bold',
        fontSize: { base: '2xl', md: '3xl' },
        mt: { base: '12', md: '14' },
        mb: { base: '3', md: '4' },
      },
      '& :where(h3):not(:where([class~=not-prose],[class~=not-prose] *))': {
        fontWeight: 'semibold',
        fontSize: { base: 'xl', md: '2xl' },
        mt: { base: '8', md: '10' },
        mb: { base: '2', md: '3' },
      },
      '& :where(h4):not(:where([class~=not-prose],[class~=not-prose] *))': {
        fontWeight: 'semibold',
        fontSize: { base: 'md', md: 'lg' },
        mt: { base: '1', md: '2' },
        mb: '2',
      },
      '& :where(p):not(:where([class~=not-prose],[class~=not-prose] *))': {
        fontWeight: 'normal',
        fontSize: 'md',
        mt: '3',
        mb: '4',
      },
      '& :where(a):not(:where([class~=not-prose],[class~=not-prose] *))': {
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
      '& :where(hr):not(:where([class~=not-prose],[class~=not-prose] *))': {
        my: { base: '12', md: '14' },
        borderColor: 'gray.200',
        _dark: {
          borderColor: 'gray.600',
        },
      },
      '& :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *))': {
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
      '& :where(pre):not(:where([class~=not-prose],[class~=not-prose] *))': {
        p: '4',
        rounded: 'md',
        bg: 'gray.600',
        color: 'gray.50',
        overflow: 'auto',
        _dark: {
          bg: 'gray.800',
        },
        '& code': {
          'fontWeight': 'normal',
          '&::before, &::after': {
            content: '""',
          },
        },
      },
      '& :where(code):not(:where([class~=not-prose],[class~=not-prose] *))': {
        'fontWeight': 'semibold',
        '&::before, &::after': {
          content: '"`"',
        },
      },
      '& :where(figure):not(:where([class~=not-prose],[class~=not-prose] *))': {
        my: '8',
        '& figcaption': {
          color: 'gray.400',
          mt: '3',
          _dark: {
            color: 'gray.500',
          },
        },
      },
      '& :where(ul):not(:where([class~=not-prose],[class~=not-prose] *))': {
        paddingStart: '6',
        listStyleType: 'disc',
      },
      '& :where(ol):not(:where([class~=not-prose],[class~=not-prose] *))': {
        paddingStart: '6',
      },
      '& :where(li):not(:where([class~=not-prose],[class~=not-prose] *))': {
        paddingStart: '2',
        my: '2',
      },
      '& :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *))': {
        '&::marker': {
          color: 'gray.400',
          _dark: {
            color: 'gray.500',
          },
        },
      },
      '& :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *))': {
        '&::marker': {
          color: 'gray.500',
          _dark: {
            color: 'gray.300',
          },
        },
      },
      '& :where(table):not(:where([class~=not-prose],[class~=not-prose] *))': {
        width: 'full',
        my: '8',
        textAlign: 'start',
        '& thead': {
          borderBottomWidth: '1px',
          borderBottomColor: 'gray.300',
          _dark: {
            borderBottomColor: 'gray.600',
          },
        },
        '& th:not(:where([class~=not-prose],[class~=not-prose] *))': {
          textAlign: 'inherit',
          fontWeight: 'semibold',
          p: {
            base: '2', md: '3'
          },
        },
        '& td:not(:where([class~=not-prose],[class~=not-prose] *))': {
          verticalAlign: 'baseline',
          p: {
            base: '2', md: '3'
          },
        },
        '& tbody:not(:where([class~=not-prose],[class~=not-prose] *))': {
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
        '& tfoot:not(:where([class~=not-prose],[class~=not-prose] *))': {
          '& tr': {
            borderTopWidth: '1px',
            borderTopColor: 'gray.300',
            _dark: {
              borderTopColor: 'gray.600',
            },
          },
        },
      },
      '& :where(h1 + *):not(:where([class~=not-prose],[class~=not-prose] *)), & :where(h2 + *):not(:where([class~=not-prose],[class~=not-prose] *)), & :where(h3 + *):not(:where([class~=not-prose],[class~=not-prose] *)), & :where(h4 + *):not(:where([class~=not-prose],[class~=not-prose] *)), & :where(hr + *):not(:where([class~=not-prose],[class~=not-prose] *))':
      {
        mt: '0',
      },
    }
  },
})
