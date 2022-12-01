import { customRender } from '@utils/jest/customRender'

import { ProgressBar } from '.'

describe('<ProgressBar />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<ProgressBar />)
  })
})
