interface CategoryProps {
  label: string
  value: string | number
}

interface CreateRegisterProps {
  category: string
  date: string
  description?: string
  type: string
  value: string
}

export interface ITransactionsContext {
  categoriesValues: CategoryProps[]
  registers: CreateRegisterProps[]
  setRegisterType: (param: number) => void
  setRegister: (params: CreateRegisterProps[]) => void
}
