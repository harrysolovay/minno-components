import React from 'react'
import { Animated } from 'react-native'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { Image, Touchable } from 'components'

import logoImage from 'assets/images/logo.png'
import searchImage from 'assets/images/search.png'

const IMAGES = {
  logo : logoImage,
  search : searchImage
}

const ICON_TYPES = {
  'EvilIcons' : EvilIcons,
  'Ionicons' : Ionicons
}

const ICONS = {
  spinner : {
    type : 'EvilIcons',
    name : 'spinner-3'
  },
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
  let Type = ICON_TYPES[ICONS[props.icon].type]
  if(props.animated)
    Type = Animated.createAnimatedComponent(Type)
  return <Type
    { ...props }
    name={ ICONS[props.icon].name }
    color={ props.color || '#000' }
  />
}

const Graphic = (props) => {

  let theGraphic

  if(props.icon) {
    theGraphic = (
      <Icon
        { ...props }
      />
    )
  }

  if(props.image) {
    let Type = props.animated ? Animated.Image : Image
    theGraphic = (
      <Type
        { ...props }
        source={ IMAGES[props.image] }
      />
    )
  }

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
