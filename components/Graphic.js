import React from 'react'
import { Touchable, Image } from 'components'
import { Ionicons } from '@expo/vector-icons'
import SearchIconImage from 'assets/images/search.png'

const Icon = (props) => (
  <props.type
    style={ props.style }
    name={ props.name }
    color={ props.color || '#000' }
    size={ props.size }
  />
)

const GRAPHICS = {

  // paddingTop : 4
  back : (props) => (
    <Icon
      type={ Ionicons }
      name='ios-arrow-round-back'
      size={ 40 }
    />
  ),

  search : () => (
    <Image
      style={{
        width : 20,
        height : 20
      }}
      source={ SearchIconImage }
    />
  ),

  showActions : (props) => (
    <Ionicons
      name='ios-more-outline'
      size={ 30 }
      color='#000'
    />
  ),

  posts : (props) => (
    <Ionicons
      name='ios-disc-outline'
      size={ 30 }
      color={ props.color }
    />
  ),

  capture : (props) => (
    <Ionicons
      name='ios-aperture-outline'
      size={ 30 }
      color='#000'
      color={ props.color }
    />
  ),

  account : (props) => (
    <Ionicons
      name='ios-contact-outline'
      size={ 30 }
      color='#000'
      color={ props.color }
    />
  )

}

const Graphic = (props) => {
  return props.onPress
    ? <Touchable
        style={ props.touchableStyle }
        onPress={ props.onPress }
      >
        { GRAPHICS[props.name](props) }
      </Touchable>
    : GRAPHICS[props.name](props)
}

export default Graphic
