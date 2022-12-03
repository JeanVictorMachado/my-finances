import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native-element-textinput'

export const Input = styled(TextInput).attrs(({ theme }) => ({
  inputStyle: {
    fontSize: 16,
    color: theme.colors.text_100,
  },
  iconStyle: {
    tintColor: theme.colors.text_100,
  },
  placeholderTextColor: theme.colors.border_color,
}))`
  ${({ theme }) => css`
    height: 70px;
    background-color: transparent;
    border-bottom-color: ${theme.colors.border_color};
    border-bottom-width: 1px;
    padding-right: 5px;
  `}
`
