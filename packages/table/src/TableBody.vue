<script>
const convertToRows = (originColumns)=>{
  const rows = []
  originColumns.forEach(column=>{
    rows.push(column)
  }) 
  return rows
}
export default {
  name: 'WTableBody',
  props: {
    store: {
      returied: true
    }
  },

  computed: {
    data() {
      return this.store.states.data
    },
    columns() {
      return this.store.states.columns
    }
  },
  render(h) {
    const columnRow = convertToRows(this.columns)
    const data = this.data
    return (
      <tbody>
        {
          this._l(data,(row,rowIndex)=>{
            return (
              <tr>
                {
                  this._l(columnRow,(column,columnIndex)=>{
                    const prop = column['property']
                    const style = {}

                    if (column.minWidth) {
                      style.minWidth = column.minWidth + 'px'
                      style.flex = 1
                    } else {
                      style.width = (column.width ? column.width : 80) + 'px'
                    }
                    return (
                      <td
                        style={style}
                      >{ row[prop] }</td>
                    )
                  })
                }
               
              </tr>
            )
          })
        }
      
      </tbody>
    )
  }
}
</script>
 