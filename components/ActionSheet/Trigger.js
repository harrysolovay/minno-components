import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Graphic } from 'components'

@inject('viewStore')
@observer
class ActionSheetTrigger extends Component {
  render() {
    return (
      <Graphic
        icon='more'
        size={ 30 }
        onPress={ () => {
          this.props.viewStore.showActionSheet(
            this.props.options
          )
        }}
        style={{ marginTop : 2 }}
      />
    )
  }
}

export default ActionSheetTrigger
