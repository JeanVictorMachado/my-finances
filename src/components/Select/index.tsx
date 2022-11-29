import { useEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { Platform } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import * as S from './styles'

type OptionProps = {
  label: string
  value: string
}

type SelectProps = {
  options: OptionProps[]
  defaultValue?: OptionProps
  onChange?: (item: OptionProps) => void
}

export const Select = ({ options, defaultValue, onChange }: SelectProps) => {
  const window = useWindowDimensions()

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<OptionProps>(
    defaultValue
      ? defaultValue
      : {
          label: 'Selecione...',
          value: '0',
        },
  )

  const handleSelectionOption = (item: OptionProps) => {
    setIsOpen(false)
    setSelectedOption(item)
  }

  useEffect(() => {
    onChange && onChange(selectedOption)
  }, [selectedOption])

  return (
    <>
      <S.InputBox onPress={() => setIsOpen(!isOpen)}>
        <S.InputText>{selectedOption.label}</S.InputText>
        <FontAwesome name='chevron-down' size={14} color='#BDBDBD' />
      </S.InputBox>

      {isOpen && (
        <S.MenuBox height={window.height} platform={Platform.OS} onPress={() => setIsOpen(false)}>
          <S.Menu>
            {options.map((option) => (
              <S.MenuText key={option.value} onPress={() => handleSelectionOption(option)}>
                {option.label}
              </S.MenuText>
            ))}
          </S.Menu>
        </S.MenuBox>
      )}
    </>
  )
}
