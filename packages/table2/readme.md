# TTable TTableColumn

- `<thead>` defines a set of rows defining the head of the columns of the table
- `<tr>` defines a row of cells in a table.
- `<th>` defines a cell as header of a group of table cells.
- `<td>` defines a cell of a table that contains data
- `hasOwnProperty` 只检测实例属性, `in` 检测实例属性和原型属性
- `this._l` `Vue.prototype._l = renderList`

- `vm.$scopedSlots`
> 用来访问作用域插槽。对于包括 默认 slot 在内的每一个插槽，该对象都包含一个返回相应 VNode 的函数。    
> vm.$scopedSlots 在使用渲染函数开发一个组件时特别有用。
- `vm.$parent` 父实例，如果当前实例有的话
- `vm.$watch( expOrFn, callback, [options] )`
```js
// immediate
// 在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：
vm.$watch('a', callback, {
  immediate: true
})
// 立即以 `a` 的当前值触发回调

```

