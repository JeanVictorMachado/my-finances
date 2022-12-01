import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import { Routes } from '@src/routes/index.routes'

import theme from '@src/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' backgroundColor='#212121' />

      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  )
}
