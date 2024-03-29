import * as React from 'react'
import type {AppProps} from 'next/app'
import {theme, globalCss} from '../stitches.config'

const globalStyles = globalCss({
  html: {
    padding: 0,
    margin: 0,
  },
  body: {
    height: '100vh',
    padding: 0,
    margin: 0,
    backgroundColor: '$white',
  },
  a: {
    color: '$blueberry',
  },
  '*': {
    boxSizing: 'border-box',
  },
  '@font-face': [
      {
          fontFamily: 'Muller',
          src: 'url("/fonts/Muller-Regular.ttf") format("truetype")',
          fontStyle: 'normal',
          fontWeight: 400,
      },
      {
          fontFamily: 'Inter',
          src: 'url("/fonts/Inter-Regular.ttf") format("truetype")',
          fontStyle: 'normal',
          fontWeight: 400,
    },
  ],
})

function MyApp({Component, pageProps}: AppProps) {
  globalStyles()
  React.useEffect(() => {
    document.documentElement.dataset.scroll = '0'
    document.addEventListener('scroll', () => {
      document.documentElement.dataset.scroll = String(window.scrollY)
    })
  }, [])
  return (
    <div className={theme}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
