interface CategoryProps {
  label: string
  value: string | number
}

export interface ITransactionsContext {
  categoriesValues: CategoryProps[]
}
