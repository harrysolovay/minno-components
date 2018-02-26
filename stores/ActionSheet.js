import { observable, action } from 'mobx'

class ActionSheetStore {

  @observable showing = false

  @observable options = [{
    title : 'no options loaded',
    subtitle : 'this is a bug!',
    onPress : () => console.log('bug in action sheet')
  }]

  @action show(options) {
    this.options = options
    this.showing = true
  }

}

export default ActionSheetStore
