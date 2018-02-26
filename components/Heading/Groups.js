import React from 'react'
import { FlatList, HeadingGroup } from 'components'
import { StyleSheet } from 'react-native'

const Groups = (props) => (
  <FlatList
    horizontal={ true }
    data={ props.groups }
    renderItem={ ({ item }) => {
      return (
        <HeadingGroup
          { ...item }
          style={{ marginRight : 14 }}
        />
      )
    }}
    keyExtractor={ (item, index) => index }
    style={[ styles.flatList, props.style ]}
    showsHorizontalScrollIndicator={ false }
    showsVerticalScrollIndicator={ false }
  />
)

const styles = StyleSheet.create({
  flatList : {
    paddingLeft : 14
  }
})

export default Groups
