<template>
  <div 
    class="w-table"
  >
    <div :style='{minWidth:tableWidth}' class="table-wrapper"
    >
      <table>
        <slot/>
        <table-header
          :store='store'
        />
        <table-body
          :store='store'
        />
      </table>
    </div>
    
  </div>
</template>
<script>
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableStore from './table-store'

export default {
  name: 'WTable',
  components: {
    TableHeader,
    TableBody
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    const store = new TableStore(this,{ })
    return {
      store,
      tableWidth: '100%',
    }
  },
  computed: {
    
  },
  
  watch: {
    data: {
      immediate: true,
      handler(newVal) {
        this.store.commit('setData',newVal)
        this.$nextTick(()=>{
          this.computWidth()
        })
      }
    }
  },
  mounted() {
    this.store.updateColumns()
  },
  methods: {
    computWidth() {
      const columns = this.store.states.columns
      let total = 0
      columns.forEach(column=>{
        let width = column.minWidth ? column.minWidth :
          column.width ? column.width : 80
        total += Number(width)
      })
      this.tableWidth = total + 'px'
    }
  }

}
</script>
