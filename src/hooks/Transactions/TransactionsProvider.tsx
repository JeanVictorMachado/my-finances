import { useMemo } from 'react'

import { ChildrenProps } from '@src/@types/Shared'
import { TransactionsContext } from './UseTransactions'
import { categories } from '@utils/variables/categories'

export const TransactionsProvider = ({ children }: ChildrenProps) => {
  const categoriesValues = useMemo(() => {
    return categories.map((category) => ({
      label: category.categoryName,
      value: category.id,
    }))
  }, [])

  return (
    <TransactionsContext.Provider value={{ categoriesValues }}>
      {children}
    </TransactionsContext.Provider>
  )
}
