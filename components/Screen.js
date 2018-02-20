import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { HEADER_HEIGHT, TAB_BAR_HEIGHT, FOOTER_HEIGHT } from 'constants'

class Screen extends Component {

  styles = [
    { flex : 1 },
    this.props.hasHeader ? { paddingTop : HEADER_HEIGHT } : null,
    this.props.hasTabBar ? { paddingBottom : TAB_BAR_HEIGHT } : null,
    this.props.hasBothBars ? { paddingBottom : FOOTER_HEIGHT } : null,
    this.props.style
  ]

  render() {
    return (
      <View
        style={ this.styles }
        { ...this.props }
      />
    )
  }

}

export default Screen
