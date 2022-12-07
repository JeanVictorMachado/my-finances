interface CategoryProps {
  label: string
  value: string | number
}

interface CreateRegisterProps {
  _id?: string
  category: string
  date: string
  description?: string
  type: string
  value: string
}

export interface IRegistersContext {
  categoriesValues: CategoryProps[]
  registers: CreateRegisterProps[]
  isLoaging: boolean
  setRegisterType: (param: number) => void
  handleGetRegisters: () => void
  handleNewRegister: (params: CreateRegisterProps) => void
}
