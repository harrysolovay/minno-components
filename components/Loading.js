import React, { Component } from 'react'
import { Image, Animated, Easing, StyleSheet } from 'react-native'
import { Center, HeadingText, HeadingTitle, HeadingSubtitle, HeadingGroup } from 'components'
import { EvilIcons } from '@expo/vector-icons'
import { blue } from 'constants/colors'

const AnimatedIcon = Animated.createAnimatedComponent(EvilIcons)

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
      <Center>
        {
          this.props.image &&
            <Image
              style={ styles.image }
              source={ this.props.image }
              resizeMode='contain'
            />
        }
        <AnimatedIcon
          style={[ styles.spinner, { transform : [{ rotate : spin }] } ]}
          name='spinner-3'
          size={ 40 }
          color={ blue }
        />
        {
          ( this.props.title || this.props.subtitle ) &&
            <HeadingGroup
              style={ styles.headingGroup }
              title={ this.props.title }
              subtitle={ this.props.subtitle }
            />
        }
      </Center>
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
  },
  headingGroup : {
    alignItems : 'center'
  }
})

export default Loading
