<template>
  <div class="w-form">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'WForm',

  props: {
    'labelWidth': [String,Number],
    'labelPosition': String,
    rules: [Object,Array],
    value: Object,
  },
  data() {
    return {
      valid: {}
    }
  },
  
  mounted() {
    this.$on('validate',function(prop,val) {
      this.valid[prop] = val
    })

    this.validate = ()=>{
      let needValidateChildren = this.$children.filter(child=>child.rules)
      needValidateChildren.forEach(child=>{
        child.validate()
      })

      let valid = this.valid
      let isValid = true
      for (let key in this.valid) {
        if (!valid[key]) isValid = false
      }
      return isValid
    }
  }
}
</script>

