<script>
export default {
  name: 'TTableBody',
  props: {
    store: {
      required: true
    },
    height: [String,Number]
  },
  render(h) {
    const columns = this.store.states.columns
    const data = this.store.states.data
    let height = this.height ? this.height + 'px' : 'auto'
    let tableStyle = {
      height: height,
      overflowY: 'scroll'
    }
    return (
      <tbody
        style={tableStyle}
      >
        {
          this._l(data,row=>{
            return (
              <tr
                style='display:flex;flex-direction:row;align-items:center;'
              >
                {
                  this._l(columns,column=>{
                    let minWidth = column.minWidth
                    let width = minWidth ? 'atuo' : column.width + 'px'
                    let style = {width: width}
                    if (minWidth) {
                      style['flex'] = 1
                    }
                    return (
                      <td
                        style={style}
                      >
                        {
                          column.renderCell.call(
                            this._renderProxy,
                            h,
                            {
                              row,
                              column
                            }
                          )
                        }
                      </td>
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
