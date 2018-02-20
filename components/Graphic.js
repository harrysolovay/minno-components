import React from 'react'
import { Touchable, Image } from 'components'
import { Ionicons } from '@expo/vector-icons'
import SearchIconImage from 'assets/images/search.png'

const GRAPHICS = {

  back : (props) => (
    <Ionicons
      name='ios-arrow-round-back'
      size={ 40 }
      color='#000'
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
