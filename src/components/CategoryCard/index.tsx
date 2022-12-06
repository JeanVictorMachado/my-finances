import { ReactNode, useMemo } from 'react'

import { ProgressBar, ProgressBarProps } from '@components/ProgressBar'
import useTransactions from '@hooks/Transactions/UseTransactions'

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
      <S.CategoryNameBox>
        {categoryIcon}
        <S.CategoryName>{categoryName}</S.CategoryName>
      </S.CategoryNameBox>

      <ProgressBar amountSpent={!filterRegisters.length ? 0 : totalValue} maxValue={maxValue} />
    </S.Container>
  )
}
