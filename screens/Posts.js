import React, { Component } from 'react'
import { Text } from 'react-native'
import { Screen, Heading, ActionSheet, ActionSheetTrigger } from 'components'

class Posts extends Component {

  render() {
    return (
      <Screen scrollable hasHeader hasBothBars style={{ flex : 1 }}>
        <Heading
          title='some title'
          subtitle='subtitle here'
          right={
            <ActionSheetTrigger
              options={[
                { title : 'one title', subtitle : 'one subtitle', onPress : () => console.log('one') },
                { title : 'two title', subtitle : 'two subtitle', onPress : () => console.log('two') },
                { title : 'three title', subtitle : 'three subtitle', onPress : () => console.log('three') },
                { title : 'four title', subtitle : 'four subtitle', onPress : () => console.log('four') }
              ]}
            />
          }
        />
      </Screen>
    )
  }

}

export default Posts
