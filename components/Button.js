import React from 'react'
import { Touchable, Text } from 'components'
import { StyleSheet } from 'react-native'

const Button = (props) => (
  <Touchable
    style={[ styles.touchable, props.buttonStyle ]}
  >
    <Text
      style={[ styles.text, props.textStyle ]}
      body
    >
      { props.text }
    </Text>
  </Touchable>
)

const styles = StyleSheet.create({
  touchable : {
    height : 50,
    alignSelf : 'stretch',
    alignItems : 'center',
    justifyContent : 'center',
    paddingRight : 15,
    paddingLeft : 15
  },
  text : {
    fontFamily : 'HelveticaNeueLight',
    fontSize : 20,
    lineHeight : 20,
    color : '#000',
    marginTop : 7
  }
})

export default Button
