import { LinkIcon } from 'lucide-react'
import {
  Portal,
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@ark-ui/react'
import { css } from '../../../styled-system/css'
import { square } from '../../../styled-system/patterns'

export function HeadingLink({ id }: { id: string }) {
  // const [isToolTipVisible, setIsToolTipVisible] = useState(false)
  const copyLinkToClipboard = () => {
    // setIsToolTipVisible(true)
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(`${window.location.origin}${window.location.pathname}#${id}`)
        .catch((error) => {
          console.error('Error copying text to clipboard:', error)
        })

      setTimeout(() => {
        // setIsToolTipVisible(false)
      }, 1000)
    } else {
      console.error('Clipboard API is not available in this browser')
    }
  }

  return (
    <div className={css({ mt: '2em' })}>
      <Tooltip openDelay={0} positioning={{ placement: 'top' }}>
        <TooltipTrigger
          className={css({
            display: 'flex',
            alignItems: 'center',
            fontSize: 'sm',
            fontWeight: 'semibold',
            color: {
              base: 'green.700',
              _hover: 'green.800',
            },
            textDecoration: 'underline',
            transition: 'color ease 0.2s',
            cursor: 'pointer',
          })}
          onClick={() => copyLinkToClipboard()}
        >
          <LinkIcon strokeWidth="3" className={square({ size: '3.5' })} />
          <div>
            <span className={css({ ml: '1' })}>Share Section</span>
          </div>
        </TooltipTrigger>
        <Portal>
          <TooltipPositioner>
            <TooltipContent
              className={css({
                alignItems: 'center',
                rounded: 'md',
                px: '2',
                bg: 'gray.800',
                fontSize: 'xs',
                fontWeight: 'medium',
                color: 'white',
                zIndex: '10',
                position: 'relative',
                lineHeight: 'loose',
                _motionSafe: {
                  animationDuration: 'token(durations.fast)',
                  _open: {
                    animationName: 'enter',
                    '--enter-opacity': '0',
                    '--enter-translate-y': 'token(sizes.2)',
                  },
                  _closed: {
                    animationName: 'exit',
                    '--exit-opacity': '0',
                    // '--exit-translate-y': 'token(sizes.1)',
                  },
                },
              })}
            >
              Click to copy link
            </TooltipContent>
          </TooltipPositioner>
        </Portal>
      </Tooltip>
    </div>
  )
}
