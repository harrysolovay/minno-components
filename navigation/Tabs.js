import React, { Component } from 'react'
import { Header, TabBar, View, Composer, ActionSheet } from 'components'
import { Posts, Capture, Account } from 'screens'
import { HEADER_HEIGHT, TAB_BAR_HEIGHT } from 'constants'
import ScrollableTabView from 'react-native-scrollable-tab-view'



class GhostTabBar extends Component {

  render() {
    return <View pointerEvents='none' style={{ opacity : 0 }} />
  }

  getActiveTab = () => {
    return this.props.activeTab
  }

  goToPage = (i) => {
    this.props.goToPage(i)
  }

}



class Tabs extends Component {

  tabs = [ 'Posts', 'Capture', 'Account' ]

  constructor(props) {
    super(props)
    this.state = {
      initialized : false,
      activeTab : 0,
      headerOffset : 0,
      composerOffset : 0
    }
  }

  render() {
    return (
      <View style={{ flex : 1 }}>

        <Header
          offset={ this.state.headerOffset }
          center='search'
          onPress={ () => console.log('header pressed') }
        />

        <ScrollableTabView
          initialPage={ 0 }
          tabBarPosition={ 'bottom' }
          renderTabBar={ () => (
            <GhostTabBar
              ref={ ref => this.ghostTabBar = ref }
            />
          )}
          onScroll={ scrollX => {
            this.setState({
              activeTab : Math.round(scrollX),
              headerOffset : this.getHeaderOffset(scrollX),
              composerOffset : this.getComposerOffset(scrollX)
            })
          } }
        >
          <Posts />
          <Capture />
          <Account />
        </ScrollableTabView>

        <Composer
          offset={ this.state.composerOffset }
        />

        <TabBar
          activeTab={ this.state.activeTab }
          goToPage={ this.goToPage }
        />

      </View>
    )
  }

  goToPage = () => {
    return false
  }

  componentDidMount() {
    this.goToPage = this.ghostTabBar.goToPage
    this.setState({
      activeTab : this.ghostTabBar.activeTab,
      headerOffset : this.getHeaderOffset(this.ghostTabBar.activeTab),
      composerOffset : this.getComposerOffset(this.ghostTabBar.activeTab)
    })
  }

  getHeaderOffset = (scrollX) => {
    if(scrollX > 0 && scrollX <= 1)
      return -(HEADER_HEIGHT - (HEADER_HEIGHT * (1 - scrollX)))
    if(scrollX > 1 && scrollX <= 2)
      return -(HEADER_HEIGHT - (HEADER_HEIGHT * (scrollX - 1)))
    return 0
  }

  getComposerOffset = (scrollX) => {
    if(scrollX > 0 && scrollX <= 1)
      return 51 - (51 * (1 - scrollX))
    if(scrollX > 1)
      return 51
    return 0
  }

}



export default Tabs
