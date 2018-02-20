import React from 'react'
import { KeyboardAvoidingView, View, TextInput } from 'components'
import { TAB_BAR_HEIGHT } from 'constants'
import { StyleSheet } from 'react-native'

const Composer = (props) => (
  <KeyboardAvoidingView
    style={[ styles.keyboardAvoidingView, { transform : [{ translateY : props.offset }] } ]}
  >
    <View
      style={ styles.view }
    >
      <TextInput
        placeholder='what is up L'
        returnKeyType='next'
      />
    </View>
  </KeyboardAvoidingView>
)

const styles = StyleSheet.create({
  keyboardAvoidingView : {
    position : 'absolute',
    right : 0,
    bottom : TAB_BAR_HEIGHT,
    left : 0,
    backgroundColor : '#fff'
  },
  view : {
    alignSelf : 'stretch',
    borderTopWidth : 1,
    borderColor : '#ddd'
  }
})

export default Composer
