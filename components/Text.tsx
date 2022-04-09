import { styled } from '../stitches.config'

export const Text = styled('p', {
  fontFamily: '$muller',
  fontSize: '$2',
  color: '$hiContrast',
  variants: {
    size: {
      sm: {
        fontSize: '$1',
      },
      md: {
        fontSize: '$2',
      },
      lg: {
        fontSize: '$3',
      },
      bg: {
        fontSize: '$4',
      },
      xl: {
        fontSize: '$5',
      },
    },
  },
})
