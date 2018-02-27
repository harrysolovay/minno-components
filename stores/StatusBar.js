import { observable, action } from 'mobx'

class StatusBarStore {

  @observable hidden = false

  @observable style = 'dark-content'

  @action hide() {
    this.hidden = true
  }

  @action show() {
    this.hidden = false
  }

  @action lightenStyle() {
    this.style = 'light-content'
  }

  @action darkenStyle() {
    this.style = 'dark-content'
  }

}

export default StatusBarStore
