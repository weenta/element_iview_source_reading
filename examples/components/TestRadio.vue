<template>
  <div class="test-radio">
    <p>gender: {{ gender }}</p>
    <w-radio v-model='gender' label='男'/>
    <w-radio v-model="gender" label='女'/>
    <w-radio v-model="gender" label='保密'/>

  </div>
</template>
<script>
export default {
  data() {
    return {
      gender: '男',
      picked: ''
    }
  },
  watch: {
    gender(newVal) {
      console.log(newVal)
    }
  }
}
</script>

