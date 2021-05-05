import React from 'react'
import { View, Text, Button } from 'react-native'

function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  )
}

export default Home
