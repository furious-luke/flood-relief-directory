import * as React from 'react'
import {InfoCircledIcon} from '@radix-ui/react-icons'
import {styled} from '../stitches.config'
import {Text} from './Text'

const Box = styled('div', {
  padding: '$2',
  backgroundColor: '$lightBlueA',
  border: '1px solid $lightBlue',
  borderRadius: 4,
})

interface MessageProps {
  children?: React.ReactNode,
}

export function Message(props: MessageProps) {
  const {children} = props
  return (
    <Box>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{width: 20, height: 20, marginRight: 10}}>
          <InfoCircledIcon style={{width: 20, height: 20}} />
        </div>
        <Text>{children}</Text>
      </div>
    </Box>
  )
}
