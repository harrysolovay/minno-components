import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HeadingGroup } from 'components'

const Groups = (props) => (
  ( props.precedent || props.groups )
    ? <View style={[ styles.view, props.style ]}>
        {
          props.precedent &&
            <HeadingGroup
              style={ styles.precedent }
              { ...props.precedent }
            />
        }
        {
          props.groups.map((group, i) => (
            <HeadingGroup
              style={ styles.group }
              { ...group }
              key={ i }
            />
          ))
        }
      </View>
    : null
)

const styles = StyleSheet.create({
  view : {
    flexDirection : 'row'
  },
  precedent : {
    paddingRight : 14,
    borderRightWidth : 1,
    marginRight : 14
  },
  group : {
    marginRight : 14
  }
})

export default Groups
