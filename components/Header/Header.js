import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, Touchable } from 'components'
import { HEADER_HEIGHT } from 'constants'
import { Ionicons } from '@expo/vector-icons'
import SearchIconImage from 'assets/images/search.png'

const BackButton = (props) => (
  <Touchable
    { ...props }
  >
    <Ionicons
      name='ios-arrow-round-back'
      size={ 40 }
      color='#000'
    />
  </Touchable>
)

const SearchIcon = () => (
  <Image
    style={ styles.searchIcon }
    source={ SearchIconImage }
  />
)

const SearchButton = (props) => (
  <Touchable
    { ...props }
  >
    <SearchIcon />
  </Touchable>
)

const Header = (props) => (
  <View style={[ styles.container, props.style ]}>
    <Touchable
      style={ styles.bar }
      onPress={ props.onPress }
    >
      <View
        style={[ styles.barItem, styles.left ]}
      >
        {
          props.left === 'back'
            ? <BackButton />
            : props.left
        }
      </View>
      <View
        style={[ styles.barItem, styles.center ]}
      >
        {
          typeof props.center === 'string'
            ? props.center === 'search'
              ? <SearchIcon />
              : <Text header>{ props.center }</Text>
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
  searchIcon : {
    width : 20,
    height : 20
  },
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

export { BackButton, SearchIcon, SearchButton }
export default Header
