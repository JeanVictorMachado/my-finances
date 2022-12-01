import styled, { css } from 'styled-components/native'
import { ButtonNewProps } from '.'

type ContainerProps = Pick<ButtonNewProps, 'focused'>

export const Container = styled.View<ContainerProps>`
  ${({ theme, focused }) => css`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    margin-bottom: 20px;
    background-color: ${focused ? '#006CA3' : '#00617d'};
    border: 8px solid ${theme.colors.background_color};
    align-items: center;
    justify-content: center;
  `}
`
