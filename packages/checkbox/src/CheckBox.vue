<template>
  <label class="w-check-box">
    <input v-model='model' :value='value' type="checkbox" class="w-check-box--origin" @change="handleChange">  
    <!-- <span :class="['w-check-box--core',isChecked ? 'is-checked' : '']" /> -->
    <span :class="['w-check-box--core']"/>
    <span class="w-check--label">{{ label }}</span>
  </label>

</template>

<script>
export default {
  name: 'WCheckBox',
  props: {
    label: String,
    value: {},
  },
  data() {
    return {
      checkedLabel: '',
      
    }
  },
 
  computed: {
    isGroup() {
      return this.$parent.$options.name === 'WCheckBoxGroup'
    },

    model: {
      get() {
        if (this.isGroup) {
          return this.$parent.value
        } else {
          return this.value
        }
      },
      set(val) {
        if (this.isGroup) {
          let parent = this.$parent
          parent.$emit.apply(parent, ['input'].concat([val]))
        } else {
          this.$emit('input', val)
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

  },
  watch: {
    
  },
  created() {
    
  },
  mounted() {
    if (this.isGroup) {
      let values = this.$parent.value
      if (values.length > 0) {
        values.forEach(value=>{
          if (value === this.label) {
            this.$el.children[0].checked = true
          }
        })
      }
    }
  },
  methods: {
    handleChange(evt) {
      let target = evt.target
      console.log(this.label,this.isChecked)
    }
  }
  
}
</script>

