<template>
  <transition name="msgbox-fade">
    <div v-show='visible' class="w-message-box-wrapper" @click="clickHandler('CANCEL')">
      <div class="w-message-box" @click.stop>
        <div class="w-message-box__header">{{ title }}</div>
        <div class="w-message-box__content">
          <i
            v-if="type"
            :class="[ typeClass ]"
            class="el-notification__icon"/>
          <span class="w-message-box__content_msg">{{ content }}</span>
        </div>
        <div class="w-message-box__footer">
          <w-button v-if='showCancelBtn' size='mini' @click="clickHandler('CANCEL')">取消</w-button>
          <w-button ref="confirmBtn" size='mini' type='primary' @click="clickHandler('CONFIRM')">确定</w-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}
export default {
  name: 'WMessageBox',
  data() {
    return {
      content: '',
      title: '',
      type: '',
      showCancelBtn: true,
      visible: false, /* 激活动画 */
    }
  },
  
  computed: {
    typeClass() {
      return this.type && typeMap[this.type] ? `el-icon-${ typeMap[this.type] }` : ''
    }
  },

  watch: {
    visible(newVal) {
      if (newVal) {
        this.$el.addEventListener('animationend',this.destroyElement)
        // 按钮获取焦点
        this.$nextTick(() => {
          this.$refs.confirmBtn.$el.focus()
        })
      }
    }
  },
  
  mounted() {
    document.addEventListener('keydown',this.keydown)
  },

  methods: {
    keydown(e) {
      if (e.keyCode === 27) {
        this.clickHandler('CANCEL')
      }
    },

    destroyElement() {
      if (!this.visible) {
        this.$el.parentNode.removeChild(this.$el)
        document.removeEventListener('keydown',this.keydown)
      }
    },

    clickHandler(type) {
      this.defaultCallback(type)
    }
  }
}
</script>

