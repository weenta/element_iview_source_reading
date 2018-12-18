<template>
  <span>
    <slot name='reference'/>
    <transition 
      name='fade-in-linear' 
      @after-leave="handleAfterLeave"
    >
      <div 
        v-show='visible'
        ref='popover'
        :style="popoverStyle"
        class="w-popover"
        @click.stop
      >
        {{ content }}
      </div>
    </transition>
  </span>
  
</template>

<script>
import { calculatePosition, getOuterSizes } from '../../utils/dom'
export default {
  name: 'WPopover',
  props: {
    content: {
      type: String,
      default: ' ',
    },
    trigger: {
      type: String,
      default: 'hover'
    }
  },
  data() {
    return {
      elm: null,
      pos: null,
      outsideSize: null,
      visible: false,
    }
  },
  computed: {
    // 计算popover位置
    popoverStyle() {
      if (this.elm && this.pos) {
        let pos = this.pos
        let outsideSize = this.outsideSize
        return `top:${pos.top - outsideSize.height - 8}px; left: ${pos.left + pos.width / 2 - outsideSize.width / 2}px; visibility:visible; position:${pos.position}`
      }
      return ''
    }
  },
  mounted() {
    this.outsideSize = getOuterSizes(this.$refs.popover)
    this.addReference()
    window.addEventListener('click',this.clickHandler)
  },
  
  methods: {
    clickHandler() {
      if (this.visible) {
        this.visible = false
      }
    },

    addReference() {
      let elm = this.$slots.reference[0].elm
      switch (this.trigger) {
        case 'hover':
          elm.addEventListener('mouseenter',this.togglePopover)
          elm.addEventListener('mouseleave',this.togglePopover)
          break
        case 'click':
          elm.addEventListener('click',this.togglePopover)
          window.addEventListener('keydown',this.keydownHandler)
          break
      }
     
      this.elm = elm
    },

    keydownHandler(e) {
      if (e.keyCode === 27) {
        this.pos = null
      }
    },

    togglePopover(e) {
      e.stopPropagation()
      if (!this.pos) {
        this.pos = calculatePosition(this.elm)
        this.visible = true
      } else {
        this.visible = false
      }
    },

    // reset pos after transition done
    handleAfterLeave() {
      this.pos = null
    },
  },
}
</script>
