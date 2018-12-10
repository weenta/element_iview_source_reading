import Element from '../src'
import Vue from 'vue'
import App from './app'
import router from './router'
import '../packages/theme/index.less'

Vue.use(Element)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})