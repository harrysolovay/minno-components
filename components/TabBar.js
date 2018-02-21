import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Touchable } from 'components'
import { NOTCH_HEIGHT } from 'constants'
import { Graphic } from 'components'

class TabBar extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.tabs }>
          {
            [ 'posts', 'capture', 'account' ].map((name, i) => {
              return (
                <Graphic
                  touchableStyle={ styles.tab }
                  name={ name }
                  color={ this.props.activeTab === i ? '#4a90e2' : '#000' }
                  onPress={ () => this.props.goTo(i) }
                  key={ i }
                />
              )
            })
          }
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container : {
    position : 'absolute',
    right : 0,
    bottom : 0,
    left : 0,
    backgroundColor : '#fff',
    borderTopWidth : 1,
    borderColor : '#ddd',
    paddingBottom : NOTCH_HEIGHT,
  },
  tabs : {
    height : 50,
    flexDirection : 'row'
  },
  tab : {
    paddingTop : 8,
    paddingBottom : 4,
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})

export default TabBar
