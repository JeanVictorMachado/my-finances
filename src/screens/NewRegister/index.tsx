import { View } from 'react-native'

import { BaseModal } from '@components/Modals/BaseModal'
import { Dropdown } from '@components/Dropdown'
import { RoundButton } from '@components/RoundButton'

import { Feather } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import theme from '@src/styles/theme'

import * as S from './styles'
import { Radio } from '@components/Radio'
import { useState } from 'react'

type NewRegisterProps = {}

export const NewRegister = ({}: NewRegisterProps) => {
  const [radioValue, setRadioValue] = useState(0)

  return (
    <BaseModal isOpen={true} onClose={() => []} onChange={() => []} isTextInput>
      <S.RadiosBox>
        <Radio
          obj={[]}
          index={1}
          label='Entrada'
          isSelected={radioValue === 1}
          onPress={() => setRadioValue(1)}
          buttonOuterColor={theme.colors.green_300}
          buttonInnerColor={theme.colors.green_300}
        />

        <Radio
          obj={[]}
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
        data={[]}
        labelField=''
        valueField=''
        onChange={() => []}
        placeholder='Categoria'
        leftIcon={
          <View style={{ marginRight: 23 }}>
            <MaterialIcons name='category' size={22} color={theme.colors.text_300} />
          </View>
        }
      />

      <Dropdown
        data={[]}
        labelField=''
        valueField=''
        onChange={() => []}
        placeholder='Data do registro'
        leftIcon={
          <View style={{ marginRight: 26 }}>
            <FontAwesome5 name='calendar-alt' size={20} color={theme.colors.text_300} />
          </View>
        }
      />

      <Dropdown
        data={[]}
        labelField=''
        valueField=''
        onChange={() => []}
        placeholder='Descrição'
        leftIcon={
          <View style={{ marginRight: 20 }}>
            <MaterialIcons name='text-fields' size={22} color={theme.colors.text_300} />
          </View>
        }
      />

      {/* <Input /> */}

      <S.ButtomBox>
        <RoundButton
          focused
          icon={<Feather name='check-circle' size={30} color={theme.colors.text_100} />}
        />
      </S.ButtomBox>
    </BaseModal>
  )
}
