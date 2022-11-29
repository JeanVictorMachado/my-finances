import { customRender } from '@utils/jest/customRender'

import { Select } from '.'

describe('<Select />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<Select options={[]} />)
  })
})
