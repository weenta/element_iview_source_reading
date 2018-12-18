import Vue from 'vue'

/* eslint-disable-next-line */
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/
const root = window

// 转换驼峰法 font-size => fontSize
const camelCase = function(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

// 获取dom的style值
export const getStyle = function(element, styleName) {
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '')
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}

// 添加class
export function addClass(el, cls) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

export function hasClass(el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

export function removeClass(el, cls) {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

const trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

// 计算popover位置
export function calculatePosition(element) {
  let positionAttr = getPosition(element)
  let offsetParent = getOffsetParent(element)
  let pos
  if (positionAttr === 'fixed' && offsetParent !== document.body) {
    let eleRect = getRect(element)
    let parentRect = getRect(offsetParent)
    pos = Object.assign({},parentRect)
    pos.left = eleRect.left - eleRect.width / 2
    pos.top = pos.top + eleRect.top
  } else {
    pos = getRect(element)
  }
  pos.position = positionAttr
  return pos
}

// 获取css position属性信息 fixed or absolute
const getPosition = function(element) {
  var isParentFixed = isFixed(element)
  return isParentFixed ? 'fixed' : 'absolute'
}

// 判断元素是否position: fixed
const isFixed = function(element) {
  if (element === root.document.body) {
    return false
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true
  }
  // 如果有父元素 继续判断
  return element.parentNode ? isFixed(element.parentNode) : element
}

const getOffsetParent = function(element) {
  var offsetParent = element.offsetParent
  return offsetParent === root.document.body || !offsetParent ? root.document.body : offsetParent
}

const getStyleComputedProperty = function(element, property) {
  var css = root.getComputedStyle(element, null)
  return css[property]
}

// 获取popover内元素的位置信息
export function getRect(element) {
  var rect = {
    width: element.offsetWidth,
    height: element.offsetHeight,
    left: element.offsetLeft,
    top: element.offsetTop
  }
  return rect
}

// 获取element的width height
// v-show动画完成前，getRect返回 0 0 0 0的情况下使用
export function getOuterSizes(element) {
  // NOTE: 1 DOM access here
  var _display = element.style.display, _visibility = element.style.visibility
  element.style.display = 'block'; element.style.visibility = 'hidden'

  // original method
  var styles = root.getComputedStyle(element)
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight)
  var result = { width: element.offsetWidth + y, height: element.offsetHeight + x }

  // reset element styles
  element.style.display = _display; element.style.visibility = _visibility
  return result
}