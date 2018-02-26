import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View, Cell, HeadingGroups, HeadingGroup } from 'components'

const Heading = (props) => (
  <Cell leftHeavy
    onPress={ props.onPress }
    style={ props.style }
    left={
      props.groups
        ? <HeadingGroups
            groups={ props.groups }
          />
        : props.title
          ? <HeadingGroup
              title={ props.title }
              subtitle={ props.subtitle }
              style={{ marginLeft : 14 }}
            />
          : null
    }
    right={ props.right }
  />
)


export default Heading
