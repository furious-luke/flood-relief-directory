import * as React from 'react'
import { styled } from '../stitches.config'

const Article = styled('article', {
  variants: {
    striped: {
      true: {
        '& > *:nth-child(even)': {
          backgroundColor: '$dullWhite',
        },
      },
    },
  },
})

export interface SectionStackProps {
  striped?: boolean
  children?: React.ReactNode
}

export function SectionStack(props: SectionStackProps): JSX.Element {
  const { children, striped = false } = props
  return (
    <Article striped={striped}>
      {children}
    </Article>
  )
}

const SectionWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

const SectionInner = styled('section', {
  width: '100%',
})

export interface SectionProps {
  children?: React.ReactNode
}

export function Section(props: SectionProps): JSX.Element {
  const { children } = props
  return (
    <SectionWrapper>
      <SectionInner>
        {children}
      </SectionInner>
    </SectionWrapper>
  )
}

SectionStack.Section = Section
