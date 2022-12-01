import styled, { css, DefaultTheme } from 'styled-components/native'

type InputsOutputsValueProps = {
  balanceType: 'input' | 'output'
}

type ContainerProps = {
  platform: string
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, platform }) => css`
    padding-top: ${platform === 'ios' ? '60px' : '40px'};
    padding-bottom: ${theme.spaces.medium};
    border-radius: ${theme.spaces.medium};
    background-color: ${theme.colors.secondary_color};
    position: relative;
    z-index: ${theme.layers.menu}; ;
  `}
`

export const HeaderBox = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.secondary_color};
  `}
`

export const BalanceBox = styled.View`
  ${() => css`
    align-items: center;
    padding-top: 16px;
  `}
`

export const MenuBox = styled.View`
  ${({ theme }) => css`
    position: absolute;
    top: -${theme.spaces.xxsmall};
    left: 12px;
  `}
`

export const Avatar = styled.Image`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: ${theme.spaces.large};
    position: absolute;
    top: -${theme.spaces.xxsmall};
    right: ${theme.spaces.medium};
    border: ${theme.colors.border_color};
  `}
`

export const BalanceTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text_300};
  `}
`

export const BalanceValue = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xxlarge};
    font-weight: ${theme.fonts.bold};
    color: ${theme.colors.text_100};
  `}
`

export const InputsOutputsBox = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding-top: ${theme.spaces.large};
    padding-left: ${theme.spaces.medium};
    padding-right: ${theme.spaces.medium};
    flex-direction: row;
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
  input: () => css`
    color: #006e00;
  `,
  output: (theme: DefaultTheme) => css`
    color: #cd0000;
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

export const OpenButtomBox = styled.View`
  ${({ theme }) => css`
    width: 100%;
    position: absolute;
    bottom: -10px;
    align-items: center;
  `}
`

export const OpenButtom = styled.TouchableOpacity`
  ${({ theme }) => css`
    height: 20px;
    width: 70px;
    border-radius: 15px;
    background-color: ${theme.colors.border_color};
    align-items: center;
    justify-content: center;
  `}
`
