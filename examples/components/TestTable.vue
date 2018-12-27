<template>
  <div class="test-table">
    <w-table :data='list'>
      <w-table-column label='姓名' prop='name' width='100'/>
      <w-table-column label='年龄' prop='age' width='50'/>
      <w-table-column label='性别' prop='gender' width='100'/>
      <w-table-column label='电话1' prop='phone' width='150'/>
      <w-table-column label='操作' width='150'>
        <template slot-scope="scope">
          <span>编辑</span>
        </template>
      </w-table-column>
    </w-table>
  </div>
</template>
<script>
export default {
  name: 'Table',
  data() {
    return {
      list: [
        {
          name: '张三',
          age: 20,
          gender: 'male',
          phone: '13900000000'
        },
        // {
        //   name: 'Jhon',
        //   age: 23,
        //   gender: 'male',
        //   phone: '13966666666'
        // },
        // {
        //   name: 'Lucy',
        //   age: 22,
        //   gender: 'female',
        //   phone: '13922222222'
        // },
        // {
        //   name: 'Dasy',
        //   age: 24,
        //   gender: 'female',
        //   phone: '13955555555'
        // },
        // {
        //   name: 'Jane',
        //   age: 24,
        //   gender: 'female',
        //   phone: '13955555555'
        // },
      ]
    }
  }
}
</script>

<style scoped>
.test-table {
  width: 900px;
  height: 700px;
  padding: 10px;
}
</style>
