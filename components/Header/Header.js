import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'components'
import { HEADER_HEIGHT } from 'constants'

const Header = (props) => {
  return (
    <View { ...props } style={[ props.style, styles.container ]}>

    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    position : 'absolute',
    top : 0,
    right : 0,
    left : 0,
    zIndex : 1000,
    height : HEADER_HEIGHT,
    backgroundColor : '#fff',
    borderBottomWidth : 1,
    borderColor : '#ddd'
  }
})

export default Header
