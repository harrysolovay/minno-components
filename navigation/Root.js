import React, { Component } from 'react'
import { View, ActionSheet } from 'components'
import { Sandbox } from 'navigation'



class Root extends Component {

  render() {
    return (
      <View style={{ flex : 1 }}>
        <Sandbox />
        <ActionSheet />
      </View>
    )
  }

}



export default Root
