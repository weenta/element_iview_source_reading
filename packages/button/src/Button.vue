<template>
  <button
    :type='type'
    :disabled='disabled'
    :class="[
      type ? 'w-button--' + type : '',
      {
        'is-disabled': buttonDisabled,
        'is-plain': plain
      }
    ]"
    class="w-button"
    @click='clickHandler'>
    <span><slot>wbutton</slot></span>
  </button>
</template>
<script>
export default {
  name: 'WButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    plain: Boolean,
  },

  computed: {
    buttonDisabled() {
      return this.disabled
    }
  },

  methods: {
    clickHandler(evt) {
      this.$emit('click',evt)
    }
  }
}
</script>

