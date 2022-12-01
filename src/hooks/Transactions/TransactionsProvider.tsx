import { ChildrenProps } from '@src/@types/Shared'
import { TransactionsContext } from './UseTransactions'

export const TransactionsProvider = ({ children }: ChildrenProps) => {
  return <TransactionsContext.Provider value={{}}>{children}</TransactionsContext.Provider>
}
