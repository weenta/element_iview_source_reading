<template>
  <transition name="el-notification-fade">
    <div 
      v-show='visible'
      :class="['w-notification',horizontalClass]"
      :style='positionStyle'
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
    > 
      <i
        v-if="type"
        :class="[ typeClass ]"
        class="el-notification__icon"/>
      <div :class="{'is-with-icon': typeClass}" class="w-notification-content">
        <h2 class="w-notification-title">{{ title }}</h2>
        <p class="w-notification-content">{{ message }}</p>
      </div>
      <div
        class="w-notification-btn-close el-icon-close"
        @click.stop="close"/>
    </div>
  </transition>
</template>
<script>
let typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}
export default {
  name: 'Notification',
  data() {
    return {
      visible: false,
      title: '',
      message: '',
      position: 'top-right',
      duration: 4500,
      closed: false,
      type: ''
    }
  },
  computed: {
    typeClass() {
      return this.type && typeMap[this.type] ? `el-icon-${ typeMap[this.type] }` : ''
    },

    // horizontal位置
    horizontalClass() {
      return this.position.indexOf('right') > -1 ? 'right' : 'left'
    },

    // vertical位置
    positionStyle() {
      return {
        top: `${ this.verticalOffset }px`
      }
    }
  },

  watch: {
    // 监听instance关闭
    closed(newVal) {
      if (newVal) {
        this.visible = false
        // Vue 为了知道过渡的完成，必须设置相应的事件监听器。动画完成后销毁实例
        this.$el.addEventListener('transitionend',this.destroyElement)
      }
    }
  },

  mounted() {
    // 定时关闭
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) this.close()
      }, this.duration)
    }
    document.addEventListener('keydown',this.keydown)
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown)
  },

  methods: {
    // esc 关闭notification
    keydown(e) {
      if ((e.keyCode === 27) && !this.closed) this.close()
    },

    // 销毁实例
    destroyElement() {
      this.$el.removeEventListener('transitioned',this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },

    clearTimer() {
      clearTimeout(this.timer)
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) this.close()
        }, this.duration)
      }
    },

    close() {
      this.closed = true
      this.onClose()
    }
  },
}
</script>

