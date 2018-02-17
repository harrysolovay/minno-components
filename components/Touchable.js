import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'components'

const Touchable = (props) => {
  return props.text
    ? <TouchableOpacity
        style={ props.touchableStyle }
        onPress={ props.onPress }
        activeOpacity={ props.activeOpacity || 1 }
      >
        <Text
          style={ props.textStyle }
        >
          { props.text }
        </Text>
      </TouchableOpacity>
    : <TouchableOpacity { ...props } />
}

export default Touchable
