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
    height: 6px;
    border-radius: ${theme.spaces.medium};
    background-color: ${theme.colors.background_color};
    position: relative;
  `}
`

export const Bar = styled.View<BarProps>`
  ${({ theme, barPorcent, color }) => css`
    width: ${`${barPorcent}%`};
    height: 6px;
    border-radius: ${theme.spaces.medium};
    background-color: ${color};
    position: absolute;
  `}
`
