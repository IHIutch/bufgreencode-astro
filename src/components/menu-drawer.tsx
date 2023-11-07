import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ExternalLink } from 'lucide-react'
import { css, cx } from '../../styled-system/css'
import { square } from '../../styled-system/patterns'
import { HamburgerIcon } from './hamburger-icon'

export default function MenuDrawer({
  children,
}: {
  children?: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className={cx(
          'group',
          css({
            h: '10',
            w: '10',
            borderWidth: '1px',
            borderColor: 'gray.200',
            bg: {
              base: 'gray.50',
              _hover: 'gray.100',
            },
            rounded: 'md',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color ease 0.2s',
            cursor: 'pointer',
          }),
        )}
        aria-label="Menu"
      >
        <HamburgerIcon />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cx(
            css({
              pos: 'fixed',
              insetX: '0',
              top: '14',
              bottom: '0',
              bg: 'black',
              opacity: '0.4',
              zIndex: '3',
              _motionSafe: {
                animationDuration: 'token(durations.fast)',
                _open: {
                  animationName: 'enter',
                  '--enter-opacity': '0',
                },
                _closed: {
                  animationName: 'exit',
                  '--exit-opacity': '0',
                },
              },
            }),
          )}
        />
        <Dialog.Content
          className={css({
            zIndex: '3',
            pos: 'fixed',
            bottom: '0',
            top: '14',
            right: '0',
            bg: 'white',
            maxWidth: 'sm',
            w: 'full',
            display: 'flex',
            flexDirection: 'column',
            _motionSafe: {
              animationDuration: 'token(durations.fast)',
              _open: {
                animationName: 'enter',
                '--enter-translate-x': 'token(sizes.full)',
              },
              _closed: {
                animationName: 'exit',
                '--exit-translate-x': 'token(sizes.full)',
              },
            },
          })}
        >
          <Dialog.Title
            className={css({
              py: '4',
              px: '6',
              fontSize: 'xl',
              fontWeight: 'semibold',
              borderBottomWidth: '1px',
              borderBottomColor: 'slate.200',
            })}
          >
            Menu
          </Dialog.Title>
          <div
            className={css({
              py: '2',
              overflowY: 'auto',
              flex: '1',
            })}
          >
            {children}
          </div>
          <div
            className={css({
              py: '3',
              px: '6',
              borderTopWidth: '1px',
              borderTopColor: 'slate.200',
            })}
          >
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mx: '-2',
              })}
            >
              <div>
                <a
                  href="/disclaimer"
                  className={css({
                    px: '2',
                    py: '2',
                    color: {
                      base: 'gray.600',
                      _hover: 'gray.900',
                    },
                    fontWeight: 'medium',
                    fontSize: 'sm',
                  })}
                >
                  Disclaimer
                </a>
              </div>
              <div>
                <a
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    px: '2',
                    py: '2',
                    color: {
                      base: 'gray.600',
                      _hover: 'gray.900',
                    },
                    fontWeight: 'medium',
                    fontSize: 'sm',
                  })}
                  href="https://github.com/IHIutch/bufgreencode_v2/issues/new?assignees=&labels=&projects=&template=found-an-issue.yml"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className={css({
                      mr: '1',
                    })}
                  >
                    Report an Issue
                  </span>
                  <span>
                    <ExternalLink className={square({ size: '3' })} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
