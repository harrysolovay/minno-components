import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Graphic } from 'components'

@inject('viewStore')
@observer
class ActionSheetTrigger extends Component {
  render() {
    return (
      <Graphic
        name='showActions'
        onPress={ () => {
          this.props.viewStore.showActionSheet(
            this.props.options
          )
        }}
      />
    )
  }
}

export default ActionSheetTrigger
