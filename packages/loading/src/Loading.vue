<template>
  <transition name="el-loading-fade" @after-leave='handleAfterLeave'>
    <div 
      v-show="visible"
      class="w-loading">
      <i class="iconfont icon-spinner icon-spinner-rotate"/>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'WLoading',
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    // transition after-leave事件
    // 发送实例事件，（instance.$on()接收）instance.$once()接收
    handleAfterLeave() {
      this.$emit('after-leave')
    }
  }
}
</script>

