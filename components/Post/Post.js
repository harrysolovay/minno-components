import React, { Component } from 'react'
import { Text as TextComponent, View, Heading, ActionSheetTrigger, Media, Blurb, CommentsPreview } from 'components'
import timeago from 'time-ago'
import { StyleSheet } from 'react-native'

const Text = (props) => (
  <TextComponent body
    { ...props }
    style={[
      props.wrap ? styles.wrap : null,
      styles.text,
      props.style
    ]}
    numberOfLines={ props.oneLine ? 1 : null }
    ellipsizeMode='tail'
  />
)

class Post extends Component {

  render() {
    return (
      <View>

        <Heading
          title={ this.props.author }
          subtitle={ timeago.ago(this.props.time) + ( this.props.location ? ` at ${ this.props.location }` : '' ) }
          right={
            <ActionSheetTrigger
              options={[ { title : 'option', subtitle : 'subtitle' } ]}
            />
          }
        />

        <View style={ styles.main } >

          <Media
            type={ this.props.type }
            source={{ uri : this.props.source }}
            style={ styles.media }
          />

          <View style={ styles.engagement } >
            <View style={[ styles.row, styles.caption ]} >
              <Text secondary wrap>{ this.props.caption }</Text>
            </View>
            <View style={ styles.comments } >
              {
                this.props.comments.map((comment, i) => {
                  return (
                    <View
                      style={ styles.row }
                      key={ i }
                    >
                      <Text>{ comment.author } </Text>
                      <Text secondary wrap oneLine>{ comment.body }</Text>
                    </View>
                  )
                })
              }
            </View>
          </View>

          <View style={ styles.row } >
            <Text>see all { this.props.comments.length }</Text>
            <Text secondary> or </Text>
            <Text>add comment</Text>
          </View>

        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  main : {
    paddingRight : 15,
    paddingBottom : 15,
    paddingLeft : 15
  },
  blurb : {
    marginTop : 15
  },
  engagement : {
    marginTop : 15
  },
  wrap : {
    flex : 1,
    flexWrap : 'wrap'
  },
  row : {
    flexDirection : 'row'
  },
  caption : {
    marginBottom : 5
  },
  media : {
    width : null,
    height : 380,
    flex : 1,
    alignSelf : 'stretch',
    borderRadius : 5,
    overflow : 'hidden',
    borderWidth : 1,
    borderColor : '#ddd'
  }
})

export default Post
