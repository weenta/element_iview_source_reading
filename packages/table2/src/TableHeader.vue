<script>

export default {
  name: 'TTableHeader',
  props: {
    store: {
      required: true,
    }
  },

  data() {
    return {

    }
  },

  render(h) {
    const columns = this.store.states.columns
    return (
      <thead>
        <tr
          style='display:flex;flex-direction:row;'
        >
          {
            this._l(columns,(column)=>{
              let minWidth = column.minWidth
              let width = minWidth ? 'atuo' : column.width + 'px'
              let style = {width: width}
              if (minWidth) {
                style['flex'] = 1
              }
              return (
                <th
                  style={style}
                >
                  {
                    column.label
                  }
                </th>
              )
            })
          }
        </tr>
      </thead>
    )
  }

}
</script>

<style scoped>
th {
  padding: 0 10px;
}
</style>

