import WTable from './src/Table.vue'
WTable.install = (Vue)=>{
  Vue.component(WTable.name,WTable)
}
export default WTable