import { customRender } from '@utils/jest/customRender'

import { Profile } from '.'

describe('<Profile />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<Profile />)
  })
})
