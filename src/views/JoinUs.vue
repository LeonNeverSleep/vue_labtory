<template>
  <div class="join">
    <div class="header"><span>当前位置: 首页 > 加入我们</span></div>
    <div class="mainSearch">
      <span>加入我们</span>
      <hr />
      <div class="item">
        <li>
          博士后招聘&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            class="time"
            >2022-09-01</span
          >
        </li>
      </div>
      <div class="item">
        <li>
          研究生招生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            class="time"
            >2022-09-01</span
          >
        </li>
      </div>
      <div class="item">
        <li>
          本科生招生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            class="time"
            >2022-09-01</span
          >
        </li>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>

<style>
.item {
  margin-left: 15%;
}
.item li {
  font-size: 30px;
  color: rgb(20, 50, 120);
}
.item li span {
  color: gray;
  font-size: 25px;
}
</style>