import React, { useMemo } from 'react'

import { FontAwesome5 } from '@expo/vector-icons'
import { formatCurrency } from 'react-native-format-currency'
import { MovementType } from '@screens/NewRegister'
import { PieChart } from '@components/PieChart'
import useRegisters from '@hooks/Registers/UseRegisters'

import theme from '@src/styles/theme'
import * as S from './styles'

export const BalanceCard = () => {
  const { registers } = useRegisters()

  const [incomes, expenses, balanceValue] = useMemo(() => {
    const filterIncomes = !!registers.length
      ? registers.filter((register) => register.type === MovementType.income)
      : []
    const incomes = !!filterIncomes.length
      ? filterIncomes.reduce((a, b) => a + Number(b.value), 0)
      : 0
    const filterExpenses = !!registers?.length
      ? registers.filter((register) => register.type === MovementType.expense)
      : []
    const expenses = !!filterExpenses.length
      ? filterExpenses.reduce((a, b) => a + Number(b.value), 0)
      : 0
    const balanceValue = Math.round(incomes - expenses)

    return [incomes, expenses, balanceValue]
  }, [registers])

  return (
    <S.BalanceContainer>
      <S.InputsOutputsBox>
        <S.InputsOutputs>
          <FontAwesome5 name='arrow-alt-circle-up' size={40} color={theme.colors.green_300} />
          <S.InputsOutputsContent>
            <S.InputsOutputsTitle>Entradas</S.InputsOutputsTitle>
            <S.InputsOutputsValue balanceType='input'>
              {formatCurrency({ amount: incomes, code: 'BRL' })[0]}
            </S.InputsOutputsValue>
          </S.InputsOutputsContent>
        </S.InputsOutputs>

        <S.InputsOutputs>
          <FontAwesome5 name='arrow-alt-circle-down' size={40} color={theme.colors.orange_300} />
          <S.InputsOutputsContent>
            <S.InputsOutputsTitle>Saídas</S.InputsOutputsTitle>
            <S.InputsOutputsValue balanceType='output'>
              {formatCurrency({ amount: expenses, code: 'BRL' })[0]}
            </S.InputsOutputsValue>
          </S.InputsOutputsContent>
        </S.InputsOutputs>

        <S.InputsOutputs>
          <FontAwesome5 name='arrow-alt-circle-right' size={40} color={theme.colors.text_300} />
          <S.InputsOutputsContent>
            <S.InputsOutputsTitle>Saldo</S.InputsOutputsTitle>
            <S.BalanceValue>
              {formatCurrency({ amount: balanceValue, code: 'BRL' })[0]}
            </S.BalanceValue>
          </S.InputsOutputsContent>
        </S.InputsOutputs>
      </S.InputsOutputsBox>

      <PieChart incomes={incomes} expenses={expenses} />
    </S.BalanceContainer>
  )
}
