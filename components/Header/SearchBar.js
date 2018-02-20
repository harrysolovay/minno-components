import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View, TextInput, Text } from 'components'

class SearchBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[ styles.bar, { position : 'absolute', right : 0, bottom : 0, left : 0 } ]}>
        <View
          style={[ { justifyContent : 'center' }, styles.left ]}
        >
          <SearchIcon />
        </View>
        <View style={{ flex : 1 }}>
          <TextInput
            placeholder='search'
          />
        </View>
        <View
          style={[ { justifyContent : 'center' }, styles.right ]}
        >
          <Text style={{ marginTop : 6.5 }}>cancel</Text>
        </View>
      </View>
    )
  }

}
