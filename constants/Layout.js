import { Dimensions } from 'react-native'
import { Constants } from 'expo'
import { isIphoneX } from 'react-native-iphone-x-helper'

const SCREEN_DIMENSIONS = Dimensions.get('window')
const { height : SCREEN_HEIGHT, width : SCREEN_WIDTH } = SCREEN_DIMENSIONS
const STATUS_BAR_HEIGHT = Constants.statusBarHeight
const HEADER_HEIGHT = STATUS_BAR_HEIGHT + 50
const NOTCH_HEIGHT = isIphoneX() ? 20 : 0
const TAB_BAR_HEIGHT = NOTCH_HEIGHT + 50

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  HEADER_HEIGHT,
  NOTCH_HEIGHT,
  TAB_BAR_HEIGHT
}
