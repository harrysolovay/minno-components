import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Graphic } from 'components'

@inject('actionSheetStore')
@observer
class ActionSheetTrigger extends Component {
  render() {
    return (
      <Graphic
        icon='more'
        size={ 30 }
        onPress={ () => {
          this.props.actionSheetStore.show(
            this.props.options
          )
        }}
        style={{
          marginTop : 2,
          marginRight : 15
        }}
      />
    )
  }
}

export default ActionSheetTrigger
