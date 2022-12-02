import { View } from 'react-native'
import { Dropdown } from '@components/Dropdown'
import { Input } from '@components/Input'
import { BaseModal } from '@components/Modals/BaseModal'

import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

import theme from '@src/styles/theme'

import * as S from './styles'

type NewRegisterProps = {}

export const NewRegister = ({}: NewRegisterProps) => {
  return (
    <BaseModal isOpen={true} onClose={() => []}>
      {/* <S.NewRegisterText>Novo Registro</S.NewRegisterText> */}

      <Dropdown
        placeholder='Categoria'
        leftIcon={
          <View style={{ marginRight: 23 }}>
            <MaterialIcons name='category' size={22} color={theme.colors.text_300} />
          </View>
        }
      />
      <Dropdown
        placeholder='Tipo de registro'
        leftIcon={
          <View style={{ marginRight: 16 }}>
            <MaterialCommunityIcons name='bank-transfer' size={28} color={theme.colors.text_300} />
          </View>
        }
      />
      <Dropdown
        placeholder='Data do registro'
        leftIcon={
          <View style={{ marginRight: 26 }}>
            <FontAwesome5 name='calendar-alt' size={20} color={theme.colors.text_300} />
          </View>
        }
      />
      <Dropdown
        placeholder='Descrição'
        leftIcon={
          <View style={{ marginRight: 20 }}>
            <MaterialIcons name='text-fields' size={22} color={theme.colors.text_300} />
          </View>
        }
      />

      {/* <Input /> */}
    </BaseModal>
  )
}
