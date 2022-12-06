import styled, { css } from 'styled-components/native'

export const Comtainer = styled.View`
  ${() => css`
    height: 170px;
    width: 170px;
    position: relative;
  `}
`

export const DotsBox = styled.View`
  ${() => css`
    position: absolute;
    top: 57px;
    left: 58px;
  `}
`

export const DotBox = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
  `}
`

export const PorcetText = styled.Text`
  ${({ theme }) => css`
    margin-left: 8px;
    color: ${theme.colors.text_200};
  `}
`
