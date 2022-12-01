import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    height: 80px;
    padding-top: 14px;
    padding-left: ${theme.spaces.medium};
    padding-right: ${theme.spaces.medium};
    padding-bottom: ${theme.spaces.medium};
    border-radius: ${theme.spaces.medium};
    background-color: ${theme.colors.secondary_color};
    margin-bottom: ${theme.margins.small};
    z-index: ${theme.layers.base};
    justify-content: space-between;
  `}
`

export const CategoryNameBox = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
`

export const CategoryName = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.fonts.sizes.medium};
    margin-left: ${theme.margins.small};
    color: ${theme.colors.text_300};
  `}
`
