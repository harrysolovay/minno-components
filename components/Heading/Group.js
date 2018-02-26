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
        <Text
          text={ props.title }
          style={ styles.title }
          onPress={ props.onTitlePress }
        />
    }
    {
      props.subtitle &&
        <Text
          text={ props.subtitle }
          style={ styles.subtitle }
          onPress={ props.onSubtitlePress }
        />
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
  },
  title : {
    fontSize : 20,
    lineHeight : 20
  },
  subtitle : {
    fontSize : 16,
    lineHeight : 16,
    color : '#90949c'
  }
})

export default Group
