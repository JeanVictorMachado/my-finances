import { ChildrenProps } from '@src/@types/Shared'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

export type ButtonProps = ChildrenProps & TouchableOpacityProps & {}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <S.ButtonContainer {...rest}>
      <S.TextButton>{children}</S.TextButton>
    </S.ButtonContainer>
  )
}
