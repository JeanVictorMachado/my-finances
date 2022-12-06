import React, { useState } from 'react'
import { DropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model'
import { SelectProps } from './styles'

import * as S from './styles'

type DropdownComponentProps = SelectProps &
  Omit<DropdownProps, 'labelField' | 'valueField'> & {
    leftIcon?: JSX.Element
  }

export const Dropdown = ({
  data,
  search,
  leftIcon,
  placeholder,
  value,
  error,
  onChange,
}: DropdownComponentProps) => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <S.Container>
      <S.Select
        data={data}
        search={search}
        labelField='label'
        valueField='value'
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder='Buscar...'
        value={value}
        error={error}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setIsFocus(false)
          onChange(item.value)
        }}
        renderLeftIcon={() => leftIcon}
        disable={!data.length}
      />

      <S.ErrorText>{error}</S.ErrorText>
    </S.Container>
  )
}
