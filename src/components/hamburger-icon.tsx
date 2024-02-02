import type { ComponentProps, ReactElement } from 'react'
import { css } from '../../styled-system/css'

export function HamburgerIcon(props: ComponentProps<'svg'>): ReactElement {
  return (
    <svg
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
      className={css({
        '& g': {
          transformOrigin: 'center',
          transitionProperty: 'transform',
          transitionDuration: 'fast',
          transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
        },
        '& path': {
          opacity: '1',
          transitionProperty: 'transform, opacity',
          transitionDuration: '0.2s, 0.2s',
          transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1), ease',
          transitionDelay: '0.2s, 0.2s',
        },
        '_groupExpanded': {
          '& g': {
            transitionDelay: 'fast',
          },
          '& path': {
            transitionDelay: '0s, 0.2s',
            transitionDuration: '0.2s, 0s',
          },
        },
      })}
    >
      <g
        className={css({
          _groupExpanded: {
            transform: 'rotate(45deg)',
          },
        })}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16"
          className={css({
            _groupExpanded: {
              transform: 'translate3d(0, 6px, 0)',
            },
          })}
        />
      </g>
      <g
        className={css({
          _groupExpanded: {
            transform: 'rotate(-45deg)',
          },
        })}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 18h16"
          className={css({
            _groupExpanded: {
              transform: 'translate3d(0, -6px, 0)',
            },
          })}
        />
      </g>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12h16"
        className={css({
          _groupExpanded: {
            opacity: '0',
          },
        })}
      />
    </svg>
  )
}
