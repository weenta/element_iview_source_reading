<template>
  <div class="test-loading">
    <w-button @click="toggleLoading">v-loading={{ loading }}</w-button>
    <div v-loading="loading" class="box1">box1</div>
    <div v-loading="loading" class="box2">box2</div>
    <div v-loading="loading" class="box3">box3</div>
    <w-button v-loading='loading' >button loading</w-button>
    <w-button v-loading='loading' type='success'>button loading</w-button>
    <w-button v-loading='loading' type='danger'>button loading</w-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading
    }
  }
}
</script>

<style scoped>
.box3,
.box2,
.box1 {
  width: 300px;
  height: 300px;
  margin: 20px 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.box1 {
  background: red;
}

.box2 {
  background: green;
  position: absolute;
  top: 500px;
  left: 0;
}
.box3 {
  background: cyan;
  position: fixed;
  top: 500px;
  left: 400px;
}
</style>

