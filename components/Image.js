import React from 'react'
import { Image as ReactNativeImage } from 'react-native'

const Image = (props) => (
  <ReactNativeImage
    { ...props }
    resizeMode={
      props.cover
        ? 'cover'
        : props.stretch
          ? 'stretch'
          : props.repeat
            ? 'repeat'
            : 'contain'
    }
  />
)

export default Image
