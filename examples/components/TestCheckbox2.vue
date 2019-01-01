<template>
  <div>
    <p>isChecked: {{ isChecked }}</p>
    <t-checkbox v-model='isChecked' label='check'/>
    <p/>
    <hr>
    <p>selectedCitys: {{ selectedCitys.toString() }}</p>
    <t-checkbox-group v-model='selectedCitys' @change="changeHandler">
      <t-checkbox label='NewYork'/>
      <t-checkbox label='London'/>
      <t-checkbox label='Hongkong'/>
    </t-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: true,
      selectedCitys: ['NewYork','London']
    }
  },
  watch: {
    selectedCitys(val) {
      // console.log('test-',val)
    }
  },
  methods: {
    changeHandler(val) {
      // console.log('changeHandler',val)
    }
  }
}
</script>

