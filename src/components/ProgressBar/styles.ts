import styled, { css } from 'styled-components/native'

type BarProps = {
  barPorcent: number
  color: string
}

export const Container = styled.View`
  ${({ theme }) => css``}
`

export const Content = styled.View`
  ${({ theme }) => css`
    height: 5px;
    border-radius: ${theme.spaces.medium};
    background-color: ${theme.colors.background_color};
    position: relative;
  `}
`

export const Bar = styled.View<BarProps>`
  ${({ theme, barPorcent, color }) => css`
    width: ${`${barPorcent}%`};
    height: 5px;
    border-radius: ${theme.spaces.medium};
    background-color: ${color};
    position: absolute;
  `}
`

export const ValuesBox = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const valueText = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 4px;
    font-size: ${theme.fonts.sizes.xsmall};
    color: ${theme.colors.text_200};
  `}
`
