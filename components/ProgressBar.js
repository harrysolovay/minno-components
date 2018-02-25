import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'components'

class Stage extends Component {

  state = { width : 0 }

  render() {
    return (
      <View
        onLayout={ e => this.setState({ width : e.nativeEvent.layout.width }) }
        style={ styles.stage }
      >
        <View
          style={ styles.background }
        />
        <View
          style={[ styles.progress, { width : this.state.width * this.props.progress } ]}
        />
      </View>
    )
  }

}

class ProgressBar extends Component {

  render() {
    return (
      <View
        style={ styles.stages }
      >
        {
          [1, 1, .3].map((progress, i) => {
            return (
              <Stage
                progress={ progress }
                key={ i }
              />
            )
          })
        }
      </View>
    )
  }

}

const styles = StyleSheet.create({
  stages : {
    flexDirection : 'row',
    marginRight : 12.5,
    marginLeft : 12.5
  },
  stage : {
    flex : 1,
    height : 5,
    backgroundColor : '#000',
    borderRadius : 2.5,
    marginRight : 2.5,
    marginLeft : 2.5
  },
  background : {
    flex : 1,
    height : 5,
    borderRadius : 2.5
  },
  progress : {
    position : 'absolute',
    top : 0,
    left : 0,
    height : 5,
    backgroundColor : '#5990dc',
    borderRadius : 2.5
  }
})

export default ProgressBar
