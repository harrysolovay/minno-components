import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'

const Heading = (props) => {
  return props.scrollable
    ? (
        <View style={ styles.view }>
          <ScrollView
            { ...props }
            contentContainerStyle={ styles.scrollView }
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
            showsVerticalScrollIndicator={ false }
          />
          <View style={ styles.vanishContainer }>
            <LinearGradient
              style={ styles.vanishLeft }
              start={[ 0, 1 ]}
              colors={[ 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)' ]}
            />
            <View style={ styles.vanishRight }>
              
            </View>
          </View>
        </View>
      )
    : <View { ...props } style={ styles.view } />
}

const styles = StyleSheet.create({
  view : {
    flexDirection : 'row',
    alignSelf : 'stretch'
  },
  scrollView : {
    flexDirection : 'row',
    justifyContent : 'flex-start',
    paddingRight : 60
  },
  vanishContainer : {
    position : 'absolute',
    top : 0,
    right : 0,
    bottom : 0,
    flexDirection : 'row'
  },
  vanishRight : {
    width : 60,
    height : 60,
    backgroundColor : '#fff'
  },
  vanishLeft : {
    width : 60,
    height : 60
  }
})

export default Heading
