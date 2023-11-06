import groupBy from 'lodash/groupBy'
import * as Accordion from '@radix-ui/react-accordion'
import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import type { CollectionEntry } from 'astro:content'
import { css, cx } from '../../styled-system/css'
import { square } from '../../styled-system/patterns'

export default function ArticlesAccordion({
  articles,
  activePath,
}: {
  articles: CollectionEntry<'articles'>[]
  activePath?: string
}) {
  const [localActivePath, setLocalActivePath] = React.useState(activePath || '')
  const groupedArticles = groupBy(
    articles.sort(
      (a, b) =>
        a.data.article_number +
        a.data.section_number -
        (b.data.article_number + b.data.section_number),
    ),
    'data.article_number',
  )

  const activeArticle = articles.find((a) => `/${a.slug}/` === activePath)
  const activeArticleNum = activeArticle?.data.article_number.toString()

  React.useEffect(() => {
    const handleSetActivePath = () => {
      setLocalActivePath(window.location.pathname)
    }
    document.addEventListener('astro:after-swap', handleSetActivePath)
    return () => {
      document.removeEventListener('astro:after-swap', handleSetActivePath)
    }
  }, [activePath])

  return (
    <Accordion.Root
      asChild
      type="multiple"
      defaultValue={activeArticleNum ? [activeArticleNum] : []}
    >
      <ul
        className={css({
          px: '2',
          py: '1',
          fontSize: 'sm',
          lineHeight: 'sm',
        })}
      >
        {Object.keys(groupedArticles).map((articleNum, idx) => (
          <Accordion.Item asChild key={idx} value={articleNum}>
            <li className={css({ pl: '2', pr: '2', pb: '1' })}>
              <Accordion.Trigger
                className={cx('group', css({ w: 'full', textAlign: 'left' }))}
              >
                <div
                  className={css({
                    display: 'flex',
                    w: 'full',
                    alignItems: 'center',
                    color: 'gray.600',
                    _hover: { color: 'gray.900' },
                  })}
                >
                  <div
                    className={css({
                      flexGrow: '1',
                      pl: '2',
                      pr: '2',
                      pt: '1',
                      pb: '1',
                    })}
                  >
                    <span className={css({ fontWeight: 'medium' })}>
                      {groupedArticles[articleNum][0].data.article_number}.{' '}
                      {groupedArticles[articleNum][0].data.article}
                    </span>
                  </div>
                  <div>
                    <div
                      className={css({
                        transition: 'ease 0.2s transform',
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
              </Accordion.Trigger>
              <Accordion.Content
                className={css({
                  display: 'grid',
                  pl: '3',
                  transitionProperty:
                    'grid-template-rows, padding-top, padding-bottom',
                  transitionTimingFunction: 'ease',
                  _motionSafe: {
                    transitionDuration: '0.2s',
                  },
                  gridTemplateRows: '0fr',
                  '&[data-state="open"]': {
                    gridTemplateRows: '1fr',
                    pt: '1',
                    pb: '2',
                  },
                  '&[data-state="closed"]': {
                    visibility: 'hidden',
                  },
                })}
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
                          href={`/${section.slug}/`}
                          aria-current={
                            localActivePath === `/${section.slug}/`
                              ? 'page'
                              : undefined
                          }
                          className={css({
                            display: 'block',
                            px: '2',
                            transition: 'color ease 0.2s',
                            borderLeftWidth: '2px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            borderColor: 'transparent',
                            '&[aria-current=page]': {
                              borderColor: 'green.700',
                              color: 'green.700',
                            },
                          })}
                        >
                          <div
                            className={css({
                              borderLeftWidth: '2px',
                              borderColor: 'transparent',
                              px: '2',
                              transitionProperty: 'all',
                              transitionTimingFunction: 'all',
                              transitionDuration: '200',
                            })}
                          >
                            <span
                              className={css({
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              })}
                            >
                              {section.data.article_number}.
                              {section.data.section_number} {section.data.title}
                            </span>
                          </div>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </li>
          </Accordion.Item>
        ))}
      </ul>
    </Accordion.Root>
  )
}
