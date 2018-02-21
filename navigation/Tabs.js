import React, { Component } from 'react'
import { Header, TabBar, View, Composer, Graphic, Touchable } from 'components'
import { HEADER_HEIGHT, TAB_BAR_HEIGHT, SCREEN_WIDTH, NOTCH_HEIGHT} from 'constants'
import { Posts, Capture, Account } from 'screens'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Animated, StyleSheet } from 'react-native'

// const AnimatedCarousel = Animated.createAnimatedComponent(Carousel)

const INITIAL_TAB = 0
const SCREENS = [ 'posts', 'capture', 'account' ]


class Tabs extends Component {

  constructor(props) {
    super(props)
    this.state = {
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

        <Carousel
          ref={ ref => this.carouselRef = ref }
          data={[ <Posts />, <Capture />, <Account /> ]}
          renderItem={ ({ item, i }) => item }
          firstItem={ INITIAL_TAB }
          onScroll={ this._onScroll }
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

        <View
          style={ styles.tabBar }
        >
          <Pagination
            containerStyle={ styles.pagination }
            renderDots={ activeIndex => (
              SCREENS.map((screen, i) => (
                <Graphic
                  touchableStyle={{ flex : 1, alignItems : 'center' }}
                  name={ screen }
                  color={ i === activeIndex ? '#4a90e2' : '#000' }
                  onPress={ () => console.log('pressed') }
                  key={ i }
                />
              ))
            )}
            activeDotIndex={ this.state.activeTab }
            dotsLength={ 3 }
            tappableDots={ !!this.carouselRef }
            carouselRef={ this.carouselRef }
          />
        </View>

      </View>
    )

  }

  _onScroll = (e) => {
    this.state.scrollX.setValue(e.nativeEvent.contentOffset.x)
  }

}

const styles = StyleSheet.create({
  tabBar : {
    position : 'absolute',
    right : 0,
    bottom : 0,
    left : 0,
    borderTopWidth : 1,
    borderColor : '#ddd',
    backgroundColor : '#fff',
    paddingBottom : NOTCH_HEIGHT
  },
  pagination : {
    flexDirection : 'row',
    height : 50,
    paddingTop : 0,
    paddingBottom : 0
  }
})

export default Tabs
