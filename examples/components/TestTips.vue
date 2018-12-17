<template>
  <div class="test-tips">
    <w-tooltip :title='title'>
      <w-button type='primary'>上方</w-button>
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

