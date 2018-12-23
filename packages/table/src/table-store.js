const TableStore = function(table,initState = {}) {
  if (!table) throw new Error('table is required')

  this.table = table

  // 
  this.states = {
    rowKey: null,
    _columns: [],
    originColumns: [],
    columns: [],  
    data: null,
    tableWidth: '100%',
  }
}

TableStore.prototype.mutations = {
  setData(states,data) {
    states._data = data
    states.data = data
  },
  
  insertColumn(states, column, index, parent) {
    let array = states._columns
    if (parent) {
      array = parent.children
      if (!array) array = parent.children = []
    }

    if (typeof index !== 'undefined') {
      array.splice(index, 0, column)
    } else {
      array.push(column)
    }
    this.updateColumns()
  },
}

TableStore.prototype.updateColumns = function() {
  const states = this.states
  const _columns = states._columns || []
  states.columns = [].concat(_columns)
}

TableStore.prototype.commit = function(name, ...args) {
  const mutations = this.mutations
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args))
  } else {
    throw new Error(`Action not found: ${name}`)
  }
}
export default TableStore