import { observable, action } from 'mobx'

class ViewStore {

  @observable actionSheet = {
    showing : false,
    options : [ {
      title : 'no options loaded',
      subtitle : 'this is a bug!',
      onPress : () => console.log('bug in action sheet')
    } ]
  }

  @action showActionSheet(options) {
    this.actionSheet = {
      showing : true,
      options : options
    }
  }

}

export default new ViewStore()
