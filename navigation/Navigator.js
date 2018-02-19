import React, { Component } from 'react'
import { View } from 'react-native'
import { Screen, KeyboardAvoidingView, TextInput, Header, Center, Button } from 'components'

class Navigator extends Component {

  render() {
    return (
      <View style={{ flex : 1 }}>
        <Header
          center='LOG IN'
        />
        <Screen hasHeader>
          <KeyboardAvoidingView>
            <View style={{ alignSelf : 'stretch', borderWidth : 1, borderColor : '#000', marginRight : 15, marginLeft : 15 }}>
              <TextInput
                autoFocus
                placeholder='what is up L'
                returnKeyType='next'
              />
            </View>
            <View style={{ alignSelf : 'stretch', borderWidth : 1, borderColor : '#000', marginTop : 15, marginRight : 15, marginLeft : 15 }}>
              <Button
                text='button'
              />
            </View>
          </KeyboardAvoidingView>
        </Screen>
      </View>
    )
  }

}

export default Navigator
