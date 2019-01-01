<template>
  <div class="test-check-box">
    <div>
      <p>isChecked: {{ isChecked }}</p>
      <w-check-box v-model="isChecked" label='check'/>
    </div>
    <hr><p/>
    <div>
      <p>selectedCitys: {{ selectedCitys.toString() }}</p>
      <w-check-box-group v-model="selectedCitys" @change="changeHandler">
        <w-check-box label='NewYork'/>
        <w-check-box label='London'/>
        <w-check-box label='Hongkong'/>
      </w-check-box-group>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: true,
      selectedCitys: ['NewYork'],
      checkedNames: []
    }
  },
  methods: {
    changeHandler(val) {
      // console.log('test',val)
    }
  }
}
</script>

