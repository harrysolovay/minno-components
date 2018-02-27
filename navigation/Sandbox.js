import React, { Component } from 'react'
import { View, Header, Heading, Bar, Text, ActionSheetTrigger } from 'components'

class Sandbox extends Component {

  render() {
    return (
      <View flex>
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
                { title : 'title', subtitle : 'subtitle', onPress : () => console.log('pressed option') },
                { title : 'title', subtitle : 'subtitle', onPress : () => console.log('pressed option') },
                { title : 'title', subtitle : 'subtitle', onPress : () => console.log('pressed option') },
                { title : 'title', subtitle : 'subtitle', onPress : () => console.log('pressed option') }
              ]}
            />
          }
        />
        <View screen hasHeader>
          <View style={{ marginTop : 15, marginRight : 15, marginLeft : 15 }} >
          <Heading
            groups={[
              { title : 'title', subtitle : 'subtitle' },
              { title : 'title', subtitle : 'subtitle' },
              { title : 'title', subtitle : 'subtitle' },
              { title : 'title', subtitle : 'subtitle' },
              { title : 'title', subtitle : 'subtitle' },
              { title : 'title', subtitle : 'subtitle' },
              { title : 'title', subtitle : 'subtitle' },
              { title : 'title', subtitle : 'subtitle' },
              { title : 'title', subtitle : 'subtitle' },
              { title : 'title', subtitle : 'subtitle' }
            ]}
            right='rightArrow'
            onPress={ () => console.log('pressed') }
            style={{
              borderWidth : 1,
              borderColor : '#ddd'
            }}
          />
        </View>
        <View style={{ marginTop : 15, marginRight : 15, marginLeft : 15 }} >
          <Heading
            title='The Title'
            subtitle='the subtitle'
            right='rightArrow'
            onPress={ () => console.log('pressed') }
            style={{
              borderWidth : 1,
              borderColor : '#ddd'
            }}
          />
          </View>
        </View>
      </View>
    )
  }

}

export default Sandbox
