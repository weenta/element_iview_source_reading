<template>
  <button
    :type='type'
    :class="[
      type ? 'w-button--' + type : '',
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

  },
  methods: {
    clickHandler(evt) {
      this.$emit('click',evt)
    }
  }
}
</script>

