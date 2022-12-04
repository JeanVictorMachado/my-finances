import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  category: Yup.string().required('Categoria é obrigatório.'),
  date: Yup.string().required('Data é obrigatório.'),
  type: Yup.string().required('Tipo do registro é obrigatório.'),
  value: Yup.string().required('Você deve informar um valor.'),
})
