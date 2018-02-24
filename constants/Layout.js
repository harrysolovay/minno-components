import { Dimensions } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const SCREEN_DIMENSIONS = Dimensions.get('window')
const { height : SCREEN_HEIGHT, width : SCREEN_WIDTH } = SCREEN_DIMENSIONS
const STATUS_BAR_HEIGHT = getStatusBarHeight()
const HEADER_HEIGHT = STATUS_BAR_HEIGHT + 50
const NOTCH_HEIGHT = isIphoneX() ? 20 : 0
const TAB_BAR_HEIGHT = NOTCH_HEIGHT + 50
const FOOTER_HEIGHT = TAB_BAR_HEIGHT + 50

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  HEADER_HEIGHT,
  NOTCH_HEIGHT,
  TAB_BAR_HEIGHT,
  FOOTER_HEIGHT
}
