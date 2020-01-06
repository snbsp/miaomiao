<template>
  <div id="main" >
    <Header  title="我的喵喵"/>
    <div id="content">
        <Login />
    </div>
    <TabBar />
  </div>
</template>

<script>
// 引入局部组件
import Header from "@/components/header";
import TabBar from "@/components/TabBar";
import Login from "@/components/login";

export default {
  name: "mine",
  // 注册组件
  components: {
    Header,
    TabBar,
    Login
  }
};
</script>
<style>
</style>