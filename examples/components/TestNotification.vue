<template>
  <div class="test-notication">
    <w-button type='primary' @click='notifyHandler'>notification</w-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seed: 1,
      msg: 'hello-',
    }
  },
  methods: {
    notifyHandler() {
      this.$notify({
        message: this.msg + this.seed
      })
      this.seed ++
    }
  }
}
</script>

