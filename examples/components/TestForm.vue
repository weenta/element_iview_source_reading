<template>
  <div>
    <w-form ref='form' v-model="form" :rules='rules' label-width='120px' label-position='center'>
      <w-form-item label='name' prop='name'>
        <w-input v-model='form.name' placeholder='input name'/>
      </w-form-item>
      <w-form-item label='age' prop='age'>
        <w-input v-model='form.age' placeholder='input age'/>
      </w-form-item>
      <w-form-item label='favoriteColor' prop='color'>
        <w-select v-model='form.color'>
          <w-option label='blue' value='1'/>
          <w-option label='green' value='2'/>
          <w-option label='red' value='3'/>
        </w-select>
      </w-form-item>
      <w-form-item>
        <w-button size='small' type='primary' @click="submitHandler">submit</w-button>
      </w-form-item>
    </w-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        color: '',
        age: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        color: [{required: true, message: '请选择颜色',trigger: 'change'}]
      }
    }
  },
  methods: {
    submitHandler() {
      let valid = this.$refs.form.validate()
      if (valid) {
        console.log('submitHandler')
      } else {
        console.log('not valid')
      }
    }
  }
}
</script>

