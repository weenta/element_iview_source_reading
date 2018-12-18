import Button from '../packages/button'
import Notification from '../packages/notification/index'
import Loading from '../packages/loading/index.js'
import ToolTips from '../packages/toolTips/index'
import Popover from '../packages/popover/index'

const install = function (Vue) {
  Vue.component(Button.name, Button)
  Vue.component(Notification.name, Notification)
  Vue.component(ToolTips.name,ToolTips)
  Vue.component(Popover.name,Popover)
  
  Vue.use(Loading)

  Vue.prototype.$notify = Notification
}

export default install