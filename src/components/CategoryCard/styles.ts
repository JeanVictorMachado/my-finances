import styled, { css } from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 1, y: 0 },
  end: { x: 1, y: 1 },
}))`
  ${({ theme }) => css`
    height: 70px;
    padding-top: 14px;
    padding-left: ${theme.spaces.medium};
    padding-right: ${theme.spaces.medium};
    padding-bottom: ${theme.spaces.medium};
    border-radius: ${theme.spaces.medium};
    background-color: ${theme.colors.secondary_color};
    margin-bottom: ${theme.margins.small};
    justify-content: space-between;
    z-index: ${theme.layers.base};
  `}
`

export const Content = styled.View`
  ${() => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`

export const CategoryNameBox = styled.View`
  ${() => css`
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
    color: ${theme.colors.text_200};
  `}
`

export const ValuesBox = styled.View`
  ${() => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`

export const SeparateText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text_300};
  `}
`

export const valueText = styled.Text`
  ${({ theme }) => css`
    margin-top: 3px;
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.text_200};
  `}
`
