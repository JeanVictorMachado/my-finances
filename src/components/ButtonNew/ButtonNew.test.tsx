import { customRender } from '@utils/jest/customRender'

import { ButtonNew } from '.'

describe('<ButtonNew />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<ButtonNew />)
  })
})
