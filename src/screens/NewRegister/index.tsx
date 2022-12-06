import { KeyboardAvoidingView, Platform, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'

import { BaseModal } from '@components/Modals/BaseModal'
import { Dropdown } from '@components/Dropdown'
import { Input } from '@components/Input'
import { InputDatePicker } from '@components/InputDatePicker'
import { Radio } from '@components/Radio'
import { RoundButton } from '@components/RoundButton'
import { initialValues } from '@utils/screens/newRegister/form/initialValues'
import { formattedDate } from '@utils/formattedDate'
import { validationSchema } from '@utils/screens/newRegister/form/validationSchema'
import useTransactions from '@hooks/Transactions/UseTransactions'

import { Feather } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import theme from '@src/styles/theme'

import * as S from './styles'

export enum MovementType {
  income = '1',
  expense = '2',
}

export const NewRegister = () => {
  const navigation = useNavigation()
  const { categoriesValues, registers, setRegisterType, setRegister } = useTransactions()

  const { values, errors, touched, setValues, setTouched, resetForm, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setTouched({})
      resetForm()

      setRegister([...registers, values])
    },
  })

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <BaseModal
        isOpen={true}
        inputTopModal={
          <Input
            type='top-modal'
            value={values.value}
            error={errors.value && touched.value && errors.value}
            onChange={(value) => setValues({ ...values, value: String(value) })}
          />
        }
      >
        <S.RadiosBox>
          <Radio
            index={1}
            label='Entrada'
            isSelected={values.type === '1'}
            buttonOuterColor={theme.colors.green_300}
            buttonInnerColor={theme.colors.green_300}
            onPress={() => {
              setRegisterType(1)
              setValues({ ...values, type: MovementType.income })
            }}
          />

          <Radio
            index={2}
            label='Saída'
            isSelected={values.type === '2'}
            marginLeft={64}
            buttonOuterColor={theme.colors.orange_300}
            buttonInnerColor={theme.colors.orange_300}
            onPress={() => {
              setRegisterType(2)
              setValues({ ...values, type: MovementType.expense })
            }}
          />
        </S.RadiosBox>
        <S.RadiosBorder error={errors.type && touched.type && errors.type}>
          {errors.type && touched.type && errors.type && <S.ErrorText>{errors.type}</S.ErrorText>}
        </S.RadiosBorder>

        <Dropdown
          data={categoriesValues}
          placeholder='Categoria'
          value={values.category}
          error={errors.category && touched.category && errors.category}
          onChange={(value) => setValues({ ...values, category: value })}
          leftIcon={
            <View style={{ marginRight: 23 }}>
              <MaterialIcons name='category' size={22} color={theme.colors.text_300} />
            </View>
          }
        />

        <InputDatePicker
          placeholder='Data do registro'
          value={formattedDate(new Date(values.date))}
          error={errors.date && touched.date && errors.date}
          onChange={(date) => setValues({ ...values, date })}
          leftIcon={
            <View style={{ marginRight: 26 }}>
              <FontAwesome5 name='calendar-alt' size={20} color={theme.colors.text_300} />
            </View>
          }
        />

        <Input
          placeholder='Descrição'
          value={values.description}
          onChange={(value) => setValues({ ...values, description: String(value) })}
          leftIcon={
            <View style={{ marginRight: 20 }}>
              <MaterialIcons name='text-fields' size={22} color={theme.colors.text_300} />
            </View>
          }
        />

        <S.ReturnBox
          onPress={() => {
            navigation.goBack()
          }}
        >
          <FontAwesome5 name='arrow-left' size={20} color={theme.colors.text_200} />
          <S.ReturnText>Voltar</S.ReturnText>
        </S.ReturnBox>

        <S.ButtomBox onPress={() => handleSubmit()}>
          <RoundButton
            focused
            icon={<Feather name='check-circle' size={30} color={theme.colors.text_100} />}
          />
        </S.ButtomBox>
      </BaseModal>
    </KeyboardAvoidingView>
  )
}
