import React, { Component } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { View, Bar, Text, ActionSheetTrigger } from 'components'
import { HEADER_HEIGHT } from 'constants'

class Header extends Component {

  render() {
    return (
      <Animated.View
        style={[ styles.container, this.props.style ]}
      >
        <Bar
          left={ this.props.left }
          center={ this.props.center }
          right={ this.props.right }
          height={ 50 }
        />
      </Animated.View>
    )
  }

}

const styles = StyleSheet.create({
  container : {
    position : 'absolute',
    top : 0,
    right : 0,
    left : 0,
    zIndex : 2,
    height : HEADER_HEIGHT,
    backgroundColor : '#fff',
    borderBottomWidth : 1,
    borderColor : '#ddd',
    justifyContent : 'flex-end'
  }
})

export default Header
