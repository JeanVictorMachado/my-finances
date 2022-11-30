import { customRender } from '@utils/jest/customRender'

import { ReleasesHeader } from '.'

describe('<ReleasesHeader />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<ReleasesHeader inputsValue={1000} outputsValue={1000} />)

    expect(queryByText('Foi!!!')).not.toBeNull()
  })
})
