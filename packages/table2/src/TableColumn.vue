<script>

export default {
  name: 'TTableColumn',
  props: {
    prop: String,
    label: String,
    width: {
      type: [String,Number],
      default: 80
    },
    minWidth: [String,Number],
  },
  data() {
    return {
    }
  },

  computed: {
    owner() {
      return this.$parent
    }

  },

  created() {
    // render
    this.$options.render = h => h('div', this.$slots.default)

  },

  mounted() {
    let column = {
      prop: this.prop,
      label: this.label,
      width: this.width,
      minWidth: this.minWidth
    }
    let renderCell = column.renderCell
    
    const self = this
    column.renderCell = function(h,data) {
      if (self.$scopedSlots.default) {
        renderCell = () => { return self.$scopedSlots.default(data) }
      }

      if (!renderCell) {
        // 无作用域插槽情况下的renderCell
        renderCell = function(h, { row, column }) {
          const prop = column.prop
          let value = prop ? row[prop] : ' '
          return value
        }
      }
      return renderCell(h,data)
    }

    this.owner.store.commit('insertColumn',column)
  },

  methods: {

  }
}
</script>
