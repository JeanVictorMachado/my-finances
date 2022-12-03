import { customRender } from '@utils/jest/customRender'

import { Radio } from '.'

describe('<Radio />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<Radio />)
  })
})
