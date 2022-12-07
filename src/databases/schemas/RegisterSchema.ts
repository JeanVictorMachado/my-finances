export const RegisterSchema = {
  name: 'Register',
  properties: {
    _id: 'string',
    category: 'string',
    type: 'string',
    description: 'string?',
    value: 'string',
    date: 'string',
  },
  primaryKey: '_id',
}
