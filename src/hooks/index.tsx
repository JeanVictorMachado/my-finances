import { ChildrenProps } from '@src/@types/Shared'

import { RegistersProvider } from './Registers/RegistersProvider'

export const ContextProviders = ({ children }: ChildrenProps) => {
  return <RegistersProvider>{children}</RegistersProvider>
}
