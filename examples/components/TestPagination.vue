<template>
  <div class="test-pagination">
    <p>
      <span>
        total:<input v-model='total' type="number">
      </span>
      <span>pageSize: 10</span>
      <span>currentPage: {{ currentPage }}</span>
    </p>
    <w-pagination :total='total' @change="changePage"/>
  </div>
</template>
<script>
export default {
  name: 'Pagenation',
  data() {
    return {
      currentPage: 1,
      total: 120
    }
  },

  methods: {
    changePage(page) {
      this.currentPage = page
    }
  }
}
</script>

<style scoped>
.test-pagination {
  background: #f0f1f2;
  padding: 100px 20px;
}
span {
  padding: 10px;
}
</style>

