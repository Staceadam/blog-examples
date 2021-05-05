import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Notifications from '../screens/Notifications'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'

const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}

export default MyStack
