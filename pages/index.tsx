import * as React from 'react'
import Head from 'next/head'
import Fuse from 'fuse.js'
import { styled, keyframes } from '../stitches.config'
import type { Category } from '../components/ProvidersList'
import { ProvidersList } from '../components/ProvidersList'
import { ResponsiveQuickNav } from '../components/QuickNav'
import { Text } from '../components/Text'
import { AppShell } from '../components/AppShell'
import { VisibleAt } from '../components/QuickNav'
import { InstaLink } from '../components/InstaLink'
import { SearchInput } from '../components/SearchInput'
import { Button } from '../components/Button'
import { getProvidersList } from '../libs/getProvidersList'

const PaddedBox = styled('div', {
  overflow: 'clip',
  '@bp1': {
    padding: '0 10px 10px 10px',
  },
})

interface HomeProps {
  categories: Category[],
}

export default function Home(props: HomeProps) {
  const { categories = [] } = props
  const documents = categories.map(c => c.subcategories.map(s => s.providers)).flat(2)
  const index = new Fuse(documents, {
    keys: ['title', 'description', 'keywords'],
    includeScore: true,
  })
  return (
    <div>
      <Head>
        <title>Flood Relief Directory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell>
        <div />
        <VisibleAt bp2>
          <div style={{marginBottom: '30px'}}>
            <img src="/banner.png" width="100%" />
          </div>
        </VisibleAt>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', margin: '10px 20px 0 0'}}>
          <InstaLink scale={1.5} />
        </div>
        <div>
          <SearchInput index={index} />
        </div>
        <PaddedBox>
          <VisibleAt bp1>
            <div style={{marginBottom: '30px'}}>
              <img src="/banner.png" width="100%" />
            </div>
          </VisibleAt>
          <Text style={{lineHeight: '22px'}}>
            A collection of resources for the community affected by the 2022 natural disasters in the Northern Rivers
            of NSW.&nbsp;
            <VisibleAt as="span" bp1>
              Click on the sections in the menu above, or scroll all the way through.
            </VisibleAt>
            <VisibleAt as="span" bp2>
              Click on the sections to the right, or scroll all the way through.
            </VisibleAt>
          </Text>
          <Text style={{lineHeight: '22px'}}>
            Please email <a href="mailto:floodreliefdirectory@gmail.com">floodreliefdirectory@gmail.com</a> if you have
            submissions or updates.
          </Text>
          <ProvidersList categories={categories} />
          <div style={{position: 'sticky', bottom: 0, display: 'flex', justifyContent: 'flex-end'}}>
            <Button
              css={{
                margin: '0 10px 10px 0',
                padding: '10px 30px 10px 30px',
                borderRadius: 16,
                backgroundColor: '$lightPeach',
                '&:hover': {
                  backgroundColor: '$lightPeach',
                },
                '@media (prefers-reduced-motion: no-preference)': {
                  transition: '400ms ease-in-out',
                },
                transform: 'translateY(100px)',
                'html:not([data-scroll="0"]) &': {
                  transform: 'none',
                },
              }}
              kind="minimal"
              onClick={() => {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
              }}
            >
              Back to top
            </Button>
          </div>
        </PaddedBox>
        <ResponsiveQuickNav index={index} categories={categories} />
      </AppShell>
    </div>
  )
}

export async function getStaticProps() {
  const categories: Category[] = await getProvidersList()
  return {
    props: {
      categories,
    },
  }
}
