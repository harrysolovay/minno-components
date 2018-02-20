import React, { Component } from 'react'
import { Screen, Heading, ActionSheet, ActionSheetTrigger } from 'components'
import { FlatList } from 'react-native'

class Posts extends Component {

  render() {
    return (
      <Screen hasHeader hasBothBars>
        <FlatList
          data={[
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' },
            { title : 'Post Title', subtitle : 'Post Subtitle' }
          ]}
          renderItem={ ({ item }) => {
            return (
              <Heading
                title={ item.title }
                subtitle={ item.subtitle }
                key={ item.i }
              />
            )
          }}
          keyExtractor={ (item, index) => index }
        />
      </Screen>
    )
  }

}

export default Posts
