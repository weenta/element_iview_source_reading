# vue第三方ui库源码阅读
> element-ui v2.4.1      
> iview todo

## Element-ui
### 组件
#### WButton
button组件
- 全局api
```js
// 注册或获取全局组件。注册还会自动使用给定的id设置组件的名称
Vue.component( id, [definition] )

```
- 事件传递
```js
clickHandler(evt) {
  this.$emit('click',evt)
}
```

- disabled
props: disabled 或者     
inject注入的elForms disabled      
或者 loading
[provide/inject](https://cn.vuejs.org/v2/api/#provide-inject)
```js
// 源码
buttonDisabled() {
  return this.disabled || (this.elForm || {}).disabled;
}

```

#### WNotification
> document.body插入子元素，动画结束后销毁实例
- 全局api 
```js
  // https://cn.vuejs.org/v2/api/#Vue-extend
  Vue.extend(options)

```

- 实例方法 `vm.$mount( [elementOrSelector] )`    
>  手动地挂载一个未挂载的实例,返回实例自身        
```js

  // verticalOffset属性需要放在`instance.$mount()`方法之前，否则实例中无法立即获取到（created和mounted生命周期中）
  // 但是element源码中放在之后的？？？
  let verticalOffset = options.offset || 0
  instances.filter(item => item.position === position).forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset

  // vm.$mount() 手动地挂载一个未挂载的实例,返回实例自身,
  // 在文档之外渲染并且随后手动挂载
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el

  instances.push(instance)
  return instance.vm

```

- 实例方法 `vm.$destroy()`
> 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。


- 事件监听器-动画监听`transitionend` `animationend`
> Vue 为了知道过渡的完成，必须设置相应的事件监听器。它可以是 transitionend 或 animationend ，这取决于给元素应用的 CSS 规则。如果你使用其中任何一种，Vue 能自动识别类型并设置监听;
https://cn.vuejs.org/v2/guide/transitions.html#%E5%90%8C%E6%97%B6%E4%BD%BF%E7%94%A8%E8%BF%87%E6%B8%A1%E5%92%8C%E5%8A%A8%E7%94%BB
```js
  // el添加动画监听，动画结束后触发销毁实例
  this.$el.addEventListener('transitionend',this.destroyElement)

  // 销毁实例
  destroyElement() {
    this.$el.removeEventListener('transitioned',this.destroyElement)
    this.$destroy(true)
    this.$el.parentNode.removeChild(this.$el)
  },

  // transition ->添加transitionend监听
  // animation -> 添加animationend监听

```

#### WLoading
> 插入子元素后并不销毁，而是设置`display:none`

- 全局api`Vue.extend( options )`
- 全局api `Vue.directive( id, [definition] )`
- 全局api `Vue.nextTick( [callback, context] )`
- transition事件 `after-leave`
- 实例事件 `vm.$on( event, callback)` `vm.$once( event, callback)`

#### WToolTip
- 使用render函数 
> Vue 推荐在绝大多数情况下使用 template 来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力，这时你可以用 render 函数，它比 template 更接近编译器。
- TODO 

#### WPopover
- `element.offsetParent`只读，返回一个指向最近的包含该元素的定位元素（position不为static）
- `element.offsetXxx`在transition动画完成前无法取值，使用`window.getComputedStyle(element)`替代获取宽高
- TODO container fixed情况下 设置container padding/margin值 导致错位

#### WPagenation

#### TTable
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

#### WMessageBox
- 实例方法 `vm.$mount()`



## TODO
messageBox


