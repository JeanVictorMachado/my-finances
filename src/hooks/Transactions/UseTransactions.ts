import { createContext, useContext } from 'react'
import { ITransactionsContext } from '@src/@types/Transactions'

export const TransactionsContext = createContext<ITransactionsContext>({} as ITransactionsContext)

export default function useTransactions(): ITransactionsContext {
  const context = useContext(TransactionsContext)

  return context
}
