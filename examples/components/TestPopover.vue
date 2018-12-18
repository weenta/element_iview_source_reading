<template>
  <div class="test-popover">
    <w-popover :content='content1' trigger='click'>
      <span slot="reference" class="box1">click</span>
    </w-popover>
    <w-popover :content='content1' trigger='click'>
      <span slot="reference" class="box1">click2</span>
    </w-popover>
    <w-popover :content='content2'>
      <span slot="reference" class="box2">hover absolute</span>
    </w-popover>
    <w-popover :content='content2'>
      <span slot="reference" class="box3">hover fixed</span>
    </w-popover>
    
    <div class="container">
      <span>fixed container, no padding, no margin</span>
      <w-popover :content='content2'>
        <span slot="reference" class="box4">hover parent fixed</span>
      </w-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popover',
  data() {
    return {
      content1: 'hello popover hello popover hello popover hello popover ',
      content2: 'hello popover hover',
    }
  }
}
</script>

<style scoped>
.test-popover {
  padding: 300px;
  background: #f0f1f2;
  position: relative;
  height: 1500px;
}

.box4,
.box3,
.box2,
.box1,
.box {
  display: inline-block;
  text-align: center;
  background: blue;
  color: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px 30px;
}

.box1 {
  margin: 20px;
}

.box2 {
  position: absolute;
  top: 100px;
  left: 50px;
}
.box3 {
  position: fixed;
  top: 200px;
  right: 150px;
}

.container {
  width: 500px;
  height: 300px;
  background: aqua;
  position: fixed;
  top: 500px;
  left: 50px;
}
.box4 {
  position: absolute;
  top: 150px;
  left: 200px;
}
</style>

