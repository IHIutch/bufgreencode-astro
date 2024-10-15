import { useState } from 'react'

import * as DocSearch from '@docsearch/react' // https://github.com/algolia/docsearch/pull/2117#issuecomment-1793855627
import { Search } from 'lucide-react'
import { env } from 'env-vars'
import { css } from '../../styled-system/css'
import { square } from '../../styled-system/patterns'
import '@docsearch/css/dist/style.css'

const Hit: DocSearch.DocSearchProps['hitComponent'] = ({ hit, children }) => {
  return (
    <a
      href={hit.url}
      //   'DocSearch-Hit--Result': hit?.__is_result?.(),
      //   // 'DocSearch-Hit--Parent': hit.__is_parent?.(),
      //   // 'DocSearch-Hit--Child': hit.__is_child?.(),
      //   'DocSearch-Hit--FirstChild': hit.__is_first?.(),
      //   'DocSearch-Hit--LastChild': hit.__is_last?.(),
      // })}
    >
      {children}
    </a>
  )
}

export default function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className={css({
          h: { base: '10', lg: '12' },
          flexGrow: '1',
          rounded: 'lg',
          borderWidth: '1px',
          borderColor: 'gray.200',
          bg: {
            base: 'gray.50',
            _hover: 'gray.100',
          },
          px: '4',
          textAlign: 'left',
          color: 'gray.500',
          transition: 'background-color ease 0.2s',
          cursor: 'pointer',
        })}
        onClick={() => setIsOpen(true)}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
          })}
        >
          <Search className={square({ size: '4' })} />
          <span
            className={css({
              ml: '2',
              display: { sm: 'none' },
            })}
          >
            Search...
          </span>
          <span
            className={css({
              ml: '2',
              display: { base: 'none', sm: 'inline' },
            })}
          >
            Search the Green Code...
          </span>
        </div>
      </button>
      {isOpen
        ? (
            <DocSearch.DocSearchModal
              initialScrollY={window.scrollY}
              appId={env.PUBLIC_ALGOLIA_APP_ID}
              indexName={env.PUBLIC_ALGOLIA_INDEX_NAME}
              apiKey={env.PUBLIC_ALGOLIA_API_KEY}
              onClose={() => setIsOpen(false)}
              placeholder="Search the Green Code..."
              hitComponent={Hit}
              transformItems={(items) => {
                return items.map((item, index) => {
                  const a = document.createElement('a')
                  a.href = item.url

                  if (item.hierarchy?.lvl0)
                    item.hierarchy.lvl0 = item.hierarchy.lvl0.replace(/&amp;/g, '&')

                  if (item._highlightResult?.hierarchy?.lvl0?.value) {
                    item._highlightResult.hierarchy.lvl0.value
                  = item._highlightResult.hierarchy.lvl0.value.replace(
                        /&amp;/g,
                        '&',
                      )
                  }

                  return {
                    ...item,
                    url: `${a.pathname}${a.hash}`,
                    __is_result: () => true,
                    // __is_parent: () =>
                    //   item.type === 'lvl1' && items.length > 1 && index === 0,
                    // __is_child: () =>
                    //   item.type !== 'lvl1' &&
                    //   items.length > 1 &&
                    //   items[0].type === 'lvl1' &&
                    //   index !== 0,
                    __is_first: () => index === 1,
                    __is_last: () => index === items.length - 1 && index !== 0,
                  }
                })
              }}
            />
          )
        : null}
    </>
  )
}
