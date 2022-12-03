import React, { useState } from 'react'

import * as S from './styles'

type InputComponentProps = {
  leftIcon?: JSX.Element
  placeholder?: string
  onChange?: (value: string) => void
}

export const Input = ({ leftIcon, placeholder, onChange }: InputComponentProps) => {
  const [value, setValue] = useState('')

  return (
    <S.Input
      value={value}
      placeholder={placeholder}
      onChangeText={(text) => {
        setValue(text)
        onChange && onChange(text)
      }}
      renderLeftIcon={() => leftIcon}
    />
  )
}
