import React from 'react'
import { Text as ReactNativeText, StyleSheet } from 'react-native'

const Text = (props) => (
  <ReactNativeText
    { ...props }
    style={[
      styles.text,
      props.header ? styles.header : null,
      props.heading ? styles.heading : null,
      props.title ? styles.title : null,
      props.subtitle ? styles.subtitle : null,
      props.right ? styles.right : null,
      props.action ? styles.action : null,
      props.notice ? styles.notice : null,
      props.style
    ]}
  />
)

const styles = StyleSheet.create({
  text : {
    fontFamily : 'HelveticaNeueLight',
    color : '#000',
    fontSize : 20,
    lineHeight : 20
  },
  header : {
    fontFamily : 'FuturaLTBook',
    fontSize : 18,
    lineHeight : 19,
    color : '#000',
    marginTop : 7
  },
  title : {
    fontSize : 20,
    lineHeight : 20
  },
  subtitle : {
    fontSize : 16,
    lineHeight : 16
  },
  right : {
    fontSize : 16,
    lineHeight : 16,
    marginTop : 6
  },
  action : {
    color : '#5990dc'
  },
  notice : {
    color : '#d0021b'
  }
})

export default Text
