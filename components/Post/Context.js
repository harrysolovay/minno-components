import React, { Component } from 'react'
import { View, Text as TextComponent } from 'components'
import timeago from 'time-ago'
import { StyleSheet } from 'react-native'

const Text = (props) => (
  <TextComponent
    { ...props }
    style={[
      styles.text,
      props.paddingRight ?  styles.paddingRight : null,
      props.style
    ]}
  />
)

const Blurb = (props) => {

  return (
    <View style={ styles.blurb } >
      <View style={ styles.row }>
        <Text secondary>{ timeago.ago(props.time) } at </Text>
        <Text>{ props.location }</Text>
      </View>
      <Text>{ props.caption }</Text>
      <View style={ styles.row } >
        <Text>see all { props.commentsCount }</Text>
        <Text secondary> or </Text>
        <Text>add comment</Text>
      </View>
    </View>
  )
}

const CommentsPreview = (props) => (
  <View style={ styles.commentsPreview } >
    {
      props.comments.map((comment, i) => {
        return (
          <View
            style={ styles.row }
            key={ i }
          >
            <Text>{ comment.author } </Text>
            <Text secondary>{ comment.body }</Text>
          </View>
        )
      })
    }
  </View>
)

const styles = StyleSheet.create({
  blurb : {
    marginTop : 15
  },
  commentsPreview : {
    marginTop : 7.5
  },
  row : { flexDirection : 'row' },
  text : {
    fontSize : 16,
    lineHeight : 16
  }
})

export { Blurb, CommentsPreview }
