import React, { Component } from 'react'
import { View, FlatList, Heading, ActionSheetTrigger } from 'components'
import { TAB_BAR_HEIGHT } from 'constants'

class Posts extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View screen hasHeader
        style={{ paddingBottom : TAB_BAR_HEIGHT + this.props.composerHeight }}
      >
        <FlatList
          showsVerticalScrollIndicator={ false }
          data={[
            { title : 'title', subtitle : 'subtitle', right : <ActionSheetTrigger options={[ { title : 'options one', subtitle : 'option subtitle' }, { title : 'options two', subtitle : 'option subtitle' } ]} /> },
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
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' },
            { title : 'title', subtitle : 'subtitle' }
          ]}
          renderItem={ ({ item, i }) => (
            <Heading
              { ...item }
            />
          )}
          keyExtractor={ (item, index) => index }
        />
      </View>
    )
  }

}

export default Posts
