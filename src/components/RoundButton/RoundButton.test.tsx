import { customRender } from '@utils/jest/customRender'

import { RoundButton } from '.'

describe('<RoundButton />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<RoundButton />)
  })
})
