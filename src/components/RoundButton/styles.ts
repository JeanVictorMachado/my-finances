import { Platform } from 'react-native'
import styled, { css } from 'styled-components/native'
import { ButtonNewProps } from '.'

type ContainerProps = Pick<ButtonNewProps, 'focused'>

export const Container = styled.View<ContainerProps>`
  ${({ theme, focused }) => css`
    width: ${Platform.OS === 'ios' ? '80px' : '70px'};
    height: ${Platform.OS === 'ios' ? '80px' : '70px'};
    border-radius: ${Platform.OS === 'ios' ? '40px' : '35px'};
    margin-bottom: 20px;
    background-color: ${focused ? '#006CA3' : '#00617d'};
    border: 8px solid ${theme.colors.background_color};
    align-items: center;
    justify-content: center;
  `}
`
