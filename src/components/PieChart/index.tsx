import { useMemo } from 'react'
import { VictoryPie } from 'victory-native'

import { Octicons } from '@expo/vector-icons'

import theme from '@src/styles/theme'
import * as S from './styles'

type PieChartProps = {
  incomes: number
  expenses: number
}

export const PieChart = ({ incomes, expenses }: PieChartProps) => {
  const incomePorcent = useMemo(() => {
    return (incomes * 100) / incomes
  }, [incomes])

  const expensePorcent = useMemo(() => {
    return (expenses * 100) / incomes
  }, [incomes, expenses])

  return (
    <S.Comtainer>
      <VictoryPie
        width={170}
        height={170}
        radius={85}
        innerRadius={60}
        padAngle={() => 2}
        animate={{ duration: 2000 }}
        data={[{ y: !incomes ? 1 : incomes }, { y: expenses }]}
        colorScale={[
          !incomes ? theme.colors.text_300 : theme.colors.green_300,
          theme.colors.orange_300,
        ]}
      />

      <S.DotsBox>
        <S.DotBox>
          <Octicons name='dot-fill' size={24} color={theme.colors.green_300} />
          <S.PorcetText>{`${
            !incomePorcent
              ? 0
              : incomePorcent === 100
              ? incomePorcent
              : Number(incomePorcent).toFixed(1)
          }%`}</S.PorcetText>
        </S.DotBox>

        <S.DotBox>
          <Octicons name='dot-fill' size={24} color={theme.colors.orange_300} />
          <S.PorcetText>{`${
            !expensePorcent ? 0 : Number(expensePorcent).toFixed(1)
          }%`}</S.PorcetText>
        </S.DotBox>
      </S.DotsBox>
    </S.Comtainer>
  )
}
