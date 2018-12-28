import Vue from 'vue'
import Main from './Main.vue'

const MessageBoxConstructior = Vue.extend(Main)
let instance

const MessageBox = function(options) {
  instance = new MessageBoxConstructior({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  return instance.vm
}

MessageBox.confirm = function(options = {}) {
  MessageBox(options)
  return new Promise((resolve,reject)=>{
    instance.defaultCallback = function(type) {
      MessageBox.close()
      if (type === 'CONFIRM') {
        resolve()
      } else {
        reject()
      }
    }
  })
}

MessageBox.close = function() {
  instance.vm.visible = false
}
export default MessageBox
