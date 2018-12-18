import Popover from './src/Main.vue'

Popover.install = (Vue)=>{
  Vue.component(Popover.name,Popover)
}

export default Popover