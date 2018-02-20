import React, { Component } from 'react'
import { Screen, View, Heading, ActionSheet, ActionSheetTrigger, FlatList } from 'components'

class Posts extends Component {

  render() {
    return (
      <Screen hasHeader hasBothBars>
        <FlatList
          showsVerticalScrollIndicator={ false }
          data={[
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' }
          ]}
          renderItem={ ({ item }) => {
            return (
              <Heading
                { ...item }
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
