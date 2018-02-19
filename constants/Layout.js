import { Dimensions } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const STATUSBAR_HEIGHT = getStatusBarHeight()
const HEADER_HEIGHT = STATUSBAR_HEIGHT + 50
const NOTCH_HEIGHT = isIphoneX() ? 20 : 0
const TAB_BAR_HEIGHT = NOTCH_HEIGHT + 50
const FOOTER_HEIGHT = TAB_BAR_HEIGHT + 50

export {
  STATUSBAR_HEIGHT,
  HEADER_HEIGHT,
  NOTCH_HEIGHT,
  TAB_BAR_HEIGHT,
  FOOTER_HEIGHT
}
