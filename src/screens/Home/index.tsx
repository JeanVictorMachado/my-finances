import { ReleasesHeader } from '@components/ReleasesHeader'

import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <ReleasesHeader inputsValue={14600.55} outputsValue={8250.5} />
    </S.Container>
  )
}
