import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { StyleSheet, View } from 'react-native'
import { Touchable, Heading } from 'components'
import { NOTCH_HEIGHT } from 'constants'
import Modal from 'react-native-modalbox'

@inject('viewStore')
@observer
class ActionSheet extends Component {

  render() {
    return (
      <Modal
        isOpen={ this.props.viewStore.actionSheet.showing }
        onClosed={ this._hide }
        position='bottom'
        style={ styles.modal }
      >
        <Touchable
          onPress={ this._hide }
          style={ styles.backdrop }
        />
        <View
          style={ styles.options }
        >
          {
            this.props.viewStore.actionSheet.options.map((option, i) => (
              <Touchable
                onPress={ () => {
                  this._hide()
                  option.onPress()
                }}
                key={ i }
              >
                <Heading
                  { ...option }
                />
              </Touchable>
            ))
          }
        </View>
      </Modal>
    )
  }

  _hide = () => {
    this.props.viewStore.actionSheet.showing = false
  }

}

const styles = StyleSheet.create({
  modal : {
    flexDirection : 'column',
    justifyContent : 'flex-end',
    backgroundColor : 'transparent',
    alignItems : 'center'
  },
  backdrop : {
    flex : 1,
    alignSelf : 'stretch',
  },
  options : {
    backgroundColor : '#fff',
    alignSelf : 'stretch',
    paddingTop : 15,
    paddingBottom : 15 + NOTCH_HEIGHT
  }
})

export default ActionSheet
