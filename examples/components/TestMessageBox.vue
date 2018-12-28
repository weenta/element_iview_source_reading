<template>
  <ul>
    <li>
      <w-button size='small' @click="clickHandler()">default</w-button>
    </li>
    <li>
      <w-button size='small' @click="clickHandler('success')">success</w-button>
    </li>
    <li>
      <w-button size='small' @click="clickHandler('warning')">warning</w-button>
    </li>
    <li>
      <w-button size='small' @click="clickHandler('info')">info</w-button>
    </li>
    <li>
      <w-button size='small' @click="clickHandler('error')">error</w-button>
    </li>
    
  </ul>
</template>
<script>
export default {
  methods: {
    clickHandler(type) {
      let content = type ? ('this is ' + type + ' type') : 'this is default type'
      this.$confirm({
        title: 'title',
        content: content,
        type: type
      }).then(()=>{
        console.log('确定')
      }).catch(()=>{
        console.log('取消')
      })
    },
  }
}
</script>
<style scoped>
li {
  margin: 10px;
}
</style>
