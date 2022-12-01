import { Dropdown } from '@components/Dropdown'
import { Input } from '@components/Input'
import { BaseModal } from '@components/Modals/BaseModal'

import * as S from './styles'

type NewRegisterProps = {}

export const NewRegister = ({}: NewRegisterProps) => {
  return (
    <BaseModal isOpen={true} onClose={() => []}>
      <S.NewRegisterText>Novo Registro</S.NewRegisterText>

      <Input />

      <Dropdown placeholder='Categoria' />
    </BaseModal>
  )
}
