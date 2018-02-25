import React from 'react'
import { View as ReactNativeView } from 'react-native'
import {
  HEADER_HEIGHT,
  TAB_BAR_HEIGHT
} from 'constants'

const View = (props) => {

  const styles = [

    props.screen ? { flex : 1 } : null,
    props.hasHeader ? { paddingTop : HEADER_HEIGHT } : null,
    props.hasTabBar ? { paddingBottom : TAB_BAR_HEIGHT } : null,

    props.centerChildren ? { flex : 1, alignItems : 'center', justifyContent : 'center' } : null,
    props.verticallyCenterChildren ? { flex : 1, justifyContent : 'center' } : null,
    props.horizontallyCenterChildren ? { flex : 1, alignItems : 'center' } : null,

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
