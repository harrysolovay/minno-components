import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Graphic } from 'components'

@inject('actionSheetStore') @observer
class ActionSheetTrigger extends Component {

  render() {
    return (
      <Graphic
        icon='more'
        size={ 30 }
        onPress={ this._show }
        style={{
          marginTop : 2,
          marginRight : 15
        }}
      />
    )
  }

  _show = () => {
    this.props.actionSheetStore.show(
      this.props.options
    )
  }
  
}

export default ActionSheetTrigger
