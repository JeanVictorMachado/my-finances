import { customRender } from '@utils/jest/customRender'

import { CategoryCard } from '.'

describe('<CategoryCard />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<CategoryCard />)
  })
})
