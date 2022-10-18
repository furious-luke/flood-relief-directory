import * as React from 'react'
import { styled } from '../stitches.config'
import { textVariants } from './Text'

const Term = styled('dt', textVariants, {
  fontFamily: '$default',
  fontWeight: '600',
  fontSize: '$1',
  color: '$blueberry',
  textTransform: 'uppercase',
})

const Definition = styled('dd', textVariants, {
  fontFamily: '$default',
  fontSize: '$1',
  marginLeft: 0,
  color: '$blueberry',
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
