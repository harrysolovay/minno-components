import React, { Component } from 'react'
import { KeyboardAvoidingView, View, TextInput } from 'components'
import { TAB_BAR_HEIGHT } from 'constants'
import { Animated, StyleSheet } from 'react-native'

class UnanimatedComposer extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={[ styles.keyboardAvoidingView, this.props.style ]}
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
  }
}

const Composer = Animated.createAnimatedComponent(UnanimatedComposer)

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
