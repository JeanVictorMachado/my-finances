import { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { CategoryCard } from '@components/CategoryCard'
import { ReleasesHeader } from '@components/ReleasesHeader'
import { expensesCategories } from '@utils/variables/categories'
import useRegisters from '@hooks/Registers/UseRegisters'

import * as S from './styles'

export const Home = () => {
  const { registers, handleGetRegisters } = useRegisters()

  const [isBalanceCard, setIsBalanceCard] = useState(true)

  useEffect(() => {
    !registers.length && handleGetRegisters()
  }, [])

  return (
    <S.Container>
      <ReleasesHeader onShowCard={setIsBalanceCard} />

      <S.Content>
        <S.ContentTitle>Gastos por categoria</S.ContentTitle>

        <FlatList
          data={expensesCategories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryCard
              key={item.id}
              categoryId={item.id}
              categoryName={item.categoryName}
              categoryIcon={item.categoryIcon}
              amountSpent={item.amountSpent}
              maxValue={item.maxValue}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace() + (isBalanceCard ? 380 : 140),
          }}
        />
      </S.Content>
    </S.Container>
  )
}
