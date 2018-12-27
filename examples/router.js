import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import TestButton from './components/TestButton'
import TestNotification from './components/TestNotification'
import TestLoading from './components/TestLoading'
import TestTips from './components/TestTips'
import TestJsx from './components/TestJsx'
import TestPopoverNative from './components/TestPopoverNative'
import TestPopover from './components/TestPopover'
import TestPagination from './components/TestPagination'
import TestTable from './components/TestTable'
import TestTable2 from './components/TestTable2'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '', component: Home },
    { path: '/testbutton', name: 'Button', component: TestButton },
    { path: '/testnotification', name: 'Notification', component: TestNotification },
    { path: '/testloading', name: 'Loading', component: TestLoading },
    { path: '/testtips', name: 'ToolTips', component: TestTips },
    { path: '/testjsx', name: 'TestJsx', component: TestJsx },
    { path: '/testpopovernative', name: TestPopoverNative.name, component: TestPopoverNative },
    { path: '/testpopover', name: TestPopover.name, component: TestPopover },
    { path: '/testpagination', name: TestPagination.name, component: TestPagination },
    { path: '/testtable', name: 'Table', component: TestTable},
    { path: '/testtable2', name: 'Table2', component: TestTable2},
  ]
})