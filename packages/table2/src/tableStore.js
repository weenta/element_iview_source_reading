const TableStore = function(table) {
  this.table = table

  this.states = {
    columns: [],
    data: null,
    width: null,
    minWidth: null,
  }
}

TableStore.prototype.mutations = {
  
  setData(states,data) {
    states.data = data
  }, 

  // insert columns when tableColumn inited
  insertColumn(states,column) {
    states.columns.push(column)
  },

}

TableStore.prototype.updateColumns = function() {
  const states = this.states
  const _columns = states._columns || []
  states.columns = [].concat(_columns)
}

TableStore.prototype.commit = function(name,...args) {
  const mutations = this.mutations
  if (mutations[name]) {
    mutations[name].apply(this,[this.states].concat(args))
  } else {
    throw new Error(`Action not found ${name}`)
  }
}
export default TableStore