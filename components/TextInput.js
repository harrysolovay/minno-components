import React from 'react'
import { TextInput as ReactNativeTextInput, Keyboard, StyleSheet } from 'react-native'

const TextInput = (props) => (
  <ReactNativeTextInput
    { ...props }
    style={[
      styles.textInput,
      props.autoCapitalize ? styles.uppercase : styles.eitherCase,
      props.multiline ? styles.multiline : styles.singleLine,
      props.style
    ]}
  />
)

const styles = StyleSheet.create({
  textInput : {
    alignSelf : 'stretch',
    color : '#000',
    paddingRight : 15,
    paddingLeft : 15
  },
  uppercase : {
    fontFamily : 'FuturaLTBook',
    fontSize : 18,
    lineHeight : 18,
    paddingTop : 1.5
  },
  eitherCase : {
    fontFamily : 'HelveticaNeueLight',
    fontSize : 20,
    lineHeight : 20,
    paddingTop : 3.5
  },
  singleLine : {
    height : 50
  },
  multiline : {
    paddingTop : 16.5,
    paddingBottom : 9
  }
})

export default TextInput
