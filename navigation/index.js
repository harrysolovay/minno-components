import React, { Component } from 'react'
import { View } from 'react-native'
import { Touchable, Center } from 'components'
import { ActionSheet, ActionSheetTrigger } from 'components'
import { Ionicons } from '@expo/vector-icons'

class Navigator extends Component {

  render() {
    return (
      <View style={{ flex : 1 }}>
        <Center>
          <ActionSheetTrigger
            onPress={ () => this.actionSheet.show([
              { title : 'option 1', subtitle : 'option subtitle', onPress : () => console.log('one') },
              { title : 'option 2', subtitle : 'option subtitle', onPress : () => console.log('two') },
              { title : 'option 3', subtitle : 'option subtitle', onPress : () => console.log('three') },
              { title : 'option 4', subtitle : 'option subtitle', onPress : () => console.log('four') }
            ]) }
          />
        </Center>
        <ActionSheet
          ref={ ref => this.actionSheet = ref }
        />
      </View>
    )
  }

  showActionSheet = (options) => {
    this.actionSheet.show(options)
  }

}

export default Navigator
