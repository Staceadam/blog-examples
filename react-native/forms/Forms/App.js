import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import BasicForm from './components/BasicForm'
import HookForm from './components/HookForm'
import HookValidationForm from './components/HookValidationForm'

function App() {
  return (
    <SafeAreaView>
      <BasicForm />
      <HookForm />
      <HookValidationForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App
