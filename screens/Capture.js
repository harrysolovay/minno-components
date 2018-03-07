import React, { Component } from 'react'
import { View, Capture as CaptureComponent } from 'components'

class Capture extends Component {

  render() {
    return (
      <View screen hasTabBar>
        <CaptureComponent />
      </View>
    )
  }

}

export default Capture
