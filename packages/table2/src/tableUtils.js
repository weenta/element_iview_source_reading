export const computedWidth = (columns)=>{
  
}

export const computedTableWidth = (columns,el)=>{
  let wrapperWidth = el.clientWidth
  // console.log(el.offsetWidth)
  // console.log(el.clientWidth)
  
  let tableWidth = 0
  columns.forEach(column => {
    let width = column.minWidth ? column.minWidth : column.width
    tableWidth += Number(width)
  })
  return Math.max(tableWidth,wrapperWidth)
}