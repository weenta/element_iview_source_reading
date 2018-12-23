import Button from '../packages/button'
import Notification from '../packages/notification/index'
import Loading from '../packages/loading/index.js'
import ToolTips from '../packages/toolTips/index'
import Popover from '../packages/popover/index'
import Pagination from '../packages/pagination/index'
import WTable from '../packages/table/index'
import WTableColumn from '../packages/table-column/index'

// ====== source-code ==============
import ElTable from '../packages-s/table/index'
import ElTableColumn from '../packages-s/table-column/index'

// ======== source-code end ===========

const install = function (Vue) {
  Vue.component(Button.name, Button)
  Vue.component(Notification.name, Notification)
  Vue.component(ToolTips.name,ToolTips)
  Vue.component(Popover.name,Popover)
  Vue.component(Pagination.name,Pagination)
  Vue.component(WTable.name,WTable)
  Vue.component(WTableColumn.name,WTableColumn)
  
  Vue.use(Loading)

  Vue.prototype.$notify = Notification

  // ======== source-code ========
  Vue.component(ElTable.name,ElTable)
  Vue.component(ElTableColumn.name,ElTableColumn)
  // ======== source-code end ======
}

export default install