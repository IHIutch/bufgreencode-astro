import type { MarkdownHeading } from 'astro'
import { type MouseEvent, useEffect, useState } from 'react'
import { css, cx } from '../../styled-system/css'

export default function PageToc({ headings }: { headings: MarkdownHeading[] }) {
  const [currentHeading, setCurrentHeading] = useState({
    slug: headings?.[0]?.slug || '',
    text: headings?.[0]?.text || '',
  })

  useEffect(() => {
    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // const { id } = entry.target
          // if (id === onThisPageID) continue
          setCurrentHeading({
            slug: entry.target.id,
            text: entry.target.textContent || '',
          })

          break
        }
      }
    }

    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: '-100px 0% -66%',
      threshold: 1,
    }

    const headingsObserver = new IntersectionObserver(
      setCurrent,
      observerOptions,
    )

    // Observe all the headings in the main page content.
    document
      .querySelectorAll('.prose :is(h2,h3,h4,h5,h6)')
      .forEach(h => headingsObserver.observe(h))

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect()
  }, [])

  const onLinkClick = (e: MouseEvent) => {
    setCurrentHeading({
      slug: (e.currentTarget.getAttribute('href') || '').replace('#', ''),
      text: e.currentTarget.textContent || '',
    })
  }

  const isObservedSection = (slug: string) => currentHeading.slug === slug ? true : undefined

  return (
    <ul>
      {headings.map((heading, idx) => (
        <li
          key={idx}
          className={css({
            fontSize: 'sm',
            color: {
              base: 'gray.600',
              _hover: 'gray.900',
            },
          })}
        >
          <a
            href={`#${heading.slug}`}
            onClick={onLinkClick}
            className={cx('group', css({
              display: 'block',
              py: '1.5',
            }))}
            data-active={isObservedSection(heading.slug)}
          >
            <div
              className={css({
                borderLeftWidth: '2px',
                borderLeftColor: 'transparent',
                transition: 'border-color ease 0.2s',
                _groupActive: {
                  borderLeftColor: 'green.700',
                },
              })}
            >
              <div
                className={css({
                  transition: 'transform ease 0.2s',
                  transform: 'translateX(0)',
                  _groupActive: {
                    transform: 'translateX(token(sizes.2))',
                  },
                })}
              >
                <span
                  className={css({
                    fontWeight: 'medium',
                    _groupActive: {
                      color: 'green.700',
                    },
                  })}
                >
                  {heading.text}
                </span>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
