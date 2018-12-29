<template>
  <div class="test-switch">
    <p>isActive: {{ isOn }}</p>
    <w-switch v-model='isOn' @change="changeHandler"/>
    <p/>
    <div>
      active-color: <input v-model="activeColor" value="activeColor" type="text">
      inactive-color: <input v-model="inactiveColor" value="inactiveColor" type="text">
    </div>
    <w-switch v-model='isOn2' :active-color='activeColor' :inactive-color='inactiveColor' />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOn: false,
      isOn2: true,
      activeColor: '#00ff00',
      inactiveColor: '#ff0000'
    }
  },
  methods: {
    changeHandler(val) {
      console.log('changeHandler-outside',this.isOn)
    }
  }
}
</script>
