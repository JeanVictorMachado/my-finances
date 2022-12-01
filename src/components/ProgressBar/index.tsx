import { useMemo } from 'react'
import { formatCurrency } from 'react-native-format-currency'

import * as S from './styles'

export type ProgressBarProps = {
  maxValue: number
  amountSpent: number
}

export const ProgressBar = ({ amountSpent, maxValue }: ProgressBarProps) => {
  const porcentValue = useMemo(() => {
    return (amountSpent * 100) / maxValue
  }, [amountSpent, maxValue])

  const barColor = (porcent: number) => {
    if (porcent <= 33.5) return '#006e00'
    if (porcent > 33.5 && porcent <= 66.5) return '#a07300'
    if (porcent > 66.5) return '#b50000'
    return ''
  }

  return (
    <S.Container>
      <S.ValuesBox>
        <S.valueText>{formatCurrency({ amount: amountSpent, code: 'BRL' })[0]}</S.valueText>
        <S.valueText>{formatCurrency({ amount: maxValue, code: 'BRL' })[0]}</S.valueText>
      </S.ValuesBox>

      <S.Content>
        <S.Bar barPorcent={porcentValue} color={barColor(porcentValue)} />
      </S.Content>
    </S.Container>
  )
}
