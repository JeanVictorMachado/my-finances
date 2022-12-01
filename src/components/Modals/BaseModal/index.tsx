import { ReactNode, useEffect, useMemo } from 'react'
import { Animated, Dimensions } from 'react-native'

import { CloseButtonContainerProps } from './styles'
import * as S from './styles'

type LoginInModalProps = CloseButtonContainerProps & {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const { height } = Dimensions.get('window')

export const BaseModal = ({ children, isOpen = false, isStep, onClose }: LoginInModalProps) => {
  const state = useMemo(() => {
    return {
      opacity: new Animated.Value(0),
      container: new Animated.Value(height),
      modal: new Animated.Value(height),
    }
  }, [])

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true }),
    ]).start()
  }

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(state.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start()
  }

  useEffect(() => {
    if (isOpen) {
      openModal()
    } else {
      closeModal()
    }
  }, [isOpen])

  return (
    <S.Container>
      <S.Content
        style={[
          {
            transform: [{ translateY: state.modal }],
          },
        ]}
      >
        {children}
      </S.Content>
    </S.Container>
  )
}
