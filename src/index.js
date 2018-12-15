import Button from '../packages/button'
import Notification from '../packages/notification/index'
import Loading from '../packages/loading/index.js'

const install = function(Vue,opts = {}) {
  Vue.component(Button.name,Button)
  Vue.component(Notification.name, Notification)
  Vue.use(Loading)

  Vue.prototype.$notify = Notification
}

export default install