import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'

import { Home } from '@screens/Home'

import theme from '@src/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent backgroundColor='transparent' />

      <Home />
    </ThemeProvider>
  )
}
