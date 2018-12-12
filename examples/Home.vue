<template>
  <ul class="home">
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
        }
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
  margin: 5px 0;
  cursor: pointer;
}
</style>

