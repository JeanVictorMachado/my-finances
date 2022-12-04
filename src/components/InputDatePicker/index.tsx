import React, { useState } from 'react'
import { Platform } from 'react-native'
import { DatePickerProps } from './styles'
import DateTimePicker from 'react-native-modal-datetime-picker'

import * as S from './styles'

type InputDatePickerProps = DatePickerProps & {
  leftIcon?: JSX.Element
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export const InputDatePicker = ({
  leftIcon,
  placeholder,
  value,
  error,
  onChange,
}: InputDatePickerProps) => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const handleSetDatePicker = (date: Date) => {
    onChange && onChange(date.toISOString())
  }

  return (
    <S.Container>
      <S.Input
        value={value}
        error={error}
        placeholder={placeholder}
        onPressIn={() => setOpen(true)}
        renderLeftIcon={() => leftIcon}
        showSoftInputOnFocus={false}
        onChangeText={(text) => {
          onChange && onChange(text)
        }}
      />

      <DateTimePicker
        mode='date'
        date={date}
        locale='pt_BR'
        isVisible={open}
        display={Platform.OS === 'ios' ? 'inline' : 'default'}
        onConfirm={(date) => {
          handleSetDatePicker(date)
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => setOpen(false)}
        style={{
          height: 500,
        }}
      />

      <S.ErrorText>{error}</S.ErrorText>
    </S.Container>
  )
}
