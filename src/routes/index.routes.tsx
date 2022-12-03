import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform } from 'react-native'

import { Home } from '@screens/Home'
import { NewRegister } from '@screens/NewRegister'
import { Notification } from '@screens/Notification'
import { Profile } from '@screens/Profile'
import { Search } from '@screens/Search'

import { RoundButton } from '@components/RoundButton'
import { Entypo, Feather } from '@expo/vector-icons'
import theme from '@src/styles/theme'

const Tab = createBottomTabNavigator()

export const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.secondary_color,
          borderTopColor: 'transparent',
          paddingTop: 4,
          paddingBottom: Platform.OS !== 'ios' ? 4 : 30,
        },
        tabBarActiveTintColor: theme.colors.text_200,
      }}
    >
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => <Entypo name='home' size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name='search'
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => <Feather name='search' size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name='new'
        component={NewRegister}
        options={{
          tabBarLabel: '',
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused, color }) => <RoundButton color={color} focused={focused} />,
        }}
      />

      <Tab.Screen
        name='notification'
        component={Notification}
        options={{
          tabBarIcon: ({ size, color }) => <Entypo name='notification' size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name='profile'
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => <Feather name='user' size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}
