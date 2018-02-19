import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Touchable } from 'components'
import { NOTCH_HEIGHT } from 'constants'
import { Ionicons } from '@expo/vector-icons'

class TabBar extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.tabs }>
          {
            [
              { name : 'ios-chatbubbles-outline', size : 30 },
              { name : 'ios-disc-outline', size : 30 },
              { name : 'ios-aperture-outline', size : 30 },
              { name : 'ios-contact-outline', size : 30 }
            ].map((tab, i) => {
              return (
                <Touchable
                  style={ styles.tab }
                  key={ i }
                  onPress={ () => this.props.goToPage(i) }
                >
                  <Ionicons
                    name={ tab.name }
                    size={ tab.size }
                    color={ this.props.activeTab === i ? '#4a90e2' : '#000' }
                  />
                </Touchable>
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
    zIndex : 4,
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
