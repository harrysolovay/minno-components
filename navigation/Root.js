import React, { Component } from 'react'
import { View, ActionSheet } from 'components'
import { Tabs } from 'navigation'



class Root extends Component {

  render() {
    return (
      <View style={{ flex : 1 }}>
        <Tabs initialTab={ 0 } />
        <ActionSheet />
      </View>
    )
  }

}



export default Root
