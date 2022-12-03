import React, { useState } from 'react'
import { DropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model'

import * as S from './styles'

type DropdownComponentProps = Omit<DropdownProps, 'labelField' | 'valueField'> & {
  leftIcon?: JSX.Element
}

export const Dropdown = ({ data, search, leftIcon, placeholder }: DropdownComponentProps) => {
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)

  return (
    <S.Select
      data={data}
      search={search}
      labelField='label'
      valueField='value'
      placeholder={!isFocus ? placeholder : '...'}
      searchPlaceholder='Buscar...'
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item.value)
        setIsFocus(false)
      }}
      renderLeftIcon={() => leftIcon}
    />
  )
}
