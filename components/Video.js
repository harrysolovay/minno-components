import React from 'react'
import { Video as ExpoVideo } from 'expo'

const Video = (props) => (
  <ExpoVideo
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

export default Video
