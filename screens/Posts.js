import React, { Component } from 'react'
import { View, Post, FlatList, Heading, ActionSheetTrigger } from 'components'
import { SCREEN_WIDTH, SCREEN_HEIGHT, HEADER_HEIGHT, TAB_BAR_HEIGHT } from 'constants'
import { posts } from 'API'

const STORY_HEIGHT = SCREEN_HEIGHT - HEADER_HEIGHT - TAB_BAR_HEIGHT

class Posts extends Component {

  render() {
    return (
      <View screen hasHeader
        style={{ paddingBottom : TAB_BAR_HEIGHT + this.props.composerHeight }}
      >
        <FlatList
          showsVerticalScrollIndicator={ false }
          data={ posts }
          renderItem={ ({ item, i }) => <Post { ...item } /> }
          keyExtractor={ (item, index) => index }
        />
      </View>
    )
  }

}

export default Posts
