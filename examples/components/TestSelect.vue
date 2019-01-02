<template>
  <div class="test-select">
    <p>selectedValue: {{ value }}</p>
    <w-select v-model='value' @change="changeHandler">
      <w-option label='label-1' value='1'/>
      <w-option label='label-2' value='2'/>
      <w-option label='label-3' value='3'/>
    </w-select>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      value: '2'
    }
  },

  methods: {
    changeHandler(val) {
      console.log('changeHandler',val)
    }
  }
}
</script>
