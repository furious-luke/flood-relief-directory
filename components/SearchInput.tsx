import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import {MagnifyingGlassIcon} from '@radix-ui/react-icons'
import {TextInput} from 'design-system/TextInput'
import {styled, keyframes, CSS} from '../stitches.config'
import type {Provider} from './ProvidersList'
import {SoftLink} from './QuickNav'
import {Text} from './Text'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const StyledContent = styled('div', {
  position: 'absolute',
  top: 'calc(100% + 10px)',
  borderRadius: 4,
  padding: 20,
  width: '100%',
  minWidth: 250,
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    animationName: slideUpAndFade,
  },
})

// Exports
export const PopoverContent = StyledContent

const Label = styled(LabelPrimitive.Root, {
  fontSize: 15,
  fontWeight: 500,
  color: '$blueberry',
  userSelect: 'none',
})

const Wrapper = styled('div', {
  maxWidth: 350,
  '@bp1': {
    width: '100%',
  },
  '@bp2': {
    position: 'sticky',
    top: 0,
    marginLeft: 'auto',
    padding: '20px 40px 0 20px',
  },
})

interface SearchInputProps {
  index: any
}

export function SearchInput(props: SearchInputProps & {css?: CSS}) {
  const {css, index} = props
  const [value, setValue] = React.useState('')
  let results = []
  if (value) {
    results = index
      .search(value, {limit: 10})
      .filter((r: any) => r.score < 0.3)
      .map((r: any) => r.item)
  }
  return (
    <Wrapper css={css}>
      <VisuallyHidden.Root>
        <Label htmlFor="search" css={{visibility: 'hidden', lineHeight: 35, marginRight: 15}}>
          Search
        </Label>
      </VisuallyHidden.Root>
      <div style={{position: 'relative'}}>
        <TextInput
          type="text"
          id="search"
          size="2"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        >
          <TextInput.LeftEnhancer>
            <MagnifyingGlassIcon />
          </TextInput.LeftEnhancer>
        </TextInput>
        {!!value && (
          <PopoverContent>
            {results.map((r: Provider) => (
              <div key={r.id}>
                <Text>
                  <SoftLink
                    href={`#${r.id}`}
                    onClick={() => setValue('')}
                  >
                    {r.subcategory} {r.title}
                  </SoftLink>
                </Text>
              </div>
            ))}
            {!results.length && (
              <Text><i>No matches found</i></Text>
            )}
          </PopoverContent>
        )}
      </div>
    </Wrapper>
  )
}
