import {mauve} from '@radix-ui/colors'
import {styled} from '../stitches.config'

export const Button = styled('button', {
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 5,
  margin: 0,
  fontFamily: '$muller',
  fontSize: '$2',
  cursor: 'pointer',
  outline: 'inherit',
  borderRadius: 4,
  variants: {
    shape: {
      round: {
        borderRadius: '50%',
      },
    },
    kind: {
      minimal: {
        '&:hover': {
          backgroundColor: mauve.mauve4,
        },
      },
    },
  },
})
