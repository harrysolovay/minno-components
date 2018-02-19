import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NOTCH_HEIGHT } from 'constants'

const TabBar = (props) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.tabs }></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    position : 'absolute',
    right : 0,
    bottom : 0,
    left : 0,
    backgroundColor : '#fff',
    borderTopWidth : 1,
    borderColor : '#ddd',
    paddingBottom : NOTCH_HEIGHT,
  },
  tabs : {
    height : 50
  }
})

export default TabBar
