import {mauve} from '@radix-ui/colors'
import {styled} from '../stitches.config'

export const Button = styled('button', {
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 5,
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
  borderRadius: 4,
  variants: {
    kind: {
      minimal: {
        '&:hover': {
          backgroundColor: mauve.mauve4,
        },
      },
    },
  },
})
