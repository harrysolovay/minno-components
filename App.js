import React, { Component } from 'react'
import { AppLoading, Font } from 'expo'
import { Loading } from 'components'
import { Provider } from 'mobx-react'
import stores from 'stores'
import { Navigator } from 'navigation'

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
            image='logo'
            title='loading'
            subtitle='just a sec'
          />
        : <Provider { ...stores }>
            <Navigator />
          </Provider>
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
