import Button from '../packages/button'
import Notification from '../packages/notification/index'
import Loading from '../packages/loading/index.js'
import ToolTips from '../packages/toolTips/index'
import Popover from '../packages/popover/index'
import Pagination from '../packages/pagination/index'
import WTable from '../packages/table/index'
import WTableColumn from '../packages/table-column/index'
import WMessageBox from '../packages/message-box/index'
import WSwitch from '../packages/switch/index'
import WRadio from '../packages/radio/index'
import WCheckBox from '../packages/checkbox/index'
import WCheckBoxGroup from '../packages/checkbox-group/index'
import WInput from '../packages/input'

// table2
import Table from '../packages/table2'
import TableColumn from '../packages/table-column2'
// checkbox2
import TCheckbox from '../packages/checkbox2'
import TCheckboxGroup from '../packages/checkbox-group2'

const install = function (Vue) {
  Vue.component(Button.name, Button)
  Vue.component(ToolTips.name,ToolTips)
  Vue.component(Popover.name,Popover)
  Vue.component(Pagination.name,Pagination)
  Vue.component(WTable.name,WTable)
  Vue.component(WTableColumn.name,WTableColumn)
  Vue.component(WSwitch.name,WSwitch)
  Vue.component(WRadio.name,WRadio)
  Vue.component(WCheckBox.name,WCheckBox)
  Vue.component(WCheckBoxGroup.name,WCheckBoxGroup)
  Vue.component(WInput.name,WInput)

  // table2
  Vue.component(Table.name,Table)
  Vue.component(TableColumn.name,TableColumn)
  // checkbox2
  Vue.component(TCheckbox.name,TCheckbox)
  Vue.component(TCheckboxGroup.name,TCheckboxGroup)
  
  Vue.use(Loading)

  Vue.prototype.$notify = Notification 
  Vue.prototype.$confirm = WMessageBox.confirm

}

export default install