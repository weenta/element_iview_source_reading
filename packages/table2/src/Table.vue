<template>
  <div ref='tTable' class="t-table">
    <!-- hidden -->
    <div class="hidden"><slot/></div>
    <table 
      :style="{width:tableWidth}"
    >
      <t-table-header 
        :store='store'
      />
      <t-table-body
        :store='store'
        :height='height'
      />
    </table>
  </div>
</template>
<script>
import TableStore from './tableStore'
import TTableHeader from './TableHeader'
import TTableBody from './TableBody'
import { computedTableWidth } from './tableUtils'
export default {
  name: 'TTable',
  components: {
    TTableHeader,
    TTableBody
  },
  props: {
    data: {
      type: Array,
      default: ()=>{
        return []
      }
    },
    height: [String,Number]
  },
  data() {
    const store = new TableStore(this)
    return {
      store,
      tableWidth: 0,
    }
  },
  
  created() {
    let data = this.data
    this.store.commit('setData',data)
  },

  mounted() {
    let columns = this.store.states.columns
    let el = this.$refs.tTable
    let tableWidth = computedTableWidth(columns,el)
    this.tableWidth = tableWidth + 'px'
  },

  methods: {

  }
}
</script>
