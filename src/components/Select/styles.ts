import styled, { css } from 'styled-components/native'

type MenuBoxProps = {
  height?: number
  platform?: string
}

export const InputBox = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding-top: ${theme.spaces.small};
    padding-bottom: ${theme.spaces.small};
    padding-left: ${theme.spaces.medium};
    padding-right: ${theme.spaces.medium};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.spaces.medium};
    border: 1px solid ${theme.colors.border_color};
  `}
`

export const InputText = styled.Text`
  ${({ theme }) => css`
    margin-right: ${theme.spaces.small};
    color: ${theme.colors.text_300};
  `}
`

export const MenuBox = styled.TouchableOpacity<MenuBoxProps>`
  ${({ theme, height, platform }) => css`
    height: ${height ? `${height + 100}px` : 0};
    padding-top: ${platform === 'ios' ? '120px' : '80px'};
    align-items: center;
    position: absolute;
    top: ${platform === 'ios' ? '-70px' : '-30px'};
    bottom: 0;
    left: 0;
    right: 0;
    flex: 1;
    z-index: ${theme.layers.alwaysOnTop};
    background: rgba(0, 0, 0, 0.5);
  `}
`

export const Menu = styled.View`
  ${({ theme }) => css`
    border-radius: ${theme.spaces.medium};
    padding-top: ${theme.spaces.small};
    padding-bottom: ${theme.spaces.small};
    overflow: hidden;
    border: 1px solid ${theme.colors.border_color};
    background: ${theme.colors.primary_color};
  `}
`

export const MenuText = styled.Text`
  ${({ theme }) => css`
    padding-top: ${theme.spaces.small};
    padding-bottom: ${theme.spaces.small};
    padding-left: ${theme.spaces.medium};
    padding-right: ${theme.spaces.medium};
    text-align: center;
    color: ${theme.colors.text_300};
  `}
`
