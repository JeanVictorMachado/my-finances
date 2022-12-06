import { useMemo, useState } from 'react'

import { ChildrenProps } from '@src/@types/Shared'
import { TransactionsContext } from './UseTransactions'
import { incomesCategories, expensesCategories } from '@utils/variables/categories'
import { CreateRegisterProps } from '@src/@types/Transactions'

export const TransactionsProvider = ({ children }: ChildrenProps) => {
  const [registers, setRegister] = useState<CreateRegisterProps[]>([])
  const [registerType, setRegisterType] = useState(0)

  const categoriesValues = useMemo(() => {
    const categories =
      registerType === 1 ? incomesCategories : registerType === 2 ? expensesCategories : []

    if (!categories.length) return []

    return categories.map((category) => ({
      label: category.categoryName,
      value: category.id,
    }))
  }, [registerType])

  return (
    <TransactionsContext.Provider
      value={{ categoriesValues, registers, setRegisterType, setRegister }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
