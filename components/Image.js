import React from 'react'
import { Image as ReactNativeImage } from 'react-native'

const Image = (props) => (
  <ReactNativeImage
    resizeMode={
      props.cover
        ? 'cover'
        : props.stretch
          ? 'stretch'
          : props.repeat
            ? 'repeat'
            : 'contain'
    }
    { ...props }
  />
)

export default Image
