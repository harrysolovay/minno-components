import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'components'

const Group = (props) => (
  ( props.title || props.subtitle )
    ? <View style={[ props.style, styles.view ]}>
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
  }
})

export default Group
