<template>
  <div class="test-pagination">
    <w-pagination total='94' @change="changePage"/>
  </div>
</template>
<script>
export default {
  name: 'Pagenation',
  methods: {
    changePage(page) {
      console.log('changePage',page)
    }
  }
}
</script>

<style scoped>
.test-pagination {
  background: #f0f1f2;
  padding: 100px 20px;
}
</style>

