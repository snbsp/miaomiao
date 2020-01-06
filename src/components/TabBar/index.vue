<template>
  <footer class="footer">
    <ul>
      <router-link tag="li" to="/movie">
        <!-- <i class="iconfont icon-duanying"></i> -->
        <img src="../../assets/imgs/dianying.png" alt />
        <p>电影</p>
      </router-link>
      <router-link tag="li" to="/cirema">
        <img src="../../assets/imgs/yingyuan.png" alt />
        <p>影院</p>
      </router-link>
      <router-link tag="li" to="/mine">
        <img src="../../assets/imgs/mine.png" alt />
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "footer"
};
</script>
<style scoped>
.footer {
  width: 100%;
  height: 50px;
  background-color: white;
  border-top: 2px solid #ebe8e3;
  position: fixed;
  left: 0;
  bottom: 0;
}
.footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
.footer ul li {
  flex: 1;
  height: 40px;
}
.footer ul li::after {
  color: #f03d37;
}
.footer ul i {
  font-size: 20px;
}
.footer ul img {
  font-size: 20px;
  width: 20px;
  height: 20px;
  margin: 0 auto;
}
.footer ul p {
  font-size: 12px;
  line-height: 18px;
}
.footer ul li.router-link-active {
  color: #f03d37;
}
</style>