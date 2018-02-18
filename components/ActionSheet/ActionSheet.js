import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Touchable, Heading } from 'components'
import Modal from 'react-native-modalbox'

class ActionSheet extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showing : false,
      options : [{ title : 'no options yet', subtitle : 'this is a bug!' }]
    }
  }

  render() {
    return (
      <Modal
        style={ styles.modal }
        isOpen={ this.state.showing }
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
            this.state.options.map((option, i) => (
              <Touchable
                onPress={ () => {
                  this.hide()
                  option.onPress()
                }}
                key={ i }
              >
                <Heading
                  title={ option.title }
                  subtitle={ option.subtitle }
                />
              </Touchable>
            ))
          }
        </View>
      </Modal>
    )
  }

  show = (options) => {
    this.setState({ options }, () => {
      this.setState({ showing : true })
    })
  }

  hide = () => {
    this.setState({ showing : false })
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
    alignSelf : 'stretch'
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
    paddingRight : 15,
    paddingBottom : 15,
    paddingLeft : 15,
  }
})

export default ActionSheet
