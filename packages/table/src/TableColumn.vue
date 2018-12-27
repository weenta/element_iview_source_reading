
<script>
import { getPropByPath } from '../../utils/util'

const DEFAULT_RENDER_CELL = function(h, { row, column, $index }) {
  const property = column.property
  const value = property && getPropByPath(row, property).v
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index)
  }
  return value
}

const parseWidth = (width) => {
  if (width !== undefined) {
    width = parseInt(width, 10)
    if (isNaN(width)) {
      width = null
    }
  }
  return width
}

const parseMinWidth = (minWidth) => {
  if (minWidth !== undefined) {
    minWidth = parseInt(minWidth, 10)
    if (isNaN(minWidth)) {
      minWidth = 80
    }
  }
  return minWidth
}

export default {
  name: 'WTableColumn',
  props: {
    label: String,
    prop: String,
    width: [String,Number],
    minWidth: [String,Number]
  },
  computed: {
    owner() {
      return this.$parent
    }
  },
  watch: {
    label(newVal) {
      if (this.columnConfig) {
        this.columnConfig.label = newVal
      }
    },
    width(newVal) {
      if (this.columnConfig) {
        this.columnConfig.width = parseWidth(newVal)
      }
    },
    minWidth(newVal) {
      if (newVal) {
        this.columnConfig.minWidth = parseMinWidth(newVal)
      }
    }
  },
  created() {
    // render函数
    this.$options.render = h => h('div', this.$slots.default)

  },
  mounted() {
   
    let column = {
      label: this.label,
      property: this.prop || this.property,
      width: this.width,
      minWidth: this.minWidth
    }
    this.columnConfig = column

    var self = this
    column.renderCell = function(h,data) {
      let renderCell = DEFAULT_RENDER_CELL
      if (self.$scopedSlots.default) {
        renderCell = ()=>{ self.$scopedSlots.default(data) }
        console.log('span')
      }
      return renderCell(h,data)
    }

    let columnIndex
    this.owner.store.commit('insertColumn', this.columnConfig, columnIndex, null)
  }
  
}
</script>
