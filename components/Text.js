import React from 'react'
import { Text as ReactNativeText, StyleSheet } from 'react-native'

const Text = (props) => (
  <ReactNativeText
    { ...props }
    style={[

      styles.text,

      props.padding ? styles.padding : null,

      props.header ? styles.header : null,
      props.body ? styles.body : null,

      props.secondary ? styles.secondary : null,
      props.action ? styles.action : null,
      props.notice ? styles.notice : null,

      props.style

    ]}
  >
    { props.text || props.children }
  </ReactNativeText>
)

const styles = StyleSheet.create({

  text : {
    fontFamily : 'HelveticaNeueLight',
    fontSize : 20,
    lineHeight : 20,
    color : '#000'
  },

  body : {
    fontSize : 16,
    lineHeight : 16.5
  },

  padding : {
    paddingTop : 16.5,
    paddingRight : 15,
    paddingBottom : 9.5,
    paddingLeft : 15
  },

  header : {
    fontFamily : 'FuturaLTBook',
    fontSize : 18,
    lineHeight : 19,
    paddingTop : 18,
    paddingRight : 15,
    paddingBottom : 11,
    paddingLeft : 15
  },

  secondary : { color : '#90949c' },
  action : { color : '#5990dc' },
  notice : { color : '#d0021b' }

})

export default Text
