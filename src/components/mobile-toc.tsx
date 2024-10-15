import type { ReactNode } from 'react'
import { ChevronDown, ListOrdered } from 'lucide-react'
import { Accordion } from '@ark-ui/react'
import { css, cx } from '../../styled-system/css'
import { square } from '../../styled-system/patterns'

export default function MobileToc({ children }: { children: ReactNode }) {
  return (
    <div
      className={css({
        display: { base: 'block', xl: 'none' },
        mt: '8',
        mb: '12',
      })}
    >
      <Accordion.Root
        collapsible={true}
        defaultValue={['one']}
        className={css({
          w: 'full',
          rounded: 'lg',
          borderWidth: '1px',
          borderColor: 'gray.200',
          bg: 'gray.50',
        })}
      >
        <Accordion.Item value="one">
          <Accordion.ItemTrigger
            className={cx(
              'group',
              css({
                display: 'flex',
                w: 'full',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                h: '10',
                px: '4',
                textAlign: 'left',
                rounded: 'lg',
                bg: {
                  base: 'gray.50',
                  _hover: 'gray.100',
                },
                transition: 'background-color ease 0.2s',
              }),
            )}
          >
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
              })}
            >
              <ListOrdered className={square({ size: '6' })} />
              <div
                className={css({
                  ml: '2',
                })}
              >
                <span
                  className={css({
                    color: 'gray.700',
                    fontWeight: 'semibold',
                    fontSize: 'sm',
                  })}
                >
                  Page Contents
                </span>
              </div>
            </div>
            <div
              className={css({
                transition: 'transform ease 0.2s',
                transform: 'rotate(0)',
                _groupExpanded: {
                  transform: 'rotate(180deg)',
                },
              })}
            >
              <ChevronDown className={square({ size: '5' })} />
            </div>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent
            className={cx(
              'group',
              css({
                display: 'grid',
                px: '4',
                _motionSafe: {
                  transitionProperty:
                    'grid-template-rows, padding-top, padding-bottom',
                  transitionTimingFunction: 'ease',
                  transitionDuration: '0.2s',
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
            <div
              className={css({
                overflow: 'hidden',
                // _motionSafe: {
                //   '.group:is(data-state=open):&': {
                //     animationName: 'enter',
                //     '--enter-opacity': '0.4',
                //     '--enter-translate-y': 'token(spacing.-2)',
                //   },
                //   '.group:is(data-state=closed):&': {
                //     animationName: 'exit',
                //     '--exit-opacity': '0.4',
                //     '--exit-translate-y': 'token(spacing.-2)',
                //   },
                // },
              })}
            >
              {children}
            </div>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}
