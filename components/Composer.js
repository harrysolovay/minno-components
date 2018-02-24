import React, { Component } from 'react'
import { StyleSheet, Animated } from 'react-native'
import { TAB_BAR_HEIGHT } from 'constants'
import { KeyboardAvoidingView, View, TextField } from 'components'

class UnanimatedComposer extends Component {

  render() {
    return (
      <KeyboardAvoidingView
        style={[ styles.keyboardAvoidingView, this.props.style ]}
      >
        <View
          style={ styles.view }
        >
          <TextField
            placeholder='write a post'
            returnKeyType='next'
            rightText='post'
            multiline={ true }
            onContentSizeChange={ this.props.onSizeChange }
            style={ styles.textField }
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
    bottom : TAB_BAR_HEIGHT + 1,
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
