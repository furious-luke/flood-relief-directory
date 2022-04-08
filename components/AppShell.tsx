import {styled} from '../stitches.config'

interface AppShellFunc extends React.FC<{}> {
  Header: React.FC<{}>
}

const Header = styled('div', {
  gridColumn: '1/-1',
})

export const AppShell: AppShellFunc = Object.assign(
  styled('main', {
    height: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    '@bp2': {
      display: 'grid',
      gridTemplateColumns: '1fr 700px 1fr',
    },
  }),
  {
    Header,
  },
)
