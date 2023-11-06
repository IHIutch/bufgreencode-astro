import * as Tooltip from '@radix-ui/react-tooltip'
import { LinkIcon } from 'lucide-react'
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
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={0}>
          <Tooltip.Trigger asChild>
            <button
              type="button"
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
            </button>
          </Tooltip.Trigger>
          <Tooltip.Content
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
              '&[data-state=open]': {
                animation:
                  'tooltipFadeIn 0.1s ease-out, tooltipSlideIn 0.15s ease-out',
              },
              '&[data-state=closed]': {
                animation:
                  'tooltipFadeOut 0.1s ease-in, tooltipSlideOut 0.1s ease-in',
              },
            })}
          >
            Copy link to section
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  )
}
