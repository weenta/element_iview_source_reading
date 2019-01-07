<template>
  <div class="w-form--item">
    <span :style="{width:width,'text-align':textAlign}" class="form-item-label" ><i v-if='rules'>*</i>{{ label }}</span>
    <div class="form-item-content">
      <slot/>
      <transition name="el-zoom-in-top">
        <p v-if='invalidateMsg' class="form-item-invalidate-msg">{{ invalidateMsg }}</p>
      </transition>
    </div>
   
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'WFormItem',
  props: {
    label: String,
    prop: String,
  },
  data() {
    return {
      width: '',
      textAlign: 'left',
      invalidateMsg: '',
      rules: null
    }
  },
  computed: {
    fieldValue: {
      cache: false,
      get() {
        return this.$parent.value[this.prop]
      }
    }
  },
  mounted() {
    this.width = this.$parent.labelWidth
    this.textAlign = this.$parent.labelPosition
    let rules = this.getRules()
    if (rules) {
      this.rules = rules
      this.$children[0].$on('blur',this.onFieldBlur)
      this.$children[0].$on('change',this.onFieldBlur)
    }

  },
  methods: {
    
    onFieldBlur() {
      this.validate()
    },

    validate() {
      let descriptor = {}
      let source = {}
      let pass = true
      this.rules.forEach(rule=>{
        descriptor[this.prop] = rule
        source[this.prop] = this.fieldValue
        var validator = new AsyncValidator(descriptor)
        validator.validate(source, (errors, fields) => {
          if (errors) {
            this.invalidateMsg = errors[0].message
            pass = false
          } 
        })
        this.$parent.$emit('validate',this.prop,pass)
        if (pass) {
          this.invalidateMsg = ''
        }
      })
      
    },

    getRules() {
      let rules = this.$parent.rules
      if (rules[this.prop]) {
        return rules[this.prop]
      }
      return null
    }

  }

}
</script>

