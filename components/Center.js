import React from 'react'
import { View, StyleSheet } from 'react-native'

const Loading = (props) => {
  return (
    <View { ...props } style={[ props.style, styles.container ]} />
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})

export default Loading
