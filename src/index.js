import Button from '../packages/button'
import Notification from '../packages/notification/index'
import Loading from '../packages/loading/index.js'
import ToolTips from '../packages/toolTips/index'
import Popover from '../packages/popover/index'
import Pagination from '../packages/pagination/index'
import WTable from '../packages/table/index'
import WTableColumn from '../packages/table-column/index'

// table2
import Table from '../packages/table2'
import TableColumn from '../packages/table-column2'

const install = function (Vue) {
  Vue.component(Button.name, Button)
  Vue.component(Notification.name, Notification)
  Vue.component(ToolTips.name,ToolTips)
  Vue.component(Popover.name,Popover)
  Vue.component(Pagination.name,Pagination)
  Vue.component(WTable.name,WTable)
  Vue.component(WTableColumn.name,WTableColumn)

  // table2
  Vue.component(Table.name,Table)
  Vue.component(TableColumn.name,TableColumn)
  
  Vue.use(Loading)

  Vue.prototype.$notify = Notification

}

export default install