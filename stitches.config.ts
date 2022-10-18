import {createTheme} from 'design-system/stitches.config'
export {styled, css, globalCss, getCssText, keyframes} from 'design-system/stitches.config'
export type {CSS} from 'design-system/stitches.config'

export const theme = createTheme({
  fonts: {
    inter: 'Inter',
    default: '$inter',
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
