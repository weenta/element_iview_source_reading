<template>
  <div class="test-table">
    <t-table :data='list' height='300'>
      <t-table-column prop='name' label='姓名' width='100'/>
      <t-table-column prop='age' label='年龄' />
      <t-table-column prop='phone' label='手机' width='150'/>
      <t-table-column prop='intro' label='介绍' min-width='150'/>
      <t-table-column label='操作' width ='200'>
        <template slot-scope="scope">
          <w-button type='primary' size='mini' @click="checkHanlder(scope.row)">查看</w-button>
        </template>
      </t-table-column>
    </t-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: 'Tom',
          age: 25,
          phone: '13988887777',
          intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quaerat?'
        },
        {
          name: 'Lucy',
          age: 24,
          phone: '13988889999',
          intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quaerat?'
        },
        {
          name: 'Jane',
          age: 24,
          phone: '13988889999',
          intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quaerat?'
        },
        {
          name: 'Tom',
          age: 25,
          phone: '13988887777',
          intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quaerat?'
        },
        {
          name: 'Lucy',
          age: 24,
          phone: '13988889999',
          intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quaerat?'
        },
        {
          name: 'Jane',
          age: 24,
          phone: '13988889999',
          intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quaerat?'
        },
        {
          name: 'Tom',
          age: 25,
          phone: '13988887777',
          intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quaerat?'
        },
        {
          name: 'Lucy',
          age: 24,
          phone: '13988889999',
          intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quaerat?'
        },
        {
          name: 'Jane',
          age: 24,
          phone: '13988889999',
          intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quaerat?'
        },
      ]
    }
  },
  methods: {
    checkHanlder(row) {
      this.$notify({
        title: 'default',
        message: row.name
      })
    }
  }
}
</script>

