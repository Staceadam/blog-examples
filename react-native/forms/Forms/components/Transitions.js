import React, { forwardRef, createRef } from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  KeyboardAvoidingView
} from 'react-native'
import { useForm, useController } from 'react-hook-form'

const Input = forwardRef(({ name, control, nextRef }, ref) => {
  const { field } = useController({
    control,
    name
  })

  return (
    <TextInput
      ref={ref}
      onSubmitEditing={() => {
        if (nextRef.current.props?.onPress()) {
          nextRef.current.props.onPress()
        } else {
          nextRef.current.focus()
        }
      }}
      //   onSubmitEditing={() => { console.log('this is next ref', nextRef) nextRef.current.focus()}}
      style={styles.input}
      value={field.value}
      onChangeText={field.onChange}
      placeholder={name}
    />
  )
})

function Transitions() {
  const { control, handleSubmit } = useForm()
  const ageInput = createRef()
  const buttonInput = createRef()

  const onSubmit = data => {
    Alert.alert('Form Submitted!', JSON.stringify(data), [{ text: 'OK' }])
  }

  return (
    <View style={styles.container}>
      <Input name="name" nextRef={ageInput} control={control} />
      <Input
        ref={ageInput}
        nextRef={buttonInput}
        name="age"
        control={control}
      />
      <Button
        ref={buttonInput}
        title="submit"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue'
  },
  input: {
    paddingHorizontal: 10,
    height: 40,
    margin: 12,
    borderWidth: 1
  }
})

export default Transitions
