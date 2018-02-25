import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View, HeadingGroups, HeadingGroup, Text, FlatList } from 'components'
import { LinearGradient } from 'expo'

class Heading extends Component {

  state = {
    paddingRight : 14
  }

  render() {
    return (
      <View style={[ styles.container, this.props.style ]}>

        {
          this.props.left &&
            <View style={ styles.left }>
              { this.props.left }
            </View>
        }

        {
          this.props.groups
            ? <FlatList
                contentContainerStyle={[ styles.scrollView, { paddingRight : this.state.paddingRight } ]}
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                showsVerticalScrollIndicator={ false }
                data={ this.props.groups }
                renderItem={ ({ item }) => {
                  return (
                    <HeadingGroup
                      { ...item }
                      style={{ marginRight : 14 }}
                    />
                  )
                }}
                keyExtractor={ (item, index) => index }
              />
            : <HeadingGroup
                title={ this.props.title }
                subtitle={ this.props.subtitle }
                style={{ paddingLeft : 14 }}
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
      this.setState({ paddingRight : width })
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
  container : {
    flexDirection : 'row',
    alignSelf : 'stretch'
  },
  scrollView : {
    flexDirection : 'row',
    justifyContent : 'flex-start',
    paddingLeft : 14
  },
  left : {
    flexDirection : 'column',
    justifyContent : 'center',
    paddingLeft : 15
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
