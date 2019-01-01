<template>
  <div class="w-input">
    <input 
      :placeholder="placeholder"  
      :value='value'
      :type='type'
      :disabled='disabled'
      v-model="model"
      class="w-input--core"
      @change='changeHandler'
      @blur="blurHandler"
      @focus="focusHandler"
    > 
  </div>
</template>
<script>
export default {
  name: 'WInput',
  props: {
    placeholder: String,
    value: [String,Number],
    type: String,
    disabled: Boolean,
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input',val)
      }
    }
  },
  methods: {
    changeHandler(evt) {
      this.$emit('change',evt.target.value)
    },

    blurHandler(evt) {
      this.$emit('blur',evt)
    },

    focusHandler(evt) {
      this.$emit('focus',evt)
    },

  }
}
</script>
