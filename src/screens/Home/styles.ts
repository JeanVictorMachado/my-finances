import styled, { css } from 'styled-components/native'

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

export const TitleContainer = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.spaces.large};
    flex-direction: row;
    justify-content: center;
  `}
`

export const BorderLeft = styled.View`
  ${({ theme }) => css`
    width: 5px;
    margin-right: 8px;
    background-color: ${theme.colors.border_color};
  `}
`

export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xlarge};
    color: ${theme.colors.text_200};
  `}
`
