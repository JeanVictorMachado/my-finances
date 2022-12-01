import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-element-textinput'

import { Ionicons } from '@expo/vector-icons'

export const Input = () => {
  const [value, setValue] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        iconStyle={styles.iconStyle}
        placeholderStyle={styles.placeholderStyle}
        textErrorStyle={styles.textErrorStyle}
        label='Valor'
        placeholder='Valor'
        placeholderTextColor='gray'
        focusColor='gray'
        onChangeText={(text) => {
          setValue(text)
        }}
        // renderRightIcon={() => <Ionicons name='close' size={20} color='#6d6d6d' />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  input: {
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#4E4E4E',
    backgroundColor: '#212121',
  },
  inputStyle: {
    fontSize: 16,
    color: '#BDBDBD',
  },
  labelStyle: {
    fontSize: 14,
    position: 'absolute',
    top: -11,
    left: -3,
    backgroundColor: '#212121',
    paddingHorizontal: 7,
    marginLeft: -4,
    color: '#4E4E4E',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#4E4E4E',
  },
  textErrorStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: '#BDBDBD',
  },
})
