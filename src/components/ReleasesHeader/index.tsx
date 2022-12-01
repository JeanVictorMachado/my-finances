import { useMemo, useState } from 'react'
import { Platform } from 'react-native'
import { formatCurrency } from 'react-native-format-currency'

import { Select } from '@components/Select'
import { months } from '@utils/variables/months'

import { Entypo, FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import theme from '@src/styles/theme'
import * as S from './styles'

type ReleasesHeaderProps = {
  inputsValue: number
  outputsValue: number
}

export const ReleasesHeader = ({ inputsValue, outputsValue }: ReleasesHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const balanceValue = useMemo(() => {
    return Math.round(inputsValue - outputsValue)
  }, [inputsValue, outputsValue])

  return (
    <S.Container platform={Platform.OS}>
      <S.HeaderBox>
        <S.MenuBox>
          <Entypo name='menu' size={35} color={theme.colors.border_color} />
        </S.MenuBox>

        <Select options={months} />

        <S.Avatar source={require('@assets/images/jean-image.jpeg')} />

        {isOpen && (
          <>
            <S.BalanceBox>
              <S.BalanceTitle>Saldo</S.BalanceTitle>
              <S.BalanceValue>
                {formatCurrency({ amount: balanceValue, code: 'BRL' })[0]}
              </S.BalanceValue>
            </S.BalanceBox>

            <S.InputsOutputsBox>
              <S.InputsOutputs>
                <FontAwesome5 name='arrow-alt-circle-up' size={40} color='#006e00' />
                <S.InputsOutputsContent>
                  <S.InputsOutputsTitle>Entradas</S.InputsOutputsTitle>
                  <S.InputsOutputsValue balanceType='input'>
                    {formatCurrency({ amount: inputsValue, code: 'BRL' })[0]}
                  </S.InputsOutputsValue>
                </S.InputsOutputsContent>
              </S.InputsOutputs>

              <S.InputsOutputs>
                <FontAwesome5 name='arrow-alt-circle-down' size={40} color='#cd0000' />
                <S.InputsOutputsContent>
                  <S.InputsOutputsTitle>Saídas</S.InputsOutputsTitle>
                  <S.InputsOutputsValue balanceType='output'>
                    {formatCurrency({ amount: outputsValue, code: 'BRL' })[0]}
                  </S.InputsOutputsValue>
                </S.InputsOutputsContent>
              </S.InputsOutputs>
            </S.InputsOutputsBox>
          </>
        )}
      </S.HeaderBox>

      <S.OpenButtomBox>
        <S.OpenButtom onPress={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <MaterialCommunityIcons
              name='eye-off'
              size={16}
              color={theme.colors.background_color}
            />
          ) : (
            <MaterialCommunityIcons name='eye' size={16} color={theme.colors.background_color} />
          )}
        </S.OpenButtom>
      </S.OpenButtomBox>
    </S.Container>
  )
}
