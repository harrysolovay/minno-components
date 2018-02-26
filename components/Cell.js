import React from 'react'
import { View, Text, Graphic } from 'components'
import { LinearGradient } from 'expo'
import { StyleSheet } from 'react-native'

const ICONS = {

  rightArrow : {
    icon : 'rightArrow',
    size : 30,
    style : {
      marginTop : 2,
      marginRight : 4
    }
  }

}

const Slot = (props) => {
  return props.contents
    ? typeof props.contents === 'string'
      ? Object.keys(ICONS).includes(props.contents)
        ? <Graphic
            { ...ICONS[props.contents] }
          />
        : <Text
            text={ props.contents }
          />
      : props.contents
    : null
}

const Cell = (props) => (

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
      <Slot contents={ props.left } />
    </View>

    <View>
      <Slot contents={ props.center } />
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
      <Slot contents={ props.right } />
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

export default Cell
