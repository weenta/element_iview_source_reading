<template>
  <ul class="home">
    <!-- eslint-disable-next-line -->
    <li v-for='(item,idx) in componentItems' :key="idx" class="home-item" @click="jump(item.path)">{{ item.name }}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      
      componentItems: [
        {
          name: 'button',
          path: '/testbutton'
        },
        {
          name: 'notification',
          path: '/testnotification'
        },
        {
          name: 'loading',
          path: '/testloading'
        },
        {
          name: 'popover',
          path: '/testpopover'
        },
        {
          name: 'tool-tips',
          path: '/testtips'
        },
        {
          name: 'test-jsx',
          path: '/testjsx'
        },
      ]
    }
  },
  methods: {
    jump(path) {
      this.$router.push({path})
    }
  }
}
</script>

<style scoped>
.home-item {
  padding: 5px 0;
  cursor: pointer;
}
</style>

