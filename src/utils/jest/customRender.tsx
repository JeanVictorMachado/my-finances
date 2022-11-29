import { ReactElement } from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import theme from '@src/styles/theme'

export const customRender = (children: ReactElement) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
