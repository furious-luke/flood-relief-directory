import * as React from 'react'
import { styled } from '../stitches.config'

interface DefinitionListFunc extends React.FC<{}> {
  Term: React.FC<{}>,
  Definition: React.FC<{}>
}

const Term = styled('dt', {
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
