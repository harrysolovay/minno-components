import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Modal from 'react-native-modalbox'
import { View, Heading } from 'components'
import { StyleSheet } from 'react-native'
import { NOTCH_HEIGHT } from 'constants'

@inject('actionSheetStore') @observer
class ActionSheet extends Component {

  render() {
    return (
      <Modal
        isOpen={ this.props.actionSheetStore.showing }
        onClosed={ this._hide }
        position='bottom'
        style={ styles.modal }
      >
        <View
          onPress={ this._hide }
          style={ styles.backdrop }
        />
        <View
          style={ styles.options }
        >
          {
            this.props.actionSheetStore.options.map((option, i) => (
              <Heading
                { ...option }
                onPress={ () => {
                  this._hide()
                  option.onPress()
                }}
                key={ i }
              />
            ))
          }
        </View>
      </Modal>
    )
  }

  _hide = () => {
    this.props.actionSheetStore.showing = false
  }

}

const styles = StyleSheet.create({
  modal : {
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'flex-end',
    backgroundColor : 'transparent'
  },
  backdrop : {
    flex : 1,
    alignSelf : 'stretch'
  },
  options : {
    alignSelf : 'stretch',
    paddingTop : 15,
    paddingBottom : 15 + NOTCH_HEIGHT,
    backgroundColor : '#fff'
  }
})

export default ActionSheet
