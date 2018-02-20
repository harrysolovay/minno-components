import React from 'react'
import { KeyboardAvoidingView as ReactNativeKeyboardAvoidingView, StyleSheet } from 'react-native'

const KeyboardAvoidingView = (props) => {
  return (
    <ReactNativeKeyboardAvoidingView
      style={[ styles.container, props.style ]}
      { ...props }
      behavior='padding'
    />
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
})

export default KeyboardAvoidingView
