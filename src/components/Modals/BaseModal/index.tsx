import { ReactNode, useEffect, useMemo } from 'react'
import { Animated, Dimensions, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'

import { CloseButtonContainerProps } from './styles'
import theme from '@src/styles/theme'
import * as S from './styles'

type LoginInModalProps = CloseButtonContainerProps & {
  children: ReactNode
  isOpen: boolean
  isTextInput?: boolean
  isReturnButtom?: boolean
  onClose: () => void
  onChange: (value: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

const { height } = Dimensions.get('window')

export const BaseModal = ({
  children,
  isOpen = false,
  isTextInput,
  isReturnButtom,
  onClose,
  onChange,
}: LoginInModalProps) => {
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
      {isReturnButtom && (
        <S.ReturnBox>
          <FontAwesome5 name='arrow-left' size={24} color={theme.colors.text_200} />
        </S.ReturnBox>
      )}

      <S.Content
        style={[
          {
            transform: [{ translateY: state.modal }],
          },
        ]}
      >
        {isTextInput && (
          <S.EditableTextBox>
            <S.EditableText>R$</S.EditableText>
            <S.TextInput
              placeholder='0,00'
              placeholderTextColor={theme.colors.primary_color}
              onChange={onChange}
            />
          </S.EditableTextBox>
        )}

        {children}
      </S.Content>
    </S.Container>
  )
}
