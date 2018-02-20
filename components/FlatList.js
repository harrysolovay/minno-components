import React from 'react'
import { FlatList as ReactNativeFlatList, StyleSheet} from 'react-native'

const FlatList = (props) => {
  return (
    <ReactNativeFlatList
      style={[ styles.flatList, props.style ]}
      { ...props }
    />
  )
}

const styles = StyleSheet.create({
  flatList : {
    flex : 1
  }
})

export default FlatList
