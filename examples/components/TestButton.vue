<template>
  <ul class='test-button'>
    <li class="button-item">
      <p>button types</p>
      <w-button @click='clickHandler'>default</w-button>
      <w-button type='primary'>primary</w-button>
      <w-button type='success'>success</w-button>
      <w-button type='info'>info</w-button>
      <w-button type='warning'>warning</w-button>
      <w-button type='danger'>danger</w-button>
    </li>
    <li>
      <p>disabled</p>
      <w-button disabled @click='clickHandler'>default</w-button>
      <w-button type='primary' disabled>primary</w-button>
      <w-button type='success' disabled>success</w-button>
      <w-button type='info' disabled>info</w-button>
      <w-button type='warning' disabled>warning</w-button>
      <w-button type='danger' disabled>danger</w-button>
    </li>
    <li class="button-item">
      <p>plain button</p>
      <w-button plain @click='clickHandler'>default</w-button>
      <w-button plain type='primary'>primary</w-button>
      <w-button plain type='success'>success</w-button>
      <w-button plain type='info'>info</w-button>
      <w-button plain type='warning'>warning</w-button>
      <w-button plain type='danger'>danger</w-button>
    </li>
  </ul>
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

