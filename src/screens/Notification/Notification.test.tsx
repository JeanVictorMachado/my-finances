import { customRender } from '@utils/jest/customRender'

import { Notification } from '.'

describe('<Notification />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<Notification />)
  })
})
