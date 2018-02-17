import React from 'react'
import { StyleSheet } from 'react-native'
import { Touchable, Text as BaseText } from 'components'

const Text = (props) => {
  return props.onPress
    ? <Touchable
        touchableStyle={ props.touchableStyle }
        textStyle={ props.textStyle }
        text={ props.text }
        onPress={ props.onPress }
      />
    : <BaseText
        style={ props.textStyle }
        { ...props }
      />
}

const Title = (props) => {
  return (
    <Text
      textStyle={ styles.title }
      { ...props }
    />
  )
}

const Subtitle = (props) => {
  return (
    <Text
      textStyle={ styles.subtitle }
      { ...props }
    />
  )
}

const styles = StyleSheet.create({
  title : {
    fontSize : 18,
    lineHeight : 18
  },
  subtitle : {
    fontSize : 16,
    lineHeight : 16
  }
})

export { Title, Subtitle }
export default Text
