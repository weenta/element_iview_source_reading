<template>
  <div ref='slider' class="w-slider" @click="clickHandler">
    <div :style='{width:width}' class="w-slider--bar">
      <div 
        class="w-slider--bar--button"
        @click.stop
        @mousedown="onButtonDown"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'WSlider',
  props: {
    value: [Number,String]
  },
  data() {
    return {
      width: '',
      currentX: 0,
      startX: 0,
      dragging: false,
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input',val)
      }
    }
  },
  mounted() {
    this.initPosition()
  },
  methods: {
    clickHandler(evt) {
      this.setPosition(evt)
    },

    initPosition() {
      this.width = this.value + '%'
    },

    setPosition(evt) {
      let sliderLeft = this.$refs.slider.getBoundingClientRect().left
      let sliderWidth = this.$refs.slider.getBoundingClientRect().width
      let posPercent = Math.round((evt.clientX - sliderLeft) * 100 / sliderWidth)
      if (posPercent > 100 || posPercent < 0) return
      this.width = posPercent + '%'
      this.model = posPercent
    },

    onButtonDown() {
      window.addEventListener('mousemove', this.onDragging)
      window.addEventListener('mouseup',this.onDragEnd)
    },
   
    onDragging(evt) {
      this.setPosition(evt)
    },

    onDragEnd() {
      this.$emit('change',this.value)
      window.removeEventListener('mousemove',this.onDragging)
      window.removeEventListener('mouseup',this.onDragEnd)
    },
    
  }
}
</script>
