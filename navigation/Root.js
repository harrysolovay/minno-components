import React, { Component } from 'react'
import { View, StatusBar, ActionSheet } from 'components'
import { Tabs, Sandbox } from 'navigation'



class Root extends Component {

  render() {
    return (
      <View flex>
        <StatusBar />
        <Tabs />
        <ActionSheet />
      </View>
    )
  }

}



export default Root
