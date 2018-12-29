<template>
  <label
    :class="['w-radio', label === value ? 'is-checked' :'']"
  >
    <input 
      :value='label' 
      v-model="model"
      class="w-radio-origin" 
      type='radio'
    >
    <span class="w-radio--inner "/>
    <span class="w-radio--label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'WRadio',
  props: {
    label: String,
    value: String,
  },
  data() {
    return {
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
  }
}
</script>

