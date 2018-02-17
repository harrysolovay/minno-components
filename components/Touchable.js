import React from 'react'
import { TouchableOpacity } from 'react-native'

const Touchable = (props) => (
  <TouchableOpacity
    { ...props }
    activeOpacity={ props.activeOpacity || 1 }
  />
)

export default Touchable
