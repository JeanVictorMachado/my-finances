import styled, { css } from 'styled-components/native'

export type InputProps = {
  error?: string | false | undefined
}

export const Container = styled.View`
  position: relative;
`

export const Input = styled.TextInput.attrs({})`
  ${({ theme }) => css`
    width: 100%;
    height: 40px;
    font-size: 20px;
  `}
`

export const InputBorder = styled.View<InputProps>`
  ${({ theme, error }) => css`
    width: 100%;
    height: 2px;
    background-color: ${!error ? theme.colors.border_color : 'red'};
    margin-bottom: 16px;
  `}
`

export const IconBox = styled.TouchableOpacity<InputProps>`
  ${({ error }) => css`
    position: absolute;
    top: 14px;
    right: ${error ? '40px' : '5px'};
  `}
`
