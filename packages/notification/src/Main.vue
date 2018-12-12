<template>
  <transition name="el-notification-fade">
    <div 
      :class="['w-notification',horizontalClass]"
      :style='positionStyle'
    >
      <div class="w-notification__content">
        <slot>{{ message }}</slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'WNotification',
  data() {
    return {
      message: '',
      position: 'top-right',
    }
  },
  computed: {
    // horizontal位置
    horizontalClass() {
      return this.position.indexOf('right') > -1 ? 'right' : 'left'
    },

    // vertical位置
    positionStyle() {
      return {
        // top: '20px'
        top: `${ this.verticalOffset }px`
      }
    }
  },
  mounted() {
    console.log('mounted',this.verticalOffset)
    console.log(this)

  }
}
</script>

