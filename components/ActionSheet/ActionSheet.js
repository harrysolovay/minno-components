import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { View, StyleSheet } from 'react-native'
import { Touchable, Heading } from 'components'
import { NOTCH_HEIGHT } from 'constants'
import Modal from 'react-native-modalbox'

@inject('viewStore')
@observer
class ActionSheet extends Component {

  render() {
    return (
      <Modal
        style={ styles.modal }
        isOpen={ this.props.viewStore.actionSheet.showing }
        swipeToClose={ true }
        backdropPressToClose={ true }
        onClosed={ this.hide }
        position='bottom'
      >
        <Touchable
          style={ styles.backdrop }
          onPress={ this.hide }
        />
        <View
          style={ styles.handle }
        />
        <View
          style={ styles.innerView }
        >
          {
            this.props.viewStore.actionSheet.options.map((option, i) => (
              <Touchable
                onPress={ () => {
                  this.hide()
                  option.onPress()
                }}
                key={ i }
              >
                <Heading
                  left={ option.left }
                  title={ option.title }
                  subtitle={ option.subtitle }
                  right={ option.right }
                />
              </Touchable>
            ))
          }
        </View>
      </Modal>
    )
  }

  hide = () => {
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
  handle : {
    width : 45,
    height : 4,
    borderRadius : 2,
    backgroundColor : '#fff',
    marginBottom : 8
  },
  innerView : {
    backgroundColor : '#fff',
    alignSelf : 'stretch',
    paddingTop : 15,
    paddingBottom : 15 + NOTCH_HEIGHT
  }
})

export default ActionSheet
