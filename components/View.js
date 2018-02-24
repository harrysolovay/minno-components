import React from 'react'
import { View as ReactNativeView, StyleSheet} from 'react-native'
import { SCREEN_WIDTH, SCREEN_HEIGHT, HEADER_HEIGHT, TAB_BAR_HEIGHT, FOOTER_HEIGHT } from 'constants'

const View = (props) => {

  const styles = [
    props.screen ? { width : SCREEN_WIDTH, height : SCREEN_HEIGHT } : null,
    props.hasHeader ? { paddingTop : HEADER_HEIGHT } : null,
    props.hasTabBar ? { paddingBottom : TAB_BAR_HEIGHT } : null,
    props.center ? { alignItems : 'center', justifyContent : 'center' } : null,
    props.style
  ]

  return (
    <ReactNativeView
      { ...props }
      style={ styles }
    />
  )

}

export default View
