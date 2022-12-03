import styled, { css } from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    height: 50px;
    margin-top: ${theme.margins.xlarge};
    background-color: ${theme.colors.blue_300};
    border-radius: 16px;
    justify-content: center;
    align-items: center;
  `}
`

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};
    font-weight: ${theme.fonts.bold};
    color: ${theme.colors.text_100};
  `}
`
