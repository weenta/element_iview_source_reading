<template>
  <div class="w-select">
    <input 
      :placeholder="placeholder"
      v-model="selectedLabel" 
      class="w-select--input"
      readonly
      @focus='focusHandler'
      @blur='blurHandler'
    >
    <i :class="['w-select--icon',{
      'is-focused': isFocused
    }]"/>
    <transition name="el-zoom-in-top">
      <ul 
        v-show='isFocused' 
        class="w-options-wrapper"
      >
        <slot/>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'WSelect',
  props: {
    value: String,
  },
  provide() {
    return {
      selected: this
    }
  },

  data() {
    return {
      placeholder: '请选择',
      isFocused: false,
      selectedLabel: ''
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('input',newVal)
      }
    }
  },
 
  created() {
    this.$on('handleSelect',function([label,value]) {
      this.selectedLabel = label
      this.model = value
      this.$emit('change',value)
    })
  },
  mounted() {
    if (this.value) this.initSelectedLabel()
  },

  methods: {
    initSelectedLabel() {
      let value = this.value
      let children = this.$children.filter(child => value == child.value)
      this.selectedLabel = children[0].label
    },

    focusHandler() {
      this.isFocused = true
    },

    blurHandler() {
      setTimeout(() => {
        this.isFocused = false
      }, 200)
    }
  },
  
}
</script>
