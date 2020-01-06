<template>
  <header class="header">
    <h1>{{title}}</h1>
    <!-- <h1>喵喵影院</h1> -->
  </header>
</template>
<script>
export default {
  name: "Header",
  // 父传子 接收  title
  props: {
    title: {
      type: String,
      default: "喵喵影院"
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  color: #fff;
  background-color: #e54847;
  border-bottom: 1px solid #e54847;
  position: relative;
}
.header h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
.header i {
  position: absolute;
  left: 5px;
  top: 50%;
  font-size: 26px;
  margin-top: -13px;
}
</style>