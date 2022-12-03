import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    margin-left: 24px;
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.text_100};
  `}
`
