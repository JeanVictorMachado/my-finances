import styled, { css } from 'styled-components/native'

type RadiosBorderProps = {
  error?: string | false | undefined
}

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

export const RadiosBorder = styled.View<RadiosBorderProps>`
  ${({ theme, error }) => css`
    height: 1px;
    width: 100%;
    background-color: ${!error ? theme.colors.border_color : 'red'};
    position: relative;
  `}
`

export const ErrorText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xsmall};
    background-color: ${theme.colors.secondary_color};
    color: red;
    padding-left: 8px;
    position: absolute;
    top: -9px;
    right: 0;
  `}
`
