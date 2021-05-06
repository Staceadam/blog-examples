import React, { useEffect } from 'react'

const axios = require('axios')

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native'

const App = () => {
  useEffect(() => {
    const getPosts = async () => {
      return await axios.get('https://jsonplaceholder.typicode.com/posts')
    }
    getPosts()
  }, [])
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

export default App
