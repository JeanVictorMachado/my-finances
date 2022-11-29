import { customRender } from '@utils/jest/customRender'

import { Home } from '.'

describe('<App />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<Home />)

    expect(queryByText('Foi!!!')).not.toBeNull()
  })
})
