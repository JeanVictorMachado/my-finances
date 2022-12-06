import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'expo-status-bar'

import { ContextProviders } from '@hooks/index'
import { Routes } from '@src/routes/index.routes'

import theme from '@src/styles/theme'
import Toast from 'react-native-toast-message'

export default function App() {
  return (
    <>
      <Toast />
      <ThemeProvider theme={theme}>
        <StatusBar style='light' />

        <NavigationContainer>
          <ContextProviders>
            <Routes />
          </ContextProviders>
        </NavigationContainer>
      </ThemeProvider>
    </>
  )
}
