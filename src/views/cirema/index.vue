<template>
  <div id="main">
    <Header title="喵喵影院" />
    <div id="content">
        <div class="cirema_menu">
            <div class="city_switch">
              全城
            </div>
            <div class="city_switch">
              品牌
            </div>
            <div class="city_switch">
              特色
            </div>
        </div>
        <CiList />
    </div>
    <TabBar />
  </div>
</template>

<script>
// 引入局部组件
import Header from "@/components/header";
import TabBar from "@/components/TabBar";
import CiList from "@/components/ciList";

export default {
  name: "cirema",
  // 注册组件
  components: {
    Header,
    TabBar,
    CiList
  }
};
</script>
<style>
    #content .cirema_menu{display: flex; justify-content: space-between;padding: 0 10px; height: 45px;align-items: center;font-size: 15px;font-weight: 700;color: #666;border-bottom: 1px solid #e6e6e6}
    .cirema_menu .city_switch {margin:0 12px;width: 80px;height: 100%;line-height: 45px;text-align: center}
</style>