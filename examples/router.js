import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import TestButton from './components/TestButton'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '', component: Home },
    { path: '/testbutton', name: 'Button', component: TestButton },
  ]
})