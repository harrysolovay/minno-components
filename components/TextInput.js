import React from 'react'
import { TextInput as ReactNativeTextInput, StyleSheet } from 'react-native'

const TextInput = (props) => (
  <ReactNativeTextInput
    style={[
      styles.textInput,
      props.autoCapitalize ? styles.uppercase : styles.eitherCase,
      props.style
    ]}
    { ...props }
  />
)

const styles = StyleSheet.create({
  textInput : {
    height : 50,
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
  }
})

export default TextInput
