import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HeadingTitle, HeadingSubtitle } from 'components'

const Group = (props) => {
  return (
    <View style={[ props.style, styles.view ]}>
      { props.title &&
          <HeadingTitle>{ props.title }</HeadingTitle>
      }
      { props.subtitle &&
          <HeadingSubtitle>{ props.subtitle }</HeadingSubtitle>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  view : {
    borderColor : '#ddd',
    paddingTop : 12,
    paddingBottom : 6
  }
})

export default Group
