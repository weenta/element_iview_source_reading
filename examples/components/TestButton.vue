<template>
  <div class='test-button'>
    <w-button @click='clickHandler'>默认按钮</w-button>
    <w-button type='primary'>primary</w-button>
    <w-button type='success'>success</w-button>
    <w-button type='info'>info</w-button>
    <w-button type='warning'>warning</w-button>
    <w-button type='danger'>danger</w-button>
  </div>
</template>
<script>
export default {
  methods: {
    clickHandler(e) {
      console.log('确定')
    }
  }
}
</script>

