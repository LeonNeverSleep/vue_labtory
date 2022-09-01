<template>
  <div class="activity">
    <div class="header"><span>当前位置: 首页 > 组内活动</span></div>
    <div class="mainSearch">
      <span>组内活动</span>
      <hr />
      <div class="itemGroup">
        <div class="activityItem">
          <img src="@/assets/aaa.png" alt="" />
          <span id="title">2022年九月一号上海滩合照纪念</span>
        </div>
        <div class="activityItem">
          <img src="@/assets/aaa.png" alt="" />
          <span id="title">2022年九月一号上海滩合照纪念</span>
        </div>
        <div class="activityItem">
          <img src="@/assets/aaa.png" alt="" />
          <span id="title">2022年九月一号上海滩合照纪念</span>
        </div>
        <div class="activityItem">
          <img src="@/assets/aaa.png" alt="" />
          <span id="title">2022年九月一号上海滩合照纪念</span>
        </div>
      </div>
      <div class="itemGroup">
        <div class="activityItem">
          <img src="@/assets/aaa.png" alt="" />
          <span id="title">2022年九月一号上海滩合照纪念</span>
        </div>
        <div class="activityItem">
          <img src="@/assets/aaa.png" alt="" />
          <span id="title">2022年九月一号上海滩合照纪念</span>
        </div>
        <div class="activityItem">
          <img src="@/assets/aaa.png" alt="" />
          <span id="title">2022年九月一号上海滩合照纪念</span>
        </div>
        <div class="activityItem">
          <img src="@/assets/aaa.png" alt="" />
          <span id="title">2022年九月一号上海滩合照纪念</span>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>

<style>
.itemGroup {
  margin-left: 15%;
  margin-top: 3%;
  display: flex;
}
.activityItem {
  margin-left: 1%;
  width: 400px;
  height: 200px;
  border: 1px solid rgb(20, 50, 120);
}
.activityItem img {
  width: 400px;
  height: 200px;
}
#title {
  display: inline-block;
  font-size: 20px;
}
</style>