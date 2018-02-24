import { observable, action } from 'mobx'

class ViewStore {

  @observable actionSheet = {
    options : [{
      title : 'no options loaded',
      subtitle : 'this is a bug!',
      onPress : () => console.log('bug in action sheet')
    }],
    showing : false
  }

  @action showActionSheet(options) {
    this.actionSheet = {
      options : options,
      showing : true
    }
  }

}

export default new ViewStore()
