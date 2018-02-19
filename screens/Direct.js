import React, { Component } from 'react'
import { Text } from 'react-native'
import { Screen } from 'components'

class Direct extends Component {

  render() {
    return (
      <Screen hasHeader hasBothBars>
        <Text>Direct</Text>
      </Screen>
    )
  }

}

export default Direct
