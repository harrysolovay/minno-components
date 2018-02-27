import React, { Component } from 'react'
import { Animated, Easing, StyleSheet } from 'react-native'
import { View, Graphic, HeadingGroup } from 'components'

class Loading extends Component {

  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(180)
  }

  render() {

    let spin = this.spinValue.interpolate({
      inputRange : [0, 1],
      outputRange : ['0deg', '360deg']
    })

    return (
      <View flexOne centerChildren>
        {
          this.props.image &&
            <Graphic
              style={ styles.image }
              image={ this.props.image }
            />
        }
        <Graphic animated
          icon='spinner'
          size={ 40 }
          color='#5990dc'
          style={[ styles.spinner, { transform : [{ rotate : spin }] } ]}
        />
        {
          this.props.title &&
            <HeadingGroup
              center
              title={ this.props.title }
              subtitle={ this.props.subtitle }
            />
        }
      </View>
    )

  }

  loopRotationAnimation = () => {
    this.spinValue.setValue(0)
    Animated.timing(this.spinValue, {
      toValue : 1,
      duration : 2000,
      easing : Easing.linear
    }).start(this.loopRotationAnimation)
  }

  componentDidMount() {
    this.loopRotationAnimation()
  }

}

const styles = StyleSheet.create({
  image : {
    width : 120,
    height : 120
  },
  spinner : {
    marginTop : 11,
    paddingTop : 2
  }
})

export default Loading
