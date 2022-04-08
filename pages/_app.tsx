import * as React from 'react'
import type { AppProps } from 'next/app'
import { globalCss } from '../stitches.config'

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
    color: 'inherit',
  },
  '*': {
    boxSizing: 'border-box',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
