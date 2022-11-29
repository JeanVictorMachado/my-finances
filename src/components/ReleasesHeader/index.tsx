import { Platform } from 'react-native'

import { Select } from '@components/Select'
import { months } from '@utils/variables/months'

import { Entypo, FontAwesome5 } from '@expo/vector-icons'

import * as S from './styles'

export const ReleasesHeader = () => {
  return (
    <S.Container platform={Platform.OS}>
      <S.HeaderBox>
        <S.MenuBox>
          <Entypo name='menu' size={40} color='#BDBDBD' />
        </S.MenuBox>

        <Select options={months} />

        <S.Avatar source={require('@assets/images/jean-image.jpeg')} />

        <S.BalanceBox>
          <S.BalanceTitle>Saldo</S.BalanceTitle>
          <S.BalanceValue>R$ 10.000,00</S.BalanceValue>
        </S.BalanceBox>

        <S.InputsOutputsBox>
          <S.InputsOutputs>
            <FontAwesome5 name='arrow-alt-circle-up' size={40} color='green' />
            <S.InputsOutputsContent>
              <S.InputsOutputsTitle>Entradas</S.InputsOutputsTitle>
              <S.InputsOutputsValue balanceType='input'>R$ 5.000,00</S.InputsOutputsValue>
            </S.InputsOutputsContent>
          </S.InputsOutputs>

          <S.InputsOutputs>
            <FontAwesome5 name='arrow-alt-circle-down' size={40} color='red' />
            <S.InputsOutputsContent>
              <S.InputsOutputsTitle>Saídas</S.InputsOutputsTitle>
              <S.InputsOutputsValue balanceType='output'>R$ 5.000,00</S.InputsOutputsValue>
            </S.InputsOutputsContent>
          </S.InputsOutputs>
        </S.InputsOutputsBox>
      </S.HeaderBox>
    </S.Container>
  )
}
