import React from 'react'
import { TextInput as ReactNativeTextInput, StyleSheet } from 'react-native'

const TextInput = (props) => (
  <ReactNativeTextInput
    style={[ styles.textInput, props.style ]}
    { ...props }
  />
)

const styles = StyleSheet.create({
  heading : {
    fontFamily : 'HelveticaNeueLight',
    color : '#000'
  }
})

export default TextInput
