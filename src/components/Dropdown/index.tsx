import theme from '@src/styles/theme'
import React, { useState } from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { Dropdown as Select } from 'react-native-element-dropdown'

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

type DropdownProps = {
  leftIcon?: JSX.Element
  placeholder?: string
}

export const Dropdown = ({ leftIcon, placeholder }: DropdownProps) => {
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)

  return (
    <View style={styles.container}>
      <Select
        style={[styles.dropdown, isFocus && { borderColor: 'gray' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        iconColor={theme.colors.text_100}
        containerStyle={styles.containerStyle}
        itemTextStyle={styles.itemTextStyle}
        data={data}
        search
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
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
  },
  itemTextStyle: {
    color: 'red',
  },
  placeholderStyle: {
    fontSize: 16,
    color: theme.colors.text_300,
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
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
})
