import * as React from 'react'
import {InstagramLogoIcon} from '@radix-ui/react-icons'
import {IconButton} from 'design-system/IconButton'
import {Icon} from 'design-system/Icon'
import {openInNewTab} from '../libs/openInNewTab'

export function InstaLink() {
  return (
    <a href="https://www.instagram.com/floodreliefdirectory" onClick={openInNewTab}>
      <IconButton size={{'@initial': '2', '@bp2': '3'}}>
        <Icon size={{'@initial': '2', '@bp2': '3'}}>
          <InstagramLogoIcon />
        </Icon>
      </IconButton>
    </a>
  )
}
