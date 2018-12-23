<script>
// covert column to rows
const convertToRows = (originColumns)=>{
  const rows = []
  originColumns.forEach(column=>{
    rows.push(column)
  }) 
  return rows
}

export default {
  name: 'WTableHeader',
  props: {
    store: {
      required: true
    }
  },

  computed: {
    columnsCount() {
      return this.store.states.columns.length
    },

    columns() {
      return this.store.states.columns
    }
  },
  created() {
    
  },
  mounted() {
  },

  render(h) {
    const columnRow = convertToRows(this.columns)
    return (
      <thead>
        <tr>
          {
            this._l(columnRow,(column,rowIndex)=>{
              return (
                <th
                >{ column.label }</th>
              )
            })
          }
        </tr>
      </thead>
    )
  },
}
</script>

