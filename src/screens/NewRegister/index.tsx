import { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { BaseModal } from '@components/Modals/BaseModal'
import { Dropdown } from '@components/Dropdown'
import { Input } from '@components/Input'
import { RoundButton } from '@components/RoundButton'
import { Radio } from '@components/Radio'

import { Feather } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import theme from '@src/styles/theme'

import * as S from './styles'

type NewRegisterProps = {}

export const NewRegister = ({}: NewRegisterProps) => {
  const navigation = useNavigation()

  const [radioValue, setRadioValue] = useState(0)

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

  return (
    <BaseModal isOpen={true} onClose={() => []} onChange={() => []} isTextInput>
      <S.RadiosBox>
        <Radio
          index={1}
          label='Entrada'
          isSelected={radioValue === 1}
          onPress={() => setRadioValue(1)}
          buttonOuterColor={theme.colors.green_300}
          buttonInnerColor={theme.colors.green_300}
        />

        <Radio
          index={2}
          label='Saída'
          isSelected={radioValue === 2}
          marginLeft={64}
          onPress={() => setRadioValue(2)}
          buttonOuterColor={theme.colors.orange_300}
          buttonInnerColor={theme.colors.orange_300}
        />
      </S.RadiosBox>
      <S.RadiosBorder />

      <Dropdown
        data={data}
        placeholder='Categoria'
        onChange={() => []}
        leftIcon={
          <View style={{ marginRight: 23 }}>
            <MaterialIcons name='category' size={22} color={theme.colors.text_300} />
          </View>
        }
      />

      <Dropdown
        data={data}
        placeholder='Data do registro'
        onChange={() => []}
        leftIcon={
          <View style={{ marginRight: 26 }}>
            <FontAwesome5 name='calendar-alt' size={20} color={theme.colors.text_300} />
          </View>
        }
      />

      <Input
        placeholder='Descrição'
        onChange={() => []}
        leftIcon={
          <View style={{ marginRight: 20 }}>
            <MaterialIcons name='text-fields' size={22} color={theme.colors.text_300} />
          </View>
        }
      />

      <S.ReturnBox onPress={() => navigation.goBack()}>
        <FontAwesome5 name='arrow-left' size={20} color={theme.colors.text_200} />
        <S.ReturnText>Voltar</S.ReturnText>
      </S.ReturnBox>

      <S.ButtomBox>
        <RoundButton
          focused
          icon={<Feather name='check-circle' size={30} color={theme.colors.text_100} />}
        />
      </S.ButtomBox>
    </BaseModal>
  )
}
