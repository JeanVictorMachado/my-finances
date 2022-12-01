import { ReactNode } from 'react'
import { ProgressBar, ProgressBarProps } from '@components/ProgressBar'

import { Ionicons } from '@expo/vector-icons'

import * as S from './styles'

type CategoryCard = ProgressBarProps & {
  categoryName: string
  categoryIcon: ReactNode
}

export const CategoryCard = ({
  categoryName,
  categoryIcon,
  amountSpent,
  maxValue,
}: CategoryCard) => {
  return (
    <S.Container>
      <S.CategoryNameBox>
        {categoryIcon}
        <S.CategoryName>{categoryName}</S.CategoryName>
      </S.CategoryNameBox>

      <ProgressBar amountSpent={amountSpent} maxValue={maxValue} />
    </S.Container>
  )
}
