<template>
  <ul class="home">
    <!-- eslint-disable-next-line -->
    <li v-for='(item,idx) in componentItems' :key="idx" class="home-item" @click="jump(item.path)">{{ item.name }}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      
      componentItems: [
        {
          name: 'button',
          path: '/testbutton'
        },
        {
          name: 'notification',
          path: '/testnotification'
        },
        {
          name: 'loading',
          path: '/testloading'
        },
        {
          name: 'test-jsx',
          path: '/testjsx'
        },
        {
          name: 'tool-tips',
          path: '/testtips'
        },
        {
          name: 'popover-native',
          path: '/testpopovernative'
        },
        {
          name: 'popover',
          path: '/testpopover'
        },
        {
          name: 'pagenation',
          path: '/testpagination'
        },
        
        {
          name: 'table',
          path: '/testtable'
        },
        {
          name: 'table2',
          path: '/testtable2'
        },
        {
          name: 'messageBox',
          path: '/testmessagebox'
        },
        {
          name: 'switch',
          path: '/testswitch'
        },
        {
          name: 'radio',
          path: '/testradio'
        },
        
        {
          name: 'checkbox',
          path: '/testcheckbox'
        },
        {
          name: 'checkbox2',
          path: '/testcheckbox2'
        },
        {
          name: 'input',
          path: '/testinput'
        },
        {
          name: 'select',
          path: '/testselect'
        },
        
        {
          name: 'slider',
          path: '/testslider'
        },
        
      ]
    }
  },
  methods: {
    jump(path) {
      this.$router.push({path})
    }
  }
}
</script>

<style scoped>
.home-item {
  padding: 5px 0;
  cursor: pointer;
}
</style>

