import { useMemo, useState } from 'react'
import { Alert } from 'react-native'
import uuid from 'react-native-uuid'

import { ChildrenProps } from '@src/@types/Shared'
import { RegistersContext } from './UseRegisters'
import { incomesCategories, expensesCategories } from '@utils/variables/categories'
import { CreateRegisterProps } from '@src/@types/Registers'
import { getRealm } from '@databases/realm'

export const RegistersProvider = ({ children }: ChildrenProps) => {
  const [registers, setRegister] = useState<CreateRegisterProps[]>([])
  const [registerType, setRegisterType] = useState(0)
  const [isLoaging, setIsLoaging] = useState(false)

  const categoriesValues = useMemo(() => {
    const categories =
      registerType === 1 ? incomesCategories : registerType === 2 ? expensesCategories : []

    if (!categories.length) return []

    return categories.map((category) => ({
      label: category.categoryName,
      value: category.id,
    }))
  }, [registerType])

  const handleGetRegisters = async () => {
    const realm = await getRealm()
    setIsLoaging(true)

    try {
      const response = realm.objects('Register')
      setRegister(response as unknown as CreateRegisterProps[])
    } catch {
      Alert.alert('Registro', 'Erro ao carregar os registros!')
    } finally {
      setIsLoaging(false)
      realm.close()
    }
  }

  const handleNewRegister = async (data: CreateRegisterProps) => {
    const realm = await getRealm()
    setIsLoaging(true)

    try {
      realm.write(() => {
        realm.create('Register', {
          _id: uuid.v4(),
          ...data,
        })
      })
      Alert.alert('Registro', 'Registro efetuado com sucesso!')
    } catch {
      Alert.alert('Registro', 'Erro ao tentar registrar!')
    } finally {
      setIsLoaging(false)
      realm.close()
      handleGetRegisters()
    }
  }

  return (
    <RegistersContext.Provider
      value={{
        categoriesValues,
        registers,
        isLoaging,
        setRegisterType,
        handleGetRegisters,
        handleNewRegister,
      }}
    >
      {children}
    </RegistersContext.Provider>
  )
}
