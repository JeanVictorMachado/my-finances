import { CategoryCard } from '@components/CategoryCard'
import { ReleasesHeader } from '@components/ReleasesHeader'
import { expensesCategories } from '@utils/variables/categories'

import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <ReleasesHeader />

      <S.Content>
        <S.ContentTitle>Gastos por categoria</S.ContentTitle>

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
      </S.Content>
    </S.Container>
  )
}
