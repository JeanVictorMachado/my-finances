import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    margin-bottom: 20px;
    background-color: ${theme.colors.green_300};
    border: 8px solid ${theme.colors.background_color};
    align-items: center;
    justify-content: center;
  `}
`
