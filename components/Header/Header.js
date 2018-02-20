import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Touchable, TextInput, Graphic } from 'components'
import { HEADER_HEIGHT } from 'constants'

const Header = (props) => (
  <View style={[ styles.container, { transform : [{ translateY : props.offset }] } ]}>
    <Touchable
      style={ styles.bar }
      onPress={ props.onPress }
    >
      <View
        style={[ styles.barItem, styles.left ]}
      >
        {
          props.left === 'back'
            ? <Graphic name='back' onPress={ () => console.log('back button pressed') } />
            : props.left
        }
      </View>
      <View
        style={[ styles.barItem, styles.center ]}
      >
        {
          typeof props.center === 'string'
            ? props.center === 'search'
              ? <Graphic name='search' onPress={ () => console.log('search button pressed') } />
              : <Text header>{ this.props.center }</Text>
            : props.center
        }
      </View>
      <View
        style={[ styles.barItem, styles.right ]}
      >
        { props.right }
      </View>
    </Touchable>
  </View>
)


const styles = StyleSheet.create({
  container : {
    position : 'absolute',
    top : 0,
    right : 0,
    left : 0,
    zIndex : 2,
    height : HEADER_HEIGHT,
    backgroundColor : '#fff',
    borderBottomWidth : 1,
    borderColor : '#ddd',
    flexDirection : 'column',
    justifyContent : 'flex-end'
  },
  bar : {
    height : 50,
    flexDirection : 'row'
  },
  barItem : {
    flex : 1,
    justifyContent : 'center'
  },
  left : {
    alignItems : 'flex-start',
    marginLeft : 14
  },
  center : {
    alignItems : 'center'
  },
  right : {
    alignItems : 'flex-end',
    marginRight : 14
  }
})

export default Header
