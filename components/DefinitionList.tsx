import * as React from 'react'
import { styled } from '../stitches.config'
import { textVariants } from './Text'

const Term = styled('dt', textVariants, {
  fontFamily: '$system',
  fontWeight: '600',
  fontSize: '$1',
  color: '$hiContrast',
  textTransform: 'uppercase',
})

const Definition = styled('dd', {
  fontFamily: '$system',
  fontSize: '$1',
  color: '$hiContrast',
  marginLeft: 0,
})

interface DefinitionListFunc extends React.FC<{}> {
  Term: typeof Term,
  Definition: typeof Definition,
}

export const DefinitionList: DefinitionListFunc = Object.assign(
  styled('dl', {
    display: 'grid',
    gridTemplateColumns: 'max-content auto',
    rowGap: '$1',
    columnGap: '$2',
    margin: 0,
  }),
  {
    Term,
    Definition,
  },
)
