import { ReactNode, useEffect, useMemo } from 'react'
import { Alert } from 'react-native'

import { ProgressBar, ProgressBarProps } from '@components/ProgressBar'
import { formatCurrency } from 'react-native-format-currency'
import useRegisters from '@hooks/Registers/UseRegisters'

import * as S from './styles'

type CategoryCard = ProgressBarProps & {
  categoryId: string
  categoryName: string
  categoryIcon: ReactNode
}

export const CategoryCard = ({
  categoryId,
  categoryName,
  categoryIcon,
  maxValue,
}: CategoryCard) => {
  const { registers } = useRegisters()

  const [filterRegisters, totalValue] = useMemo(() => {
    const filterRegisters = !!registers.length
      ? registers?.filter((register) => register.category === categoryId)
      : []
    const totalValue = !!filterRegisters.length
      ? filterRegisters?.reduce((a, b) => a + Number(b.value), 0)
      : 0

    return [filterRegisters, totalValue]
  }, [registers])

  useEffect(() => {
    if (totalValue >= maxValue)
      Alert.alert('Limite atingido', 'Você atingiu o limite dessa categoria, pare de gastar!')
  }, [totalValue])

  return (
    <S.Container>
      <S.Content>
        <S.CategoryNameBox>
          {categoryIcon}
          <S.CategoryName>{categoryName}</S.CategoryName>
        </S.CategoryNameBox>

        <S.ValuesBox>
          <S.valueText>{formatCurrency({ amount: totalValue, code: 'BRL' })[0]}</S.valueText>
          <S.SeparateText>{`  ${'|'}  `}</S.SeparateText>
          <S.valueText>{formatCurrency({ amount: maxValue, code: 'BRL' })[0]}</S.valueText>
        </S.ValuesBox>
      </S.Content>

      <ProgressBar amountSpent={!filterRegisters?.length ? 0 : totalValue} maxValue={maxValue} />
    </S.Container>
  )
}
