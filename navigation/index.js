import React, { Component } from 'react'
import { Center, Heading, Text } from 'components'
import { ShowActions } from 'components'

class Navigator extends Component {

  render() {
    return (
      <Center>
        <Heading
          title='Harry Solovay'
          subtitle='hsolvz'
          right={ <ShowActions /> }
        />
      </Center>
    )
  }

}

export default Navigator
