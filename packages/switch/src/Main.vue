<template>
  <div class="w-switch" @click="toggleCheck">
    <input v-model="activeModel" class="w-switch--input" type="checkbox">
    <span 
      :class="[
        'w-switch--core',
        activeModel ? 'w-switch--core-on' : 'w-switch--core-off'
      ]"
      :style="{'background-color': active?activeColor:inactiveColor}"
    />
  </div>
</template>
<script>
export default {
  name: 'WSwitch',
  model: {
    prop: 'active',
    event: 'change'
  },
  props: {
    active: Boolean,
    activeColor: String,
    inactiveColor: String,
  },
  data() {
    return {
      activeModel: this.active
    }
  },
  methods: {
    toggleCheck() {
      this.activeModel = !this.activeModel
      this.$emit('change',this.activeModel)
    }
  }
}
</script>
