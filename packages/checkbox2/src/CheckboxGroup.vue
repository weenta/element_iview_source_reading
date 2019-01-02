<template>
  <div class="t-checkbox-group">
    <slot />
  </div>
</template>
<script>

export default {
  name: 'TCheckboxGroup',
  componentName: 'TCheckboxGroup',
  props: {
    value: {},
  },
  
  watch: {
    value(val) {
      this.$emit('change',val)
    }
  },
  created() {
    
  },
}
</script>
