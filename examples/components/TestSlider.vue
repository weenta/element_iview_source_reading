<template>
  <div class="test-slider">
    <p>value: {{ value }}</p>
    <div class="wrapper">
      <w-slider v-model="value"/>
    </div>
    <div class="wrapper2">
      <p>{{ value2 }}</p>
      <w-slider v-model='value2' />
    </div>
    <div class="wrapper3">
      <p>{{ value3 }}</p>
      <w-slider v-model='value3' @change="changeHandler"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 10,
      value2: 0,
      value3: 15,
    }
  },
  methods: {
    changeHandler(val) {
      console.log('changed',val)
    }
  }
}
</script>
<style scoped>
.test-slider {
  width: 1000px;
  height: 1200px;
  position: relative;
}
.wrapper {
  width: 400px;
}
.wrapper2 {
  background: #f0f1f7;
  margin-left: 100px;
  width: 400px;
}
.wrapper3 {
  background: aquamarine;
  margin-left: 100px;
  width: 400px;
  height: 200px;
  position: fixed;
  top: 300px;
  left: 200px;
  padding:0 50px;
}
</style>

