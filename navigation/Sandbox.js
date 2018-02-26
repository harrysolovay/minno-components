import React, { Component } from 'react'
import { View, Header, Heading, Cell } from 'components'

class Sandbox extends Component {

  render() {
    return (
      <View flex>
        <Header
          center='SANDBOX'
        />
        <View screen hasHeader>
          <Heading
            title='Ltitle'
            subtitle='Lsubtitle'
            right='rightArrow'
            style={{
              borderBottomWidth : 1,
              borderColor : '#ddd'
            }}
          />
        </View>
      </View>
    )
  }

}

export default Sandbox
