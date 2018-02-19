import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Touchable } from 'components'
import { Ionicons } from '@expo/vector-icons'

@inject('viewStore')
@observer
class ActionSheetTrigger extends Component {
  render() {
    return (
      <Touchable
        onPress={ () => {
          this.props.viewStore.showActionSheet(this.props.options)
        }}
      >
        <Ionicons
          name='ios-more-outline'
          size={ 30 }
          color='#000'
        />
      </Touchable>
    )
  }
}

export default ActionSheetTrigger
