import * as React from 'react'
import { View, SafeAreaView } from 'react-native'

import Header from './components/Header'
import Form from './components/Form'

const App = () => {
  return (
    <SafeAreaView>
      <View style={{ padding: 12 }}>
        <Header title="testing" />
        <Form />
      </View>
    </SafeAreaView>
  )
}

export default App
