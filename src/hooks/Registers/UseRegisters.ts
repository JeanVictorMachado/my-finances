import { createContext, useContext } from 'react'
import { IRegistersContext } from '@src/@types/Registers'

export const RegistersContext = createContext<IRegistersContext>({} as IRegistersContext)

export default function useRegisters(): IRegistersContext {
  const context = useContext(RegistersContext)

  return context
}
