import Vue from 'vue'
import { getStyle,addClass,removeClass } from '../utils/dom'
import Loading from './src/Loading'

const Mask = Vue.extend(Loading)
const loadingDirective = {}

const toggleLoading = (el,binding)=>{
  if (binding.value) {
    //在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
    Vue.nextTick(()=>{
      // 获取挂载点元素position属性
      el.originalPosition = getStyle(el,'position')
      // 插入dom
      insertDom(el,el,binding)
    })
  } else {
    // 接收实例事件
    el.instance.$once('after-leave',()=>{
      el.domVisible = false
      removeClass(el,'w-loading-parent--relative')
    })
    el.instance.visible = false
  }
}

// 插入dom
const insertDom = (parent,el)=> {
  if (!el.domVisible && getStyle(el,'display') !== 'none' && getStyle(el,'visibility') !== 'hidden') {

    if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
      addClass(parent, 'w-loading-parent--relative')
    }

    parent.appendChild(el.mask)
    Vue.nextTick(()=>{
      el.instance.visible = true
    })
    el.domVisible = true
  } 
}

loadingDirective.install = Vue => {
  Vue.directive('loading',{
    // el: 指令所绑定的元素，可以用来直接操作 DOM 。
    bind: function (el,binding) {
      const mask = new Mask({
        el: document.createElement('div'),
      })
      el.instance = mask
      el.mask = mask.$el
      binding.value && toggleLoading(el,binding) 
    },
    inserted: function () {},
    update: function (el,binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el,binding)
      }
    },
    componentUpdated: function () {},
    unbind: function () {}
  })
}

export default loadingDirective
