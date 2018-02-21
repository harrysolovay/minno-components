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

          {
            this.props.left &&
              <View
                style={[ styles.barItem, styles.barSideItem, styles.left ]}
              >
                {
                  this.props.left === 'back'
                    ? <Graphic name='back' onPress={ () => console.log('back button pressed') } />
                    : this.props.left
                }
              </View>
          }

          {
            this.props.center &&
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
          }

          {
            this.props.right &&
              <View
                style={[ styles.barItem, styles.barSideItem, styles.right ]}
              >
                { this.props.right }
              </View>
          }

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
    justifyContent : 'center',
  },

  barSideItem : {
    width : 50
  },

  left : {
    alignItems : 'flex-start',
    paddingLeft : 15
  },

  center : {
    flexGrow : 1,
    alignItems : 'center'
  },

  right : {
    alignItems : 'flex-end',
    paddingRight : 15
  }

})

export default Header
