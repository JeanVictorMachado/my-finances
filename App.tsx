import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import { ContextProviders } from '@hooks/index'
import { Routes } from '@src/routes/index.routes'

import theme from '@src/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' backgroundColor='#212121' />

      <NavigationContainer>
        <ContextProviders>
          <Routes />
        </ContextProviders>
      </NavigationContainer>
    </ThemeProvider>
  )
}
