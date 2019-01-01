<template>
  <div>
    <div class="box1">
      <p>value: {{ value1 }}</p>
      <w-input v-model='value1' placeholder='holder from box1'/>
    </div>
    <div class="box2">
      <w-input style="width:300px;" @input='inputHandler' @focus="focusHandler"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: ''
    }
  },
  methods: {
    inputHandler(val) {
      console.log(val)
    },

    focusHandler(val) {
      console.log('focus')
    }
  }
}
</script>

<style scoped>
.box1 {
  width:200px;
  padding: 10px;
  /* background: #abcedf; */
  margin: 20px 0;
}
</style>
