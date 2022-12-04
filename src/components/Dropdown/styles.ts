import styled, { css } from 'styled-components/native'
import { Dropdown } from 'react-native-element-dropdown'
import { Platform } from 'react-native'

export type SelectProps = {
  error?: string | false | undefined
}

export const Container = styled.View`
  ${({ theme }) => css`
    position: relative;
  `}
`

export const Select = styled(Dropdown).attrs(({ theme }) => ({
  maxHeight: 300,
  containerStyle: {
    backgroundColor: theme.colors.border_color,
    borderRadius: 16,
    marginTop: Platform.OS === 'ios' ? 4 : -20,
    overflow: 'hidden',
  },
  itemContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary_color,
  },
  itemTextStyle: {
    color: theme.colors.text_100,
  },
  placeholderStyle: {
    fontSize: 16,
    color: theme.colors.border_color,
  },
  selectedTextStyle: {
    fontSize: 18,
    color: theme.colors.text_100,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  icon: {
    marginRight: 5,
  },
  iconColor: theme.colors.text_100,
  selectedStyle: {
    borderRadius: 12,
  },
}))<SelectProps>`
  ${({ theme, error }) => css`
    height: 70px;
    background-color: transparent;
    border-bottom-color: ${!error ? theme.colors.border_color : 'red'};
    border-bottom-width: 1px;
  `}
`

export const ErrorText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xsmall};
    background-color: ${theme.colors.secondary_color};
    color: red;
    padding-left: 8px;
    position: absolute;
    bottom: -7px;
    right: 0;
  `}
`
