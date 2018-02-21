import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'components'

const Group = (props) => (
  ( props.title || props.subtitle )
    ? <View
        style={[
          props.style,
          styles.view,
          props.precedent ? styles.precedent : null,
          props.center ? styles.center : null
        ]}>
        {
          props.title &&
            <Text heading title>{ props.title }</Text>
        }
        {
          props.subtitle &&
            <Text heading subtitle>{ props.subtitle }</Text>
        }
      </View>
    : null
)

const styles = StyleSheet.create({
  view : {
    borderColor : '#ddd',
    paddingTop : 12,
    paddingBottom : 6,
    paddingLeft : 12
  },
  precedent : {
    paddingRight : 14,
    borderRightWidth : 1
  },
  center : {
    paddingLeft : 0,
    alignItems : 'center'
  }
})

export default Group
