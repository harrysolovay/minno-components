import React, { Component } from 'react'
import { Tabs } from 'navigation'

@inject('viewStore')
@observer
class Navigator extends Component {

  render() {
    return (
      <View style={{ flex : 1 }}>
        <Tabs />
      </View>
    )
  }

}

export default Navigator
