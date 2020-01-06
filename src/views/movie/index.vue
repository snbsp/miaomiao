<template>
  <div id="main">
    <Header title="喵喵电影" />
    <div id="content">
      <div class="monie_menu">
        <router-link tag="div" class="city_menu" to="/movie/city">
          <span>大连</span>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/newPlaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/commingSoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search">
          <span>搜索</span>
        </router-link>
      </div>
      <!-- 二级路由渲染 -->
      <keep-alive>
        <router-view /> 
      </keep-alive>
    </div>
    <TabBar />
  </div>
</template>

<script>
// 引入局部组件
import Header from "@/components/header";
import TabBar from "@/components/TabBar";

export default {
  name: "movie",
  // 注册组件
  components: {
    Header,
    TabBar
  }
};
</script>
<style >
#content .monie_menu {
  display: flex;
  height: 45px;
  line-height: 45px;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  color: #666;
  font-weight: 700;
  width: 100%;
  font-size: 15px;
}
.monie_menu .hot_swtich {
  display: flex;
  height: 100%;
}
.monie_menu .hot_item {
  width: 80px;
  text-align: center;
  margin: 0 12px;
}
.monie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
.monie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}

.monie_menu .city_menu {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.monie_menu .city_menu.active {
  color: #ef4238;
  border-bottom: 1px solid #ef4238;
}
.monie_menu .city_menu.router-link-active{
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
.search {
  margin-right: 20px;
}
.monie_menu .search.router-link-active{
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
</style>