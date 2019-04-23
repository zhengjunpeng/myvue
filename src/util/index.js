import LoadingComponent from './loading/loading'
import './tool'

const util = {
  install: function (Vue) {
    Vue.component('Loading', LoadingComponent)
  }
}

export default util
