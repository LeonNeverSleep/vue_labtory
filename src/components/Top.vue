<template>
  <div class="topContainer">
    <div class="top">
      <img src="@/assets/logo.png" alt="" />
      <h1>北京大学物理系实验室</h1>
      <h2>XXX课题研究组</h2>
    </div>
    <br />
    <div class="bannerContainer">
      <ul>
        <li
          :class="currentPath == '/' || currentPath == '/home' ? 'active' : ''"
        >
          <a href="/#/home">首页</a>
        </li>
        <li :class="currentPath == '/search' ? 'active' : ''">
          <a href="/#/search">研究方向</a>
        </li>
        <li :class="currentPath == '/news' ? 'active' : ''">
          <a href="/#/news">课题组新闻</a>
        </li>
        <li :class="currentPath == '/result' ? 'active' : ''">
          <a href="/#/result">成果及论文</a>
        </li>
        <li :class="currentPath == '/group' ? 'active' : ''">
          <a href="/#/group">组员介绍</a>
        </li>
        <li :class="currentPath == '/activity' ? 'active' : ''">
          <a href="/#/activity">组内活动</a>
        </li>
        <li :class="currentPath == '/join' ? 'active' : ''">
          <a href="/#/join">加入我们</a>
        </li>
        <li :class="currentPath == '/contact' ? 'active' : ''">
          <a href="/#/contact">联系我们</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.path);
let currentPath = computed(() => {
  return route.path;
});
</script>

<style>
.topContainer {
  margin-top: 2%;
}
.top {
  width: 100%;
  margin-left: 16%;
}
.top img {
  width: 150px;
  height: 150px;
  margin-right: 20px;
  float: left;
}
.top h1 {
  display: inline-block;
  margin-top: 20px;
  margin-bottom: -20px;
}
.top h2 {
  color: gray;
}
.bannerContainer {
  margin-top: 1%;
  background-color: rgb(20, 50, 120);
}
.bannerContainer ul {
  margin-left: 10%;
  display: inline-block;
  padding: 0;
}
.topContainer ul li {
  width: 200px;
  height: 40px;
  background-color: rgb(20, 50, 120);
  float: left;
  list-style: none;
  font-size: 25px;
  text-align: center;
  line-height: 60px;
}
.topContainer ul li a {
  width: 200px;
  height: 60px;
  text-decoration: none;
  color: #ffffff;
}
.active {
  width: 200px !important;
  height: 60px !important;
  background-color: rgb(100, 116, 153) !important;
  float: left !important;
  list-style: none !important;
  font-size: 25px !important;
  text-align: center !important;
  line-height: 60px !important;
}
</style>