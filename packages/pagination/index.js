import Pagination from './src/Pager.vue'

Pagination.install = (Vue)=>{
  Vue.component(Pagination.name,Pagination)
}
export default Pagination