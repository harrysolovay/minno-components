import React from 'react'
import { Image as ReactNativeImage } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Touchable } from 'components'

import SearchImage from 'assets/images/search.png'

const IMAGES = {
  search : SearchImage
}

const Image = (props) => (
  <ReactNativeImage
    { ...props }
    source={ IMAGES[props.image] }
    resizeMode='contain'
  />
)

ICON_TYPES = {
  'Ionicons' : Ionicons
}

const ICONS = {
  back : {
    type : 'Ionicons',
    name : 'ios-arrow-round-back'
  },
  more : {
    type : 'Ionicons',
    name : 'ios-more-outline'
  },
  posts : {
    type : 'Ionicons',
    name : 'ios-disc-outline'
  },
  capture : {
    type : 'Ionicons',
    name : 'ios-aperture-outline'
  },
  account : {
    type : 'Ionicons',
    name : 'ios-contact-outline'
  },
  flashOn : {
    type : 'Ionicons',
    name : 'ios-flash'
  },
  flashOff : {
    type : 'Ionicons',
    name : 'ios-flash-outline'
  },
  flipCamera : {
    type : 'Ionicons',
    name : 'ios-refresh'
  }
}

const Icon = (props) => {
  const Type = ICON_TYPES[ICONS[props.icon].type]
  return <Type
    { ...props }
    name={ ICONS[props.icon].name }
    color={ props.color || '#000' }
  />
}

const Graphic = (props) => {

  let theGraphic

  if(props.icon)
    theGraphic = (
      <Icon
        { ...props }
      />
    )

  if(props.image)
    theGraphic = (
      <Image
        { ...props }
      />
    )

  return props.onPress
    ? <Touchable
        style={ props.touchableStyle }
        onPress={ props.onPress }
      >
        { theGraphic }
      </Touchable>
    : theGraphic
}

export default Graphic
