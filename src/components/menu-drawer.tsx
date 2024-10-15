import * as React from 'react'
import { Dialog, Portal } from '@ark-ui/react'
import { css, cx } from '../../styled-system/css'
import { HamburgerIcon } from './hamburger-icon'

export default function MenuDrawer({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <Dialog.Root modal={false} trapFocus={true}>
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
      <Portal>
        <Dialog.Backdrop
          className={css({
            pos: 'fixed',
            insetX: '0',
            top: '14',
            bottom: '0',
            opacity: '0.4',
            bg: 'black',
            zIndex: '3',
            _motionSafe: {
              animationDuration: 'token(durations.fast)',
              _open: {
                'animationName': 'enter',
                '--enter-opacity': '0',
              },
              _closed: {
                'animationName': 'exit',
                '--exit-opacity': '0',
              },
            },
          })}
        />
        <Dialog.Positioner
          className={css({
            pos: 'fixed',
            inset: '0',
            zIndex: '3',
            display: 'flex',
          })}
        >
          <Dialog.Content
            className={css({
              pos: 'fixed',
              bottom: '0',
              top: '14',
              right: '0',
              bg: 'white',
              width: 'sm',
              _motionSafe: {
                animationDuration: 'token(durations.fast)',
                _open: {
                  'animationName': 'enter',
                  '--enter-translate-x': 'token(sizes.full)',
                },
                _closed: {
                  'animationName': 'exit',
                  '--exit-translate-x': 'token(sizes.full)',
                },
              },
            })}
          >
            <div
              className={css({
                h: 'full',
                display: 'flex',
                flexDirection: 'column',
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
                      href="/report-an-issue"
                    >
                      <span
                        className={css({
                          mr: '1',
                        })}
                      >
                        Report an Issue
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
