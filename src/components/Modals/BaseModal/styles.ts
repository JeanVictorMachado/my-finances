import { Animated, Platform } from 'react-native'
import styled, { css } from 'styled-components/native'

export type CloseButtonContainerProps = {
  isStep?: boolean
}

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.background_color};
  `}
`

export const ReturnBox = styled.TouchableOpacity`
  ${() => css`
    margin-top: ${Platform.OS === 'ios' ? '60px' : '40px'};
    margin-left: 16px;
  `}
`

export const Content = styled(Animated.View)`
  ${({ theme }) => css`
    bottom: 0;
    position: absolute;
    height: 80%;
    background-color: ${theme.colors.secondary_color};
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 32px;
    padding-top: 16px;
  `}
`
