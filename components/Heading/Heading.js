import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HeadingGroup, HeadingTitle, HeadingSubtitle } from 'components'

const Heading = (props) => {

  let group = (
    <HeadingGroup
      title={ props.title }
      subtitle={ props.subtitle }
    />
  )

  return (
    <View style={[ styles.view, props.style ]}>
      {
        ( props.title || props.subtitle ) &&
          <HeadingGroup
            title={ props.title }
            subtitle={ props.subtitle }
          />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  view : {
    flexDirection : 'row',
    alignSelf : 'stretch'
  }
})

export default Heading
