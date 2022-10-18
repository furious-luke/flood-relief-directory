import { styled, css } from '../stitches.config'

export const textVariants = css({
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
    color: {
      primary: {
        color: '$blueberry',
      },
      secondary: {
        color: '$lightOrange',
      },
      accent: {
        color: '$lightOrange',
      },
    },
  },
})

export const Text = styled('p', textVariants, {
  fontFamily: '$default',
  fontSize: '$2',
  color: '$blueberry',
})
