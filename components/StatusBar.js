import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { View } from 'components'
import { StatusBar as ReactNativeStatusBar, StyleSheet } from 'react-native'

@inject('statusBarStore') @observer
class StatusBar extends Component {

  render() {
    return (
      <View>
      <ReactNativeStatusBar
        hidden={ this.props.statusBarStore.hidden }
        barStyle={ this.props.statusBarStore.style }
        animated={ true }
        translucent={ false }
        showHideTransition='slide'
      />
      </View>
    )
  }



}

export default StatusBar
