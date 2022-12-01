import { Animated } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: flex-end;
    background-color: ${theme.colors.background_color};
  `}
`

export const Content = styled(Animated.View)`
  ${({ theme }) => css`
    height: 80%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: ${theme.colors.secondary_color};
  `}
`

export const NewRegisterText = styled.Text`
  ${({ theme }) => css`
    margin-bottom: ${theme.margins.large};
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.text_300};
  `}
`
