import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View, Heading, ActionSheetTrigger, ProgressBar, Image, Text } from 'components'
import { SCREEN_WIDTH } from 'constants'
import Carousel from 'react-native-snap-carousel'

import placeholderImage from 'assets/images/placeholder.png'

class Post extends Component {

  render() {
    return (
      <View style={{ width : 345 }}>
        <Image
          source={ this.props.image }
        />
        <Text>{ this.props.caption }</Text>
      </View>
    )
  }

}

class Story extends Component {

  render() {
    return (
      <View
        style={ styles.container }
      >
        <Heading
          title='story title'
          subtitle='subtitle'
          right={
            <ActionSheetTrigger
              options={[ { title : 'option', subtitle : 'subtitle' } ]}
            />
          }
        />

        <ProgressBar
          stages={ 3 }
          progress={ 1.5 }
        />

        <Carousel
          data={[
            { image : placeholderImage, caption : 'one l;akkdjf sdkfsld sdkflsjdf dkfjdkfj slsfl dkfkdkfk dfkkkdf kdfkdfjdkfj' },
            { image : placeholderImage, caption : 'two' },
            { image : placeholderImage, caption : 'three' }
          ]}
          renderItem={ ({ item, i }) => <Post { ...item } /> }
          sliderWidth={ SCREEN_WIDTH }
          itemWidth={ SCREEN_WIDTH - 30 }
          slideStyle={{ width : SCREEN_WIDTH - 30 }}
          inactiveSlideOpacity={ 1 }
          inactiveSlideScale={ 1 }
        />

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container : {

  }
})

export default Story
