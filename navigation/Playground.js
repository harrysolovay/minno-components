import React, { Component } from 'react'
import { Screen, Header, ActionSheetTrigger, View, Graphic } from 'components'

class Playground extends Component {

  render() {
    return (
      <Screen hasHeader>
        <Header
          left='back'
          center='PLAY'
          right={ <ActionSheetTrigger options={[ { title : 'title', subtitle : 'subtitle' } ]} /> }
        />
        <View style={{ borderWidth : 1, width : 50, alignItems : 'center' }}>
          <Graphic
            name='showActions'
          />
        </View>
      </Screen>
    )
  }

}

export default Playground
