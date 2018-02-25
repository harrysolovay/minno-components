import React from 'react'
import { View, Text } from 'components'
import { StyleSheet } from 'react-native'

const Group = (props) => (
  <View
    style={[
      styles.view,
      props.center ? styles.center : null,
      props.precedent ? styles.precedent : null,
      props.style,
    ]}
  >
    {
      props.title &&
        <Text heading title
          onPress={ props.onTitlePress }
        >
          { props.title }
        </Text>
    }
    {
      props.subtitle &&
        <Text heading subtitle
          onPress={ props.onSubtitlePress }
        >
          { props.subtitle }
        </Text>
    }
  </View>
)

const styles = StyleSheet.create({
  view : {
    paddingTop : 12,
    paddingBottom : 6,
  },
  precedent : {
    paddingRight : 14,
    borderColor : '#ddd',
    borderRightWidth : 1
  },
  center : {
    alignItems : 'center'
  }
})

export default Group
