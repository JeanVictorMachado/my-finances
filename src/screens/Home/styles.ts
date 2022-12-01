import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background_color};
  `}
`

export const Content = styled.View`
  ${({ theme }) => css`
    padding-top: ${theme.spaces.large};
    padding-left: ${theme.spaces.medium};
    padding-right: ${theme.spaces.medium};
  `}
`

export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    margin-bottom: ${theme.spaces.medium};
    color: ${theme.colors.text_300};
  `}
`
