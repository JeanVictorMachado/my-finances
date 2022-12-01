import { Entypo } from '@expo/vector-icons'

import * as S from './styles'

export type ButtonNewProps = {
  color: string
  focused: boolean
}

export const ButtonNew = ({ color, focused }: ButtonNewProps) => {
  return (
    <S.Container focused={focused}>
      <Entypo name='plus' size={35} color={color} />
    </S.Container>
  )
}
