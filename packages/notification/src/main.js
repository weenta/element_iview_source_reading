import Vue from 'vue'
import Main from './Main.vue'

const NotificationConstructor = Vue.extend(Main)

let instance
let instances = []
let seed = 1

const Notification = function(options) {
  options = options || {}
  const id = 'notification_' + seed++
  const position = options.position || 'top-right'

  options.onClose = function() {
    Notification.close(id)
  }

  instance = new NotificationConstructor({
    data: options
  })
  instance.id = id
  // verticalOffset需要放在`instance.$mount()`方法之前，否则 实例中获取不到 ？
  // 但是element源码中放在之后的
  let verticalOffset = options.offset || 0 
  instances.filter(item => item.position === position).forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset

  // vm.$mount() 手动地挂载一个未挂载的实例,返回实例自身
  // 在文档之外渲染并且随后手动挂载
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instances.push(instance)

  instance.vm.verticalOffset2 = verticalOffset
  return instance.vm
}

// 关闭 未实现关闭时的回调函数（onClose）
Notification.close = function (id) {
  let index = -1  
  const len = instances.length
  const instance = instances.filter((instance,i)=>{
    if (instance.id === id) {
      index = i
      return true
    }
    return false
  })[0]
  if (!instance) return

  // 更新 instances
  instances.splice(index,1)
  if (len <= 1) return

  // 更新后面instance的位置
  const position = instance.position
  const removeHeight = instance.dom.offsetHeight
  for (let i = index; i < len - 1; i++) {
    if (instance.position === position) {
      // 仅top位置
      instances[i].dom.style.top = parseInt(instances[i].dom.style.top,10) - removeHeight - 16 + 'px'
    }
  }
}
export default Notification
