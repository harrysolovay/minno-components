import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { HeadingGroups, HeadingGroup, Text } from 'components'
import { LinearGradient } from 'expo'

class Heading extends Component {

  constructor(props) {
    super(props)
    this.state = {
      paddingRight : 12
    }
  }

  render() {
    return (
      <View style={[ styles.view, this.props.style ]}>
        {
          this.props.groups
            ? <ScrollView
                contentContainerStyle={ styles.scrollView }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                showsVerticalScrollIndicator={ false }
              >
                <HeadingGroups
                  style={{ paddingRight : this.state.paddingRight }}
                  precedent={ this.props.precedent }
                  groups={ this.props.groups }
                />
              </ScrollView>
            : <HeadingGroup
                title={ this.props.title }
                subtitle={ this.props.subtitle }
              />
        }
        {
          this.props.right &&
            <Right
              groups={ this.props.groups }
              onWidth={ this.setPaddingRight }
            >
              { this.props.right }
            </Right>
        }
      </View>
    )
  }

  setPaddingRight = (width) => {
    if(this.props.groups) {
      const PADDING_RIGHT = width + 12
      this.setState({ paddingRight : PADDING_RIGHT })
    }
    return false
  }

}

class Right extends Component {
  render() {
    return (
      <View
        style={ styles.right }
        onLayout={ e => this.props.onWidth(e.nativeEvent.layout.width) }
      >
        {
          this.props.groups &&
            <LinearGradient
              style={ styles.fadeLeft }
              start={[ 0, 1 ]}
              colors={[ 'rgba(255, 255, 255, 0)', '#fff' ]}
            />
        }
        <View style={[ styles.rightInner, this.props.groups ? { backgroundColor : '#fff' } : null ]}>
          { this.props.children }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view : {
    flexDirection : 'row',
    alignSelf : 'stretch'
  },
  scrollView : {
    flexDirection : 'row',
    justifyContent : 'flex-start'
  },
  right : {
    position : 'absolute',
    top : 0,
    right : 0,
    bottom : 0,
    flexDirection : 'row'
  },
  fadeLeft : {
    width : 30,
  },
  rightInner : {
    paddingRight : 15,
    justifyContent : 'center'
  }
})

export default Heading
