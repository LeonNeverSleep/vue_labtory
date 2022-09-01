<template>
  <div class="group">
    <div class="header"><span>当前位置: 首页 > 组员介绍</span></div>
    <div class="mainSearch">
      <span>导师介绍</span>
      <hr />
      <div class="contentGroup">
        <div class="leftGroup">
          <img src="../assets/logo.png" alt="" />
        </div>
        <div class="rightGroup">
          <h1>张三</h1>
          <h3>北京大学物理组</h3>
          <h3>
            diofhoiegioeroifheroijgoirigerowhguewsdfnijuirnuivne<br />
            dsoiafhoaidshfieadnfieriofjierohfierojorieheruighuerhg<br />
            fiuewbfuoehwuoqawhuifhuieqrhfuiehquifherhinjrewngiwergr<br />
            diofhoiegioeroifheroijgoirigerowhguewsdfnijdirnuivne<br />
            dsoiafhoaidshfieadnfieriofjierohfierojorieheruighuerhg<br />
            diofhoiegioeroifheroijgoirigerowhguewsdfniruirnuivne<br />
            dsoiafhoaidshfieadnfieriofjierohfierojorieferuighuerhg<br />
          </h3>
        </div>
      </div>
    </div>
    <div class="mainSearch">
      <span>当前组员</span>
      <hr />
      <div class="testContentGroup">
        <div class="groupItem">
          <img alt="Vue logo" src="../assets/logo.png" /><br />
          <span>李四</span><br />
          <span>博士</span>
        </div>
        <div class="groupItem">
          <img alt="Vue logo" src="../assets/logo.png" /><br />
          <span>李四</span><br />
          <span>博士</span>
        </div>
        <div class="groupItem">
          <img alt="Vue logo" src="../assets/logo.png" /><br />
          <span>李四</span><br />
          <span>博士</span>
        </div>
        <div class="groupItem">
          <img alt="Vue logo" src="../assets/logo.png" /><br />
          <span>李四</span><br />
          <span>博士</span>
        </div>
        <div class="groupItem">
          <img alt="Vue logo" src="../assets/logo.png" /><br />
          <span>李四</span><br />
          <span>博士</span>
        </div>
      </div>
      <div class="testContentGroup">
        <div class="groupItem">
          <img alt="Vue logo" src="../assets/logo.png" /><br />
          <span>李四</span><br />
          <span>博士</span>
        </div>
        <div class="groupItem">
          <img alt="Vue logo" src="../assets/logo.png" /><br />
          <span>李四</span><br />
          <span>博士</span>
        </div>
        <div class="groupItem">
          <img alt="Vue logo" src="../assets/logo.png" /><br />
          <span>李四</span><br />
          <span>博士</span>
        </div>
        <div class="groupItem">
          <img alt="Vue logo" src="../assets/logo.png" /><br />
          <span>李四</span><br />
          <span>博士</span>
        </div>
        <div class="groupItem">
          <img alt="Vue logo" src="../assets/logo.png" /><br />
          <span>李四</span><br />
          <span>博士</span>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br /><br />
  <br /><br /><br /><br />
  <br /><br /><br /><br />
  <br /><br /><br /><br />
  <br /><br /><br /><br />
  <br /><br /><br /><br />
  <br /><br /><br /><br />
  <br /><br /><br /><br />
  <Footer />
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>

<style>
.contentGroup {
  position: relative;
}
.leftGroup img {
  margin-top: 5%;
  margin-left: 20%;
  border-radius: 100%;
  border: 2px solid rgb(20, 50, 120);
  width: 300px;
  height: 300px;
}
.rightGroup {
  position: absolute;
  top: 5%;
  left: 38%;
}
.rightGroup h3 {
  margin-right: 30%;
  color: rgb(185, 183, 183);
}
.testContentGroup {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.testContentGroup img {
  border: 2px solid rgb(20, 50, 120);
  border-radius: 100%;
}
.testContentGroup div span {
  display: inline-block;
  text-align: center;
  margin-left: 60px;
  font-size: 40px;
  font-weight: bold;
  color: rgb(20, 50, 120);
}
.groupItem {
  margin: 100px;
}
</style>