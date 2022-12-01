import { ChildrenProps } from '@src/@types/Shared'

import { TransactionsProvider } from './Transactions/TransactionsProvider'

export const ContextProviders = ({ children }: ChildrenProps) => {
  return <TransactionsProvider>{children}</TransactionsProvider>
}
