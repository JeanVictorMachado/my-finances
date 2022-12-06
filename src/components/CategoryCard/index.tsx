import { ReactNode, useMemo } from 'react'
import { Text } from 'react-native'

import { ProgressBar, ProgressBarProps } from '@components/ProgressBar'
import useTransactions from '@hooks/Transactions/UseTransactions'

import * as S from './styles'
import { formatCurrency } from 'react-native-format-currency'

type CategoryCard = ProgressBarProps & {
  categoryId: string
  categoryName: string
  categoryIcon: ReactNode
}

export const CategoryCard = ({
  categoryId,
  categoryName,
  categoryIcon,
  amountSpent,
  maxValue,
}: CategoryCard) => {
  const { registers } = useTransactions()

  const filterRegisters = useMemo(() => {
    return registers.filter((register) => register.category === categoryId)
  }, [registers])

  const totalValue = filterRegisters.reduce((a, b) => a + Number(b.value), 0)

  return (
    <S.Container>
      <S.Content>
        <S.CategoryNameBox>
          {categoryIcon}
          <S.CategoryName>{categoryName}</S.CategoryName>
        </S.CategoryNameBox>

        <S.ValuesBox>
          <S.valueText>{formatCurrency({ amount: amountSpent, code: 'BRL' })[0]}</S.valueText>
          <S.SeparateText>{`  ${'|'}  `}</S.SeparateText>
          <S.valueText>{formatCurrency({ amount: maxValue, code: 'BRL' })[0]}</S.valueText>
        </S.ValuesBox>
      </S.Content>

      <ProgressBar amountSpent={!filterRegisters.length ? 0 : totalValue} maxValue={maxValue} />
    </S.Container>
  )
}
