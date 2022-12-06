import styled, { css, DefaultTheme } from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

type InputsOutputsValueProps = {
  balanceType: 'input' | 'output'
}

export const BalanceContainer = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 1, y: 0 },
  end: { x: 1, y: 1 },
}))`
  ${({ theme }) => css`
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    margin-top: 32px;
    background-color: ${theme.colors.secondary_color};
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const BalanceValue = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xlarge};
    font-weight: ${theme.fonts.bold};
    color: ${theme.colors.text_200};
  `}
`

export const InputsOutputsBox = styled.View`
  ${() => css`
    justify-content: space-between;
  `}
`

export const InputsOutputs = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
  `}
`

export const InputsOutputsContent = styled.View`
  ${({ theme }) => css`
    margin-left: ${theme.spaces.small};
  `}
`

export const InputsOutputsTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text_300};
  `}
`

const inputsOutputsValueModifiers = {
  input: (theme: DefaultTheme) => css`
    color: ${theme.colors.green_300};
  `,
  output: (theme: DefaultTheme) => css`
    color: ${theme.colors.orange_300};
  `,
}

export const InputsOutputsValue = styled.Text<InputsOutputsValueProps>`
  ${({ theme, balanceType }) => css`
    font-size: ${theme.fonts.sizes.xlarge};
    font-weight: ${theme.fonts.bold};

    ${inputsOutputsValueModifiers[balanceType](theme)};
    ${inputsOutputsValueModifiers[balanceType](theme)};
  `}
`
