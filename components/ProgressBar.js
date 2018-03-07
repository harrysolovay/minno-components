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

  state = { stagesProgress : this._setStagesProgress(this.props) }

  render() {
    return (
      <View
        style={ styles.stages }
      >
        {
          this.state.stagesProgress.map((progress, i) => {
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

  componentWillReceiveProps(props) {
    this.setState({ stagesProgress : this._setStagesProgress(props) })
  }

  _setStagesProgress(props) {

    if(props.progress < 0)
      props.progress = 0

    let currentStageProgress = props.progress % 1,
        stagesCompleted = Math.floor(props.progress),
        stagesIncompleted = Math.floor(props.stages - props.progress)

    let stagesProgress = []

    if(props.progress >= 0) {
      for(let i = 0; i < stagesCompleted; i++ ) {
        stagesProgress.push(1)
      }
    }

    if(currentStageProgress !== 0)
      stagesProgress.push(currentStageProgress)

    for(let i = 0; i < stagesIncompleted; i++) {
      stagesProgress.push(0)
    }

    return stagesProgress
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
    borderRadius : 2.5,
    marginRight : 2.5,
    marginLeft : 2.5
  },
  background : {
    flex : 1,
    height : 5,
    borderRadius : 2.5,
    backgroundColor : 'rgba(74, 144, 226, .25)',
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
