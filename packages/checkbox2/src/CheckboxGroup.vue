<template>
  <div class="t-checkbox-group">
    <slot />
  </div>
</template>
<script>
import emtter from '../../utils/emitter'

export default {
  name: 'TCheckboxGroup',
  componentName: 'TCheckboxGroup',
  mixins: [emtter],
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
