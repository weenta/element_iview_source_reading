<template>
  <div class="w-check-box-group" @change="changeHandler">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WCheckBoxGroup',
  props: {
    value: Array,
  },
  computed: {
    model: {
      get() {

        return this.value
      },
      set(newVal) {
        //this.$emit('input',newVal)
      }
    }
  },
  methods: {
    changeHandler() {
      // let checkedChildren = this.$children.filter(child=>{
      //   let inputNode = child.$el.children[0]
      //   return inputNode.checked
      // })
      // let checkedLabel = checkedChildren.map(child=>child.label)
      // this.$emit('change',checkedLabel)
      // this.model = checkedLabel
      // console.log('group-change',checkedChildren)
    }
  }
}
</script>
