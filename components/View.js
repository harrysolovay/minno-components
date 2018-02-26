import React from 'react'
import { View as ReactNativeView, TouchableOpacity, StyleSheet } from 'react-native'
import {
  SCREEN_WIDTH, SCREEN_HEIGHT,
  HEADER_HEIGHT, TAB_BAR_HEIGHT
} from 'constants'

const View = (props) => {

  const Type = props.onPress
    ? TouchableOpacity
    : ReactNativeView

  return (
    <Type
      { ...props }
      style={[

        props.flex ? styles.flex : null,

        props.hasHeader ? styles.hasHeader : null,
        props.hasTabBar ? styles.hasTabBar : null,

        props.centerChildren ? styles.centerChildren : null,
        props.verticallyCenterChildren ? styles.verticallyCenterChildren : null,
        props.horizontallyCenterChildren ? styles.horizontallyCenterChildren : null,

        props.style

      ]}
      activeOpacity={ 1 }
    />
  )

}

const styles = StyleSheet.create({

  flex : { flex : 1 },

  hasHeader : { paddingTop : HEADER_HEIGHT },
  hasTabBar : { paddingBottom : TAB_BAR_HEIGHT },

  centerChildren : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  verticallyCenterChildren : {
    justifyContent : 'center'
  },
  horizontallyCenterChildren : {
    alignItems : 'center'
  }

})

export default View
