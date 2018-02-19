import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, SearchIcon, TabBar, ActionSheet, ActionSheetTrigger } from 'components'
import { Direct, Posts, Capture, Account } from 'screens'
import { HEADER_HEIGHT } from 'constants'
import ScrollableTabView from 'react-native-scrollable-tab-view'

class Tabs extends Component {

  tabs = [ 'Direct', 'Posts', 'Capture', 'Account' ]

  constructor(props) {
    super(props)
    this.state = {
      activeTab : 1,
      headerOffset : 0,
    }
  }

  render() {
    return (
      <View style={{ flex : 1 }}>
        <View style={{ flex : 1 }}>
          <Header
            style={{ top : this.state.headerOffset }}
            left='back'
            center='search'
            right={ <ActionSheetTrigger /> }
          />
          <ScrollableTabView
            initialPage={ 1 }
            tabBarPosition={ 'bottom' }
            renderTabBar={ (props) => {
              this.goToPage = props.goToPage
              return <View pointerEvents='none' style={{ opacity : 0 }} />
            }}
            onScroll={ scrollX => this.setState({
              activeTab : Math.round(scrollX),
              headerOffset : this.getHeaderOffset(scrollX)
            }) }
          >
            <Direct />
            <Posts />
            <Capture />
            <Account />
          </ScrollableTabView>
          <TabBar
            activeTab={ this.state.activeTab }
            goToPage={ this.goToPage }
          />
        </View>
        <ActionSheet />
      </View>
    )
  }

  getHeaderOffset = (scrollX) => {
    if(scrollX > 1 && scrollX <= 2)
      return -(HEADER_HEIGHT - (HEADER_HEIGHT * (2 - scrollX)))
    if(scrollX > 2 && scrollX <= 3)
      return -(HEADER_HEIGHT - (HEADER_HEIGHT * (scrollX - 2)))
    return 0
  }

  getCompositionBarOffset = (scrollX) => {

  }

}

export default Tabs
