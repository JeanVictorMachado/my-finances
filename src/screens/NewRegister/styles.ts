import styled, { css } from 'styled-components/native'

export const NewRegisterText = styled.Text`
  ${({ theme }) => css`
    margin-bottom: ${theme.margins.large};
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.text_300};
  `}
`

export const ButtomBox = styled.TouchableOpacity`
  ${() => css`
    width: 80px;
    margin: auto;
    align-items: center;
  `}
`

export const ReturnBox = styled.TouchableOpacity`
  ${({ theme }) => css`
    margin-top: 32px;
    margin-left: 2px;
    flex-direction: row;
    align-items: center;
  `}
`

export const ReturnText = styled.Text`
  ${({ theme }) => css`
    margin-left: 23px;
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.text_200};
  `}
`

export const RadiosBox = styled.View`
  ${() => css`
    height: 70px;
    flex-direction: row;
    border-bottom: 1px solid;
  `}
`

export const RadiosBorder = styled.View`
  ${({ theme }) => css`
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.border_color};
  `}
`
