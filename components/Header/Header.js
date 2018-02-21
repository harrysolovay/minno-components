import React, { Component } from 'react'
import { Animated, View, StyleSheet } from 'react-native'
import { Text, Touchable, TextInput, Graphic } from 'components'
import { HEADER_HEIGHT } from 'constants'

class Header extends Component {
  render() {
    return (
      <Animated.View style={[ styles.container, this.props.style ]}>
        <Touchable
          style={ styles.bar }
          onPress={ this.props.onPress }
        >
          <View
            style={[ styles.barItem, styles.left ]}
          >
            {
              this.props.left === 'back'
                ? <Graphic name='back' onPress={ () => console.log('back button pressed') } />
                : this.props.left
            }
          </View>
          <View
            style={[ styles.barItem, styles.center ]}
          >
            {
              typeof this.props.center === 'string'
                ? this.props.center === 'search'
                  ? <Graphic name='search' onPress={ () => console.log('search button pressed') } />
                  : <Text header>{ this.props.center }</Text>
                : this.props.center
            }
          </View>
          <View
            style={[ styles.barItem, styles.right ]}
          >
            { this.props.right }
          </View>
        </Touchable>
      </Animated.View>
    )
  }
}

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
