import { customRender } from '@utils/jest/customRender'

import { ReleasesHeader } from '.'

describe('<ReleasesHeader />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<ReleasesHeader />)

    expect(queryByText('Foi!!!')).not.toBeNull()
  })
})
