import { Entypo } from '@expo/vector-icons'

import * as S from './styles'

export type ButtonNewProps = {
  color?: string
  focused?: boolean
  icon?: JSX.Element
}

export const RoundButton = ({
  color,
  focused,
  icon = <Entypo name='plus' size={35} color={color} />,
}: ButtonNewProps) => {
  return <S.Container focused={focused}>{icon}</S.Container>
}
