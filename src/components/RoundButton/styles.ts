import { LinearGradient } from 'expo-linear-gradient'
import { Platform } from 'react-native'
import styled, { css } from 'styled-components/native'
import { ButtonNewProps } from '.'

type ContainerProps = Pick<ButtonNewProps, 'focused'>

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradientButtom,
  start: { x: 1, y: 0 },
  end: { x: 1, y: 1 },
}))<ContainerProps>`
  ${({ theme }) => css`
    width: ${Platform.OS === 'ios' ? '80px' : '70px'};
    height: ${Platform.OS === 'ios' ? '80px' : '70px'};
    border-radius: ${Platform.OS === 'ios' ? '40px' : '35px'};
    margin-bottom: 20px;
    border: 8px solid ${theme.colors.primary_color};
    align-items: center;
    justify-content: center;
  `}
`
