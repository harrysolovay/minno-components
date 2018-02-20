import React from 'react'
import { Image as ReactNativeImage } from 'react-native'

const Image = (props) => {
  return (
    <ReactNativeImage
      style={ props.style }
      { ...props }
    />
  )
}

export default Image
