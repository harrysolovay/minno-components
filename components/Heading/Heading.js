import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Bar, HeadingGroups, HeadingGroup } from 'components'

const Heading = (props) => (
  <Bar leftHeavy
    onPress={ props.groups ? null : props.onPress }
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
