import { useState } from 'react'
import { ScrollView } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { CategoryCard } from '@components/CategoryCard'
import { ReleasesHeader } from '@components/ReleasesHeader'
import { expensesCategories } from '@utils/variables/categories'

import * as S from './styles'

export const Home = () => {
  const [isBalanceCard, setIsBalanceCard] = useState(true)

  return (
    <S.Container>
      <ReleasesHeader onShowCard={setIsBalanceCard} />

      <S.Content>
        <S.ContentTitle>Gastos por categoria</S.ContentTitle>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace() + (isBalanceCard ? 380 : 140),
          }}
        >
          {expensesCategories.map((category) => (
            <CategoryCard
              key={category.id}
              categoryId={category.id}
              categoryName={category.categoryName}
              categoryIcon={category.categoryIcon}
              amountSpent={category.amountSpent}
              maxValue={category.maxValue}
            />
          ))}
        </ScrollView>
      </S.Content>
    </S.Container>
  )
}
