import React, { useState } from 'react'
import { Platform } from 'react-native'

import { BalanceCard } from '@components/BalanceCard'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { months } from '@utils/variables/months'
import { Select } from '@components/Select'

import theme from '@src/styles/theme'
import * as S from './styles'

export const ReleasesHeader = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <S.Container platform={Platform.OS}>
      <S.HeaderBox>
        <S.OpenButtom onPress={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <MaterialCommunityIcons name='eye-off' size={24} color={theme.colors.text_200} />
          ) : (
            <MaterialCommunityIcons name='eye' size={24} color={theme.colors.text_200} />
          )}
        </S.OpenButtom>

        <Select options={months} />

        <S.Avatar source={require('@assets/images/jean-image.jpeg')} />

        {isOpen && <BalanceCard />}
      </S.HeaderBox>
    </S.Container>
  )
}
