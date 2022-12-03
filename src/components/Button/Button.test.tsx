import { customRender } from '@utils/jest/customRender'

import { Button } from '.'

describe('<Button />', () => {
  it('has 1 child', () => {
    const { queryByText } = customRender(<Button>Salvar</Button>)
  })
})
