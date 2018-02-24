import React, { Component } from 'react'
import { Animated, StyleSheet, Keyboard } from 'react-native'
import { Posts, Capture, Account } from 'screens'
import { View, Header, Composer, Graphic } from 'components'
import { HEADER_HEIGHT, TAB_BAR_HEIGHT, SCREEN_WIDTH, NOTCH_HEIGHT} from 'constants'
import Carousel, { Pagination } from 'react-native-snap-carousel'


class Tabs extends Component {

  state = {
    activeTab : this.props.initialTab || 0,
    scrollX : new Animated.Value(this.props.initialTab || 0),
    composerHeight : 51
  }

  render() {

    let headerTranslation = this.state.scrollX.interpolate({
      inputRange : [ 0, SCREEN_WIDTH, SCREEN_WIDTH * 2 ],
      outputRange : [ 0, -HEADER_HEIGHT, 0 ]
    })

    let composerTranslation = this.state.scrollX.interpolate({
      inputRange : [ 0, SCREEN_WIDTH, SCREEN_WIDTH * 2 ],
      outputRange : [ 0, this.state.composerHeight, this.state.composerHeight ]
    })

    return (
      <View style={{ flex : 1 }}>

        <Header
          center='search'
          style={{ transform : [{ translateY : headerTranslation }] }}
        />

        <Carousel
          ref={ ref => this.carouselRef = ref }
          data={[
            <Posts composerHeight={ this.state.composerHeight } />,
            <Capture />,
            <Account />
          ]}
          renderItem={ ({ item, i }) => item }
          firstItem={ this.props.initialTab || 0 }
          onScroll={ this._onScroll }
          onSnapToItem={ this._onSnapToItem }
          sliderWidth={ SCREEN_WIDTH }
          itemWidth={ SCREEN_WIDTH }
          slideStyle={{ width : SCREEN_WIDTH }}
          inactiveSlideOpacity={ 1 }
          inactiveSlideScale={ 1 }
        />

        <Composer
          style={{ transform : [{ translateY : composerTranslation }] }}
          onSizeChange={ this._onComposerInputResize }
        />

        <View
          style={ styles.tabBar }
        >
          <Pagination
            containerStyle={ styles.tabsContainer }
            renderDots={ activeIndex => (
              [ 'posts', 'capture', 'account' ].map((iconName, i) => (
                <View
                  key={ i }
                  style={ styles.tab }
                >
                  <Graphic
                    icon={ iconName }
                    size={ 30 }
                    color={ i === activeIndex ? '#5990dc' : '#000' }
                    style={ styles.tabIcon }
                  />
                </View>
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

  _onSnapToItem = (i) => {
    this.setState({ activeTab : i })
    if(i !== 0)
      Keyboard.dismiss()
  }

  _onComposerInputResize = (e) => {
    this.setState({ composerHeight : e.nativeEvent.contentSize.height + 26.5 })
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
  tabsContainer : {
    flexDirection : 'row',
    height : 50,
    paddingTop : 0,
    paddingBottom : 0
  },
  tab : {
    flex : 1,
    alignItems : 'center'
  },
  tabIcon : {
    marginTop : 1.5
  }
})

export default Tabs
