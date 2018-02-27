import React from 'react'
import { View, Text, Graphic } from 'components'
import { LinearGradient } from 'expo'
import { StyleSheet } from 'react-native'

const GRAPHIC_PROPS = {

  back : {
    icon : 'back',
    size : 40,
    style : {
      marginTop : 4,
      marginLeft : 15
    }
  },

  rightArrow : {
    icon : 'rightArrow',
    size : 30,
    style : {
      marginTop : 2,
      marginRight : 4
    }
  },

  search : {
    image : 'search',
    style : {
      width : 20,
      height : 20,
      marginTop : 1
    }
  }

}

const Slot = (props) => {
  return props.contents
    ? typeof props.contents === 'string'
      ? Object.keys(GRAPHIC_PROPS).includes(props.contents)
        ? <Graphic
            { ...GRAPHIC_PROPS[props.contents] }
          />
        : <Text
            text={ props.contents }
          />
      : props.contents
    : null
}

const Bar = (props) => (

  <View
    onPress={ props.onPress }
    style={[
      styles.container,
      props.leftHeavy || !props.center
        ? styles.alignItemsLeft
        : styles.alignItemsCenter,
      props.style
    ]}
  >

    <View
      style={[
        styles.side,
        props.leftHeavy || !props.center
          ? null
          : [ styles.absolute, { left : 0 } ]
      ]}
    >
      <Slot
        contents={ props.left }
      />
    </View>

    <View
      style={[
        props.height
          ? { height : props.height, justifyContent : 'center' }
          : null
      ]}
    >
      <Slot
        contents={ props.center }
      />
    </View>

    <LinearGradient
      start={[ 0, 1 ]}
      colors={[ 'rgba(255, 255, 255, 0)', '#fff' ]}
      style={[
        styles.side,
        styles.absolute,
        { right : 0 }
      ]}
    >
      <Slot
        contents={ props.right }
      />
    </LinearGradient>

  </View>

)

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    alignSelf : 'stretch'
  },
  alignItemsCenter : {
    justifyContent : 'center'
  },
  alignItemsLeft : {
    justifyContent : 'flex-start'
  },
  side : {
    alignSelf : 'stretch',
    justifyContent : 'center'
  },
  absolute : {
    position : 'absolute',
    top : 0,
    bottom : 0
  }
})

export default Bar
