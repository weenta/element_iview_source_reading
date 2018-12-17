<template>
  <ul class="test-button">
    <li class="button-item">
      <p>button types</p>
      <w-button @click="clickHandler">default</w-button>
      <w-button type="primary">primary</w-button>
      <w-button type="success">success</w-button>
      <w-button type="info">info</w-button>
      <w-button type="warning">warning</w-button>
      <w-button type="danger">danger</w-button>
    </li>
    <li>
      <p>disabled</p>
      <w-button disabled @click="clickHandler">default</w-button>
      <w-button type="primary" disabled>primary</w-button>
      <w-button type="success" disabled>success</w-button>
      <w-button type="info" disabled>info</w-button>
      <w-button type="warning" disabled>warning</w-button>
      <w-button type="danger" disabled>danger</w-button>
    </li>
    <li class="button-item">
      <p>plain button</p>
      <w-button plain @click="clickHandler">default</w-button>
      <w-button plain type="primary">primary</w-button>
      <w-button plain type="success">success</w-button>
      <w-button plain type="info">info</w-button>
      <w-button plain type="warning">warning</w-button>
      <w-button plain type="danger">danger</w-button>
    </li>
    <li class="button-item">
      <p>plain button disabled</p>
      <w-button plain disabled @click="clickHandler">default</w-button>
      <w-button plain disabled type="primary">primary</w-button>
      <w-button plain disabled type="success">success</w-button>
      <w-button plain disabled type="info">info</w-button>
      <w-button plain disabled type="warning">warning</w-button>
      <w-button plain disabled type="danger">danger</w-button>
    </li>
    <li class="button-item">
      <p>round button</p>
      <w-button round @click="clickHandler">default</w-button>
      <w-button round type="primary">primary</w-button>
      <w-button round type="success">success</w-button>
      <w-button round type="info">info</w-button>
      <w-button round type="warning">warning</w-button>
      <w-button round type="danger">danger</w-button>
    </li>
    <li class="button-item">
      <p>icon button</p>
      <w-button icon="el-icon-edit" @click="clickHandler"/>
      <w-button icon="el-icon-share" type="primary"/>
      <w-button icon="el-icon-delete" type="success"/>
      <w-button icon="el-icon-search" type="info" circle/>
      <w-button icon="el-icon-message" type="warning" round/>
      <w-button icon="el-icon-service" type="danger">service</w-button>
    </li>
    <li class="button-item">
      <p>button size</p>
      <w-button :size="btnSize" icon="el-icon-edit"/>
      <w-button :size="btnSize" icon="el-icon-share" type="primary"/>
      <w-button :size="btnSize" icon="el-icon-delete" type="success"/>
      <w-button :size="btnSize" icon="el-icon-search" type="info" circle/>
      <w-button :size="btnSize" icon="el-icon-message" type="warning" round/>
      <w-button :size="btnSize" icon="el-icon-service" type="danger">service</w-button>
      <div>
        <input id="medium" v-model="btnSize" type="radio" value="medium">
        <label for="medium">medium</label>
        <input id="small" v-model="btnSize" type="radio" value="small">
        <label for="small">small</label>
        <input id="mini" v-model="btnSize" type="radio" value="mini">
        <label for="mini">mini</label>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      btnSize: 'mini',
    }
  },
  
  methods: {

    clickHandler(e) {
      console.log('确定')
      console.log('确定')
    }
  },
}
</script>

