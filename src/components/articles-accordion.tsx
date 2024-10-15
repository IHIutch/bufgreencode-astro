import * as React from 'react'
import groupBy from 'lodash/groupBy'
import { Accordion } from '@ark-ui/react'
import { ChevronDown } from 'lucide-react'
import type { CollectionEntry } from 'astro:content'
import type { TransitionBeforeSwapEvent } from 'astro:transitions/client'
import { css, cx } from '../../styled-system/css'
import { square } from '../../styled-system/patterns'

type ArticlesType = Pick<CollectionEntry<'articles'>, 'data' | 'slug'>

export default function ArticlesAccordion({
  articles,
  activePath,
}: {
  articles: ArticlesType[]
  activePath: string
}) {
  const [localActivePath, setLocalActivePath] = React.useState(activePath)
  const groupedArticles = groupBy(
    articles.sort(
      (a, b) =>
        a.data.article_number
        + a.data.section_number
        - (b.data.article_number + b.data.section_number),
    ),
    'data.article_number',
  )

  const activeArticle = articles.find(a => `/${a.slug}` === localActivePath)
  const activeArticleNum = activeArticle?.data.article_number.toString()

  React.useEffect(() => {
    document.addEventListener('astro:before-swap', (e: TransitionBeforeSwapEvent) => {
      setLocalActivePath(e.to.pathname)
    })
  }, [])

  return (
    <div>

      <Accordion.Root
        multiple
        defaultValue={activeArticleNum ? [activeArticleNum] : []}
      >
        <ul
          className={css({
            px: '2',
            py: '1',
            fontSize: 'sm',
          })}
        >
          {Object.keys(groupedArticles).map((articleNum, idx) => (
            <Accordion.Item key={idx} value={articleNum}>
              <li
                className={css({
                  px: '2',
                  pb: '1',
                })}
              >
                <Accordion.ItemTrigger
                  className={cx(
                    'group',
                    css({
                      w: 'full',
                      textAlign: 'left',
                      cursor: 'pointer',
                    }),
                  )}
                >
                  <div
                    className={css({
                      display: 'flex',
                      w: 'full',
                      alignItems: 'center',
                      color: { base: 'gray.600', _hover: 'gray.900' },
                    })}
                  >
                    <div
                      className={css({
                        flexGrow: '1',
                        px: '2',
                        py: '1',
                      })}
                    >
                      <span
                        className={css({
                          fontWeight: 'medium',
                        })}
                      >
                        {groupedArticles[articleNum][0].data.article_number}
                        .
                        {' '}
                        {groupedArticles[articleNum][0].data.article}
                      </span>
                    </div>
                    <div>
                      <div
                        className={css({
                          transition: 'transform ease 0.2s',
                          transform: 'rotate(0)',
                          _groupExpanded: {
                            transform: 'rotate(180deg)',
                          },
                        })}
                      >
                        <ChevronDown className={square({ size: '4' })} />
                      </div>
                    </div>
                  </div>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent
                  className={cx(
                    'group',
                    css({
                      display: 'grid',
                      pl: '3',
                      _motionSafe: {
                        transitionProperty:
                          'grid-template-rows, padding-top, padding-bottom',
                        transitionDuration: '0.2s',
                        transitionTimingFunction: 'ease',
                      },
                      _open: {
                        gridTemplateRows: '1fr',
                        pt: '1',
                        pb: '2',
                      },
                      _closed: {
                        gridTemplateRows: '0fr',
                        // visibility: 'hidden',
                      },
                    }),
                  )}
                >
                  <ul
                    className={css({
                      overflow: 'hidden',
                    })}
                  >
                    {groupedArticles[articleNum].map((section, sIdx) => (
                      <li
                        key={sIdx}
                        className={css({
                          borderLeftWidth: '1px',
                          borderLeftColor: 'gray.300',
                        })}
                      >
                        <div
                          className={css({
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            py: '1.5',
                            color: {
                              base: 'gray.600',
                              _hover: 'gray.900',
                            },
                            ml: '-1px',
                            transition: 'color ease 0.2s',
                          })}
                        >
                          <a
                            href={`/${section.slug}`}
                            aria-current={
                              localActivePath === `/${section.slug}`
                                ? 'page'
                                : undefined
                            }
                            className={css({
                              'display': 'block',
                              'px': '2',
                              'transition': 'color ease 0.2s',
                              'borderLeftWidth': '2px',
                              'overflow': 'hidden',
                              'textOverflow': 'ellipsis',
                              'whiteSpace': 'nowrap',
                              'borderColor': 'transparent',
                              '&[aria-current=page]': {
                                borderColor: 'green.700',
                                color: 'green.700',
                              },
                            })}
                          >
                            <span>
                              {section.data.article_number}
                              .
                              {section.data.section_number}
                              {' '}
                              {section.data.title}
                            </span>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Accordion.ItemContent>
              </li>
            </Accordion.Item>
          ))}
        </ul>
      </Accordion.Root>
    </div>
  )
}
