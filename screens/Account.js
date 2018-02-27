import React, { Component } from 'react'
import { View, FlatList, ActionSheetTrigger, Heading} from 'components'

class Account extends Component {

  render() {
    return (
      <View flexOne hasHeader hasTabBar>
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

export default Account
