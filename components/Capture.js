import React, { Component } from 'react'
import { View, Text, Touchable, Graphic } from 'components'
import { STATUS_BAR_HEIGHT } from 'constants'
import { StyleSheet, Linking, Alert, CameraRoll } from 'react-native'
import { Camera, Permissions } from 'expo'

class Capture extends Component {

  state = {
    saveToCameraRoll : true,
    flashMode : Camera.Constants.FlashMode.off,
    type : Camera.Constants.Type.back
  }

  render() {
    return this.state.permissionsGranted
      ? (
        <Camera
          ref={ ref => this.camera = ref }
          type={ this.state.type }
          flashMode={ this.state.flashMode }
          style={ styles.camera }
        >
          <View
            style={ styles.controls }
          >
            {
              this.state.flashMode === Camera.Constants.FlashMode.off
                ? <Graphic
                    onPress={ this._toggleFlashMode }
                    icon='flashOff'
                    size={ 40 }
                    color='#fff'
                  />
                : <Graphic
                    onPress={ this._toggleFlashMode }
                    icon='flashOn'
                    size={ 40 }
                    color='#fff'
                  />
            }
            <Touchable
              onPress={ this._takePicture }
              style={ styles.captureButton }
            />
            <Graphic
              onPress={ this._toggleType }
              icon='flipCamera'
              size={ 40 }
              color='#fff'
            />
          </View>
        </Camera>
      )
      : (
        <View
          flex
          center
          style={ styles.permissions }
        >
          <Text>
            To use this feature, please...
          </Text>
          <Text
            onPress={ this._showPermissionsAlert }
            action
            style={ styles.permission }
          >
            enable camera and microphone
          </Text>
        </View>
      )
  }



  _permissionsGranted = async() => {
    const permissions = await Promise.all([
      Permissions.askAsync(Permissions.CAMERA),
      Permissions.askAsync(Permissions.AUDIO_RECORDING)
    ])
    return(
      permissions[0].status === 'granted' &&
      permissions[1].status === 'granted'
    )
  }

  _showPermissionsAlert = () => {
    Alert.alert(
      'Wanna use the camera?',
      'if so, open settings and enable camera and audio recording',
      [
        { text : 'Not Now' },
        { text : 'Open Settings', onPress : () => Linking.openURL('app-settings:') }
      ]
    )
  }

  _askForPermissions = async() => {
    const granted = await this._permissionsGranted()
    this.setState({ permissionsGranted : granted })
    if(!granted)
      this._showPermissionsAlert()
  }

  componentDidMount() {
    this._askForPermissions()
  }



  _toggle = (stateKey, a, b) => {
    this.setState({
      [ stateKey ] : this.state[stateKey] === a ? b : a
    })
  }

  _toggleFlashMode = () => {
    this._toggle('flashMode', Camera.Constants.FlashMode.on, Camera.Constants.FlashMode.off)
  }

  _toggleType = () => {
    this._toggle('type', Camera.Constants.Type.back, Camera.Constants.Type.front)
  }



  _takePicture = async() => {
    if(this.camera) {
      let pic = await this.camera.takePictureAsync()
      if(this.state.saveToCameraRoll) {
        let savedTo = await CameraRoll.saveToCameraRoll(pic.uri, 'photo')
        alert(String('uri ' + savedTo))
      }
    }
  }

}

const styles = StyleSheet.create({
  camera : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'flex-end'
  },
  controls : {
    marginBottom : 15,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  captureButton : {
    width : 80,
    height : 80,
    borderRadius : 40,
    borderColor : '#fff',
    borderWidth : 1,
    marginBottom : 20
  },
  permissions : {
    paddingTop : STATUS_BAR_HEIGHT
  },
  permission : {
    marginTop : 10
  }
})

export default Capture
