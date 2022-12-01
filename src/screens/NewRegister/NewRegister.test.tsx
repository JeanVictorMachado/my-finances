import { customRender } from '@utils/jest/customRender'

import { NewRegister } from '.'

describe('<NewRegister />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<NewRegister />)
  })
})
