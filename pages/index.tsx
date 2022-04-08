import * as React from 'react'
import Head from 'next/head'
import { styled } from '../stitches.config'
import type { Category } from '../components/ProvidersList'
import { ProvidersList } from '../components/ProvidersList'
import { ResponsiveQuickNav } from '../components/QuickNav'
import { Message } from '../components/Message'
import { AppShell } from '../components/AppShell'
import { VisibleAt } from '../components/QuickNav'
import { getProvidersList } from '../libs/getProvidersList'

const Columns = styled('div', {
  display: 'flex',
  flexDirection: 'column-reverse',
  '@bp2': {
    display: 'grid',
    gridTemplateColumns: '1fr 600px 1fr',
  }
})

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
        <div />
        <div />
        <PaddedBox>
          <VisibleAt bp1>
            <div style={{marginBottom: '30px'}}>
              <img src="/banner.png" width="100%" />
            </div>
          </VisibleAt>
          <Message>
            Please email us at <a href="mailto:floodreliefdirectory@gmail.com">floodreliefdirectory@gmail.com</a> with
            any suggestions for additional services.
          </Message>
          <ProvidersList categories={categories} />
        </PaddedBox>
        <ResponsiveQuickNav categories={categories} />
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
