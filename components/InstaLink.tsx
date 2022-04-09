import * as React from 'react'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { openInNewTab } from '../libs/openInNewTab'
import { Button } from './Button'

interface InstaLinkProps {
  scale?: number
}

export function InstaLink(props: InstaLinkProps) {
  const {scale = 1} = props
  const width = scale * 20
  const height = scale * 20
  return (
    <div style={{padding: 10}}>
      <Button kind="minimal">
        <a style={{display: 'block'}} href="https://www.instagram.com/floodreliefdirectory" onClick={openInNewTab}>
          <InstagramLogoIcon style={{display: 'block'}} width={width} height={height} />
        </a>
      </Button>
    </div>
  )
}
