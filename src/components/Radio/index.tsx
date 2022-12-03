import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonInputProps,
} from 'react-native-simple-radio-button'

import * as S from './styles'

type RadioProps = RadioButtonInputProps & {
  label: string
  marginLeft?: number
  onPress: () => void
}

export const Radio = ({ label, marginLeft, onPress, ...rest }: RadioProps) => {
  return (
    <S.Container onPress={onPress}>
      <RadioForm formHorizontal={true} animation={true}>
        <RadioButton labelHorizontal={true}>
          <RadioButtonInput
            buttonSize={10}
            buttonOuterSize={22}
            buttonStyle={{ marginTop: 4 }}
            buttonWrapStyle={{ marginLeft: marginLeft }}
            {...rest}
          />
        </RadioButton>
      </RadioForm>

      <S.Label>{label}</S.Label>
    </S.Container>
  )
}
