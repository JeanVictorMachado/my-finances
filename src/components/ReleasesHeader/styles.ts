import styled, { css } from 'styled-components/native'

type ContainerProps = {
  platform: string
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, platform }) => css`
    padding-top: ${platform === 'ios' ? '60px' : '40px'};
    padding-bottom: ${theme.spaces.medium};
    border-radius: ${theme.spaces.medium};
    position: relative;
    z-index: ${theme.layers.menu}; ;
  `}
`

export const HeaderBox = styled.View`
  ${() => css`
    padding-left: 16px;
    padding-right: 16px;
  `}
`

export const Content = styled.View`
  ${() => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`

export const Avatar = styled.Image`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: ${theme.spaces.large};
    border: ${theme.colors.border_color};
  `}
`

export const OpenButtom = styled.TouchableOpacity`
  ${() => css`
    padding: 8px;
  `}
`
