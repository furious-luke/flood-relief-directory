import * as React from 'react'
import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../stitches.config'
import { Text } from './Text'

const Article = styled('article', {
  display: 'flex',
  alignItems: 'flex-start',
})

const AvatarRoot = styled(Avatar.Root, {
  flex: '0 0 auto',
  marginRight: '$2',
})

const Heading = styled(Text, {
  margin: '0 0 10px 0',
  fontSize: '$3',
  fontWeight: '600',
})

const Description = styled(Text, {
  marginTop: '$1',
  marginBottom: '$1',
  lineHeight: '24px',
})

interface ListItemProps {
  image?: string,
  title: string,
  subtitle?: string,
  description?: string,
  children?: React.ReactNode,
}

export function ListItem(props: ListItemProps): JSX.Element {
  const { children, image, title, subtitle, description } = props
  return (
    <Article>
      {image && (
        <AvatarRoot>
          <Avatar.Image
            src={image}
            width="80px"
            height="80px"
          />
          <Avatar.Fallback />
        </AvatarRoot>
      )}
      <div>
        <Heading color="primary">{title}</Heading>
        <Description>{description}</Description>
        {children}
      </div>
    </Article>
  )
}
