import Vue from 'vue'
import Main from './Main.vue'

const NotificationConstructor = Vue.extend(Main)

let instance
let instances = []
let seed = 1

const Notification = function(options) {
  options = options || {}
  const id = 'notification_' + (seed++)
  const position = options.position || 'top-right'

  instance = new NotificationConstructor({
    data: options
  })
  instance.id = id
  // 在文档之外渲染并且随后挂载
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visiable = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = 1000

  // 垂直位置
  let verticalOffset = options.offset || 0
  instances.filter(item => item.position === position).forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  return instance.vm
}

export default Notification