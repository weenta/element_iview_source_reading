<template>
  <ul class="test-notication">
    <li>
      <w-button @click='notifyDefault'>notification default</w-button>
    </li>
    <li>
      <w-button @click='notifySuccess'>notification Success</w-button>
    </li>
    <li>
      <w-button @click='notifyError'>notification Error</w-button>
    </li>
    <li>
      <w-button @click='notifyWarn'>notification Warn</w-button>
    </li>
    <li>
      <w-button @click='notifyInfo'>notification Info</w-button>
    </li>
    <br>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      seed: 1,
      msg: 'notification-',
    }
  },
  
  methods: {
    notifyDefault() {
      this.$notify({
        title: 'default',
        message: this.msg + this.seed,
      })
      this.seed ++
    },

    notifySuccess() {
      this.$notify({
        title: 'success' ,
        message: this.msg + this.seed,
        type: 'success'
      })
      this.seed ++
    },

    notifyError() {
      this.$notify({
        title: 'Error',
        message: this.msg + this.seed,
        type: 'error'
      })
      this.seed ++
    },

    notifyWarn() {
      this.$notify({
        title: 'warning',
        message: this.msg + this.seed,
        type: 'warning'
      })
      this.seed ++
    },

    notifyInfo() {
      this.$notify({
        title: 'info',
        message: this.msg + this.seed,
        type: 'info'
      })
    }
  }
}
</script>
<style scoped>
li {
  margin: 10px 0;
}
</style>

