import Tooltip from './src/main.vue'
Tooltip.install = (Vue)=>{
  Vue.component(Tooltip.name,Tooltip)
}
export default Tooltip