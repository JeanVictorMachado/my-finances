import { TextInputProps } from 'react-native'
import { InputProps } from './styles'
import theme from '@src/styles/theme'

import * as S from './styles'

type InputComponentProps = TextInputProps &
  InputProps & {
    type?: 'top-modal'
    leftIcon?: JSX.Element
    placeholder?: string
    onChange?: (value: string) => void
  }

export const Input = ({
  type,
  leftIcon,
  placeholder,
  value,
  error,
  onChange,
  ...rest
}: InputComponentProps) => {
  return (
    <>
      {type !== 'top-modal' ? (
        <S.Input
          value={value}
          placeholder={placeholder}
          onChangeText={(text) => {
            onChange && onChange(text)
          }}
          renderLeftIcon={() => leftIcon}
        />
      ) : (
        <S.EditableTextBox>
          <S.EditableText>R$</S.EditableText>
          <S.TextInputTop
            value={value}
            placeholder='0,00'
            keyboardType='numeric'
            returnKeyType='done'
            placeholderTextColor={theme.colors.primary_color}
            onChangeText={onChange}
            {...rest}
          />

          {error && <S.ErrorText>{error}</S.ErrorText>}
        </S.EditableTextBox>
      )}
    </>
  )
}
