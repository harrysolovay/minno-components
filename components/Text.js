import React from 'react'
import { Text as ReactNativeText, StyleSheet } from 'react-native'

const Text = (props) => (
  <ReactNativeText
    style={[
      props.header ? styles.header : null,
      props.heading ? styles.heading : null,
      props.title ? styles.title : null,
      props.subtitle ? styles.subtitle : null,
      props.right ? styles.right : null,
      props.action ? styles.action : null,
      props.notice ? styles.notice : null,
    ]}
    { ...props }
  />
)

const styles = StyleSheet.create({
  header : {
    fontFamily : 'FuturaLTBook',
    fontSize : 18,
    color : '#000'
  },
  heading : {
    fontFamily : 'HelveticaNeueLight',
    color : '#000'
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
