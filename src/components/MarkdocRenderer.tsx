import Markdoc from '@markdoc/markdoc'
import { heading as headingSchema } from '@/markdoc/schema/heading.markdoc'
import React from 'react'
import { Heading } from './content/Heading'

export default function MarkdocRenderer({ content }: { content: string }) {
  const ast = Markdoc.parse(content)
  const source = Markdoc.transform(ast, {
    // tags: {
    //   tableSmall: {
    //     render: 'TableSmall',
    //   },
    //   figureImg: {
    //     render: 'FigureImg',
    //     attributes: {
    //       caption: {
    //         type: 'String',
    //       },
    //     },
    //   },
    //   tableResponsive: {
    //     render: 'TableResponsive',
    //   },
    //   sup: {
    //     render: 'Sup',
    //   },
    // },
    nodes: {
      heading: headingSchema,
    },
  })

  return Markdoc.renderers.react(source, React, {
    components: {
      Heading,
    },
  })
}
