import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'components'

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
