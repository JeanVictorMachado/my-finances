import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native-element-textinput'

export type DatePickerProps = {
  error?: string | false | undefined
}

export const Container = styled.View`
  ${({ theme }) => css`
    position: relative;
  `}
`

export const Input = styled(TextInput).attrs(({ theme }) => ({
  inputStyle: {
    fontSize: 16,
    color: theme.colors.text_100,
  },
  iconStyle: {
    tintColor: theme.colors.text_100,
  },
  placeholderTextColor: theme.colors.border_color,
}))<DatePickerProps>`
  ${({ theme, error }) => css`
    height: 70px;
    background-color: transparent;
    border-bottom-color: ${!error ? theme.colors.border_color : 'red'};
    border-bottom-width: 1px;
    padding-right: 5px;
  `}
`

export const ErrorText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xsmall};
    background-color: ${theme.colors.secondary_color};
    color: red;
    padding-left: 8px;
    position: absolute;
    bottom: -7px;
    right: 0;
  `}
`
