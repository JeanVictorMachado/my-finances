import Realm from 'realm'
import { RegisterSchema } from './schemas/RegisterSchema'

export const getRealm = async () =>
  await Realm.open({
    path: 'my-finance-app',
    schema: [RegisterSchema],
  })
