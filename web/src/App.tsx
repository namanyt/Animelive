import { ColorScheme, ColorSchemeProvider, MantineProvider, useMantineTheme } from '@mantine/core'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { Provider as ReduxProvider } from 'react-redux'

import './index.css'
import { store } from './Utils/store/store'
import { useState } from 'react'

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <MantineProvider theme={{
        colorScheme: 'dark'
      }}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={setColorScheme}>
          <RedwoodApolloProvider>
            <ReduxProvider store={store}>
              <Routes />
            </ReduxProvider>
          </RedwoodApolloProvider>
        </ColorSchemeProvider>
      </MantineProvider>
    </RedwoodProvider >
  )
}

export default App
