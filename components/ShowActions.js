import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

class ShowActions extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Ionicons
        name='ios-more-outline'
        size={ 30 }
        color='#000'
      />
    )

  }

}

const styles = StyleSheet.create({

})

export default ShowActions
