import React from 'react'
import { Touchable } from 'components'
import { Ionicons } from '@expo/vector-icons'

const ActionSheetTrigger = (props) => (
  <Touchable { ...props }>
    <Ionicons
      name='ios-more-outline'
      size={ 30 }
      color='#000'
    />
  </Touchable>
)

export default ActionSheetTrigger
