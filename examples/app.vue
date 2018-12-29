<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
    title() {
      return this.$route.name ? this.$route.name : 'element-ui源码阅读'
    }
  }
}
</script>
<style scoped>
h2 {
  text-align: center;
}
#app {
  background: #f1f1f1;
  padding-bottom: 100px;
  padding-left: 10px;
}
</style>

