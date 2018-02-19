import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView as NativeScrollView } from 'react-native'
import { HEADER_HEIGHT, TAB_BAR_HEIGHT, FOOTER_HEIGHT } from 'constants'

class ScrollView extends Component {
  render() {
    return (
      <NativeScrollView
        contentContainerStyle={[
          this.props.hasHeader ? styles.hasHeader : null,
          this.props.hasTabBar ? styles.hasTabBar : null,
          this.props.hasBothBars ? styles.hasBothBars : null,
          this.props.style
        ]}
        { ...this.props }
        showsVerticalScrollIndicator={ false }
      />
    )
  }
}

const styles = StyleSheet.create({
  hasHeader : {
    paddingTop : HEADER_HEIGHT
  },
  hasTabBar : {
    paddingBottom : TAB_BAR_HEIGHT
  },
  hasBothBars : {
    paddingBottom : FOOTER_HEIGHT
  }
})

export default ScrollView
