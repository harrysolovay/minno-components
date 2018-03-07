import React, { Component } from 'react'
import { View, Header, Story, Heading, Bar, Text, ActionSheetTrigger } from 'components'

class Sandbox extends Component {

  render() {

    return (
      <View hasHeader>

        <Header
          left='back'
          center={
            <Text header
              text='SANDBOX'
            />
          }
          right={
            <ActionSheetTrigger
              options={[
                { title : 'title', subtitle : 'subtitle', onPress : () => console.log('pressed option') },
                { title : 'title', subtitle : 'subtitle', onPress : () => console.log('pressed option') }
              ]}
            />
          }
        />

      </View>
    )
  }

}

export default Sandbox
