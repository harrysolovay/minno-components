import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Animated, Keyboard, StyleSheet } from 'react-native'
import { Posts, Capture, Account } from 'screens'
import { View, Header, Graphic } from 'components'
import { HEADER_HEIGHT, TAB_BAR_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT, NOTCH_HEIGHT} from 'constants'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view'

@inject('statusBarStore') @observer
class TabView extends Component {

  state = {
    index: 0,
    routes: [
      { key : '0', icon : 'posts' },
      { key : '1', icon : 'capture' },
      { key : '2', icon : 'account' }
    ],
  };

  _handleIndexChange = index => {
    this.setState({ index })
  };

  _renderScene = SceneMap({
    '0' : Posts,
    '1' : Capture,
    '2' : Account
  });

  _renderFooter = (props) => (
    <View
      style={ styles.footer }
    >
      <TabBar
        { ...props }
        useNativeDriver
        style={ styles.tabBar }
        renderIndicator={ () => null }
        renderLabel={ () => null }
        renderIcon={ this._renderIcon }
        tabStyle={{ flex : 1 }}
        pressOpacity={ 1 }
      />
    </View>
  )

  _renderIcon = ({ route, focused }) => (
    <Graphic
      icon={ route.icon }
      size={ 30 }
      color={ focused ? '#5990dc' : '#000' }
      style={ styles.tabIcon }
    />
  )

  render() {
    return (
      <View flexOne>
        <Header
          center='search'
        />
        <TabViewAnimated
          navigationState={ this.state }
          renderScene={ this._renderScene }
          renderFooter={ this._renderFooter }
          style={{ flex : 1 }}
          onIndexChange={ this._handleIndexChange }
          useNativeDriver
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  footer : {
    position : 'absolute',
    right : 0,
    bottom : 0,
    left : 0,
    paddingBottom : NOTCH_HEIGHT,
    borderTopWidth : 1,
    borderColor : '#ddd'
  },
  tabBar : {
    height : 50,
    backgroundColor : '#fff'
  },
  tabIcon : {
    marginTop : 1.5
  }
})

export default TabView
