import React, { Component } from 'react'
import { AppLoading, Font } from 'expo'
import { Loading } from 'components'
import Logo from 'assets/images/logo.png'
import Navigator from 'navigation'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      assetsLoaded : false,
      sessionLoaded : true
    }
  }

  render() {
    return ! this.state.assetsLoaded
      ? <AppLoading
          startAsync={ this.load }
          onError={ console.error }
          onFinish={ () => this.setState({ assetsLoaded : true }) }
        />
      : ! this.state.sessionLoaded
        ? <Loading
            image={ Logo }
            title='loading'
            subtitle='just a sec'
          />
        : <Navigator />
  }

  load = async() => {
    return Promise.all([
      Font.loadAsync({
        HelveticaNeueLight : require('./assets/fonts/HelveticaNeue-Light.ttf'),
        HelveticaNeueRegular : require('./assets/fonts/HelveticaNeue-Regular.ttf'),
        HelveticaNeueBold : require('./assets/fonts/HelveticaNeue-Bold.ttf'),
        FuturaLTBook : require('./assets/fonts/FuturaLT-Book.ttf')
      })
    ])
  }

}

export default App
