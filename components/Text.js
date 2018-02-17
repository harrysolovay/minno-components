import React from 'react'
import { Text as ReactNativeText, StyleSheet } from 'react-native'

const Text = (props) => {
  return <ReactNativeText style={[ styles.text, props.style ]}>{ props.children }</ReactNativeText>
}

const styles = StyleSheet.create({
  text : {
    fontFamily : 'HelveticaNeueLight',
    fontSize : 16,
    lineHeight : 16
  }
})

export default Text
