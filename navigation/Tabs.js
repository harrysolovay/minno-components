import React, { Component } from 'react'
import { Header, TabBar, View, Composer, ActionSheet } from 'components'
import { HEADER_HEIGHT, TAB_BAR_HEIGHT, SCREEN_WIDTH } from 'constants'
import { Posts, Capture, Account } from 'screens'
import Carousel from 'react-native-snap-carousel'
import { Animated } from 'react-native'

const AnimatedCarousel = Animated.createAnimatedComponent(Carousel)

const INITIAL_TAB = 0



class Tabs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      initialTab : INITIAL_TAB,
      activeTab : INITIAL_TAB,
      scrollX : new Animated.Value(INITIAL_TAB)
    }
  }

  render() {

    let headerTranslation = this.state.scrollX.interpolate({
      inputRange : [ 0, 375, 750 ],
      outputRange : [ 0, -HEADER_HEIGHT, 0 ]
    })

    let composerTranslation = this.state.scrollX.interpolate({
      inputRange : [ 0, 375, 750 ],
      outputRange : [ 0, 50, 50 ]
    })

    return (
      <View style={{ flex : 1 }}>

        <Header
          style={{ transform : [{ translateY : headerTranslation }] }}
          center='search'
          onPress={ () => console.log('header pressed') }
        />

        <AnimatedCarousel
          ref={ ref => this.carousel = ref }
          data={[ <Posts />, <Capture />, <Account /> ]}
          renderItem={ ({ item, i }) => item }
          firstItem={ this.props.initialTab }
          onScroll={ Animated.event([
            { nativeEvent : { contentOffset : { x : this.state.scrollX } } }
          ], { useNativeDriver : true }) }
          onSnapToItem={ i => this.setState({ activeTab : i }) }
          sliderWidth={ SCREEN_WIDTH }
          itemWidth={ SCREEN_WIDTH }
          slideStyle={{ width : SCREEN_WIDTH }}
          inactiveSlideOpacity={ 1 }
          inactiveSlideScale={ 1 }
        />

        <Composer
          style={{ transform : [{ translateY : composerTranslation }] }}
        />

        <TabBar
          activeTab={ this.state.activeTab }
          goTo={ () => console.log('happened') }
        />

      </View>
    )

  }

  componentDidMount() {
    console.log('happened')
    console.log(this.carousel.snapToItem)
  }

}



export default Tabs
