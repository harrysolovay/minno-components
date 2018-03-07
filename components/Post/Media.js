import React, { Component } from 'react'
import { View, Image, Video, Blurb, CommentsPreview } from 'components'
import { StyleSheet } from 'react-native'


const Media = (props) => {
  switch(props.type) {

    case 'Image' : {
      return (
        <Image
          { ...props }
          source={ props.source }
          resizeMode='cover'
        />
      )
      break
    }

    case 'Video' : {
      return (
        <Video
          rate={ 1.0 }
          volume={ 0 }
          isMuted={ true }
          resizeMode='cover'
          shouldPlay
          isLooping
          { ...props }
        />
      )
      break
    }

    default : {
      break
    }

  }
}

const styles = StyleSheet.create({
  media : {
    width : null,
    height : null,
    flex : 1,
    borderRadius : 5,
    overflow : 'hidden'
  }
})

export default Media
