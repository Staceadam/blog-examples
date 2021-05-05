import React from 'react'
import { View, Text, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'

function Home({ componentId }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Profile"
        onPress={() =>
          Navigation.push(componentId, {
            component: {
              name: 'Profile'
            }
          })
        }
      />
    </View>
  )
}

export default Home
