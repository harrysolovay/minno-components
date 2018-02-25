import React, { Component } from 'react'
import { View, Header, Heading, ActionSheetTrigger, HeadingGroup } from 'components'

class Sandbox extends Component {

  render() {
    return (
      <View style={{ flex : 1 }}>
        <Header
          center='SANDBOX'
        />
        <View screen hasHeader>
          <View style={{ marginTop : 15, marginRight : 15, marginLeft : 15, borderWidth : 1, borderColor : '#000' }}>
            <Heading
              title='Lsingle group heading title'
              subtitle='Lsingle group heading subtitle'
              right={ <ActionSheetTrigger options={[ { title : 'hello', subtitle : 'there' } ]} /> }
            />
          </View>
          <View style={{ marginTop : 15, marginRight : 15, marginLeft : 15, borderWidth : 1, borderColor : '#000' }}>
            <Heading
              groups={[
                { title : 'Lprecedent title', subtitle : 'precedent subtitle', precedent : 'true' },
                { title : 'Ltitle', subtitle : 'subtitle' },
                { title : 'title', subtitle : 'subtitle' },
                { title : 'title', subtitle : 'subtitle' },
                { title : 'title', subtitle : 'subtitle' },
                { title : 'title', subtitle : 'subtitle' },
                { title : 'title', subtitle : 'subtitle' }
              ]}
              right={ <ActionSheetTrigger options={[ { title : 'hello', subtitle : 'there' } ]} /> }
            />
          </View>
          <View style={{ marginTop : 15, marginRight : 15, marginLeft : 15, borderWidth : 1, borderColor : '#000' }}>
            <HeadingGroup
              title='Lsingle group heading title'
              subtitle='Lsingle group heading subtitle'
            />
          </View>
        </View>
      </View>
    )
  }

}

export default Sandbox
