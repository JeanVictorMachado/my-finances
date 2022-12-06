import styled, { css } from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background_color};
  `}
`

export const Content = styled.View`
  ${({ theme }) => css`
    padding-top: ${theme.spaces.medium};
    padding-left: ${theme.spaces.medium};
    padding-right: ${theme.spaces.medium};
    z-index: ${theme.layers.base};
  `}
`

export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    margin-bottom: ${theme.spaces.medium};
    color: ${theme.colors.text_300};
  `}
`
