import theme from '@src/styles/theme'
import React, { useState } from 'react'
import { StyleSheet, Platform } from 'react-native'
import { Dropdown as Select } from 'react-native-element-dropdown'
import { DropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model'

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
]

type DropdownComponentProps = DropdownProps & {
  leftIcon?: JSX.Element
}

export const Dropdown = ({ search, leftIcon, placeholder }: DropdownComponentProps) => {
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)

  return (
    <Select
      style={[styles.dropdown, isFocus && { borderColor: 'gray' }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      iconColor={theme.colors.text_100}
      containerStyle={styles.containerStyle}
      itemTextStyle={styles.itemTextStyle}
      itemContainerStyle={styles.itemContainerStyle}
      data={data}
      search={search}
      maxHeight={300}
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

const styles = StyleSheet.create({
  dropdown: {
    height: 70,
    backgroundColor: 'transparent',
    borderBottomColor: theme.colors.border_color,
    borderBottomWidth: 1,
  },
  containerStyle: {
    backgroundColor: theme.colors.border_color,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginTop: Platform.OS === 'ios' ? 0 : -29,
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
  iconStyle: {
    width: 30,
    height: 30,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
})
