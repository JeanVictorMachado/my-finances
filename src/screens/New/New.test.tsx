import { customRender } from '@utils/jest/customRender'

import { New } from '.'

describe('<New />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<New />)
  })
})
