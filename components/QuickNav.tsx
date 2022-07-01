import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import {styled} from '../stitches.config'
import {mauve, blackA} from '@radix-ui/colors'
import {IconButton} from 'design-system/IconButton'
import {Icon} from 'design-system/Icon'
import {VisibleAt} from 'design-system/VisibleAt'
import {HamburgerMenuIcon, Cross1Icon} from '@radix-ui/react-icons'
import type {Heading} from './ProvidersList'
import {Text} from './Text'
import {InstaLink} from './InstaLink'
import {SearchInput} from './SearchInput'

const SCROLLBAR_SIZE = 8;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  minWidth: 300,
  paddingLeft: 40,
  height: '95vh',  // was 100vh, but was clipping at the top
  borderRadius: 4,
  overflow: 'hidden',
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  height: '100%',
  borderRadius: 'inherit',
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  // background: blackA.blackA6,
  transition: 'background 160ms ease-out',
  // '&:hover': { background: blackA.blackA8 },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: mauve.mauve8,
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: SCROLLBAR_SIZE,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: blackA.blackA8,
});

const ScrollArea = StyledScrollArea;
const ScrollAreaViewport = StyledViewport;
const ScrollAreaScrollbar = StyledScrollbar;
const ScrollAreaThumb = StyledThumb;
const ScrollAreaCorner = StyledCorner;

export const SoftLink = styled('a', {
  textDecoration: 'none',
  '&:hover': {
    borderBottom: '1px $hiContrast dotted',
  },
})

export function ResponsiveQuickNav(props: any) {
  const {index, headings} = props
  const [visible, setVisible] = React.useState(false)
  return (
    <>
      <VisibleAt css={{position: 'sticky', top: 0, background: 'white'}} showAt="initial" hideAt="bp2">
        {!visible && (
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 5, background: 'white', padding: 10}}>
            <SearchInput css={{mr: 10}} index={index} />
            <InstaLink />
            <IconButton size="2" onClick={() => setVisible(true)}>
              <Icon size="2">
                <HamburgerMenuIcon />
              </Icon>
            </IconButton>
          </div>
        )}
        {visible && (
          <StickyQuickNav
            headings={headings}
            showClose
            onClose={() => setVisible(false)}
          />
        )}
      </VisibleAt>
      <VisibleAt showAt="bp2">
        <StickyQuickNav headings={headings} />
      </VisibleAt>
    </>
  )
}

function StickyQuickNav(props: any) {
  const {headings, showClose, onClose} = props
  return (
    <ScrollArea style={{position: 'sticky', top: 0}}>
      <ScrollAreaViewport>
        <QuickNav headings={headings} showClose={showClose} onClose={onClose} />
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollArea>
  )
}

interface QuickNaveProps {
  headings: Heading[],
  showClose: boolean,
  onClose: (...args: any[]) => any,
}

export function QuickNav(props: QuickNaveProps) {
  const {headings, showClose, onClose} = props
  return (
    <aside>
      {showClose && (
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <div style={{padding: '10px'}}>
            <IconButton size="2" onClick={() => onClose()}>
              <Icon size="2">
                <Cross1Icon style={{display: 'block'}} />
              </Icon>
            </IconButton>
          </div>
        </div>
      )}
      {headings.map(h => (
        <>
          <Text as="h2" size="xl" color="secondary">{h.name}</Text>
          <div style={{paddingRight: 20}}>
            {h.categories.map((c: any, i: number) => <Category key={i} category={c} onClose={onClose} />)}
          </div>
        </>
      ))}
    </aside>
  )
}

function Category(props: any) {
  const {category, onClose} = props
  return (
    <>
      <Text><SoftLink href={`#${category.id}`} onClick={onClose}>{category.name}</SoftLink></Text>
      {/*
         {category.subcategories.map((s: any, i: number) => <Subcategory key={i} subcategory={s} onClose={onClose} />)}
       */}
    </>
  )
}

function Subcategory(props: any) {
  const {subcategory, onClose} = props
  return (
    <>
      <Text style={{marginLeft: '30px'}}>
        <SoftLink href={`#${subcategory.id}`} onClick={onClose}>{subcategory.name}</SoftLink>
      </Text>
    </>
  )
}
