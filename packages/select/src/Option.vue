<template>
  <li 
    :class="['w-select--option',{
      selected: isSelected
    }]" 
    @click.stop="clickHandler"
  >
    <p>{{ label }}</p>
  </li>
</template>

<script>
export default {
  name: 'WOption',
  inject: ['selected'],
  props: {
    label: String,
    value: [String,Number],
  },

  computed: {
    isSelected() {
      return this.selected.value === this.value
    }
  },

  methods: {
    clickHandler() {
      let parent = this.$parent
      this.$emit.call(parent,'handleSelect',[this.label,this.value])
    }
  },
}
</script>
