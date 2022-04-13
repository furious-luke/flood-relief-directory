import {createTheme} from 'design-system/stitches.config'
export {styled, css, globalCss, getCssText, keyframes} from 'design-system/stitches.config'
export type {CSS} from 'design-system/stitches.config'

export const theme = createTheme({
  fonts: {
    muller: 'Muller',
    default: '$muller',
  },
  colors: {
    white: '#fefefe',
    lightBlue: '#8fd3f1',
    lightBlueA: '#8fd3f130',
    dullWhite: '#f0f0f0',
    blueberry: '#303C87',
    lightOrange: '#EEA243',
    lightPeach: '#FBC2A0',

    hiContrast: '$blueberry',

    inputBorder: '$lightPeach',
    inputBorderFocus: '$lightPeach',
  },
})

// export const theme = createTheme({
//   media: {
//     bp1: '(max-width: 919px)',
//     bp2: '(min-width: 920px)',
//   },
//   theme: {
//     fonts: {
//       system: 'Untitled Sans, -apple-system, system-ui, sans-serif',
//       muller: 'Muller',
//     },
//     colors: {
//       hiContrast: 'hsl(206,10%,5%)',
//       loContrast: 'white',
//       white: '#fefefe',
//       lightBlue: '#8fd3f1',
//       lightBlueA: '#8fd3f130',
//       dullWhite: '#f0f0f0',
//       blueberry: '#303C87',
//       lightOrange: '#EEA243',
//       lightPeach: '#FBC2A0',
//     },
//     space: {
//       1: '5px',
//       2: '10px',
//       3: '15px',
//     },
//     fontSizes: {
//       1: '12px',
//       2: '14px',
//       3: '17px',
//       4: '20px',
//       5: '24px',
//     },
//   },
// })
