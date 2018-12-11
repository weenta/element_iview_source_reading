<template>
  <button
    :type='type'
    :disabled='disabled'
    :class="[
      type ? 'w-button--' + type : '',
      buttonSize ? 'w-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      }
    ]"
    class="w-button"
    @click='clickHandler'>
    <i v-if="icon" :class="icon"/>
    <span><slot/></span>
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
    round: Boolean,
    icon: {
      type: String,
      default: ''
    },
    circle: Boolean,
    size: String,
  },

  computed: {
    buttonDisabled() {
      return this.disabled
    },
    buttonSize() {
      // return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      return this.size
    }
  },

  methods: {
    clickHandler(evt) {
      this.$emit('click',evt)
    }
  }
}
</script>

