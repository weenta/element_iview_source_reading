<template>
  <ul 
    class="w-pager"
    @click="onPagerClick"
  >
    <li
      :class="[{'disabled':disabledPrev},'prev-page']"
    >&lt;</li>
    <li
      :class="[currentPage === 1 ? 'current-page' : '']"
    >1</li>
    <li
      v-if='showPrevMore'
    >...</li>
    <li 
      v-for='item in pagers' 
      :key="item"
      :class="[currentPage === item ? 'current-page' : '']"
    >{{ item }}</li>
    <li
      v-if='showNextMore'
    >...</li>
    <li 
      v-if="totalPage>0" 
      :class="[currentPage === totalPage ? 'current-page' : '']"
    >{{ totalPage }}</li>
    <li 
      :class="[{'disabled':disabledNext},'next-page']"
    >&gt;</li>
  </ul>
</template>
<script>
export default {
  name: 'WPagination',
  props: {
    total: {
      style: Number,
      default: 0,
    },
    size: {
      style: Number,
      default: 10,
    },
    
  },
  data() {
    return {
      currentPage: 1,
      showPrevMore: false,
      showNextMore: false,
    }
  },
  computed: {
    totalPage() {
      let total = Math.ceil(this.total / this.size)
      return total > 1 ? total : 0
    },

    pagers() {
      // 奇数， 当前最多显示的页码数量
      const visiblePagerNum = 7
      const halfVisiblePagerNum = (visiblePagerNum - 1) / 2
      const arr = []
      let showPrevMore = false
      let showNextMore = false
      let currentPage = this.currentPage
      let totalPage = this.totalPage
      
      if (totalPage > visiblePagerNum) {
        if (currentPage > visiblePagerNum - halfVisiblePagerNum) {
          showPrevMore = true
        }
        if (currentPage < totalPage - halfVisiblePagerNum) {
          showNextMore = true
        }
      }

      if (showPrevMore && !showNextMore) {
        let startPage = totalPage - (visiblePagerNum - 2)
        for (let i = startPage; i < totalPage; i++) {
          arr.push(i)
        } 
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < visiblePagerNum;i ++) {
          arr.push(i)
        }
      } else if (showPrevMore && showNextMore) {
        let offset = Math.floor(visiblePagerNum / 2) - 1
        for (let i = currentPage - offset; i <= currentPage + offset; i++ ) {
          arr.push(i)
        }
      } else {
        for (let i = 2; i < totalPage; i++) {
          arr.push(i)
        }
      }

      /* eslint-disable vue/no-side-effects-in-computed-properties */
      this.showPrevMore = showPrevMore
      this.showNextMore = showNextMore
      return arr
    },

    disabledNext() {
      return this.currentPage === this.totalPage || this.totalPage === 0 ? true : false
    },

    disabledPrev() {
      return this.currentPage === 1 ? true : false
    }
  },
  methods: {
    onPagerClick(e) {
      let target = e.target
      if (target.tagName === 'UL') return
      let newPage = Number(target.textContent)

      if (isNaN(newPage) && target.className.indexOf('next-page') > -1) {
        if (this.currentPage < this.totalPage ) newPage = this.currentPage + 1
      }
      if (isNaN(newPage) && target.className.indexOf('prev-page') > -1) {
        if (this.currentPage > 1) newPage = this.currentPage - 1
      }

      if (newPage !== this.currentPage && !isNaN(newPage)) {
        this.currentPage = newPage
        this.$emit('change',newPage)
      }
    }
  }
}
</script>
