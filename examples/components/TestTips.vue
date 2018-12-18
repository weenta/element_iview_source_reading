<template>
  <div class="test-tips">
    <w-tooltip :title='title'>
      <span>not finished yet</span>
    </w-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'props-title'
    }
  }
}
</script>

