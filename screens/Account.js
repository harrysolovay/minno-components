import React, { Component } from 'react'
import { Text } from 'react-native'
import { Screen } from 'components'

class Account extends Component {

  render() {
    return (
      <Screen hasHeader hasTabBar>
        <Text>Account</Text>
      </Screen>
    )
  }

}

export default Account
