import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const expensesCategories = [
  {
    id: 'jean-id',
    categoryName: 'Jean',
    categoryIcon: <Ionicons name='ios-person-circle-outline' size={24} color='#191920' />,
    amountSpent: 0,
    maxValue: 500,
  },
  {
    id: 'jessica-id',
    categoryName: 'Jéssica',
    categoryIcon: <Ionicons name='ios-person-circle-outline' size={24} color='#191920' />,
    amountSpent: 0,
    maxValue: 500,
  },
  {
    id: 'aurora-id',
    categoryName: 'Aurora',
    categoryIcon: <Ionicons name='ios-person-circle-outline' size={24} color='#191920' />,
    amountSpent: 0,
    maxValue: 100,
  },
  {
    id: 'mercado-id',
    categoryName: 'Mercado',
    categoryIcon: <MaterialIcons name='shopping-cart' size={24} color='#191920' />,
    amountSpent: 0,
    maxValue: 800,
  },
  {
    id: 'farmacia-id',
    categoryName: 'Farmácia',
    categoryIcon: <MaterialCommunityIcons name='hospital-box-outline' size={24} color='#191920' />,
    amountSpent: 0,
    maxValue: 100,
  },
]

export const incomesCategories = [
  {
    id: 'salary-id',
    categoryName: 'Salário',
    categoryIcon: <Ionicons name='ios-person-circle-outline' size={24} color='#3D3F49' />,
    amountSpent: 0,
    maxValue: 0,
  },
  {
    id: 'other-id',
    categoryName: 'Outros',
    categoryIcon: <Ionicons name='ios-person-circle-outline' size={24} color='#3D3F49' />,
    amountSpent: 0,
    maxValue: 0,
  },
]
