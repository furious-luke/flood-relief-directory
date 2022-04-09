import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, getCssText } = createStitches({
  media: {
    bp1: '(max-width: 919px)',
    bp2: '(min-width: 920px)',
  },
  theme: {
    fonts: {
      system: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      muller: 'Muller',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
      white: '#fefefe',
      lightBlue: '#8fd3f1',
      lightBlueA: '#8fd3f130',
      dullWhite: '#f0f0f0',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '17px',
      4: '20px',
      5: '24px',
    },
  },
})
