# element-ui源码阅读
v2.4.1

## Notes


## 组件
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
- 全局api 
```js
  // https://cn.vuejs.org/v2/api/#Vue-extend
  Vue.extend(options)

```



## todo
- loading

Notification