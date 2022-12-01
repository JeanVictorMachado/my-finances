import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
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

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, { color: isFocus ? 'gray' : '#4E4E4E' }]}>{placeholder}</Text>
      )
    }
    return null
  }

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Select
        style={[styles.dropdown, isFocus && { borderColor: 'gray' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
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
  container: { marginBottom: 32 },
  dropdown: {
    height: 50,
    borderColor: '#4E4E4E',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#212121',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#212121',
    left: 8,
    top: -11,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#4E4E4E',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#BDBDBD',
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})
