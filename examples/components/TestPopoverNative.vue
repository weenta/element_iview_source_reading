<template>
  <div class="wrapper">
    <div id="pop" class="popover">
      <div :style="dotStyle" class="dot"/>
      <div :style="dotStyle2" class="dot"/>
      <div :style="dotStyle3" class="dot"/>
      <span ref="btn1" class="btn" @click="clickHandler">not fixed</span>
      <span ref="btn2" class="btn2" @click="clickHandler2">fixed</span>
      <!-- 父元素 fixed -->
      <div class="box-parent">
        <span ref="btn3" class="btn3" @click="clickHandler3">parent fixed</span>
      </div>
    </div>
  </div>
</template>
<script>
var root = window
export default {
  name: 'PopoverNative',
  data() {
    return {
      elementRect: null,
      elementRect2: null,
      elementRect3: null,
      position1: null,
      position2: null,
      position3: null,
      rect1: null,
      rect2: null,
      rect3: null,
    }
  },

  computed: {
    // 居中显示dot
    dotStyle() {
      let rect = this.rect1
      if (rect) {
        return `top:${rect.top - 10}px; left: ${rect.left + rect.width / 2 - 5}px; visibility:visible; position:${rect.position}`
      }
      return ''
    },

    dotStyle2() {
      let rect = this.rect2
      if (rect) {
        return `top:${rect.top - 10}px; left: ${rect.left + rect.width / 2 - 5}px; visibility:visible; position:${rect.position}`
      }
      return ''
    },

    dotStyle3() {
      let rect = this.rect3
      if (rect) {
        return `top:${rect.top - 10}px; left: ${rect.left + rect.width / 2 - 5}px; visibility:visible; position:${rect.position}`
      }
      return ''
    }
  },

  methods: {
    // position static
    clickHandler() {
      let btn = this.$refs.btn1
      this.rect1 = this._computedRect(btn)
      console.log(this.rect1)
    },

    // position fixed
    clickHandler2() {
      let btn = this.$refs.btn2
      this.rect2 = this._computedRect(btn)
    },

    // parent position fixed
    clickHandler3() {
      let btn = this.$refs.btn3
      let rect = this._computedRect(btn)
      this.rect3 = rect
    },

    // 计算popover位置
    _computedRect(element) {
      let position = this.getPosition(element)
      let offsetParent = this.getOffsetParent(element)
      let rect
      if (position === 'fixed' && offsetParent !== document.body) {
        let eleRect = this.getRect(element)
        let parentRect = this.getRect(offsetParent)
        rect = Object.assign({},parentRect)
        rect.left = eleRect.left - eleRect.width / 2
        rect.top = rect.top + eleRect.top
      } else {
        rect = this.getRect(element)
      }
      rect.position = position
      return rect
    },

    // 获取popover内元素的位置信息
    getRect(ele) {
      var elementRect = {
        width: ele.offsetWidth,
        height: ele.offsetHeight,
        left: ele.offsetLeft,
        top: ele.offsetTop
      }
      return elementRect
    },

    // 获取otuerSize
    getOuterSizes(element) {
      var styles = root.getComputedStyle(element)
      var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
      var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight)
      var result = { width: element.offsetWidth + y, height: element.offsetHeight + x }
      return result
    },
    
    // 获取css position属性信息 fixed or absolute
    getPosition(element) {
      var isParentFixed = this.isFixed(element)
      return isParentFixed ? 'fixed' : 'absolute'
    },

    // 判断元素是否position: fixed
    isFixed(element) {
      if (element === root.document.body) {
        return false
      }
      if (this.getStyleComputedProperty(element, 'position') === 'fixed') {
        return true
      }
      // 如果有父元素 继续判断
      return element.parentNode ? this.isFixed(element.parentNode) : element
    },

    getStyleComputedProperty(element, property) {
      var css = root.getComputedStyle(element, null)
      return css[property]
    },

    getOffsetParent(element) {
      var offsetParent = element.offsetParent
      return offsetParent === root.document.body || !offsetParent ? root.document.body : offsetParent
    }

  },
  
}
</script>

<style scoped>
.wrapper {
  padding: 100px;
  height: 1500px;
  position: relative;
}
.popover {
  position: relative;
  background: #00ffff;
  padding: 100px;
}
.btn3,
.btn2,
.btn {
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
}

.btn {
  background: blue;
  position: absolute;
  top: 60px;
  right: 0;
  margin: 20px;
}

.btn2 {
  background: green;
  position: fixed;
  top: 200px;
  left: 100px;
}

.btn3 {
  background: orange;
  margin: 50px;
}

.dot {
  width: 10px;
  height: 10px;
  background: red;
  z-index: 100;

}

.box-parent {
  width: 400px;
  height: 200px;
  background: aquamarine;
  position: fixed;
  top: 500px;
  left: 100px;
}
</style>
