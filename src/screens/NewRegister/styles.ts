import styled, { css } from 'styled-components/native'

export const NewRegisterText = styled.Text`
  ${({ theme }) => css`
    margin-bottom: ${theme.margins.large};
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.text_300};
  `}
`
