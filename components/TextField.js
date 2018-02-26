import React from 'react'
import { View, TextInput, Text } from 'components'
import { StyleSheet } from 'react-native'

const TextField = (props) => (
  <View style={ styles.view }>
    <View
      style={ styles.textInputWrapper }
    >
      <TextInput
        { ...props }
      />
    </View>
    <View style={ styles.right }
      onPress={ () => { console.log('sent or submitted') } }
    >
      {
        props.right &&
          props.right
      }
      {
        props.rightText &&
          <Text action
            style={ styles.rightText }
          >
            { props.rightText }
          </Text>
      }
    </View>
  </View>
)

const styles = StyleSheet.create({
  view : {
    flex : 1,
    flexDirection : 'row'
  },
  textInputWrapper : {
    flexGrow : 1,
    alignItems : 'flex-start'
  },
  right : {
    height : 50,
    justifyContent : 'center',
    alignSelf : 'flex-end'
  },
  rightText : {
    marginTop : 7,
    marginRight : 15
  }
})

export default TextField
