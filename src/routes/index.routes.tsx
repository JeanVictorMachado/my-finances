import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform } from 'react-native'

import { Home } from '@screens/Home'
import { New } from '@screens/New'
import { Notification } from '@screens/Notification'
import { Profile } from '@screens/Profile'
import { Search } from '@screens/Search'

import { ButtonNew } from '@components/ButtonNew'
import { Entypo, Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#212121',
          borderTopColor: 'transparent',
          paddingTop: 4,
          paddingBottom: Platform.OS !== 'ios' ? 4 : 30,
        },
        tabBarActiveTintColor: '#EFEFEF',
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
        component={New}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, color }) => <ButtonNew />,
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
