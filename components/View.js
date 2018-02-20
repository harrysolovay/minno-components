import React from 'react'
import { View as ReactNativeView, StyleSheet} from 'react-native'

const View = (props) => {
  return (
    <ReactNativeView
      style={[ styles.view, props.style ]}
      { ...props }
    />
  )
}

const styles = StyleSheet.create({
  view : {
    flex : 1
  }
})

export default View
