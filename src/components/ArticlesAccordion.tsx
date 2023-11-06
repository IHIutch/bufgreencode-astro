import groupBy from 'lodash/groupBy'
import * as Accordion from '@radix-ui/react-accordion'
import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import type { CollectionEntry } from 'astro:content'

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
        (b.data.article_number + b.data.section_number)
    ),
    'data.article_number'
  )

  const activeArticle = articles.find((a) => `/${a.slug}/` === activePath)
  const activeArticleNum = activeArticle?.data.article_number.toString()

  React.useEffect(() => {
    const handleSetActivePath = () => {
      setLocalActivePath(window.location.pathname)
    }
    document.addEventListener('astro:after-swap', handleSetActivePath);
    return () => {
      document.removeEventListener('astro:after-swap', handleSetActivePath);
    };
  }, [activePath]);

  return (
    <Accordion.Root
      asChild
      type="multiple"
      defaultValue={activeArticleNum ? [activeArticleNum] : []}
    >
      <ul className="px-2 py-1 text-sm">
        {Object.keys(groupedArticles).map((articleNum, idx) => (
          <Accordion.Item asChild key={idx} value={articleNum}>
            <li className="px-2 pb-1 group/item">
              <Accordion.Trigger className="w-full text-left group">
                <div className="flex w-full items-center text-gray-600 hover:text-gray-900">
                  <div className="grow px-2 py-1">
                    <span className="font-medium">
                      {groupedArticles[articleNum][0].data.article_number}.{' '}
                      {groupedArticles[articleNum][0].data.article}
                    </span>
                  </div>
                  <div>
                    <div
                      className="duration-200 group-[[data-state=open]]/item:rotate-180 rotate-0"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Accordion.Trigger>
              <Accordion.Content
                className='data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden transition-all py-1 pl-3'
              >
                <ul
                  className='border-l border-gray-300 pb-1 transition-all duration-200 group-[[data-state=open]]/item:translate-y-0 group-[[data-state=open]]/item:opacity-100 -translate-y-4 opacity-0'
                >
                  {groupedArticles[articleNum].map((section, sIdx) => (
                    <li key={sIdx}>
                      <a
                        aria-current={localActivePath === `/${section.slug}/` ? "page" : undefined}
                        className='group/link block w-full truncate py-1.5 text-gray-600 hover:text-gray-900 -ml-px transition-all duration-200'
                        href={`/${section.slug}/`}
                      >
                        <div
                          className='border-l-2 px-2 transition-all duration-200 group-[[aria-current=page]]/link:border-green-700 border-transparent'
                        >
                          <span
                            className='truncate group-[[aria-current=page]]/link:text-green-700'
                          >
                            {section.data.article_number}.
                            {section.data.section_number} {section.data.title}
                          </span>
                        </div>
                      </a>
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
