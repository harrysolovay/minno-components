import React, { Component } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { View, Text, TextInput, Graphic } from 'components'
import { HEADER_HEIGHT } from 'constants'

class Header extends Component {

  constructor(props) {
    super(props)

    this.left = props.left
      ? typeof props.left === 'string'
        ? <Graphic
            icon={ props.left }
            size={ 40 }
          />
        : props.left
      : null

  }

  render() {
    return (
      <Animated.View
        style={[ styles.container, this.props.style ]}
      >
        <View
          style={ styles.bar }
          onPress={ this.props.onPress }
        >

          <View
            style={[ styles.barItem, styles.barSideItem, styles.left ]}
          >
            { this.left }
          </View>

          {
            this.props.center &&
              <View
                style={[ styles.barItem, styles.center ]}
              >
                {
                  typeof this.props.center === 'string'
                    ? this.props.center === 'search'
                      ? <Graphic
                          image='search'
                          style={{
                            width : 20,
                            height : 20
                          }}
                        />
                      : <Text header>{ this.props.center }</Text>
                    : this.props.center
                }
              </View>
          }

          <View
            style={[ styles.barItem, styles.barSideItem, styles.right ]}
          >
            {
              this.props.right &&
                this.props.right
            }
          </View>

        </View>
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
