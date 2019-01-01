<template>
  <label class="w-check-box">
    <input v-model='model' :value='label' type="checkbox" class="w-check-box--origin">
    <span :class="['w-check-box--core',isChecked ? 'is-checked' : '']" /> 
    <span class="w-check--label">{{ label }}</span>
  </label>
</template>
<script>
export default {
  name: 'TCheckbox',
  componentName: 'TCheckbox',
  props: {
    label: String,
    value: {},
  },
 
  computed: {
    isGroup() {
      return this.$parent.$options.name === 'TCheckboxGroup'
    },

    model: {
      get() {
        if (this.isGroup) {
          return this.$parent.value
        } else {
          return this.value
        }
      },
      set(newVal) {
        if (this.isGroup) {
          // dispatch change
          let parent = this.$parent
          parent.$emit.apply(parent, ['input'].concat([newVal]))
        } else {
          this.$emit('input',newVal)
        }
      }
    },

    isChecked() {
      if (this.isGroup) {
        return this.model.indexOf(this.label) > -1
      } else {
        return this.model
      }
    }
  }
  
}
</script>
