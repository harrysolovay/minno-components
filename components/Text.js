import React from 'react'
import { Text as ReactNativeText, StyleSheet } from 'react-native'

const Text = (props) => (
  <ReactNativeText
    { ...props }
    style={[

      styles.text,

      props.fillContainer ? styles.fillContainer : null,

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

  fillContainer : {
    paddingTop : 16,
    paddingRight : 15,
    paddingBottom : 10,
    paddingLeft : 15
  },

  action : { color : '#5990dc' },
  notice : { color : '#d0021b' }

})

export default Text
