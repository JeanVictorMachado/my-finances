import { CategoryCard } from '@components/CategoryCard'
import { ReleasesHeader } from '@components/ReleasesHeader'
import { categories } from '@utils/variables/categories'

import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <ReleasesHeader inputsValue={14600.55} outputsValue={8250.5} />

      <S.Content>
        <S.ContentTitle>Gastos por categoria</S.ContentTitle>

        {categories.map((category) => (
          <CategoryCard
            key={category.id}
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
