import { customRender } from '@utils/jest/customRender'

import { Search } from '.'

describe('<Search />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<Search />)
  })
})
